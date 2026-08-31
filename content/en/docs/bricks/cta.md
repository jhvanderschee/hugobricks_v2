---
title: Call to action
---

It is always nice (and good for conversion) to show a 'Call to action' on your page: a short text, leading to a button and a related image. An example of such a 'Call to action brick' can be found at the bottom of most pages of this website. It is the block titled 'Get started with Hugobricks today!'.

## Use this brick

Write it as the last section of the page — a heading, one paragraph, one button and an illustration:

```
---

## Get started with Hugobricks today!

Experience the future of web development with Hugo and stackable content bricks.
Build lightning-fast static sites with ease and flexibility.

{{</* button "Get started now" "/get-started/" */>}}

![](/uploads/illustrations/cuate/server.svg)
```

The `cta` rule in `params.sections` matches a last section that holds both a button and an image, which is what picks this brick.

## Page-specific content

The CTA used to live in one file and be repeated on every page. It is now written out per page, so a page that wants a different closing message simply writes a different one.
