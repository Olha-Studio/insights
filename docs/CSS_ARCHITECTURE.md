Manual prompt snippet

"""
You are my coding copilot. Task: [describe CSS change].
Before acting, load and follow docs/CSS_ARCHITECTURE.md to place styles in the correct layer (reset, tokens, base, utilities, components, pages). Use existing files in src/styles/. Avoid inline styles.
"""

CSS layers in this project
- Order: `@layer reset, tokens, base, utilities, components, pages;` (see `src/styles/layers.css`).
- Files
  - `reset.css`: element resets only
  - `tokens.css`: CSS variables (colors, spacing, fluid type tokens)
  - `base.css`: typography, body, headings
  - `utilities.css`: `.container`, `.btn`, helpers
  - `components/*.css`: reusable component styles (buttons, cards)
  - `pages/*.css`: page-specific, e.g., `pages/home.css`

Rules
- Define new variables in tokens; do not sprinkle raw values.
- Utilities must be tiny and generic; components are semantic and reusable.
- Page styles only when a pattern is not reusable elsewhere.

Migration tips
- If a rule is used in 2+ places, move to components.
- If it’s about width/gutters, prefer `.container` from utilities.

