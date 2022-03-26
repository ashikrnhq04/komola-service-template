"use strict";

/**
 * disable dead link event
 */
function deadLinkHandler() {
  const deadLink = document.querySelectorAll("a[href='#']");
  const falsFormSubmit = document.querySelectorAll(
    "form[action='#'] button[type='submit']"
  );
  if (!deadLink) {
    return;
  }
  function disableEvent(event) {
    event.preventDefault();
  }
  deadLink.forEach((link) => {
    link.addEventListener("click", disableEvent);
  });
  if (!falsFormSubmit) {
    return;
  }
  falsFormSubmit.forEach((btn) => {
    btn.addEventListener("click", disableEvent);
  });
}
deadLinkHandler();

/**
 * scroll to top  handler
 */
{
  const scrollTop = document.querySelector(".totop");
  function scrollToTop(elem) {
    if (!elem) {
      return;
    }
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
}

/**
 * video modal enable
 */
{
  let videoModal = document.getElementById("myModal");
  let videoOpen = document.getElementById("watchVideo");

  videoModal.addEventListener("shown.bs.modal", function () {
    videoOpen.focus();
  });
  function stopVideo() {
    let iframeSrc = videoModal.querySelector("iframe").src;
    videoModal.querySelector("iframe").src = "";
    videoModal.querySelector("iframe").src = iframeSrc;
  }
  videoModal.addEventListener("hidden.bs.modal", stopVideo);
}
