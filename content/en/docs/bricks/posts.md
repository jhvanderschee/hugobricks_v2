---
title: Posts
---

If you want to show a list of (blog) posts on your website, you can use the posts brick: a centred intro above a grid of teaser cards. You can see it in action on the [blog page](/blog/).

## Use this brick

To use this brick you only need the [blog shortcode](/docs/shortcodes/blog/):

```
{{</* blog */>}}
```

Anything else you write in the section — typically a heading and a short line of text — becomes the centred intro above the grid. The cards come from the markdown files in `content/<lang>/posts/`, ordered newest first — a new post appears on the blog page by existing. Each card takes its thumbnail from the post's `image`, its title from `title` and its text from the post's first paragraph. A single post renders as the post brick, an article at reading width.

You can force the use of this block by writing:

```
---.posts
```
