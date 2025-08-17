Manual prompt snippet

"""
You are my coding copilot. Task: [n8n integration or webhook].
Before acting, load docs/INTEGRATION_N8N_GUIDE.md for patterns on capturing emails (from paywall form) and future automation.
"""

MVP plan
- Current email form posts to Formspree. Future: post to an n8n webhook URL.
- Steps (later):
  1) Create webhook workflow in n8n (store email, tag, post title).
  2) Replace form action with webhook URL; consider honeypot.
  3) Add privacy note and optional double opt‑in.

Data shape
- `{ email, subscribe: boolean, post: string, source: 'insights' }`

