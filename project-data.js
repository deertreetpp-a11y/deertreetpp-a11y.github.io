/* ============================================================
   Case-study pages — data for project.html?p=<slug>
   tagline/desc hold {en, th}; media = list of image paths
   (empty = show the branded placeholder block).
   ============================================================ */
const PROJECT_PAGES = {
  coke: {
    title: "Coca-Cola — Unleash the Game",
    service: "AI Video", client: "Coca-Cola (concept)", year: "2026",
    bg: "linear-gradient(135deg,#2a0f0f,#a30000)", glyph: "CC",
    tagline: {
      en: "A concept Coca-Cola × FIFA World Cup ad — one can turns an ordinary street into a robotic football arena, entirely generated with Higgsfield.ai.",
      th: "โฆษณาคอนเซปต์ Coca-Cola × FIFA World Cup — โค้กหนึ่งกระป๋องเปลี่ยนถนนธรรมดาให้กลายเป็นสนามฟุตบอลหุ่นยนต์ สร้างสรรค์ทั้งหมดด้วย Higgsfield.ai",
    },
    desc: {
      en: "A World Cup ad for Coca-Cola would normally mean a crew, a location permit, a stunt team and a budget none of which a student has.\n\nI set myself the brief anyway: make the film look like it was shot, not generated. That meant a single continuous transformation — an ordinary street becoming a robotic football arena — because cuts are where generated video usually falls apart.\n\nEvery element was built first and separately in Higgsfield.ai: a custom robot suit, an energy football, a goal shield, a photoreal city street, and the characters themselves. Then they were composited into one sequence so the world stays consistent from the first frame to the last.",
      th: "โฆษณาบอลโลกให้โค้กตามปกติแปลว่าต้องมีกองถ่าย ใบอนุญาตปิดถนน ทีมสตันต์ และงบที่นักศึกษาคนหนึ่งไม่มีสักอย่าง\n\nผมตั้งโจทย์ให้ตัวเองอยู่ดีว่า หนังต้องออกมาเหมือน “ถ่ายมา” ไม่ใช่ “เจนมา” นั่นแปลว่าต้องเป็นฉากแปลงร่างต่อเนื่องช็อตเดียว — ถนนธรรมดากลายเป็นสนามฟุตบอลหุ่นยนต์ — เพราะรอยตัดคือจุดที่วิดีโอ AI มักหลุด\n\nทุกชิ้นถูกสร้างแยกกันก่อนใน Higgsfield.ai: ชุดหุ่นยนต์ที่ออกแบบเอง ลูกบอลพลังงาน โกลชิลด์ ถนนในเมืองแบบภาพจริง และตัวละคร แล้วค่อยประกอบเข้าเป็นซีเควนซ์เดียว เพื่อให้โลกในเรื่องคงเส้นคงวาตั้งแต่เฟรมแรกจนเฟรมสุดท้าย",
    },
    result: {
      en: "A finished 126-second ad with zero live footage, zero crew and zero location cost — every frame generated and composited by one person. The element library it was built from is laid out below.",
      th: "ได้โฆษณาความยาว 126 วินาทีที่ไม่มีฟุตเทจถ่ายจริงแม้แต่เฟรมเดียว ไม่มีกองถ่าย ไม่มีค่าสถานที่ — สร้างและประกอบด้วยคนคนเดียว ชุดเอเลเมนต์ที่ใช้สร้างอยู่ด้านล่าง",
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
  kku: {
    title: "KKU Report — Free Skill Giveaway",
    service: "AI Content", client: "Instagram (@hidearkub)", year: "2026",
    bg: "linear-gradient(135deg,#1b1a2a,#5b21b6)", glyph: "KKU",
    tagline: {
      en: "A Reels promo for a free Claude Skill — 204,780 views, 11,050 likes, 8,650 shares, cut end to end by AI in under 10 minutes.",
      th: "คลิป Reels โปรโมท Claude Skill ฟรี — ยอดดู 204,780 ไลก์ 11,050 แชร์ 8,650 ตัดต่อด้วย AI ตั้งแต่ต้นจนจบภายในไม่ถึง 10 นาที",
    },
    desc: {
      en: "Every semester Thai university students lose nights to formatting rather than writing — cover page, table of contents, Thai line-breaking that never behaves, bibliography.\n\nSo the job was two things at once: build something that removes that work, and actually get it into the hands of the students who need it. A free tool nobody finds is the same as no tool.\n\nThe Skill turns any topic into a complete Khon Kaen University-standard report, generated for whatever subject you give it. The promo clip for it was edited entirely by AI, start to finish, in five to ten minutes — Claude directs the edit and HyperFrames, free and open source, renders it. What makes that possible is a stack of connected APIs acting as the resource library: ElevenLabs transcribes the audio so the Thai captions land on the beat, Klipy pulls the reaction memes, Mixkit supplies the music, sound effects and B-roll, and the model APIs (OpenAI, Gemini, xAI, routed through OpenRouter) handle the calls in between. Picking the meme, choosing the track, writing the captions, timing every cut — the AI's work, not a human dragging clips on a timeline. Then a ManyChat automation watches the comments for the keyword and DMs the download link instantly.",
      th: "ทุกเทอม นักศึกษาไทยเสียคืนไปกับการ “จัดรูปแบบ” มากกว่าการเขียนจริง ๆ ทั้งหน้าปก สารบัญ การตัดบรรทัดภาษาไทยที่ไม่เคยยอมอยู่ในร่องในรอย ไปจนถึงบรรณานุกรม\n\nโจทย์เลยมีสองชั้นพร้อมกัน: สร้างของที่ตัดงานส่วนนั้นทิ้ง และทำให้มันไปถึงมือคนที่ต้องใช้จริง ๆ เพราะของฟรีที่ไม่มีใครหาเจอ ก็เท่ากับไม่มี\n\nตัว Skill เปลี่ยนเรื่องอะไรก็ได้ให้เป็นรายงานมาตรฐาน มข. ครบชุด ส่วนคลิปโปรโมทถูกตัดต่อด้วย AI ทั้งหมดตั้งแต่ต้นจนจบภายใน 5-10 นาที โดยมี Claude เป็นคนสั่งงาน และ HyperFrames ซึ่งเป็นโอเพนซอร์สฟรีเป็นตัวเรนเดอร์ สิ่งที่ทำให้เป็นไปได้คือการเชื่อม API หลายตัวเข้ามาเป็นคลังทรัพยากร: ElevenLabs ถอดเสียงให้ซับไทยลงจังหวะพูดจริง Klipy ดึงมีม Mixkit จ่ายเพลง เอฟเฟกต์เสียง และบีโรล ส่วนโมเดล AI (OpenAI, Gemini, xAI ผ่าน OpenRouter) รับงานที่เหลือระหว่างทาง เลือกมีม เลือกเพลง เขียนซับ จับจังหวะตัดทุกคัท — เป็นงานของ AI ทั้งหมด ไม่ใช่คนนั่งลากคลิปบนไทม์ไลน์ แล้วต่อท้ายด้วยระบบ ManyChat ที่คอยจับคำคอมเมนต์แล้วส่งลิงก์ดาวน์โหลดผ่าน DM ทันที",
    },
    result: {
      en: "204,780 views, 11,050 likes, 8,650 shares, 5,109 saves and 514 comments — reaching 163,176 accounts, 99.1% of them people who don't follow me. Every download was delivered by the automation, with nothing answered by hand.",
      th: "ยอดดู 204,780 · ไลก์ 11,050 · แชร์ 8,650 · เซฟ 5,109 · คอมเมนต์ 514 · เข้าถึง 163,176 บัญชี โดย 99.1% เป็นคนที่ไม่ได้ติดตามผมอยู่ก่อน และทุกการดาวน์โหลดถูกส่งด้วยระบบอัตโนมัติ ไม่ต้องตอบเองสักข้อความ",
    },
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
  },
  paam: {
    title: "PAAM Serum",
    service: "AI Content", client: "PAAM Serum", year: "2025",
    bg: "linear-gradient(135deg,#1b2a24,#0f8054)", glyph: "PA",
    tagline: {
      en: "A single AI-made TikTok campaign that pulled 42,300+ views and 17,400+ likes.",
      th: "แคมเปญ TikTok ที่ผลิตด้วย AI คลิปเดียว กวาด 42,300+ วิว และ 17,400+ ไลก์",
    },
    desc: {
      en: "Insight-first content: researched what the audience actually watches, scripted with AI, produced and cut in days — then let the numbers speak.",
      th: "เริ่มจากอินไซต์ว่าคนดูอะไรจริงๆ เขียนบทด้วย AI ผลิตและตัดต่อจบในไม่กี่วัน — แล้วให้ตัวเลขเป็นคนพิสูจน์",
    },
    media: [],
  },
  affiliate: {
    title: "TikTok Affiliate Clips",
    service: "AI Content", client: "Affiliate", year: "2025",
    bg: "linear-gradient(135deg,#2a1b24,#804a0f)", glyph: "TT",
    tagline: {
      en: "Short-form clips that sell — AI-assisted production for affiliate baskets.",
      th: "คลิปสั้นที่ขายของได้จริง — ผลิตด้วย AI สำหรับสินค้าปักตะกร้า",
    },
    desc: {
      en: "Fast iteration on hooks and formats, AI photo edits and background swaps, published on a steady cadence.",
      th: "ทดลอง hook และฟอร์แมตเร็วๆ ใช้ AI แต่งรูป-เปลี่ยนฉากหลัง แล้วปล่อยคลิปสม่ำเสมอ",
    },
    media: [],
  },
  film: {
    title: "AI Short Film",
    service: "AI Video", client: "Personal", year: "2025",
    bg: "linear-gradient(135deg,#24291b,#6a8000)", glyph: "FX",
    tagline: {
      en: "A short film produced end-to-end with AI — story, visuals, sound.",
      th: "หนังสั้นที่ผลิตด้วย AI ครบวงจร — เรื่อง ภาพ เสียง",
    },
    desc: {
      en: "From script to final cut with generative video tools, proving cinematic work no longer needs a crew.",
      th: "จากบทถึงตัดจบด้วยเครื่องมือ generative video — พิสูจน์ว่างานภาพยนตร์ไม่ต้องใช้กองถ่ายอีกต่อไป",
    },
    media: [],
  },
  trading: {
    title: "Trading Bot Store",
    service: "Web & Product", client: "Own product", year: "2025",
    bg: "linear-gradient(135deg,#1b2029,#0f4a80)", glyph: "TB",
    tagline: {
      en: "A real online store selling automated trading bots.",
      th: "เว็บขายบอทเทรดอัตโนมัติ — โปรดักต์ที่ขายอยู่จริง",
    },
    desc: {
      en: "Designed, built and operated as a live business: product pages, payments, and customer support.",
      th: "ออกแบบ สร้าง และรันเป็นธุรกิจจริง ทั้งหน้าสินค้า ระบบจ่ายเงิน และซัพพอร์ตลูกค้า",
    },
    media: [],
  },
  krungsri: {
    title: "Krungsri UniVerse 2025",
    service: "Hackathon", client: "Krungsri", year: "2025",
    bg: "linear-gradient(135deg,#241b29,#5c0f80)", glyph: "KU",
    tagline: {
      en: "Champion — ฿30,000 first prize. A cashless payment app for tourists, from idea to tested prototype.",
      th: "รางวัลชนะเลิศ 30,000 บาท — แอปจ่ายเงินไร้เงินสดสำหรับนักท่องเที่ยว จากไอเดียถึง prototype ที่ผ่าน user testing",
    },
    desc: {
      en: "Tourists arrive in Thailand and hit a wall: the country runs on a cashless system they can't join without a Thai bank account, so they carry notes in a place where locals barely touch them.\n\nThe Krungsri UniVerse × Khon Kaen University hackathon gave us a fixed window to turn that into something a judge could hold, not just a slide.\n\nWe went idea → UI → working prototype → user testing inside that window. Testing mattered more than polish: a payment app that a tourist can't work out in ten seconds at a food stall has already failed, so we put it in front of real users while there was still time to change it.",
      th: "นักท่องเที่ยวมาถึงไทยแล้วเจอกำแพงทันที — ประเทศนี้เดินด้วยระบบไร้เงินสดที่เขาเข้าร่วมไม่ได้ถ้าไม่มีบัญชีธนาคารไทย สุดท้ายเลยต้องพกแบงก์ในที่ที่คนท้องถิ่นแทบไม่จับเงินสดแล้ว\n\nเวที Krungsri UniVerse × มหาวิทยาลัยขอนแก่น ให้เวลาจำกัดมาก้อนหนึ่งเพื่อเปลี่ยนเรื่องนี้ให้เป็นของที่กรรมการจับต้องได้จริง ไม่ใช่แค่สไลด์\n\nเราเดินจากไอเดีย → UI → prototype ที่กดได้จริง → ทดสอบกับผู้ใช้ ภายในเวลานั้น เรื่องเทสต์สำคัญกว่าความสวย เพราะแอปจ่ายเงินที่นักท่องเที่ยวงงเกินสิบวินาทีหน้าร้านอาหารก็ถือว่าแพ้ไปแล้ว เราจึงเอาไปให้คนจริงลองตั้งแต่ยังมีเวลาแก้",
    },
    result: {
      en: "Champion — first place and the ฿30,000 top prize, with a tested prototype instead of a concept deck.",
      th: "รางวัลชนะเลิศ — ที่ 1 พร้อมเงินรางวัล 30,000 บาท โดยส่งมอบเป็น prototype ที่ผ่านการทดสอบจริง ไม่ใช่แค่เด็คไอเดีย",
    },
    media: [
      { type: "row", items: [
        { type: "img",   src: "assets/projects/krungsri/team.jpg", pos: "50% 10%" },
        { type: "video", src: "assets/projects/krungsri/pitch.mp4" },
      ]},
      { type: "slides", base: "assets/projects/krungsri/slides/", count: 11 },
    ],
  },
  torbhai: {
    title: "Torb Hai — Auto-reply SaaS",
    service: "Own Business", client: "Torb Hai (own product)", year: "2026",
    bg: "linear-gradient(135deg,#1b1a2a,#e2564c)", glyph: "TH",
    tagline: {
      en: "A Thai auto-reply system for Facebook and Instagram — built solo, and running on my own shop's page first.",
      th: "ระบบตอบแชทอัตโนมัติภาษาไทยสำหรับ Facebook และ Instagram — สร้างเองคนเดียว และเริ่มใช้จริงกับเพจร้านตัวเองก่อน",
    },
    desc: {
      en: "Running Haru taught me the problem first-hand: a customer comments at midnight, and by the time you answer in the morning they've already bought elsewhere. Thai online sellers lose ready-to-buy customers not to price, but to reply time. The tools that solve this are built for English-first markets and priced for companies, not for someone selling from a phone.\n\nSo the goal was a system a Thai seller can set up in minutes: catch every comment and DM on Facebook and Instagram, answer in a voice that sounds like the shop, and only hand over to a human when it actually matters.\n\nI designed and built all of it — the site, the app, the flow builder, the AI replies, the connection to Meta's platforms. The AI side answers questions, reads images customers send, and works toward closing the sale rather than just replying politely.",
      th: "การทำ Haru สอนปัญหานี้ให้ผมเองกับมือ — ลูกค้าคอมเมนต์ตอนเที่ยงคืน พอตอบตอนเช้าเขาซื้อร้านอื่นไปแล้ว แม่ค้าออนไลน์ไทยเสียลูกค้าที่พร้อมจ่ายไปเพราะ “ตอบช้า” ไม่ใช่เพราะราคา ส่วนเครื่องมือที่แก้เรื่องนี้ได้ก็ถูกออกแบบมาเพื่อตลาดที่ใช้ภาษาอังกฤษเป็นหลัก และตั้งราคาสำหรับบริษัท ไม่ใช่สำหรับคนขายของจากมือถือเครื่องเดียว\n\nเป้าหมายเลยเป็นระบบที่แม่ค้าไทยตั้งค่าเองได้ในไม่กี่นาที: เก็บทุกคอมเมนต์และทุก DM ทั้ง Facebook และ Instagram ตอบด้วยน้ำเสียงที่เหมือนร้านพูดเอง และส่งต่อให้คนจริงเฉพาะตอนที่จำเป็นจริง ๆ\n\nผมออกแบบและสร้างเองทั้งหมด ทั้งตัวเว็บ ตัวแอป ระบบสร้างโฟลว์ ระบบ AI ตอบแชท และการเชื่อมต่อกับแพลตฟอร์มของ Meta ฝั่ง AI ตอบคำถามได้ อ่านรูปที่ลูกค้าส่งมาได้ และทำงานโดยมีเป้าหมายที่การปิดการขาย ไม่ใช่แค่ตอบให้สุภาพ",
    },
    result: {
      en: "Live and in use on my own Haru page, which is where the market testing is happening — the product proves itself on a real shop before anyone else is asked to trust it. The AI side has just been finished, and the app is now waiting on Meta's review before it can open to other sellers.",
      th: "ใช้งานจริงอยู่บนเพจ Haru ของผมเอง ซึ่งเป็นที่ที่กำลังทดสอบตลาดอยู่ — ให้ตัวสินค้าพิสูจน์ตัวเองกับร้านจริงก่อน แล้วค่อยไปขอให้คนอื่นเชื่อ ฝั่ง AI เพิ่งทำเสร็จ และตอนนี้ตัวแอปกำลังรอผลรีวิวจาก Meta ก่อนจะเปิดให้แม่ค้าคนอื่นเข้ามาใช้ได้",
    },
    media: [
      { type: "img", src: "assets/projects/torbhai.jpg" },
    ],
    visit: { href: "https://torbhai.com", label: { en: "Open torbhai.com ↗", th: "เปิด torbhai.com ↗" } },
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
      en: "Live at v15 and free to anyone — no paywall, no ads. A second game, Fears to Fathom: Scratch Creek, is translated and shipped too, and the next one is being picked by the players themselves.",
      th: "ปล่อยจริงถึงเวอร์ชัน v15 แล้ว ใครก็โหลดได้ฟรี ไม่มีค่าใช้จ่าย ไม่มีโฆษณา มีเกมที่สองแปลเสร็จและปล่อยแล้วคือ Fears to Fathom: Scratch Creek ส่วนเกมถัดไปให้ผู้เล่นโหวตเลือกกันเอง",
    },
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
  haru: {
    title: "Haru — Pocket Watercolor Kit",
    service: "Own Business", client: "Haru (own brand)", year: "2026",
    bg: "linear-gradient(135deg,#2a1f26,#c2687f)", glyph: "HA",
    tagline: {
      en: "My own D2C brand — a pocket watercolor kit, sold direct to customers through Facebook ads.",
      th: "แบรนด์ D2C ของผมเอง — ชุดสีน้ำพกพา ขายตรงถึงลูกค้าผ่านการยิงแอดบน Facebook",
    },
    desc: {
      en: "Someone who wants to start painting has to buy a palette, paints, a brush, paper and something to hold it all together — five separate decisions, and most people quit at the shopping stage.\n\nSo the product had to be one box that removes every one of those decisions, and it had to sell to people who have never bought art supplies before, which rules out speaking like an art shop.\n\nI run the whole thing: the product itself, the packaging, the photography, the ad creative and the closing conversation in chat. The kit is a complete set in one box — wooden palette, twelve watercolors, water brush, sketch paper and a clip. It sells direct on Facebook, where I write and run the ads myself and answer every message. Cash on delivery is offered because that's what this audience trusts.",
      th: "คนที่อยากเริ่มวาดสีน้ำต้องซื้อพาเลต สี พู่กัน กระดาษ แล้วก็อะไรสักอย่างมายึดมันไว้ด้วยกัน — ห้าการตัดสินใจแยกกัน และคนส่วนใหญ่ถอดใจตั้งแต่ตอนเลือกซื้อ\n\nสินค้าเลยต้องเป็นกล่องเดียวที่ตัดการตัดสินใจพวกนั้นทิ้งให้หมด และต้องขายกับคนที่ไม่เคยซื้ออุปกรณ์ศิลปะมาก่อน ซึ่งแปลว่าห้ามพูดจาแบบร้านขายอุปกรณ์ศิลปะ\n\nผมดูแลเองทั้งหมด ตั้งแต่ตัวสินค้า แพ็กเกจจิ้ง ภาพถ่าย ครีเอทีฟโฆษณา ไปจนถึงการคุยปิดการขายในแชท ตัวชุดคือเซ็ตครบจบในกล่องเดียว — พาเลตไม้ สีน้ำ 12 สี พู่กันเติมน้ำ กระดาษสเก็ตช์ และคลิปหนีบ ขายตรงบน Facebook โดยผมเขียนและยิงแอดเอง ตอบลูกค้าเอง และมีเก็บเงินปลายทางเพราะเป็นสิ่งที่ลูกค้ากลุ่มนี้ไว้ใจ",
    },
    result: {
      en: "Currently in market testing, with a first production run of 500 units being prepared. Every part of it — brand, box, ads, chat — is running live rather than sitting in a plan.",
      th: "ตอนนี้อยู่ในเฟสทดสอบตลาด และกำลังเตรียมผลิตล็อตแรก 500 ชิ้น ทุกส่วน — ทั้งแบรนด์ กล่อง แอด และแชท — เดินอยู่จริง ไม่ได้อยู่แค่ในแผน",
    },
    media: [
      { type: "img", src: "assets/projects/haru/set.jpg" },
      { type: "video", src: "assets/projects/haru/fb-ad.mp4", sound: true },
      { type: "row", items: [
        { type: "img", src: "assets/projects/haru/portable.jpg" },
        { type: "img", src: "assets/projects/haru/cod.jpg" },
      ]},
      { type: "img", src: "assets/projects/haru/colors.jpg" },
    ],
  },
  mitrphol: {
    title: "Mitr Phol — Allulose Brief",
    service: "Product Concept", client: "Mitr Phol · Team GOAT", year: "2026",
    bg: "linear-gradient(135deg,#0f1a2b,#1657a8)", glyph: "MP",
    tagline: {
      en: "A competition brief from Mitr Phol: invent a consumer product around their zero-calorie allulose syrup.",
      th: "โจทย์แข่งขันจากมิตรผล — คิดสินค้าใหม่ให้ไซรัปแอลลูโลส 0 แคลของเขา",
    },
    desc: {
      en: "Mitr Phol set the brief: design a new consumer product built on their allulose syrup — a sugar-free sweetener with monk fruit extract, zero calories, a one-to-one swap for sugar.\n\nTeam GOAT developed it into a premium flavoured syrup line, packaged as a gift set, and pitched it at the Mitr Phol Innovation & Research Centre.",
      th: "โจทย์จากมิตรผลคือ ออกแบบสินค้าใหม่จากไซรัปแอลลูโลสของเขา — สารให้ความหวานแทนน้ำตาลผสมสารสกัดหล่อฮังก๊วย 0 แคลอรี ใช้แทนน้ำตาลได้ 1 ต่อ 1\n\nทีม GOAT พัฒนาออกมาเป็นไซรัปพรีเมียมหลายรส จัดเป็นเซ็ตของขวัญ แล้วนำไปพิตช์ที่ Mitr Phol Innovation & Research Centre",
    },
    result: {
      en: "Took part, didn't place.",
      th: "ได้เข้าร่วม ไม่ได้รางวัล",
    },
    media: [
      { type: "img", src: "assets/projects/mitrphol/brief-allulose.jpg" },
      { type: "row", items: [
        { type: "img", src: "assets/projects/mitrphol/team.jpg" },
        { type: "img", src: "assets/projects/mitrphol/centre.jpg" },
      ]},
    ],
  },
  muvita: {
    title: "MUVITA — R2M 2025",
    service: "Research to Market", client: "R2M 2025 · Team I'm the boss", year: "2025",
    bg: "linear-gradient(135deg,#1b2926,#0f8071)", glyph: "MU",
    tagline: {
      en: "Research to Market 2025 — taking a piece of university research and working out what it could become commercially, and for whom.",
      th: "เส้นทางสู่นวัตวณิชย์ (R2M) 2025 — หยิบงานวิจัยของมหาวิทยาลัยมาหาคำตอบว่ามันจะไปเป็นสินค้าอะไรได้ และขายให้ใคร",
    },
    desc: {
      en: "R2M is deliberately not a business-plan contest. University research is IP-audited and handed to a student team as a brief, and the team's job is the early question that comes before any plan: what commercial product or service could this technology actually become, and does the market side of it hold up?\n\nOur brief was MUVITA — a soy protein drink built on plant-extract research, Vietnamese coriander and mulberry leaf, already produced to GHPs/HACCP standards. We took the market-feasibility half of that question: who the real buyer is, what the product needs to stand for before that buyer recognises themselves in it, and which channels actually reach them. What we found was that the product wasn't failing on the science — it was failing on legibility. Nothing in how it presented itself told a shopper which group they belonged to. We re-anchored it on plant protein, a claim a buyer can place themselves against instantly, and rebuilt the route to market from there.",
      th: "R2M ไม่ใช่การประกวดแผนธุรกิจ — โครงการระบุไว้ชัดว่าเป็นงานช่วงต้นน้ำที่มาก่อนแผนธุรกิจ งานวิจัยของมหาวิทยาลัยจะถูกตรวจทรัพย์สินทางปัญญาแล้วส่งมาเป็นโจทย์ให้ทีมนักศึกษา โจทย์คือคำถามที่ต้องตอบก่อนจะเขียนแผนใด ๆ ได้: เทคโนโลยีชิ้นนี้พัฒนาไปเป็นสินค้าหรือบริการอะไรได้บ้าง และฝั่งตลาดของมันเป็นไปได้จริงไหม\n\nโจทย์ของทีมเราคือ MUVITA — เครื่องดื่มโปรตีนถั่วเหลืองที่ต่อยอดจากงานวิจัยสารสกัดพืช ทั้งผักแพวและใบหม่อน ผลิตตามมาตรฐาน GHPs/HACCP อยู่แล้ว เราเลือกทำฝั่งความเป็นไปได้ทางการตลาด: ใครคือคนซื้อตัวจริง สินค้าต้องยืนอยู่บนอะไรคนกลุ่มนั้นถึงจะรู้สึกว่า “นี่ของฉัน” และช่องทางไหนที่เข้าถึงเขาได้จริง สิ่งที่เจอคือมันไม่ได้แพ้ที่ตัววิทยาศาสตร์ แต่แพ้ที่ความชัด — ไม่มีอะไรในตัวสินค้าบอกคนซื้อได้ว่าเขาอยู่กลุ่มไหน เราจึงวางจุดยืนใหม่ที่ “โปรตีนจากพืช” ซึ่งเป็นคำที่คนฟังแล้ววัดตัวเองได้ทันที แล้ววางเส้นทางสู่ตลาดใหม่จากตรงนั้น",
    },
    result: {
      en: "We didn't make it past the university round. What I took from it was the part no class teaches: handing real lab research a commercial answer, in a room where the people who own that research are listening.",
      th: "ทีมเราไม่ได้ผ่านรอบมหาวิทยาลัยไปต่อ สิ่งที่ได้กลับมาคือประสบการณ์ที่ห้องเรียนไม่สอน — การเอางานวิจัยจริงในแล็บมาตอบโจทย์เชิงพาณิชย์ ในห้องที่เจ้าของงานวิจัยนั่งฟังอยู่ด้วย",
    },
    media: [
      { type: "img", src: "assets/projects/muvita/product.jpg" },
      { type: "row", items: [
        { type: "img", src: "assets/projects/muvita/pitch-01.jpg" },
        { type: "img", src: "assets/projects/muvita/pitch-02.jpg" },
      ]},
    ],
  },
};
