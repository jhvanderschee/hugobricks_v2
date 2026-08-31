---
title: Posts
---

If you want to show a list of (blog) posts on your website, you can use the `posts` brick: a centred intro above a grid of teaser cards. You can see it in action on the [blog page](/blog/).

## Use this brick

The intro is markdown; the cards come from the posts themselves through the `blog` shortcode:

```
---
title: Blog
---

{{</* breadcrumbs */>}}

# Blog posts

This is a demo of the blog. In ultricies vel enim vel pulvinar.

{{</* blog */>}}
```

The `<ul class="posts">` that the shortcode emits is also what routes the section: the `posts` rule in `params.sections` matches `ul.posts`.

## The posts

The posts are the markdown files in `content/<lang>/posts/`, and each one renders as a [post](/docs/bricks/wide/) at reading measure. A new post appears on the blog page by existing — there is no list to keep up to date.

Each card takes its thumbnail from the post's `image`, its title from `title`, and its text from the post's first paragraph of prose. They are ordered newest first, by `date`:

```
---
title: Jamstack has matured
image: /uploads/gallery/04.jpg
date: 2022-10-19
tags:
  - jamstack
---
```
