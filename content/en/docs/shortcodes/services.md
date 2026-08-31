---
title: Services
---

The services shortcode renders the site's services as a grid of teaser cards under a filter that narrows them by tag. The services are the markdown files in `content/<lang>/services/`, so a new service appears by existing rather than by being added to a hand-written list. You can see it in action on the [services page](/our-services/). To show the grid, write:

```
{{</* services */>}}
```

The cards are the same ones the [blog](/docs/shortcodes/blog/) uses, without the dates — a service is not news — and they route the section to the same [posts brick](/docs/bricks/posts/). The filter offers every tag on the site; a tag no service carries is disabled rather than hidden.
