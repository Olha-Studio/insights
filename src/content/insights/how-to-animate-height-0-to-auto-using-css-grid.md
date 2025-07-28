---
title: "How to Animate Height: 0 to Auto Using CSS Grid!"
description: A simple, practical tutorial to animate height transitions using
  grid-template-rows in CSS.
pubDate: 2025-05-31T19:54:00.000Z
updatedDate: 2025-05-31T19:54:00.000Z
---
# Animate `height: 0` to `height: auto` with CSS Grid

You might have heard that transitioning from `height: 0` to `height: auto` isn't possible with plain CSS. But thanks to CSS Grid and animatable `grid-template-rows`, we now have a clean solution that works beautifully. Here's a step-by-step guide.

- - -

## 🚀 The Idea

The trick is to use a CSS Grid container and transition the `grid-template-rows` value from `0fr` to `1fr`. This simulates collapsing and expanding height **without needing JavaScript calculations** for dynamic content height.

- - -

## 🧪 Simple Demo

Here’s a basic example that toggles the content height on hover.

### HTML

```html
<div class="wrapper">
  <div class="content">
    <p>This is amazing!</p>
  </div>
</div>
```

### CSS

```css
.wrapper {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition: grid-template-rows 500ms;
}

.wrapper:hover {
  grid-template-rows: 1fr;
}

.content {
  overflow: hidden;
}
```

This works because `grid-template-rows` is now animatable in modern browsers. On hover, it transitions smoothly from collapsed to fully expanded.

- - -

## 📚 Real-World Use Case: Accordion

You can apply this same technique to an accordion using JavaScript or ARIA attributes to toggle the expansion.

### HTML

```html
<div class="accordion" aria-expanded="false">
  <button class="toggle">Toggle</button>
  <div class="accordion-wrapper">
    <div class="accordion-content">
      <p>Lots of content here...</p>
    </div>
  </div>
</div>
```

### CSS

```css
.accordion-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition: grid-template-rows 500ms;
}

.accordion[aria-expanded="true"] .accordion-wrapper {
  grid-template-rows: 1fr;
}
```

### JS (Example)

```js
document.querySelector('.toggle').addEventListener('click', () => {
  const accordion = document.querySelector('.accordion');
  const expanded = accordion.getAttribute('aria-expanded') === 'true';
  accordion.setAttribute('aria-expanded', !expanded);
});
```

- - -

## 🙌 Credits & Further Reading

* Original tip via [Chris Coyier](https://css-tricks.com)
* Full explanation by [Keith J. Grant](https://keithjgrant.com)
* Video tutorial by [Kevin Powell](https://www.youtube.com/@KevinPowell)

- - -

## 💡 Final Notes

* This technique also works with dynamic content (`lorem100`, multiple paragraphs, etc.)
* The inner content must be wrapped in a nested `<div>` for the grid layout to apply correctly
* You can replace hover with class toggles, `aria-expanded`, or other interactive logic

- - -

> This is one of those rare CSS tricks that feels like magic — and it just works. Happy animating!
