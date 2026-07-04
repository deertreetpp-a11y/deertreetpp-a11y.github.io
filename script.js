/* ============================================================
   YOURNAME® portfolio — interaction & scroll animation layer
   Written from scratch: IntersectionObserver reveals,
   word stagger, infinite 3D ticker, sticky card deck,
   count-up stats, and a typewriter CTA.
   ============================================================ */

// ---------- 1. Project ticker (build cards, duplicate for seamless loop) ----------
const projects = [
  { title: "Aurora",   tag: "Web design",   glyph: "AU", bg: "linear-gradient(135deg,#1b2a24,#0f8054)" },
  { title: "Pulse",    tag: "UI/UX Design", glyph: "PU", bg: "linear-gradient(135deg,#2a1b24,#804a0f)" },
  { title: "Canvas",   tag: "Web design",   glyph: "CA", bg: "linear-gradient(135deg,#24291b,#6a8000)" },
  { title: "Nexus",    tag: "Development",  glyph: "NE", bg: "linear-gradient(135deg,#1b2029,#0f4a80)" },
  { title: "Summit",   tag: "SEO",          glyph: "SU", bg: "linear-gradient(135deg,#291b1b,#801f0f)" },
  { title: "Vault",    tag: "UI/UX Design", glyph: "VA", bg: "linear-gradient(135deg,#241b29,#5c0f80)" },
  { title: "Velocity", tag: "Development",  glyph: "VE", bg: "linear-gradient(135deg,#1b2926,#0f8071)" },
];

const track = document.getElementById("tickerTrack");
if (track) {
  const cards = projects.map(p => `
    <div class="p-card">
      <div class="p-thumb" style="--p-bg:${p.bg};--p-glyph:'${p.glyph}'">
        <span class="p-tag">${p.tag}</span>
      </div>
      <div class="p-title">${p.title}</div>
    </div>`).join("");
  track.innerHTML = cards + cards; // duplicate for -50% loop
}

// ---------- 2. Word-by-word text reveal ----------
document.querySelectorAll(".word-reveal").forEach(el => {
  const words = el.textContent.trim().split(/\s+/);
  el.innerHTML = words
    .map((w, i) => `<span class="w" style="--wi:${i}">${w}</span>`)
    .join(" ");
});

// ---------- 3. Scroll reveals (shared observer) ----------
const io = new IntersectionObserver(entries => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      io.unobserve(e.target);
    }
  }
}, { threshold: 0.2, rootMargin: "0px 0px -5% 0px" });

document.querySelectorAll(".reveal, .word-reveal, .divider").forEach(el => io.observe(el));

// ---------- 4. Count-up stats ----------
const counterIO = new IntersectionObserver(entries => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    counterIO.unobserve(e.target);
    const el = e.target;
    const target = +el.dataset.target;
    const dur = 1400;
    const t0 = performance.now();
    (function tick(now) {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }
}, { threshold: 0.6 });

document.querySelectorAll(".counter").forEach(el => counterIO.observe(el));

// ---------- 5. Animation loop: smooth ticker + services fan ----------
// One rAF loop drives both effects with lerp smoothing for a buttery feel.

const lerp = (a, b, t) => a + (b - a) * t;

// -- 5a. Projects ticker: endless drift, eases to a crawl on hover
let tickerX = 0;
let tickerSpeed = 1.1;      // current px/frame
let tickerTarget = 1.1;     // desired px/frame
if (track) {
  track.parentElement.addEventListener("mouseenter", () => (tickerTarget = 0.15));
  track.parentElement.addEventListener("mouseleave", () => (tickerTarget = 1.1));
}

// -- 5b. Services fan: whole hand of cards glides left -> right with scroll
const servicesSection = document.getElementById("services");
const sCards = [...document.querySelectorAll(".s-card")];
let deckProgress = 0;       // smoothed 0..1
let deckVelocity = 0;       // for tilt-by-speed

function deckTargetProgress() {
  if (!servicesSection) return 0;
  const rect = servicesSection.getBoundingClientRect();
  const total = rect.height - window.innerHeight;
  return Math.min(Math.max(-rect.top / total, 0), 1);
}

let lastT = performance.now();
function frame(now) {
  // time-based smoothing so the feel is identical on 60Hz, 120Hz,
  // or throttled tabs (frame-based lerp would drift with frame rate)
  const dt = Math.min((now || performance.now()) - lastT, 100) / 1000;
  lastT = now || performance.now();
  const k = 1 - Math.exp(-dt * 6);              // ~same feel as 0.08/frame @60fps

  // ticker
  if (track) {
    tickerSpeed = lerp(tickerSpeed, tickerTarget, k);
    tickerX -= tickerSpeed * dt * 66;           // px/s, frame-rate independent
    const half = track.scrollWidth / 2;
    if (-tickerX >= half) tickerX += half;
    track.style.transform = `rotateY(26deg) translateX(${tickerX}px)`;
  }

  // services fan
  if (sCards.length) {
    const target = deckTargetProgress();
    const prev = deckProgress;
    deckProgress = lerp(deckProgress, target, k); // smoothing = the "smooth" glide
    deckVelocity = lerp(deckVelocity, deckProgress - prev, 0.2);

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const n = sCards.length;
    // values measured from the reference site's live DOM (1466x674 viewport):
    // start: x -440 (-0.30vw), y +216 (+0.32vh), rotateY -80deg
    // end:   x +586 (+0.40vw), y -135 (-0.20vh), rotateY +80deg
    // card spacing in both stacks: ~48px, same y for every card
    // cards rest almost face-on (+28°), so at 48px spacing each one shows a
    // slim strip of the card behind it — a solid block, no background gaps
    const peek = 48;
    const tiltRest = 45;                         // resting tilt of BOTH stacks:
    // left edge toward the viewer — tops nearly level, bottoms fan out on the
    // peeking side (matches the reference stacks the user screenshotted)
    const stagger = 0.16;                        // delay between cards (chain effect)
    const dur = 1 - stagger * (n - 1);           // each card's share of the scroll

    // keep breathing room under the start stack: never push the cards'
    // bottom edge (incl. the perspective bulge) closer than ~7vh to the floor
    const cardReach = 200;                       // half-height + edge-on bulge
    const startX = -0.30 * vw;
    // reference sits the start stack low — bottoms almost kissing the floor
    const startY = Math.min(0.39 * vh, 0.50 * vh - cardReach);
    // same guard on top for the landing stack, so it never tucks under the nav
    // 0.37vw parks the landing stack with a comfortable gap off the right edge
    const endX = 0.37 * vw;
    const endY = Math.max(-0.28 * vh, cardReach - 0.44 * vh);

    sCards.forEach((card, i) => {
      // card 01 leads; each next card starts a beat later but they all
      // travel the same diagonal path — that's the "chain" from the reference
      const p = Math.min(Math.max((deckProgress - i * stagger) / dur, 0), 1);
      const eased = p * p * (3 - 2 * p);         // smoothstep: soft launch & landing

      const x = lerp(startX, endX, eased) - i * peek;
      const y = lerp(startY, endY, eased);
      // both stacks tilt toward screen center: start (left stack) +28°,
      // landing (right stack) −28°, passing face-on mid-flight
      const tiltY = lerp(tiltRest, -tiltRest, eased);

      // perspective lives on each card (like the reference), so every card
      // tilts identically around its own center instead of warping at the edges
      card.style.transform =
        `translate(${x}px, ${y}px) perspective(1200px) rotateY(${tiltY}deg)`;

      // stacking order flips over the journey: while waiting, 01 sits on top;
      // once a card takes off it rides above everything and each new arrival
      // lands ON TOP of the previous one — so the right stack shows 04 in
      // front with 03/02/01 peeking out to the right (the layered look)
      card.style.zIndex = p > 0 ? 20 + i : 10 - i;
    });
  }

  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

// ---------- 6. Typewriter CTA ----------
const phrases = [
  "Need a website?",
  "Need a brand refresh?",
  "Need motion design?",
  "Need a partner? Let's talk.",
];
const tw = document.getElementById("typewriter");
if (tw) {
  let pi = 0, ci = 0, deleting = false;
  (function loop() {
    const phrase = phrases[pi];
    tw.textContent = phrase.slice(0, ci);
    let delay = deleting ? 35 : 65;
    if (!deleting && ci === phrase.length) { deleting = true; delay = 1600; }
    else if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; delay = 400; }
    else ci += deleting ? -1 : 1;
    setTimeout(loop, delay);
  })();
}

// ---------- 7. FAQ: only one open at a time ----------
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(item => {
  item.addEventListener("toggle", () => {
    if (item.open) faqItems.forEach(o => { if (o !== item) o.open = false; });
  });
});

// ---------- 8. Mobile burger: simple jump menu ----------
document.getElementById("navBurger")?.addEventListener("click", () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
});
