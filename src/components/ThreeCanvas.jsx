import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Master Group for mouse parallax & scroll transformation
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Warm Burnt Orange & Apricot Color Palette
    const COLOR_BURNT_ORANGE = 0xff6b35;
    const COLOR_WARM_APRICOT = 0xffb36b;
    const COLOR_OBSIDIAN_CORE = 0x24242a;

    // 1. Central Faceted Polyhedral Core (Software Core)
    const coreGeometry = new THREE.IcosahedronGeometry(4.4, 1);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: COLOR_OBSIDIAN_CORE,
      roughness: 0.35,
      metalness: 0.85,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    masterGroup.add(coreMesh);

    // 2. Inner Glowing Octahedron Core (AI Engine)
    const innerGeometry = new THREE.OctahedronGeometry(2.2, 0);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: COLOR_BURNT_ORANGE,
      wireframe: true,
      transparent: true,
      opacity: 0.85
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    masterGroup.add(innerMesh);

    // 3. Gyroscopic Dual Orbital Rings (Connected Systems & Feedback Loops)
    const ringGeometry1 = new THREE.TorusGeometry(6.6, 0.05, 16, 100);
    const ringMaterial1 = new THREE.MeshBasicMaterial({
      color: COLOR_BURNT_ORANGE,
      transparent: true,
      opacity: 0.6
    });
    const ringMesh1 = new THREE.Mesh(ringGeometry1, ringMaterial1);
    ringMesh1.rotation.x = Math.PI / 3;
    masterGroup.add(ringMesh1);

    const ringGeometry2 = new THREE.TorusGeometry(7.8, 0.04, 16, 100);
    const ringMaterial2 = new THREE.MeshBasicMaterial({
      color: COLOR_WARM_APRICOT,
      transparent: true,
      opacity: 0.4
    });
    const ringMesh2 = new THREE.Mesh(ringGeometry2, ringMaterial2);
    ringMesh2.rotation.y = Math.PI / 4;
    ringMesh2.rotation.z = Math.PI / 6;
    masterGroup.add(ringMesh2);

    // 4. Distributed Microservice Nodes (Spheres with connections)
    const nodeCount = 32;
    const nodeGeometry = new THREE.SphereGeometry(0.16, 12, 12);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: COLOR_WARM_APRICOT,
      transparent: true,
      opacity: 0.95
    });

    const nodePositions = [];
    const radius = 6.2;

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      nodePositions.push(new THREE.Vector3(x, y, z));

      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(x, y, z);
      masterGroup.add(node);
    }

    // Connecting Network Rays
    const linePositions = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < 4.0) {
          linePositions.push(
            nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
            nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
          );
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    const lineMaterial = new THREE.LineBasicMaterial({
      color: COLOR_BURNT_ORANGE,
      transparent: true,
      opacity: 0.25
    });
    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    masterGroup.add(linesMesh);

    // 5. Orbiting Data Packet Satellites
    const packetCount = 6;
    const packetGeometry = new THREE.SphereGeometry(0.22, 12, 12);
    const packetMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9
    });

    const packets = [];
    for (let i = 0; i < packetCount; i++) {
      const p = new THREE.Mesh(packetGeometry, packetMaterial);
      masterGroup.add(p);
      packets.push({
        mesh: p,
        speed: 0.45 + i * 0.15,
        radius: 6.6 + (i % 2) * 1.2,
        angle: (i * 2 * Math.PI) / packetCount,
        inclination: (i * Math.PI) / packetCount
      });
    }

    // 6. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(COLOR_BURNT_ORANGE, 2.5, 50);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(COLOR_WARM_APRICOT, 1.8, 50);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // Mouse Parallax Logic
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = mouseX * 0.8;
      targetY = mouseY * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Scroll Transformation
    let scrollYOffset = 0;
    const handleScroll = () => {
      scrollYOffset = window.scrollY * 0.001;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Window Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Viewport Visibility Observer (pause when out of sight)
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

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Inertia dampening
        currentX += (targetX - currentX) * 0.06;
        currentY += (targetY - currentY) * 0.06;

        masterGroup.rotation.y = elapsedTime * 0.2 + currentX + scrollYOffset * 1.5;
        masterGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.2 + currentY * 0.5;

        // Individual orbital ring counter-rotations
        ringMesh1.rotation.z = elapsedTime * 0.25;
        ringMesh2.rotation.x = -elapsedTime * 0.3;

        // Inner core rotation
        innerMesh.rotation.y = -elapsedTime * 0.45;
        innerMesh.rotation.z = elapsedTime * 0.35;

        // Core scale pulse
        const pulse = 1 + Math.sin(elapsedTime * 1.8) * 0.035;
        coreMesh.scale.set(pulse, pulse, pulse);

        // Orbiting data satellites
        packets.forEach((p) => {
          p.angle += delta * p.speed;
          p.mesh.position.x = Math.cos(p.angle) * p.radius * Math.cos(p.inclination);
          p.mesh.position.y = Math.sin(p.angle) * p.radius;
          p.mesh.position.z = Math.cos(p.angle) * p.radius * Math.sin(p.inclination);
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      coreGeometry.dispose();
      coreMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      ringGeometry1.dispose();
      ringMaterial1.dispose();
      ringGeometry2.dispose();
      ringMaterial2.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      packetGeometry.dispose();
      packetMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[360px] md:min-h-[440px] relative cursor-grab active:cursor-grabbing select-none"
      aria-label="Interactive 3D System Topology Mesh"
    />
  );
}
