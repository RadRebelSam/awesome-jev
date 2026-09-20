// Builds the data file the directory site reads. The page itself is static;
// everything it shows comes from here, so a crawl refreshes the site for free.
import { readJson, writeJson, starDelta } from './lib/store.js';
import { daysSince, log } from './lib/util.js';

const TOPIC = process.env.TOPIC || 'jev';
const config = readJson(`topics/${TOPIC}.json`);
const registry = readJson('data/registry.json', { entries: [] });
const manual = readJson('data/manual.json', { pinned: [], overrides: {} });
const triage = readJson('data/triage.json', {});

const titles = Object.fromEntries(config.categories.map((c) => [c.id, c.title]));
titles[config.defaultCategory] = 'Everything else';

const overrides = manual.overrides ?? {};

const entries = registry.entries
  .filter((e) => e.status === 'approved')
  .filter((e) => !e.isArchived)
  .filter((e) => daysSince(e.pushedAt) <= config.thresholds.maxStaleDays)
  .map((entry) => {
    const merged = { ...entry, ...(overrides[entry.id] ?? {}) };
    return {
      name: merged.name,
      url: merged.url,
      description: merged.description || '',
      category: merged.category ?? config.defaultCategory,
      categoryTitle: titles[merged.category] ?? 'Everything else',
      stars: merged.stars ?? 0,
      starsWeek: starDelta(merged, 7),
      language: merged.language ?? null,
      license: merged.license && merged.license !== 'NOASSERTION' ? merged.license : null,
      pushedAt: merged.pushedAt ?? null,
      daysSincePush: daysSince(merged.pushedAt),
      firstSeen: merged.firstSeen ?? null,
      // The two things no other Jev directory can show.
      jev: triage[merged.id]?.noul ?? null,
      exclusive: !merged.discoveredVia?.length,
    };
  })
  .sort((a, b) => b.stars - a.stars || a.name.localeCompare(b.name));

const categories = [...config.categories, { id: config.defaultCategory, title: titles[config.defaultCategory] }]
  .map((c) => ({ id: c.id, title: c.title, count: entries.filter((e) => e.category === c.id).length }))
  .filter((c) => c.count > 0);

writeJson('site/data.json', {
  generatedAt: new Date().toISOString(),
  topic: config.title,
  tagline: config.tagline,
  counts: {
    total: entries.length,
    exclusive: entries.filter((e) => e.exclusive).length,
    judged: entries.filter((e) => e.jev !== null).length,
    reviewQueue: registry.entries.filter((e) => e.status === 'review').length,
  },
  categories,
  entries,
});

log(`site data: ${entries.length} entries, ${categories.length} categories`);
