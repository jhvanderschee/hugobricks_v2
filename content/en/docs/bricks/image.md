---
title: Image
---

The image brick puts text in one column and a picture in the other. Stack several of them and they zig-zag: every other one sits on a tinted band with its columns swapped (the 'image alt' face of the same brick). You can see it in action on the [images page](/images/) and on all four example pages.

## Use this brick

To use this brick you should use an image with a Kramdown-style custom class 'float', like so:

```
## It all starts here

Mauris in nisi ex. Etiam ultricies ipsum id turpis blandit bibendum.

![](/uploads/photos/hike/hike2.jpg){:.float}
```

The brick lifts the image out of the text into its own column, so it does not matter whether you write it above or below the text. You can force the use of this block by writing:

```
---.image
```

... or, to start on the tinted band with the columns swapped:

```
---.image-alt
```
