---
title: Features
---

Want to show the selling points of your service or product? The features brick is a centred intro above a grid of icon features. You can see it in action on the [home page](/) of this website.

## Use this brick

To use this brick you only need the [features shortcode](/docs/shortcodes/features/):

```
{{</* features */>}}
```

Anything else you write in the section — typically a heading and a short line of text — becomes the centred intro above the grid. The cards come from `data/<lang>/features.yaml`, one entry per card:

```
- icon: /img/icons/material-symbols/200/rounded/auto_awesome_mosaic.svg
  title: Covers all components
  description: We aim to provide the following bricks: intro, title, image, cta, ...
```

You can force the use of this block by writing:

```
---.features
```
