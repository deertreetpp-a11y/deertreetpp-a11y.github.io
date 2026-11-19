/* ============================================================
   Case-study pages — data for project.html?p=<slug>
   Same set and order as the PDF portfolio (v8/v9).
   Every page reads top to bottom:
     tagline   = the outcome first ("got X, measured by Y, by doing Z")
     role      = what I did myself
     problem   = the brief + what I did (list)
     decisions = what I chose, and what I tried and dropped
     numbers   = [value, label] pairs (+ asOf when the figure can move)
     media     = evidence (img / video / row / slides), each with an optional cap
     learned   = in my own words
   Text fields are {en, th}; lists are {en:[], th:[]}.
   Source of truth for every claim: dear-story-2569-11-04.md + portfolio v8/v9.
   ============================================================ */
const PROJECT_PAGES = {
  jump: {
    title: "JUMP THAILAND — LearnLy",
    service: "Hackathon · CEO", client: "AIS Academy × NIA", year: "2026",
    bg: "linear-gradient(135deg,#0A3B2C,#1B8A63)", glyph: "JT",
    tagline: {
      en: "As CEO of team TLDR, I narrowed a wide-open brief down with field evidence and built LearnLy: AI checks homework, the teacher confirms every score. Timed classroom tests cut grading time by more than 50%. Northeast regional winner and Top 10 of 603 teams nationwide.",
      th: "ในฐานะ CEO ทีม TLDR ผมพาทีมคัดจากโจทย์กว้างด้วยข้อมูลจากการลงพื้นที่ แล้วสร้าง LearnLy ให้ AI ช่วยตรวจการบ้าน ครูเป็นคนยืนยันคะแนน ทดลองจับเวลาในห้องเรียน ครูตรวจเร็วขึ้นกว่า 50% · ชนะเลิศรอบภาคอีสาน และ Top 10 จาก 603 ทีมทั่วประเทศ",
    },
    role: {
      en: "CEO of team TLDR. I led the team, designed the web app, built its AI system and pitched every round.",
      th: "CEO ทีม TLDR · นำทีม ออกแบบหน้าเว็บ สร้างระบบ AI และขึ้นพิตช์ทุกรอบ",
    },
    problem: {
      en: "The brief was wide open: “use AI to improve Thai education.” I narrowed several ideas down with field evidence to one clear problem: one teacher looks after 3 classes, 120–150 students, and spends 1–2 hours a day checking homework.",
      th: "โจทย์กว้างมาก “ใช้ AI ช่วยการศึกษาไทย” ผมพาทีมคัดจากหลายไอเดียด้วยข้อมูลจากการลงพื้นที่ จนเหลือปัญหาที่ชัดที่สุด ครู 1 คนดูแล 3 ห้อง 120–150 คน และตรวจการบ้านวันละ 1–2 ชั่วโมง",
    },
    did: {
      en: [
        "Went into schools and talked to teachers and the Educational Service Area Office before writing any code",
        "Built the web app and its AI: students photograph their work, the AI reads the handwriting and shows the teacher where each student is stuck",
        "Tested it in a real classroom and timed the checking",
      ],
      th: [
        "ลงพื้นที่คุยกับครูและสำนักงานเขตพื้นที่การศึกษาก่อนเขียนโค้ด",
        "ทำหน้าเว็บและระบบ AI นักเรียนถ่ายรูปงานส่ง AI อ่านลายมือ แล้วเสนอให้ครูเห็นว่าเด็กแต่ละคนติดตรงไหน",
        "ทดลองในห้องเรียนจริง และจับเวลาตรวจ",
      ],
    },
    decisions: {
      en: [
        "We started with several ideas and picked this one because the evidence and data from the field said it was the most real problem",
        "The AI only checks and suggests — it scores nobody. Deciding stays with the teacher",
      ],
      th: [
        "ไอเดียตอนแรกมีหลายตัว เลือกตัวนี้เพราะหลักฐานและข้อมูลจากการลงพื้นที่ชี้ว่าเป็นปัญหาจริงที่สุด",
        "ให้ AI แค่ตรวจและเสนอแนะ ไม่ให้คะแนนใคร การตัดสินยังเป็นของครู",
      ],
    },
    numbers: [
      { v: "50%+", en: "less time checking homework (timed in class)", th: "เวลาตรวจการบ้านที่ลดลง (จับเวลาในห้องเรียน)" },
      { v: { en: "1st", th: "ที่ 1" }, en: "place, Northeast Regional Round (49 teams)", th: "ชนะเลิศรอบภาคอีสาน 49 ทีม" },
      { v: "Top 10", en: "nationwide, of 603 teams", th: "ทั่วประเทศ จาก 603 ทีม" },
      { v: "฿20,000", en: "Popular Vote, national final", th: "รางวัล Popular Vote รอบชิงระดับประเทศ" },
    ],
    note: {
      en: "Invited onto the TV programme Super 100 afterwards — the episode has aired.",
      th: "หลังจบรายการแข่ง ถูกเชิญออกรายการ Super 100 และออกอากาศแล้ว",
    },
    media: [
      { type: "img", src: "assets/projects/jump/popular-vote.jpg", cap: { en: "National final — Popular Vote ฿20,000", th: "รอบชิงระดับประเทศ — รางวัล Popular Vote ฿20,000" } },
      { type: "row", items: [
        { type: "img", src: "assets/projects/jump/win.jpg", cap: { en: "Regional round — first place", th: "รอบภาค — ชนะเลิศ" } },
        { type: "img", src: "assets/projects/jump/team.jpg", cap: { en: "Team TLDR", th: "ทีม TLDR" } },
      ]},
      { type: "row", items: [
        { type: "img", src: "assets/projects/jump/super100-stage.jpg", cap: { en: "On the Super 100 set", th: "ออกรายการ Super 100" } },
        { type: "img", src: "assets/projects/jump/super100-team.jpg", cap: { en: "Super 100", th: "Super 100" } },
      ]},
      { type: "img", src: "assets/projects/jump/cert.jpg", cap: { en: "Bootcamp Winner certificate", th: "ใบประกาศ Bootcamp Winner" } },
    ],
    learned: {
      en: "Understanding the problem, working with many different people, and designing the user journey.",
      th: "เข้าใจปัญหา สื่อสารกับคนหลายฝ่าย และออกแบบเส้นทางการใช้งานของผู้ใช้",
    },
  },

  orthiva: {
    title: "ORTHIVA",
    service: "Own brand", client: "Bunion corrector · sold on Facebook", year: "2026",
    bg: "linear-gradient(135deg,#0b2a6b,#1f6bff)", glyph: "OR",
    tagline: {
      en: "My own brand, with a sales system that runs itself. I dropped a first product with thin margins, found a bunion corrector for a problem affecting over 30% of women, tested demand with ads before importing, and built the chatbot and back office with AI.",
      th: "แบรนด์ของผมเองที่ระบบขายรันเองทุกวัน สินค้าตัวแรกมาร์จิ้นต่ำ ผมเลยเลิกแล้วหาตัวใหม่ จนเจออุปกรณ์พยุงนิ้วโป้งเท้าเอียง ปัญหาที่พบในผู้หญิงกว่า 30% ทดสอบขายด้วยแอดก่อนสั่งของเข้า และใช้ AI สร้างบอทกับระบบหลังบ้านทั้งหมด",
    },
    role: {
      en: "Owner. I chose the product, tested the market and built the whole sales system with AI, from sourcing to shipping labels.",
      th: "เจ้าของแบรนด์ · เลือกสินค้า ทดสอบตลาด และใช้ AI สร้างระบบขายทั้งหมด ตั้งแต่หาโรงงานจนปริ้นใบปะหน้า",
    },
    problem: {
      en: "I wanted to build an e-commerce business, so I looked for a product with real demand to import from China. Over 30% of women have a bunion: not a mass market, but a clear one.",
      th: "ผมอยากสร้างธุรกิจอีคอมเมิร์ซ จึงหาสินค้าที่มีความต้องการชัดเพื่อนำเข้าจากจีน แล้วพบว่าผู้หญิงกว่า 30% มีนิ้วโป้งเท้าเอียง ไม่ใช่ตลาดแมส แต่เป็นตลาดที่ชัด",
    },
    did: {
      en: [
        "Researched the product, negotiated with dozens of factories and arranged shipping",
        "Made the product photos, Facebook page and video ads",
        "Built an AI chatbot that answers customers and closes sales, and sends me a LINE alert when it can't answer",
        "Built a back office for orders, stock, tax and accounts, synced to the cloud and Excel and usable on a phone",
        "Packed orders and printed shipping labels",
      ],
      th: [
        "หาสินค้า คุยโรงงานหลายสิบเจ้า ต่อรองราคา และจัดการขนส่ง",
        "ทำรูปสินค้า เพจ Facebook และคลิปแอด",
        "สร้างบอท AI ที่ตอบแชทและปิดการขาย ถ้าตอบไม่ได้จะส่ง LINE เข้ามือถือผม",
        "สร้างหลังบ้านดูแลออเดอร์ สต็อก ภาษี และบัญชี ซิงก์คลาวด์และ Excel เปิดดูบนมือถือได้",
        "แพ็กของและปริ้นใบปะหน้า",
      ],
    },
    decisions: {
      en: [
        "My first product sold, but the margins were too thin, so I dropped it and looked for a better one",
        "I test-sold this one with ads before importing. It was still profitable after costs, so I ordered stock",
      ],
      th: [
        "สินค้าตัวแรกขายได้แต่มาร์จิ้นต่ำ ผมเลยเลิกแล้วหาตัวที่ดีกว่า",
        "ตัวนี้ทดสอบขายด้วยแอดก่อนนำเข้า หักต้นทุนแล้วยังกำไร จึงสั่งของเข้า",
      ],
    },
    numbers: [
      { v: "24/7", en: "the bot answers and closes sales", th: "บอทตอบและปิดการขายเอง" },
      { v: "14", en: "pages in the back office", th: "หน้าในระบบหลังบ้าน" },
      { v: "6.93%", en: "of people who saw the ad clicked", th: "ของคนที่เห็นแอดกดเข้ามาดู" },
    ],
    asOf: {
      en: "Click-through rate from Meta Ads Manager, Oct–Nov 2026.",
      th: "อัตราการคลิกจาก Meta Ads Manager ช่วง ต.ค.–พ.ย. 2569",
    },
    media: [
      { type: "row", items: [
        { type: "img", src: "assets/projects/orthiva/ad.jpg", cap: { en: "Ad image", th: "ภาพโฆษณา" } },
        { type: "img", src: "assets/projects/orthiva/pack.jpg", cap: { en: "Packed for a customer", th: "แพ็กส่งลูกค้า" } },
      ]},
      { type: "row", cols: 4, items: [
        { type: "img", src: "assets/projects/orthiva/ad-f1.jpg" },
        { type: "img", src: "assets/projects/orthiva/ad-f2.jpg" },
        { type: "img", src: "assets/projects/orthiva/ad-f3.jpg" },
        { type: "img", src: "assets/projects/orthiva/ad-f4.jpg" },
      ], cap: { en: "Frames from the video ad", th: "เฟรมจากคลิปแอด" } },
      { type: "img", src: "assets/projects/orthiva/bot-reply.png", cap: { en: "The bot's own reply in Messenger: it confirms cash on delivery and sums up the order", th: "ข้อความที่บอทตอบลูกค้าใน Messenger · ยืนยันเก็บเงินปลายทางและสรุปออเดอร์ให้เอง" } },
      { type: "img", src: "assets/projects/orthiva/bo-kb.jpg", cap: { en: "The knowledge base the bot answers from", th: "คลังความรู้ที่บอทใช้ตอบลูกค้า" } },
    ],
    learned: {
      en: "Understanding the problem, and building a system that runs on its own.",
      th: "เข้าใจปัญหา และสร้างระบบให้มันรันได้ด้วยตัวเอง",
    },
  },

  singlty: {
    title: "Singlty",
    service: "Startup · Co-founder", client: "Team I'm the boss", year: "2026",
    bg: "linear-gradient(135deg,#1b2b5a,#4f7cff)", glyph: "S",
    tagline: {
      en: "Won a ฿120,000 faculty startup grant, 1 of 12 teams through the interview, with Singlty: it lets the AI a customer already uses edit short videos like a pro. I built nearly all of the product and set the costs, pricing and business plan. In development before launch.",
      th: "ได้ทุนสตาร์ทอัปจากคณะ ฿120,000 เป็น 1 ใน 12 ทีมที่ผ่านสัมภาษณ์ ด้วย Singlty ที่ทำให้ AI ที่ลูกค้าใช้อยู่แล้วตัดคลิปสั้นได้ระดับมืออาชีพ ผมพัฒนาตัวผลิตภัณฑ์เกือบทั้งหมด และวางต้นทุน ราคา และแผนธุรกิจ · กำลังพัฒนาก่อนเปิดตัว",
    },
    role: {
      en: "Co-founder. I built nearly all of the product, from concept and tuning to test edits.",
      th: "Co-founder · พัฒนาตัวผลิตภัณฑ์เกือบทั้งหมด ตั้งแต่คิด ปรับ จนทดสอบตัดคลิป",
    },
    problem: {
      en: "Creators spend an hour or more editing every short clip, even though AI can now do much of the work.",
      th: "คนทำคอนเทนต์ใช้เวลาตัดคลิปละเป็นชั่วโมง ทั้งที่ทุกวันนี้ AI ทำงานแทนได้มาก",
    },
    did: {
      en: [
        "An AI editor with ready-made templates, so the customer's AI can cut like a pro",
        "Costs, pricing and the business plan",
        "The singlty.com website, then the pitch that won the grant",
      ],
      th: [
        "ทำ AI ตัดต่อที่มีเทมเพลตพร้อม ให้ AI ของลูกค้าตัดได้แบบมืออาชีพ",
        "คิดต้นทุน ราคา และแผนธุรกิจ",
        "ทำเว็บ singlty.com แล้วพิตช์จนได้ทุน",
      ],
    },
    decisions: {
      en: [
        "On cost: instead of paying for the AI ourselves, customers connect the AI they already use through MCP",
      ],
      th: [
        "เรื่องต้นทุน แทนที่เราจะแบกค่า AI เอง ให้ลูกค้าต่อ AI ที่ใช้อยู่แล้วเข้ามาผ่าน MCP",
      ],
    },
    numbers: [
      { v: "฿120,000", en: "startup grant from the faculty", th: "ทุนสตาร์ทอัปจากคณะ" },
      { v: "1 of 12", en: "teams through the interview", th: "ทีมที่ผ่านสัมภาษณ์" },
      { v: "3", en: "channels: app · skill · MCP", th: "ช่องทาง แอป · สกิล · MCP" },
    ],
    asOf: {
      en: "Not launched yet.",
      th: "ยังไม่ลอนช์",
    },
    media: [
      { type: "img", src: "assets/projects/singlty/editor.jpg", cap: { en: "The editor", th: "หน้าตัดต่อ" } },
      { type: "row", items: [
        { type: "img", src: "assets/projects/singlty/banner.jpg", cap: { en: "Brand", th: "แบรนด์" } },
        { type: "img", src: "assets/projects/singlty/site-section.jpg", cap: { en: "singlty.com", th: "เว็บ singlty.com" } },
      ]},
    ],
    learned: {
      en: "Customers only care about the result, not how hard we tried.",
      th: "ลูกค้าสนแค่ผลลัพธ์ ไม่สนว่าเราพยายามมากแค่ไหน",
    },
  },

  btc: {
    title: "BTC SONE LIGHT",
    service: "Partner", client: "A friend's siren brand", year: "2026",
    bg: "linear-gradient(135deg,#0a0a0a,#00a9c7)", glyph: "BTC",
    tagline: {
      en: "A friend sold siren kits only on TikTok. I advised first, then joined as a partner instead of just building a site: an 8-language store and back office, ready to launch, plus marketing and finance. Year-one sales target: ฿1 million.",
      th: "เพื่อนขายกล่องเสียงไซเรนผ่าน TikTok ช่องทางเดียว ผมเริ่มจากให้คำปรึกษา แล้วเสนอตัวเป็นพาร์ตเนอร์แทนการรับจ้างทำเว็บ สร้างเว็บขาย 8 ภาษาพร้อมหลังบ้าน และดูแลการตลาดกับการเงิน · เว็บพร้อมเปิดขาย · เป้ายอดขายปีแรก ฿1 ล้าน",
    },
    role: {
      en: "Partner. I run the store, the back office, marketing and finance.",
      th: "พาร์ตเนอร์ · ดูแลเว็บขาย หลังบ้าน การตลาด และการเงิน",
    },
    problem: {
      en: "My friend has experience selling sirens, but only on TikTok — no website, no way to sell abroad and no system to keep orders. He wanted to sell more.",
      th: "เพื่อนมีประสบการณ์ขายเสียงไซเรน แต่ขายผ่าน TikTok อย่างเดียว ไม่มีเว็บ ขายต่างประเทศไม่ได้ และไม่มีระบบเก็บออเดอร์ อยากขายให้มากขึ้น",
    },
    did: {
      en: [
        "Studied customers, competitors and the Thai + ASEAN markets",
        "Storefront, cart, parcel tracking and international shipping that prices itself",
        "Back office: orders, sales reports and separate user permissions",
      ],
      th: [
        "ศึกษาลูกค้า คู่แข่ง และตลาดไทย + อาเซียน",
        "ทำหน้าร้าน ตะกร้า ติดตามพัสดุ ค่าส่งต่างประเทศคิดเอง",
        "ทำหลังบ้าน ออเดอร์ รายงานยอด แยกสิทธิ์ผู้ใช้",
      ],
    },
    decisions: {
      en: [
        "I started by consulting for my friend, then proposed becoming a partner instead of being paid to build a website",
        "Set a year-one sales target of ฿1 million",
      ],
      th: [
        "เริ่มจากคอนซัลต์ให้เพื่อน แล้วเสนอตัวเป็นพาร์ตเนอร์แทนการรับจ้างทำเว็บ",
        "ตั้งเป้ายอดขายปีแรก ฿1 ล้าน",
      ],
    },
    numbers: [
      { v: "8", en: "languages — Thai + ASEAN", th: "ภาษา ไทย + อาเซียน" },
      { v: "12", en: "models on the site", th: "รุ่นสินค้าบนเว็บ" },
      { v: "95/100", en: "speed score on mobile", th: "คะแนนความเร็วบนมือถือ" },
      { v: "฿1M", en: "year-one sales target (a goal, not a result)", th: "เป้ายอดขายปีแรก (เป็นเป้า ยังไม่ใช่ผล)" },
    ],
    media: [
      { type: "img", src: "assets/projects/btc/home.jpg", cap: { en: "The site on desktop", th: "หน้าเว็บบนคอม" } },
      { type: "row", cols: 4, items: [
        { type: "img", src: "assets/projects/btc/home-mobile.jpg" },
        { type: "img", src: "assets/projects/btc/set-front.jpg" },
        { type: "img", src: "assets/projects/btc/set-angle.jpg" },
        { type: "img", src: "assets/projects/btc/kit-box.jpg" },
      ], cap: { en: "Mobile view and the product photos on the site", th: "หน้าเว็บบนมือถือ และรูปสินค้าบนเว็บ" } },
    ],
    visit: {
      href: "https://btcsonelight.com",
      label: { en: "Visit btcsonelight.com ↗", th: "ดูเว็บจริง btcsonelight.com ↗" },
    },
    learned: {
      en: "Negotiating, asking questions that get to the insight, and building systems together with the team.",
      th: "การเจรจาต่อรอง การถามคำถามเพื่อเข้าใจอินไซต์ และการสร้างระบบไปพร้อมกับทีม",
    },
  },

  krungsri: {
    title: "Krungsri UniVerse Hackathon",
    service: "Hackathon", client: "Krungsri × Khon Kaen University", year: "2025",
    bg: "linear-gradient(135deg,#241b29,#5c0f80)", glyph: "KU",
    tagline: {
      en: "First place and ฿30,000. Tourists can only pay by card, but Thai markets run on PromptPay, so we created Krungsri Tourist Pay: top up from apps tourists already use, then scan any PromptPay QR. I designed the fee model and payment flow and pitched.",
      th: "ชนะเลิศ ฿30,000 นักท่องเที่ยวต่างชาติจ่ายได้แค่บัตร แต่ตลาดนัดไทยรับแต่ PromptPay ทีมเราจึงคิด Krungsri Tourist Pay ให้โอนจากแอปที่ใช้อยู่แล้ว แล้วสแกน PromptPay ได้ทุกร้าน ผมออกแบบโมเดลค่าธรรมเนียมและขั้นตอนจ่ายเงิน และขึ้นพิตช์",
    },
    role: {
      en: "I designed the fee model and the payment flow and pitched, after interviewing tourists to confirm the problem. A Computer Engineering teammate designed the screens.",
      th: "ผมออกแบบโมเดลค่าธรรมเนียมและขั้นตอนการจ่ายเงิน และขึ้นพิตช์ หลังคุยกับนักท่องเที่ยวเพื่อยืนยันปัญหา · หน้าจอเป็นงานของเพื่อนในทีมสาย Computer",
    },
    problem: {
      en: "There was no fixed brief, just “build seamless payments.” Foreign tourists can only pay by card, but Thai street markets run on PromptPay.",
      th: "ไม่มีโจทย์ตายตัว ให้พัฒนาการชำระเงินไร้รอยต่อ · นักท่องเที่ยวต่างชาติจ่ายได้แค่บัตร แต่ตลาดนัดไทยรับแต่ PromptPay",
    },
    did: {
      en: [
        "Designed the flow: tourists top up from an app they already have, then pay any PromptPay QR",
        "Worked out the fee model and the system behind it",
        "Confirmed the problem with tourists, then pitched",
      ],
      th: [
        "วางขั้นตอนการใช้งาน นักท่องเที่ยวโอนจากแอปที่มีอยู่แล้ว แล้วสแกนจ่าย PromptPay ได้ทุกร้าน",
        "ออกแบบโมเดลค่าธรรมเนียมและระบบเบื้องหลัง",
        "คุยกับนักท่องเที่ยวเพื่อยืนยันปัญหา แล้วขึ้นพิตช์",
      ],
    },
    decisions: {
      en: [
        "Let tourists pay from the apps they already use instead of opening a Thai bank account — and shops keep taking PromptPay exactly as they do today",
      ],
      th: [
        "เลือกให้นักท่องเที่ยวจ่ายผ่านแอปที่ใช้อยู่แล้ว แทนการต้องไปเปิดบัญชีธนาคารไทย ส่วนร้านค้าก็รับ PromptPay ได้เหมือนเดิมทุกอย่าง",
      ],
    },
    numbers: [
      { v: { en: "1st", th: "ที่ 1" }, en: "place", th: "ชนะเลิศ" },
      { v: "฿30,000", en: "first prize", th: "เงินรางวัล" },
    ],
    media: [
      { type: "row", items: [
        { type: "img", src: "assets/projects/krungsri/team.jpg", pos: "50% 10%" },
        { type: "video", src: "assets/projects/krungsri/pitch.mp4" },
      ]},
      { type: "img", src: "assets/projects/krungsri/prize.jpg", cap: { en: "First prize, ฿30,000", th: "รางวัลชนะเลิศ ฿30,000" } },
      { type: "slides", base: "assets/projects/krungsri/slides/", count: 11 },
    ],
    learned: {
      en: "Working as a team, and how fees on cross-border payments work.",
      th: "การทำงานเป็นทีม และเรื่องค่าธรรมเนียมการจ่ายเงินข้ามประเทศ",
    },
  },

  isan: {
    title: "Reimagine ISAN Aesthetic",
    service: "Digital service design", client: "KKBS × UD Clinic", year: "2026",
    bg: "linear-gradient(135deg,#3a1d0e,#c2571b)", glyph: "ISAN",
    tagline: {
      en: "First place, a ฿10,000 scholarship plus ฿15,000 prize, for a beauty clinic's digital service with an Isan identity, from the first visit to aftercare. I helped shape the service and built the AI that chats, scans faces and gives a first skin analysis.",
      th: "ชนะเลิศ ทุนการศึกษา ฿10,000 และเงินรางวัล ฿15,000 จากการออกแบบบริการดิจิทัลของคลินิกความงามที่ใส่ความเป็นอีสาน ตั้งแต่เข้าร้านจนติดตามผล ผมร่วมวางภาพรวม และสร้าง AI ที่คุยกับลูกค้า สแกนหน้า และวิเคราะห์ผิวเบื้องต้น",
    },
    role: {
      en: "I helped shape the overall concept, and built the AI part: an assistant that can hold a conversation, scan a face and give a first analysis.",
      th: "ช่วยวางภาพรวม และทำส่วน AI ที่พูดคุยโต้ตอบได้ สแกนหน้า และวิเคราะห์เบื้องต้น",
    },
    problem: {
      en: "Design a digital service that lifts UD Clinic's online service, and bring an Isan identity into the clinic.",
      th: "ออกแบบดิจิทัลเซอร์วิสยกระดับบริการออนไลน์ของ UD Clinic และใส่ความเป็นอีสานเข้าไปในคลินิก",
    },
    did: {
      en: [
        "The team designed a LINE Beacon, the campaign name and the full journey from entering the clinic to follow-up",
        "My part: the conversational AI, face scan and first analysis",
      ],
      th: [
        "ทีมทำ LINE Beacon ระบบต่าง ๆ ชื่อแคมเปญ และ journey ตั้งแต่เข้าร้านจนจบพร้อม follow-up",
        "ส่วนของผม AI ที่พูดคุยโต้ตอบได้ สแกนหน้า และวิเคราะห์เบื้องต้น",
      ],
    },
    numbers: [
      { v: { en: "1st", th: "ที่ 1" }, en: "place", th: "ชนะเลิศ" },
      { v: "฿25,000", en: "scholarship ฿10,000 + prize ฿15,000", th: "ทุนการศึกษา ฿10,000 + เงินรางวัล ฿15,000" },
    ],
    media: [
      { type: "row", items: [
        { type: "img", src: "assets/projects/isan/prize.jpg", cap: { en: "First place", th: "รางวัลชนะเลิศ" } },
        { type: "img", src: "assets/projects/isan/team.jpg", cap: { en: "The team", th: "ทีม" } },
      ]},
    ],
  },

  sherlock: {
    title: "Sherlock",
    service: "AI app · Mac", client: "Own tool", year: "2026",
    bg: "linear-gradient(135deg,#0b2a6b,#2f7bff)", glyph: "SH",
    tagline: {
      en: "Meeting-note apps charge monthly and cap usage, so I built my own Mac app with AI and designed every screen. It pulls out decisions and action items and answers questions about the meeting. Top innovation score in my class section.",
      th: "แอปสรุปประชุมที่มีขายต้องจ่ายรายเดือนและใช้ได้จำกัด ผมเลยใช้ AI สร้างแอปบน Mac ขึ้นมาใช้เอง และออกแบบหน้าตาเองทั้งหมด สรุปสิ่งที่ตกลง งานที่ต้องทำ และถามตอบจากประชุมได้ · คะแนนความแปลกใหม่สูงสุดของเซกในรายวิชา",
    },
    role: {
      en: "I built it with AI and designed every screen, including the illustrations.",
      th: "สร้างด้วย AI และออกแบบหน้าตาเองทั้งหมด รวมถึงลายเส้น",
    },
    problem: {
      en: "Meeting-notes apps charge every month and run into limits.",
      th: "แอปจดสรุปประชุมเสียเงินรายเดือนและติดลิมิต",
    },
    did: {
      en: [
        "Records Google Meet, face-to-face one-on-ones and full meeting rooms",
        "Ask questions about the meeting; notes come out easy to read, with to-dos and what was agreed",
        "Add each meeting to a project",
        "Drop in your slides — after a pitch you can see where the client got stuck",
      ],
      th: [
        "อัดได้ทั้ง Meet ประชุมต่อหน้า 2 ต่อ 2 และห้องประชุม",
        "ถาม-ตอบจากในประชุม จัดรูปแบบให้อ่านง่าย มีสิ่งที่ต้องทำและสิ่งที่ตกลง",
        "Add to project เก็บประชุมเข้าโปรเจกต์",
        "โยนสไลด์เข้าไปได้ เวลาพิตช์จะรู้ว่าลูกค้าติดตรงไหน",
      ],
    },
    decisions: {
      en: [
        "Instead of paying for a monthly app, build my own around how I actually work every day — meetings, classes and pitches — and keep it free through Google AI Studio",
      ],
      th: [
        "แทนที่จะจ่ายค่าแอปรายเดือน ผมเลือกสร้างเองให้ตรงกับที่ใช้จริงทุกวัน ทั้งประชุม เรียน และพิตช์ แล้วทำให้ใช้ฟรีผ่าน Google AI Studio",
      ],
    },
    numbers: [
      { v: { en: "Top", th: "สูงสุด" }, en: "innovation score in my class section", th: "คะแนนความแปลกใหม่ในเซก" },
      { v: "26/30", en: "lecture slides matched to the right moment", th: "หน้าสไลด์ที่จับคู่กับคำพูดได้ถูก" },
      { v: "฿0", en: "monthly cost", th: "ค่าใช้งานรายเดือน" },
    ],
    media: [
      { type: "img", src: "assets/projects/sherlock/summary.jpg", cap: { en: "Summary and to-dos", th: "สรุปและสิ่งที่ต้องทำ" } },
      { type: "row", items: [
        { type: "img", src: "assets/projects/sherlock/slides.jpg", cap: { en: "Slides matched to what was said", th: "จับคู่สไลด์กับคำพูด" } },
        { type: "img", src: "assets/projects/sherlock/chat.jpg", cap: { en: "Ask about the meeting", th: "ถาม-ตอบจากในประชุม" } },
      ]},
      { type: "img", src: "assets/projects/sherlock/home.jpg", cap: { en: "Home and projects", th: "หน้าแรกและโปรเจกต์" } },
    ],
    learned: {
      en: "Taste in design.",
      th: "รสนิยมการออกแบบ",
    },
  },

  kku: {
    title: "KKU Report Skill",
    service: "AI tool · free", client: "Instagram (@hidearkub)", year: "2026",
    bg: "linear-gradient(135deg,#1b1a2a,#5b21b6)", glyph: "KKU",
    tagline: {
      en: "A free Claude Skill that writes a complete KKU-format report, saving students hours of formatting. The launch clip reached 204,780 views and 8,650 shares.",
      th: "สกิล Claude แจกฟรี ให้ AI ทำรายงานรูปแบบ มข. ได้ครบเล่ม ช่วยนักศึกษาประหยัดเวลาจัดรูปเล่ม คลิปแจกสกิลมีคนดู 204,780 ครั้ง และถูกแชร์ 8,650 ครั้ง",
    },
    role: {
      en: "I built the Skill and made the clip that gave it away.",
      th: "ทำเองทั้งสกิลและคลิปแจก",
    },
    problem: {
      en: "Formatting a KKU report — layout, page numbers, the house style — eats a lot of time.",
      th: "การจัดรูปเล่ม เลขหน้า และรูปแบบรายงาน มข. เสียเวลามาก",
    },
    did: {
      en: [
        "A Skill that has Claude produce the full report: cover, contents, Thai text that breaks lines correctly, bibliography",
        "A Reels clip, plus an automation that DMs the download link to anyone who comments the keyword",
      ],
      th: [
        "สกิลให้ Claude สร้างรายงานครบเล่ม ปก สารบัญ ภาษาไทยตัดบรรทัดถูก บรรณานุกรม",
        "คลิป Reels และระบบส่งลิงก์ดาวน์โหลดทางแชทอัตโนมัติให้คนที่คอมเมนต์",
      ],
    },
    decisions: {
      en: [
        "Give it away free instead of selling it, so as many students as possible could use it — and the giveaway clip became the way people found me",
      ],
      th: [
        "เลือกแจกฟรีแทนการขาย ให้นักศึกษาใช้ได้มากที่สุด และคลิปแจกกลายเป็นช่องทางที่ทำให้คนรู้จักผม",
      ],
    },
    numbers: [
      { v: "204,780", en: "views", th: "ยอดดู" },
      { v: "11,050", en: "likes", th: "ไลก์" },
      { v: "8,650", en: "shares", th: "แชร์" },
      { v: "99.1%", en: "of viewers weren't following me", th: "ของคนดูไม่ได้ติดตามผม" },
    ],
    media: [
      { type: "video", src: "assets/projects/kku/clip.mp4", sound: true },
    ],
    download: {
      href: "assets/projects/kku/kku-report-full.skill",
      label: { en: "Download the free Skill", th: "ดาวน์โหลด Skill ฟรี" },
    },
    visit: {
      href: "https://www.instagram.com/reel/DaSLccDArN4/",
      label: { en: "Watch it on Instagram ↗", th: "ดูคลิปในไอจี ↗" },
    },
    learned: {
      en: "I made it for fun, but the response was huge — because it solved a real problem.",
      th: "ทำเล่น ๆ แต่ตอบรับดีมาก เพราะแก้ปัญหาจริง",
    },
  },

  central: {
    title: "Central — Goods Receiving",
    service: "Internship", client: "Central Department Store, Khon Kaen", year: "2026",
    bg: "linear-gradient(135deg,#2a0f16,#ff0037)", glyph: "GR",
    tagline: {
      en: "Nearly three months in Goods Receiving: checked deliveries against documents on both the Credit and Consignment systems, entered stock and routed goods to the right floor. Learned the discipline of work inside a large organization.",
      th: "ฝึกงานแผนกรับสินค้า (GR) เกือบ 3 เดือน ตรวจรับสินค้าเทียบเอกสารทั้งระบบ Credit และ Consignment บันทึกเข้าระบบ และส่งของขึ้นชั้นให้ถูกแผนก ได้เรียนรู้ความเป็นระบบและความละเอียดของงานในองค์กรใหญ่",
    },
    role: {
      en: "Intern, Goods Receiving (GR), from April 2026, 08:00–17:30.",
      th: "นักศึกษาฝึกงานแผนก Goods Receiving (GR) เริ่มเมษายน 2569 เข้า 08.00 ออก 17.30",
    },
    problem: {
      en: "Everything on the shelves passes through one door first: nothing goes upstairs until it has been counted, checked against the paperwork and keyed into the system.",
      th: "ของทุกชิ้นบนชั้นห้างผ่านประตูเดียวกันก่อนเสมอ ไม่มีอะไรขึ้นไปข้างบนได้จนกว่าจะถูกนับ ตรวจกับเอกสาร และคีย์เข้าระบบ",
    },
    did: {
      en: [
        "Received goods from suppliers, counted them and checked their condition against the delivery note",
        "Keyed stock into the system and filed the delivery and GR documents",
        "Sent goods up to the right floor by department number, and followed up with suppliers when something arrived short or damaged",
      ],
      th: [
        "รับของจากซัพพลายเออร์ ตรวจนับจำนวนและสภาพให้ตรงกับใบส่งของ",
        "คีย์ข้อมูลเข้าระบบ จัดเก็บใบส่งของและใบ GR",
        "กระจายขึ้นชั้นให้ถูกแผนก และประสานซัพพลายเออร์เมื่อของมาไม่ครบหรือเสียหาย",
      ],
    },
    decisions: {
      en: [
        "I liked how systematic the work was, and it showed me where I want to grow next: work where I solve problems for people and try new things",
      ],
      th: [
        "ชอบความเป็นระบบของงานนี้ และทำให้เห็นว่าอยากเติบโตต่อไปในงานที่ได้แก้ปัญหาให้ผู้คนและได้ลองสิ่งใหม่",
      ],
    },
    numbers: [
      { v: { en: "~3", th: "~3" }, en: "months, full-time", th: "เดือน เต็มเวลา" },
      { v: "2", en: "stock systems: Credit & Consignment", th: "ระบบสต็อก Credit และ Consignment" },
      { v: { en: "Passed", th: "ผ่าน" }, en: "the assessment, with certificate", th: "การประเมิน ได้ใบประกาศ" },
    ],
    media: [
      { type: "img", src: "assets/projects/central/crates.jpg" },
      { type: "row", items: [
        { type: "img", src: "assets/projects/central/desk.jpg" },
        { type: "img", src: "assets/projects/central/docs.jpg" },
      ]},
      { type: "img", src: "assets/projects/central/cert.jpg?v=202611041245", cap: { en: "Certificate", th: "ใบประกาศ" } },
    ],
    learned: {
      en: "Being systematic, attention to detail and patience — from the mindset of the people I worked with.",
      th: "ความเป็นระบบ ความละเอียด และความอดทน จากมายด์เซ็ตของพี่ ๆ ที่ทำงาน",
    },
  },

  coke: {
    title: "Coca-Cola — Unleash the Game",
    service: "AI Video", client: "Coca-Cola (concept)", year: "2026",
    bg: "linear-gradient(135deg,#2a0f0f,#a30000)", glyph: "CC",
    tagline: {
      en: "A concept Coca-Cola × FIFA World Cup ad — one can turns an ordinary street into a robotic football arena, entirely generated with Higgsfield.ai.",
      th: "โฆษณาคอนเซปต์ Coca-Cola × FIFA World Cup — โค้กหนึ่งกระป๋องเปลี่ยนถนนธรรมดาให้กลายเป็นสนามฟุตบอลหุ่นยนต์ สร้างสรรค์ทั้งหมดด้วย Higgsfield.ai",
    },
    desc: {
      en: "A World Cup ad for Coca-Cola would normally mean a crew, a location permit, a stunt team and a budget none of which a student has.\n\nI set myself the brief anyway: make it look like it was shot, not generated. That meant a single continuous transformation — an ordinary street becoming a robotic football arena — because cuts are where generated video usually falls apart.\n\nEvery element was built first and separately in Higgsfield.ai: a custom robot suit, an energy football, a goal shield, a photoreal city street, and the characters themselves. Then they were composited into one sequence so the world stays consistent from the first frame to the last.",
      th: "โฆษณาบอลโลกให้โค้กตามปกติแปลว่าต้องมีกองถ่าย ใบอนุญาตปิดถนน ทีมสตันต์ และงบที่นักศึกษาคนหนึ่งไม่มีสักอย่าง\n\nผมตั้งโจทย์ให้ตัวเองอยู่ดีว่า คลิปต้องออกมาเหมือน “ถ่ายมา” ไม่ใช่ “เจนมา” นั่นแปลว่าต้องเป็นฉากแปลงร่างต่อเนื่องช็อตเดียว — ถนนธรรมดากลายเป็นสนามฟุตบอลหุ่นยนต์ — เพราะรอยตัดคือจุดที่วิดีโอ AI มักหลุด\n\nทุกชิ้นถูกสร้างแยกกันก่อนใน Higgsfield.ai: ชุดหุ่นยนต์ที่ออกแบบเอง ลูกบอลพลังงาน โกลชิลด์ ถนนในเมืองแบบภาพจริง และตัวละคร แล้วค่อยประกอบเข้าเป็นซีเควนซ์เดียว เพื่อให้โลกในเรื่องคงเส้นคงวาตั้งแต่เฟรมแรกจนเฟรมสุดท้าย",
    },
    result: {
      en: "A finished 126-second video — no crew, no location, not one frame of live footage. Every element it was made from is laid out below.",
      th: "วิดีโอความยาว 126 วินาทีที่เสร็จสมบูรณ์ — ไม่มีกองถ่าย ไม่มีสถานที่ ไม่มีฟุตเทจถ่ายจริงสักเฟรม ชิ้นส่วนทุกอย่างที่ใช้สร้างมันอยู่ด้านล่างนี้",
    },
    media: [
      { type: "video", src: "assets/projects/coke/ad-full.mp4", sound: true },
      { type: "elements", heading: "Elements — Higgsfield.ai", items: [
        { img: "assets/projects/coke/elements/Suprawee.jpg",        label: "Suprawee",        category: "Character" },
        { img: "assets/projects/coke/elements/Suprawee-robot.jpg",  label: "Suprawee — Robot", category: "Character" },
        { img: "assets/projects/coke/elements/robo-player-2.jpg",   label: "Robo Player 2",   category: "Character" },
        { img: "assets/projects/coke/elements/coke.jpg",            label: "Coke Can",        category: "Prop" },
        { img: "assets/projects/coke/elements/ball-prop.jpg",       label: "Energy Ball",     category: "Prop" },
        { img: "assets/projects/coke/elements/goal-shield.jpg",     label: "Goal Shield",     category: "Prop" },
        { img: "assets/projects/coke/elements/city-location.jpg",   label: "City Street",     category: "Location" },
        { img: "assets/projects/coke/elements/scheme.jpg",          label: "Location Scheme", category: "Location" },
      ]},
    ],
  },
  modkrub: {
    title: "ModKrub — Thai Game Mods",
    service: "Web & Product", client: "Own project · free to download", year: "2026",
    bg: "linear-gradient(135deg,#1a1a1a,#c2571b)", glyph: "MK",
    tagline: {
      en: "A Thai subtitle mod for a game plenty of people wanted translated and nobody had translated — over 40,000 lines of it, given away free.",
      th: "ม็อดซับไทยของเกมที่คนอยากให้แปลกันเยอะมาก แต่ยังไม่มีใครแปลได้ — กว่า 40,000 บรรทัด แจกฟรี",
    },
    desc: {
      en: "Ready or Not is a tactical shooter with a large Thai player base and no Thai translation. People had been asking for one for years and nobody delivered — the game is dialogue-heavy, and a half-finished patch is worse than none.\n\nSo the job was to translate the whole thing, not the easy parts, and hand it over for free.\n\nOver 40,000 lines of spoken dialogue are translated — SWAT team, civilians and suspects — along with all 12,002 UI and menu entries, and 91 character names. It ships as an installer that finds the game folder by itself, so a player doesn't have to move files around to use it. The site carries the install guide, a bug-report page, and a board where players suggest and vote on the next game.",
      th: "Ready or Not เป็นเกมแนว tactical shooter ที่มีคนไทยเล่นเยอะมากแต่ไม่มีภาษาไทย คนถามหากันมาหลายปีแล้วไม่มีใครทำออกมาได้ — เพราะเกมนี้บทพูดเยอะมาก และแพตช์ที่แปลครึ่ง ๆ กลาง ๆ แย่กว่าไม่มีเลย\n\nโจทย์เลยเป็นว่าต้องแปลให้ครบทั้งเกม ไม่ใช่แปลเฉพาะส่วนที่ง่าย แล้วเอาไปแจกฟรี\n\nแปลบทพูดไปกว่า 40,000 บรรทัด ครอบคลุมทั้งทีม SWAT พลเรือน และผู้ต้องสงสัย บวก UI กับเมนูในเกมทั้งหมด 12,002 รายการ และชื่อตัวละครอีก 91 รายการ ตัวติดตั้งหาโฟลเดอร์เกมให้เอง ผู้เล่นไม่ต้องมานั่งย้ายไฟล์เอง ในเว็บมีทั้งวิธีลง หน้าแจ้งบัค และกระดานให้คนเสนอเกมถัดไปแล้วโหวตกัน",
    },
    result: {
      en: "Live and still updated: v15 is out, free to anyone, no paywall and no ads. The release post in the Thai game-mod community group drew 301 reactions, 99 shares and 36 comments, most of them players saying the missions finally make sense to them and the game is more fun to play.",
      th: "ปล่อยแล้วและยังปล่อยต่อ — v15 ใช้งานอยู่จริง โหลดฟรี ไม่มีค่าใช้จ่าย ไม่มีโฆษณา โพสต์แจกในกลุ่มรวมม็อดภาษาไทยได้ 301 ไลก์ 99 แชร์ และ 36 คอมเมนต์ ส่วนใหญ่เป็นผู้เล่นที่บอกว่าเข้าใจภารกิจมากขึ้นและเล่นสนุกขึ้น",
    },
    // the reception, sat next to the result rather than in the gallery
    proof: [
      { type: "row", items: [
        { type: "img", src: "assets/projects/modkrub/fb-post.jpg" },
        { type: "img", src: "assets/projects/modkrub/fb-comments.jpg" },
      ]},
    ],
    media: [
      { type: "img", src: "assets/projects/modkrub/menu.jpg" },
      { type: "row", items: [
        { type: "img", src: "assets/projects/modkrub/dialogue.jpg" },
        { type: "img", src: "assets/projects/modkrub/commands.jpg" },
      ]},
      { type: "row", items: [
        { type: "img", src: "assets/projects/modkrub/briefing.jpg" },
        { type: "img", src: "assets/projects/modkrub/loadout.jpg" },
      ]},
    ],
    visit: { href: "https://modkrub.vercel.app/", label: { en: "Open the site ↗", th: "เปิดเว็บจริง ↗" } },
  },
  mitrphol: {
    title: "Mitr Phol — Allulose Brief",
    service: "Product concept", client: "Mitr Phol · Team GOAT", year: "2026",
    bg: "linear-gradient(135deg,#0f1a2b,#1657a8)", glyph: "MP",
    tagline: {
      en: "Our team found that convenience, not price, kept drink shops from using allulose, so we proposed a syrup that swaps 1:1 for regular syrup with no recipe changes, plus a three-phase \"Friendly Sweet\" campaign, pitched at the Mitr Phol Innovation & Research Centre.",
      th: "ทีมพบว่าสิ่งที่ขวางร้านเครื่องดื่มไม่ให้ใช้แอลลูโลสคือความสะดวก ไม่ใช่ราคา จึงเสนอไซรัปที่ใช้แทนน้ำเชื่อมเดิมได้ 1:1 ไม่ต้องปรับสูตร พร้อมแคมเปญ “หวานแบบเป็นมิตร” 3 เฟส และพิตช์ที่ Mitr Phol Innovation & Research Centre",
    },
    role: {
      en: "Member of team GOAT. We interviewed drink shops and consumers and built the concept together.",
      th: "สมาชิกทีม GOAT สัมภาษณ์ร้านเครื่องดื่มและผู้บริโภค และพัฒนาคอนเซปต์ร่วมกับทีม",
    },
    problem: {
      en: "Design a new consumer product built on Mitr Phol's allulose syrup — a sugar-free sweetener with monk fruit extract, zero calories, a one-to-one swap for sugar.",
      th: "ออกแบบสินค้าใหม่จากไซรัปแอลลูโลสของมิตรผล สารให้ความหวานแทนน้ำตาลผสมสารสกัดหล่อฮังก๊วย 0 แคลอรี ใช้แทนน้ำตาลได้ 1 ต่อ 1",
    },
    did: {
      en: [
        "Interviewed 9 drink shops and 17 consumers",
        "Found that convenience, not price, was what held shops back",
        "Proposed a syrup that swaps 1:1 for regular syrup with no recipe changes, plus a three-phase “Friendly Sweet” campaign, pitched at the Mitr Phol Innovation & Research Centre",
      ],
      th: [
        "สัมภาษณ์ร้านเครื่องดื่ม 9 ร้าน และผู้บริโภค 17 คน",
        "พบว่าสิ่งที่ขวางร้านคือความสะดวก ไม่ใช่ราคา",
        "เสนอไซรัปที่ใช้แทนน้ำเชื่อมเดิมได้ 1:1 ไม่ต้องปรับสูตร พร้อมแคมเปญ “หวานแบบเป็นมิตร” 3 เฟส และพิตช์ที่ Mitr Phol Innovation & Research Centre",
      ],
    },
    media: [
      { type: "img", src: "assets/projects/mitrphol/brief-allulose.jpg", cap: { en: "The brief", th: "โจทย์จากมิตรผล" } },
      { type: "row", items: [
        { type: "img", src: "assets/projects/mitrphol/team.jpg", cap: { en: "Team GOAT", th: "ทีม GOAT" } },
        { type: "img", src: "assets/projects/mitrphol/centre.jpg", cap: { en: "Mitr Phol Innovation & Research Centre", th: "Mitr Phol Innovation & Research Centre" } },
      ]},
    ],
  },

  muvita: {
    title: "MUVITA — R2M 2025",
    service: "Research to Market", client: "R2M 2025 · Team I'm the boss", year: "2025",
    bg: "linear-gradient(135deg,#1b2926,#0f8071)", glyph: "MU",
    tagline: {
      en: "A new positioning and route to market for MUVITA, a soy protein drink already on shelves — by finding that it wasn't losing on the science but on clarity, and re-anchoring it on plant protein.",
      th: "ได้จุดยืนใหม่และเส้นทางสู่ตลาดให้ MUVITA เครื่องดื่มโปรตีนถั่วเหลืองที่วางขายอยู่จริง โดยพบว่าสินค้าไม่ได้แพ้ที่วิทยาศาสตร์ แต่แพ้ที่ความชัด จึงวางจุดยืนใหม่ที่ “โปรตีนจากพืช”",
    },
    role: {
      en: "Member of team I'm the boss, working on the market-feasibility side.",
      th: "สมาชิกทีม I'm the boss ทำฝั่งความเป็นไปได้ทางการตลาด",
    },
    problem: {
      en: "R2M hands university research to student teams as a brief. Ours was MUVITA — a soy protein drink built on plant-extract research (Vietnamese coriander and mulberry leaf), made to GHPs/HACCP standards. The question: what can this become commercially, and does the market side hold up?",
      th: "R2M ส่งงานวิจัยของมหาวิทยาลัยมาเป็นโจทย์ให้ทีมนักศึกษา ของทีมเราคือ MUVITA เครื่องดื่มโปรตีนถั่วเหลืองที่ต่อยอดจากงานวิจัยสารสกัดผักแพวและใบหม่อน ผลิตตามมาตรฐาน GHPs/HACCP คำถามคือจะไปเป็นสินค้าอะไร และฝั่งตลาดเป็นไปได้จริงไหม",
    },
    did: {
      en: [
        "Worked out who the real buyer is",
        "Found what the product needs to stand for before that buyer recognises themselves in it",
        "Mapped which channels actually reach them",
      ],
      th: [
        "หาว่าใครคือคนซื้อตัวจริง",
        "หาว่าสินค้าต้องยืนอยู่บนอะไร คนกลุ่มนั้นถึงจะรู้สึกว่า “นี่ของฉัน”",
        "หาช่องทางที่เข้าถึงเขาได้จริง",
      ],
    },
    decisions: {
      en: [
        "Re-anchor the product on “plant protein” — a claim a shopper can place themselves against instantly — and rebuild the route to market from there",
      ],
      th: [
        "วางจุดยืนใหม่ที่ “โปรตีนจากพืช” คำที่คนฟังแล้ววัดตัวเองได้ทันที แล้ววางเส้นทางสู่ตลาดใหม่จากตรงนั้น",
      ],
    },
    media: [
      { type: "img", src: "assets/projects/muvita/product.jpg", cap: { en: "MUVITA", th: "MUVITA" } },
      { type: "row", items: [
        { type: "img", src: "assets/projects/muvita/pitch-01.jpg" },
        { type: "img", src: "assets/projects/muvita/pitch-02.jpg" },
      ]},
    ],
    learned: {
      en: "How to take real university research through to a commercial answer.",
      th: "การเอางานวิจัยของมหาวิทยาลัยมาตอบโจทย์เชิงพาณิชย์",
    },
  },
};
