---
title: Checkout form
---

The checkoutform shortcode renders the delivery-details form beside a running order summary — the same form the [checkout](/docs/shortcodes/checkout/) shortcode renders, without the progress bar under it. The inner text lands under the running total — the place for a word about how the payment is handled:

```
{{</* checkoutform */>}}Payments are 100% secure.{{</* /checkoutform */>}}
```

The shipping options and custom values come from `data/<lang>/webshop.yaml`, and the form it renders is also what routes the section to the checkout brick.
