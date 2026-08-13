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
  [".nav-links a", ["Tech Stack", "ผลงาน <sup>07</sup>"]],
  [".nav > .btn .roll span", ["ติดต่อ", "ติดต่อ"]],

  [".hero-est", ["(สุปวีร์ มะธุเสน — ขอนแก่น, ประเทศไทย)"]],
  [".hero-desc", ["ผมชื่อเดียร์ — CREATIVE TECHNOLOGIST &amp; AI CREATOR <span>ไอเดียไม่ควรต้องรอ — ผมเปลี่ยนมันให้เป็นงานจริงที่จับต้องได้</span> เร็ว ด้วย AI และหัวคิดแบบคนทำธุรกิจ"]],
  [".hero-tags", ["คอนเทนต์ AI <i>/</i> ระบบอัตโนมัติ <i>/</i> เว็บ &amp; วิจัย"]],

  [".divider .pill", ["✦ (Tech Stack)", "✦ (ผลงาน)", "✦ (ประสบการณ์)", "✦ (บริการ)", "✦ (ตัวเลข)"]],

  [".kb3d-tip", ["ชุดเครื่องมือ AI ของผม — (ลองกดปุ่มดูสิ)"]],

  ["#projects .giant", ["ผลงาน."]],
  [".proj-lede", ["ไม่ต้องเชื่อคำพูดผม — ดูของจริงเลย"]],
  ["#projects .section-head .roll span", ["ดูผลงานทั้งหมด", "ดูผลงานทั้งหมด"]],

  ["#experience .giant", ["ประสบการณ์."]],
  [".xp-lede", ["คณะบริหารธุรกิจ ม.ขอนแก่น — สาขาผู้ประกอบการดิจิทัล"]],
  [".xp-group", ["ฝึกงาน", "การแข่งขัน"]],
  [".xp-role", [
    "นักศึกษาฝึกงาน แผนก Goods Receiving (GR) — เกือบ 3 เดือน เริ่มเมษายน 2569 ตรวจรับสินค้าเข้า-ออกทั้งระบบ Credit และ Consignment คีย์ข้อมูลเข้าระบบ แล้วกระจายขึ้นชั้นให้ถูกแผนก",
    "รางวัลชนะเลิศ ระดับภูมิภาค — แพลตฟอร์มห้องเรียนที่ AI อ่านการบ้านลายมือ แล้วครูเป็นคนตัดสิน ได้ไปต่อรอบระดับประเทศ",
    "รางวัลชนะเลิศ — เงินรางวัล 30,000 บาท แอปจ่ายเงินไร้เงินสดสำหรับนักท่องเที่ยว",
    "ผู้เข้าแข่งขัน — โจทย์คือคิดสินค้าใหม่จากไซรัปแอลลูโลส 0 แคลของมิตรผล ทีม <i>GOAT</i> พัฒนาออกมาเป็นไซรัปพรีเมียมหลายรส จัดเป็นเซ็ตของขวัญ แล้วนำไปพิตช์ที่ Mitr Phol Innovation &amp; Research Centre",
    "ผู้เข้าแข่งขัน รอบระดับมหาวิทยาลัย — เอา MUVITA เครื่องดื่มโปรตีนพืชจากงานวิจัย มข. มาวาง positioning และแผนการตลาดใหม่ ทีม <i>I'm the boss</i>",
  ]],

  [".services-title", ["บริการ."]],
  [".s-card .s-name", ["คอนเทนต์ &amp; วิดีโอ AI", "ดีไซน์ &amp; สไลด์", "ระบบอัตโนมัติ AI", "เว็บ &amp; โปรดักต์"]],

  [".stats-lede", ["ตัวเลขจากงานที่ปล่อยออกไปแล้วจริง"]],
  [".stat-label", ["ยอดวิวไอจี", "บรรทัดที่แปล", "ธุรกิจที่ก่อตั้ง", "แฮ็กกาธอนที่ชนะ"]],
  [".stat-foot", ["คลิปแจก Claude Skill ฟรี", "ModKrub — Ready or Not แจกฟรี", "Haru &amp; Torb Hai เปิดจริงทั้งคู่", "JUMP Thailand &amp; Krungsri"]],

  [".cta .btn .roll span", ["ทักมาเลย", "ทักมาเลย"]],

  [".contact-title", ["มาทำงาน<br>ด้วยกัน"]],
  [".contact-card-title", ["ฟอร์มติดต่อ"]],
  [".contact-sub", ['ติดต่อผมตรงๆ ได้ที่ <a href="mailto:suprawee.m@kkumail.com">suprawee.m@kkumail.com</a> หรือฝากข้อมูลไว้ตรงนี้ได้เลย']],
  [".f-label", ["ชื่อ-นามสกุล", "อีเมล", "ข้อความของคุณ"]],
  [".form-note", ["ข้อมูลของคุณผมไม่แชร์ให้ใครแน่นอน สัญญา!"]],
  ["#contactForm .btn .roll span", ["ส่งข้อความ →", "ส่งข้อความ →"]],
  [".contact-side-lede", ["ถนัด DM มากกว่า? ทักมาได้ทุกช่องทาง:"]],
  [".contact-top .roll span", ["กลับขึ้นบน ↑", "กลับขึ้นบน ↑"]],

  [".footer-copy", ["© 2026 สุปวีร์ มะธุเสน สงวนลิขสิทธิ์"]],
  [".footer-nav a", ["หน้าแรก", "Tech Stack", "ผลงาน", "อินสตาแกรม"]],
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
