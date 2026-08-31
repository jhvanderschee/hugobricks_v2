---
title: Global settings
weight: 1
---

The global settings are stored in `data/settings.yaml`, one level above the language-specific bundles. They are the switches that are the same in every language.

## Favicon

A website is not complete without a nice favicon image (shown in the address bar of your browser). The `favicon` block drives the full set — a PNG resized from `asset`, the SVG and ICO variants, an apple-touch-icon and a generated `site.webmanifest`:

```
favicon:
  asset: /uploads/branding/icon.png
  svg_image: /uploads/branding/icon.svg
  ico_image: /uploads/branding/icon.ico
  apple_mobile_web_app_title: Hugobricks
  site_webmanifest:
    name: Hugobricks The Ultimate Hugo Theme
    shortname: Hugobricks
    theme_color: "#000000"
    background_color: "#000000"
```

Without that block, a single `favicon_image` gives you one plain icon link. `favicon_image` is also the image the header and footer logo fall back to when their own `logo_image` is empty.

## Color name

You can set the palette of the theme by entering a color name here. 'yellow', 'red', 'blue' and 'green' are supported. Note that you can also override this per page with `color_name` in the front matter. You can also [manually customize](/docs/customizations/colors/) the colors.

## Sticky header

This boolean lets you enable a sticky header, meaning the header (and navigation) glues to the top when scrolling.

## Transparent header

This lifts the banner out of flow so a hero runs up behind it. It only takes effect on pages that open with a brick painting a full-bleed backdrop, and a page can force it on or off with `transparent_header` in its front matter.

## Dark header and dark footer

`dark_header` and `dark_footer` put the banner and the footer on a dark ground. `dark_header` can also be set per language in `data/<lang>/header.yaml`, and a page can override `dark_footer` in its own front matter.

## Pre-header

The preheader is the utility bar at the very top of the page. You can activate it and choose a dark or light style:

```
preheader:
  active: true
  is_light: true
```

Its text comes from `preheader` in `data/<lang>/header.yaml`, because it is language-specific.

## Custom cursor

`customcursor` enables the dot that trails the mouse. Off, and neither the script nor its stylesheet is shipped at all. The script declines to run on touch screens and under `prefers-reduced-motion`.

## Scroll animations

`intersectionobserver` fades the sections in as they scroll into view. Off, and the animation rules are not shipped.

## Blog and services filter

`filter_has_numbers` shows how many posts are left behind each tag in the filter dropdown of the blog and services grids. `page_size` is how many post teasers the blog shows per 'Load more posts' click.

## Webshop

`enable_webshop` turns the webshop on: it ships `webshop.js` and shows the cart icon in the header (the icon itself is also gated by `show_cart_icon` in `data/<lang>/webshop.yaml`, where the rest of the shop configuration lives).

## Search

`enable_search` puts a search icon in the banner, next to the cart. It links to the `/search` page, where the `search` shortcode renders a Google search scoped to this site — a working search without shipping an index. The icon only shows in languages that have a search page.
