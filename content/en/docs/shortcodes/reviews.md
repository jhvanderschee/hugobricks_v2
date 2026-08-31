---
title: Reviews
---

The reviews shortcode renders a row of testimonials. You can see it in action on the [home page](/). To show the testimonials, write:

```
{{</* reviews */>}}
```

They come from `data/<lang>/reviews.yaml`, one entry per review:

```
- name: Gitio Hamano
  function: Source Code version controller
  image: /uploads/photos/avatars/1.jpeg
  description: Rings of Uranus hearts of the stars corpus.
  stars: 5
```

`stars` is optional and is announced as "Rated 5 out of 5" rather than as five identical images. The `<ul class="reviews">` it renders is also what routes the section to the [reviews brick](/docs/bricks/reviews/).
