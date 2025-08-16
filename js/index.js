var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
    let nav = document.querySelector("#nav");
    if (scroll_pos > 60) {
        nav.classList.remove("bg-opacity-10")
    }
    if (scroll_pos < 60) {
        nav.classList.add("bg-opacity-10")
    }
}

window.addEventListener("scroll", function (e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});
