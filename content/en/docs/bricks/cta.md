---
title: Call to action
---

It is always nice (and good for conversion) to show a 'Call to action' on your page: a short text, a button and a related image. You can see it in action at the bottom of most pages of this website — it is the block titled 'Get started with Hugobricks today!'.

## Use this brick

To use this brick you should end the last section of the page on a button. A heading, a paragraph and an image are not required but typical, like so:

```
## Get started with Hugobricks today!

Experience the future of web development with Hugo and stackable content bricks.

[Get started now](/get-started/){:.button}

![](/uploads/illustrations/cuate/server.svg)
```

The `{:.button}` is a Kramdown-style custom class sitting directly against the link: it turns the link into a button. You can force the use of this block by writing:

```
---.cta
```

When the forced section is left empty, the shared call to action from `content/<lang>/bricks/cta.md` is pulled in. That way the closing message is written once and reused on many pages. Blog posts, service pages and documentation pages get it appended automatically.
