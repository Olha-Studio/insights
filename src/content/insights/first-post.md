---
title: 'First post'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/assets/insights/mpa-view-transitions.png'
tags: ['astro', 'css', 'javascript']
isPrivate: true
---


# Cross-Document (MPA) View Transitions

Modern browsers now support a feature called **cross-document view transitions**, also known as **MPA view transitions**. This allows you to add smooth animated transitions between full page loads, making a traditional multi-page application (MPA) feel more like a single-page application (SPA).

## ✅ What Are MPA View Transitions?

MPA view transitions are built on the native [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API), currently available in Chromium-based browsers (Chrome 111+, Edge). It enables visual transitions (e.g. fades or slides) between full page navigations, without needing to build your site as an SPA.

This is ideal for sites built with WordPress, Astro, Eleventy, or even plain HTML.

## 🛠️ How It Works

### 1. Opt into View Transitions

Add this to the `<html>` tag on every page where transitions should work:

```html
<html view-transition>
```

### 2. Handle Navigation with JavaScript

To trigger a smooth transition before navigating to the next page, intercept link clicks:

```js
if (document.startViewTransition) {
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
      const url = link.href;
      if (url.startsWith(location.origin)) {
        e.preventDefault();
        document.startViewTransition(() => {
          window.location.href = url;
        });
      }
    });
  });
}
```

### 3. Add CSS for the Transition

You can customize the visual animation using CSS:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation: fade 0.4s ease;
}

@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

## 🚧 Limitations

- Only works in Chromium browsers for now.
- Both pages must have the `view-transition` attribute on `<html>`.
- Works only for same-origin navigation.
- You must intercept the click and manually trigger the transition with JavaScript.
- Styling options are currently limited to pseudo-elements like `::view-transition-old(root)`.

## 🔗 Resources

- [MDN Docs on View Transitions](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)
- [Google Chrome Developer Guide](https://developer.chrome.com/docs/web-platform/view-transitions/)
- [MPA View Transitions Demo (GitHub)](https://github.com/argyleink/animate-site-nav)
