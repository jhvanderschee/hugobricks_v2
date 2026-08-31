---
title: Blocks
---

The blocks brick is an intro above a grid of image tiles: each tile is a picture, a bold title and a short line, and the whole tile is one link. You can see it in action on the [services page](/our-services/).

## Use this brick

To use this brick you should write a list of links, each holding an image and a bold title, like so:

```
## Alternative services

Hugobricks covers all components you would like to have at hand.

- [![](/uploads/gallery/01.jpg) **Covers all components** Includes many bricks.](/our-services/)
- [![](/uploads/gallery/02.jpg) **99+ Lighthouse score** Lightning fast website.](/our-services/)
- [![](/uploads/gallery/03.jpg) **Themeable through CSS variables** Easily themeable.](/our-services/)
```

To be precise: the blocks rule matches any section holding both a list and bold text, anywhere in the section — the shape above is simply what renders well as tiles. The rule sits near the end of `params.sections`, so the shortcode lists (features, team, posts, reviews, prices, products) are claimed by their own rules first, and a section with an h1 becomes an [intro](/docs/bricks/intro/) before this rule is reached — which is why a blocks section opens with an h2. If a plain prose section with a list and a bold word lands here unintentionally, force it to [wide](/docs/bricks/wide/) by opening it with `---.wide`.

You can force the use of this block by writing:

```
---.blocks
```
