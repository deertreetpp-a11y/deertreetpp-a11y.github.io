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
  [".nav-links a", ["ฝึกงาน", "ผลงาน <sup>11</sup>"]],
  [".nav > .btn .roll span", ["ติดต่อ", "ติดต่อ"]],

  [".hero-est", ["(สุปวีร์ มะธุเสน — ขอนแก่น, ประเทศไทย)"]],
  [".hero-desc", ["ผมชื่อเดียร์ — CREATIVE TECHNOLOGIST &amp; AI CREATOR <span>ไอเดียไม่ควรต้องรอ — ผมเปลี่ยนมันให้เป็นงานจริงที่จับต้องได้</span> เร็ว ด้วย AI และหัวคิดแบบคนทำธุรกิจ"]],
  [".hero-tags", ["คอนเทนต์ AI <i>/</i> ระบบอัตโนมัติ <i>/</i> เว็บ &amp; วิจัย"]],

  [".divider .pill", ["✦ (ฝึกงาน 2570)", "✦ (Tool Stack)", "✦ (ผลงาน)", "✦ (ประสบการณ์)", "✦ (บริการ)", "✦ (ตัวเลข)"]],

  ["#internship .giant", ["ฝึกงาน."]],
  ["#internship .count", ["(2570)"]],
  [".ix-who", ["สุปวีร์ มะธุเสน (เดียร์) <span>— นักศึกษาปี 3 สาขาผู้ประกอบการดิจิทัล คณะบริหารธุรกิจและการบัญชี มหาวิทยาลัยขอนแก่น · เกรดเฉลี่ย 3.52</span>"]],
  [".ix-pitch", ["ผมรู้เชิงโลจิกว่าต้องทำอะไร เพราะอะไร หน้าตาอย่างไร มีรสนิยมการดีไซน์ และสร้างออกมาได้จริง เพราะใช้ AI คล่อง เร็ว และมีคุณภาพ อยากรับผิดชอบโปรเจกต์ตั้งแต่ต้นจนจบ และทำงานใกล้ผู้บริหาร"]],
  [".ix-track", ["สร้างสินค้าและบริการ", "ออกแบบเว็บและเซอร์วิส", "ดูแลระบบ", "ที่ปรึกษาโมเดลธุรกิจ", "ใช้ AI สร้างของจริงได้เร็ว"]],
  [".ix-card b", ["ORTHIVA — แบรนด์ของผมเอง", "JUMP THAILAND — จาก 603 ทีม", "ทุนและเงินรางวัล"]],
  [".ix-card > span:not(.ix-num)", [
    "ยอดขาย กำไรสุทธิ ฿1,894 ผมหาสินค้า ยิงแอด และสร้างบอท AI ตอบแชทกับระบบหลังบ้านเอง",
    "CEO ทีม TLDR · ลดเวลาครูตรวจการบ้านลง 50% ได้รางวัล Popular Vote และถูกเชิญออกรายการ Super 100",
    "ทุนสตาร์ทอัป Singlty ฿120,000 · ชนะเลิศ Krungsri Hackathon ฿30,000 · ชนะเลิศ ISAN Aesthetic ฿25,000 · JUMP Popular Vote ฿20,000",
  ]],
  [".ix-card small", ["ณ 3 พ.ย. 2569", "AIS Academy × NIA · 2569", "2568–2569"]],
  [".ix-when", ["พร้อมฝึกงาน <em>1 เม.ย. – 21 มิ.ย. 2570</em> · กรุงเทพหรือขอนแก่น"]],
  ["#internship .ix-foot .roll span", ["ดาวน์โหลด CV (PDF)", "ดาวน์โหลด CV (PDF)", "ดาวน์โหลดพอร์ต (PDF)", "ดาวน์โหลดพอร์ต (PDF)"]],

  [".kb3d-tip", ["(ลองกดปุ่มดูสิ)"]],

  ["#projects .giant", ["ผลงาน."]],
  ["#projects .proj-lede", ["ไม่ต้องเชื่อคำพูดผม — ดูของจริงเลย"]],
  ["#projects .section-head .roll span", ["ดูผลงานทั้งหมด", "ดูผลงานทั้งหมด"]],

  ["#experience .giant", ["ประสบการณ์."]],
  [".xp-lede", ["คณะบริหารธุรกิจ ม.ขอนแก่น — สาขาผู้ประกอบการดิจิทัล"]],
  [".xp-group", ["ฝึกงาน", "การแข่งขัน"]],
  [".xp-role", [
    "นักศึกษาฝึกงาน แผนก Goods Receiving (GR) — เกือบ 3 เดือน เริ่มเมษายน 2569 ตรวจรับสินค้าเข้า-ออกทั้งระบบ Credit และ Consignment คีย์ข้อมูลเข้าระบบ แล้วกระจายขึ้นชั้นให้ถูกแผนก",
    "CEO ทีม TLDR — ชนะเลิศรอบภาคอีสาน (49 ทีม) ติด Top 10 จาก 603 ทีมทั่วประเทศ และได้รางวัล Popular Vote ฿20,000 รอบชิง · LearnLy ลดเวลาครูตรวจการบ้านลง 50%",
    "รางวัลชนะเลิศ เงินรางวัล 30,000 บาท — Krungsri Tourist Pay ให้นักท่องเที่ยวสแกนจ่าย QR PromptPay จากแอปที่ใช้อยู่แล้ว ผมคิดไอเดีย ค่าธรรมเนียมและระบบ และขึ้นพิตช์",
    "รางวัลชนะเลิศ ทุนการศึกษา 10,000 + เงินรางวัล 15,000 บาท — ออกแบบบริการดิจิทัลของคลินิกความงามให้มีความเป็นอีสาน ผมช่วยวางภาพรวม และทำส่วน AI ที่พูดคุยโต้ตอบ สแกนหน้า และวิเคราะห์เบื้องต้น",
  ]],

  [".services-title", ["บริการ."]],
  [".s-card .s-name", ["คอนเทนต์ &amp; วิดีโอ AI", "ดีไซน์ &amp; สไลด์", "ระบบอัตโนมัติ AI", "เว็บ &amp; โปรดักต์"]],

  [".stats-lede", ["ตัวเลขจากงานที่ปล่อยออกไปแล้วจริง"]],
  [".stat-label", ["ยอดวิวไอจี", "ยอดขายแบรนด์ตัวเอง", "ทุนและเงินรางวัล", "ชนะเลิศ"]],
  [".stat-foot", ["คลิปแจกสกิลรายงาน มข. ฟรี", "ORTHIVA — ณ 3 พ.ย. 2569", "Singlty · Krungsri · ISAN · JUMP", "Krungsri · ISAN Aesthetic · JUMP รอบภาค"]],

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
  [".footer-nav a", ["หน้าแรก", "ฝึกงาน", "ผลงาน", "อินสตาแกรม"]],
];

// Typewriter phrases — script.js reads these live via window.i18nPhrases[window.currentLang]
window.i18nPhrases = {
  en: [
    "Need an intern who ships?",
    "Need a product built end to end?",
    "Need AI that does real work?",
    "Let's build it. — Dear",
  ],
  th: [
    "หาเด็กฝึกงานที่ทำของจริงได้?",
    "อยากได้คนทำโปรเจกต์ตั้งแต่ต้นจนจบ?",
    "อยากได้ AI ที่ทำงานได้จริง?",
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
