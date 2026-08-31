---
title: Checkout
---

The checkout shortcode renders the checkout page: the delivery-details form beside a running order summary, with the progress bar under it. You can see it in action on the [checkout page](/checkout/). The inner text lands under the running total — the place for a word about how the payment is handled:

```
{{</* checkout */>}}Payments are 100% secure.{{</* /checkout */>}}
```

The shipping options and custom values (gift wrapping and the like) come from `data/<lang>/webshop.yaml`, and the javascript of the webshop fills the summary from the cart it keeps in localStorage. The form posts the order to the form handler named in the same file, which mails it and sends the visitor on to the payment page.

The form it renders is also what routes the section to the checkout brick. Use the [checkoutform](/docs/shortcodes/checkoutform/) shortcode instead if you want the same form without the progress bar.
