---
title: Image
---

The `image` brick puts prose in one column and a picture in the other. Stack several of them and they zig-zag: every other one sits on a tinted band with its columns swapped, which is the [image alt](/docs/bricks/image2/) face of the same brick.

## Use this brick

A heading, body copy and one image carrying the class `float`. The `{:.float}` is a kramdown-style attribute list: it has to sit directly against the image, it lands on the `<img>` as a class, and that class is what routes the section to this brick — without it the section is just prose with a picture in it. The brick lifts the image out of the flow into its own column, so it does not matter whether you write it above or below the text:

```
---

## It all starts here

Mauris in nisi ex. Etiam ultricies ipsum id turpis blandit bibendum.

![](/uploads/photos/hike/hike2.jpg){:.float}
```

You can see it in action on the [images page](/images/) and on all four demo pages.
