---
title: Footer
weight: 4
---

The footer settings live in `data/<lang>/footer.yaml`.

## Logo image

Here you can specify the path to the logo image shown beside the footer's text logo (the site title from `general.yaml`). Leave it empty and the global `favicon_image` steps in; leave both empty for the text alone.

## Menu items

This is an array that holds the footer menu. The items consist of a `title` and a `link` field. In the title you put the page title and in link the relative url of that page.

## Socials

This is an array that holds the social links. The items consist of a `title`, a `link` and a `logo_image` field. These links represent the social media platforms of your choice. The logo images should be black SVG's on a transparent background. The same list is what the `socialbuttons` shortcode renders inside content.

## Footer text

The footer text is the bottom line of every page. Typically this holds texts like 'Made with love in Amsterdam (The Netherlands)'. On this website it reads: 'This theme is open source. More info on Github!'
