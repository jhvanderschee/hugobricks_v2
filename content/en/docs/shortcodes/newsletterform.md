---
title: Newsletter form
---

The newsletterform shortcode renders a newsletter signup form. You can see it in action on the [elements page](/elements/). To show the form, write:

```
{{</* newsletterform */>}}
```

The fields, the form's `action` and whether labels double as placeholders are defined in `data/<lang>/newsletterform.yaml`. The `id` lands on the `<form>` and prefixes its field ids; it defaults to `newsletterform`, so give a second copy on the same page an id of its own:

```
{{</* newsletterform id="signup" */>}}
```
