// Folds Jev's verdicts into data/manual.json. Anything Jev was unsure about stays
// in the review queue for a human, which is the whole point of keeping the file.
import { readJson, writeJson } from './lib/store.js';
import { log } from './lib/util.js';

const APPROVE_AT = 0.75;
const REJECT_AT = 0.45;

const verdicts = readJson('data/triage.json', {});
const manual = readJson('data/manual.json', { approve: [], reject: [], pinned: [], overrides: {} });

const approve = new Set(manual.approve ?? []);
const reject = new Set(manual.reject ?? []);
let unsure = 0;

for (const [id, verdict] of Object.entries(verdicts)) {
  if (verdict.noul >= APPROVE_AT) {
    approve.add(id);
    reject.delete(id);
  } else if (verdict.noul <= REJECT_AT) {
    reject.add(id);
    approve.delete(id);
  } else {
    unsure++;
  }
}

manual.approve = [...approve].sort();
manual.reject = [...reject].sort();
writeJson('data/manual.json', manual);

log(`merged: ${manual.approve.length} approved, ${manual.reject.length} rejected, ${unsure} left for a human`);
