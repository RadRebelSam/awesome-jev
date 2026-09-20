// Writes site/feed.xml: newly found entries first, then the biggest star gains.
// This is the input Rasa (or any RSS-to-post scheduler) reads, so the weekly
// digest and the social posts both come off the same daily crawl.
import { writeFileSync } from 'node:fs';
import { readJson, starDelta } from './lib/store.js';
import { daysSince, log } from './lib/util.js';

const SITE = 'https://radrebelsam.github.io/awesome-jev/';
const MAX_ITEMS = 40;

const config = readJson(`topics/${process.env.TOPIC || 'jev'}.json`);
const feedConfig = config.site?.feed ?? {};
const NEW_WINDOW_DAYS = feedConfig.newWindowDays ?? 14;
const MIN_DELTA = feedConfig.minStarDelta ?? 5;
// The seeding day put the whole back catalogue in at once; none of that is news.
const SEEDED_ON = feedConfig.seededOn ?? '';

const registry = readJson('data/registry.json', { entries: [] });
const triage = readJson('data/triage.json', {});

function escapeXml(value) {
  return String(value ?? '').replace(/[<>&'"]/g, (c) => ({
    '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;',
  }[c]));
}

const listed = registry.entries.filter((e) => e.status === 'approved' && !e.isArchived);

const fresh = listed
  .filter((e) => e.firstSeen && daysSince(e.firstSeen) <= NEW_WINDOW_DAYS)
  .filter((e) => !SEEDED_ON || e.firstSeen > SEEDED_ON)
  .sort((a, b) => String(b.firstSeen).localeCompare(String(a.firstSeen)) || b.stars - a.stars)
  .map((entry) => ({
    kind: 'new',
    entry,
    title: `New: ${entry.name}`,
    body: `${entry.description || 'No description provided.'} — ${entry.stars} stars${
      triage[entry.id] ? `, Jev rated it ${triage[entry.id].noul.toFixed(2)}` : ''
    }.`,
    date: entry.firstSeen,
  }));

const climbing = listed
  .map((entry) => ({ entry, delta: starDelta(entry, 7) }))
  .filter(({ delta }) => delta >= MIN_DELTA)
  .sort((a, b) => b.delta - a.delta)
  .slice(0, 10)
  .map(({ entry, delta }) => ({
    kind: 'climbing',
    entry,
    title: `Climbing: ${entry.name} (+${delta} stars this week)`,
    body: `${entry.description || 'No description provided.'} — now ${entry.stars} stars.`,
    date: new Date().toISOString().slice(0, 10),
  }));

const items = [...fresh, ...climbing].slice(0, MAX_ITEMS);

const body = items
  .map((item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.entry.url)}</link>
      <guid isPermaLink="false">${escapeXml(`${item.kind}:${item.entry.id}:${item.date}`)}</guid>
      <pubDate>${new Date(`${item.date}T09:00:00Z`).toUTCString()}</pubDate>
      <category>${escapeXml(item.entry.category ?? 'other')}</category>
      <description>${escapeXml(item.body)}</description>
    </item>`)
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Awesome Jev — new and climbing</title>
    <link>${SITE}</link>
    <atom:link href="${SITE}feed.xml" rel="self" type="application/rss+xml" />
    <description>Projects built on Jev, TypeSafe AI's System One model: newly found repositories and the biggest star gains, from a daily crawl.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${body}
  </channel>
</rss>
`;

writeFileSync('site/feed.xml', xml);
log(`feed: ${fresh.length} new, ${climbing.length} climbing, ${items.length} items written`);
