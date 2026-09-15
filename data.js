/* ============================================================
   UNIVERSAL SITE DATA — used by every page of the site.
   Add one object per video. Search, tags, thumbnails and all
   redirect buttons read from here. No other file needs edits.
============================================================= */

const SITE = {
    logo:  "icons/logo.svg",          // ← placeholder: put your logo file path / URL here
    title: "XArCLeXuZ"
  };
  
  const LATEST = {
    videoId: "aqz-KE-bpKQ",           // ← YouTube ID of your LATEST video (auto-plays when menu opens)
    title:   "Secret Telegram channels that sounds Illegal.!",
    webpageUrl: "https://YOUR-USERNAME.github.io/YOUR-REPO/videos/secret-telegram-channels/",  // example URL
    moduleUrl:  "https://YOUR-USERNAME.github.io/YOUR-REPO/modules/secret-telegram-channels/", // example URL
    logoUrl:    "https://YOUR-USERNAME.github.io/YOUR-REPO/",                                   // logo button URL
    description: `
      <h3>Introduction:</h3>
      <p>The video provides a couple of mysterious Telegram channels and explains each channel's benefits in a detailed way.
         Whether you're an Editor, Content Creator, Ethical Hacker, or either a Gamer, there's a lot of unknown knowledge
         of Telegram awaiting for you.</p>
      <h3>What's inside this module:</h3>
      <ul>
        <li>Full channel list with invite links &amp; verification status.</li>
        <li>Step-by-step privacy hardening settings (phone-number hiding, forward protection, 2FA).</li>
        <li>Editor pack: preset files, LUTs and project templates mentioned at 04:12.</li>
        <li>Gamer pack: config repository links and safe-download checklist.</li>
      </ul>
      <h3>Chapters:</h3>
      <ul>
        <li>00:00 — Why Telegram channels matter</li>
        <li>02:31 — Channel #1 walkthrough</li>
        <li>06:48 — Channel #2 walkthrough</li>
        <li>11:05 — Safety rules &amp; red flags</li>
        <li>14:40 — Resources recap</li>
      </ul>
      <blockquote>Disclaimer: every resource is shared for educational purposes only. Verify legality in your region before use.</blockquote>
      <h3>FAQ:</h3>
      <p><strong>Q: Are these channels free?</strong><br>A: Yes, all listed channels are free to join.</p>
      <p><strong>Q: Do I need a premium account?</strong><br>A: No, everything shown works on the free tier.</p>
      <p><strong>Q: Where are the download links?</strong><br>A: Inside the Module page button above — always the latest version.</p>
      <p>Scroll further to test the circular-thumb scrollbar… drag the tiny white dot on the right, exactly like a mobile volume slider. 🔵</p>
    `
  };
  
  /* Bottom-navigation redirect placeholders */
  const NAV_LINKS = {
    explore:  "#",   // ← e.g. https://YOUR-USERNAME.github.io/YOUR-REPO/explore/
    settings: "#",   // ← e.g. https://YOUR-USERNAME.github.io/YOUR-REPO/settings/
    content:  "#",   // ← e.g. https://YOUR-USERNAME.github.io/YOUR-REPO/content/
    modules:  "#"    // ← e.g. https://YOUR-USERNAME.github.io/YOUR-REPO/modules/
  };
  
  /* One entry per video → powers the search panel */
  const VIDEO_DATA = [
    {
      title:     "Secret Telegram channels that sounds Illegal.!",
      thumbnail: "assets/thumbs/telegram.jpg",      // ← your thumb path (preview art auto-shows if missing)
      tags:      ["Telegram", "Privacy", "Resources"],
      watchUrl:  "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
      moduleUrl: "https://YOUR-USERNAME.github.io/YOUR-REPO/modules/secret-telegram-channels/"
    },
    {
      title:     "Complete Video Editing Workflow for Beginners",
      thumbnail: "assets/thumbs/editing.jpg",
      tags:      ["Editing", "Tutorial"],
      watchUrl:  "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_2",
      moduleUrl: "https://YOUR-USERNAME.github.io/YOUR-REPO/modules/editing-workflow/"
    },
    {
      title:     "Ethical Hacking Roadmap 2025 — Free Courses",
      thumbnail: "assets/thumbs/hacking.jpg",
      tags:      ["Ethical Hacking", "Roadmap"],
      watchUrl:  "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_3",
      moduleUrl: "https://YOUR-USERNAME.github.io/YOUR-REPO/modules/hacking-roadmap/"
    },
    {
      title:     "Free Gaming Configs that feel like Cheats (Legal!)",
      thumbnail: "assets/thumbs/gaming.jpg",
      tags:      ["Gaming", "Configs"],
      watchUrl:  "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_4",
      moduleUrl: "https://YOUR-USERNAME.github.io/YOUR-REPO/modules/gaming-configs/"
    },
    {
      title:     "Content Creator Toolkit — Assets, Sounds, Scripts",
      thumbnail: "assets/thumbs/toolkit.jpg",
      tags:      ["Creator", "Assets", "Resources"],
      watchUrl:  "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_5",
      moduleUrl: "https://YOUR-USERNAME.github.io/YOUR-REPO/modules/creator-toolkit/"
    }
  ];
