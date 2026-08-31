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

{{</* button "Get started for free" "/get-started/" */>}}

![](/uploads/brick_intro.png)

---

## The Ultimate Hugo theme

Hugobricks covers all components you would like to have at hand.

{{</* features */>}}

---

## Get started with Hugobricks today!

Experience the future of web development with Hugo and stackable content bricks.

{{</* button "Get started now" "/get-started/" */>}}

![](/uploads/illustrations/cuate/server.svg)
```

## Brick content

All of a brick's content lives in the page itself. There is no separate 'default content' file any more: what used to sit in `content/en/bricks/cta.md` is now written straight into the page, and everything that is not page content — reviews, team members, features, pricing, form fields — comes from `data/<lang>/`.

## Page-specific content

Because every brick is written out in the page, making one page different from another is simply a matter of writing different markdown. Nothing is inherited, so nothing has to be overridden.
