/* The custom cursor — data/settings.yaml `customcursor`. What is drawn lives
   in `css/customcursor.css`; this file only steers it.

   The dot chases the pointer rather than sitting on it: each frame closes a
   tenth of the remaining distance, the theme's damping at this frame rate.
   The chase only runs while there is distance left to close — once the dot
   has caught up it snaps the last half pixel and the loop ends, until the
   mouse moves again. The dot is its own fixed element, placed with a
   transform, so a frame costs the compositor one moved layer and never a
   restyle or relayout of the page. It hides until the mouse first moves,
   while the mouse rests (three seconds) and while the page scrolls; over
   anything whose computed cursor is `pointer` — how the theme marks
   clickable — it swells into a ring.

   Only a fine pointer gets one, since on touch there is no pointer to trail,
   and `prefers-reduced-motion` turns it off wholesale: a dot easing after the
   mouse is exactly the decoration that setting asks to lose. Nothing here
   touches the native cursor, which stays visible throughout. */
(function () {
    "use strict";

    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var body = document.body;
    var mouseX = window.innerWidth / 2;
    var mouseY = window.innerHeight / 2;
    var x = mouseX, y = mouseY;
    var running = false;
    var timer;

    body.classList.add("customcursor", "hidecursor");

    /* The dot only exists while this script runs, which is also the no-
       javascript story: no script, no element, nothing drawn. The centering
       rides in the same transform as the position, so the CSS can grow and
       shrink the dot around its middle. */
    var dot = document.createElement("div");
    dot.className = "cursordot";
    dot.setAttribute("aria-hidden", "true");
    var place = function () {
        dot.style.transform =
            "translate(" + x + "px, " + y + "px) translate(-50%, -50%)";
    };
    place();
    body.appendChild(dot);

    var follow = function () {
        x += (mouseX - x) / 10;
        y += (mouseY - y) / 10;
        if (Math.abs(mouseX - x) < 0.5 && Math.abs(mouseY - y) < 0.5) {
            x = mouseX;
            y = mouseY;
            running = false;
        } else {
            requestAnimationFrame(follow);
        }
        place();
    };

    document.addEventListener("mousemove", function (event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
        if (!running) {
            running = true;
            requestAnimationFrame(follow);
        }
        body.classList.remove("hidecursor");
        clearTimeout(timer);
        timer = setTimeout(function () { body.classList.add("hidecursor"); }, 3000);
    });

    window.addEventListener("scroll", function () {
        body.classList.add("hidecursor");
    });

    document.addEventListener("mouseover", function (event) {
        body.classList.toggle("cursorpointer",
            window.getComputedStyle(event.target).cursor === "pointer");
    });
})();
