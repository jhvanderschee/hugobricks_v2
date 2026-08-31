---
title: Reviews
---

Say you want a neat reviews 'component' with some customer feedback. The reviews brick is a centred intro above a row of testimonials. You can see it in action on the [home page](/).

## Use this brick

To use this brick you only need the [reviews shortcode](/docs/shortcodes/reviews/):

```
{{</* reviews */>}}
```

Anything else you write in the section — typically a heading and a short line of text — becomes the centred intro above the testimonials. They come from `data/<lang>/reviews.yaml`, one entry per review (`stars` is optional):

```
- name: Gitio Hamano
  function: Source Code version controller
  image: /uploads/photos/avatars/1.jpeg
  description: Rings of Uranus hearts of the stars corpus.
  stars: 5
```

You can force the use of this block by writing:

```
---.reviews
```
