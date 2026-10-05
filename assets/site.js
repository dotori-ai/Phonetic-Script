// Sponsor links. Fill in each URL once the account exists; empty links are hidden.
const SUPPORT_LINKS = {
  github: "",    // e.g. "https://github.com/sponsors/dotori-ai"
  patreon: "",   // e.g. "https://www.patreon.com/..."
  tumblbug: "",  // e.g. "https://tumblbug.com/..."
};

const NOTIFY_URL = "https://github.com/dotori-ai/Phonetic-Script/issues/new?title=Support%3A%20notify%20me";

const LABELS = {
  en: { github: "Sponsor on GitHub", patreon: "Support on Patreon", tumblbug: "Back us on Tumblbug",
        soon: "Sponsorship opens soon.", notify: "Get notified" },
  ko: { github: "GitHub에서 후원하기", patreon: "Patreon에서 후원하기", tumblbug: "텀블벅에서 후원하기",
        soon: "후원 창구가 곧 열립니다.", notify: "열리면 알림 받기" },
  es: { github: "Patrocinar en GitHub", patreon: "Apoyar en Patreon", tumblbug: "Apoyar en Tumblbug",
        soon: "Las donaciones abren pronto.", notify: "Avísame" },
  zh: { github: "在 GitHub 上赞助", patreon: "在 Patreon 上支持", tumblbug: "在 Tumblbug 上支持",
        soon: "赞助渠道即将开放。", notify: "开放时通知我" },
};

document.querySelectorAll("[data-support-links]").forEach((box) => {
  const t = LABELS[box.dataset.supportLinks] || LABELS.en;
  const live = Object.entries(SUPPORT_LINKS).filter(([, url]) => url);
  if (live.length) {
    live.forEach(([key, url], i) => {
      const a = document.createElement("a");
      a.href = url; a.textContent = t[key]; a.className = i ? "button secondary" : "button";
      a.rel = "noopener"; box.appendChild(a);
    });
  } else {
    const s = document.createElement("span"); s.className = "note"; s.textContent = t.soon;
    const a = document.createElement("a"); a.href = NOTIFY_URL; a.textContent = t.notify; a.className = "button secondary";
    box.append(a, s);
  }
});
