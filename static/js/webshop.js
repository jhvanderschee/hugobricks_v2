/* The webshop, ported from the original theme's webshop.js and rewritten in
   the house style: one IIFE, listeners instead of inline handlers, the DOM
   built with elements rather than markup strings.

   The state is client-side: localStorage holds "cart" (the line items, one
   per sku), "addons" (the checkout's priced extras) and "ordernumber" — the
   same keys and shapes as the original theme, so a stored cart survives the
   migration. Prices, links and the currency symbol ride into the page as
   data- attributes that the bricks and the checkout shortcode write from
   data/<lang>/webshop.yaml, so this file carries no configuration.

   Without this file the shop is a brochure: every page still renders, the
   cart shows its honest "empty" row, and the checkout posts a complete
   address whose order lines stay blank. The banner's cart count rests
   hidden, which is also its no-javascript state. */
(function () {
    "use strict";

    /* localStorage can be absent or refuse (private windows, sandboxes);
       a shop that cannot remember is the same shop as one with no script. */
    var read = function (key) {
        try { return JSON.parse(localStorage.getItem(key)) || []; }
        catch (error) { return []; }
    };
    var write = function (key, value) {
        try { localStorage.setItem(key, JSON.stringify(value)); }
        catch (error) { /* nothing to do — the page keeps working stateless */ }
    };
    var stored = function (key) {
        try { return localStorage.getItem(key); }
        catch (error) { return null; }
    };

    var cartTotal = function () {
        return read("cart").reduce(function (sum, item) {
            return sum + item.quantity * parseFloat(item.price);
        }, 0);
    };
    var addonTotal = function () {
        return read("addons").reduce(function (sum, addon) {
            return sum + parseFloat(addon.price);
        }, 0);
    };
    var money = function (symbol, amount) { return symbol + " " + amount.toFixed(2); };
    var capitalize = function (text) {
        return text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
    };
    /* One order line, as it reads in the cart mail: "2 x Buy me a coffee
       (Size: grande) = $ 7.00". */
    var orderLine = function (symbol, item) {
        var variant = item.varianttype
            ? " (" + capitalize(item.varianttype) + ": " + item.variantname + ")" : "";
        return item.quantity + " x " + item.title + variant + " = " +
            money(symbol, item.quantity * parseFloat(item.price));
    };

    /* The banner's cart count — an <output aria-live> that rests hidden, so
       an empty cart announces nothing. On every page. */
    var updateCount = function () {
        var count = read("cart").reduce(function (sum, item) {
            return sum + item.quantity;
        }, 0);
        Array.prototype.forEach.call(document.querySelectorAll(".itemcount"), function (out) {
            out.textContent = count;
            out.hidden = count === 0;
        });
    };
    updateCount();

    /* -- the product page: the add-to-cart form ---------------------------
       The form and its options carry everything as data- attributes; picking
       a variant rewrites the price beside the title, submitting puts the
       variant in the cart and moves on to it. */
    var productForm = document.querySelector("section.product form[data-cart-link]");
    if (productForm) {
        var variants = productForm.querySelector("select");
        var chosen = function () { return variants.options[variants.selectedIndex]; };

        variants.addEventListener("change", function () {
            var price = parseFloat(chosen().getAttribute("data-price"));
            Array.prototype.forEach.call(document.querySelectorAll(".productprice"), function (el) {
                el.textContent = price.toFixed(2);
            });
        });

        productForm.addEventListener("submit", function (event) {
            event.preventDefault();
            var cart = read("cart");
            var option = chosen();
            var sku = option.getAttribute("data-sku");
            var line = cart.filter(function (item) { return item.sku === sku; })[0];
            if (line) line.quantity += 1;
            else cart.push({
                url: productForm.getAttribute("data-url"),
                sku: sku,
                title: productForm.getAttribute("data-title"),
                varianttype: productForm.getAttribute("data-varianttype"),
                variantname: option.getAttribute("data-variantname"),
                price: option.getAttribute("data-price"),
                image: productForm.getAttribute("data-image"),
                quantity: 1
            });
            write("cart", cart);
            window.location.href = productForm.getAttribute("data-cart-link");
        });
    }

    /* -- the cart page -----------------------------------------------------
       The markdown wrote the table with its "cart is empty" row; that row is
       kept as the empty state and the body is redrawn from storage, one line
       per item just as the page's own markup writes them. Setting an amount
       to 0 removes the line — the `min="0"` on the amount field is the way
       out of the cart. */
    var cartSection = document.querySelector("section.cart");
    var cartBody = cartSection && cartSection.querySelector("table tbody");
    if (cartBody) {
        var symbol = cartSection.getAttribute("data-currency") || "";
        var emptyRow = cartBody.innerHTML;

        var redraw = function () {
            var cart = read("cart");
            cartBody.textContent = "";
            if (!cart.length) cartBody.innerHTML = emptyRow;

            cart.forEach(function (item) {
                var row = document.createElement("tr");
                var cell = function () {
                    return row.appendChild(document.createElement("td"));
                };

                /* The avatar and the product cell both lead back to the
                   product page, avatar and text each wrapped whole. The
                   avatar's link is named by the image's alt — without it the
                   link is an unlabelled tab stop. */
                var avatar = document.createElement("img");
                avatar.className = "productavatar";
                avatar.src = item.image;
                avatar.alt = item.title;
                avatar.width = 64;
                avatar.height = 64;
                var avatarLink = document.createElement("a");
                avatarLink.href = item.url;
                avatarLink.append(avatar);
                cell().append(avatarLink);

                /* The product cell, as the original theme writes it: the
                   title, the variant and the price of one, stacked. */
                var product = document.createElement("a");
                product.href = item.url;
                product.textContent = item.title;
                if (item.varianttype) {
                    product.append(document.createElement("br"),
                        capitalize(item.varianttype) + ": " + item.variantname);
                }
                product.append(document.createElement("br"),
                    money(symbol, parseFloat(item.price)));
                cell().append(product);

                var label = document.createElement("label");
                label.className = "sr-only";
                label.htmlFor = "amount-" + item.sku;
                label.textContent = "Amount of " + item.title;
                var amount = document.createElement("input");
                amount.id = "amount-" + item.sku;
                amount.type = "number";
                amount.min = "0";
                amount.value = item.quantity;
                amount.addEventListener("change", function () {
                    requantify(item.sku, parseInt(amount.value, 10) || 0);
                });
                cell().append(label, amount);

                cell().textContent = money(symbol, item.quantity * parseFloat(item.price));

                cartBody.append(row);
            });

            Array.prototype.forEach.call(cartSection.querySelectorAll(".carttotal"), function (el) {
                el.textContent = money(symbol, cartTotal());
            });
            updateCount();
        };

        var drop = function (sku) {
            write("cart", read("cart").filter(function (item) { return item.sku !== sku; }));
            redraw();
        };
        var requantify = function (sku, quantity) {
            if (quantity < 1) return drop(sku);
            var cart = read("cart");
            cart.forEach(function (item) {
                if (item.sku === sku) item.quantity = quantity;
            });
            write("cart", cart);
            redraw();
        };

        redraw();
    }

    /* -- the checkout page ---------------------------------------------------
       The shortcode wrote the form; this fills its hidden inputs — `order`
       with the cart's lines, `checkout` with the totals, `ordernumber` on
       submit — and keeps the summary beside it true to what is chosen: every
       control with a data-price is an extra to be summed. */
    var checkout = document.getElementById("checkoutform");
    if (checkout) {
        var checkoutSymbol = checkout.getAttribute("data-currency") || "";
        var calculation = document.querySelector("section.checkout .calculation");

        checkout.querySelector("input[name='order']").value =
            read("cart").map(function (item) {
                return orderLine(checkoutSymbol, item);
            }).join(" | ");

        var refresh = function () {
            /* The priced extras as chosen right now: the selects with a
               choice made, and any checked control carrying a price. A free
               option is a fact about the order, not a line on the bill, so
               zero prices stay off the summary — except on a select marked
               `data-always` (shipping), where which one was picked is the
               news even when it costs nothing. */
            var addons = [];
            Array.prototype.forEach.call(
                checkout.querySelectorAll("input[data-price]:checked"),
                function (input) {
                    if (parseFloat(input.getAttribute("data-price"))) addons.push({
                        title: input.getAttribute("data-title"),
                        price: input.getAttribute("data-price")
                    });
                });
            Array.prototype.forEach.call(checkout.querySelectorAll("select"), function (select) {
                var option = select.options[select.selectedIndex];
                if (!select.value || !option || !option.hasAttribute("data-price")) return;
                if (parseFloat(option.getAttribute("data-price")) || select.hasAttribute("data-always")) addons.push({
                    title: option.getAttribute("data-title"),
                    price: option.getAttribute("data-price")
                });
            });
            write("addons", addons);

            /* The summary, redrawn: cart, extras, total. */
            var lines = [["Shopping cart:", cartTotal()]];
            addons.forEach(function (addon) {
                lines.push([addon.title + ":", parseFloat(addon.price)]);
            });
            lines.push(["Payment total:", cartTotal() + addonTotal()]);

            if (calculation) {
                calculation.textContent = "";
                lines.forEach(function (line, index) {
                    var last = index === lines.length - 1;
                    var name = document.createElement("span");
                    name.textContent = line[0];
                    var value = money(checkoutSymbol, line[1]);
                    if (last) {
                        /* The sum is one block-level line of its own, so its
                           top border rules across the whole summary. */
                        var sum = document.createElement("span");
                        sum.className = "sum";
                        var strong = document.createElement("strong");
                        strong.textContent = value;
                        sum.append(name, " ", strong);
                        calculation.append(sum);
                    } else {
                        if (index) calculation.append(document.createElement("br"));
                        calculation.append(name, " ", value);
                    }
                });
            }

            checkout.querySelector("input[name='checkout']").value =
                lines.map(function (line) {
                    return line[0] + " " + money(checkoutSymbol, line[1]);
                }).join(" | ");
        };

        checkout.addEventListener("change", refresh);
        refresh();

        /* Picking Dutch shipping fills in the country, as the original theme
           did; any other choice clears it again for the buyer to say. */
        var shipping = checkout.querySelector("select[name='shipping']");
        var country = checkout.querySelector("input[name='country']");
        if (shipping && country) shipping.addEventListener("change", function () {
            country.value = shipping.value === "Shipping NL" ? "The Netherlands" : "";
        });

        /* The order number: the moment of submission in tenths of a second,
           folded to 30 years' worth of digits — the original theme's scheme.
           Stored for the payment page to reference.

           The order is posted from here and the visitor is walked to this
           site's own payment page, where the POS embeds. Letting the form
           navigate would hand the visitor to the handler's redirect, which
           only honours a `_next` on its own domain and strands them there.
           Without fetch the form posts the normal way, and that redirect is
           what there is — the order still arrives. */
        checkout.addEventListener("submit", function (event) {
            var ordernumber = Math.round(Date.now() / 100) % 6307200000;
            checkout.querySelector("input[name='ordernumber']").value = ordernumber;
            write("ordernumber", ordernumber);

            var paymentlink = checkout.getAttribute("data-payment-link");
            if (!paymentlink || !window.fetch) return;
            event.preventDefault();
            /* keepalive lets the post outlive this page; the response is
               opaque (no-cors) and beside the point — the payment page is
               not going to wait for a mail server. */
            fetch(checkout.action, {
                method: "POST",
                body: new FormData(checkout),
                mode: "no-cors",
                keepalive: true
            }).catch(function () { /* nothing to do from here */ });
            window.location.href = paymentlink;
        });

        /* The spam timer: the form handler hands out a token and will not
           take a form younger than a few seconds — filling in a checkout
           takes well over that, a bot does not. Fetched the moment the page
           opens, so the clock starts now. A fetch that fails leaves the
           token empty and the handler refuses the post; there is nothing
           better to do about it from here. */
        var token = checkout.querySelector("input[name='_token']");
        if (token && window.fetch) {
            fetch(checkout.action)
                .then(function (response) { return response.ok ? response.text() : ""; })
                .then(function (value) { token.value = value; })
                .catch(function () { /* the empty token stays */ });
        }
    }

    /* -- the payment page ------------------------------------------------- */
    var paymentTotal = document.getElementById("paymenttotal");
    if (paymentTotal) {
        var paymentSection = paymentTotal.closest("section.payment");
        var paymentSymbol = (paymentSection && paymentSection.getAttribute("data-currency")) || "";
        paymentTotal.textContent = money(paymentSymbol, cartTotal() + addonTotal());
    }

    /* -- the payment page: the Usecue POS ----------------------------------
       The `usecue-payment` shortcode marked the spot and carries the account
       id and the language; the amount owed and the order number come from
       the cart kept here. pay.js turns this very page into the payment page.
       Every way that can fail — blocked, lost, arrived but declined to run —
       ends with the visitor on the POS's payment page on its own domain
       instead: they came to pay, and losing this site's address beats
       leaving them on "one moment please" forever. */
    var pos = document.getElementById("usecuepayment");
    if (pos) {
        var owed = cartTotal() + addonTotal();
        var ordernumber = stored("ordernumber");
        var posId = pos.getAttribute("data-id");
        var posLang = pos.getAttribute("data-lang");

        /* pay.js takes its parameters from its own script tag, because the
           address bar is not ours to count on: Safari refuses a replaceState
           that comes around too often, and the frame would then be built
           from an address that never got the amount in it. */
        var query = "id=" + encodeURIComponent(posId);
        if (owed > 0) query += "&amount=" + encodeURIComponent(owed.toFixed(2));
        if (ordernumber) query += "&specification=" + encodeURIComponent("Order number " + ordernumber);
        if (posLang) query += "&lang=" + encodeURIComponent(posLang);

        /* The same parameters laid over the ones the page was opened with,
           so an amount that came in through the link survives an empty
           cart — and the address bar, a nicety, still tries to show them. */
        var url = new URL(window.location.href);
        url.searchParams.set("id", posId);
        if (owed > 0) url.searchParams.set("amount", owed.toFixed(2));
        if (ordernumber) url.searchParams.set("specification", "Order number " + ordernumber);
        if (posLang) url.searchParams.set("lang", posLang);
        var paypage = "https://pos.usecue.com/pay/" + url.search;
        try {
            window.history.replaceState(window.history.state, "", url.toString());
        } catch (error) { /* the script tag carries the parameters anyway */ }

        /* pay.js watches its own frame once it runs; these watch the case
           where it never got that far. */
        var frameless = function () {
            return !document.querySelector('iframe[src*="pos.usecue.com"]');
        };
        var script = document.createElement("script");
        script.src = "https://pos.usecue.com/p/js/pay.js?" + query;
        script.onerror = function () { window.location.replace(paypage); };
        script.onload = function () {
            window.setTimeout(function () {
                if (frameless()) window.location.replace(paypage);
            }, 100);
        };
        window.setTimeout(function () {
            if (frameless()) window.location.replace(paypage);
        }, 8000);
        document.body.appendChild(script);
    }
})();
