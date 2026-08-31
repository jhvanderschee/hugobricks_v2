---
title: Header
weight: 3
---

The header settings live in `data/<lang>/header.yaml`.

## Logo image

This sets the image in the header, shown beside the text logo. The text logo consists of the `title` field from `general.yaml` and the `logo_subtitle` field from this file. Omit `logo_image` and the global `favicon_image` steps in; leave both empty for the pure text logo as on this website.

## Logo subtitle

When you omit the value for `logo_image` the text logo appears, and this is its second line.

## Mobile view at

`mobile_view_width` determines at which width the site switches to the mobile menu. It reaches CSS through a `data-mobile-width` attribute on the `<body>` and a few lines of `site.js`, because a media query cannot read a data file.

## Menuitems

This is an array that holds the main menu. The items consist of a `title` and a `link`, and may hold a nested `items` array for a submenu. The menu only feeds the banner: breadcrumbs are built from where a page sits in the content tree, not from this structure.

## Call To Action (CTA)

The header CTA is the button in the top right corner of each page. You can turn it on or off with the `active` variable; `title` and `link` define the text and the target.

```
cta:
  active: true
  title: Get started
  link: /get-started/
```

## Preheader

The preheader is the utility bar at the top of the page. Whether it shows at all, and in which style, is a [global setting](/docs/settings/global/); the line it shows is language-specific and lives here:

```
preheader: open Mon-Fri from 9-5
```
