/* ============================================================
   3D keyboard (from Dear's keyboard3d-draft) embedded in #about.
   Differences from the fullscreen draft: renders into the .kb3d
   container with a transparent background, scroll-zoom disabled
   so the page keeps scrolling normally, and the render loop
   pauses while the section is offscreen.
   ============================================================ */
(function () {
  const wrap = document.getElementById("kb3d");
  // LOGO_DATA is a top-level const in logos-data.js (not a window property)
  if (!wrap || !window.THREE || typeof LOGO_DATA === "undefined") return;

  const canvas = document.getElementById("kbCanvas");
  const labelEl = document.getElementById("kbLabel");

  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  cam.position.set(0, 6, 8);
  const rnd = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  rnd.setPixelRatio(Math.min(devicePixelRatio, 2));

  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  const key = new THREE.DirectionalLight(0xffe6c8, 0.75); key.position.set(4, 9, 5); scene.add(key);
  const rim = new THREE.DirectionalLight(0xf3a866, 0.3); rim.position.set(-6, 4, -4); scene.add(rim);
  const fill = new THREE.DirectionalLight(0xffffff, 0.25); fill.position.set(0, 4, 8); scene.add(fill);

  const controls = new THREE.OrbitControls(cam, rnd.domElement);
  controls.enableDamping = true; controls.dampingFactor = 0.08;
  controls.autoRotate = true; controls.autoRotateSpeed = 0.9;
  controls.enableZoom = false;           // don't steal page scroll
  controls.enablePan = false;
  controls.maxPolarAngle = 1.45;
  controls.target.set(0, 0, 0);

  const board = new THREE.Group(); scene.add(board);
  const COLS = 4, ROWS = 3, GAP = 1.18, KS = 1.0;
  const bw = COLS * GAP + 0.5, bd = ROWS * GAP + 0.5;

  function roundedSlab(w, d, h, r, colorHex) {
    const sh = new THREE.Shape(), hw = w / 2, hd = d / 2;
    sh.absarc(-hw + r, -hd + r, r, Math.PI, Math.PI * 1.5);
    sh.absarc(hw - r, -hd + r, r, Math.PI * 1.5, 0);
    sh.absarc(hw - r, hd - r, r, 0, Math.PI * 0.5);
    sh.absarc(-hw + r, hd - r, r, Math.PI * 0.5, Math.PI);
    const g = new THREE.ExtrudeGeometry(sh, { depth: h, bevelEnabled: true, bevelThickness: 0.12, bevelSize: 0.12, bevelSegments: 4, curveSegments: 10 });
    g.rotateX(-Math.PI / 2); g.center();
    return new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: new THREE.Color(colorHex), roughness: 0.85, metalness: 0.1 }));
  }
  const base = roundedSlab(bw + 0.5, bd + 0.5, 0.7, 0.45, 0x121212);
  base.position.y = -0.55; board.add(base);

  // white rounded-square canvas texture with the logo centered
  function makeTex(src, bg, fit, cb) {
    const img = new Image();
    img.onload = () => {
      const s = 256, c = document.createElement("canvas"); c.width = c.height = s;
      const x = c.getContext("2d");
      const r = 46; x.fillStyle = bg; x.beginPath();
      x.moveTo(r, 0); x.arcTo(s, 0, s, s, r); x.arcTo(s, s, 0, s, r); x.arcTo(0, s, 0, 0, r); x.arcTo(0, 0, s, 0, r); x.closePath(); x.fill();
      x.save(); x.clip();
      let w = img.width, h = img.height, sc;
      if (fit === "cover") { sc = Math.max(s / w, s / h); } else { const pad = 40, m = s - pad * 2; sc = Math.min(m / w, m / h); }
      w *= sc; h *= sc; x.drawImage(img, (s - w) / 2, (s - h) / 2, w, h); x.restore();
      const t = new THREE.CanvasTexture(c); t.anisotropy = 4; cb(t);
    };
    img.src = src;
  }

  function roundedKeycap(size, height, radius, colorHex) {
    const sh = new THREE.Shape(), hw = size / 2;
    sh.absarc(-hw + radius, -hw + radius, radius, Math.PI, Math.PI * 1.5);
    sh.absarc(hw - radius, -hw + radius, radius, Math.PI * 1.5, 0);
    sh.absarc(hw - radius, hw - radius, radius, 0, Math.PI * 0.5);
    sh.absarc(-hw + radius, hw - radius, radius, Math.PI * 0.5, Math.PI);
    const geo = new THREE.ExtrudeGeometry(sh, { depth: height, bevelEnabled: true, bevelThickness: 0.07, bevelSize: 0.07, bevelSegments: 3, curveSegments: 8 });
    geo.rotateX(-Math.PI / 2); geo.center();
    return new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: new THREE.Color(colorHex), roughness: 0.62, metalness: 0.04 }));
  }

  const keycaps = [], bodies = [];
  LOGO_DATA.forEach((logo, i) => {
    const col = i % COLS, row = Math.floor(i / COLS);
    const g = new THREE.Group();
    const body = roundedKeycap(KS, 0.4, 0.17, logo.color); g.add(body);
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(KS * 0.96, KS * 0.96),
      new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false })
    );
    plane.rotation.x = -Math.PI / 2; plane.position.y = 0.285; g.add(plane);
    g.position.set((col - (COLS - 1) / 2) * GAP, 0, (row - (ROWS - 1) / 2) * GAP);
    g.userData = { name: logo.name, press: 0 };
    body.userData.group = g;
    board.add(g); keycaps.push(g); bodies.push(body);
    makeTex(logo.src, logo.color, logo.fit, t => { plane.material.map = t; plane.material.needsUpdate = true; });
  });

  // hover label + click press (label positioned inside the wrapper)
  const ray = new THREE.Raycaster(), mouse = new THREE.Vector2();
  function setMouse(e) {
    const r = rnd.domElement.getBoundingClientRect();
    mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
  }
  let hovered = null;
  rnd.domElement.addEventListener("mousemove", e => {
    setMouse(e); ray.setFromCamera(mouse, cam);
    const hit = ray.intersectObjects(bodies)[0];
    const wr = wrap.getBoundingClientRect();
    if (hit) {
      hovered = hit.object.userData.group;
      labelEl.textContent = hovered.userData.name;
      labelEl.style.left = (e.clientX - wr.left) + "px";
      labelEl.style.top = (e.clientY - wr.top) + "px";
      labelEl.style.opacity = 1;
      rnd.domElement.style.cursor = "pointer";
    } else {
      hovered = null; labelEl.style.opacity = 0; rnd.domElement.style.cursor = "grab";
    }
  });

  const sndPool = Array.from({ length: 5 }, () => { const a = new Audio("assets/audio/key.mp3"); a.volume = 0.5; return a; });
  let sndI = 0;
  function clickSound() { try { const a = sndPool[sndI = (sndI + 1) % sndPool.length]; a.currentTime = 0; a.play().catch(() => {}); } catch (e) {} }
  rnd.domElement.addEventListener("click", e => {
    setMouse(e); ray.setFromCamera(mouse, cam);
    const hit = ray.intersectObjects(bodies)[0];
    if (hit) { hit.object.userData.group.userData.press = 1; clickSound(); }
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
      const target = (k.userData.press > 0 ? -0.22 : 0) + (k === hovered ? 0.06 : 0);
      k.position.y += (target - k.position.y) * 0.35;
      if (k.userData.press > 0) { k.userData.press -= 0.06; if (k.userData.press < 0) k.userData.press = 0; }
    });
    controls.update(); rnd.render(scene, cam);
  })();
})();
