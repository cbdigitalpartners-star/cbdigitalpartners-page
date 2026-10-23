// Phones: case details start collapsed; desktop always shows them.
(function () {
  var more = document.querySelectorAll(".case-more");
  if (!more.length || !window.matchMedia) return;
  var phone = window.matchMedia("(max-width: 720px)");
  if (phone.matches) more.forEach(function (d) { d.removeAttribute("open"); });
  // The summary is hidden on wider screens, so make sure the content is shown there.
  phone.addEventListener("change", function (e) {
    if (!e.matches) more.forEach(function (d) { d.setAttribute("open", ""); });
  });
})();

// C&B Digital Partners — progressive enhancement (delight only, no core deps)

// Theme toggle — flips light/dark, persists choice, defaults to system.
(function () {
  var btn = document.querySelector(".theme-toggle");
  if (!btn) return;
  var root = document.documentElement;

  function resolved() {
    if (root.classList.contains("theme-dark")) return "dark";
    if (root.classList.contains("theme-light")) return "light";
    return (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
  }
  function sync() { btn.setAttribute("aria-pressed", String(resolved() === "dark")); }
  sync();

  function apply(next) {
    root.classList.remove("theme-dark", "theme-light");
    root.classList.add("theme-" + next);
    try { localStorage.setItem("cb-theme", next); } catch (e) { /* storage blocked */ }
    sync();
  }

  var reduce = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  btn.addEventListener("click", function () {
    var next = resolved() === "dark" ? "light" : "dark";

    // Plain swap when View Transitions unsupported or motion not welcome.
    if (!document.startViewTransition || reduce) { apply(next); return; }

    // Circle reveal radiating from the toggle button.
    var r = btn.getBoundingClientRect();
    var x = r.left + r.width / 2, y = r.top + r.height / 2;
    var end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    var vt = document.startViewTransition(function () { apply(next); });
    vt.ready.then(function () {
      root.animate(
        { clipPath: ["circle(0px at " + x + "px " + y + "px)",
                     "circle(" + end + "px at " + x + "px " + y + "px)"] },
        { duration: 480, easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)" }
      );
    });
  });
})();

(function () {
  "use strict";

  // Console note for the curious (technical audience inspects source).
  try {
    console.log(
      "%cC&B Digital Partners%c\n¿Inspeccionando el código? Nos gusta tu estilo.\nConstruimos software a medida. Hablemos → contacto@cbdigitalpartners.cl",
      "font:600 18px 'Space Grotesk',system-ui,sans-serif;color:#4f6bff",
      "font:13px ui-monospace,monospace;color:#6b7280"
    );
  } catch (e) { /* console unavailable — ignore */ }

  // Scroll reveal — enhancement only. Skip entirely when motion isn't welcome
  // or IntersectionObserver is unavailable, so content is always visible by default.
  var motionOK = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
  if (!motionOK || !("IntersectionObserver" in window)) return;

  document.documentElement.classList.add("reveal-on");

  var targets = document.querySelectorAll(
    ".section-head, .feature, .case-body, .case-media, .pipeline > li, .sol-feature, .sol-grid > *, .trust-item, .cta-band"
  );
  targets.forEach(function (el) { el.classList.add("reveal"); });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  targets.forEach(function (el) { io.observe(el); });
})();

// Scrollspy: light the nav link of the section in view. IntersectionObserver,
// not scroll events — event-driven, no per-frame work.
(function () {
  if (!("IntersectionObserver" in window)) return;

  var links = {};
  document.querySelectorAll(".nav-links a[href^='#']").forEach(function (a) {
    links[a.getAttribute("href").slice(1)] = a;
  });
  var sections = [].slice.call(document.querySelectorAll("section[id]"))
    .filter(function (s) { return links[s.id]; });
  if (!sections.length) return;

  function setActive(id) {
    for (var key in links) links[key].classList.toggle("is-active", key === id);
  }

  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

  sections.forEach(function (s) { spy.observe(s); });

  // Back on the hero, no section is current.
  var hero = document.querySelector(".hero");
  if (hero) {
    new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) setActive(null);
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 }).observe(hero);
  }
})();

// Gastus mock — 3D tilt toward cursor (fine pointer + motion only).
(function () {
  var media = document.querySelector(".sol-feature-media");
  var mock = document.querySelector(".gastus-mock");
  if (!media || !mock) return;
  if (!(window.matchMedia && matchMedia("(pointer: fine)").matches &&
        matchMedia("(prefers-reduced-motion: no-preference)").matches)) return;

  var rx = 0, ry = 0, rxT = 0, ryT = 0, raf = null;
  function loop() {
    rx += (rxT - rx) * 0.12; ry += (ryT - ry) * 0.12;
    mock.style.setProperty("--rx", rx.toFixed(2) + "deg");
    mock.style.setProperty("--ry", ry.toFixed(2) + "deg");
    if (Math.abs(rxT - rx) > 0.05 || Math.abs(ryT - ry) > 0.05) raf = requestAnimationFrame(loop);
    else raf = null;
  }
  function kick() { if (!raf) raf = requestAnimationFrame(loop); }
  media.addEventListener("pointermove", function (e) {
    var r = media.getBoundingClientRect();
    ryT = ((e.clientX - r.left) / r.width - 0.5) * 10;
    rxT = -((e.clientY - r.top) / r.height - 0.5) * 10;
    kick();
  });
  media.addEventListener("pointerleave", function () { rxT = ryT = 0; kick(); });
})();

// Gastus balance — count up when scrolled into view (motion only).
(function () {
  var el = document.querySelector(".gm-balance");
  if (!el || !("IntersectionObserver" in window)) return;
  if (!(window.matchMedia && matchMedia("(prefers-reduced-motion: no-preference)").matches)) return;

  var target = parseInt(el.getAttribute("data-value"), 10) || 0;
  function fmt(n) { return "$" + Math.round(n).toLocaleString("es-CL"); }
  var done = false;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting || done) return;
      done = true; io.disconnect();
      var start = null, dur = 1100;
      el.textContent = fmt(0);
      requestAnimationFrame(function step(t) {
        if (!start) start = t;
        var p = Math.min((t - start) / dur, 1);
        el.textContent = fmt(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      });
    });
  }, { threshold: 0.4 });
  io.observe(el);
})();

// CTA email button — magnetic pull toward cursor within the band.
(function () {
  var band = document.querySelector(".cta-band");
  var btn = band && band.querySelector(".magnetic");
  if (!band || !btn) return;
  if (!(window.matchMedia && matchMedia("(pointer: fine)").matches &&
        matchMedia("(prefers-reduced-motion: no-preference)").matches)) return;

  var mx = 0, my = 0, mxT = 0, myT = 0, raf = null, MAX = 10;
  function loop() {
    mx += (mxT - mx) * 0.15; my += (myT - my) * 0.15;
    btn.style.setProperty("--mx", mx.toFixed(2) + "px");
    btn.style.setProperty("--my", my.toFixed(2) + "px");
    if (Math.abs(mxT - mx) > 0.1 || Math.abs(myT - my) > 0.1) raf = requestAnimationFrame(loop);
    else raf = null;
  }
  function kick() { if (!raf) raf = requestAnimationFrame(loop); }
  band.addEventListener("pointermove", function (e) {
    var r = btn.getBoundingClientRect();
    var dx = e.clientX - (r.left + r.width / 2);
    var dy = e.clientY - (r.top + r.height / 2);
    var pull = Math.max(0, 1 - Math.hypot(dx, dy) / 260);
    mxT = Math.max(-MAX, Math.min(MAX, dx * 0.2 * pull));
    myT = Math.max(-MAX, Math.min(MAX, dy * 0.2 * pull));
    kick();
  });
  band.addEventListener("pointerleave", function () { mxT = myT = 0; kick(); });
})();

// Tu Marka live pipeline: a client travels Sitio → CRM → Portal.
// Enhancement only: without script or with reduced motion every event stays visible.
(function () {
  var ol = document.querySelector(".pipeline");
  if (!ol || !ol.animate || !("IntersectionObserver" in window)) return;
  if (!(window.matchMedia && matchMedia("(prefers-reduced-motion: no-preference)").matches)) return;

  var stops = [].slice.call(ol.children);
  var vertical = matchMedia("(max-width: 860px)");
  var EASE = "cubic-bezier(0.25, 1, 0.5, 1)";
  var run = 0, current = 0;

  var fill = document.createElement("span");
  fill.className = "pipe-fill";
  var token = document.createElement("span");
  token.className = "pipe-token";
  fill.setAttribute("aria-hidden", "true");
  token.setAttribute("aria-hidden", "true");
  ol.appendChild(fill);
  ol.appendChild(token);

  var btn = document.createElement("button");
  btn.type = "button";
  btn.className = "pipe-replay";
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>Repetir recorrido';
  var head = document.querySelector(".pipe-head");
  if (head) head.appendChild(btn);

  // Geometry of stop i, relative to the list.
  function geo(i) {
    var li = stops[i];
    if (vertical.matches) {
      var y = li.offsetTop + 2, len = ol.clientHeight - 12;
      return { t: "translate(0px," + y + "px)", f: "scaleY(" + Math.min(1, (y + 1) / len) + ")" };
    }
    var x = li.offsetLeft, w = ol.clientWidth - 12;
    return { t: "translate(" + x + "px,0px)", f: "scaleX(" + Math.min(1, (x + 1) / w) + ")" };
  }
  function place(i) {
    var g = geo(i);
    token.style.transform = g.t;
    fill.style.transform = g.f;
  }
  function wait(ms, id) {
    return new Promise(function (res, rej) {
      setTimeout(function () { id === run ? res() : rej(); }, ms);
    });
  }
  function reset() {
    stops.forEach(function (li) {
      li.classList.remove("is-reached");
      li.querySelectorAll(".pipe-events li").forEach(function (e) { e.classList.remove("is-on"); });
    });
    current = 0;
    token.classList.remove("is-done");
    place(0);
  }

  function play() {
    var id = ++run;
    btn.disabled = true;
    ol.classList.add("is-live");
    reset();
    var chain = wait(250, id);
    stops.forEach(function (li, i) {
      chain = chain.then(function () {
        if (i === 0) return;
        var from = geo(current), to = geo(i);
        current = i;
        var opts = { duration: 950, easing: EASE, fill: "forwards" };
        var a = token.animate([{ transform: from.t }, { transform: to.t }], opts);
        var b = fill.animate([{ transform: from.f }, { transform: to.f }], opts);
        return b.finished.then(function () {
          place(i); a.cancel(); b.cancel(); // hand the end state back to inline styles
        });
      }).then(function () {
        li.classList.add("is-reached");
        var events = li.querySelectorAll(".pipe-events li");
        var c = wait(320, id);
        events.forEach(function (ev) {
          c = c.then(function () { ev.classList.add("is-on"); return wait(560, id); });
        });
        return c;
      });
    });
    chain.then(function () { token.classList.add("is-done"); btn.disabled = false; }, function () {});
  }

  btn.addEventListener("click", play);
  vertical.addEventListener("change", function () { place(current); });
  window.addEventListener("resize", function () { place(current); });

  var io = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) { io.disconnect(); play(); }
  }, { threshold: 0.45 });
  io.observe(ol);
})();

// Hero deck: pick which product window sits in front.
// Without script the deck is a static stack; with reduced motion it switches instantly and never rotates.
(function () {
  var deck = document.querySelector("[data-deck]");
  var tabs = document.querySelector(".deck-tabs");
  if (!deck || !tabs) return;

  var cards = {};
  [].forEach.call(deck.querySelectorAll(".deck-card"), function (c) { cards[c.dataset.key] = c; });
  var order = Object.keys(cards).sort(function (a, b) { return cards[a].dataset.slot - cards[b].dataset.slot; });
  var buttons = [].slice.call(tabs.querySelectorAll("button"));
  tabs.hidden = false;

  function render() {
    order.forEach(function (key, i) { cards[key].dataset.slot = String(i); });
    buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.key === order[0])); });
  }
  function select(key) {
    if (!cards[key] || order[0] === key) return;
    order = [key].concat(order.filter(function (k) { return k !== key; }));
    render();
  }

  // Gentle rotation until the visitor takes over.
  var motionOK = window.matchMedia && matchMedia("(prefers-reduced-motion: no-preference)").matches;
  var timer = null, paused = false, inView = true, stopped = !motionOK;
  function stop() { stopped = true; clearInterval(timer); }
  function tick() {
    if (stopped || paused || !inView || document.hidden) return;
    order.push(order.shift());
    render();
  }
  if (!stopped) timer = setInterval(tick, 5200);

  function take(key) { stop(); select(key); }
  buttons.forEach(function (b) { b.addEventListener("click", function () { take(b.dataset.key); }); });
  Object.keys(cards).forEach(function (key) {
    cards[key].addEventListener("click", function () { take(key); });
  });

  // Hover or focus on a client name in the proof line previews its window.
  var links = { "#caso-tumarka": "tumarka", "#caso-contempora": "contempora", "#gastus": "gastus" };
  [].forEach.call(document.querySelectorAll(".hero-proof a"), function (a) {
    var key = links[a.getAttribute("href")];
    if (!key) return;
    a.addEventListener("pointerenter", function () { take(key); });
    a.addEventListener("focus", function () { take(key); });
  });

  [deck, tabs].forEach(function (el) {
    el.addEventListener("pointerenter", function () { paused = true; });
    el.addEventListener("pointerleave", function () { paused = false; });
    el.addEventListener("focusin", function () { paused = true; });
    el.addEventListener("focusout", function () { paused = false; });
  });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (e) { inView = e[0].isIntersecting; }, { threshold: 0.3 }).observe(deck);
  }
})();

// Contact brief: chosen needs pre-fill the email; a copy button for when no mail app is set up.
(function () {
  var mail = document.querySelector("[data-mail]");
  var pick = document.querySelector(".cta-pick");
  var copy = document.querySelector(".cta-copy");
  var status = document.querySelector(".cta-status");
  if (!mail) return;
  var ADDRESS = "contacto@cbdigitalpartners.cl";

  function build(needs) {
    var subject = needs.length ? "Propuesta: " + needs.join(" + ") : "Propuesta de software";
    var body = "Hola, equipo de C&B:\n\n" +
      "Qué necesitamos: " + (needs.length ? needs.join("; ") : "") + "\n" +
      "Para qué lo usaría nuestro equipo:\n" +
      "Plazo ideal:\n" +
      "Sistemas que ya usamos:\n\nGracias.";
    return "mailto:" + ADDRESS + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  }

  if (pick) {
    pick.hidden = false;
    var chips = [].slice.call(pick.querySelectorAll("button"));
    chips.forEach(function (b) {
      b.addEventListener("click", function () {
        b.setAttribute("aria-pressed", String(b.getAttribute("aria-pressed") !== "true"));
        var needs = chips.filter(function (c) { return c.getAttribute("aria-pressed") === "true"; })
          .map(function (c) { return c.dataset.need; });
        mail.href = build(needs);
      });
    });
  }

  if (copy && status) {
    copy.hidden = false;
    var label = copy.querySelector("span");
    var timer;
    function done(ok) {
      status.textContent = ok
        ? "Correo copiado: " + ADDRESS
        : "No se pudo copiar automáticamente. El correo es " + ADDRESS;
      if (ok) label.textContent = "Copiado";
      clearTimeout(timer);
      timer = setTimeout(function () { label.textContent = "Copiar correo"; }, 2400);
    }
    copy.addEventListener("click", function () {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(ADDRESS).then(function () { done(true); }, function () { done(false); });
      } else {
        done(false);
      }
    });
  }
})();
