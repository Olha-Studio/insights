---
title: "GitHub SSH Cheatsheet (With Explanations): Multi-Account Keys, Config, and Debugging"
description: "A practical, copy-pasteable guide to setting up SSH with GitHub, handling multiple accounts, switching identities per repo, and fixing the most common errors."
pubDate: 2025-08-16
updatedDate: 2025-08-16
heroImage: "/assets/insights/blog-placeholder-4.jpg"
tags: ["git", "github", "ssh", "dev-tools", "security"]
---

> Use this structured cheatsheet to quickly verify your Git + SSH setup for GitHub, support multiple accounts (work + personal), and debug typical issues like wrong identity or HTTPS remotes asking for passwords.

## 1) Check your current setup

- **Remotes**
  - `git remote -v` — list repo remotes and see whether they are HTTPS or SSH.
  - `git remote get-url origin` — show the URL used by `origin`.

- **SSH auth with GitHub**
  - `ssh -T git@github.com` — verify which account is authenticated (it prints your username).
  - `ssh -vT git@github.com` — verbose output to see which key is being offered/used.

- **Local keys**
  - `ssh-add -l` — list keys loaded in the SSH agent.
  - `ls -al ~/.ssh` — list keys available on disk.

## 2) Generate keys for multiple accounts

Create one key per account and label them clearly:

```bash
ssh-keygen -t ed25519 -C "personal@email.com" -f ~/.ssh/id_ed25519_personal
ssh-keygen -t ed25519 -C "work@email.com" -f ~/.ssh/id_ed25519_work

ssh-add ~/.ssh/id_ed25519_personal
ssh-add ~/.ssh/id_ed25519_work
```

- Add the corresponding `.pub` files to GitHub → Settings → SSH and GPG keys.
- Optional: Keep keys password-protected and use your OS keychain/agent.

## 3) Configure `~/.ssh/config` (host aliases)

This lets you pick the account per repo by using a host alias instead of `github.com`:

```sshconfig
Host github-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_personal
  IdentitiesOnly yes

Host github-work
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_work
  IdentitiesOnly yes
```

Now you can set a repo remote to either identity:

```bash
git remote set-url origin git@github-work:Org/repo.git
# or
git remote set-url origin git@github-personal:user/repo.git
```

## 4) Switch a repo between users (without recloning)

The effective identity for push/pull is decided by the remote URL host. Change the remote and you switch identities:

```bash
git remote -v
git remote set-url origin git@github-work:Org/repo.git
git remote -v
```

Confirm SSH auth with the chosen alias:

```bash
ssh -T git@github-work
```

## 5) Useful fixes and one-off overrides

- **Force a specific key once (without editing ssh config):**

```bash
GIT_SSH_COMMAND='ssh -i ~/.ssh/id_ed25519_work -o IdentitiesOnly=yes' git push
```

- **Clear all keys from the agent (reload a clean set):**

```bash
ssh-add -D
ssh-add ~/.ssh/id_ed25519_work
```

- **Debug which key is selected:**

```bash
ssh -vT git@github.com
```

- **Ensure repo author identity (commit metadata):**

```bash
git config user.name "Your Work Name"
git config user.email "you@work.com"
```

For a global default use `git config --global ...`, but prefer per-repo configs when juggling multiple identities.

## 6) Convert an HTTPS remote to SSH

If Git asks for a password or a token, your remote is likely HTTPS. Switch to SSH:

```bash
git remote -v
git remote set-url origin git@github.com:user/repo.git
```

If using aliases from `~/.ssh/config`:

```bash
git remote set-url origin git@github-personal:user/repo.git
```

## 7) Common errors (and quick resolutions)

- **Permission denied (publickey)**
  - Key not added to GitHub, wrong key file, or agent missing the key.
  - Action: `ssh-add -l`, then `ssh-add ~/.ssh/id_ed25519_*`, confirm `ssh -T git@github.com`.

- **Wrong account used**
  - Remote still points to `github.com` (no alias), or alias maps to a different key.
  - Action: `git remote get-url origin`, switch to `git@github-work:Org/repo.git` or `git@github-personal:user/repo.git`.

- **Asking for password**
  - HTTPS remote instead of SSH.
  - Action: change to an SSH URL as in section 6.

- **Connection refused / firewalled 22**
  - Some networks block SSH port 22.
  - Action: try GitHub’s SSH over port 443 by adding to `~/.ssh/config`:

```sshconfig
Host github.com
  Hostname ssh.github.com
  Port 443
  User git
```

- **Host key mismatch**
  - Known hosts entry is stale (e.g., OS reinstall/migration).
  - Action: `ssh-keygen -R github.com` then reattempt the SSH command.

## 8) End-to-end sanity test

```bash
git remote -v
ssh -T git@github-personal    # or git@github-work
git fetch --all --prune
git switch -c test-ssh-setup
echo "test $(date)" >> ssh-setup-check.txt
git add -A && git commit -m "test: verify ssh setup works for pushes"
git push -u origin test-ssh-setup
```

Confirm the branch appears on GitHub, then clean up:

```bash
git switch -
git branch -D test-ssh-setup
git push origin :test-ssh-setup
```

## 9) Handy reference block (copy/paste)

```bash
# Inspect remotes and URLs
git remote -v
git remote get-url origin

# Switch remotes to specific identities
git remote set-url origin git@github-work:Org/repo.git
git remote set-url origin git@github-personal:user/repo.git

# Check SSH auth and keys
ssh -T git@github.com
ssh -vT git@github.com
ssh-add -l
ls -al ~/.ssh

# Manage keys
ssh-keygen -t ed25519 -C "you@work.com" -f ~/.ssh/id_ed25519_work
ssh-add ~/.ssh/id_ed25519_work
ssh-add -D

# One-off force with a specific key
GIT_SSH_COMMAND='ssh -i ~/.ssh/id_ed25519_work -o IdentitiesOnly=yes' git push

# Commit identity per repo
git config user.name "Your Work Name"
git config user.email "you@work.com"
```

---

If you need a step-by-step for your exact setup (team vs. personal, or mixed CI/CD), drop the repo details and I’ll suggest the safest mapping strategy for your keys and remotes.


