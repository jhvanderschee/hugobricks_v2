---
title: Usecue payment
---

The usecue-payment shortcode marks the spot where the Usecue point-of-sale payment page takes over. You can see it in action on the [payment page](/payment/). To show it, write:

```
{{</* usecue-payment */>}}
```

The javascript of the webshop adds the amount owed and the order number from the cart, and loads the payment script from pos.usecue.com, which turns the page into a payment page for QR code, iDEAL, SEPA or credit card. The page around it should say "one moment please" — that is what a visitor without javascript keeps.

The account id comes from `webshop.yaml` (`pos_id`) and the language from the page; both can be overridden on the call:

```
{{</* usecue-payment id="18" lang="nl" */>}}
```

The element it renders is also what routes the section to the payment brick.
