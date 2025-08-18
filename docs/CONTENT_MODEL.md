Manual prompt snippet

"""
You are my coding copilot. Task: [content model or frontmatter change].
Before acting, load and follow docs/CONTENT_MODEL.md to keep content schema compatible with Astro Content Collections and Decap CMS.
"""

Collections
- `insights` (Markdown/MDX in `src/content/insights/`)
- Schema (see `src/content.config.ts`):
  - `title: string`
  - `description: string`
  - `pubDate: date`
  - `updatedDate?: date`
  - `heroImage?: string`
  - `tags?: string[]`
  - `isPrivate?: boolean` (MVP paywall)

Special tags and routing
- `cases` tag: uses `CasePost.astro` layout and appears under `/cases` and `/cases/:id`.
- Other posts render via `BlogPost.astro` under `/insights/:id`.

Decap CMS
- Config at `public/admin/config.yml`.
- Fields include optional `isPrivate` and `layout` (informational; routing is tag-driven).

Paywall MVP
- When `isPrivate: true`, `BlogPost.astro` blurs after ~30–40% and shows an email form.

