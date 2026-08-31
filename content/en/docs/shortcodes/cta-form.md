---
title: CTA form
---

A CTA (call to action) form is an essential part of your website's conversion. The fields for this form are defined in `data/<lang>/ctaform.yaml`. You can see the form in action on the [elements page](/elements/) and at the bottom of the [hiking demo](/demo-hiking/). To show it in your content, write:

```
{{</* ctaform */>}}
```

A section whose content is a heading and a form is what routes the `form` brick, so this is usually all a section holds:

```
---

## Shut up and take my money!

{{</* ctaform */>}}
```
