var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
    let nav = document.querySelector("#nav");
    var btn = document.getElementById("btn-volver-arriba");
    if (scroll_pos > 20 || document.documentElement.scrollTop > 20) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
    if (scroll_pos > 60) {
        nav.classList.remove("bg-opacity-25");
    }
    if (scroll_pos < 60) {
        nav.classList.add("bg-opacity-25");
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

document.getElementById("btn-volver-arriba").addEventListener("click", function() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
});
