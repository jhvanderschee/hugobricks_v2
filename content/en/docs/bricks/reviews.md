---
title: Reviews
---

Say you want a neat reviews 'component' with some feedback. See the [relevant section](/) on the home page of this sample website.

## Use this brick

The intro is markdown; the testimonials come from `data/<lang>/reviews.yaml` through the `reviews` shortcode:

```
---

## What users say about Hugobricks

Don't just take our word for it — hear from some of our satisfied users!

{{</* reviews */>}}
```

The `<ul class="reviews">` that the shortcode emits is also what routes the section: the `reviews` rule in `params.sections` matches `ul.reviews`.

## The data

```
- name: Gitio Hamano
  function: Source Code version controller
  image: /uploads/photos/avatars/1.jpeg
  description: Rings of Uranus hearts of the stars corpus.
  stars: 5
- name: Rasmus Phorfp
  function: All Stacks developer
  image: /uploads/photos/avatars/2.jpeg
  description: Finite but unbounded astonishment two ghostly.
  stars: 4
```

`stars` is optional and is announced as "Rated 5 out of 5" rather than as five identical images.
