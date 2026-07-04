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

  [".divider .pill", ["✦ (เกี่ยวกับผม)", "✦ (ผลงาน)", "✦ (บริการ)", "✦ (ราคา)", "✦ (ตัวเลข)", "✦ (คำถามที่พบบ่อย)", "✦ (ไฮไลต์)"]],

  [".kb3d-tip", ["ชุดเครื่องมือ AI ของผม — ลากเพื่อหมุน · คลิกปุ่มเพื่อกด"]],

  [".intro .big-text", ["ผมชื่อเดียร์ — นักศึกษาผู้ประกอบการดิจิทัล ม.ขอนแก่น ที่สร้างของด้วย AI ทำเว็บไซต์ คลิปโปรโมตและหนัง AI สไลด์ AI เร็วทันใจ ระบบอัตโนมัติและ AI Agent พร้อมงานวิจัยตลาดจริง — เปลี่ยนไอเดียให้เป็นของที่ใช้งานได้จริง เร็ว และคิดแบบคนทำธุรกิจ"]],

  ["#projects .giant", ["ผลงาน."]],
  ["#projects .section-head .roll span", ["ดูผลงานทั้งหมด", "ดูผลงานทั้งหมด"]],

  [".services-title", ["บริการ."]],
  [".s-card .s-name", ["คอนเทนต์ &amp; วิดีโอ AI", "ดีไซน์ &amp; สไลด์", "ระบบอัตโนมัติ AI", "เว็บ &amp; โปรดักต์"]],

  [".pricing .giant", ["ราคา."]],
  [".pricing-lede", ["ผมไม่ได้ขายชั่วโมงทำงาน — ผมขายงานที่เสร็จจริง เลือกสปรินต์สั้นๆ สำหรับงานชิ้นเดียว หรือจับมือกันยาวๆ ให้ AI ช่วยธุรกิจคุณ"]],
  [".price-card h3", ["คอนเทนต์สปรินต์", "สไลด์ &amp; วิจัย", "พาร์ตเนอร์ AI"]],
  [".price-card .muted", [
    "คอนเทนต์ AI ที่เรียก engagement ได้จริง",
    "สไลด์ระดับเวทีแข่งขัน หนุนด้วยวิจัยตลาดจริง",
    "เว็บไซต์ ระบบอัตโนมัติ และ AI Agent ฝังในทีมคุณ",
  ]],
  [".price em", ["/ โปรเจกต์", "/ โปรเจกต์", "/ เดือน"]],
  [".price-card h4", ["สิ่งที่ได้", "สิ่งที่ได้", "สิ่งที่ได้"]],
  [".price-card .roll span", ["เริ่มเลย", "เริ่มเลย", "จัดเลย", "จัดเลย", "นัดคุยก่อน", "นัดคุยก่อน"]],
  [".price-card li", [
    "คลิป TikTok / โปรโมตด้วย AI", "ตัดต่อรูป AI เปลี่ยนแบ็กกราวนด์", "โปสเตอร์และงานภาพ",
    "สไลด์ AI เร็วทันใจ", "โครงเรื่องและสตอรีเทลลิง", "วิจัยตลาด &amp; 4Ps", "สำรวจ consumer insight",
    "ออกแบบและสร้างเว็บไซต์", "AI Agent &amp; Skill เฉพาะงาน", "ระบบอัตโนมัติในเวิร์กโฟลว์", "สรุปการประชุมด้วย AI", "ปรับแก้ต่อเนื่อง",
  ]],

  [".stats-lede", ["ผมไม่เดา — ผมวัดผล งาน AI ที่มีอินไซต์จริงนำทาง พร้อมตัวเลขพิสูจน์ว่าเวิร์ก"]],
  [".stat-label", ["ยอดวิว TikTok", "ไลก์ที่ได้", "ผู้บริโภคที่สำรวจ", "แชมป์แฮ็กกาธอน"]],
  [".stat-foot", ["แคมเปญ PAAM Serum", "จากคลิป AI คลิปเดียว", "วิจัยอินไซต์ CHURO", "Krungsri UniVerse 2025"]],

  [".faq .giant", ["คำถาม."]],
  [".faq-side .muted", ["โปร่งใสทุกเรื่อง ถ้าไม่เจอคำตอบที่ตามหา ทักมาถามได้เลย เคลียร์กันตรงนี้"]],
  [".faq-item summary", [
    'ตกลงคุณทำอะไรบ้าง? <span class="faq-icon">+</span>',
    'ทำไมต้องจ้างนักศึกษา? <span class="faq-icon">+</span>',
    'ใช้เครื่องมืออะไรบ้าง? <span class="faq-icon">+</span>',
    'ส่งงานเร็วแค่ไหน? <span class="faq-icon">+</span>',
    'อยู่ที่ไหน แล้วติดต่อยังไง? <span class="faq-icon">+</span>',
  ]],
  [".faq-item p", [
    "ผมสร้างของด้วย AI: เว็บไซต์ คลิป TikTok &amp; โปรโมต หนัง AI สไลด์เร็วทันใจ ระบบอัตโนมัติ และ AI Agent — พร้อมงานวิจัยตลาดที่รองรับทุกชิ้นงาน",
    "เพราะผมส่งงานจริง — แชมป์แฮ็กกาธอน Krungsri UniVerse 2025, ยอดวิว 42K+ จากแคมเปญ AI เดียว และมีสินค้าที่ขายจริงอยู่บนออนไลน์",
    "Claude, ChatGPT, Gemini, Figma, Canva, CapCut และ AI Agent ที่สร้างเอง — เครื่องมือเปลี่ยนไปตามงาน แต่ความเร็วไม่เปลี่ยน",
    "สไลด์และคลิป AI คิดเป็นวัน ไม่ใช่สัปดาห์ ส่วนเว็บไซต์กับระบบอัตโนมัติขึ้นกับสโคป — บอกเดดไลน์มา แล้วผมจะตอบตามจริง",
    'ขอนแก่น / มหาสารคาม ประเทศไทย — อีเมล suprawee.m@kkumail.com โทร +66 62 081 6459 หรือ DM <a href="https://instagram.com/hidearkub">@HIDEARKUB</a> ทางอินสตาแกรม',
  ]],

  ["#blog .giant", ["ไฮ-<br>ไลต์."]],
  ["#blog .section-head .roll span", ["ร่วมงานกับผม", "ร่วมงานกับผม"]],
  [".blog-top .tag", ["แชมป์", "คอนเทนต์ AI", "วิจัย", "อินไซต์"]],
  [".blog-card h3", [
    "แชมป์แฮ็กกาธอน Krungsri UniVerse — ที่ 1",
    "PAAM Serum — 42.3K วิวบน TikTok",
    "MUVITA — Research to Market (R2M)",
    "CHURO — วิจัยผู้บริโภค 400+ คน",
  ]],

  [".cta .btn .roll span", ["ทักมาเลย", "ทักมาเลย"]],

  [".footer-col h4", ["เมนู", "ติดต่อ"]],
  [".footer-col:nth-child(2) a", ["หน้าแรก", "เกี่ยวกับ", "ผลงาน", "ไฮไลต์", "ติดต่อ"]],
  [".footer-col .roll span", ["กลับขึ้นบน", "กลับขึ้นบน"]],
  [".footer-bottom > span:first-child", ["สร้างด้วย ❤️ ที่ขอนแก่น"]],
  [".footer-bottom a", ["นโยบายความเป็นส่วนตัว", "ข้อกำหนดการใช้งาน"]],
  [".footer-bottom > span:last-child", ["© 2026 สงวนลิขสิทธิ์"]],
];

// Typewriter phrases — script.js reads these live via window.i18nPhrases[window.currentLang]
window.i18nPhrases = {
  en: [
    "Need a website?",
    "Need AI content that sells?",
    "Need an AI agent?",
    "Let's build it. — Dear",
  ],
  th: [
    "อยากได้เว็บไซต์?",
    "อยากได้คอนเทนต์ AI ที่ขายของได้?",
    "อยากได้ AI Agent?",
    "มาสร้างด้วยกันเลย — เดียร์",
  ],
};

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
