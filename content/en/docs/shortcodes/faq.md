---
title: F.A.Q.
---

Want to add a block with the most frequently asked questions? Then use the code below. Do you want to see it in action? Have a look at the [FAQ page](/faq/) or the [elements page](/elements/).

```
{{</* faq */>}}
```

The data for the FAQs is stored in `data/<lang>/faqs.yaml` and looks like this:

```
- title: Hugobricks theme
  faqs:
    - question: Why choose Hugobricks for my next project?
      answer: Hugo allows you to build a fast, efficient, ...
    - question: Does Hugobricks offer a good performance?
      answer: Hugobricks is renowned for its exceptional ...
- title: Scalability, ease of use and flexibility?
  faqs:
    - question: What about scalability and portability
      answer: Whether you're building a personal blog or ...
```

You can load a subset of the FAQs by adding an index number. It then shows one group only, without its heading — the example below shows the first group:

```
{{</* faq 1 */>}}
```

Each question is a `<details>` with the answer as its direct child, so the whole thing works with Javascript turned off.
