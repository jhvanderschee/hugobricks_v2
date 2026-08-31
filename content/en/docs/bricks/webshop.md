---
title: Webshop ~ Product doc
---

The `webshop` brick is a centred intro above a grid of product cards; a single product page is the `product` brick, with the picture beside the title, the price and the add-to-cart form. The cart itself lives in the visitor's browser — `webshop.js` keeps it in localStorage — so the shop runs on a static site, and the checkout mails the order.

## Use this brick

Write the intro and drop in the `products` shortcode; the grid lists every product, ordered by its `weight`, so a new product appears by existing rather than by being added to a hand-written list:

```
---
title: Webshop
---

# Webshop

This is a demo of the webshop.

{{</* products */>}}
```

## The products

Products are markdown files in `content/<lang>/products/`, one file per product. The front matter carries the specification — the body is the description shown beside the add-to-cart form:

```
---
title: Buy me a coffee
image: /uploads/products/coffee/1.jpg
images:
- image: /uploads/products/coffee/2.jpg
variant_type: size
variants:
- name: tall
  price: 2.5
  sku: coffeetall
- name: grande
  price: 3.5
  sku: coffeegrande
weight: 2
---

A perfect coffee in the morning absolutely makes my day.
```

## Cart, checkout and payment

The rest of the shop is settled in `data/<lang>/webshop.yaml`: the currency, the page links, the shipping options, the custom values (gift wrapping, engraving), the form handler the order is posted to (`form_handler`) and the Usecue POS account (`pos_id`) that takes the payment. `show_cart_icon` puts the cart in the banner and loads the javascript.

The checkout posts to the form handler, which checks a spam-timer token the javascript fetched when the page opened, mails the order, and sends the visitor on to the payment page. There the `usecue-payment` shortcode hands the POS the amount owed and the order number, and pay.js turns the page into a payment page for QR code, iDEAL, SEPA or credit card:

```
# Payment

One moment please, we are loading the payment page.

{{</* usecue-payment */>}}
```

The checkout page writes its form with the paired `checkoutform` shortcode — the shipping options and custom values come from the data file, and the inner text lands under the running total:

```
# Checkout

{{</* checkoutform */>}}
*Payments are 100% secure.*
{{</* /checkoutform */>}}
```
