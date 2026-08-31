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

[Get started now](/get-started/){:.button}

![](/uploads/illustrations/cuate/server.svg)
```

The `{:.button}` is a kramdown-style attribute list sitting directly against the link: it lands on the `<a>` as a class and turns it into a button. The `cta` rule in `params.sections` matches a last section that holds both a button and an image, which is what picks this brick.

## The shared closing CTA

Most pages close on the same call to action. That one is written once, in `content/<lang>/bricks/cta.md`, and pulled in with an empty named divider:

```
---.cta
```

Blog posts, service pages and documentation pages get it appended automatically. A page that wants a different closing message skips the divider and writes its own last section instead.
