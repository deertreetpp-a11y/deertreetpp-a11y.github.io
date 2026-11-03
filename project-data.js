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
      en: "Cut the time teachers spend checking homework by 50% — timed in a real classroom — by building LearnLy, where the AI checks and suggests and the teacher gives the score. Top 10 of 603 teams nationwide.",
      th: "ลดเวลาครูตรวจการบ้านลง 50% วัดจากการจับเวลาจริงในห้องเรียน โดยทำ LearnLy ให้ AI ตรวจและเสนอแนะ ส่วนครูเป็นคนให้คะแนน · ติด Top 10 จาก 603 ทีมทั่วประเทศ",
    },
    role: {
      en: "CEO of team TLDR. I led the team, built the web app's UX/UI and the AI system inside it myself, and pitched every round.",
      th: "CEO ทีม TLDR · นำทีม ทำเองทั้งหน้าเว็บ UX/UI และระบบ AI ข้างใน และขึ้นพิตช์ทุกรอบ",
    },
    problem: {
      en: "The brief was very wide: “use AI to improve Thai education”. Research showed one teacher looks after 3 classes, 120–150 students, and spends 1–2 hours a day checking homework.",
      th: "โจทย์กว้างมาก “เอา AI มาช่วยพัฒนาการศึกษาไทย” ผมรีเสิร์ชจนเจอว่าครู 1 คนดูแล 3 ห้อง 120–150 คน ใช้เวลาตรวจการบ้านวันละ 1–2 ชั่วโมง",
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
      { v: "50%", en: "less time checking homework (timed in class)", th: "เวลาตรวจการบ้านที่ลดลง (จับเวลาจริง)" },
      { v: { en: "1st", th: "ที่ 1" }, en: "Northeast regional round, 49 teams", th: "ชนะเลิศรอบภาคอีสาน 49 ทีม" },
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
      en: "Understanding the problem, talking and communicating with people, and designing the user journey.",
      th: "เข้าใจปัญหา คุยและสื่อสารกับผู้คน และออกแบบ user journey",
    },
  },

  orthiva: {
    title: "ORTHIVA",
    service: "Own brand", client: "Bunion corrector · sold on Facebook", year: "2026",
    bg: "linear-gradient(135deg,#0b2a6b,#1f6bff)", glyph: "OR",
    tagline: {
      en: "Sold ฿5,360 with ฿1,894 net profit after product, ads and shipping — measured in my own back office and Meta Ads Manager — by running the whole brand myself: sourcing in China, ads, an AI chat bot, the back office and packing.",
      th: "ขายได้ ฿5,360 กำไรสุทธิ ฿1,894 หลังหักค่าของ ค่าแอด และค่าส่ง วัดจากระบบหลังบ้านและ Ads Manager โดยทำเองทั้งแบรนด์ ตั้งแต่หาโรงงานจีน ยิงแอด บอท AI ตอบแชท ระบบหลังบ้าน จนแพ็กของส่ง",
    },
    role: {
      en: "Owner. I did every step myself, using AI to help — from finding the factory to printing the shipping labels.",
      th: "เจ้าของแบรนด์ · ทำเองทุกขั้น โดยใช้ AI ช่วย ตั้งแต่หาโรงงานจนปริ้นใบปะหน้า",
    },
    problem: {
      en: "I wanted to run e-commerce, so I studied how to find a winning product to import from China. I found that over 30% of women have a bunion — not a mass market, but a real one.",
      th: "อยากทำอีคอมเมิร์ซ เลยศึกษาหา winning product นำเข้าจากจีน แล้วพบว่าผู้หญิงกว่า 30% มีนิ้วโป้งเท้าเอียง ไม่ใช่ตลาดแมส แต่เป็นตลาดจริง",
    },
    did: {
      en: [
        "Product research, talking to dozens of factories, negotiating price and arranging shipping",
        "Product photos, the Facebook page and product details, then Facebook ads",
        "An AI chat bot that answers customers — when it can't, it sends a LINE alert to my phone",
        "A back office: orders, stock, tax and accounts synced to the cloud and Excel, viewable on a phone",
        "Packing and printing shipping labels",
      ],
      th: [
        "หาสินค้า รีเสิร์ช คุยโรงงานหลายสิบเจ้า ต่อรองราคา และคุยชิปปิ้ง",
        "ทำรูป เพจ และรายละเอียดสินค้า แล้วยิงแอด Facebook",
        "บอท AI ตอบแชท ถ้าบอทตอบไม่ได้จะส่ง LINE เข้ามือถือผม",
        "ระบบหลังบ้าน ออเดอร์ สต็อก ภาษี บัญชี ซิงก์คลาวด์และ Excel ดูผ่านมือถือได้",
        "แพ็กของ และปริ้นใบปะหน้า",
      ],
    },
    decisions: {
      en: [
        "The first product I tried was a watercolour set. It sold, but the profit per piece was too low, so I dropped it",
        "This one I test-sold before importing: ads at ฿300/day for 3 days. After costs it was still profitable, so I ordered real stock",
      ],
      th: [
        "สินค้าแรกที่ลองคือชุดสีน้ำ ขายได้แต่กำไรต่อชิ้นต่ำ เลยเลิก",
        "ตัวนี้ทดลองขายก่อนนำเข้า ยิงแอด ฿300/วัน 3 วัน หักต้นทุนแล้วยังกำไร จึงสั่งของจริง",
      ],
    },
    numbers: [
      { v: "฿5,360", en: "sales, first 4 orders", th: "ยอดขาย 4 ออเดอร์แรก" },
      { v: "฿1,894", en: "net profit after everything", th: "กำไรสุทธิหลังหักทุกอย่าง" },
      { v: "1.83", en: "ROAS (break-even 1.45)", th: "ROAS (จุดเสมอทุน 1.45)" },
      { v: "฿2,932", en: "total ad spend incl. VAT", th: "ค่าแอดทั้งหมด รวม VAT" },
      { v: "47", en: "people messaged from the ads", th: "คนทักแชทจากแอด" },
      { v: "฿9", en: "AI cost for the whole month", th: "ค่า AI ทั้งเดือน" },
    ],
    asOf: {
      en: "Figures as of 3 Nov 2026, from the back office and Meta Ads Manager.",
      th: "ตัวเลข ณ 3 พ.ย. 2569 จากระบบหลังบ้านและ Ads Manager",
    },
    media: [
      { type: "row", items: [
        { type: "img", src: "assets/projects/orthiva/ad.jpg", cap: { en: "Ad image", th: "ภาพโฆษณา" } },
        { type: "img", src: "assets/projects/orthiva/pack.jpg", cap: { en: "Real packing", th: "แพ็กของจริง" } },
      ]},
      { type: "row", cols: 4, items: [
        { type: "img", src: "assets/projects/orthiva/ad-f1.jpg" },
        { type: "img", src: "assets/projects/orthiva/ad-f2.jpg" },
        { type: "img", src: "assets/projects/orthiva/ad-f3.jpg" },
        { type: "img", src: "assets/projects/orthiva/ad-f4.jpg" },
      ], cap: { en: "Frames from the live video ad", th: "เฟรมจากคลิปแอดที่ยิงจริง" } },
      { type: "img", src: "assets/projects/orthiva/ads-manager.png", cap: { en: "Meta Ads Manager — AD1 got a chat for ฿44, almost half AD2's ฿77", th: "Ads Manager จริง · AD1 ได้แชทละ ฿44 ถูกกว่า AD2 (฿77) เกือบครึ่ง" } },
      { type: "img", src: "assets/projects/orthiva/bot-reply.png", cap: { en: "The bot's own reply in Messenger: it confirms cash on delivery and sums up the order", th: "ข้อความที่บอทตอบลูกค้าจริงใน Messenger · ยืนยันเก็บเงินปลายทางและสรุปออเดอร์ให้เอง" } },
      { type: "row", items: [
        { type: "img", src: "assets/projects/orthiva/backoffice-info.jpg", cap: { en: "What the back office does", th: "ระบบหลังบ้านทำอะไรให้บ้าง" } },
        { type: "img", src: "assets/projects/orthiva/bo-overview.jpg", cap: { en: "Business overview", th: "ภาพรวมธุรกิจ" } },
      ]},
      { type: "row", items: [
        { type: "img", src: "assets/projects/orthiva/bo-pnl.jpg", cap: { en: "Profit & loss", th: "กำไรขาดทุน" } },
        { type: "img", src: "assets/projects/orthiva/bo-costs.jpg", cap: { en: "Cost per unit", th: "ต้นทุนต่อชิ้น" } },
      ]},
      { type: "row", items: [
        { type: "img", src: "assets/projects/orthiva/bo-stock.jpg", cap: { en: "Stock", th: "สต็อก" } },
        { type: "img", src: "assets/projects/orthiva/bo-tx.jpg", cap: { en: "Daily, by channel", th: "รายวันแยกช่องทาง" } },
      ]},
      { type: "row", items: [
        { type: "img", src: "assets/projects/orthiva/bo-tax.jpg", cap: { en: "Yearly tax", th: "ภาษีรายปี" } },
        { type: "img", src: "assets/projects/orthiva/bo-kb.jpg", cap: { en: "What the bot knows", th: "บอทรู้อะไรบ้าง" } },
      ]},
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
      en: "Won a ฿120,000 startup grant from the faculty — 1 of 12 teams through the interview — by building an AI editor that lets a customer's own AI edit video like a professional.",
      th: "ได้ทุนสตาร์ทอัป ฿120,000 จากคณะ เป็น 1 ใน 12 ทีมที่ผ่านสัมภาษณ์ โดยทำ AI ตัดต่อที่ช่วยให้ AI ของลูกค้าตัดต่อคลิปได้แบบมืออาชีพ",
    },
    role: {
      en: "Co-founder. I built 99–100% of the product myself — thinking it through, tuning, testing and editing clips with it myself.",
      th: "Co-founder · ทำตัวสินค้าเอง 99–100% ทั้งคิด จูน เทส และทดลองตัดคลิปเอง",
    },
    problem: {
      en: "Editors spend an hour or more on every clip, even though AI has become very good.",
      th: "คนตัดต่อใช้เวลาคลิปละเป็นชั่วโมง ทั้งที่ทุกวันนี้ AI เก่งขึ้นมาก",
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
        "On cost: provide the AI for customers ourselves, or let customers connect their own AI through MCP — I chose the route that made sense for the cost",
      ],
      th: [
        "เรื่องต้นทุน จะเตรียม AI ให้ลูกค้าเอง หรือให้ลูกค้าต่อ AI ของเขาเข้ามาผ่าน MCP · เลือกทางที่สมเหตุสมผลกับต้นทุน",
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
    service: "Partner · Full-stack", client: "A friend's siren brand", year: "2026",
    bg: "linear-gradient(135deg,#0a0a0a,#00a9c7)", glyph: "BTC",
    tagline: {
      en: "Took a friend's siren business from TikTok-only to a live online store in 8 languages, scoring 95/100 for speed on mobile — by consulting first, then joining as a partner and building the whole site. Year-one sales target: ฿1 million.",
      th: "พาธุรกิจกล่องเสียงไซเรนของเพื่อนจากขายแค่ TikTok มีเว็บขายของ 8 ภาษาขึ้นใช้งานจริง คะแนนความเร็วบนมือถือ 95/100 โดยเริ่มจากคอนซัลต์ แล้วเข้าเป็นพาร์ตเนอร์และสร้างเว็บทั้งระบบ · เป้ายอดขายปีแรก ฿1 ล้าน",
    },
    role: {
      en: "Partner (60/40 split). I own the full stack: the storefront, the back office, the database, marketing and finance.",
      th: "พาร์ตเนอร์ แบ่งหุ้น 60/40 · รับหน้าที่ full-stack ทั้งเว็บหน้าบ้าน หลังบ้าน ฐานข้อมูล การตลาด และการเงิน",
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
      { type: "img", src: "assets/projects/btc/home.jpg", cap: { en: "The live site on desktop", th: "เว็บจริงบนคอม" } },
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
      en: "First place and the ฿30,000 prize, by coming up with Krungsri Tourist Pay: tourists top up from the apps they already use, then scan PromptPay QR codes at Thai markets.",
      th: "ชนะเลิศ ได้เงินรางวัล ฿30,000 โดยคิด Krungsri Tourist Pay ให้นักท่องเที่ยวต่างชาติโอนเงินจากแอปที่ใช้อยู่แล้วเข้ามา แล้วสแกน QR PromptPay จ่ายตามตลาดนัดได้",
    },
    role: {
      en: "I interviewed foreign visitors, came up with the idea, worked out the fees and the system, and pitched. The screens (UX/UI) were designed by a teammate from Computer Engineering.",
      th: "สัมภาษณ์ชาวต่างชาติ คิดไอเดีย วางค่าธรรมเนียมและระบบ และขึ้นพิตช์ · หน้าจอ UX/UI เพื่อนในทีมสาย Computer เป็นคนออกแบบ",
    },
    problem: {
      en: "There was no fixed brief — just “build seamless payments”. Interviews with foreigners showed they can't use PromptPay, only cards, while Thai markets run on PromptPay.",
      th: "ไม่มีโจทย์ตายตัว ให้พัฒนาการชำระเงินไร้รอยต่อ · สัมภาษณ์ชาวต่างชาติแล้วพบว่าใช้ PromptPay ไม่ได้ ใช้ได้แค่บัตร แต่ตลาดนัดไทยใช้ PromptPay",
    },
    did: {
      en: [
        "Interviewed foreign visitors about how they pay",
        "Designed the flow: top up from an app they already have, then pay any PromptPay QR",
        "Worked out the fee model and the system behind it, then pitched",
      ],
      th: [
        "สัมภาษณ์ชาวต่างชาติว่าจ่ายเงินกันยังไง",
        "วางการใช้งาน โอนจากแอปที่มีอยู่แล้วเข้ามา แล้วสแกนจ่าย QR PromptPay ได้ทุกร้าน",
        "คิดค่าธรรมเนียมและระบบเบื้องหลัง แล้วขึ้นพิตช์",
      ],
    },
    decisions: {
      en: [
        "Let tourists keep the apps they already use instead of asking them to open a Thai bank account",
      ],
      th: [
        "ให้นักท่องเที่ยวใช้แอปที่มีอยู่แล้ว แทนการให้ไปเปิดบัญชีธนาคารไทย",
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
      en: "First place — a ฿10,000 scholarship plus ฿15,000 prize — for redesigning a beauty clinic's online service with an Isan identity, from walking in to follow-up after treatment.",
      th: "ชนะเลิศ ได้ทุนการศึกษา ฿10,000 และเงินรางวัล ฿15,000 จากการออกแบบบริการดิจิทัลของคลินิกความงามให้มีความเป็นอีสาน ตั้งแต่เข้าร้านจนติดตามผลหลังทำ",
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
      en: "Top score in my section for novelty and innovation when I presented it in class — an AI meeting-notes app I built entirely myself, free to use through Google AI Studio.",
      th: "ได้คะแนนสูงสุดของเซกในหัวข้อความแปลกใหม่และนวัตกรรม ตอนพรีเซนต์ในรายวิชา โดยสร้างแอปสรุปประชุมด้วย AI เองทั้งหมด ใช้ฟรีผ่าน Google AI Studio",
    },
    role: {
      en: "I built 100% of it myself, including the illustrations and the UX/UI.",
      th: "ทำเอง 100% รวมลายเส้นและ UX/UI",
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
        "Build my own instead of paying monthly, and keep it free through Google AI Studio",
      ],
      th: [
        "สร้างเองแทนการจ่ายรายเดือน และทำให้ใช้ฟรีผ่าน Google AI Studio",
      ],
    },
    numbers: [
      { v: { en: "Top", th: "สูงสุด" }, en: "score in my class section (novelty / innovation)", th: "คะแนนสูงสุดของเซก หัวข้อความแปลกใหม่/นวัตกรรม" },
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
      en: "Taste in design — when I presented it in class it got the top score in my section for novelty.",
      th: "รสนิยมการออกแบบ ตอนพรีเซนต์ในรายวิชาได้คะแนนสูงสุดของเซกด้านความแปลกใหม่",
    },
  },

  kku: {
    title: "KKU Report Skill",
    service: "AI tool · free", client: "Instagram (@hidearkub)", year: "2026",
    bg: "linear-gradient(135deg,#1b1a2a,#5b21b6)", glyph: "KKU",
    tagline: {
      en: "204,780 views on Instagram, 99.1% from people who had never heard of me — for a free Claude Skill I built that writes a complete, correctly formatted Khon Kaen University report.",
      th: "คลิปแจกสกิลมีคนดู 204,780 ครั้งบน Instagram ซึ่ง 99.1% ไม่เคยรู้จักผมมาก่อน โดยทำสกิลให้ Claude สร้างรายงานรูปแบบ มข. ฉบับสมบูรณ์ ถูกหลัก สวย แล้วแจกฟรี",
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
        "Give it away free",
      ],
      th: [
        "แจกฟรี",
      ],
    },
    numbers: [
      { v: "204,780", en: "views", th: "ยอดดู" },
      { v: "11,050", en: "likes", th: "ไลก์" },
      { v: "8,650", en: "shares", th: "แชร์" },
      { v: "99.1%", en: "of viewers had never heard of me", th: "ของคนดูไม่เคยรู้จักผมมาก่อน" },
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
      en: "Passed the assessment and received the certificate after nearly three months in Goods Receiving — handling stock from the moment it arrives until it goes up to the floor, on both the Credit and Consignment systems.",
      th: "ผ่านการประเมินและได้ใบประกาศ หลังฝึกงานแผนกรับสินค้า (GR) เกือบ 3 เดือน ดูแลของตั้งแต่เข้าจนออก ทั้งระบบ Credit และ Consignment",
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
        "I liked how systematic the work was, but it showed me I want work that needs skills only a few people have",
      ],
      th: [
        "ชอบความเป็นระบบของงานนี้ แต่ทำให้รู้ว่าอยากทำงานที่ต้องใช้ทักษะเฉพาะ ที่คนกลุ่มน้อยทำได้",
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
      { type: "img", src: "assets/projects/central/cert.jpg", cap: { en: "Certificate", th: "ใบประกาศ" } },
    ],
    learned: {
      en: "Being systematic, attention to detail and patience — from the mindset of the people I worked with.",
      th: "ความเป็นระบบ ความละเอียด และความอดทน จากมายด์เซ็ตของพี่ ๆ ที่ทำงาน",
    },
  },
};
