import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { today, sortObject } from './util.js';

const HISTORY_LIMIT = 60;

export function readJson(path, fallback) {
  if (!existsSync(path)) return fallback;
  return JSON.parse(readFileSync(path, 'utf8'));
}

export function writeJson(path, data) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(sortObject(data), null, 2)}\n`);
}

export function loadRegistry(path) {
  const data = readJson(path, { entries: [] });
  const byId = new Map(data.entries.map((e) => [e.id, e]));
  return { data, byId };
}

export function upsert(byId, incoming) {
  const day = today();
  const existing = byId.get(incoming.id);

  if (!existing) {
    const entry = {
      ...incoming,
      firstSeen: day,
      lastSeen: day,
      starsHistory: [[day, incoming.stars ?? 0]],
    };
    byId.set(entry.id, entry);
    return { entry, isNew: true };
  }

  const history = existing.starsHistory ?? [];
  if (history.at(-1)?.[0] !== day) history.push([day, incoming.stars ?? 0]);
  else history[history.length - 1] = [day, incoming.stars ?? 0];

  const entry = {
    ...existing,
    ...incoming,
    firstSeen: existing.firstSeen ?? day,
    lastSeen: day,
    starsHistory: history.slice(-HISTORY_LIMIT),
  };
  byId.set(entry.id, entry);
  return { entry, isNew: false };
}

// Star growth over the trailing window, used for the "moving fastest" section.
export function starDelta(entry, windowDays = 7) {
  const history = entry.starsHistory ?? [];
  if (history.length < 2) return 0;
  const cutoff = Date.now() - windowDays * 86400000;
  const baseline = history.find(([date]) => new Date(date).getTime() >= cutoff) ?? history[0];
  return (entry.stars ?? 0) - baseline[1];
}

export function saveRegistry(path, byId) {
  const entries = [...byId.values()].sort((a, b) => a.id.localeCompare(b.id));
  writeJson(path, { generatedAt: new Date().toISOString(), count: entries.length, entries });
  return entries;
}
