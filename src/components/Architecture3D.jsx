import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const NODES_DATA = [
  { name: 'API Gateway (FastAPI)', pos: [0, 2.2, 0], color: 0xff6b35, type: 'core' },
  { name: 'Gemini LLM Pipeline', pos: [3.8, 1.2, 1.5], color: 0xffb36b, type: 'ai' },
  { name: 'PostgreSQL & Cache', pos: [-3.8, 1.2, -1.5], color: 0xff6b35, type: 'db' },
  { name: 'CRM & HubSpot Sync', pos: [2.6, -2.0, -1.8], color: 0xffb36b, type: 'sync' },
  { name: 'Client State / React UI', pos: [-2.6, -2.0, 1.8], color: 0xffffff, type: 'ui' },
  { name: 'Event Broker / Queue', pos: [0, -0.6, 0], color: 0xff6b35, type: 'bus' }
];

const CONNECTIONS = [
  [0, 1], [0, 2], [0, 5],
  [5, 3], [5, 4], [1, 5], [2, 5], [4, 0]
];

export default function Architecture3D() {
  const mountRef = useRef(null);
  const [activeNodeName, setActiveNodeName] = useState('All Systems Operational');

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 3.5, 12.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const systemGroup = new THREE.Group();
    scene.add(systemGroup);

    // Node Meshes
    const nodeMeshes = [];
    const nodeGeomCore = new THREE.BoxGeometry(0.85, 0.85, 0.85);
    const nodeGeomSat = new THREE.OctahedronGeometry(0.65, 0);

    NODES_DATA.forEach((n, i) => {
      const geom = n.type === 'core' || n.type === 'bus' ? nodeGeomCore : nodeGeomSat;
      const mat = new THREE.MeshStandardMaterial({
        color: n.color,
        roughness: 0.25,
        metalness: 0.8,
        wireframe: true,
        transparent: true,
        opacity: 0.85
      });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(...n.pos);
      systemGroup.add(mesh);
      nodeMeshes.push({ mesh, data: n, index: i });
    });

    // Connection Pipes / Lines
    const linePositions = [];
    CONNECTIONS.forEach(([fromIdx, toIdx]) => {
      const p1 = NODES_DATA[fromIdx].pos;
      const p2 = NODES_DATA[toIdx].pos;
      linePositions.push(p1[0], p1[1], p1[2], p2[0], p2[1], p2[2]);
    });

    const linesGeom = new THREE.BufferGeometry();
    linesGeom.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const linesMat = new THREE.LineBasicMaterial({
      color: 0xff6b35,
      transparent: true,
      opacity: 0.35
    });
    const linesMesh = new THREE.LineSegments(linesGeom, linesMat);
    systemGroup.add(linesMesh);

    // Traveling Data Packets along connections
    const packetGeom = new THREE.SphereGeometry(0.12, 10, 10);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0xffb36b });
    const packetCount = 8;
    const packetPool = [];

    for (let i = 0; i < packetCount; i++) {
      const pMesh = new THREE.Mesh(packetGeom, packetMat);
      systemGroup.add(pMesh);
      packetPool.push({
        mesh: pMesh,
        connIdx: i % CONNECTIONS.length,
        progress: (i / packetCount),
        speed: 0.25 + (i % 3) * 0.1
      });
    }

    // Outer subtle boundary cage
    const cageGeom = new THREE.IcosahedronGeometry(6.2, 0);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.08
    });
    const cageMesh = new THREE.Mesh(cageGeom, cageMat);
    systemGroup.add(cageMesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xff6b35, 2.5, 30);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Mouse Interaction
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let targetRotY = 0;
    let targetRotX = 0;

    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();

    const onMouseDown = (e) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = mouseX * 0.4;
      targetRotX = mouseY * 0.3;

      // Raycast to identify active hovered node
      mouseVector.x = mouseX;
      mouseVector.y = mouseY;
      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes.map((n) => n.mesh));
      if (intersects.length > 0) {
        const hit = nodeMeshes.find((n) => n.mesh === intersects[0].object);
        if (hit) {
          setActiveNodeName(hit.data.name);
        }
      } else {
        setActiveNodeName('All Systems Operational');
      }

      if (isDragging) {
        const dx = e.clientX - prevMouse.x;
        const dy = e.clientY - prevMouse.y;
        systemGroup.rotation.y += dx * 0.008;
        systemGroup.rotation.x += dy * 0.008;
        prevMouse = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseUp = () => { isDragging = false; };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(container);

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        if (!isDragging) {
          systemGroup.rotation.y += (targetRotY - systemGroup.rotation.y * 0.1) * 0.04 + 0.003;
          systemGroup.rotation.x += (targetRotX - systemGroup.rotation.x * 0.1) * 0.04;
        }

        // Rotate individual nodes
        nodeMeshes.forEach(({ mesh }, idx) => {
          mesh.rotation.y = time * 0.4 * (idx % 2 === 0 ? 1 : -1);
          mesh.rotation.x = time * 0.3;
        });

        // Advance data packets along connections
        packetPool.forEach((p) => {
          p.progress = (p.progress + delta * p.speed) % 1.0;
          const [fromIdx, toIdx] = CONNECTIONS[p.connIdx];
          const start = NODES_DATA[fromIdx].pos;
          const end = NODES_DATA[toIdx].pos;
          p.mesh.position.x = start[0] + (end[0] - start[0]) * p.progress;
          p.mesh.position.y = start[1] + (end[1] - start[1]) * p.progress;
          p.mesh.position.z = start[2] + (end[2] - start[2]) * p.progress;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      if (container) {
        container.removeEventListener('mousedown', onMouseDown);
        if (renderer.domElement) container.removeChild(renderer.domElement);
      }
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', onResize);

      nodeGeomCore.dispose();
      nodeGeomSat.dispose();
      linesGeom.dispose();
      linesMat.dispose();
      packetGeom.dispose();
      packetMat.dispose();
      cageGeom.dispose();
      cageMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between">
      {/* 3D WebGL Canvas */}
      <div
        ref={mountRef}
        className="w-full h-[260px] sm:h-[300px] relative cursor-grab active:cursor-grabbing select-none"
        aria-label="3D Connected Systems Architecture Visualization"
      />

      {/* Node Status Tracker */}
      <div className="p-3 bg-[#151518]/90 border border-white/5 rounded-xl font-technical-mono text-[11px] text-[#99969A] flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-ping" />
          <span className="text-[#F5F2EE] font-semibold">{activeNodeName}</span>
        </div>
        <span className="text-[10px] text-[#FFB36B]">6 Micro-Nodes Active</span>
      </div>
    </div>
  );
}
