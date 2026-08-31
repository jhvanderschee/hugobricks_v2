---
title: Intro
---

The intro brick is a centred page opener: an h1, a lead paragraph, a call-to-action and a hero illustration. You can see it in action as the first section on the [home page](/) of this website.

## Use this brick

To use this brick you should write an h1 as the first section of the page, like so:

```
# The Ultimate Theme You Need To Start Your Hugo Website

Hugobricks is a free website theme built with Hugo and vanilla CSS, providing
everything you need to jumpstart your Hugo website and save valuable time.

{{</* button "Get started for free" "/get-started/" */>}}

![](/uploads/brick_intro.png)
```

An opening section becomes a [header](/docs/bricks/header/) instead of an intro when its image carries the 'background' class. And when the h1 section is the *only* section on the page, it renders as [wide](/docs/bricks/wide/) instead — the intro brick is an opener for a page with more sections below it.

You can force the use of this block by writing:

```
---.intro
```
