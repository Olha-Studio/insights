Manual prompt snippet

"""
You are my coding copilot. Task: [workflow action].
Before acting, load and follow docs/WORKFLOW.md for branch strategy, Decap behavior, and release steps.
"""

Branches
- `dev`: integration; Decap commits land here (`backend.branch: dev`).
- `main`: production. Merge `dev` → `main` via PR or `--no-ff` merge.

Commands
- Start: `git fetch --all --prune && git switch dev && git pull --rebase`
- Promote: `git switch main && git pull --rebase && git merge --no-ff --no-edit dev && git push origin main`
- Re-align dev: merge `main` back to `dev`.

Decap CMS
- `/admin` uses Git Gateway; local backend enabled for local edits.
- Editorial workflow optional; current setup commits directly to `dev`.

