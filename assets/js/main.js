document.addEventListener("DOMContentLoaded", () => {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const TABS = ["about", "experience", "education", "skills", "contact"];
  const indicator = $("indicator");
  let current = TABS[0];

  // Brand label + icon for each profile link (icons live in assets/js/icons.js)
  const META = {
    linkedin: ["LinkedIn", "linkedin"], github: ["GitHub", "github"],
    chess: ["Chess.com", "crown"], spotify: ["Spotify", "headphones"], discord: ["Discord", "chat"],
    leetcode: ["LeetCode", "leetcode"], codechef: ["CodeChef", "chefhat"], gfg: ["GeeksforGeeks", "book"]
  };
  const withUrl = (obj) => Object.entries(obj).filter(([, v]) => v.url);
  const shown = (obj) => Object.entries(obj).filter(([, v]) => v.url || v.handle);

  const chips = (arr) => arr && arr.length ? `<ul class="chips">${arr.map((t) => `<li>${t}</li>`).join("")}</ul>` : "";
  const points = (arr) => arr && arr.length ? `<ul class="points">${arr.map((p) => `<li>${p}</li>`).join("")}</ul>` : "";
  const linkCard = ([key, v]) => {
    const [label, icon] = META[key];
    if (!v.url) { // no link (e.g. Discord username): click copies the handle
      return `<button type="button" class="link-card" data-copy="${v.handle}">
        <span class="tile">${ico(icon)}</span>
        <span class="txt"><strong>${label}</strong><span>${v.handle}</span></span>
        <span class="go">${ico("copy")}</span></button>`;
    }
    return `<a class="link-card" href="${v.url}" target="_blank" rel="noopener">
      <span class="tile">${ico(icon)}</span>
      <span class="txt"><strong>${label}</strong>${v.handle ? `<span>${v.handle}</span>` : ""}</span>
      <span class="go">${ico("arrow")}</span></a>`;
  };

  /* ---------- Tabs ---------- */
  function moveIndicator() {
    const el = $("tab-" + current);
    indicator.style.width = el.offsetWidth + "px";
    indicator.style.transform = `translateX(${el.offsetLeft}px)`;
  }

  function activate(id, { focus = false, updateHash = true } = {}) {
    if (!TABS.includes(id)) id = TABS[0];
    const changed = id !== current;
    current = id;
    TABS.forEach((t) => {
      const selected = t === id;
      const tab = $("tab-" + t);
      tab.setAttribute("aria-selected", selected);
      tab.tabIndex = selected ? 0 : -1;
      $("panel-" + t).hidden = !selected;
    });
    moveIndicator();
    $("tab-" + id).scrollIntoView({ block: "nearest", inline: "nearest" });
    if (changed) $("scroll").scrollTop = 0;
    if (focus) $("tab-" + id).focus();
    if (updateHash) history.replaceState(null, "", "#" + id);
  }

  TABS.forEach((id, i) => {
    const tab = $("tab-" + id);
    tab.addEventListener("click", () => activate(id));
    tab.addEventListener("keydown", (e) => {
      const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
      if (step) { e.preventDefault(); activate(TABS[(i + step + TABS.length) % TABS.length], { focus: true }); }
      else if (e.key === "Home") { e.preventDefault(); activate(TABS[0], { focus: true }); }
      else if (e.key === "End") { e.preventDefault(); activate(TABS[TABS.length - 1], { focus: true }); }
    });
  });
  window.addEventListener("hashchange", () => activate(location.hash.slice(1), { updateHash: false }));
  window.addEventListener("resize", moveIndicator);

  /* ---------- Theme toggle (manual, default dark) ---------- */
  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    $("theme-toggle").dataset.pos = theme === "dark" ? 1 : 0;
    document.querySelectorAll("[data-set-theme]").forEach((b) =>
      b.setAttribute("aria-pressed", b.dataset.setTheme === theme));
  }
  document.querySelectorAll("[data-set-theme]").forEach((b) =>
    b.addEventListener("click", () => setTheme(b.dataset.setTheme)));

  /* ---------- Language toggle ---------- */
  document.querySelectorAll("[data-set-lang]").forEach((b) =>
    b.addEventListener("click", () => I18N.set(b.dataset.setLang)));

  /* ---------- Language-dependent rendering ---------- */
  function renderDynamic() {
    const lang = I18N.lang;
    const L = LANG[lang], EN = LANG.en;
    const pick = (group, id) => (L[group] || {})[id] || (EN[group] || {})[id] || {};
    const proofLink = (t, url) => !url ? "" : `<a class="proof" href="${url}" target="_blank" rel="noopener">${ico("file")}<span>${t.proofLabel || ""}</span>${ico("arrow")}</a>`;

    const nm = S.name[lang];
    if (nm.includes("・")) { // keep each half of the katakana name together, break only after the middle dot
      $("hero-name").innerHTML = nm.split("・").map((part, i, a) => `<span class="nw">${part}${i < a.length - 1 ? "・" : ""}</span>`).join("");
    } else $("hero-name").textContent = nm;
    $("footer-name").textContent = S.name[lang];
    $("lang-toggle").dataset.pos = lang === "ja" ? 1 : 0;
    document.querySelectorAll("[data-set-lang]").forEach((b) =>
      b.setAttribute("aria-pressed", b.dataset.setLang === lang));

    // About
    $("about-text").innerHTML = (L.about.paragraphs || EN.about.paragraphs).map((p) => `<p>${p}</p>`).join("");
    $("lang-bars").innerHTML = S.languages.map((l) => {
      const t = pick("languages", l.key);
      const segs = Array.from({ length: 5 }, (_, i) =>
        i < l.level ? '<i class="on"></i>' : (l.target && i < l.target ? '<i class="target"></i>' : "<i></i>")).join("");
      return `<li><span class="lname">${t.name}</span>
        <span class="segs" role="img" aria-label="${t.name}: ${t.level}">${segs}</span></li>`;
    }).join("");

    // Experience + education share one entry layout
    const entry = (t, id, tech, proof) => `<article class="entry">
      <div class="meta"><p class="when">${t.period || ""}</p>${t.location ? `<p class="where">${t.location}</p>` : ""}</div>
      <div class="detail">
        <h3>${t.title || id}</h3>
        <p class="org">${t.org || ""}</p>
        ${t.note ? `<p class="note">${t.note}</p>` : ""}
        ${points(t.points)}${chips(t.subjects || tech)}${proofLink(t, proof)}
      </div></article>`;
    $("experience-list").innerHTML = S.experience.map((x) => entry(pick("experienceText", x.id), x.id, x.tech, x.proof)).join("");
    $("education-list").innerHTML = S.education.map((x) => entry(pick("educationText", x.id), x.id, undefined, x.proof)).join("");

    // Projects
    $("project-list").innerHTML = S.projects.map((p) => {
      const t = pick("projectText", p.id);
      const live = !!p.demo;
      const links = [
        p.demo && `<a class="btn primary" href="${p.demo}" target="_blank" rel="noopener">${ico("arrow")}${I18N.t("projects.live")}</a>`,
        p.code && `<a class="btn" href="${p.code}" target="_blank" rel="noopener">${ico("code")}${I18N.t("projects.code")}</a>`
      ].filter(Boolean).join("");
      const tech = (p.tech || []).map((g) =>
        `<div class="tech-group"><span class="tech-label">${I18N.t("projects.groups." + g.key)}</span>${chips(g.items)}</div>`).join("");
      const shots = p.shots || [];
      const label = (i) => (t.shots && t.shots[i]) || `${t.title} ${i + 1}`;
      const addr = p.demo ? p.demo.replace(/^https?:\/\//, "").replace(/\/$/, "") : "";
      const img = `<img class="shot-main" src="assets/img/projects/${shots[0]}.webp" alt="${t.title}: ${label(0)}" width="1600" height="900">`;
      const view = live
        ? `<a class="shot-view" href="${p.demo}" target="_blank" rel="noopener" aria-label="${I18N.t("projects.hint")}: ${t.title}">${img}<span class="shot-hint">${I18N.t("projects.hint")} ${ico("arrow")}</span></a>`
        : `<div class="shot-view">${img}</div>`;
      const thumbs = shots.length > 1 ? `<div class="shot-thumbs">${shots.map((f, i) =>
        `<button type="button" class="shot-thumb" data-src="assets/img/projects/${f}.webp" data-alt="${t.title}: ${label(i)}"${i === 0 ? ' aria-current="true"' : ""}>
          <img src="assets/img/projects/${f}.webp" alt="" loading="lazy"><span>${label(i)}</span></button>`).join("")}</div>` : "";
      return `<article class="project${live ? "" : " static"}">
        <div class="project-body">
          <h3>${t.title || p.id}</h3>
          <p>${t.description || ""}</p>
          ${points(t.points)}
          <div class="tech">${tech}</div>
          ${links ? `<p class="project-links">${links}</p>` : ""}
        </div>
        <div class="project-media">
          <div class="shot-frame${live ? " clickable" : ""}">
            <div class="shot-bar"><i></i><i></i><i></i><span class="shot-url">${addr}</span></div>
            ${view}
          </div>
          ${thumbs}
        </div>
      </article>`;
    }).join("");
    const plist = $("project-list");
    if (!plist._wired) { // screenshot thumbnails swap the main image
      plist._wired = true;
      plist.addEventListener("click", (e) => {
        const b = e.target.closest(".shot-thumb");
        if (!b) return;
        const card = b.closest(".project");
        const main = card.querySelector(".shot-main");
        main.src = b.dataset.src; main.alt = b.dataset.alt;
        card.querySelectorAll(".shot-thumb").forEach((x) => x.removeAttribute("aria-current"));
        b.setAttribute("aria-current", "true");
      });
    }

    // Skills, coding profiles, certifications
    $("skill-list").innerHTML = S.skills.map((g) =>
      `<div class="skill-group"><h3>${I18N.t("skills.groups." + g.key)}</h3>${chips(g.items)}</div>`).join("");
    $("profile-grid").innerHTML = withUrl(S.codingProfiles).map(linkCard).join("");
    $("cert-wrap").hidden = !S.certifications.length;
    $("cert-list").innerHTML = S.certifications.map((c) => {
      const t = pick("certText", c.id);
      const inner = `<span class="tile">${ico("award")}</span>
        <span class="txt"><strong>${t.title || c.id}</strong><span>${t.issuer || ""}${t.issuer && t.year ? ", " : ""}${t.year ? `<span class="nw">${t.year}</span>` : ""}</span></span>
        ${c.url ? `<span class="go">${ico("arrow")}</span>` : ""}`;
      return c.url
        ? `<a class="link-card" href="${c.url}" target="_blank" rel="noopener">${inner}</a>`
        : `<div class="link-card static">${inner}</div>`;
    }).join("");

    // Hobbies (shown on the About tab)
    $("hobby-list").innerHTML = S.hobbies.map((h) => {
      const t = pick("hobbyText", h.id);
      const url = h.url ?? (S.links[h.linkKey] || {}).url;
      const inner = `${ico(h.icon)}<span>${t.title || h.id}</span>${url ? `<span class="pill-go">${ico("arrow")}</span>` : ""}`;
      const tip = t.description || "";
      return url
        ? `<a class="hobby-pill" href="${url}" target="_blank" rel="noopener" title="${tip}">${inner}</a>`
        : `<span class="hobby-pill" title="${tip}">${inner}</span>`;
    }).join("");

    // Contact (email card is static HTML)
    $("contact-grid").innerHTML = shown(S.links).map(linkCard).join("") +
      `<div class="link-card static"><span class="tile">${ico("pin")}</span>
        <span class="txt"><strong>${I18N.t("contact.locationLabel")}</strong><span>${I18N.t("contact.location")}</span></span></div>`;

    requestAnimationFrame(moveIndicator);
  }

  /* ---------- Static pieces ---------- */
  document.querySelectorAll("[data-icon]").forEach((el) => { el.innerHTML = ico(el.dataset.icon); });
  $("year").textContent = new Date().getFullYear();
  $("email-link").href = `mailto:${S.email}`;
  $("email-link").textContent = S.email;

  $("social-links").innerHTML =
    `<li><a href="mailto:${S.email}" aria-label="Email" title="Email">${ico("mail")}</a></li>` +
    S.sidebar.map((key) => {
      const v = S.links[key] || S.codingProfiles[key];
      if (!v || !v.url) return "";
      const [label, icon] = META[key];
      const tip = v.handle ? `${label}: ${v.handle}` : label;
      return `<li><a href="${v.url}" target="_blank" rel="noopener" aria-label="${tip}" title="${tip}">${ico(icon)}</a></li>`;
    }).join("");

  const copyBtn = $("copy-email");
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(S.email);
      copyBtn.firstElementChild.innerHTML = ico("check");
      $("copy-label").textContent = I18N.t("contact.copied");
      setTimeout(() => {
        copyBtn.firstElementChild.innerHTML = ico("copy");
        $("copy-label").textContent = I18N.t("contact.copy");
      }, 1600);
    } catch (e) { /* clipboard blocked; the mailto link still works */ }
  });

  // Contact cards without a link (Discord username) copy the handle on click
  $("contact-grid").addEventListener("click", async (e) => {
    const card = e.target.closest("[data-copy]");
    if (!card) return;
    try {
      await navigator.clipboard.writeText(card.dataset.copy);
      const label = card.querySelector(".txt span");
      label.textContent = I18N.t("contact.copied");
      setTimeout(() => (label.textContent = card.dataset.copy), 1600);
    } catch (err) { /* clipboard blocked */ }
  });

  document.addEventListener("langchange", renderDynamic);
  setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  I18N.apply();
  activate(location.hash.slice(1), { updateHash: false });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(moveIndicator);
});
