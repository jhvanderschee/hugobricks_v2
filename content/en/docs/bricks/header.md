---
title: Header
---

The header brick is a full-bleed hero: the page title over a backdrop image with a scrim. When the page opens with one, the site banner sits transparent on top of it. You can see it in action on all four [example pages](/demo-paragliding/).

## Use this brick

To use this brick you should write the page title and an image with a Kramdown-style custom class 'background', like so:

```
# Walk the Alps with us

Experience the mountains as they were meant to be experienced.

![](/uploads/photos/hike/hike1.jpg){:.background}
```

The same section with a plain image (without the 'background' class) becomes an [intro](/docs/bricks/intro/) instead. You can force the use of this block by writing:

```
---.header
```
