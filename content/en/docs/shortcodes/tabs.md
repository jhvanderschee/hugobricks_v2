---
title: Tabs
---

The `tabs` shortcode puts runs of markdown behind a tablist: each run opens on an `## Heading`, which becomes its tab, and the runs are separated by `---` — the same separator the bricks use, consumed by the shortcode before the page is split into sections. You can see it in action on the [Elements page](/elements/).

```
{{</* tabs */>}}

## First tab

Aliquam et dictum sem.

---

## Second tab

Aliquam et dictum sem.

{{</* /tabs */>}}
```

The tabs are real `role="tab"` buttons with the keyboard behaviour the ARIA pattern asks for — arrow keys move along the tablist, Home and End jump to its ends. Without javascript the panels simply stack under their own headings and the tablist stays hidden, so the content is always in the page for search engines, printable and linkable.

Tabs hide everything but one panel, so use them for content where the reader genuinely picks one variant — installation steps per operating system, code per language. For a long list of questions, the [F.A.Q. shortcode](/docs/shortcodes/faq/) — `<details>` and `<summary>` — is the better way to collapse it.
