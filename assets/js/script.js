'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }


// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input fields
if (form && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }
}


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    const target = this.innerHTML.trim().toLowerCase();

    for (let j = 0; j < pages.length; j++) {
      if (target === pages[j].dataset.page) {
        pages[j].classList.add("active");
      } else {
        pages[j].classList.remove("active");
      }
    }

    for (let j = 0; j < navigationLinks.length; j++) {
      if (navigationLinks[j] === this) {
        navigationLinks[j].classList.add("active");
      } else {
        navigationLinks[j].classList.remove("active");
      }
    }

    // the sidebar is a profile card: only show it on About
    const main = document.querySelector("main");
    if (main) main.setAttribute("data-active-page", target);

    window.scrollTo(0, 0);

  });
}


// theme toggle: remembers the choice, otherwise follows the OS setting
const themeToggle = document.querySelector("[data-theme-toggle]");

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) { /* storage blocked */ }
  });
}

// follow the OS if the visitor hasn't picked a theme themselves
try {
  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function (e) {
    if (localStorage.getItem("theme")) return;
    document.documentElement.setAttribute("data-theme", e.matches ? "light" : "dark");
  });
} catch (e) { /* older browser */ }

// set the initial page state so the sidebar shows correctly on first load
(function () {
  const main = document.querySelector("main");
  const active = document.querySelector("article[data-page].active");
  if (main && active) main.setAttribute("data-active-page", active.dataset.page);
})();


// lightbox: full-size view for project images (the dashboard is unreadable at card size)
const lightbox = document.querySelector("[data-lightbox-modal]");
const lightboxImg = document.querySelector("[data-lightbox-img]");
const lightboxCap = document.querySelector("[data-lightbox-cap]");
const lightboxClose = document.querySelector("[data-lightbox-close]");

if (lightbox && lightboxImg) {

  const openLightbox = function (src, caption) {
    lightboxImg.setAttribute("src", src);
    lightboxImg.setAttribute("alt", caption || "");
    if (lightboxCap) lightboxCap.textContent = caption || "";
    lightbox.classList.remove("is-zoomed");
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    if (lightboxClose) lightboxClose.focus();
  };

  const closeLightbox = function () {
    lightbox.hidden = true;
    lightbox.classList.remove("is-zoomed");
    lightboxImg.setAttribute("src", "");
    document.body.style.overflow = "";
  };

  document.querySelectorAll("[data-lightbox]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openLightbox(this.dataset.lightbox, this.dataset.lightboxCaption);
    });
  });

  // click the image to toggle 1:1 zoom (Excel screenshots need the real pixels)
  lightboxImg.addEventListener("click", function (e) {
    e.stopPropagation();
    lightbox.classList.toggle("is-zoomed");
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);

  // click the backdrop to close
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });

}

