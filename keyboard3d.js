/* ============================================================
   3D Tech-Stack keyboard (nareshkhatri.site style):
   sculpted tapered keycaps, logo printed on the top face,
   tight layout on a chunky dark base, fixed 3/4 angle.
   Pressing a key pops the tool name + a one-liner beside it
   (kbCallout) and plays key.mp3. Drag rotates; zoom disabled.
   Render loop pauses while offscreen.
   ============================================================ */
(function () {
  const wrap = document.getElementById("kb3d");
  // LOGO_DATA is a top-level const in logos-data.js (not a window property)
  if (!wrap || !window.THREE || typeof LOGO_DATA === "undefined") return;

  const canvas = document.getElementById("kbCanvas");
  const calloutEl = document.getElementById("kbCallout");
  const calloutName = document.getElementById("kbCalloutName");
  const calloutQuote = document.getElementById("kbCalloutQuote");

  // one-liners shown when a key is pressed (en/th follows the site toggle)
  const QUOTES = {
    Claude:   { en: "the one I actually build with.",      th: "ตัวที่ผมใช้ลงมือสร้างงานจริง" },
    ChatGPT:  { en: "product shots, ideas, fast answers.",  th: "ทำภาพสินค้า คิดไอเดีย ตอบไว" },
    Gemini:   { en: "reads the whole pile, then answers.",  th: "อ่านทั้งกองก่อนค่อยตอบ" },
    Cursor:   { en: "the editor that types along with me.", th: "อีดิเตอร์ที่พิมพ์ไปพร้อมกับผม" },
    Figma:    { en: "where the design gets decided.",       th: "ที่ที่งานดีไซน์ถูกเคาะ" },
    GitHub:   { en: "every version, kept.",                 th: "เก็บไว้ทุกเวอร์ชัน" },
    Terminal: { en: "where it actually runs.",              th: "ที่ที่งานมันรันจริง" },
    Notion:   { en: "everything I'd otherwise forget.",     th: "ที่เก็บทุกอย่างที่ผมจะลืม" },
    CapCut:   { en: "the last trim, done by hand.",         th: "เก็บรายละเอียดคลิปด้วยมือ" },
    Canva:    { en: "a good-looking graphic in minutes.",   th: "งานกราฟิกสวย ๆ ในไม่กี่นาที" },
    Docs:     { en: "where the writing happens.",           th: "ที่ที่งานเขียนเกิดขึ้น" },
    Excel:    { en: "numbers before opinions.",             th: "ดูตัวเลขก่อนค่อยเถียงกัน" },
    Manus:        { en: "give it a goal, walk away.",       th: "สั่งเป้าหมายแล้วเดินไปทำอย่างอื่น" },
    Hermes:       { en: "an agent that finishes the job.",  th: "เอเจนต์ที่ทำงานจนจบ" },
    NotebookLM:   { en: "a pile of sources, made answerable.", th: "เปลี่ยนกองเอกสารให้ถามตอบได้" },
    "VS Code":    { en: "still where the real work opens.", th: "สุดท้ายก็กลับมาเปิดตัวนี้" },
    v0:           { en: "one prompt, a screen to react to.", th: "พิมพ์ครั้งเดียว ได้หน้าจอมาให้ติ" },
    Colab:        { en: "someone else's GPU.",              th: "GPU ที่ไม่ต้องซื้อเอง" },
    Higgsfield:   { en: "shots I could never afford to film.", th: "ช็อตที่ถ่ายเองไม่ไหว" },
    HeyGen:       { en: "one take, many languages.",        th: "อัดครั้งเดียว พูดได้หลายภาษา" },
    Suno:         { en: "a soundtrack that fits the cut.",  th: "เพลงประกอบที่เข้ากับคลิปพอดี" },
    n8n:          { en: "the boring part, automated.",      th: "งานซ้ำ ๆ ปล่อยให้มันวิ่งเอง" },
    "Google Labs":{ en: "trying things before they ship.",  th: "ได้ลองของก่อนใครเขา" },
    OpenClaw:     { en: "picks up the small jobs.",         th: "เก็บงานจุกจิกให้หมด" },
  };

  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  cam.position.set(-1.3, 10.9, 5.4);   // steep top-down, slight left yaw (user's reference pose)
  const rnd = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  rnd.setPixelRatio(Math.min(devicePixelRatio, 2));

  scene.add(new THREE.AmbientLight(0xffffff, 0.38));
  const key = new THREE.DirectionalLight(0xffffff, 0.6); key.position.set(4, 9, 5); scene.add(key);
  const rim = new THREE.DirectionalLight(0x99bbff, 0.18); rim.position.set(-6, 4, -4); scene.add(rim);
  const fill = new THREE.DirectionalLight(0xffffff, 0.1); fill.position.set(0, 4, 8); scene.add(fill);

  const controls = new THREE.OrbitControls(cam, rnd.domElement);
  controls.enableDamping = true; controls.dampingFactor = 0.08;
  controls.autoRotate = false;
  controls.enableZoom = false;           // don't steal page scroll
  controls.enablePan = false;
  controls.maxPolarAngle = 1.45;
  controls.target.set(0, 0, 0);

  const board = new THREE.Group(); scene.add(board);
  const COLS = 6, ROWS = 4, GAP = 1.08, KS = 1.02;   // tight, real-keyboard spacing
  const bw = COLS * GAP + 0.6, bd = ROWS * GAP + 0.6;

  function roundedSlab(w, d, h, r, colorHex) {
    const sh = new THREE.Shape(), hw = w / 2, hd = d / 2;
    sh.absarc(-hw + r, -hd + r, r, Math.PI, Math.PI * 1.5);
    sh.absarc(hw - r, -hd + r, r, Math.PI * 1.5, 0);
    sh.absarc(hw - r, hd - r, r, 0, Math.PI * 0.5);
    sh.absarc(-hw + r, hd - r, r, Math.PI * 0.5, Math.PI);
    const g = new THREE.ExtrudeGeometry(sh, { depth: h, bevelEnabled: true, bevelThickness: 0.14, bevelSize: 0.14, bevelSegments: 4, curveSegments: 10 });
    g.rotateX(-Math.PI / 2); g.center();
    return new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: new THREE.Color(colorHex), roughness: 0.9, metalness: 0.08 }));
  }
  const base = roundedSlab(bw + 0.55, bd + 0.55, 0.85, 0.4, 0xEDEDEA);
  base.position.y = -0.62; board.add(base);

  // ---- sculpted keycap: tapered frustum sides + textured top face ----
  // rounded-rect outline as an array of points (fixed count for both rings)
  function outlinePts(size, r) {
    const hw = size / 2, seg = 5, pts = [];
    const corners = [
      [-hw + r, -hw + r, Math.PI, Math.PI * 1.5],
      [hw - r, -hw + r, Math.PI * 1.5, Math.PI * 2],
      [hw - r, hw - r, 0, Math.PI * 0.5],
      [-hw + r, hw - r, Math.PI * 0.5, Math.PI],
    ];
    for (const [cx, cz, a0, a1] of corners)
      for (let i = 0; i <= seg; i++) {
        const a = a0 + (a1 - a0) * i / seg;
        pts.push([cx + Math.cos(a) * r, cz + Math.sin(a) * r]);
      }
    return pts;
  }

  const CAP_H = 0.52, TOP_S = 0.74;   // tall cap, top face ~74% of bottom
  function keycapSides(colorHex) {
    const bo = outlinePts(KS, 0.16), to = outlinePts(KS * TOP_S, 0.12);
    const n = bo.length, pos = [], idx = [];
    for (let i = 0; i < n; i++) {
      pos.push(bo[i][0], 0, bo[i][1]);
      pos.push(to[i][0], CAP_H, to[i][1]);
    }
    for (let i = 0; i < n; i++) {
      const a = i * 2, b = i * 2 + 1, c = ((i + 1) % n) * 2, d = ((i + 1) % n) * 2 + 1;
      idx.push(a, b, c, c, b, d);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setIndex(idx);
    g.computeVertexNormals();
    return new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: new THREE.Color(colorHex), roughness: 0.55, metalness: 0.05, side: THREE.DoubleSide }));
  }

  // top face: rounded-rect ShapeGeometry with normalized UVs so the
  // logo texture prints straight onto the cap (no white plate)
  function keycapTop(tex) {
    const s = KS * TOP_S, hw = s / 2, r = 0.12;
    const sh = new THREE.Shape();
    sh.absarc(-hw + r, -hw + r, r, Math.PI, Math.PI * 1.5);
    sh.absarc(hw - r, -hw + r, r, Math.PI * 1.5, 0);
    sh.absarc(hw - r, hw - r, r, 0, Math.PI * 0.5);
    sh.absarc(-hw + r, hw - r, r, Math.PI * 0.5, Math.PI);
    const g = new THREE.ShapeGeometry(sh, 8);
    const uv = g.attributes.uv, p = g.attributes.position;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, p.getX(i) / s + 0.5, p.getY(i) / s + 0.5);
    g.rotateX(-Math.PI / 2);
    g.translate(0, CAP_H + 0.001, 0);
    return new THREE.Mesh(g, new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5, metalness: 0.04 }));
  }

  // cap-color square texture with the logo centered (cover logos fill it)
  function makeTex(src, bg, fit, cb) {
    const img = new Image();
    img.onload = () => {
      const s = 256, c = document.createElement("canvas"); c.width = c.height = s;
      const x = c.getContext("2d");
      x.fillStyle = bg; x.fillRect(0, 0, s, s);
      let w = img.width, h = img.height, sc;
      if (fit === "cover") { sc = Math.max(s / w, s / h); } else { const pad = 52, m = s - pad * 2; sc = Math.min(m / w, m / h); }
      w *= sc; h *= sc; x.drawImage(img, (s - w) / 2, (s - h) / 2, w, h);
      const t = new THREE.CanvasTexture(c); t.anisotropy = 8; cb(t);
    };
    img.src = src;
  }

  const keycaps = [], bodies = [];
  LOGO_DATA.forEach((logo, i) => {
    const col = i % COLS, row = Math.floor(i / COLS);
    const g = new THREE.Group();
    const body = keycapSides(logo.color); g.add(body);
    g.position.set((col - (COLS - 1) / 2) * GAP, 0, (row - (ROWS - 1) / 2) * GAP);
    g.userData = { name: logo.name, press: 0 };
    body.userData.group = g;
    board.add(g); keycaps.push(g); bodies.push(body);
    makeTex(logo.src, logo.color, logo.fit, t => {
      const top = keycapTop(t);
      top.userData.group = g;
      g.add(top); bodies.push(top);
    });
  });

  // raycast: hover lift + click press
  const ray = new THREE.Raycaster(), mouse = new THREE.Vector2();
  function setMouse(e) {
    const r = rnd.domElement.getBoundingClientRect();
    mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
  }
  let hovered = null, lastSnd = 0, hoverDwell;
  rnd.domElement.addEventListener("mousemove", e => {
    setMouse(e); ray.setFromCamera(mouse, cam);
    const hit = ray.intersectObjects(bodies)[0];
    const g = hit ? hit.object.userData.group : null;
    if (g && g !== hovered) {          // hovering presses the key by itself
      const now = performance.now();   // rate-limit so sweeping across keys doesn't machine-gun
      if (now - lastSnd > 130) { clickSound(); lastSnd = now; }
      clearTimeout(hoverDwell);        // callout only once the mouse settles on a key
      hoverDwell = setTimeout(() => { if (hovered === g) showCallout(g.userData.name); }, 90);
    }
    hovered = g;
    rnd.domElement.style.cursor = hit ? "pointer" : "grab";
  });

  const sndPool = Array.from({ length: 5 }, () => { const a = new Audio("assets/audio/key.mp3"); a.volume = 0.5; return a; });
  let sndI = 0;
  function clickSound() { try { const a = sndPool[sndI = (sndI + 1) % sndPool.length]; a.currentTime = 0; a.play().catch(() => {}); } catch (e) {} }

  let calloutTimer;
  function showCallout(name) {
    const q = QUOTES[name];
    calloutName.textContent = name;
    calloutQuote.textContent = q ? q[window.currentLang === "th" ? "th" : "en"] : "";
    calloutEl.classList.remove("pop");
    void calloutEl.offsetWidth;          // restart the pop animation
    calloutEl.classList.add("pop");
    clearTimeout(calloutTimer);
    calloutTimer = setTimeout(() => calloutEl.classList.remove("pop"), 2600);
  }

  rnd.domElement.addEventListener("click", e => {
    setMouse(e); ray.setFromCamera(mouse, cam);
    const hit = ray.intersectObjects(bodies)[0];
    if (hit) {
      const g = hit.object.userData.group;
      g.userData.press = 1;
      clickSound();
      showCallout(g.userData.name);
    }
  });

  function size() {
    const w = wrap.clientWidth, h = wrap.clientHeight;
    cam.aspect = w / h; cam.updateProjectionMatrix();
    rnd.setSize(w, h);
  }
  size();
  addEventListener("resize", size);

  // render only while the section is on screen
  let visible = false;
  new IntersectionObserver(es => { visible = es[0].isIntersecting; }, { rootMargin: "100px" }).observe(wrap);

  (function loop() {
    requestAnimationFrame(loop);
    if (!visible) return;
    keycaps.forEach(k => {
      const target = (k === hovered || k.userData.press > 0) ? -0.24 : 0;   // stays pressed while hovered
      k.position.y += (target - k.position.y) * 0.35;
      if (k.userData.press > 0) { k.userData.press -= 0.06; if (k.userData.press < 0) k.userData.press = 0; }
    });
    controls.update(); rnd.render(scene, cam);
  })();
})();
