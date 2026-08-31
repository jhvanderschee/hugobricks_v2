---
title: Team
---

The team shortcode renders a grid of people. You can see it in action on the [team page](/team/). To show the grid, write:

```
{{</* team */>}}
```

The people come from `data/<lang>/people.yaml`, one entry per person:

```
- name: Gitio Hamano
  function: Source Code version controller
  image: /uploads/photos/avatars/1.jpeg
  description: Rings of Uranus hearts of the stars corpus.
  email: joost@vdschee.nl
  linkedin: https://www.linkedin.com/
```

Every contact icon carries the person's name in its accessible name, so a screen reader hears "Email Gitio Hamano" rather than the same address six times down the page. The `<ul class="team">` it renders is also what routes the section to the [team brick](/docs/bricks/team/).
