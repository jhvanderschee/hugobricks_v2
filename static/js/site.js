/* Progressive enhancement for the site chrome.
   The header and the menu are usable without this file; it adds the shadow on
   scroll, the slide-in panel on narrow screens, and the footer's language
   `<select>` — the banner's language links cover that one when it does not
   run.

   The breakpoint is `header.mobile_view_width` in data/<lang>/header.yaml,
   handed over on <body data-mobile-width>, because CSS media queries cannot
   read a custom property. */
(function () {
    "use strict";

    var body = document.body;
    var header = document.querySelector(".siteheader");
    var toggle = document.getElementById("togglemenu");
    var nav = toggle && document.getElementById(toggle.getAttribute("aria-controls"));
    var width = parseInt(body.getAttribute("data-mobile-width"), 10) || 1100;

    var setMode = function () {
        body.classList.toggle("mobilemenu", window.innerWidth < width);
    };
    setMode();
    window.addEventListener("resize", setMode);

    /* A page's own `transparent_header: true` front matter. The banner is out
       of flow and sits on the hero, so the hero has to reserve the height it
       would have taken. Measured at rest — pinned the banner is shorter,
       having dropped its preheader — and republished on resize, after
       setMode, because the mobile layout is a different height. The
       stylesheet falls back to a fixed 7rem when this file does not run. */
    var transparent = header && header.classList.contains("transparent");
    var setBannerHeight = function () {
        if (!transparent || header.classList.contains("stuck")) return;
        document.documentElement.style.setProperty(
            "--banner-height", header.offsetHeight + "px");
    };
    setBannerHeight();
    window.addEventListener("resize", setBannerHeight);
    window.addEventListener("load", setBannerHeight);

    /* Sticky banner: it scrolls away with the page, then slides back in once
       you are 100px down — the theme's own threshold. A one-pixel sentinel
       parked at document y=100 does the detecting, so there is no scroll
       handler and no per-frame reads of scrollY.

       While pinned the banner is out of flow, so its resting height is
       reserved on <body>. The sentinel is absolutely positioned against the
       initial containing block, so that padding cannot move it and the two
       cannot feed back into each other. */
    if (header && header.classList.contains("sticky")) {
        var sentinel = document.createElement("div");
        sentinel.setAttribute("aria-hidden", "true");
        sentinel.style.cssText =
            "position:absolute;top:100px;left:0;width:1px;height:1px;pointer-events:none";
        body.prepend(sentinel);

        var setStuck = function (stuck) {
            if (stuck === header.classList.contains("stuck")) return;
            /* A transparent banner never was in flow, so pinning it shifts
               nothing and there is no height to reserve. */
            if (!transparent) {
                body.style.paddingBlockStart = stuck ? header.offsetHeight + "px" : "";
            }
            header.classList.toggle("stuck", stuck);
            body.classList.toggle("hasstickyheader", stuck);
        };

        new IntersectionObserver(function (entries) {
            setStuck(!entries[0].isIntersecting);
        }).observe(sentinel);
    }

    /* The language switchers — one in the banner, one in the footer: the
       theme's `<select>` that navigates on change, wired here rather than on
       an inline `onchange`. Their options carry the target url, so picking a
       language lands on this page's translation when there is one.

       They are the one piece of chrome that does not work without this
       file. */
    Array.prototype.forEach.call(
        document.querySelectorAll("[data-languageswitch]"),
        function (select) {
            select.addEventListener("change", function () {
                if (select.value) window.location.href = select.value;
            });
        });

    if (!toggle || !nav) return;

    var setOpen = function (open) {
        toggle.setAttribute("aria-expanded", String(open));
        body.classList.toggle("menushown", open);
    };

    toggle.addEventListener("click", function () {
        setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
            setOpen(false);
            toggle.focus();
        }
    });

    nav.addEventListener("click", function (event) {
        if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("click", function (event) {
        if (!body.classList.contains("menushown")) return;
        if (event.target.closest("#mainnav, #togglemenu")) return;
        setOpen(false);
    });

    /* The blog's tag filter and its paging, ported from the original theme's
       `filter.js`. The `blog` shortcode writes each post's tags onto its card,
       offers them on a `<select>`, and leaves an empty `<ul class="tags">` and
       a hidden button for this to fill in.

       Picking a tag narrows rather than replaces: the chosen ones are ANDed,
       so each pick can only shrink the list. That is why an option whose
       addition would empty the page is disabled instead of offered — the
       original theme's `itemsLeft`, which is also where the counts beside each
       tag come from, and why they are counted here rather than in the template:
       they answer "how many are left if I add this one", which changes with
       every pick. `?tag=name` picks one on arrival, so a tag can be linked to.

       Without this file the select does nothing, the button stays hidden and
       every card is visible: the whole list, unfiltered and unpaged. */
    var filterForm = document.querySelector("form.filter");
    var postlist = document.querySelector("ul.posts");
    if (filterForm && postlist) {
        var select = filterForm.querySelector("select");
        var pills = filterForm.querySelector("ul.tags");
        var more = document.querySelector(".loadmore button");
        var pagesize = parseInt(postlist.getAttribute("data-pagesize"), 10) || 0;
        var numbers = select.getAttribute("data-numbers") === "true";
        var cards = Array.prototype.slice.call(postlist.children);
        var everyTag = Array.prototype.map.call(select.options, function (option) {
            return option.value;
        }).filter(Boolean);
        var chosen = [];
        var shown = pagesize;

        var carries = function (card, tags) {
            var have = (card.getAttribute("data-tags") || "").split(" ");
            return tags.every(function (tag) { return have.indexOf(tag) !== -1; });
        };
        var countWith = function (tag) {
            return cards.filter(function (card) {
                return carries(card, chosen.concat(tag));
            }).length;
        };

        var render = function () {
            /* The cards: the ones carrying every chosen tag, up to the page. */
            var matching = 0;
            cards.forEach(function (card) {
                var hit = carries(card, chosen);
                if (hit) matching += 1;
                card.hidden = !hit || (pagesize > 0 && matching > shown);
            });
            if (more) more.hidden = !(pagesize > 0 && matching > shown);

            /* The select: every tag not already picked, minus the ones that
               would leave nothing. */
            Array.prototype.forEach.call(select.options, function (option) {
                if (!option.value) return;
                var left = countWith(option.value);
                option.disabled = chosen.indexOf(option.value) !== -1 || left === 0;
                option.textContent = numbers ? option.value + " (" + left + ")" : option.value;
            });
            select.value = "";
            select.hidden = everyTag.every(function (tag) {
                return chosen.indexOf(tag) !== -1;
            });

            /* The chips: one per chosen tag, each a button that drops it. */
            pills.textContent = "";
            chosen.forEach(function (tag) {
                var item = document.createElement("li");
                var drop = document.createElement("button");
                drop.type = "button";
                drop.textContent = tag;
                drop.setAttribute("aria-label", "Stop filtering on " + tag);
                drop.addEventListener("click", function () {
                    chosen = chosen.filter(function (name) { return name !== tag; });
                    shown = pagesize;
                    render();
                });
                item.append(drop);
                pills.append(item);
            });
        };

        select.addEventListener("change", function () {
            if (!select.value) return;
            chosen = chosen.concat(select.value);
            shown = pagesize;
            render();
        });
        if (more) {
            more.addEventListener("click", function () {
                shown += pagesize;
                render();
            });
        }

        var wanted = new URLSearchParams(window.location.search).get("tag");
        if (wanted && everyTag.indexOf(wanted) !== -1) chosen = [wanted];
        render();
    }
})();
