/* ============================================================
   The project list — ONE source of truth, shared by the home-page
   ticker (script.js) and the All Projects grid (projects.html).
   Keeping the renderer here too means a card can never look like
   two different things on two pages.

   `url`  opens a live site in a new tab
   `page` opens the in-site case study (project.html?p=slug)
   `split` uses the wide card: video on the left, real stats on the right
   ============================================================ */
const PROJECTS = [
  { title: "Coca-Cola — Unleash the Game", tag: "AI Video", video: "assets/projects/coke/cover.mp4", page: "coke" },
  { title: "KKU Report — Free Skill Giveaway", split: true, video: "assets/projects/kku/clip.mp4",
    statsList: [{ num: "204K", label: "views" }, { num: "11K", label: "likes" }, { num: "8.6K", label: "shares" }], page: "kku" },
  { title: "ModKrub — Thai Game Mods", tag: "Free for everyone", img: "assets/projects/modkrub.jpg", page: "modkrub" },
  { title: "Krungsri UniVerse 2025", tag: "Hackathon Win", img: "assets/projects/krungsri-card.jpg", page: "krungsri" },
  { title: "Torb Hai — Auto-reply SaaS", tag: "Own Business", img: "assets/projects/torbhai.jpg", page: "torbhai" },
  { title: "Haru — Pocket Watercolor Kit", tag: "Own Business", img: "assets/projects/haru.jpg", page: "haru" },
];

// the inside of a card (thumb + title) — identical everywhere it's used
function projectCardInner(p) {
  if (p.split) {
    const statsHtml = p.statsList.map(s => `
      <div class="p-split-stat"><span class="p-split-num">${s.num}</span><span class="p-split-label">${s.label}</span></div>`).join("");
    return `
      <div class="p-thumb p-thumb-split">
        <div class="p-split">
          <video class="p-split-video" src="${p.video}" autoplay muted loop playsinline preload="auto"></video>
          <div class="p-split-stats">${statsHtml}</div>
        </div>
      </div>
      <div class="p-title">${p.title}</div>`;
  }
  const thumb = p.video
    ? `--p-glyph:''`
    : p.img
    ? `background-image:url('${p.img}');background-size:cover;background-position:center;--p-glyph:''`
    : `--p-bg:${p.bg};--p-glyph:'${p.glyph}'`;
  const videoTag = p.video
    ? `<video class="p-video" src="${p.video}" autoplay muted loop playsinline preload="auto"${p.contain ? ' style="object-fit:contain"' : ""}></video>`
    : "";
  return `
    <div class="p-thumb" style="${thumb}">
      ${videoTag}
      <span class="p-tag">${p.stats || p.tag}</span>
    </div>
    <div class="p-title">${p.title}</div>`;
}

// wraps that inside the right link for where the card points
function projectCard(p, cls) {
  const inner = projectCardInner(p);
  if (p.url)  return `<a class="${cls}" href="${p.url}" target="_blank" rel="noopener">${inner}</a>`;
  if (p.page) return `<a class="${cls}" href="project.html?p=${p.page}">${inner}</a>`;
  return `<div class="${cls}">${inner}</div>`;
}
