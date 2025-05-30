---
title: '✨ Getting Started with GSAP (GreenSock Animation Platform)'
description: 'GSAP (GreenSock Animation Platform) is a powerful JavaScript library for creating high-performance, professional-grade animations on the web. This guide walks you through the basics of how to install and use GSAP in your project — with examples for timelines, scroll-based animations, and more.'
pubDate: 'Jul 22 2022'
heroImage: '/assets/insights/blog-placeholder-2.jpg'
---

## ✅ Step 1: Install GSAP

### Option A: Using npm

```bash
npm install gsap
```

### Option B: Using CDN

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js"></script>
```

---

## ✅ Step 2: Basic Animation Example

```html
<div class="box"></div>

<style>
  .box {
    width: 100px;
    height: 100px;
    background: #4CAF50;
    margin: 50px;
  }
</style>

<script>
  gsap.to(".box", {
    x: 300,
    duration: 2,
    ease: "power2.out"
  });
</script>
```

---

## ✅ Step 3: Create a Timeline

```js
const tl = gsap.timeline();

tl.to(".box", { x: 200, duration: 1 });
tl.to(".box", { y: 100, duration: 1 });
tl.to(".box", { rotation: 45, duration: 0.5 });
```

---

## ✅ Step 4: Scroll-Based Animations (ScrollTrigger)

First, install the plugin:

```bash
npm install gsap@npm:@gsap/business --save
```

Or via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/ScrollTrigger.min.js"></script>
```

### Example Usage:

```js
gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  scrollTrigger: {
    trigger: ".box",
    start: "top center",
    end: "bottom top",
    scrub: true
  },
  x: 400,
  rotation: 180
});
```

---

## 🧠 Tips

- Use `.from()` to animate from a starting state.
- Use `.set()` for instant property changes.
- `scrub: true` makes scroll-linked animations smooth.
- Combine with CSS Grid, Flexbox, or SVG for complex motion layouts.

---

## 🔗 Official Docs

- [GSAP Docs](https://gsap.com/docs/)
- [ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [CodePen Examples](https://codepen.io/GreenSock)

---

With GSAP, you can bring your UI to life with smooth transitions, scroll effects, SVG animations, and more — all with high performance and great browser support.