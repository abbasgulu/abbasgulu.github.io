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


// page navigation: each page has its own address (#about, #resume, #portfolio, #contact)
// so a link can open a page directly and the browser's back button works
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
const PAGE_NAMES = ["about", "resume", "portfolio", "contact"];

const showPage = function (name, scroll) {
  if (PAGE_NAMES.indexOf(name) === -1) name = "about";

  pages.forEach(function (page) {
    page.classList.toggle("active", page.dataset.page === name);
  });
  navigationLinks.forEach(function (link) {
    link.classList.toggle("active", link.dataset.navTarget === name);
  });

  // the sidebar is a profile card: only show it on About
  const main = document.querySelector("main");
  if (main) main.setAttribute("data-active-page", name);

  if (scroll !== false) window.scrollTo(0, 0);
};

navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    const target = this.dataset.navTarget;
    if (location.hash === "#" + target) showPage(target);
    else location.hash = target;            // fires hashchange -> showPage
  });
});

window.addEventListener("hashchange", function () {
  showPage(location.hash.slice(1));
});

showPage(location.hash.slice(1) || "about", false);


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



// language: English is written in index.html, Azerbaijani comes from i18n.js.
// The language was already picked in <head> (saved choice, else the browser's language);
// here the text is swapped and the EN/AZ button switches between the two.
(function () {
  if (typeof I18N_AZ === "undefined") return;

  const root = document.documentElement;
  const langBtn = document.querySelector("[data-lang-toggle]");
  const metaDesc = document.querySelector('meta[name="description"]');

  // remember each element's English so switching back needs no second copy
  const english = new Map();
  const remember = function (el, kind) {
    if (english.has(el)) return;
    english.set(el, kind === "text" ? el.textContent
      : kind === "html" ? el.innerHTML
      : kind === "ph" ? el.getAttribute("placeholder")
      : el.getAttribute("data-lightbox-caption"));
  };
  const groups = [
    ["data-i18n", "text"], ["data-i18n-html", "html"],
    ["data-i18n-ph", "ph"], ["data-i18n-cap", "cap"]
  ];
  groups.forEach(function (g) {
    document.querySelectorAll("[" + g[0] + "]").forEach(function (el) { remember(el, g[1]); });
  });
  const englishTitle = document.title;
  const englishDesc = metaDesc ? metaDesc.getAttribute("content") : "";

  const apply = function (lang) {
    const az = lang === "az";
    groups.forEach(function (g) {
      document.querySelectorAll("[" + g[0] + "]").forEach(function (el) {
        const value = az ? I18N_AZ[el.getAttribute(g[0])] : english.get(el);
        if (value == null) return;                       // missing key: keep English
        if (g[1] === "text") el.textContent = value;
        else if (g[1] === "html") el.innerHTML = value;
        else if (g[1] === "ph") el.setAttribute("placeholder", value);
        else el.setAttribute("data-lightbox-caption", value);
      });
    });

    document.title = az ? I18N_AZ["meta.title"] : englishTitle;
    if (metaDesc) metaDesc.setAttribute("content", az ? I18N_AZ["meta.desc"] : englishDesc);

    // the CV that matches the language
    if (typeof CV_FILES !== "undefined") {
      document.querySelectorAll("[data-cv-link]").forEach(function (a) {
        a.setAttribute("href", CV_FILES[lang] || CV_FILES.en);
      });
    }

    // the button shows the language you can switch TO
    if (langBtn) {
      langBtn.textContent = az ? "EN" : "AZ";
      langBtn.setAttribute("title", az ? "Switch to English" : "Azərbaycan dilinə keç");
      langBtn.setAttribute("aria-label", az ? "Switch to English" : "Dili Azərbaycan dilinə dəyiş");
    }

    root.setAttribute("lang", lang);
    root.setAttribute("data-lang", lang);
  };

  apply(root.getAttribute("data-lang") === "az" ? "az" : "en");
  root.classList.remove("i18n-pending");

  if (langBtn) {
    langBtn.addEventListener("click", function () {
      const next = root.getAttribute("data-lang") === "az" ? "en" : "az";
      apply(next);
      try { localStorage.setItem("lang", next); } catch (e) { /* storage blocked */ }
    });
  }
})();
