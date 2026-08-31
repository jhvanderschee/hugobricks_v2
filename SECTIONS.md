# Sections

Every brick found on <https://www.hugobricks.preview.usecue.com/> (100 pages
crawled), rebuilt as one partial in `layouts/_partials/sections/`, plus a `form`
brick split out of `small`.

A page's markdown is split on its horizontal rules (`---`) by
`layouts/_partials/section_map.html`, which also decides which brick renders
each chunk, using the rules in `params.sections`; `sections_logic.html` ranges
over that result to render the page. The first matching rule wins and a chunk
that matches no rule falls back to `wide`, the plain prose brick.

Four kinds of page do not go through that splitter at all, because they are
one article rather than a stack of bricks and what makes them one is where
they live: a blog post (`layouts/posts/page.html`), a service
(`layouts/services/page.html`), a product (`layouts/products/page.html`) and a
documentation page (`layouts/docs/all.html`). The first three render their own
brick whole — the post and the service add the shared call to action from
`content/<lang>/bricks/cta.md` after it, and the product brick builds the page
from the front matter rather than the markdown. For the docs that
is also what keeps their markdown readable: those pages are full of `---` and
`{:.class}` written out as examples, and the splitter would read a horizontal
rule in prose as a brick boundary.

## The bricks

| # | Brick | Partial | Container | Where it appears on the live site |
|--:|-------|---------|-----------|-----------------------------------|
| 1 | `default` | `default.html` | `container` | full-measure markdown, named by a rule |
| 2 | `intro` | `intro.html` | `small` | home, `/demo-pos/` |
| 3 | `title` | `title.html` | `small` | `/contact/`, `/faq/`, `/elements/`, `/team/`, `/headers/` |
| 4 | `header` | `header.html` | `small` over a backdrop | `/images/`, `/demo-paragliding/`, `/demo-hiking/` (`title bgimage`) |
| 5 | `quote` | `quote.html` | `small`, optional backdrop | `/images/`, the four demo pages (`title quote`) |
| 6 | `image` | `image.html` | `twocols` | home, `/images/`, all demo pages |
| 7 | `image-alt` | `image-alt.html` | `twocols`, tinted band | the mirrored variant of the above (`image alt`) |
| 8 | `about` | `about.html` | `small` | `/about/` |
| 9 | `features` | `features.html` | grid | home, `/docs/bricks/`, `/team/` |
| 10 | `team` | `team.html` | grid | `/team/` (a `features` brick with `ul.people` on the live site) |
| 11 | `blocks` | `blocks.html` | grid | `/our-services/` |
| 12 | `reviews` | `reviews.html` | grid | home, `/images/`, the demo pages |
| 13 | `prices` | `prices.html` | grid | home, `/demo-hiking/`, `/bricks/prices/` |
| 14 | `cta` | `cta.html` | boxed `twocols` | 58 pages — the standard page closer |
| 15 | `contact` | `contact.html` | `twocols` | `/contact/` |
| 16 | `map` | `map.html` | full bleed, sticks to footer | `/contact/`, `/get-started/`, the demo pages |
| 17 | `posts` | `posts.html` | grid | `/blog/`, `/our-services/` |
| 18 | `post` | `post.html` | `medium`, `<article>` | the nine blog posts |
| 19 | `small` | `small.html` | `small` | `/get-started/`, `/images/`, the demo pages |
| 19b | `form` | `form.html` | `small` | the `small` brick where the content is a form — the demo pages, `/get-started/` |
| 20 | `wide` | `wide.html` | `medium` | `/basic/`, `/elements/`, `/faq/`, `/headers/` — and the fallback |
| 21 | `docs` | `docs.html` | sidebar + body | all 43 `/docs/…` pages |
| 22 | `error404` | `error404.html` | `small` | `/404/` |
| 23 | `webshop` | `webshop.html` | grid | `/webshop/` |
| 24 | `product` | `product.html` | `twocols`, `<article>` | the three `/webshop/…` products |
| 25 | `cart` | `cart.html` | `medium` | `/cart/` |
| 26 | `checkout` | `checkout.html` | `medium` | `/checkout/` |
| 27 | `payment` | `payment.html` | `small` | `/payment/` |

Modifier classes on the live site that are **not** separate bricks, and how
they are handled instead:

| Live class | Handled by |
|------------|-----------|
| `hasbackgroundcolor` | each brick owns its own rhythm — see *Section rhythm* in the stylesheet |
| `bgimage` + `.overlay` | the shared `.backdrop` block; the scrim is an `::after` |
| `alt` | the `image-alt` brick |
| `stickstofooter` | `main:has(> section.map:last-child) + .sitefooter` |
| `transparent_header` | `transparent_header: true` in a page's front matter — `.siteheader.transparent` lifts out of flow onto the `header` brick's backdrop |
| `small` / `medium` | `.container.small` / `.container.medium` |

## What changed in the markup

The rebuild is not a transcription. The landmark and semantics work:

- **One banner.** The preheader was a `<div>` floating above `<header>`; it now
  lives inside it, so the page has exactly one `banner` landmark.
- **`<main id="main">`** with a keyboard-reachable skip link — neither existed.
- **Labelled navigation.** Every `<nav>` carries an `aria-label` (`Main`,
  `Footer`, `Language`, `Documentation`, `Breadcrumb`); the current page is
  marked `aria-current="page"`.
- **Real controls.** The menu toggle is a `<button>` with
  `aria-expanded`/`aria-controls` instead of an `onclick` on a `<div>`; the map
  is a link rather than a `<div>` with `cursor: pointer`. The banner and the
  footer both carry the theme's language `<select>` that navigates on change —
  labelled, and driven from `site.js` rather than an inline `onchange` — so a
  phone opens either with the picker it already has, where the theme's banner
  dropdown only opened on hover. Both are `site/languageswitch.html` over
  `site/languages.html`, and both need Javascript.
- **Named regions.** Each `<section>` is `aria-labelledby` its own first
  heading, via `_partials/section_label.html`. A brick with no heading gets no
  name, and is correctly not exposed as a landmark.
- **Element choice.** `<article>` for posts, products and team members,
  `<figure>` + `<blockquote>` + `<figcaption>` for quotes and testimonials,
  `<address>` for contact details, `<aside>` for the docs table of contents,
  `<ol>` for breadcrumbs and checkout steps, `<dl>` for opening hours,
  `<fieldset>`/`<legend>` in forms.
- **Ratings and icon links have names.** A five-star rating was five identical
  `<img alt="star">` elements; it is now one `role="img"` with
  `aria-label="Rated 5 out of 5"`. Team contact icons say "Email Gitio Hamano"
  rather than repeating the same address six times down the page.
- **Backdrops are images.** Hero and map backgrounds were inline
  `background-image` declarations; they are now real `<img>` elements, so they
  are sized, prioritised and cached like any other image, and the scrim is a
  pseudo-element rather than an empty `<div class="overlay">`.
- **No decorative divs.** `.innerbody`, `.overlay`, `div.text`/`div.image`
  wrappers and the `has_*`/`is_*` hook classes are gone. Bricks style the plain
  html that markdown emits.

## Data

Everything that is not page content lives in `data/`, copied from
`../hugobricks`. Templates reach the per-language bundle through
`{{ $d := partial "data.html" . }}`, which resolves
`index site.Data site.Language.Lang`.

| File | Read by |
|------|---------|
| `settings.yaml` | favicon, `sticky_header`, `dark_header`, `dark_footer`, `preheader.active`, `preheader.is_light` |
| `<lang>/general.yaml` | site title, description, phone, email |
| `<lang>/header.yaml` | logo subtitle, main menu, CTA button, preheader line, `mobile_view_width` |
| `<lang>/footer.yaml` | footer menu, social links, colophon |
| `<lang>/openinghours.yaml` | `{{< openinghours >}}` |
| `<lang>/reviews.yaml` | the `reviews` brick |
| `<lang>/people.yaml` | the `team` brick |
| `<lang>/features.yaml` | the `features` brick, as a fallback |
| `<lang>/faqs.yaml` | `{{< faq >}}` and `{{< faq 2 >}}` |
| `<lang>/contactform.yaml` | `{{< contactform >}}` |
| `<lang>/ctaform.yaml` | `{{< ctaform >}}` |
| `<lang>/newsletterform.yaml` | `{{< newsletterform >}}` |
| `<lang>/webshop.yaml` | cart icon and links in the banner; the webshop bricks |

Three bricks are collection bricks: `reviews` and `team` take their intro from
the markdown and their cards from data. `features` prefers a list written in
the markdown and only falls back to `features.yaml` when the section has none —
that matches how the live site builds its feature grids, and gives the
otherwise-unused `features.yaml` a consumer.

`settings.yaml` switches are honoured rather than hard-coded: `sticky_header`
adds `.sticky`, `dark_header`/`dark_footer` add `.dark`, `preheader.active`
decides whether the utility bar renders at all, and `preheader.is_light`
picks its palette. `mobile_view_width` reaches CSS through
`<body data-mobile-width>` and `site.js`, because a media query cannot read a
data file.

## The webshop

The webshop is the original theme's, migrated, with the checkout and payment
of ../hugocodex: the same flow — products, cart, checkout, payment — and the
same localStorage keys (`cart`, `addons`, `ordernumber`), so a stored cart
survives. The parts were reworked to this build's conventions:

- **The listing** is `{{< products >}}` on `/webshop/` — `teaser_list.html`
  over `content/<lang>/products/`, ordered by front-matter `weight`, emitting
  `ul.products`, which is what the `webshop` rule routes on.
- **A product page** renders whole through `layouts/products/page.html`, like
  a post: the `product` brick builds picture, price and add-to-cart form from
  the front matter (`image`, `variant_type`, `variants` with `name`/`price`/
  `sku`), with the markdown body as the description.
- **The cart page** is markdown: the table with its "cart is empty" row, the
  total, the way on. `webshop.js` redraws the table body from storage.
- **The checkout form** is `{{< checkoutform >}}` — the address fields in
  `site/form.html`'s idiom, the shipping options and custom values generated
  from `webshop.yaml` with their prices as data- attributes, the summary
  beside it kept true by the javascript, and hidden `order` / `checkout` /
  `ordernumber` inputs for the mail. The paired shortcode's inner text lands
  under the running total. It posts to the form handler named in
  `webshop.yaml` (`form_handler`), hugocodex's flow: the handler checks the
  `_token` timer the javascript fetched when the page opened, mails the
  order, and sends the visitor on to `_next` — the payment page.
- **The payment page** is `{{< usecue-payment >}}`: `webshop.js` hands the
  Usecue POS (`pos_id` in `webshop.yaml`) the amount owed, the order number
  and the language, and pay.js turns the page into the payment page — QR
  code, iDEAL, SEPA, credit card. Every failure path ends on
  pos.usecue.com's own payment page rather than on "one moment please".
- **Configuration rides as data- attributes** — currency symbol and links,
  written by the bricks and shortcodes from `webshop.yaml` — so `webshop.js`
  carries none of its own. The file loads wherever `show_cart_icon` is on,
  which is also what shows the banner's cart count.
- **Without javascript** the shop is a brochure: every page renders, the cart
  shows its honest empty row, and nothing misleads.

The shop rules in `params.sections` route on what only their page holds:
`ul.products`, `p.carttotal`, `form#checkoutform`, `ul.methods`,
`div#usecuepayment`.

Deliberately not carried over: the old payment brick's embedded PayPal
smart-buttons widget (an SDK load against a hard-coded demo client id). The
payment brick here is the method picker the markdown writes.

## Where things live

```
hugo.yaml                         baseURL, languages, markup, params.sections
data/settings.yaml                site-wide switches
data/en/, data/nl/                per-language content bundles
content/_index.md                 the home page, seven sections split by ---
layouts/baseof.html               skip link + banner + main + contentinfo
layouts/{home,page,section}.html  each just calls sections_logic
layouts/docs/all.html             docs brick + cta, no splitting
layouts/posts/page.html           post brick + cta, no splitting
layouts/services/page.html        post brick + cta, no splitting
layouts/products/page.html        product brick from front matter, no splitting
layouts/_partials/
  data.html                       the language bundle, in one place
  section_map.html                splits content on <hr>, routes to a brick
  sections_logic.html             renders the routed sections
  section_label.html              first heading id, for aria-labelledby
  split_media.html                lifts the image out of a two-column brick
  site/                           header, logo, menu, nestedmenu, socials, form,
                                  footer, languages, languageswitch
  sections/                       the 28 bricks
layouts/_shortcodes/              button, breadcrumbs, faq, socialbuttons,
                                  openinghours, contactform, ctaform, newsletterform,
                                  products, checkoutform
static/css/style.css              the whole stylesheet
static/js/site.js                 sticky header + mobile menu + language selects
static/js/webshop.js              the cart, in localStorage — see The webshop
static/img/                       ui icons, from ../hugobricks/themes/hugobricks/static
static/fonts/                     Signika 700, Heebo 400/600
static/uploads/                   the image library, from ../hugobricks/static
```
