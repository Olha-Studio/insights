Manual prompt snippet (copy/paste and edit the task line only)

"""
You are my coding copilot. Task: [describe the styling task briefly].
Before acting, load and follow docs/STYLE_GUIDE.md for typography, colors, spacing, and UI rules in this project (Astro + Decap + Netlify). Align with tokens (src/styles/tokens.css) and fluid type. Only propose edits that match this guide.
"""

Project UI style guide (Astro + Decap + Netlify)

- Typography
  - Use Inter. Body size uses fluid clamp from tokens: see `src/styles/tokens.css`
  - Headings: rely on fluid tokens; keep visual hierarchy h1 > h2 > h3.
  - Line-height: 1.7 body, headings as defined in base.

- Color and contrast
  - Primary accent: `--accent` (#eaa22f). Text colors from tokens.
  - Ensure WCAG AA on text and interactive states.

-- Buttons
  - Use only `.btn` and `.btn.secondary` (component styles live in `src/styles/components/buttons.css`).
  - Primary (filled): `background: var(--ws-main-color); color: #fff; border: 1px solid var(--ws-main-color); border-radius: 999px; padding: .85rem 1.1rem;`
  - Secondary (outline): `background: transparent; color: var(--ws-main-color); border: 2px solid var(--ws-main-color); border-radius: 999px; padding: .85rem 1.1rem;`
  - Do not override button colors in pages or header; inherit from component.

- Layout width and gutters
  - Shared container: `max-width: var(--ws-desktop-width); padding: 0 1rem; margin: 0 auto`.
  - Header/footer/homepage must align gutters exactly.

- Components
  - Prefer semantic HTML. Use `<figure>` for images when appropriate.
  - Reuse utilities and component styles under `src/styles/components/`.

- Images
  - Provide `width`/`height` attributes. Use `sizes` where responsive.
  - Use `fetchpriority="high"` on LCP hero only.

- Accessibility
  - Provide descriptive `alt`. Ensure focus states and hover contrast.

- Do not
  - Inline random colors; use tokens.
  - Change global spacing or container widths without updating tokens/guide.

Cross-reference
- Tokens: `src/styles/tokens.css`
- Base: `src/styles/base.css`
- Utilities: `src/styles/utilities.css`
- Home page: `src/styles/pages/home.css`

