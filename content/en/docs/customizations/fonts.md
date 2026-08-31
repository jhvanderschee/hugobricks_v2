---
title: Fonts
weight: 2
---

The font files are stored in `static/fonts/`. The font definitions can be found in `static/css/fonts.css`. Changing this file will change the fonts of your whole website. It looks like this:

```
@font-face {
    font-display: swap;
    font-family: 'Signika';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/signika-v20-latin-700.woff2') format('woff2');
}
@font-face {
    font-display: swap;
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/heebo-v21-latin-regular.woff2') format('woff2');
}
@font-face {
    font-display: swap;
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/heebo-v21-latin-600.woff2') format('woff2');
}
```

The two faces are then named in `static/css/variables.css`, each with a real fallback stack:

```
:root {
    --fontTitles: "Signika", ui-sans-serif, system-ui, sans-serif;
    --fontBody:   "Heebo", ui-sans-serif, system-ui, sans-serif;
}
```
