'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function CoreOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

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
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[3, 64, 64]}>
        <MeshDistortMaterial
          color="#00d4ff"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>

      <Sphere ref={glowRef} args={[3.5, 32, 32]}>
        <meshBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>

      <mesh ref={ringRef}>
        <torusGeometry args={[5, 0.05, 16, 100]} />
        <meshBasicMaterial color="#00ffcc" transparent opacity={0.5} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[6, 0.03, 16, 100]} />
        <meshBasicMaterial color="#00ff88" transparent opacity={0.3} />
      </mesh>

      <pointLight position={[0, 0, 0]} intensity={2} color="#00d4ff" distance={20} />
    </group>
  );
}
