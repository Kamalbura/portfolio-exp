'use client';

import { useRef, useMemo, useEffect } from 'react';
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Sphere, MeshTransmissionMaterial } from '@react-three/drei';

export default function CoreOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const pointRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y = -state.clock.elapsedTime * 0.1;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      glowRef.current.scale.setScalar(scale);
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    // subtle pulsing inner glow
    if (innerRef.current) {
      const pulse = 0.5 + Math.abs(Math.sin(state.clock.elapsedTime * 2)) * 0.8;
      (innerRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = pulse;
      (innerRef.current.material as THREE.MeshStandardMaterial).emissive = new THREE.Color('#00d4ff');
    }
  });

  useEffect(() => {
    const onSkill = (e: Event) => {
      const ev = e as CustomEvent<{ category?: string; color?: string }>;
      if (ev.detail?.category) {
        gsap.to(pointRef.current || {}, { intensity: 3.2, duration: 0.45, ease: 'power2.out' });
        gsap.to(meshRef.current?.scale || {}, { x: 1.4, y: 1.4, z: 1.4, duration: 0.6, ease: 'expo.out' });
        gsap.to(innerRef.current?.scale || {}, { x: 1.2, y: 1.2, z: 1.2, duration: 0.6, ease: 'expo.out' });
      } else {
        gsap.to(pointRef.current || {}, { intensity: 1.6, duration: 0.45, ease: 'power2.out' });
        gsap.to(meshRef.current?.scale || {}, { x: 1, y: 1, z: 1, duration: 0.6, ease: 'expo.out' });
        gsap.to(innerRef.current?.scale || {}, { x: 1, y: 1, z: 1, duration: 0.6, ease: 'expo.out' });
      }
    };

    window.addEventListener('skillHover', onSkill as EventListener);
    return () => window.removeEventListener('skillHover', onSkill as EventListener);
  }, []);

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[3, 128, 128]} />
        <MeshTransmissionMaterial
          color="#0b1220"
          thickness={1.8}
          chromaticAberration={0.04}
          anisotropy={0.1}
          roughness={0.02}
          ior={1.6}
          transmission={0.95}
          samples={10}
        />
      </mesh>

      <Sphere ref={glowRef} args={[3.6, 32, 32]}> 
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.06} side={THREE.BackSide} />
      </Sphere>

      {/* inner pulsing neural core */}
      <mesh ref={innerRef}>
        <sphereGeometry args={[1.1, 64, 64]} />
        <meshStandardMaterial emissive="#00d4ff" emissiveIntensity={0.8} metalness={0.3} roughness={0.2} />
      </mesh>

      <mesh ref={ringRef}>
        <torusGeometry args={[5, 0.05, 16, 100]} />
        <meshBasicMaterial color="#00ffcc" transparent opacity={0.5} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[6, 0.03, 16, 100]} />
        <meshBasicMaterial color="#00ff88" transparent opacity={0.3} />
      </mesh>

      <pointLight ref={pointRef} position={[0, 0, 0]} intensity={2} color="#00d4ff" distance={40} />
    </group>
  );
}
