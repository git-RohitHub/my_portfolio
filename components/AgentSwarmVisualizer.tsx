"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AgentSwarmVisualizer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const ambientLight = new THREE.AmbientLight(0x06b6d4, 0.7);
    scene.add(ambientLight);

    const amberLight = new THREE.PointLight(0xf59e0b, 3.2, 45);
    amberLight.position.set(12, 12, 12);
    scene.add(amberLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 2.5, 45);
    cyanLight.position.set(-12, -10, 10);
    scene.add(cyanLight);

    const coreGeo = new THREE.IcosahedronGeometry(4.4, 2);
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      shininess: 70,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    const innerGeo = new THREE.OctahedronGeometry(2.3, 0);
    const innerMat = new THREE.MeshPhongMaterial({
      color: 0xffb95f,
      emissive: 0xd97706,
      flatShading: true,
      shininess: 85,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    const nodeCount = 38;
    type SwarmNode = THREE.Mesh & {
      userData: { basePos: THREE.Vector3; phase: number; speed: number };
    };
    const nodes: SwarmNode[] = [];
    const sphereGeo = new THREE.SphereGeometry(0.28, 16, 16);
    const matAmber = new THREE.MeshPhongMaterial({ color: 0xffc174, emissive: 0xb45309 });
    const matCyan = new THREE.MeshPhongMaterial({ color: 0x38bdf8, emissive: 0x0284c7 });
    const matEmerald = new THREE.MeshPhongMaterial({ color: 0x4edea3, emissive: 0x059669 });

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const radius = 7.4 + Math.sin(i * 1.4) * 1.6;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      let chosenMat = matAmber;
      if (i % 3 === 1) chosenMat = matCyan;
      if (i % 3 === 2) chosenMat = matEmerald;

      const mesh = new THREE.Mesh(sphereGeo, chosenMat) as SwarmNode;
      mesh.position.set(x, y, z);
      mesh.userData = {
        basePos: new THREE.Vector3(x, y, z),
        phase: Math.random() * Math.PI * 2,
        speed: 0.8 + Math.random() * 0.6,
      };
      group.add(mesh);
      nodes.push(mesh);
    }

    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0x8ed5ff,
      transparent: true,
      opacity: 0.28,
    });
    const edgeLines: { line: THREE.Line; i: number; j: number }[] = [];

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position);
        if (dist < 5.0) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            nodes[i].position,
            nodes[j].position,
          ]);
          const line = new THREE.Line(geometry, edgeMaterial);
          group.add(line);
          edgeLines.push({ line, i, j });
        }
      }
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    container.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    const clock = new THREE.Clock();
    let frameId = 0;

    function animate() {
      frameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      group.rotation.y = time * 0.12 + mouseX * 0.45;
      group.rotation.x = time * 0.08 + mouseY * 0.35;

      coreMesh.rotation.y = -time * 0.16;
      innerMesh.rotation.x = time * 0.35;
      const pulse = 1 + Math.sin(time * 2.8) * 0.08;
      innerMesh.scale.set(pulse, pulse, pulse);

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const bp = node.userData.basePos;
        const wave = Math.sin(time * node.userData.speed + node.userData.phase) * 0.32;
        node.position.copy(bp).addScaledVector(bp.clone().normalize(), wave);
      }

      for (let k = 0; k < edgeLines.length; k++) {
        const edge = edgeLines[k];
        const pos = (edge.line.geometry as THREE.BufferGeometry).attributes.position;
        pos.setXYZ(0, nodes[edge.i].position.x, nodes[edge.i].position.y, nodes[edge.i].position.z);
        pos.setXYZ(1, nodes[edge.j].position.x, nodes[edge.j].position.y, nodes[edge.j].position.z);
        pos.needsUpdate = true;
      }

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      sphereGeo.dispose();
      coreGeo.dispose();
      innerGeo.dispose();
      matAmber.dispose();
      matCyan.dispose();
      matEmerald.dispose();
      coreMat.dispose();
      innerMat.dispose();
      edgeMaterial.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="three-hero-viewport"
      className="w-full h-full cursor-grab active:cursor-grabbing relative z-10"
    />
  );
}
