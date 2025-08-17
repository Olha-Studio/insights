Manual prompt snippet

"""
You are my coding copilot. Task: [prepare release].
Before acting, load and follow docs/RELEASE_CHECKLIST.md and confirm each item.
"""

Pre-release
- [ ] dev green build locally
- [ ] Lighthouse LCP < 3s (desktop), no major a11y errors
- [ ] Images exist in `public/` and paths correct
- [ ] No console errors on key pages
- [ ] Decap `/admin` accessible

Promote
- [ ] Merge dev → main (`--no-ff`)
- [ ] Netlify deploy success
- [ ] Smoke test: home, insights list, a post, cases list, a case, tag page

