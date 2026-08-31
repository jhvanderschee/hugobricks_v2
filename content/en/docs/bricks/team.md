---
title: Team
---

The team brick is a centred intro above a grid of people. You can see it in action on the [team page](/team/).

## Use this brick

To use this brick you only need the [team shortcode](/docs/shortcodes/team/):

```
{{</* team */>}}
```

Anything else you write in the section — typically a heading and a short line of text — becomes the centred intro above the grid. The people come from `data/<lang>/people.yaml`, one entry per person:

```
- name: Gitio Hamano
  function: Source Code version controller
  image: /uploads/photos/avatars/1.jpeg
  description: Rings of Uranus hearts of the stars corpus.
  email: joost@vdschee.nl
  linkedin: https://www.linkedin.com/
```

You can force the use of this block by writing:

```
---.team
```
