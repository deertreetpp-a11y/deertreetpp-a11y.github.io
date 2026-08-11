/* ============================================================
   YOURNAME® portfolio — interaction & scroll animation layer
   Written from scratch: IntersectionObserver reveals,
   word stagger, infinite 3D ticker, sticky card deck,
   count-up stats, and a typewriter CTA.
   ============================================================ */

// ---------- 1. Project ticker (build cards, duplicate for seamless loop) ----------
// the list and the card markup live in projects-list.js so the All Projects
// page renders exactly the same cards — no second copy to keep in sync
const track = document.getElementById("tickerTrack");
if (track) {
  const cards = PROJECTS.map(p => projectCard(p, "p-card")).join("");
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

// -- 5a. Projects ticker: endless drift, eases to a crawl on hover,
//        and can be grabbed and thrown by hand so nobody has to wait for a card
let tickerX = 0;
let tickerSpeed = 1.1;      // current px/frame
let tickerTarget = 1.1;     // desired px/frame
let tickerDragging = false;
let tickerFlick = 0;        // px/s carried over when the user lets go
if (track) {
  const stage = track.parentElement.parentElement;   // .ticker-3d (the visible box)
  stage.addEventListener("mouseenter", () => { if (!tickerDragging) tickerTarget = 0.15; });
  stage.addEventListener("mouseleave", () => { if (!tickerDragging) tickerTarget = 1.1; });

  // the track lives on a plane rotated ~40deg, so a pixel of mouse travel covers
  // more than a pixel of track — this keeps the card under the cursor
  const DRAG_GAIN = 1.35;
  const DRAG_SLOP = 6;        // px of travel before it counts as a drag, not a click
  let armed = false;          // pointer is down but hasn't moved enough yet
  let startX = 0, startTickerX = 0, moved = 0, lastX = 0, lastMove = 0;

  stage.style.cursor = "grab";
  stage.addEventListener("pointerdown", e => {
    if (e.button !== 0) return;
    // NOTE: capture is claimed only once a real drag starts. Capturing here
    // would retarget the click to the stage and the card link would never open.
    armed = true;
    moved = 0;
    startX = lastX = e.clientX;
    startTickerX = tickerX;
    lastMove = performance.now();
    tickerFlick = 0;
  });

  stage.addEventListener("pointermove", e => {
    if (!armed && !tickerDragging) return;
    const dx = e.clientX - startX;
    moved = Math.max(moved, Math.abs(dx));
    if (!tickerDragging) {
      if (moved < DRAG_SLOP) return;      // still just a click, leave it alone
      tickerDragging = true;
      armed = false;
      stage.setPointerCapture(e.pointerId);
      stage.style.cursor = "grabbing";
    }
    tickerX = startTickerX + dx * DRAG_GAIN;
    // running velocity, so letting go mid-swipe keeps the motion going
    const now = performance.now();
    const dt = Math.max(now - lastMove, 1) / 1000;
    tickerFlick = ((e.clientX - lastX) * DRAG_GAIN) / dt;
    lastX = e.clientX;
    lastMove = now;
  });

  const endDrag = e => {
    armed = false;
    if (!tickerDragging) return;
    tickerDragging = false;
    stage.style.cursor = "grab";
    if (e.pointerId != null && stage.hasPointerCapture?.(e.pointerId)) stage.releasePointerCapture(e.pointerId);
    // stale velocity (paused finger before release) shouldn't throw the track
    if (performance.now() - lastMove > 120) tickerFlick = 0;
    tickerFlick = Math.max(Math.min(tickerFlick, 4000), -4000);
    // still hovering after letting go? stay at the slow browse speed
    tickerTarget = stage.matches(":hover") ? 0.15 : 1.1;
  };
  stage.addEventListener("pointerup", endDrag);
  stage.addEventListener("pointercancel", endDrag);

  // a drag that travelled shouldn't also count as a click on the card underneath
  stage.addEventListener("click", e => {
    if (moved > DRAG_SLOP) { e.preventDefault(); e.stopPropagation(); }
    moved = 0;
  }, true);

  // trackpad / horizontal wheel nudges it too; vertical wheel is left alone
  // so the page keeps scrolling normally
  stage.addEventListener("wheel", e => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      tickerX -= e.deltaX;
    }
  }, { passive: false });
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
    if (!tickerDragging) {
      tickerSpeed = lerp(tickerSpeed, tickerTarget, k);
      tickerX -= tickerSpeed * dt * 66;         // px/s, frame-rate independent
      if (tickerFlick) {                        // throw from a release, decaying
        tickerX += tickerFlick * dt;
        tickerFlick *= Math.exp(-dt * 3.2);
        if (Math.abs(tickerFlick) < 20) tickerFlick = 0;
      }
    }
    // the track is the card list twice over, so it can wrap either way and
    // the seam never shows — however far the user throws it
    const half = track.scrollWidth / 2;
    if (half > 0) {
      while (-tickerX >= half) tickerX += half;
      while (tickerX > 0) tickerX -= half;
    }
    track.style.transform = `translateX(${tickerX}px)`;
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
    // both stacks keep the SAME breathing room to their outer screen edge:
    // solve each stack's x from the gap instead of guessing vw fractions
    const sideGap = 0.045 * vw;                  // outer margin, both stacks
    const halfW = 99;    // near-edge half width: 129.5·cos45°·1200/(1200−129.5·sin45°)
    const startX = sideGap + halfW + (n - 1) * peek - vw / 2;
    // reference sits the start stack low — bottoms almost kissing the floor
    const startY = Math.min(0.39 * vh, 0.50 * vh - cardReach);
    // same guard on top for the landing stack, so it never tucks under the nav
    const endX = vw / 2 - sideGap - halfW;
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

// ---------- 6a. Typewriter CTA ----------
// phrases live in i18n.js (window.i18nPhrases) so the TH/EN toggle swaps them live
const tw = document.getElementById("typewriter");
if (tw) {
  let pi = 0, ci = 0, deleting = false;
  (function loop() {
    const phrases = window.i18nPhrases[window.currentLang];
    const phrase = phrases[pi % phrases.length];
    tw.textContent = phrase.slice(0, Math.min(ci, phrase.length));
    let delay = deleting ? 35 : 65;
    if (!deleting && ci >= phrase.length) { deleting = true; ci = phrase.length; delay = 1600; }
    else if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; delay = 400; }
    else ci += deleting ? -1 : 1;
    setTimeout(loop, delay);
  })();
}

// ---------- 6b. Contact form: validate, then open a prefilled email ----------
const cf = document.getElementById("contactForm");
if (cf) {
  const ERR = {
    en: { name: "Full name must be at least 2 characters", email: "Please enter a valid email address", msg: "Message must be at least 10 characters" },
    th: { name: "กรุณากรอกชื่ออย่างน้อย 2 ตัวอักษร", email: "กรุณากรอกอีเมลให้ถูกต้อง", msg: "กรุณาเขียนข้อความอย่างน้อย 10 ตัวอักษร" },
  };
  const fields = {
    name:  { el: document.getElementById("cfName"),  err: document.getElementById("errName"),  ok: v => v.trim().length >= 2 },
    email: { el: document.getElementById("cfEmail"), err: document.getElementById("errEmail"), ok: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
    msg:   { el: document.getElementById("cfMsg"),   err: document.getElementById("errMsg"),   ok: v => v.trim().length >= 10 },
  };
  Object.values(fields).forEach(f => f.el.addEventListener("input", () => f.err.classList.remove("show")));
  cf.addEventListener("submit", e => {
    e.preventDefault();
    const lang = window.currentLang === "th" ? "th" : "en";
    let bad = false;
    for (const [k, f] of Object.entries(fields)) {
      if (!f.ok(f.el.value)) { f.err.textContent = ERR[lang][k]; f.err.classList.add("show"); if (!bad) f.el.focus(); bad = true; }
    }
    if (bad) return;
    const name = fields.name.el.value.trim(), mail = fields.email.el.value.trim(), msg = fields.msg.el.value.trim();
    const subject = encodeURIComponent(`Portfolio contact — ${name}`);
    const body = encodeURIComponent(`${msg}\n\n— ${name} (${mail})`);
    location.href = `mailto:suprawee.m@kkumail.com?subject=${subject}&body=${body}`;
  });
}

// ---------- 8. Nav: collapse to a mini pill while scrolling down ----------
const nav = document.getElementById("nav");
let navLastY = scrollY;
addEventListener("scroll", () => {
  const y = scrollY;
  if (y > navLastY + 4 && y > 140) nav.classList.add("nav-mini");
  else if (y < navLastY - 4 || y <= 140) nav.classList.remove("nav-mini");
  navLastY = y;
}, { passive: true });
document.getElementById("navDots")?.addEventListener("click", () => {
  nav.classList.remove("nav-mini");
  navLastY = scrollY;
});

// ---------- 9. Mobile burger: simple jump menu ----------
document.getElementById("navBurger")?.addEventListener("click", () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
});

// ---------- 10. Come back to where you left off ----------
// Leaving for a case page and pressing Back should put you back at the card you
// were looking at, not at the top of the site. The browser's own restore fires
// before the ticker cards exist (the page is still short at that moment), so it
// lands at 0 — we save the offset ourselves and re-apply it after layout.
(function () {
  const KEY = "homeScrollY";
  // take the wheel from the browser: its own restore fires too early here
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";

  const save = () => sessionStorage.setItem(KEY, String(scrollY));
  addEventListener("pagehide", save);
  // pagehide can be skipped on some in-page navigations, so also save the
  // moment a card is clicked — that's the exact position worth keeping
  addEventListener("click", e => { if (e.target.closest("a[href]")) save(); }, true);

  const nav = performance.getEntriesByType("navigation")[0];
  const wentBack = nav && nav.type === "back_forward";
  let from = null;
  try { from = document.referrer ? new URL(document.referrer, location.href) : null; } catch {}
  const cameFromCase = from && from.origin === location.origin &&
    /\/(project|projects)\.html$/.test(from.pathname);

  const saved = Number(sessionStorage.getItem(KEY) || 0);
  if ((wentBack || cameFromCase) && saved > 0) {
    const put = () => scrollTo(0, saved);
    put();
    requestAnimationFrame(() => requestAnimationFrame(put));
    addEventListener("load", put);            // again once images settle the height
    setTimeout(put, 250);                     // and once more after fonts/images reflow
  }

  // returning through bfcache: the page is resurrected with no script re-run,
  // so put the position back on the way in
  addEventListener("pageshow", e => {
    if (!e.persisted) return;
    const y = Number(sessionStorage.getItem(KEY) || 0);
    if (y > 0) scrollTo(0, y);
  });
})();
