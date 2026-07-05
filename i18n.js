/* ============================================================
   i18n — TH/EN toggle.
   English is captured from the DOM at load (single source of truth);
   this file only stores the Thai strings, keyed by selector.
   MUST load before script.js so the saved language is applied
   before word-reveal splits text into spans.
   ============================================================ */

// Each entry: [selector, [thai strings in document order]]
// A null in the array = leave that matched element untouched.
const I18N_TH = [
  [".nav-links a", ["เกี่ยวกับ", "ผลงาน <sup>07</sup>", "ไฮไลต์"]],
  [".nav > .btn .roll span", ["ติดต่อ", "ติดต่อ"]],

  [".hero-est", ["(สุปวีร์ มะธุเสน — ขอนแก่น, ประเทศไทย)"]],
  [".hero-desc", ["ผมสร้างของด้วย AI — เว็บไซต์ คลิปโปรโมต &amp; หนัง AI <span>สไลด์ AI เร็วทันใจ ระบบอัตโนมัติ และ AI AGENT</span> — ทั้งหมดหนุนด้วยงานวิจัยตลาดจริง <span>แชมป์แฮ็กกาธอน KRUNGSRI UNIVERSE 2025</span>"]],
  [".hero-tags", ["คอนเทนต์ AI <i>/</i> ระบบอัตโนมัติ <i>/</i> เว็บ &amp; วิจัย"]],

  [".divider .pill", ["✦ (เกี่ยวกับผม)", "✦ (ผลงาน)", "✦ (บริการ)", "✦ (ตัวเลข)", "✦ (ไฮไลต์)"]],

  [".kb3d-tip", ["ชุดเครื่องมือ AI ของผม — (ลองกดปุ่มดูสิ)"]],

  [".intro-facts dt", ["อยู่ที่", "บทบาท", "รางวัลล่าสุด"]],
  [".intro-facts dd", ["ขอนแก่น ประเทศไทย", "Creative Technologist / AI Creator", "แชมป์ — Krungsri UniVerse 2025"]],

  [".intro .big-text", ["ผมชื่อเดียร์ — นักศึกษาผู้ประกอบการดิจิทัล ม.ขอนแก่น ที่สร้างของด้วย AI ทำเว็บไซต์ คลิปโปรโมตและหนัง AI สไลด์ AI เร็วทันใจ ระบบอัตโนมัติและ AI Agent พร้อมงานวิจัยตลาดจริง — เปลี่ยนไอเดียให้เป็นของที่ใช้งานได้จริง เร็ว และคิดแบบคนทำธุรกิจ"]],

  ["#projects .giant", ["ผลงาน."]],
  ["#projects .section-head .roll span", ["ดูผลงานทั้งหมด", "ดูผลงานทั้งหมด"]],

  [".services-title", ["บริการ."]],
  [".s-card .s-name", ["คอนเทนต์ &amp; วิดีโอ AI", "ดีไซน์ &amp; สไลด์", "ระบบอัตโนมัติ AI", "เว็บ &amp; โปรดักต์"]],

  [".stats-lede", ["ผมไม่เดา — ผมวัดผล งาน AI ที่มีอินไซต์จริงนำทาง พร้อมตัวเลขพิสูจน์ว่าเวิร์ก"]],
  [".stat-label", ["ยอดวิว TikTok", "ไลก์ที่ได้", "ผู้บริโภคที่สำรวจ", "แชมป์แฮ็กกาธอน"]],
  [".stat-foot", ["แคมเปญ PAAM Serum", "จากคลิป AI คลิปเดียว", "วิจัยอินไซต์ CHURO", "Krungsri UniVerse 2025"]],

  ["#blog .giant", ["ไฮ-<br>ไลต์."]],
  ["#blog .section-head .roll span", ["ร่วมงานกับผม", "ร่วมงานกับผม"]],
  [".blog-top .tag", ["แชมป์", "คอนเทนต์ AI", "วิจัย", "อินไซต์"]],
  [".blog-card h3", [
    "แชมป์แฮ็กกาธอน Krungsri UniVerse — ที่ 1",
    "PAAM Serum — 42.3K วิวบน TikTok",
    "MUVITA — Research to Market (R2M)",
    "CHURO — วิจัยผู้บริโภค 400+ คน",
  ]],

  [".contact-title", ["มาทำงาน<br>ด้วยกัน"]],
  [".contact-card-title", ["ฟอร์มติดต่อ"]],
  [".contact-sub", ['ติดต่อผมตรงๆ ได้ที่ <a href="mailto:suprawee.m@kkumail.com">suprawee.m(at)kkumail.com</a> หรือฝากข้อมูลไว้ตรงนี้ได้เลย']],
  [".f-label", ["ชื่อ-นามสกุล", "อีเมล", "ข้อความของคุณ"]],
  [".form-note", ["ข้อมูลของคุณผมไม่แชร์ให้ใครแน่นอน สัญญา!"]],
  ["#contactForm .btn .roll span", ["ส่งข้อความ →", "ส่งข้อความ →"]],
  [".contact-side-lede", ["ถนัด DM มากกว่า? ทักมาได้ทุกช่องทาง:"]],
  [".contact-top .roll span", ["กลับขึ้นบน ↑", "กลับขึ้นบน ↑"]],

  [".footer-copy", ["© 2026 สุปวีร์ มะธุเสน สงวนลิขสิทธิ์"]],
  [".footer-made", ["สร้างด้วย ❤️ ที่ขอนแก่น"]],
  [".footer-nav a", ["หน้าแรก", "เกี่ยวกับ", "ผลงาน", "อินสตาแกรม"]],
];

// capture English from the DOM once, so the markup stays the only EN source
const i18nEls = I18N_TH.map(([sel, th]) => {
  const els = [...document.querySelectorAll(sel)];
  if (els.length !== th.length)
    console.warn(`i18n: ${sel} matched ${els.length} elements, expected ${th.length}`);
  return els.map((el, i) => ({ el, en: el.innerHTML, th: th[i] }));
}).flat();

// word-reveal splitter (same logic as script.js) for re-splitting after a swap
function splitWords(el) {
  const words = el.textContent.trim().split(/\s+/);
  el.innerHTML = words
    .map((w, i) => `<span class="w" style="--wi:${i}">${w}</span>`)
    .join(" ");
}

window.currentLang = localStorage.getItem("lang") === "th" ? "th" : "en";

function applyLang(lang, resplit) {
  window.currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  for (const { el, en, th } of i18nEls) {
    if (th == null) continue;
    el.innerHTML = lang === "th" ? th : en;
    if (resplit && el.classList.contains("word-reveal")) splitWords(el);
  }
  const btn = document.getElementById("langBtn");
  if (btn) btn.textContent = lang === "th" ? "EN" : "TH";
}

// initial apply happens before script.js loads, so no re-split needed yet
if (window.currentLang === "th") applyLang("th", false);
else document.getElementById("langBtn").textContent = "TH";

document.getElementById("langBtn").addEventListener("click", () => {
  applyLang(window.currentLang === "th" ? "en" : "th", true);
});
