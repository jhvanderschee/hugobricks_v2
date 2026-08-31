---
title: About
---

The `about` brick is a personal introduction: a round portrait, an `h1`, a paragraph of body copy and a row of social links. You can see it in action on the [about page](/about/).

## Use this brick

```
---
title: About
---

![This is not me](/uploads/photos/avatars/2.jpeg)

# Hey, my name is Joost

Together with my friend 'Fenix' I have built Hugobricks, a theme that allows
you to create a website by stacking content bricks.

{{</* socialbuttons */>}}
```

The portrait is a plain markdown image; the brick makes it round. The social links come from `data/<lang>/footer.yaml`.
