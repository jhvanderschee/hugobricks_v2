---
title: Prices
---

The prices brick is an intro above a pricing table. You can see it in action on the [home page](/).

## Use this brick

To use this brick you only need the [pricing shortcode](/docs/shortcodes/pricing/):

```
{{</* pricing */>}}
```

Anything else you write in the section — typically a heading and a short line of text — becomes the centred intro above the table. The plans themselves come from `data/<lang>/pricing.yaml`. You can force the use of this block by writing:

```
---.prices
```
