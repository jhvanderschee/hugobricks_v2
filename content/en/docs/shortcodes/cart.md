---
title: Cart
---

The cart shortcode renders the shopping cart: the table with its "cart is empty" row, the total, the link on to the checkout and the progress bar. You can see it in action on the [cart page](/cart/). To show the cart, write:

```
{{</* cart */>}}
```

The javascript of the webshop replaces the table body and the total with the cart it keeps in localStorage; without javascript the page shows an honest empty cart. The currency symbol and the page links come from `data/<lang>/webshop.yaml`.

The `<p class="carttotal">` it renders is also what routes the section to the cart brick.
