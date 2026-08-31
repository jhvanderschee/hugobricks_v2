---
title: Contact form
---

The contact form is an essential part of your website's conversion. The fields for this form are defined in `data/<lang>/contactform.yaml`. You can see the form in action on the [elements page](/elements/) and on the [contact page](/contact/). To show the contact form in your content, write:

```
{{</* contactform */>}}
```

A second copy on the same page needs an id of its own, which lands on the `<form>` and prefixes its field ids:

```
{{</* contactform id="signup" */>}}
```
