---
title: '🖼️ Understanding SVG `viewport` vs `viewBox`'
description: 'SVG graphics use two key concepts to manage how they scale and display:.'
pubDate: 'Jun 19 2024'
heroImage: '/assets/insights/blog-placeholder-1.jpg'
---

## ✅ Viewport

The **viewport** is defined by the `width` and `height` of the SVG element in HTML or CSS.

```html
<svg width="200" height="100">...</svg>
```

It controls the **display size** of the SVG on the page.

---

## ✅ viewBox

The `viewBox` attribute defines the **internal coordinate system** of the SVG.

```html
<svg viewBox="0 0 100 50">...</svg>
```

It tells the browser:
> “Fit this 100×50 unit space into the given viewport size.”

---

## 🔍 viewBox Syntax

```
viewBox = "min-x min-y width height"
```

- `min-x`, `min-y`: where the view starts
- `width`, `height`: how much of the SVG canvas is visible

---

## 🔁 Scaling Example

```html
<svg width="400" height="200" viewBox="0 0 100 50">
  <!-- Content here -->
</svg>
```

- Viewport: 400×200 px
- ViewBox: 100×50 units
- Scale: Each SVG unit = 4px

---

Understanding this distinction helps you create responsive, scalable SVGs.