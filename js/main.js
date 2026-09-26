document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      nav.classList.toggle("open");
    });

    // Close the menu when tapping/clicking anywhere outside of it.
    document.addEventListener("click", function (e) {
      if (!nav.classList.contains("open")) return;
      if (nav.contains(e.target) || toggle.contains(e.target)) return;
      nav.classList.remove("open");
    });

    // Close it after choosing a link, too.
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

  // Smoothly animate <details class="abstract"> open/close instead of the
  // browser's instant native toggle.
  document.querySelectorAll("details.abstract").forEach(function (details) {
    var summary = details.querySelector("summary");
    var body = details.querySelector(".abstract-body");
    if (!summary || !body) return;

    body.style.overflow = "hidden";
    body.style.transition = "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease";
    if (!details.open) {
      body.style.maxHeight = "0px";
      body.style.opacity = "0";
    }

    summary.addEventListener("click", function (e) {
      e.preventDefault();

      if (details.open) {
        // Closing: set an explicit starting height, then animate to 0.
        body.style.maxHeight = body.scrollHeight + "px";
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            body.style.maxHeight = "0px";
            body.style.opacity = "0";
          });
        });
        var onEnd = function (ev) {
          if (ev.propertyName !== "max-height") return;
          details.open = false;
          body.removeEventListener("transitionend", onEnd);
        };
        body.addEventListener("transitionend", onEnd);
      } else {
        details.open = true;
        body.style.maxHeight = body.scrollHeight + "px";
        body.style.opacity = "1";
        var onOpenEnd = function (ev) {
          if (ev.propertyName !== "max-height") return;
          body.style.maxHeight = "none";
          body.removeEventListener("transitionend", onOpenEnd);
        };
        body.addEventListener("transitionend", onOpenEnd);
      }
    });
  });
});
