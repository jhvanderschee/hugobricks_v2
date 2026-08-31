---
title: Pricing
---

The pricing shortcode renders a pricing table. You can see it in action on the [home page](/). To show the table, write:

```
{{</* pricing */>}}
```

The plans come from `data/<lang>/pricing.yaml`: the currency, the period and one entry per plan, each with a badge, a title, a description, a price and a list of features. Mark exactly one plan `featured: true` to lift it out of the row:

```
currency: $
period: /month

plans:
  - badge: budget
    title: Open-source
    description: Full-featured theme to create a super fast website.
    price: 0
    featured: true
    features:
      - Hugobricks theme/code
      - All available bricks
```

The `<ul class="prices">` it renders is also what routes the section to the [prices brick](/docs/bricks/prices/).
