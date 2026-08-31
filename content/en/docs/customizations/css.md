---
title: CSS overrides
weight: 5
---

Want to go all the way with customization? No problem! With CSS you can make it even look [like this](https://www.postgrowthcities.com/). The sky is the limit.

The stylesheet is authored as many small files under `static/css/` and shipped as one, so splitting it costs nothing at request time:

```
static/css/variables.css      design tokens: colour, type, measure, rhythm
static/css/fonts.css          the @font-face rules
static/css/style.css          the shared core
static/css/header.css         the banner
static/css/footer.css         the footer
static/css/sections/*.css     one file per brick
```

Order is the cascade: tokens and faces first, then the shared core, then the chrome, then the bricks. `sections/*.css` comes last so a brick can override the core, and no brick file depends on the order of another. Add a file of your own to `static/css/sections/` and it is picked up automatically; in production the bundle is minified and fingerprinted.

&nbsp;

## Customization examples

Some examples of websites that use Hugobricks:

- https://www.aadprins.preview.usecue.com
- https://www.postgrowthcities.com
- https://www.klachtencommissievj.preview.usecue.com/
