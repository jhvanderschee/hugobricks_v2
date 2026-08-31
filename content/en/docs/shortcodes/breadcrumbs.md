---
title: Breadcrumbs
---

Breadcrumb paths are a single line of links (often placed above the title) that show a page's location in the site hierarchy. Every website should have breadcrumbs, as it benefits SEO as well as the user's understanding of the site's structure. See it in action on the [elements page](/elements/). To show the breadcrumbs, write:

```
{{</* breadcrumbs */>}}
```

It renders an ordered list inside a `<nav aria-label="Breadcrumb">`, with the current page marked `aria-current="page"`.
