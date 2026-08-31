---
title: Bricks
weight: 2
---

So, what is a Hugo brick? A Hugo brick is a reusable, stackable content block that can appear on multiple pages across a site. Typically a brick is a section on a website, that lives in the main landmark. The content of a page consists of a stack of bricks, written as one markdown file, split on horizontal rules (three minus signs in markdown). There is a rule set that reads the content and automatically assigns a brick type. The rules for this live in the config file of your website. You can override this by putting the its name behind the separator, like so: `---.cta`.

These are all documented bricks:  
[about](/docs/bricks/about/), 
[blocks](/docs/bricks/blocks/), 
[contact](/docs/bricks/contact/), 
[cta](/docs/bricks/cta/), 
[error404](/docs/bricks/error404/), 
[features](/docs/bricks/features/), 
[form](/docs/bricks/form/), 
[header](/docs/bricks/header/), 
[image](/docs/bricks/image/), 
[intro](/docs/bricks/intro/), 
[map](/docs/bricks/map/), 
[posts](/docs/bricks/posts/), 
[prices](/docs/bricks/prices/), 
[quote](/docs/bricks/quote/), 
[reviews](/docs/bricks/reviews/), 
[small](/docs/bricks/small/), 
[team](/docs/bricks/team/), 
[webshop](/docs/bricks/webshop/), 
[wide](/docs/bricks/wide/)

## Stacking bricks

Below is an example of a page ('page-title.md') with three bricks, stacked on top of each other.

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

All of a brick's content lives in the page itself, and everything that is not page content — reviews, team members, features, pricing and form fields are loaded with a shortcode and come from the data folder.

## Shared bricks

Some texts appear on many pages, like the closing call to action, the address card with the map. You do not have to copy these texts, but can store them in `content/<lang>/bricks/cta.md` and `content/<lang>/bricks/map.md`. Use an empty brick with a named divider to load this shared content:

```
---.map
---
```
