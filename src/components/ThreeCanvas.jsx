import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Group for mouse parallax
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Icosahedron Wireframe (System Core)
    const coreGeometry = new THREE.IcosahedronGeometry(4.2, 1);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreMesh);

    // 2. Inner Solid Lattice
    const innerGeometry = new THREE.OctahedronGeometry(2.4, 0);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    mainGroup.add(innerMesh);

    // 3. Distributed Service Nodes (Spheres at key vertices)
    const nodeGeometry = new THREE.SphereGeometry(0.14, 12, 12);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x2dd4bf,
      transparent: true,
      opacity: 0.85
    });

    const nodePositions = [];
    const count = 28;
    const radius = 6.2;

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      nodePositions.push(new THREE.Vector3(x, y, z));

      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(x, y, z);
      mainGroup.add(node);
    }

    // 4. Connecting Network Lines (Simulating microservice communication)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x0d9488,
      transparent: true,
      opacity: 0.22
    });

    const linePositions = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < 4.2) {
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
    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    mainGroup.add(linesMesh);

    // 5. Orbiting Data Packet Satellites
    const packetCount = 8;
    const packetGeometry = new THREE.SphereGeometry(0.18, 8, 8);
    const packetMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.95
    });

    const packets = [];
    for (let i = 0; i < packetCount; i++) {
      const packet = new THREE.Mesh(packetGeometry, packetMaterial);
      mainGroup.add(packet);
      packets.push({
        mesh: packet,
        speed: 0.4 + i * 0.12,
        orbitRadius: 4.8 + (i % 3) * 1.4,
        inclination: (i * Math.PI) / packetCount,
        angle: (i * 2 * Math.PI) / packetCount
      });
    }

    // Mouse Interaction
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = mouseX * 0.6;
      targetY = mouseY * 0.6;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // IntersectionObserver to pause rendering when out of viewport
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

      // Smooth mouse lerping
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      mainGroup.rotation.y = elapsedTime * 0.15 + currentX;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.1) * 0.15 + currentY * 0.5;

      // Spin inner lattice opposite
      innerMesh.rotation.y = -elapsedTime * 0.3;
      innerMesh.rotation.z = elapsedTime * 0.2;

      // Pulse core scale gently
      const scale = 1 + Math.sin(elapsedTime * 1.5) * 0.03;
      coreMesh.scale.set(scale, scale, scale);

      // Animate orbiting packets
      packets.forEach((p) => {
        p.angle += delta * p.speed;
        p.mesh.position.x = Math.cos(p.angle) * p.orbitRadius * Math.cos(p.inclination);
        p.mesh.position.y = Math.sin(p.angle) * p.orbitRadius;
        p.mesh.position.z = Math.cos(p.angle) * p.orbitRadius * Math.sin(p.inclination);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Three resources
      coreGeometry.dispose();
      coreMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
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
      className="w-full h-full min-h-[380px] md:min-h-[460px] relative cursor-grab active:cursor-grabbing select-none"
      aria-label="Interactive 3D Software Architecture System Visualization"
    />
  );
}
