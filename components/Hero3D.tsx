"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// Checks whether the browser/GPU can actually give us a WebGL context.
// Some environments (older devices, hardware acceleration disabled,
// sandboxed browsers, some CI/preview frames) report the API as present but
// refuse to create a context — that throws deep inside THREE.WebGLRenderer,
// so we test it ourselves first and skip the 3D scene entirely if it fails.
function isWebGLAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl2") || canvas.getContext("webgl"))
    );
  } catch {
    return false;
  }
}

// Renders a slow-turning constellation: one core (the group) with orbiting
// nodes (the companies) connected back to it — a literal picture of "one
// core, many companies." Runs on a transparent canvas so the CSS gradient
// behind it still shows through. Falls back to a static CSS version of the
// same idea if WebGL isn't available.
export default function Hero3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setSupported(isWebGLAvailable());
  }, []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !supported) return;

    const ORANGE = 0xff5a1f;
    const BLUE = 0x4d76ff;

    let width = mount.clientWidth;
    let height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 9);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      setSupported(false);
      return;
    }
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Group that we tilt gently with the mouse
    const rig = new THREE.Group();
    scene.add(rig);

    // Core
    const coreGeo = new THREE.IcosahedronGeometry(1.15, 1);
    const coreMat = new THREE.MeshBasicMaterial({ color: ORANGE, wireframe: true, transparent: true, opacity: 0.9 });
    const core = new THREE.Mesh(coreGeo, coreMat);
    rig.add(core);

    const coreGlowGeo = new THREE.IcosahedronGeometry(1.15, 1);
    const coreGlowMat = new THREE.MeshBasicMaterial({ color: ORANGE, transparent: true, opacity: 0.06 });
    const coreGlow = new THREE.Mesh(coreGlowGeo, coreGlowMat);
    coreGlow.scale.setScalar(1.6);
    rig.add(coreGlow);

    // Orbit nodes — company satellites
    interface Orbit {
      group: THREE.Group;
      speed: number;
    }
    const orbits: Orbit[] = [];
    const nodeConfigs = [
      { radius: 2.6, size: 0.32, color: BLUE, tilt: 0.3, speed: 0.18 },
      { radius: 3.4, size: 0.24, color: ORANGE, tilt: -0.5, speed: -0.13 },
      { radius: 4.1, size: 0.28, color: BLUE, tilt: 0.9, speed: 0.1 },
      { radius: 3.0, size: 0.2, color: ORANGE, tilt: -1.1, speed: -0.22 },
      { radius: 4.6, size: 0.22, color: BLUE, tilt: 1.4, speed: 0.08 },
    ];

    nodeConfigs.forEach((cfg) => {
      const orbitGroup = new THREE.Group();
      orbitGroup.rotation.x = cfg.tilt;
      orbitGroup.rotation.z = cfg.tilt * 0.6;

      const nodeGeo = new THREE.OctahedronGeometry(cfg.size, 0);
      const nodeMat = new THREE.MeshBasicMaterial({ color: cfg.color, wireframe: true });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(cfg.radius, 0, 0);
      orbitGroup.add(node);

      // Line connecting core to node
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(cfg.radius, 0, 0),
      ]);
      const lineMat = new THREE.LineBasicMaterial({ color: cfg.color, transparent: true, opacity: 0.25 });
      const line = new THREE.Line(lineGeo, lineMat);
      orbitGroup.add(line);

      // Faint full orbit ring
      const ringPoints: THREE.Vector3[] = [];
      const segments = 64;
      for (let i = 0; i <= segments; i++) {
        const a = (i / segments) * Math.PI * 2;
        ringPoints.push(new THREE.Vector3(Math.cos(a) * cfg.radius, 0, Math.sin(a) * cfg.radius));
      }
      const ringGeo = new THREE.BufferGeometry().setFromPoints(ringPoints);
      const ringMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.06 });
      const ring = new THREE.LineLoop(ringGeo, ringMat);
      orbitGroup.add(ring);

      rig.add(orbitGroup);
      orbits.push({ group: orbitGroup, speed: cfg.speed });
    });

    // Ambient particle field for depth
    const starCount = 220;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 20;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 4;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02, transparent: true, opacity: 0.5 });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // Mouse parallax
    const pointer = { x: 0, y: 0 };
    const targetRotation = { x: 0, y: 0 };
    const onPointerMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    };
    window.addEventListener("pointermove", onPointerMove);

    // Resize handling
    const onResize = () => {
      width = mount.clientWidth;
      height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    let frameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();

      core.rotation.y = t * 0.15;
      core.rotation.x = t * 0.08;
      coreGlow.rotation.y = -t * 0.05;

      orbits.forEach(({ group, speed }) => {
        group.rotation.y = t * speed;
      });

      stars.rotation.y = t * 0.01;

      targetRotation.x += (pointer.y * 0.25 - targetRotation.x) * 0.04;
      targetRotation.y += (pointer.x * 0.35 - targetRotation.y) * 0.04;
      rig.rotation.x = targetRotation.x;
      rig.rotation.y = targetRotation.y;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);

      [coreGeo, coreGlowGeo].forEach((g) => g.dispose());
      [coreMat, coreGlowMat].forEach((m) => m.dispose());
      starGeo.dispose();
      starMat.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Line || obj instanceof THREE.LineLoop) {
          obj.geometry.dispose();
          const mat = obj.material;
          if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
          else mat.dispose();
        }
      });
      renderer.dispose();
    };
  }, [supported]);

  if (supported === false) {
    return (
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Static CSS stand-in for the 3D constellation: a core with rings */}
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange/40" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue/25" />
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/20 blur-2xl" />
        <div className="absolute left-[62%] top-[35%] h-3 w-3 rounded-full bg-blue" />
        <div className="absolute left-[30%] top-[60%] h-2.5 w-2.5 rounded-full bg-orange" />
        <div className="absolute left-[70%] top-[68%] h-2 w-2 rounded-full bg-blue" />
      </div>
    );
  }

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}
