---
title: Colors
weight: 1
---

The color definitions can be found in `static/css/variables.css`. They are stored in CSS variables, so changing them changes the colors of your whole website. The defaults (from this website) look like this:

```
:root {
    --textDarker:   #1e282d;
    --textDark:     rgb(38 50 56);
    --textMedium:   rgb(38 50 56 / 0.7);
    --borderMedium: rgb(38 50 56 / 0.2);
    --borderLight:  rgb(38 50 56 / 0.075);
    --light:        rgb(38 50 56 / 0.035);
    --page:         #fff;
    --accent:       #f4b500;
    --accentDarker: #e6ac00;
    --scrim:        rgb(0 0 0 / 0.32);
}
```

## Color themes

The palettes differ only in the accent, so a theme is two tokens rather than a stylesheet of its own:

```
:root[data-color="red"]    { --accent: #ec0f0f; --accentDarker: #e00606; }
:root[data-color="blue"]   { --accent: #00adef; --accentDarker: #009ad5; }
:root[data-color="green"]  { --accent: #5fb22d; --accentDarker: #4f9625; }
:root[data-color="yellow"] { --accent: #f4b500; --accentDarker: #e6ac00; }
```

`color_name` in `data/settings.yaml` sets the palette site-wide; a page's own `color_name` front matter overrides it, which is what the [POS software demo](/demo-pos/) does to turn blue.

## Colorizing

The icons in this theme are black SVG's. The theme used to tint them with a `filter: contrast() sepia() hue-rotate()` hack, respelled once per palette. It now masks the accent through the shape instead, which is exact and follows the palette by itself:

```
.icon::before {
    background: var(--accent);
    mask: var(--icon) center / contain no-repeat;
}
```

The review stars and the pin on the map are drawn the same way. The one place a `filter` is still used on purpose is the portrait toning in `.avatar`, where the point is to tone a photograph rather than to recolor a glyph.
