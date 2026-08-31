---
title: Video
---

A self-hosted HTML5 video plays without loading anything from a streaming service. You can see it in action on the [elements page](/elements/). To show a video, write:

```
{{</* video "/uploads/video/flowers.mp4" */>}}
```

A poster image shown before playback and a caption are passed as named parameters:

```
{{</* video src="/uploads/video/flowers.mp4" poster="/uploads/gallery/01.jpg" caption="Flowers" */>}}
```

The shortcode renders a `<figure>` holding the video, with a download link as the fallback for browsers without HTML5 video. There are two more optional parameters: `class` lands on the figure, and `preload` is `none`, `metadata` (the default) or `auto`. For a video from a streaming service, use the [Youtube](/docs/shortcodes/youtube/) or [Vimeo](/docs/shortcodes/vimeo/) shortcode instead.
