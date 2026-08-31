---
title: Youtube
---

Youtube is a popular video streaming service, from a company that is known for tracking and profiling. The solution is a poster image that links out to Youtube, so nothing is loaded from Youtube until the visitor clicks it. You can see it in action on the [elements page](/elements/). To show the poster, write:

```
{{</* youtube qtIqKaDlqXo */>}}
```

Give only the video id and the poster comes from Youtube's thumbnail server at build time, processed and served from your own site. To host the poster yourself, pass a local image as well:

```
{{</* youtube "qtIqKaDlqXo" "/uploads/youtubeposter.jpg" */>}}
{{</* youtube id="qtIqKaDlqXo" image="/uploads/youtubeposter.jpg" */>}}
```

The play button and wordmark are painted by the stylesheet, and a remote fetch that fails only costs the poster, never the build. [Vimeo](/docs/shortcodes/vimeo/) works the same way.
