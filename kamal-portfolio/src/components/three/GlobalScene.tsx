'use client';

import { useRef, useMemo, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import CoreOrb from './CoreOrb';
import * as THREE from 'three';
import { useSmoothScroll } from '../providers/SmoothScrollProvider';

// Adaptive particle count based on device capability
function useAdaptiveParticleCount() {
  const [count, setCount] = useState(5000);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const isLowEnd = window.innerWidth < 768 || 
      (typeof navigator !== 'undefined' && navigator.hardwareConcurrency <= 4);
    
    setCount(isMobile ? 2000 : isLowEnd ? 3500 : 5000);
  }, []);

  return count;
}

// Particle Field Component
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = useAdaptiveParticleCount();

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
  }, [count]);

  // Cleanup geometry on unmount
  useEffect(() => {
    return () => {
      geometry.dispose();
    };
  }, [geometry]);

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

// Use externally defined CoreOrb (upgraded crystalline transmission material)

// Camera Controller
function CameraController() {
  const { camera } = useThree();
  const { scrollProgress } = useSmoothScroll();
  const targetRef = useRef({ x: 0, y: 0, z: 30 });
  const overrideRef = useRef<{x:number;y:number;z:number}|null>(null);

  // Listen for skill hover events to trigger camera zoom-in narrative
  useEffect(() => {
    const onSkill = (e: Event) => {
      const ev = e as CustomEvent<{ category: string }>;
      if (ev.detail?.category) {
        // zoom in for dramatic illumination
        overrideRef.current = { x: -6, y: 0, z: 12 };
      } else {
        overrideRef.current = null;
      }
    };
    window.addEventListener('skillHover', onSkill as EventListener);
    return () => window.removeEventListener('skillHover', onSkill as EventListener);
  }, []);

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

    // If override is active, use it
    const activeTarget = overrideRef.current ?? targetRef.current;

    // Smooth camera movement
    camera.position.x += (activeTarget.x - camera.position.x) * 0.04;
    camera.position.y += (activeTarget.y - camera.position.y) * 0.04;
    camera.position.z += (activeTarget.z - camera.position.z) * 0.04;
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
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <CoreOrb />
      </Float>
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
  const [dpr, setDpr] = useState<[number, number]>([1, 2]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const isLowEnd = typeof navigator !== 'undefined' && navigator.hardwareConcurrency <= 4;
    
    // Adaptive DPR: mobile gets 1, desktop gets up to 2
    setDpr(isMobile || isLowEnd ? [1, 1] : [1, 2]);
  }, []);

  return (
    <div className="global-canvas">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 60 }}
        gl={{
          antialias: !window.matchMedia('(max-width: 768px)').matches,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={dpr}
        frameloop="demand" // Render only when needed (performance boost)
      >
        <Suspense fallback={<SceneLoader />}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
