---
title: '🆕 New CSS Features to Watch in 2025'
description: 'CSS continues to evolve — here are some of the most exciting features landing (or expanding support) in 2025:'
pubDate: 'Jul 15 2022'
heroImage: '/blog-placeholder-4.jpg'
---

## ✅ 1. `:has()` — Parent Selector

Finally, full support across modern browsers.

```css
.card:has(img:hover) {
  border: 2px solid blue;
}
```

---

## ✅ 2. Scoped CSS with `@scope`

Scoping styles to a specific section of the DOM.

```css
@scope (.section) {
  h2 {
    color: coral;
  }
}
```

---

## ✅ 3. Container Style Queries

Now you can style based on container **styles**, not just size.

```css
@container style(color: red) {
  .child {
    border-color: red;
  }
}
```

---

## ✅ 4. Anchor Positioning

Precise UI control with anchored popups/tooltips.

```css
.tooltip {
  anchor-name: --button;
  position-anchor: --button;
}
```

---

## ✅ 5. `color-mix()` Function

Mix two colors with CSS natively:

```css
color: color-mix(in srgb, red 70%, blue);
```

---

Stay ahead by experimenting in Canary/Dev browsers and checking [caniuse.com](https://caniuse.com).