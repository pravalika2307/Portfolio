import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Respect reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Master Group for mouse parallax & rotations
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Color Palette: Obsidian + Burnt Orange + Warm Apricot
    const COLOR_BURNT_ORANGE = 0xff6b35;
    const COLOR_WARM_APRICOT = 0xffb36b;
    const COLOR_OBSIDIAN = 0x18181d;
    const COLOR_CORE_DARK = 0x24242e;

    // 1. Central Faceted Intelligence Core (Physical Obsidian Sculpture)
    const coreGeom = new THREE.IcosahedronGeometry(3.6, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: COLOR_CORE_DARK,
      roughness: 0.18,
      metalness: 0.9,
      flatShading: true
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    masterGroup.add(coreMesh);

    // Outer Wireframe Cage on the Core
    const cageGeom = new THREE.IcosahedronGeometry(3.85, 0);
    const cageMat = new THREE.MeshBasicMaterial({
      color: COLOR_BURNT_ORANGE,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const cageMesh = new THREE.Mesh(cageGeom, cageMat);
    masterGroup.add(cageMesh);

    // Inner Glowing Energy Octahedron
    const innerGeom = new THREE.OctahedronGeometry(2.0, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: COLOR_BURNT_ORANGE,
      wireframe: true,
      transparent: true,
      opacity: 0.85
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    masterGroup.add(innerMesh);

    // Core Solid Energy Nucleus
    const nucleusGeom = new THREE.SphereGeometry(0.75, 16, 16);
    const nucleusMat = new THREE.MeshBasicMaterial({
      color: COLOR_WARM_APRICOT
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeom, nucleusMat);
    masterGroup.add(nucleusMesh);

    // 2. Dual Gyroscopic Precision Rings
    const ring1Geom = new THREE.TorusGeometry(5.8, 0.05, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: COLOR_BURNT_ORANGE,
      roughness: 0.2,
      metalness: 0.9
    });
    const ring1Mesh = new THREE.Mesh(ring1Geom, ring1Mat);
    ring1Mesh.rotation.x = Math.PI / 3;
    masterGroup.add(ring1Mesh);

    const ring2Geom = new THREE.TorusGeometry(7.2, 0.04, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: COLOR_WARM_APRICOT,
      roughness: 0.25,
      metalness: 0.85
    });
    const ring2Mesh = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2Mesh.rotation.y = Math.PI / 4;
    ring2Mesh.rotation.z = Math.PI / 6;
    masterGroup.add(ring2Mesh);

    // 3. Floating Geometric Shards (Levitating Systems & Intelligence Modules)
    const shardCount = 8;
    const shardGeom = new THREE.TetrahedronGeometry(0.55, 0);
    const shardMat = new THREE.MeshStandardMaterial({
      color: COLOR_OBSIDIAN,
      roughness: 0.15,
      metalness: 0.95,
      flatShading: true
    });
    const shardWireMat = new THREE.MeshBasicMaterial({
      color: COLOR_WARM_APRICOT,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });

    const shards = [];
    for (let i = 0; i < shardCount; i++) {
      const shardGroup = new THREE.Group();

      const sMesh = new THREE.Mesh(shardGeom, shardMat);
      const sWire = new THREE.Mesh(shardGeom, shardWireMat);
      sWire.scale.set(1.08, 1.08, 1.08);
      shardGroup.add(sMesh);
      shardGroup.add(sWire);

      const angle = (i / shardCount) * Math.PI * 2;
      const radius = 5.2 + (i % 2) * 1.4;
      const heightOffset = ((i % 3) - 1) * 1.8;

      shardGroup.position.set(
        Math.cos(angle) * radius,
        heightOffset,
        Math.sin(angle) * radius
      );

      masterGroup.add(shardGroup);
      shards.push({
        group: shardGroup,
        baseAngle: angle,
        radius,
        baseY: heightOffset,
        speed: 0.35 + (i % 3) * 0.12,
        rotSpeed: 0.8 + (i % 2) * 0.4
      });
    }

    // 4. Ambient Stardust Particles
    const particleCount = 70;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particlePositions[i3] = (Math.random() - 0.5) * 20;
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 20;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 14;
    }
    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: COLOR_WARM_APRICOT,
      size: 0.14,
      transparent: true,
      opacity: 0.55
    });
    const particlePoints = new THREE.Points(particleGeom, particleMat);
    masterGroup.add(particlePoints);

    // 5. Realistic Physical Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    // Key Light (Burnt Orange)
    const keyLight = new THREE.PointLight(COLOR_BURNT_ORANGE, 3.8, 40);
    keyLight.position.set(10, 12, 12);
    scene.add(keyLight);

    // Fill Light (Warm Apricot)
    const fillLight = new THREE.PointLight(COLOR_WARM_APRICOT, 2.4, 40);
    fillLight.position.set(-12, -8, 8);
    scene.add(fillLight);

    // Rim Directional Light for edge definition
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.9);
    rimLight.position.set(0, 15, -10);
    scene.add(rimLight);

    // Mouse Interaction Logic
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = mouseX * 0.8;
      targetY = mouseY * 0.8;

      if (isDragging) {
        const dx = e.clientX - prevMouse.x;
        const dy = e.clientY - prevMouse.y;
        masterGroup.rotation.y += dx * 0.01;
        masterGroup.rotation.x += dy * 0.01;
        prevMouse = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseDown = (e) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousedown', onMouseDown);

    // Scroll Reaction
    let scrollYOffset = 0;
    const onScroll = () => {
      scrollYOffset = window.scrollY * 0.0008;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Resize
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Visibility Observer
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const time = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Inertia dampening for mouse
        currentX += (targetX - currentX) * 0.06;
        currentY += (targetY - currentY) * 0.06;

        if (!isDragging) {
          masterGroup.rotation.y = time * 0.16 + currentX + scrollYOffset * 1.2;
          masterGroup.rotation.x = Math.sin(time * 0.14) * 0.15 + currentY * 0.45;
        }

        // Floating respiration
        masterGroup.position.y = Math.sin(time * 0.9) * 0.22;

        // Core polyhedral rotation
        coreMesh.rotation.y = -time * 0.2;
        coreMesh.rotation.z = time * 0.15;
        cageMesh.rotation.y = time * 0.25;
        innerMesh.rotation.y = -time * 0.45;
        innerMesh.rotation.x = time * 0.3;

        // Core breathing pulse
        const pulse = 1 + Math.sin(time * 1.8) * 0.035;
        nucleusMesh.scale.set(pulse, pulse, pulse);

        // Gimbal ring rotations
        ring1Mesh.rotation.z = time * 0.22;
        ring2Mesh.rotation.x = -time * 0.26;

        // Levitating shards orbital float
        shards.forEach((s) => {
          const curAngle = s.baseAngle + time * s.speed;
          s.group.position.x = Math.cos(curAngle) * s.radius;
          s.group.position.z = Math.sin(curAngle) * s.radius;
          s.group.position.y = s.baseY + Math.sin(time * 1.5 + s.radius) * 0.45;
          s.group.rotation.x = time * s.rotSpeed;
          s.group.rotation.y = time * (s.rotSpeed * 0.8);
        });

        // Slow stardust drift
        particlePoints.rotation.y = time * 0.04;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (container) {
        container.removeEventListener('mousedown', onMouseDown);
        if (renderer.domElement) container.removeChild(renderer.domElement);
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);

      coreGeom.dispose();
      coreMat.dispose();
      cageGeom.dispose();
      cageMat.dispose();
      innerGeom.dispose();
      innerMat.dispose();
      nucleusGeom.dispose();
      nucleusMat.dispose();
      ring1Geom.dispose();
      ring1Mat.dispose();
      ring2Geom.dispose();
      ring2Mat.dispose();
      shardGeom.dispose();
      shardMat.dispose();
      shardWireMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[360px] md:min-h-[440px] relative cursor-grab active:cursor-grabbing select-none"
      aria-label="Interactive 3D Digital Intelligence Sculpture"
    />
  );
}
