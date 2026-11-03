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
  { title: "JUMP THAILAND — LearnLy", tag: "Top 10 of 603 · CEO", img: "assets/projects/jump-card.jpg?v=202611040300", page: "jump" },
  { title: "ORTHIVA — My Own Brand", tag: "฿5,360 sales", img: "assets/projects/orthiva-card.jpg?v=202611040300", page: "orthiva" },
  { title: "Singlty — AI Video Editor", tag: "฿120K startup grant", img: "assets/projects/singlty-card.jpg?v=202611040300", page: "singlty" },
  { title: "BTC SONE LIGHT", tag: "Partner · live site", img: "assets/projects/btc-card.jpg?v=202611040300", page: "btc" },
  { title: "Krungsri UniVerse Hackathon", tag: "1st · ฿30,000", img: "assets/projects/krungsri-card.jpg", page: "krungsri" },
  { title: "Reimagine ISAN Aesthetic", tag: "1st · ฿25,000", img: "assets/projects/isan-card.jpg?v=202611040300", page: "isan" },
  { title: "Sherlock — AI Meeting Notes", tag: "Top score in class", img: "assets/projects/sherlock-card.jpg?v=202611040300", page: "sherlock" },
  { title: "KKU Report Skill", split: true, video: "assets/projects/kku/clip.mp4",
    statsList: [{ num: "204K", label: "views" }, { num: "11K", label: "likes" }, { num: "8.6K", label: "shares" }], page: "kku" },
  { title: "Central — Goods Receiving", tag: "Internship", img: "assets/projects/central-card.jpg?v=202611040300", page: "central" },
  { title: "MUVITA — R2M 2025", tag: "Research to Market", img: "assets/projects/muvita/product.jpg", page: "muvita" },
  { title: "Mitr Phol — Allulose Brief", tag: "Product concept", img: "assets/projects/mitrphol/centre.jpg", page: "mitrphol" },
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
