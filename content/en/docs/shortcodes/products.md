---
title: Products
---

The products shortcode renders the site's products as a grid of product cards. The products are the markdown files in `content/<lang>/products/`, ordered by their front-matter `weight`, so a new product appears by existing rather than by being added to a hand-written list. You can see it in action on the [webshop page](/webshop/). To show the grid, write:

```
{{</* products */>}}
```

The `<ul class="products">` it renders is also what routes the section to the [webshop brick](/docs/bricks/webshop/).
