---
title: Opening hours
---

The openinghours shortcode renders your opening hours as a list of days, pairing each day with its hours. You can see it in action on the [elements page](/elements/). To show the list, write:

```
{{</* openinghours */>}}
```

The hours come from `data/<lang>/openinghours.yaml`, one entry per day (`mon` through `sun`), and a day without a start time is shown as closed:

```
mon:
  start: 9.00 am
  end: 5.00 pm
sat:
  start:
  end:
```
