---
title: Features
---

Want to show the selling points of your service or product? The `features` brick is a centred intro above a grid of icon features. You can see it in action on the [home page](/) of this website.

## Use this brick

The intro is markdown; the cards come from `data/<lang>/features.yaml` through the `features` shortcode:

```
## The Ultimate Hugo theme

Hugobricks covers all components you would like to have at hand. It is a power
engine for your web oriented projects.

{{</* features */>}}
```

The `<ul class="features">` that the shortcode emits is also what routes the section: the `features` rule in `params.sections` matches `ul.features`.

## The data

`data/<lang>/features.yaml` holds one entry per card:

```
- icon: /img/icons/material-symbols/200/rounded/auto_awesome_mosaic.svg
  title: Covers all components
  description: We aim to provide the following bricks: intro, title, image, cta, ...
- icon: /img/icons/material-symbols/200/rounded/performance_max.svg
  title: 99+ Google Lighthouse score
  description: Lightning fast website.
```
