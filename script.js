/* ============================================================
   XArCLeXuZ — menu / search / scrollbar behaviour
============================================================= */
(function () {
    "use strict";
    const $  = (s, c = document) => c.querySelector(s);
    const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  
    /* ---------- 1. Placeholder art (auto-fallback if icon/thumb files are missing) ---------- */
    const svgURI = s => "data:image/svg+xml;utf8," + encodeURIComponent(s);
  
    const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#8f96a3"/></linearGradient></defs><path d="M15 10h11l23 44H38z" fill="url(#g)"/><path d="M49 10H38L27 31l6 11z" fill="url(#g)"/><line x1="12" y1="54" x2="52" y2="10" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/></svg>`;
  
    const GEAR_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.55-1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34 1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87 1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1z"/></svg>`;
  
    const PUZZLE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linejoin="round"><path d="M9 5a2 2 0 1 1 4 0v0h5v4h1a2 2 0 1 1 0 4h-1v5h-5v-1a2 2 0 1 0-4 0v1H5v-5H4a2 2 0 1 1 0-4h1V5z"/></svg>`;
  
    function thumbSVG(i) {
      const h = (210 + i * 47) % 360;
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"><defs><linearGradient id="a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${h},70%,45%)"/><stop offset="1" stop-color="hsl(${(h + 60) % 360},70%,22%)"/></linearGradient></defs><rect width="320" height="180" fill="url(#a)"/><circle cx="160" cy="86" r="34" fill="rgba(255,255,255,.92)"/><path d="M148 68l36 18-36 18z" fill="hsl(${h},70%,32%)"/><text x="14" y="166" font-family="Arial" font-size="15" fill="rgba(255,255,255,.7)">PREVIEW THUMB</text></svg>`;
    }
  
    function applyFallbacks(root = document) {
      $$("img[data-fallback]", root).forEach(img => {
        const fix = () => {
          const k = img.dataset.fallback;
          if (k === "logo")         img.src = svgURI(LOGO_SVG);
          else if (k === "settings") img.src = svgURI(GEAR_SVG);
          else if (k === "modules")  img.src = svgURI(PUZZLE_SVG);
          else if (k === "thumb")    img.src = svgURI(thumbSVG(+img.dataset.seed || 0));
        };
        if (img.complete && img.naturalWidth === 0) fix();
        else img.addEventListener("error", fix, { once: true });
      });
    }
  
    /* ---------- 2. Inject data from data.js ---------- */
    $$("img[data-role='logo']").forEach(img => { img.src = SITE.logo; });
    $("#latestTitle").textContent   = LATEST.title;
    $("#descScroll").innerHTML      = LATEST.description;
    $("#videoPageBtn").href         = LATEST.webpageUrl;
    $("#modulePageBtn").href        = LATEST.moduleUrl;
    $("#mVideoBtn").href            = LATEST.webpageUrl;
    $("#mModuleBtn").href           = LATEST.moduleUrl;
    $("#logoBtn").href              = LATEST.logoUrl;
    $("#logoBtnMobile").href        = LATEST.logoUrl;
    $("#navExplore").href           = NAV_LINKS.explore;
    $("#navSettings").href          = NAV_LINKS.settings;
    $("#navContent").href           = NAV_LINKS.content;
    $("#navModules").href           = NAV_LINKS.modules;
  
    /* ---------- 3. Menu open / close + YouTube autoplay ---------- */
    const body    = document.body;
    const toggle  = $("#menuToggle");
    const embed   = $("#ytEmbed");
    const embedURL = () =>
      `https://www.youtube-nocookie.com/embed/${LATEST.videoId}?autoplay=1&mute=1&playsinline=1&rel=0`;
  
    function openMenu() {
      body.classList.add("menu-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
      embed.src = embedURL();            // autoplay starts (muted, as browsers require)
      requestAnimationFrame(() => syncThumb());
    }
    function closeMenu() {
      body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      embed.src = "about:blank";         // stops playback immediately
    }
    toggle.addEventListener("click", () =>
      body.classList.contains("menu-open") ? closeMenu() : openMenu());
  
    /* ---------- 4. Search panel ---------- */
    const panel   = $("#searchPanel");
    const sBtn    = $("#searchBtn");
    const sInput  = $("#searchInput");
    const sResult = $("#searchResults");
  
    function openSearch()  { panel.classList.add("open");  sBtn.setAttribute("aria-expanded","true");  sInput.focus(); renderResults(sInput.value); }
    function closeSearch() { panel.classList.remove("open"); sBtn.setAttribute("aria-expanded","false"); }
    sBtn.addEventListener("click", () => panel.classList.contains("open") ? closeSearch() : openSearch());
    document.addEventListener("click", e => {
      if (panel.classList.contains("open") && !panel.contains(e.target) && !sBtn.contains(e.target)) closeSearch();
    });
  
    let deb;
    sInput.addEventListener("input", () => { clearTimeout(deb); deb = setTimeout(() => renderResults(sInput.value), 120); });
  
    function matches(item, q) {
      const words = q.toLowerCase().split(/\s+/).filter(Boolean);
      const hay   = (item.title + " " + item.tags.join(" ")).toLowerCase();
      return words.every(w => hay.includes(w));       // keyword matching on title (+tags bonus)
    }
  
    function renderResults(q) {
      const list = VIDEO_DATA.map((v, i) => ({ v, i })).filter(o => matches(o.v, q.trim()));
      if (!list.length) { sResult.innerHTML = `<div class="no-result">No videos match “${q}”.</div>`; return; }
      sResult.innerHTML = list.map(({ v, i }) => `
        <article class="result">
          <img src="${v.thumbnail}" data-fallback="thumb" data-seed="${i}" alt="">
          <div>
            <h4>${v.title}</h4>
            <div class="tags">${v.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
            <div class="result-actions">
              <a class="mini-btn" href="${v.watchUrl}" target="_blank" rel="noopener">Watch Video</a>
              <a class="mini-btn" href="${v.moduleUrl}">Module</a>
            </div>
          </div>
        </article>`).join("");
      applyFallbacks(sResult);
    }
  
    /* ---------- 5. Circular-thumb scrollbar for Description ---------- */
    const scroller = $("#descScroll");
    const track    = $("#scrollTrack");
    const thumb    = $("#scrollThumb");
    let dragging = false, startY = 0, startOff = 0;
  
    function syncThumb() {
      const max   = scroller.scrollHeight - scroller.clientHeight;
      const range = track.clientHeight - thumb.offsetHeight;
      thumb.style.opacity = max > 0 ? "1" : "0";
      thumb.style.transform = `translateY(${max > 0 ? (scroller.scrollTop / max) * range : 0}px)`;
    }
    scroller.addEventListener("scroll", syncThumb);
    window.addEventListener("resize", syncThumb);
  
    thumb.addEventListener("pointerdown", e => {
      dragging = true; startY = e.clientY;
      startOff = new DOMMatrixReadOnly(getComputedStyle(thumb).transform).m42 || 0;
      thumb.classList.add("drag"); thumb.setPointerCapture(e.pointerId);
      e.preventDefault();
    });
    thumb.addEventListener("pointermove", e => {
      if (!dragging) return;
      const range = track.clientHeight - thumb.offsetHeight;
      const max   = scroller.scrollHeight - scroller.clientHeight;
      const ratio = Math.min(1, Math.max(0, (startOff + (e.clientY - startY)) / range));
      scroller.scrollTop = ratio * max;
    });
    ["pointerup", "pointercancel"].forEach(ev =>
      thumb.addEventListener(ev, () => { dragging = false; thumb.classList.remove("drag"); }));
  
    track.addEventListener("pointerdown", e => {          // tap track = jump
      if (e.target === thumb) return;
      const rect  = track.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height));
      scroller.scrollTop = ratio * (scroller.scrollHeight - scroller.clientHeight);
    });
  
    /* ---------- 6. Escape key closes search then menu ---------- */
    document.addEventListener("keydown", e => {
      if (e.key !== "Escape") return;
      if (panel.classList.contains("open")) closeSearch();
      else if (body.classList.contains("menu-open")) closeMenu();
    });
  
    /* ---------- init ---------- */
    applyFallbacks();
    renderResults("");
    syncThumb();
  })();
