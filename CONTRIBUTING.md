# Contributing

Thanks for adding to the list. Two rules keep it useful: every entry is something a reader
can open and use today, and every entry says what it does in one sentence.

## Adding an entry

The fastest path is a [suggestion issue](../../issues/new?template=suggest.yml). If you
would rather send the change yourself:

1. Add the entry to `data/manual.json` under `pinned`, or add its id to `approve` if the
   crawler already found it and parked it in `data/review-queue.md`.
2. Run `node tools/render.js` to regenerate the list block in `README.md`.
3. Commit both files and open the pull request.

Do not hand-edit the region between the `AUTO:BEGIN` and `AUTO:END` markers in
`README.md`. It is overwritten on every run.

## What gets accepted

- Works today. A repository with a README and no code is not an entry.
- Specific to Jev or System One models. General LLM tooling belongs elsewhere.
- Described plainly. No marketing copy, no emoji in descriptions.
- Self-promotion is welcome, as long as it clears the bar above. Say it is yours.

## What gets removed

Entries are dropped when the project is archived, when it has had no commit for the window
set in `topics/jev.json`, or when the link dies. Removal is not a judgement, and a project
that comes back to life can be re-added.

## Tuning the crawler

`topics/jev.json` holds the search queries, the weighted signals used to score candidates,
and the exclusion rules. If the crawler keeps surfacing the same irrelevant repository, the
fix is usually a new exclusion rule rather than a permanent entry in `reject`.
