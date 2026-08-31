---
title: Blog
---

The blog shortcode renders the site's posts as a grid of teaser cards, newest first, under a filter that narrows them by tag. The posts are the markdown files in `content/<lang>/posts/`, so a new post appears by existing rather than by being added to a hand-written list. You can see it in action on the [blog page](/blog/). To show the grid, write:

```
{{</* blog */>}}
```

Each card takes its thumbnail from the post's `image`, its title from `title` and its text from the post's first paragraph. The tags in the filter are the ones the posts carry in their front matter, and `filter_has_numbers` in `data/settings.yaml` decides whether each is offered with a count. The filter and the paging are javascript; without it the whole list shows, unfiltered and unpaged.

The `<ul class="posts">` it renders is also what routes the section to the [posts brick](/docs/bricks/posts/).
