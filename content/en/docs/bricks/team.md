---
title: Team
---

The `team` brick is a centred intro above a grid of people. You can see it in action on the [team page](/team/).

## Use this brick

The intro is markdown; the cards come from `data/<lang>/people.yaml` through the `team` shortcode:

```
{{</* breadcrumbs */>}}

# Our team

Lorem dolor sit amet, consectetur adipiscing elit. Nam non laoreet nisi,
ac hendrerit lacus.

{{</* team */>}}
```

The `<ul class="team">` that the shortcode emits is also what routes the section: the `team` rule in `params.sections` matches `ul.team`.

## The data

`data/<lang>/people.yaml` holds one entry per person:

```
- name: Gitio Hamano
  function: Source Code version controller
  image: /uploads/photos/avatars/1.jpeg
  description: Rings of Uranus hearts of the stars corpus.
  email: joost@vdschee.nl
  linkedin: https://www.linkedin.com/
```

Each person is an `<article>`, and every contact icon carries the person's name in its accessible name, so a screen reader hears "Email Gitio Hamano" rather than the same address six times down the page.
