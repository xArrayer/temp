/* ═══════════════════════════════════════════════════════════════════
   XArCLeXuZ — UNIVERSAL SITE DATA (videos-data.js)
   ─────────────────────────────────────────────────────────────────
   This ONE file feeds the WHOLE site (menu, search, future pages…).
   Whenever you publish a new video:
     1. add a new object to SITE_VIDEOS below
     2. change SITE_CONFIG.latestVideoId to the new video's id
   Nothing else anywhere on the site needs to change.
   ═══════════════════════════════════════════════════════════════════ */

   const SITE_CONFIG = {

    /* 🔴 PLACEHOLDER — path/URL of your logo image, e.g. "assets/logo.png".
       Leave "" to keep the dashed placeholder box in the header. */
    logoUrl: "",
  
    /* 🔴 The id of your NEWEST video (must match an "id" in SITE_VIDEOS) */
    latestVideoId: "v001",
  
    /* 🔴 PLACEHOLDER URLS — replace each with its real page/link */
    urls: {
      videoWebpage: "video.html",     // latest video's dedicated watch page
      modulePage:   "module.html",    // latest video's module/resources page
      logoButton:   "index.html",     // middle (logo) button in the Information Tab
      explore:      "explore.html",
      content:      "content.html",
      modules:      "modules.html",
      settings:     "settings.html",
    },
  };
  
  /* ── Your video library (search reads titles + tags) ────────────────
     NOTE: all entries below use a placeholder YouTube video and
     picsum.photos thumbnails so you can test everything immediately.
     Replace per-field — every 🔴 marks a spot to edit. */
  const SITE_VIDEOS = [
  
    {
      id: "v001",
      title: "Secret Telegram channels that sound Illegal.!",
      /* 🔴 real YouTube thumbnails look like:
         "https://i.ytimg.com/vi/YOUR_VIDEO_ID/hqdefault.jpg" */
      thumbnail: "https://picsum.photos/seed/xarc-v001/480/270",
      tags: ["Telegram", "Privacy", "Research"],
      /* 🔴 this video's real links */
      watchUrl: "https://www.youtube.com/watch?v=aircAruvnKk",
      moduleUrl: "modules/v001.html",
      /* 🔴 "https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID" */
      embedUrl: "https://www.youtube-nocookie.com/embed/aircAruvnKk",
      descriptionHtml: `
        <h5>Introduction:</h5>
        <p>Everyone talks about the <strong>"dark corners"</strong> of the internet, but almost nobody talks about the perfectly <strong>legal <a href="https://www.telegram.org/" target="_blank">Telegram</a> channels that sound completely illegal</strong>. In this video we open the vault: a hand-picked collection of secret-feeling Telegram channels that hand you insider-grade information, tools and communities — without breaking a single rule.</p>

  
        <h5>Who is this for?</h5>
        <ul>
          <li>Researchers & students who want hard-to-find material in one place</li>
          <li>Power users who live inside Telegram and want better channels</li>
          <li>Curious minds who love "hidden internet" culture — safely</li>
        </ul>
  
        <h5>What you'll discover</h5>
        <ul>
          <li>4 archive channels that store documents mainstream media deletes</li>
          <li>3 OSINT channels used by journalists (and how to verify their leaks)</li>
          <li>The "signal in the noise" trick for finding trustworthy channels yourself</li>
          <li>Hidden bots that turn Telegram into a research workstation</li>
        </ul>
  
        <h5>Chapters</h5>
        <ul>
          <li><strong>00:00</strong> — Intro: why "secret" ≠ "illegal"</li>
          <li><strong>02:14</strong> — Channel #1: The Archive Vault</li>
          <li><strong>05:40</strong> — Channel #2: OSINT leaks, verified</li>
          <li><strong>09:02</strong> — Channel #3: Bots that do your homework</li>
          <li><strong>12:35</strong> — How to audit any channel in 60 seconds</li>
          <li><strong>15:10</strong> — Outro & the full module</li>
        </ul>
        <hr>
        <h5>Disclaimer</h5>
        <p>Everything shown is <strong>100% legal</strong> and publicly accessible. No private, paid or pirated material is shared. Use the <strong>Module Page</strong> button for every channel's name, link and safety notes.</p>
      `,
    },
  
    {
      id: "v002",
      title: "7 AI tools that feel ILLEGAL to know",
      thumbnail: "https://picsum.photos/seed/xarc-v002/480/270",
      tags: ["AI", "Tools", "Productivity"],
      watchUrl: "https://www.youtube.com/watch?v=aircAruvnKk",      /* 🔴 replace */
      moduleUrl: "modules/v002.html",                               /* 🔴 replace */
      embedUrl: "https://www.youtube-nocookie.com/embed/aircAruvnKk",
      descriptionHtml: `<p>Short description for v002 — replace me.</p>`,
    },
  
    {
      id: "v003",
      title: "How I edit videos 5x faster (full workflow)",
      thumbnail: "https://picsum.photos/seed/xarc-v003/480/270",
      tags: ["Editing", "Workflow", "Creator"],
      watchUrl: "https://www.youtube.com/watch?v=aircAruvnKk",      /* 🔴 replace */
      moduleUrl: "modules/v003.html",                               /* 🔴 replace */
      embedUrl: "https://www.youtube-nocookie.com/embed/aircAruvnKk",
      descriptionHtml: `<p>Short description for v003 — replace me.</p>`,
    },
  
    {
      id: "v004",
      title: "Free software you've NEVER heard of",
      thumbnail: "https://picsum.photos/seed/xarc-v004/480/270",
      tags: ["Software", "Free", "Windows"],
      watchUrl: "https://www.youtube.com/watch?v=aircAruvnKk",      /* 🔴 replace */
      moduleUrl: "modules/v004.html",                               /* 🔴 replace */
      embedUrl: "https://www.youtube-nocookie.com/embed/aircAruvnKk",
      descriptionHtml: `<p>Short description for v004 — replace me.</p>`,
    },
  
    {
      id: "v005",
      title: "iOS settings Apple hides from you",
      thumbnail: "https://picsum.photos/seed/xarc-v005/480/270",
      tags: ["iOS", "Apple", "Tips"],
      watchUrl: "https://www.youtube.com/watch?v=aircAruvnKk",      /* 🔴 replace */
      moduleUrl: "modules/v005.html",                               /* 🔴 replace */
      embedUrl: "https://www.youtube-nocookie.com/embed/aircAruvnKk",
      descriptionHtml: `<p>Short description for v005 — replace me.</p>`,
    },
  
    {
      id: "v006",
      title: "Make Android look premium in 10 minutes",
      thumbnail: "https://picsum.photos/seed/xarc-v006/480/270",
      tags: ["Android", "Customization", "Design"],
      watchUrl: "https://www.youtube.com/watch?v=aircAruvnKk",      /* 🔴 replace */
      moduleUrl: "modules/v006.html",                               /* 🔴 replace */
      embedUrl: "https://www.youtube-nocookie.com/embed/aircAruvnKk",
      descriptionHtml: `<p>Short description for v006 — replace me.</p>`,
    },
  
    {
      id: "v007",
      title: "Dark Web myths, debunked by a security nerd",
      thumbnail: "https://picsum.photos/seed/xarc-v007/480/270",
      tags: ["Security", "Myths", "Deep Web"],
      watchUrl: "https://www.youtube.com/watch?v=aircAruvnKk",      /* 🔴 replace */
      moduleUrl: "modules/v007.html",                               /* 🔴 replace */
      embedUrl: "https://www.youtube-nocookie.com/embed/aircAruvnKk",
      descriptionHtml: `<p>Short description for v007 — replace me.</p>`,
    },
  ];
