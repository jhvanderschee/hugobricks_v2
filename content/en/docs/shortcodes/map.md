---
title: Map
---

A map is [an image](/uploads/map.png) with a marker on top of it. The marker is drawn by the stylesheet, so your screenshot should not have one. Make sure the image is large enough: 900x400 pixels is the minimum. You can see it in action on the [elements page](/elements/).

There is no shortcode for it any more. A map is a linked image carrying the class `map`:

```
[![](/uploads/map.png){:.map}](https://link.to.map.location)
```

The `{:.map}` is a kramdown-style attribute list: it has to sit directly against the image it labels, and it lands on the `<img>` as a class. That class is also what routes a whole section to the [map brick](/docs/bricks/map/), which is the full-bleed variant with a floating address card.
