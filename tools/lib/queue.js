import { readJson } from './store.js';

// One deterministic ordering, shared by the batch emitter and the apply step, so
// a list of probabilities can be matched back to the right repositories.
export function reviewQueue() {
  const registry = readJson('data/registry.json', { entries: [] });
  return registry.entries
    .filter((e) => e.status === 'review')
    .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
}
