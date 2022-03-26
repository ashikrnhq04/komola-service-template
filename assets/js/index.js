"use strict";

/**
 * disable dead link event
 */
function deadLinkHandler() {
  const deadLink = document.querySelectorAll("a[href='#']");
  const deadFormSubmit = document.querySelectorAll("form[action='#'] button");

  function disableEvent(event) {
    event.preventDefault();
  }
  deadLink.forEach((link) => {
    link.addEventListener("click", disableEvent);
  });
  deadFormSubmit.forEach((btn) => {
    btn.addEventListener("click", disableEvent);
  });
}
deadLinkHandler();

/**
 * scroll to top element handler
 */
const scrollTop = document.querySelector(".totop");
function scrollToTop(elem) {
  let hero = document.getElementById("hero");
  if (document.documentElement.scrollTop > hero.offsetHeight) {
    elem.style.right = "20px";
  } else {
    elem.style.right = "-300px";
  }
}
window.addEventListener("scroll", () => {
  scrollToTop(scrollTop);
});

/**
 * video modal enable
 */
var videoModal = document.getElementById("myModal");
var videoOpen = document.getElementById("watchVideo");

videoModal.addEventListener("shown.bs.modal", function () {
  videoOpen.focus();
});
