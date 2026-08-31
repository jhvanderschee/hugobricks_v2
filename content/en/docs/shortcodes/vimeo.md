---
title: Vimeo
---

Vimeo normally embeds with an iframe that loads from Vimeo's servers on page load. The solution is a poster image that links out to Vimeo, so nothing is loaded from Vimeo until the visitor clicks it. You can see it in action on the [elements page](/elements/). To show the poster, write:

```
{{</* vimeo 727145223 */>}}
```

Give only the video id and the poster is looked up through Vimeo's oEmbed API at build time, processed and served from your own site. To host the poster yourself, pass a local image as well:

```
{{</* vimeo id="727145223" image="/uploads/gallery/01.jpg" */>}}
```

The play button and wordmark are painted by the stylesheet, and a remote fetch that fails only costs the poster, never the build. [Youtube](/docs/shortcodes/youtube/) works the same way.
