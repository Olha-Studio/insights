Manual prompt snippet

"""
You are my coding copilot. Task: [add a new element/section: e.g., add a CTA button to the header; add a hero section on home].
Before acting, load and follow docs/ADD_ELEMENTS_GUIDE.md to plan placement, files to edit, CSS layer, a11y, routing, and tests. Apply only minimal, standards-compliant edits.
"""

Scope of this guide
- Covers adding new UI elements or sections anywhere (header/footer/pages/components), aligned with our architecture.

Checklist (do in order)
1) Identify placement and semantics
   - Header/footer: update `src/components/Header.astro` or `Footer.astro`
   - Page section: update page file (e.g., `src/pages/index.astro`) and/or create a reusable component
   - Use appropriate tags: `<nav>`, `<button>`, `<a>`, `<section>`, `<figure>`

2) Routing and links
   - If the element links somewhere, confirm route exists in docs/ROUTING.md
   - For new destinations, add routes under `src/pages/` (Astro file-based routing)

3) CSS placement (layers)
   - Tokens: only if adding a new variable → `src/styles/tokens.css`
   - Utilities (tiny helpers): `src/styles/utilities.css`
   - Components (reusable styles): create/edit under `src/styles/components/`
   - Page-specific: `src/styles/pages/<page>.css` or a local `<style>` block if very small
   - Keep gutters with `.container` and width `var(--ws-desktop-width)`

4) Accessibility
   - Provide `aria-label` or visible text for buttons/links
   - Maintain contrast and visible focus
   - Keyboard navigable; avoid `role="button"` on anchors unless necessary

5) Performance
   - Avoid new blocking resources
   - For images: include `width/height`, `loading`, `decoding`

6) Tests and smoke checks
   - Desktop and mobile alignment with header/footer gutters
   - No console errors; Lighthouse major issues resolved
   - If header changed, verify sticky behavior and overlap

Examples
- Add a “Contact” button to header
  - Edit `src/components/Header.astro` → within `.internal-links`, add `<HeaderLink href="/contact">Contact</HeaderLink>`
  - If custom style needed repeatedly, define in `src/styles/components/buttons.css`
  - A11y: ensure link text is descriptive; focus visible

- Add a promo strip to home
  - Edit `src/pages/index.astro`, add a new `<section class="promo">` within `.container`
  - Add styles to `src/styles/pages/home.css` or a reusable component style file

Notes
- Keep edits minimal and scoped; prefer reuse
- Do not hardcode external colors or widths; use tokens and `.container`

