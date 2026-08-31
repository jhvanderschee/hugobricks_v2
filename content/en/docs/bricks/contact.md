---
title: Contact
---

The `contact` brick puts a contact form beside an address. You can see it in action on the [contact page](/contact/).

## Use this brick

The section holds a form and the address lines that go next to it. Everything that is not the form becomes the `<address>`:

```
{{</* contactform */>}}

Lorem ipsum dolor sit amet consectetur adipisicing elit.

Soetendaal 7  
1081BL Amsterdam  
The Netherlands

joost@vdschee.nl  
+31 618 518 928

{{</* socialbuttons */>}}
```

The fields of the form are defined in `data/<lang>/contactform.yaml`.
