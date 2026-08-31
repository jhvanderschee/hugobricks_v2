---
title: Global settings
weight: 1
---

The global settings are stored in `data/settings.yaml`, one level above the language-specific bundles. They are the switches that are the same in every language.

## Favicon image

A website is not complete without a nice favicon image (shown in the address bar of your browser). Use an SVG image for the best result.

## Color name

You can set the palette of the theme by entering a color name here. 'yellow', 'red', 'blue' and 'green' are supported. Note that you can also override this per page with `color_name` in the front matter. You can also [manually customize](/docs/customizations/colors/) the colors.

## Sticky header

This boolean lets you enable a sticky header, meaning the header (and navigation) glues to the top when scrolling.

## Transparent header

This lifts the banner out of flow so a hero runs up behind it. It only takes effect on pages that open with a brick painting a full-bleed backdrop, and a page can force it on or off with `transparent_header` in its front matter.

## Dark header and dark footer

`dark_header` and `dark_footer` put the banner and the footer on a dark ground.

## Pre-header

The preheader is the utility bar at the very top of the page. You can activate it and choose a dark or light style:

```
preheader:
  active: true
  is_light: true
```

Its text comes from `preheader` in `data/<lang>/header.yaml`, because it is language-specific.
