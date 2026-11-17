import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const MILESTONES = [
  {
    id: 0,
    year: '2021 - 2024',
    title: 'B.Sc Cognitive Systems',
    subtitle: 'Distinction • 9.1 CGPA',
    pos: [-3.2, -2.4, -0.6],
    color: 0xffb36b
  },
  {
    id: 1,
    year: 'Jun - Jul 2025',
    title: 'IBM Edunet Foundation',
    subtitle: 'AI/ML Intern (+18% Accuracy)',
    pos: [-1.1, -0.8, 0.4],
    color: 0xff6b35
  },
  {
    id: 2,
    year: '2024 - 2026',
    title: 'Master of Computer Applications',
    subtitle: 'MCA Graduate • Advanced Systems',
    pos: [1.1, 0.8, -0.2],
    color: 0xffb36b
  },
  {
    id: 3,
    year: 'Sep 2026 - Present',
    title: 'Agile Receivables',
    subtitle: 'Growth & Tech Intern • CRM Platform',
    pos: [3.2, 2.4, 0.6],
    color: 0xff6b35
  }
];

export default function CareerTimeline3D({ activeIndex = 3, onSelectMilestone }) {
  const mountRef = useRef(null);
  const activeIndexRef = useRef(activeIndex);
  activeIndexRef.current = activeIndex;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 0, 11);
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

    const timelineGroup = new THREE.Group();
    scene.add(timelineGroup);

    // 1. Curved Ascending Career Trajectory Spine
    const curvePoints = MILESTONES.map((m) => new THREE.Vector3(...m.pos));
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const tubeGeometry = new THREE.TubeGeometry(curve, 64, 0.08, 12, false);
    const tubeMaterial = new THREE.MeshStandardMaterial({
      color: 0xff6b35,
      roughness: 0.3,
      metalness: 0.85,
      transparent: true,
      opacity: 0.75
    });
    const tubeMesh = new THREE.Mesh(tubeGeometry, tubeMaterial);
    timelineGroup.add(tubeMesh);

    // Subtle outer glow tube
    const glowTubeGeometry = new THREE.TubeGeometry(curve, 64, 0.18, 12, false);
    const glowTubeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffb36b,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });
    const glowTubeMesh = new THREE.Mesh(glowTubeGeometry, glowTubeMaterial);
    timelineGroup.add(glowTubeMesh);

    // 2. 3D Milestone Waypoint Stations
    const waypointMeshes = [];
    const beaconRings = [];

    MILESTONES.forEach((m, idx) => {
      const stationGroup = new THREE.Group();
      stationGroup.position.set(...m.pos);
      timelineGroup.add(stationGroup);

      // Core Polyhedral Beacon
      const coreGeom = new THREE.OctahedronGeometry(idx === 3 ? 0.48 : 0.38, 0);
      const coreMat = new THREE.MeshStandardMaterial({
        color: m.color,
        roughness: 0.2,
        metalness: 0.9,
        wireframe: false
      });
      const coreMesh = new THREE.Mesh(coreGeom, coreMat);
      coreMesh.userData = { milestoneIndex: idx };
      stationGroup.add(coreMesh);

      // Wireframe Outer Cage
      const cageGeom = new THREE.IcosahedronGeometry(idx === 3 ? 0.7 : 0.58, 0);
      const cageMat = new THREE.MeshBasicMaterial({
        color: m.color,
        wireframe: true,
        transparent: true,
        opacity: 0.6
      });
      const cageMesh = new THREE.Mesh(cageGeom, cageMat);
      stationGroup.add(cageMesh);

      // Horizontal Waypoint Disc / Pedestal
      const discGeom = new THREE.CylinderGeometry(0.85, 0.85, 0.04, 24);
      const discMat = new THREE.MeshStandardMaterial({
        color: 0x1c1c20,
        roughness: 0.4,
        metalness: 0.8
      });
      const discMesh = new THREE.Mesh(discGeom, discMat);
      discMesh.position.y = -0.45;
      stationGroup.add(discMesh);

      // Pulsating Energy Ring
      const ringGeom = new THREE.RingGeometry(0.88, 0.98, 32);
      ringGeom.rotateX(-Math.PI / 2);
      const ringMat = new THREE.MeshBasicMaterial({
        color: m.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.position.y = -0.42;
      stationGroup.add(ringMesh);
      beaconRings.push(ringMesh);

      waypointMeshes.push({
        coreMesh,
        cageMesh,
        stationGroup,
        data: m,
        index: idx
      });
    });

    // 3. Traveling Trajectory Light Pulses
    const pulseCount = 5;
    const pulseGeom = new THREE.SphereGeometry(0.14, 12, 12);
    const pulseMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95
    });
    const pulses = [];

    for (let i = 0; i < pulseCount; i++) {
      const p = new THREE.Mesh(pulseGeom, pulseMat);
      timelineGroup.add(p);
      pulses.push({
        mesh: p,
        progress: i / pulseCount,
        speed: 0.22
      });
    }

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xff6b35, 3.2, 35);
    pointLight1.position.set(6, 6, 8);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffb36b, 2.2, 35);
    pointLight2.position.set(-6, -6, 8);
    scene.add(pointLight2);

    // 5. Mouse Interaction & Raycasting
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
      targetRotY = mouseX * 0.45;
      targetRotX = mouseY * 0.35;

      // Raycast check for milestone clicks/hovers
      mouseVector.x = mouseX;
      mouseVector.y = mouseY;
      raycaster.setFromCamera(mouseVector, camera);
      const hits = raycaster.intersectObjects(waypointMeshes.map((w) => w.coreMesh));
      if (hits.length > 0) {
        container.style.cursor = 'pointer';
      } else {
        container.style.cursor = isDragging ? 'grabbing' : 'grab';
      }

      if (isDragging) {
        const dx = e.clientX - prevMouse.x;
        const dy = e.clientY - prevMouse.y;
        timelineGroup.rotation.y += dx * 0.008;
        timelineGroup.rotation.x += dy * 0.008;
        prevMouse = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseUp = () => {
      isDragging = false;
      container.style.cursor = 'grab';
    };

    const onClick = (e) => {
      const rect = container.getBoundingClientRect();
      mouseVector.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseVector.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      raycaster.setFromCamera(mouseVector, camera);
      const hits = raycaster.intersectObjects(waypointMeshes.map((w) => w.coreMesh));
      if (hits.length > 0) {
        const hitIdx = hits[0].object.userData.milestoneIndex;
        if (typeof onSelectMilestone === 'function') {
          onSelectMilestone(hitIdx);
        }
      }
    };

    container.addEventListener('mousedown', onMouseDown);
    container.addEventListener('click', onClick);
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
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
          timelineGroup.rotation.y += (targetRotY - timelineGroup.rotation.y * 0.1) * 0.04;
          timelineGroup.rotation.x += (targetRotX - timelineGroup.rotation.x * 0.1) * 0.04;
        }

        // Gentle floating respiration
        timelineGroup.position.y = Math.sin(time * 0.8) * 0.12;

        // Animate waypoints
        const curActive = activeIndexRef.current;
        waypointMeshes.forEach(({ coreMesh, cageMesh, stationGroup, index }) => {
          const isActive = index === curActive;
          const speed = isActive ? 1.4 : 0.6;
          coreMesh.rotation.y = time * speed;
          coreMesh.rotation.x = time * 0.4;
          cageMesh.rotation.y = -time * (speed * 0.8);

          const baseScale = isActive ? 1.25 : 1.0;
          const pulseScale = baseScale + (isActive ? Math.sin(time * 3) * 0.08 : 0);
          stationGroup.scale.set(pulseScale, pulseScale, pulseScale);
        });

        // Expand beacon rings
        beaconRings.forEach((r, idx) => {
          const isActive = idx === curActive;
          const ringPulse = 1 + Math.sin(time * 2 + idx) * (isActive ? 0.2 : 0.06);
          r.scale.set(ringPulse, ringPulse, ringPulse);
        });

        // Advance trajectory light pulses
        pulses.forEach((p) => {
          p.progress = (p.progress + delta * p.speed) % 1.0;
          const point = curve.getPointAt(p.progress);
          if (point) {
            p.mesh.position.copy(point);
          }
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
        container.removeEventListener('click', onClick);
        if (renderer.domElement) container.removeChild(renderer.domElement);
      }
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', onResize);

      tubeGeometry.dispose();
      tubeMaterial.dispose();
      glowTubeGeometry.dispose();
      glowTubeMaterial.dispose();
      pulseGeom.dispose();
      pulseMat.dispose();
      renderer.dispose();
    };
  }, [onSelectMilestone]);

  return (
    <div className="w-full h-full flex flex-col justify-between">
      {/* 3D WebGL Career Trajectory Canvas */}
      <div
        ref={mountRef}
        className="w-full h-[300px] sm:h-[360px] relative select-none"
        aria-label="Interactive 3D Career Trajectory Timeline"
      />

      {/* Interactive Waypoint Quick-Bar */}
      <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-technical-mono">
        <span className="text-[#99969A]">Click waypoint or drag 3D spine</span>
        <div className="flex items-center space-x-1.5">
          {MILESTONES.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => onSelectMilestone && onSelectMilestone(idx)}
              className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                activeIndex === idx
                  ? 'bg-[#FF6B35] text-[#0B0B0D] font-bold shadow-sm'
                  : 'bg-[#151518] text-[#99969A] hover:text-[#F5F2EE] border border-white/5'
              }`}
            >
              {idx === 0 ? '2021-24' : idx === 1 ? '2025' : idx === 2 ? 'MCA' : 'Current'}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
