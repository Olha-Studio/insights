---
title: How to Create Flowing Wire Animations with Fading Ends Using SVG and CSS
description: A practical guide to animating SVG wire paths with fading stroke
  effects using gradient masks and CSS keyframes.
pubDate: 2025-05-31T19:59:00.000Z
updatedDate: 2025-05-31T19:59:00.000Z
---

# Flowing Wire Animations with Fading Ends (SVG + CSS)

This tutorial walks through creating advanced **flowing wire animations** with fading stroke ends, using **SVG linear gradient masks** and **CSS keyframe animations**. The result goes beyond the standard `stroke-dashoffset` animation by adding soft, professional fade-outs on lines — ideal for creative web interfaces and data flows.

---

## ✨ Concept Overview

- Two **SVG layers**: a **gray base layer** and a **colored top layer** with a **linear gradient mask**.
- **Figma** is used to draw individual paths for the wires.
- The **gradient mask** fades each stroke's tail, creating a smooth disappearing effect.
- **CSS keyframes** animate the mask’s `x` position to simulate flow.

---

## 🎨 Step-by-Step: Building the Animation

### 1. Design Wires in Figma

- Use the Pen Tool to draw three individual SVG paths.
- Make sure each wire is a separate path for maximum control.
- Color the wires gray and set stroke width (e.g., 4px).
- Export as **inline SVG** (`Right-click → Copy as SVG`).

### 2. Structure Your HTML

```html
<div class="wire-wrap">
  <div class="wire-back">
    <!-- Gray SVG goes here -->
  </div>
  <div class="wire-front">
    <!-- Colored SVG with gradient mask -->
  </div>
</div>
```

- `wire-wrap` is `position: relative`
- Both `.wire-back` and `.wire-front` are `position: absolute`

---

### 3. Define the SVG Gradient Mask

Inside your colored wire SVG (`.wire-front`), include:

```svg
<defs>
  <linearGradient id="gradient" x1="0%" x2="100%">
    <stop offset="0%" stop-color="white" stop-opacity="0" />
    <stop offset="80%" stop-color="white" stop-opacity="1" />
    <stop offset="80%" stop-color="white" stop-opacity="0" />
  </linearGradient>

  <mask id="gradient-mask">
    <rect class="mask-rect" x="-50%" y="0" width="100%" height="100%" fill="url(#gradient)" />
  </mask>
</defs>
```

Apply the mask to each path:

```svg
<path d="..." stroke="yellow" mask="url(#gradient-mask)" />
```

---

### 4. Animate the Gradient Mask

Add this CSS to animate the `x` position:

```css
@keyframes slide-mask {
  from { x: 100%; }
  to { x: 0%; }
}

.mask-rect {
  animation: slide-mask 3s ease-in-out infinite;
}
```

This makes the gradient move from right to left, animating the stroke visibility as it flows.

---

## 🟥 Add Decorative Boxes

You can add floating colored boxes using `position: absolute` inside `.wire-wrap`:

```html
<div class="box top-left"></div>
<div class="box middle"></div>
<div class="box bottom-left"></div>
<div class="box top-right"></div>
```

Each can be styled and positioned for visual interest.

---

## 🧩 Responsive Setup

- Set `SVG width: 100%` and remove `height` to make it scale.
- Wrap everything in a `div` that’s centered with Flexbox and `100vh` height.

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

---

## 📚 Going Beyond

- Design precise SVG paths in **Figma**, export them as inline SVG.
- Animate with **CSS keyframes**, or use **Webflow interactions** if preferred.
- For advanced interactivity, integrate with **custom JavaScript**.

---

## 🙌 Credits & Learning Resources

- Inspired by a tweet from **John Famous**
- Based on SVG gradient masking shared in **Webflow tutorials**
- Extended via **Patreon** content: includes deeper JS animation and app-building

---

> 🎨 By layering SVG masks and animating them with CSS, you can build next-level visuals that go beyond traditional line animations. Perfect for modern, interactive UI storytelling.
