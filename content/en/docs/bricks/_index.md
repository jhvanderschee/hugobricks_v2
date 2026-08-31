---
title: Bricks
weight: 2
---

What is a Hugo brick?

A Hugo brick is a reusable, stackable content block — such as a Call To Action (CTA) brick with a title, text, button and image — that can appear on multiple pages across a site. A page is a stack of bricks, written as one markdown file.

Bricks are not written as shortcodes any more. A page's markdown is split on its horizontal rules (`---`) and every chunk becomes one brick. Which brick a chunk gets is decided by what the chunk is made of: a section that opens with a blockquote is a `quote`, a section holding `ul.reviews` is a `reviews` brick, a first section with an `h1` over a background image is a `header`. Those rules live in `params.sections` in `hugo.yaml`.

Difference between Hugo shortcodes and bricks:

- Shortcodes: inline reusable content (for example a form or a set of review cards) within a section.
- Bricks: full content sections, designed as stackable page elements.

Below is a list of the documented bricks.

- [404 (not found)](/docs/bricks/404/)
- [About](/docs/bricks/about/)
- [Contact](/docs/bricks/contact/)
- [Call to action](/docs/bricks/cta/)
- [Features](/docs/bricks/features/)
- [Image](/docs/bricks/image/)
- [Image alt](/docs/bricks/image2/)
- [Intro](/docs/bricks/intro/)
- [Map](/docs/bricks/map/)
- [Posts](/docs/bricks/posts/)
- [Reviews](/docs/bricks/reviews/)
- [Team](/docs/bricks/team/)
- [Title](/docs/bricks/title/)
- [Title alt](/docs/bricks/title2/)
- [Webshop](/docs/bricks/webshop/)
- [Wide](/docs/bricks/wide/)

## Stacking bricks

Below is an example of a page ('page-title.md') with three bricks, stacked on top of each other. The `---` lines are what separates them:

```
---
title: Page title
---

# The Ultimate Theme You Need To Start Your Hugo Website

Hugobricks is a free website theme built with Hugo and vanilla CSS.

[Get started for free](/get-started/){:.button}

![](/uploads/brick_intro.png)

---

## The Ultimate Hugo theme

Hugobricks covers all components you would like to have at hand.

{{</* features */>}}

---

## Get started with Hugobricks today!

Experience the future of web development with Hugo and stackable content bricks.

[Get started now](/get-started/){:.button}

![](/uploads/illustrations/cuate/server.svg)
```

## Brick content

All of a brick's content lives in the page itself, and everything that is not page content — reviews, team members, features, pricing, form fields — comes from `data/<lang>/`.

## Shared bricks

Some furniture appears on many pages but should be written only once: the closing call to action, the address card with the map. Those live in `content/<lang>/bricks/` — currently `cta.md` and `map.md` — and any page pulls one in with a named divider that opens an empty section:

```
---.map
```

The shared page's content renders there as the brick the divider names. Edit `content/en/bricks/map.md` and every page showing the address card follows; add `content/nl/bricks/map.md` and the Dutch pages get their own.

A named divider with content after it does something different: it still splits, but forces that section to the brick it names, skipping the routing rules — `---.small` in front of a long text renders it at the narrow measure anyway.

## Page-specific content

Because every brick is written out in the page, making one page different from another is simply a matter of writing different markdown. Nothing is inherited, so nothing has to be overridden.
