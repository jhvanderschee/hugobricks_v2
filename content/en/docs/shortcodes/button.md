---
title: Button
---

Buttons are a great way to drive conversion. They are actually links with the class 'button'. You can see them in action on the [elements page](/elements/). To show a button, write an ordinary markdown link and label it with an attribute list:

```
[Get started now](/get-started/){:.button}
```

The attribute list has to sit directly against the link, with no space between. Extra classes are chained onto it, so `style` and `size` are written the same way as any other class:

```
[Contact us](/contact/){:.button.secondary}
[Read more](/blog/){:.button.ghost.smaller}
```

Styles are `ghost`, `secondary` and `secondary ghost`; the one size is `smaller`.

Two buttons side by side are two links in one paragraph — put them on consecutive lines, with no blank line between them:

```
[Get started for free](/get-started/){:.button}
[Read the docs](/docs/){:.button.secondary}
```

A `button` shortcode is still available and does the same thing, in a positional and a named form:

```
{{</* button "Get started for free" "/get-started/" */>}}
{{</* button label="Contact us" url="/contact/" style="secondary" */>}}
```

The content of this theme is written with the attribute list rather than the shortcode: it keeps a call to action reading as the link it is, and it is the same notation `{:.background}` and `{:.map}` already use.
