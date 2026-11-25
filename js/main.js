// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Contact form: live character counter (100-character limit)
  var message = document.getElementById("message");
  var counter = document.getElementById("char-count");
  if (message && counter) {
    var max = parseInt(message.getAttribute("maxlength"), 10) || 100;
    var update = function () {
      var left = max - message.value.length;
      counter.textContent = left + " characters left";
      counter.classList.toggle("limit", left <= 10);
    };
    message.addEventListener("input", update);
    update();
  }

  // Contact form: send people back to our own thank-you page after submitting
  var next = document.getElementById("form-next");
  if (next) {
    next.value = new URL("thanks.html", window.location.href).href;
  }
});
