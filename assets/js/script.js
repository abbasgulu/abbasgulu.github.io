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

const formStatus = function (which) {
  document.querySelectorAll("[data-form-status]").forEach(function (el) {
    el.hidden = el.dataset.formStatus !== which;
    // make sure the message is on screen (on phones it can land under the bottom menu)
    if (!el.hidden && el.scrollIntoView) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
  });
};

// add event to all form input fields
if (form && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      formStatus(null);
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }

  // send in the background so the visitor stays on the site and sees the answer
  // in their own language (without JavaScript the form still posts the normal way)
  form.addEventListener("submit", function (event) {
    if (!window.fetch || !window.FormData) return;
    event.preventDefault();
    formStatus(null);
    formBtn.setAttribute("disabled", "");
    formBtn.classList.add("is-sending");

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    }).then(function (res) {
      if (!res.ok) {
        // Formspree said no (e.g. its reCAPTCHA check is switched on): send the
        // normal way instead, so the message is never lost
        HTMLFormElement.prototype.submit.call(form);
        return;
      }
      form.reset();
      formStatus("ok");
    }).catch(function () {
      // no connection
      formBtn.removeAttribute("disabled");
      formStatus("error");
    }).then(function () {
      formBtn.classList.remove("is-sending");
    });
  });
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
// Every translated element holds BOTH languages, stacked in the same spot, and only
// the active one is visible. Each box is therefore always as big as the longer of the
// two versions, so switching EN <-> AZ never changes the size or position of anything.
(function () {
  if (typeof I18N_AZ === "undefined") return;

  const root = document.documentElement;
  const langBtn = document.querySelector("[data-lang-toggle]");
  const metaDesc = document.querySelector('meta[name="description"]');

  const version = function (lang, content, isHtml) {
    const v = document.createElement("span");
    v.className = "i18n-v";
    v.setAttribute("data-l", lang);
    v.setAttribute("lang", lang);
    if (isHtml) v.innerHTML = content; else v.textContent = content;
    return v;
  };

  // plain text and inline html: both versions go inside the element
  [["data-i18n", false], ["data-i18n-html", true]].forEach(function (g) {
    document.querySelectorAll("[" + g[0] + "]").forEach(function (el) {
      const az = I18N_AZ[el.getAttribute(g[0])];
      if (az == null) return;                          // missing key: English only

      if (el.tagName === "UL") {
        // a list can't hold spans, so stack two copies of the list instead
        const wrap = document.createElement("div");
        wrap.className = "i18n-stack i18n-block";
        const azList = el.cloneNode(false);
        azList.innerHTML = az;
        el.classList.add("i18n-v"); el.setAttribute("data-l", "en"); el.setAttribute("lang", "en");
        azList.classList.add("i18n-v"); azList.setAttribute("data-l", "az"); azList.setAttribute("lang", "az");
        el.parentNode.insertBefore(wrap, el);
        wrap.appendChild(el);
        wrap.appendChild(azList);
        return;
      }

      const en = g[1] ? el.innerHTML.trim() : el.textContent.trim();
      const stack = document.createElement("span");
      stack.className = "i18n-stack";
      stack.appendChild(version("en", en, g[1]));
      stack.appendChild(version("az", az, g[1]));
      el.textContent = "";
      el.appendChild(stack);
    });
  });

  // things that can't be stacked (placeholders, image captions) are swapped instead
  const swaps = [];
  [["data-i18n-ph", "placeholder"], ["data-i18n-cap", "data-lightbox-caption"]].forEach(function (g) {
    document.querySelectorAll("[" + g[0] + "]").forEach(function (el) {
      swaps.push({ el: el, attr: g[1], en: el.getAttribute(g[1]), az: I18N_AZ[el.getAttribute(g[0])] });
    });
  });
  const englishTitle = document.title;
  const englishDesc = metaDesc ? metaDesc.getAttribute("content") : "";

  const apply = function (lang) {
    const az = lang === "az";
    root.setAttribute("lang", lang);
    root.setAttribute("data-lang", lang);           // CSS shows the matching version

    swaps.forEach(function (s) {
      const value = az && s.az != null ? s.az : s.en;
      if (value != null) s.el.setAttribute(s.attr, value);
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
