---
title: Video
---

An HTML5 video is written straight into the markdown. You can see it in action on the [elements page](/elements/):

```
<figure>
    <video controls preload="metadata" poster="/uploads/gallery/01.jpg">
        <source src="/uploads/video/flowers.mp4" type="video/mp4">
        <p>Your browser does not support HTML5 video.
           Here is <a href="/uploads/video/flowers.mp4">a link to download the video</a>.</p>
    </video>
</figure>
```

The same shape works for audio, with `<audio>` and a `type="audio/mpeg"` source. Both are sized by the core stylesheet, so they behave like any other piece of media in the flow.
