---
title: Contact
---

The contact brick puts a contact form beside an address. You can see it in action on the [contact page](/contact/).

## Use this brick

To use this brick you only need the [contactform shortcode](/docs/shortcodes/contact-form/); everything else you write in the section becomes the address next to it:

```
{{</* contactform */>}}

Soetendaal 7  
1081BL Amsterdam  
The Netherlands

{{</* socialbuttons */>}}
```

The fields of the form are defined in `data/<lang>/contactform.yaml`. You can force the use of this block by writing:

```
---.contact
```
