---
title: Webshop
---

The webshop brick is a centred intro above a grid of product cards. The cart lives in the visitor's browser (in localStorage), so the shop runs on a static site and the checkout mails the order. You can see it in action on the [webshop page](/webshop/).

## Use this brick

To use this brick you only need the [products shortcode](/docs/shortcodes/products/):

```
{{</* products */>}}
```

Anything else you write in the section — typically a heading and a short line of text — becomes the centred intro above the grid. The grid lists every product in `content/<lang>/products/`, ordered by `weight` — a new product appears by existing. A single product page is the product brick, rendered from the product's front matter.

You can force the use of this block by writing:

```
---.webshop
```

## Cart, checkout and payment

The rest of the shop is settled in `data/<lang>/webshop.yaml`: the currency, the page links, the shipping options, the custom values (gift wrapping, engraving), the form handler the order is posted to (`form_handler`) and the Usecue POS account (`pos_id`) that takes the payment. `show_cart_icon` puts the cart in the banner and loads the javascript.

The cart, checkout and payment pages each have a brick of their own, picked by what the [cart](/docs/shortcodes/cart/), [checkout](/docs/shortcodes/checkout/) and [usecue-payment](/docs/shortcodes/usecue-payment/) shortcodes render.
