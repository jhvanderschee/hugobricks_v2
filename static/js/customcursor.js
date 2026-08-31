/* The custom cursor — data/settings.yaml `customcursor`. What is drawn lives
   in `css/customcursor.css`; this file only steers it.

   The dot chases the pointer rather than sitting on it: each frame closes a
   tenth of the remaining distance, the theme's damping at this frame rate. It
   hides until the mouse first moves, while the mouse rests (three seconds)
   and while the page scrolls; over anything whose computed cursor is
   `pointer` — how the theme marks clickable — it swells into a ring.

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
    var timer;

    body.classList.add("customcursor", "hidecursor");

    requestAnimationFrame(function follow() {
        x += (mouseX - x) / 10;
        y += (mouseY - y) / 10;
        body.style.setProperty("--x", x + "px");
        body.style.setProperty("--y", y + "px");
        requestAnimationFrame(follow);
    });

    document.addEventListener("mousemove", function (event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
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
