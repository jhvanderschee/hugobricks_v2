---
title: Map
---

The map brick is a full-bleed map with a floating address card. Put it last on the page and it butts up against the footer. You can see it in action at the bottom of the [contact page](/contact/).

## Use this brick

To use this brick you only need an image with a Kramdown-style custom class 'map'; everything else you write in the section becomes the floating address card:

```
![](/uploads/map.png){:.map}

## Contact us

Usecue BV\
Soetendaal 7\
1081BL Amsterdam\
The Netherlands

{{</* contactbuttons */>}}
```

The pin in the middle of the map is drawn by the stylesheet, so the screenshot itself should not have one. You can force the use of this block by writing:

```
---.map
```

When the forced section is left empty, the shared address card from `content/<lang>/bricks/map.md` is pulled in. One site has one address: edit the one file and every page that shows the map follows.
