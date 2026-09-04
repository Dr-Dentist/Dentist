/* Dr. Asim Prakash Dental Clinic
 * Header toggles: language (English / Hindi) + light/dark theme.
 * Progressive enhancement — injects its own controls, no template markup edited.
 * Depends on window.DAPDC_I18N (assets/js/i18n-dict.js), loaded first.       */
(function () {
  "use strict";

  var LANGS = ["en", "hi"];
  var LABEL = { en: "EN", hi: "हिं" };
  var LS_LANG = "dapdc_lang", LS_THEME = "dapdc_theme";
  var DICT = window.DAPDC_I18N || {};
  var root = document.documentElement;

  /* ---------- storage helpers (never throw) ---------- */
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  /* ---------- resolve initial language / theme ---------- */
  function detectLang() {
    var stored = get(LS_LANG);
    if (stored && LANGS.indexOf(stored) > -1) return stored;
    var list = navigator.languages || [navigator.language || "en"];
    for (var i = 0; i < list.length; i++) {
      var p = String(list[i] || "").toLowerCase().split("-")[0];
      if (LANGS.indexOf(p) > -1) return p;
    }
    return "en";
  }
  function detectTheme() {
    var stored = get(LS_THEME);
    if (stored === "light" || stored === "dark") return stored;
    return (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
  }

  var lang = detectLang();
  var theme = detectTheme();

  /* ---------- collect translatable nodes BEFORE any animation runs ---------- */
  var textTargets = [];   // { node, pre, post, key }
  var attrTargets = [];   // { el, attr, key }

  function scanText() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !/\S/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        var p = n.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        var tag = p.nodeName;
        if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest(".dapdc-toggles")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while ((n = walker.nextNode())) {
      var raw = n.nodeValue;
      var key = raw.replace(/\s+/g, " ").trim();
      if (DICT[key]) {
        var m = raw.match(/^(\s*)([\s\S]*?)(\s*)$/);
        textTargets.push({ node: n, pre: m[1], post: m[3], key: key });
      }
    }
  }

  function scanAttrs() {
    var ph = document.querySelectorAll("[placeholder]");
    ph.forEach(function (el) {
      var key = (el.getAttribute("placeholder") || "").replace(/\s+/g, " ").trim();
      if (DICT[key]) attrTargets.push({ el: el, attr: "placeholder", key: key });
    });
    document.querySelectorAll('input[type="submit"],input[type="button"]').forEach(function (el) {
      var key = (el.value || "").replace(/\s+/g, " ").trim();
      if (DICT[key]) attrTargets.push({ el: el, attr: "value", key: key });
    });
  }

  /* ---------- apply ---------- */
  function tr(key, l) {
    if (l === "en") return key;
    var e = DICT[key];
    return (e && e[l]) ? e[l] : key;
  }

  function applyLang(l) {
    lang = l;
    root.setAttribute("lang", l);
    root.setAttribute("dir", "ltr");

    textTargets.forEach(function (t) {
      if (!t.node || !t.node.parentNode) return;         // node was replaced (e.g. hero split)
      t.node.nodeValue = t.pre + tr(t.key, l) + t.post;
    });
    attrTargets.forEach(function (a) {
      a.el.setAttribute(a.attr, tr(a.key, l));
      if (a.attr === "value") a.el.value = tr(a.key, l);
    });
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = tr(el.getAttribute("data-i18n").replace(/\s+/g, " ").trim(), l);
    });

    var lbl = document.querySelector(".dapdc-lang-label");
    if (lbl) lbl.textContent = LABEL[l];
    var lb = document.getElementById("dapdc-lang");
    if (lb) lb.setAttribute("aria-label", "Language: " + l.toUpperCase() + " — click to change");
  }

  function applyTheme(t) {
    theme = t;
    root.setAttribute("data-theme", t);
    var tb = document.getElementById("dapdc-theme");
    if (tb) tb.setAttribute("aria-label", (t === "dark" ? "Dark" : "Light") + " mode — click to toggle");
  }

  /* ---------- controls ---------- */
  function buildControls() {
    if (document.querySelector(".dapdc-toggles")) return;
    var host = document.querySelector(".navbar-button_wrapper") ||
               document.querySelector(".navbar_container") ||
               document.querySelector(".navbar_wrap");
    if (!host) return;

    var wrap = document.createElement("div");
    wrap.className = "dapdc-toggles";
    wrap.setAttribute("role", "group");
    wrap.setAttribute("aria-label", "Language and theme");

    var langBtn = document.createElement("button");
    langBtn.type = "button";
    langBtn.id = "dapdc-lang";
    langBtn.className = "dapdc-toggle";
    langBtn.title = "भाषा / Language / زبان";
    langBtn.innerHTML = '<span class="dapdc-lang-label">' + LABEL[lang] + "</span>";
    langBtn.addEventListener("click", function () {
      var next = LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length];
      set(LS_LANG, next);
      applyLang(next);
    });

    var themeBtn = document.createElement("button");
    themeBtn.type = "button";
    themeBtn.id = "dapdc-theme";
    themeBtn.className = "dapdc-toggle";
    themeBtn.title = "Light / Dark";
    themeBtn.innerHTML =
      '<svg class="dapdc-ico-sun" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17a5 5 0 100-10 5 5 0 000 10zm0 4a1 1 0 011 1v0a1 1 0 01-2 0v0a1 1 0 011-1zm0-20a1 1 0 011 1v0a1 1 0 01-2 0v0a1 1 0 011-1zm11 11a1 1 0 010 2h0a1 1 0 010-2h0zM3 12a1 1 0 010 2H3a1 1 0 010-2h0zm16.66 6.24a1 1 0 011.41 1.41l0 0a1 1 0 01-1.41-1.41l0 0zM4.93 4.93a1 1 0 011.41 1.41l0 0A1 1 0 014.93 4.93l0 0zm14.14 1.41a1 1 0 01-1.41-1.41l0 0a1 1 0 011.41 1.41l0 0zM6.34 19.07a1 1 0 01-1.41-1.41l0 0a1 1 0 011.41 1.41l0 0z"/></svg>' +
      '<svg class="dapdc-ico-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>';
    themeBtn.addEventListener("click", function () {
      var next = theme === "dark" ? "light" : "dark";
      set(LS_THEME, next);
      applyTheme(next);
    });

    wrap.appendChild(langBtn);
    wrap.appendChild(themeBtn);
    host.insertBefore(wrap, host.firstChild);
  }

  /* ---------- boot ---------- */
  applyTheme(theme);                 // <html data-theme> already set by head script; keep in sync
  scanText();
  scanAttrs();
  applyLang(lang);
  buildControls();

  // hero headline gets re-split by Webflow after load — re-assert translation once
  if (lang !== "en") {
    var reassert = function () {
      document.querySelectorAll("[data-i18n]").forEach(function (el) {
        el.textContent = tr(el.getAttribute("data-i18n").replace(/\s+/g, " ").trim(), lang);
      });
    };
    window.addEventListener("load", function () { setTimeout(reassert, 400); setTimeout(reassert, 1200); });
  }

  // follow OS theme changes only while user hasn't chosen explicitly
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
      if (!get(LS_THEME)) applyTheme(e.matches ? "dark" : "light");
    });
  }
})();

/* ---------- mobile nav fix ------------------------------------------------
 * The Webflow export leaves .navbar_menu translated off-screen even when the
 * hamburger is "open". Mirror the button's open state onto <html> so the CSS
 * in toggles.css (section 4) can pull the panel into view, and close the menu
 * when a link inside it is tapped.                                          */
(function () {
  "use strict";
  function init() {
    var btn = document.querySelector(".w-nav-button");
    var menu = document.querySelector(".navbar_menu.w-nav-menu");
    if (!btn || !menu) return;
    var root = document.documentElement;
    var sync = function () {
      root.classList.toggle("dapdc-nav-open", btn.classList.contains("w--open"));
    };
    btn.addEventListener("click", function () { setTimeout(sync, 0); setTimeout(sync, 60); });
    new MutationObserver(sync).observe(btn, { attributes: true, attributeFilter: ["class"] });
    menu.addEventListener("click", function (e) {
      var a = e.target.closest("a");
      if (a && btn.classList.contains("w--open")) { btn.click(); }
    });
    sync();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
