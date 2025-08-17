Manual prompt snippet

"""
You are my coding copilot. Task: [performance tuning].
Before acting, load and follow docs/PERFORMANCE.md for LCP, images, fonts, and third-party guidance specific to this site.
"""

Targets
- LCP: optimize hero on home; `fetchpriority="high"`, `width/height`, `sizes`.
- Fonts: preload minimal weights (currently SemiBold); `font-display: swap`.
- Images: Astro Image where possible; provide alt; lazy-load non-critical.
- Third-party: preconnect GTM; load async.

Checks
- CLS: set dimensions on images.
- Color contrast compliance.
- Mobile layout consistent with `.container` gutters.

