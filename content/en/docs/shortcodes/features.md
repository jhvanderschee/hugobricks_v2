---
title: Features
---

The features shortcode renders a grid of icon features — the selling points of your service or product. You can see it in action on the [home page](/). To show the grid, write:

```
{{</* features */>}}
```

The cards come from `data/<lang>/features.yaml`, one entry per card:

```
- icon: /img/icons/material-symbols/200/rounded/auto_awesome_mosaic.svg
  title: Covers all components
  description: We aim to provide the following bricks: intro, title, image, cta, ...
```

The `<ul class="features">` it renders is also what routes the section to the [features brick](/docs/bricks/features/).
