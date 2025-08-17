Manual prompt snippet

"""
You are my coding copilot. Task: [routing change].
Before acting, load and follow docs/ROUTING.md for current routes and slug conventions. Keep existing URLs stable.
"""

Routes
- Home: `/`
- Insights listing: `/insights` (excludes `cases`)
- Insight detail: `/insights/:id` (where `id` = content collection id)
- Tag listing: `/tags/:tag` (if tag === `cases`, links route to `/cases/:id`)
- Cases listing: `/cases`
- Case detail: `/cases/:id`

Notes
- We use `post.id` (content id) for URLs, not frontmatter slug.
- Keep redirects minimal; preserve SEO.

