---
title: Webshop ~ Product doc
---

The `webshop` brick is a centred intro above a grid of product cards; a single product page is the `product` brick, with the gallery beside the title, the price and the add-to-cart form.

## Use this brick

The grid is written the same way as the [posts](/docs/bricks/posts/) grid:

```
---
title: Webshop
---

# Webshop

This is a demo of the webshop.

- [![](/uploads/products/coffee/1.jpg) **Buy me a coffee**](/products/3/) A perfect coffee in the morning absolutely makes my day.
- [![](/uploads/products/beer/5.jpg) **Buy me a beer**](/products/2/) I like beer a lot!
```

## The products

Products are markdown files in `content/<lang>/products/`, one file per product. The front matter carries the specification:

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
```

The rest of the shop — cart, checkout and payment — is settled in `data/<lang>/webshop.yaml`: the currency, the shipping options, the custom values (gift wrapping, engraving) and the addresses the order is mailed to.
