---
title: Shortcodes
weight: 2
---

You might wonder what the difference is between a Hugo 'shortcode' and a Hugo 'brick'. Shortcodes place reusable content in an inline way, somewhere inside a section. Bricks are complete sections of a page. An example of a shortcode is a form; an example of a brick is a 'Call to action brick'.

Below you find a list of all shortcodes in this project:

- [blog](/docs/shortcodes/blog/) — the grid of post teasers with a tag filter
- [breadcrumbs](/docs/shortcodes/breadcrumbs/) — the trail from home to the current page
- [button](/docs/shortcodes/button/) — a call-to-action link; a plain link with the class 'button' does the same
- [cart](/docs/shortcodes/cart/) — the shopping cart table, total and progress bar
- [checkout](/docs/shortcodes/checkout/) — the checkout form with the progress bar
- [checkoutform](/docs/shortcodes/checkoutform/) — the same checkout form, without the progress bar
- [contactbuttons](/docs/shortcodes/contactbuttons/) — phone and email as icon buttons, from `data/<lang>/general.yaml`
- [contactform](/docs/shortcodes/contact-form/) — the contact form, fields from `data/<lang>/contactform.yaml`
- [ctaform](/docs/shortcodes/cta-form/) — the call-to-action form, fields from `data/<lang>/ctaform.yaml`
- [faq](/docs/shortcodes/faq/) — the question groups from `data/<lang>/faqs.yaml`
- [features](/docs/shortcodes/features/) — the grid of icon features from `data/<lang>/features.yaml`
- [gallery](/docs/shortcodes/gallery/) — a thumbnail grid of every image in a folder
- [newsletterform](/docs/shortcodes/newsletterform/) — a newsletter signup, fields from `data/<lang>/newsletterform.yaml`
- [openinghours](/docs/shortcodes/openinghours/) — `data/<lang>/openinghours.yaml` as a list of days and hours
- [pricing](/docs/shortcodes/pricing/) — the pricing table from `data/<lang>/pricing.yaml`
- [products](/docs/shortcodes/products/) — the grid of product cards
- [reviews](/docs/shortcodes/reviews/) — the testimonials from `data/<lang>/reviews.yaml`
- [search](/docs/shortcodes/search/) — a site search form that hands the query to Google
- [services](/docs/shortcodes/services/) — the grid of service teasers
- [socialbuttons](/docs/shortcodes/socialbuttons/) — the social links from `data/<lang>/footer.yaml`
- [tabs](/docs/shortcodes/tabs/) — runs of markdown behind a tablist, one tab per `## Heading`
- [team](/docs/shortcodes/team/) — the grid of people from `data/<lang>/people.yaml`
- [usecue-payment](/docs/shortcodes/usecue-payment/) — the embedded Usecue payment page
- [video](/docs/shortcodes/video/) — a self-hosted HTML5 video
- [vimeo](/docs/shortcodes/vimeo/) — a Vimeo poster linking out, no iframe and no cookies
- [youtube](/docs/shortcodes/youtube/) — a YouTube poster linking out, no iframe and no cookies

Some things that used to need a shortcode are plain markdown now. They have kept their page here, because the pattern is still worth documenting:

- [Map](/docs/shortcodes/map/)
- [Subpages](/docs/shortcodes/subpages/)
