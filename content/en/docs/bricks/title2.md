---
title: Title alt
---

The alternative title brick is the `header`: a full-bleed hero with the page title over a photograph. You can see it in action on the [images page](/images/) and on the demo pages.

## Use this brick

It is the `title` brick plus a background image. The `{:.background}` is what makes the difference — the brick lifts that image out of the flow and paints it behind the copy, with a scrim over it:

```
---
title: Images
transparent_header: true
---

# The sky is the limit, with Hugobricks!

Hugobricks is a free website theme for Hugo.

{{</* button "Get started for free" "/get-started/" */>}}

![](/uploads/gallery/05.jpg){:.background}
```

`transparent_header: true` in the front matter lifts the banner out of flow so the hero runs up behind the logo and the menu. It is a site-wide switch in `data/settings.yaml` that a page may override, and it only takes effect when the page opens with a brick that paints a backdrop.
