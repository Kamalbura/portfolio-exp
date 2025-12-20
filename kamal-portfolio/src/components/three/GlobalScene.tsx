'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useSmoothScroll } from '../providers/SmoothScrollProvider';

// Particle Field Component
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 5000;

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 30 + Math.random() * 70;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Color gradient: AI Blue -> IoT Teal -> Systems Violet
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        colors[i3] = 0;
        colors[i3 + 1] = 0.83;
        colors[i3 + 2] = 1;
      } else if (colorChoice < 0.7) {
        colors[i3] = 0;
        colors[i3 + 1] = 1;
        colors[i3 + 2] = 0.78;
      } else {
        colors[i3] = 0.545;
        colors[i3 + 1] = 0.361;
        colors[i3 + 2] = 0.965;
      }

      sizes[i] = Math.random() * 2 + 0.5;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.05;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry} frustumCulled={false}>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

// Core Orb Component with Distortion
function CoreOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { scrollProgress } = useSmoothScroll();
  const mouseRef = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (meshRef.current) {
      // Mouse influence
      const targetX = (state.pointer.x * 0.3);
      const targetY = (state.pointer.y * 0.3);
      mouseRef.current.x += (targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (targetY - mouseRef.current.y) * 0.05;

      meshRef.current.rotation.x = mouseRef.current.y + state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = mouseRef.current.x + state.clock.elapsedTime * 0.15;

      // Scale based on scroll
      const scale = 1 + Math.sin(scrollProgress * Math.PI) * 0.2;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.5, 64]} />
        <MeshDistortMaterial
          color="#00d4ff"
          emissive="#001a33"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
          distort={0.4}
          speed={2}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Inner glow */}
      <mesh scale={2.2}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Outer rings */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.3, i * 0.5, 0]}>
          <torusGeometry args={[3.5 + i * 0.5, 0.02, 16, 100]} />
          <meshBasicMaterial
            color={i === 0 ? '#00d4ff' : i === 1 ? '#00ffc8' : '#8b5cf6'}
            transparent
            opacity={0.3 - i * 0.08}
          />
        </mesh>
      ))}
    </Float>
  );
}

// Camera Controller
function CameraController() {
  const { camera } = useThree();
  const { scrollProgress } = useSmoothScroll();
  const targetRef = useRef({ x: 0, y: 0, z: 30 });

  useFrame(() => {
    // Camera narrative based on scroll
    const section = scrollProgress * 5; // 5 sections

    if (section < 1) {
      // Hero: Wide shot
      targetRef.current = { x: 0, y: 0, z: 30 };
    } else if (section < 2) {
      // About: Zoom in
      targetRef.current = { x: 5, y: 2, z: 20 };
    } else if (section < 3) {
      // Skills: Side angle
      targetRef.current = { x: -8, y: 0, z: 25 };
    } else if (section < 4) {
      // Projects: Pull back
      targetRef.current = { x: 0, y: -3, z: 35 };
    } else {
      // Contact: Final position
      targetRef.current = { x: 0, y: 5, z: 28 };
    }

    // Smooth camera movement
    camera.position.x += (targetRef.current.x - camera.position.x) * 0.02;
    camera.position.y += (targetRef.current.y - camera.position.y) * 0.02;
    camera.position.z += (targetRef.current.z - camera.position.z) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Scene Content
function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      <spotLight
        position={[0, 20, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#00ffc8"
      />
      
      <ParticleField />
      <CoreOrb />
      <CameraController />
      
      <Environment preset="night" />
    </>
  );
}

// Loading Fallback
function SceneLoader() {
  return (
    <mesh>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial color="#00d4ff" wireframe />
    </mesh>
  );
}

// Main Global Scene
export default function GlobalScene() {
  return (
    <div className="global-canvas">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 60 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={<SceneLoader />}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
