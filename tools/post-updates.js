// Posts a single update to X when the crawl turned up something worth saying.
// Silence on a quiet day is the point: an automated account that posts filler
// gets muted, and there is no recovering from that.
//
//   node tools/post-updates.js --dry-run     compose and print, send nothing
//   node tools/post-updates.js               create the post in RobinReach
//   node tools/post-updates.js --sample      ignore the thresholds and draft one
//                                            anyway, to see what it writes
//
// site.social.autoPublish is off: every post lands in RobinReach as a draft and
// waits for a person to approve and send it. Turning it on makes them go out
// unattended, which is only reasonable because the copy is a fixed template
// filled from the registry - same data in, same sentence out, no model writing
// prose - and because the bar below means most days produce nothing at all.
import { apiKey, listProfiles, createPost } from './lib/robinreach.js';
import { readJson, writeJson, starDelta } from './lib/store.js';
import { log, today, daysSince } from './lib/util.js';

const argv = new Set(process.argv.slice(2));
const DRY_RUN = argv.has('--dry-run');
// A sample runs the real composer against the real registry; it just ignores the
// bars that normally decide whether today deserves a post at all.
const SAMPLE = argv.has('--sample');

const TOPIC = process.env.TOPIC || 'jev';
const config = readJson(`topics/${TOPIC}.json`);
const social = config.site?.social ?? {};
const SITE = config.site?.url ?? 'https://awesomejev.radrebeldeveloper.com/';
const MIN_STARS_NEW = social.minStarsForNew ?? 25;
const MIN_DELTA = social.minWeeklyDelta ?? 40;
const BRAND_ID = social.brandId;
const AUTO_PUBLISH = social.autoPublish === true;
// The whole back catalogue arrived on the seeding day. None of it is news, and
// without this the first run would announce a random repository as "new".
const SEEDED_ON = social.seededOn ?? '';

const registry = readJson('data/registry.json', { entries: [] });
const triage = readJson('data/triage.json', {});
const posted = readJson('data/posted.json', { ids: [], lastPostedOn: null });

if (!SAMPLE && posted.lastPostedOn === today()) {
  log('already posted today, nothing to do');
  process.exit(0);
}

const listed = registry.entries.filter((e) => e.status === 'approved' && !e.isArchived);
const seen = new Set(posted.ids);

function compose(entry, reason) {
  const verdict = triage[entry.id] ? ` Jev rated it ${triage[entry.id].noul.toFixed(2)}.` : '';
  const description = (entry.description || '').replace(/\s+/g, ' ').trim();
  const lead = reason === 'new'
    ? `New in the Jev index: ${entry.name}`
    : `Climbing fast: ${entry.name}, +${starDelta(entry, 7)} stars this week`;

  // X counts a link as 23 characters whatever its length; 200 for the body
  // leaves room for the two links and a blank line.
  const body = description.length > 150 ? `${description.slice(0, 147)}...` : description;
  return [`${lead}.`, body, `${verdict}`.trim(), '', entry.url, SITE]
    .filter((line, i) => line !== '' || i === 3)
    .join('\n');
}

// Newest first among things worth announcing at all, then the fastest climbers.
const fresh = listed
  .filter((e) => !seen.has(e.id))
  .filter((e) => e.firstSeen && daysSince(e.firstSeen) <= 2)
  .filter((e) => !SEEDED_ON || e.firstSeen > SEEDED_ON)
  .filter((e) => (e.stars ?? 0) >= MIN_STARS_NEW)
  .sort((a, b) => b.stars - a.stars);

const climbing = listed
  .filter((e) => !seen.has(e.id))
  .map((entry) => ({ entry, delta: starDelta(entry, 7) }))
  .filter(({ delta }) => delta >= MIN_DELTA)
  .sort((a, b) => b.delta - a.delta);

const sample = listed
  .filter((e) => !seen.has(e.id) && e.description)
  .sort((a, b) => b.stars - a.stars)[0];

const pick = fresh.length
  ? { entry: fresh[0], reason: 'new' }
  : climbing.length
    ? { entry: climbing[0].entry, reason: 'climbing' }
    : SAMPLE && sample
      ? { entry: sample, reason: 'new' }
      : null;

if (!pick) {
  log(`nothing worth posting: no new entry over ${MIN_STARS_NEW} stars, no climber over +${MIN_DELTA}`);
  process.exit(0);
}

const text = compose(pick.entry, pick.reason);
log(`would post (${pick.reason}):\n---\n${text}\n---`);

if (DRY_RUN) process.exit(0);

if (!apiKey()) {
  console.error('No ROBINREACH_API_KEY in the environment or .env.local.');
  process.exit(1);
}
if (!BRAND_ID) {
  console.error('Set site.social.brandId in the topic config.');
  process.exit(1);
}

const profiles = await listProfiles(BRAND_ID);
const ids = (Array.isArray(profiles) ? profiles : profiles.data ?? [])
  .filter((p) => (social.platforms ?? ['twitter']).includes(p.platform))
  .map((p) => p.id);

if (!ids.length) {
  console.error('No matching social profiles connected in RobinReach.');
  process.exit(1);
}

const result = await createPost({
  content: text,
  profileIds: ids,
  publishTime: new Date(Date.now() + 15 * 60_000).toISOString(),
  status: AUTO_PUBLISH ? 'scheduled' : 'draft',
  labels: SAMPLE ? ['awesome-jev', 'sample'] : ['awesome-jev'],
});

// A sample must not consume the day's slot or mark the entry as already posted.
if (!SAMPLE) {
  posted.ids = [...seen, pick.entry.id].slice(-500);
  posted.lastPostedOn = today();
  writeJson('data/posted.json', posted);
}

log(`created ${AUTO_PUBLISH ? 'scheduled post' : 'draft'} ${result?.id ?? ''} for profile(s) ${ids.join(', ')}`);
if (!AUTO_PUBLISH) log('it is waiting in RobinReach for you to approve and send');
