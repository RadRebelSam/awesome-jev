// Discovery pass: sweep GitHub and npm for candidates, score them, and write the
// result into data/registry.json. Nothing here publishes anything; render.js does
// that, and everything lands in a pull request a human still has to merge.
import { searchRepositories, searchCode, getReadme, getRepo, normalizeRepo } from './lib/github.js';
import { searchNpm } from './lib/npm.js';
import { scoreEntry } from './lib/score.js';
import { categorize } from './lib/categorize.js';
import { readJson, writeJson, loadRegistry, upsert, saveRegistry } from './lib/store.js';
import { writeReviewQueue } from './lib/report.js';
import { decideStatus } from './lib/status.js';
import { log, daysSince, today } from './lib/util.js';

const TOPIC = process.env.TOPIC || 'jev';
const CONFIG_PATH = `topics/${TOPIC}.json`;
const REGISTRY_PATH = `data/registry.json`;
const MANUAL_PATH = `data/manual.json`;
const README_MAX_AGE_DAYS = 30;

const argv = new Set(process.argv.slice(2));
const FORCE = argv.has('--force');
const LIMIT = Number(process.argv.find((a) => a.startsWith('--limit='))?.split('=')[1] || 0);

async function discover(config) {
  const repos = new Map();

  log('searching GitHub repositories');
  for (const query of config.search.repositoryQueries) {
    const items = await searchRepositories(query, config.search.repositorySlices);
    log(`  ${items.length} repos for: ${query}`);
    // A hit from a readme-scoped query already proves the readme mentions the
    // topic, so it earns a readme fetch even when its metadata looks thin.
    const viaReadme = query.includes('in:readme') || query.includes(',readme');
    for (const item of items) {
      const existing = repos.get(item.full_name);
      const entry = existing ?? normalizeRepo(item);
      entry.viaReadme = Boolean(existing?.viaReadme) || viaReadme;
      repos.set(item.full_name, entry);
    }
  }

  for (const query of config.search.codeQueries ?? []) {
    log(`searching code: ${query}`);
    const items = await searchCode(query);
    for (const item of items) {
      const fullName = item.repository?.full_name;
      if (!fullName || repos.has(fullName)) continue;
      const repo = await getRepo(fullName);
      if (repo) repos.set(fullName, normalizeRepo(repo));
    }
  }

  const packages = [];
  if (config.search.npmQueries?.length) {
    log('searching npm');
    for (const pkg of await searchNpm(config.search.npmQueries)) {
      // If the package points at a GitHub repo, index the repo instead: it carries
      // stars, license and push dates that the npm record does not.
      if (pkg.githubRepo && !repos.has(pkg.githubRepo)) {
        const repo = await getRepo(pkg.githubRepo);
        if (repo) {
          repos.set(pkg.githubRepo, normalizeRepo(repo));
          continue;
        }
      }
      if (!pkg.githubRepo) packages.push(pkg);
    }
  }

  return [...repos.values(), ...packages];
}

async function main() {
  const config = readJson(CONFIG_PATH);
  const manual = readJson(MANUAL_PATH, { approve: [], reject: [], pinned: [], overrides: {} });
  const { byId } = loadRegistry(REGISTRY_PATH);

  let candidates = await discover(config);
  if (LIMIT) candidates = candidates.slice(0, LIMIT);
  log(`${candidates.length} candidates discovered`);

  const budget = config.budget ?? {};
  const maxReadmeFetches = budget.maxReadmeFetches ?? 600;
  const readmeFloor = budget.readmeFloor ?? 2;
  const excerptChars = budget.readmeExcerptChars ?? 1500;

  // Best-first, so a truncated run still spends its readme budget on the
  // candidates most likely to belong on the list.
  candidates.sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0));

  let readmeFetches = 0;
  let skipped = 0;
  for (const candidate of candidates) {
    const existing = byId.get(candidate.id);
    const stale = !existing?.readmeFetchedAt || daysSince(existing.readmeFetchedAt) > README_MAX_AGE_DAYS;
    const metaOnly = scoreEntry(candidate, '', config);
    const worthReading =
      !metaOnly.excluded &&
      (candidate.viaReadme || metaOnly.score >= readmeFloor || manual.approve?.includes(candidate.id));

    let readme = existing?.readmeExcerpt ?? '';
    let fetched = false;
    if (candidate.source === 'github' && worthReading && (FORCE || stale) && readmeFetches < maxReadmeFetches) {
      readme = await getReadme(candidate.name);
      readmeFetches++;
      fetched = true;
    }

    const scored = scoreEntry(candidate, readme, config);
    const status = decideStatus({ id: candidate.id, stars: candidate.stars }, scored, manual, config);

    // Low scorers are not stored at all. They cost nothing to rediscover, and
    // keeping them would bloat the registry past the point of reviewable diffs.
    if (status === 'ignored' && !manual.reject?.includes(candidate.id)) {
      skipped++;
      continue;
    }

    const { entry } = upsert(byId, {
      ...candidate,
      readmeExcerpt: readme.slice(0, excerptChars),
      readmeFetchedAt: fetched ? today() : existing?.readmeFetchedAt,
      score: scored.score,
      signals: scored.signals,
      category: categorize(candidate, readme, config),
    });
    entry.status = status;
  }

  const entries = saveRegistry(REGISTRY_PATH, byId);
  const review = writeReviewQueue(entries);
  writeJson('data/stats.json', {
    generatedAt: new Date().toISOString(),
    total: entries.length,
    approved: entries.filter((e) => e.status === 'approved').length,
    review: review.count,
    rejected: entries.filter((e) => e.status === 'rejected').length,
    ignored: entries.filter((e) => e.status === 'ignored').length,
    readmeFetches,
    discarded: skipped,
  });
  log(
    `saved ${entries.length} entries (${readmeFetches} readmes fetched, ${skipped} below the floor, ${review.count} awaiting review)`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
