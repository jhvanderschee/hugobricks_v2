---
title: Map
---

The `map` brick is a full-bleed map with a floating address card. Put it last on the page and it butts up against the footer. If you want to see this brick in action, take a look at the bottom of the [contact page](/contact/).

## Use this brick

The section starts with a screenshot of the map area, marked `{:.map}`, followed by the address:

```
---

![](/uploads/map.png){:.map}

## Contact us

Usecue BV\
Soetendaal 7\
1081BL Amsterdam\
The Netherlands

{{</* contactbuttons */>}}
```

The `{:.map}` is what routes the section: the `map` rule in `params.sections` matches `img.map`. The pin in the middle of the map is drawn by the stylesheet, so the screenshot itself should not have one.

## The shared address card

One site has one address, so the block above is written once, in `content/<lang>/bricks/map.md`, and every page that wants it pulls it in with an empty named divider:

```
---.map
```

That is how the contact page and the demo pages show it: edit the one file and they all follow.
