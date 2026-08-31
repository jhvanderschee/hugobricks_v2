---
title: Multiple languages
---

Hugobricks has been fully prepared to support a multilingual setup. In the docs you will see the '/en/' reference more than once. This means you can duplicate and translate all content in as many languages as you want by following a similar pattern with a different language string. Adding a language also requires an entry in `hugo.yaml`:

```
defaultContentLanguage: en
languages:
  en:
    languageCode: en
    languageName: English
    contentDir: content/en
    weight: 1
  nl:
    languageCode: nl
    languageName: Nederlands
    contentDir: content/nl
    weight: 2
```

Everything that is not page content lives in `data/<lang>/`, so a language is a content directory plus a data bundle: `general`, `header`, `footer`, `openinghours`, `reviews`, `people`, `features`, `pricing`, `faqs`, `webshop` and the three form definitions. Language-independent switches live in `data/settings.yaml`.

Templates reach the bundle of the language being rendered through one partial:

```
{{ $d := partial "data.html" . }}{{ $d.general.title }}
```
