---
title: Intro
---

Say you want a neat intro 'component' — see the first content section on the home page of this sample website. It is a centred page opener: an `h1`, a lead paragraph, a call-to-action and a hero illustration.

## Use this brick

Write it as the first section of the page:

```
---
title: Page title
---

# The Ultimate Theme You Need To Start Your Hugo Website

Hugobricks is a free website theme built with Hugo and vanilla CSS, providing
everything you need to jumpstart your Hugo website and save valuable time.

{{</* button "Get started for free" "/get-started/" */>}}

![](/uploads/brick_intro.png)
```

An opening section becomes a `header` instead of an `intro` when its image carries `{:.background}` — see the [title alt](/docs/bricks/title2/) brick.
