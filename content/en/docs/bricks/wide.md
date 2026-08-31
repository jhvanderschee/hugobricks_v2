---
title: Wide
---

The wide brick is a single column at reading width, used for documentation-style and long-form pages. You can see it in action on [basic page 1](/basic/) and the [privacy policy](/privacy-policy/).

## Use this brick

Anything that is text and nothing else lands here — it is the fallback brick that renders a section no other rule claims:

```
{{</* breadcrumbs */>}}

# Basic page 1

Lorem dolor sit amet, consectetur adipiscing elit. Nam non laoreet nisi,
ac hendrerit lacus.

## Heading 2

Nam elementum bibendum augue quis hendrerit.
```

You can force the use of this block by writing:

```
---.wide
```
