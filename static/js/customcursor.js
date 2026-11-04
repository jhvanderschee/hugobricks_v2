/* The custom cursor — data/settings.yaml `customcursor`. What is drawn lives
   in `css/customcursor.css`; this file only steers it.

   The dot chases the pointer rather than sitting on it: it closes a tenth of
   the remaining distance per sixtieth of a second, scaled to the real frame
   time so a 120 Hz screen trails exactly like a 60 Hz one. The chase only
   runs while there is distance left to close — once the dot has caught up it
   snaps the last half pixel and the loop ends, until the mouse moves again.
   The dot is its own fixed element, placed with the `translate` property, so
   a frame costs the compositor one moved layer and never a restyle or
   relayout of the page. It hides until the mouse first moves, while the
   mouse rests (three seconds) and while the page scrolls; over anything
   clickable it swells into a ring.

   The mouse events do as little as they can, since they fire far more often
   than frames: mousemove only stores the position and a timestamp, and the
   rest timer is one timeout that re-arms itself for whatever is left of the
   three seconds, not one cleared and set again per event. Classes are only
   written when they change. What counts as clickable is a selector match,
   not the computed `cursor`, which would force a style recalculation on
   every element the pointer crosses — keep CLICKABLE in step with the
   theme's `cursor: pointer` rules.

   Only a fine pointer gets one, since on touch there is no pointer to trail,
   and `prefers-reduced-motion` turns it off wholesale: a dot easing after the
   mouse is exactly the decoration that setting asks to lose. Nothing here
   touches the native cursor, which stays visible throughout. */
(function () {
    "use strict";

    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var CLICKABLE = "a[href], button, summary, select, label, [role=tab], " +
        "[role=button], input[type=checkbox], input[type=radio], " +
        "input[type=submit], input[type=button], #lightbox";
    var REST = 3000;

    var body = document.body;
    var mouseX = window.innerWidth / 2;
    var mouseY = window.innerHeight / 2;
    var x = mouseX, y = mouseY;
    var running = false;
    var last = 0;
    var lastMove = 0;
    var timer = null;
    var hidden = true;
    var pointer = false;

    body.classList.add("customcursor", "hidecursor");

    /* The dot only exists while this script runs, which is also the no-
       javascript story: no script, no element, nothing drawn. The CSS offsets
       it by half its size, so translating it puts its middle on the point. */
    var dot = document.createElement("div");
    dot.className = "cursordot";
    dot.setAttribute("aria-hidden", "true");
    var place = function () {
        dot.style.translate = x + "px " + y + "px";
    };
    place();
    body.appendChild(dot);

    var setHidden = function (value) {
        if (hidden === value) return;
        hidden = value;
        body.classList.toggle("hidecursor", value);
    };

    var follow = function (now) {
        /* A long gap (a background tab) is capped, so the dot glides rather
           than jumps when it comes back. */
        var dt = last ? Math.min(now - last, 100) : 1000 / 60;
        last = now;
        var k = 1 - Math.pow(0.9, dt * 60 / 1000);
        x += (mouseX - x) * k;
        y += (mouseY - y) * k;
        if (Math.abs(mouseX - x) < 0.5 && Math.abs(mouseY - y) < 0.5) {
            x = mouseX;
            y = mouseY;
            running = false;
        } else {
            requestAnimationFrame(follow);
        }
        place();
    };

    var rest = function () {
        var left = REST - (performance.now() - lastMove);
        if (left > 0) {
            timer = setTimeout(rest, left);
        } else {
            timer = null;
            setHidden(true);
        }
    };

    document.addEventListener("mousemove", function (event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
        lastMove = performance.now();
        if (!running) {
            running = true;
            last = 0;
            requestAnimationFrame(follow);
        }
        setHidden(false);
        if (timer === null) timer = setTimeout(rest, REST);
    }, { passive: true });

    window.addEventListener("scroll", function () {
        setHidden(true);
    }, { passive: true });

    document.addEventListener("mouseover", function (event) {
        var value = !!(event.target.closest && event.target.closest(CLICKABLE));
        if (pointer === value) return;
        pointer = value;
        body.classList.toggle("cursorpointer", value);
    }, { passive: true });
})();
