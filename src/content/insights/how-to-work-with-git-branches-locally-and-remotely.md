---
title: "End-to-End Git Workflow: Working Locally and Remotely on Branches"
description: "Step-by-step tutorial for checking branches, previewing locally, merging, and opening pull requests."
pubDate: "Aug 14 2025"
heroImage: "/assets/insights/default-placeholder.jpg"
tags: ["git", "workflow", "tutorial"]
---

# End-to-End Git Workflow: Working Locally and Remotely on Branches

This guide walks you through a practical, reproducible Git workflow for local development on a feature branch, previewing the site locally, merging into `dev`, and then making a pull request to `main` for deployment.

## 1) Check setup: remotes, user, branches

```bash
# Show current branch
git branch --show-current

# Show configured Git user (used for commits)
git config user.name
git config user.email

# List remotes and URLs
git remote -v

# Fetch the latest refs from all remotes
git fetch --all --prune

# Show local and remote branches
git branch -a
```

If you need to change the user for this repo only:

```bash
git config user.name "Your Name"
git config user.email "you@example.com"
```

Switch remotes to SSH (recommended to avoid HTTPS auth prompts):

```bash
git remote set-url origin git@github.com:Olha-Studio/insights.git
```

## 2) Create or switch to a feature branch

```bash
# Create a new feature branch from dev
git checkout dev
git pull origin dev
git checkout -b feature/my-change

# Or switch to an existing branch
git checkout feature/tag-system
git pull origin feature/tag-system
```

## 3) Make changes and preview locally

```bash
# Install dependencies (first time only)
npm install

# Start dev server
npm run dev

# Preview build locally (optional)
npm run build
npm run preview
```

Open http://localhost:4321 to preview.

## 4) Review changes before committing

```bash
# See what's changed
git status

# See line-by-line diff
git diff

# Diff a specific file
git diff src/content/insights/your-post.md
```

Stage and commit:

```bash
git add .
git commit -m "feat: short summary of the change"
```

Amend the last commit message (optional):

```bash
git commit --amend -m "feat: improved summary"
```

## 5) Push your feature branch

```bash
# First push sets upstream
git push -u origin feature/my-change

# Subsequent pushes
git push
```

## 6) Keep your branch up to date with dev

```bash
git checkout dev
git pull origin dev
git checkout feature/my-change
git merge --no-ff dev
# Resolve conflicts if any, then
git commit --no-edit
git push
```

Alternatively, rebase (linear history):

```bash
git fetch origin
git rebase origin/dev
# If conflicts appear: resolve, then
git rebase --continue
git push --force-with-lease
```

## 7) Open a Pull Request to dev (if required)

If your workflow uses `dev` as the integration branch:

1. Push your feature branch to GitHub.
2. Open a PR: feature → dev.
3. Request review and merge after checks pass.

## 8) Merge dev into main

After your changes are in `dev` and validated:

```bash
git checkout dev
git pull origin dev
git checkout main
git pull origin main
git merge --no-ff --no-edit dev
git push origin main
```

If you prefer PRs for release:

1. Create PR: dev → main.
2. Wait for CI/deploy preview.
3. Merge when approved.

## 9) Verify deployment

- Check your hosting provider/build logs.
- Visit the live URL: insights.webim.space

## 10) Common commands quick reference

```bash
# Branches
git branch --show-current
git branch -a

# Remotes
git remote -v
git remote set-url origin git@github.com:Olha-Studio/insights.git

# Sync
git fetch --all --prune
git pull

# Diff & status
git status
git diff

# Commit & push
git add .
git commit -m "message"
git push -u origin <branch>

# Merge
git checkout target-branch
git merge --no-ff --no-edit source-branch
git push
```

---

By following this flow, you can reliably develop on a feature branch, preview locally, integrate into `dev`, and release to `main` with confidence.


