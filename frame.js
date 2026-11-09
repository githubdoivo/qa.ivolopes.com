// Phones only (the one-window layout, 760px and narrower): iPhone Safari fills the area behind
// the clock with whatever lies just above the top of the screen. A strip of wallpaper sits there
// (--above in os.css) and the window opens scrolled down by exactly that strip and stays there,
// so the clock sits on the wallpaper. Only #page scrolls. Same frame as ivolopes.com.
// On wider screens the desktop is laid out as before and this does nothing.
(function () {
  var y = 160, phone = window.matchMedia("(max-width: 760px)");
  function keep() { if (phone.matches && Math.abs(window.scrollY - y) > 0.5) window.scrollTo(0, y); }
  keep();
  document.addEventListener("DOMContentLoaded", keep);
  window.addEventListener("load", keep);
  window.addEventListener("resize", keep);
  window.addEventListener("pageshow", keep);
  window.addEventListener("scroll", keep, { passive: true });
  if (phone.addEventListener) phone.addEventListener("change", function () { if (!phone.matches) window.scrollTo(0, 0); keep(); });
})();
