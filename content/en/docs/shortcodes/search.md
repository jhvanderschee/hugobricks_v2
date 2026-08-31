---
title: Search
---

The `search` shortcode renders a site search that hands the query to Google, scoped to this site with a `sitesearch` field — a working search on a static site without shipping an index. You can see it in action on the [search page](/search/).

```
{{</* search */>}}
```

Turn on `enable_search` in `data/settings.yaml` and the banner shows a search icon linking to the `/search` page, in each language that has one.
