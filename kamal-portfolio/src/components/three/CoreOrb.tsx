'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Sphere, MeshTransmissionMaterial, Billboard, Text } from '@react-three/drei';

type SkillIconKey = 'ai' | 'iot' | 'systems';

const skillIcons: Record<SkillIconKey, { glyph: string; color: string }> = {
  ai: { glyph: '</>', color: '#00d4ff' },
  iot: { glyph: '~~', color: '#00ffc8' },
  systems: { glyph: '[]', color: '#8b5cf6' },
};

export default function CoreOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const pointRef = useRef<THREE.PointLight>(null);
  const iconRef = useRef<THREE.Object3D>(null);
  const iconMaterialRef = useRef<THREE.MeshBasicMaterial>(null);
  const skillsFocusRef = useRef(false);
  const [activeIconKey, setActiveIconKey] = useState<SkillIconKey | null>(null);
  const [iconColor, setIconColor] = useState('#00d4ff');

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
    if (innerRef.current) {
      const pulse = 0.5 + Math.abs(Math.sin(state.clock.elapsedTime * 2)) * 0.8;
      const material = innerRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = pulse;
      material.emissive = new THREE.Color('#00d4ff');
    }
  });

  useEffect(() => {
    if (iconRef.current) {
      iconRef.current.scale.setScalar(0.2);
    }
  }, []);

  const animateOrbScale = useCallback((scale: number, duration = 0.8) => {
    if (meshRef.current) {
      gsap.to(meshRef.current.scale, { x: scale, y: scale, z: scale, duration, ease: 'power2.out' });
    }
    if (innerRef.current) {
      gsap.to(innerRef.current.scale, { x: scale * 0.9, y: scale * 0.9, z: scale * 0.9, duration, ease: 'power2.out' });
    }
  }, []);

  const animateIconVisibility = useCallback((visible: boolean, color?: string) => {
    if (!iconRef.current || !iconMaterialRef.current) return;
    if (color) {
      iconMaterialRef.current.color = new THREE.Color(color);
    }
    gsap.to(iconRef.current.scale, {
      x: visible ? 0.9 : 0.2,
      y: visible ? 0.9 : 0.2,
      z: 1,
      duration: visible ? 0.85 : 0.5,
      ease: 'power2.out',
    });
    gsap.to(iconMaterialRef.current, {
      opacity: visible ? 1 : 0,
      duration: visible ? 0.65 : 0.4,
      ease: 'power2.out',
    });
  }, []);

  useEffect(() => {
    const handleFocus = (event: Event) => {
      const detail = (event as CustomEvent<{ active?: boolean }>).detail;
      const active = !!detail?.active;
      skillsFocusRef.current = active;
      animateOrbScale(active ? 1.1 : 1, 1.1);
      if (!active) {
        setActiveIconKey(null);
        animateIconVisibility(false);
        gsap.to(pointRef.current || {}, { intensity: 1.6, duration: 0.6, ease: 'power2.out' });
      } else {
        gsap.to(pointRef.current || {}, { intensity: 2, duration: 0.8, ease: 'power2.out' });
      }
    };

    window.addEventListener('skillsFocus', handleFocus as EventListener);
    return () => window.removeEventListener('skillsFocus', handleFocus as EventListener);
  }, [animateIconVisibility, animateOrbScale]);

  useEffect(() => {
    const handleSkillHover = (event: Event) => {
      const detail = (event as CustomEvent<{ category?: string; color?: string; key?: SkillIconKey }>).detail;
      const key = detail?.key && skillIcons[detail.key] ? detail.key : null;

      if (key) {
        setActiveIconKey(key);
        const color = detail?.color || skillIcons[key].color;
        setIconColor(color);
        animateIconVisibility(true, color);
        gsap.to(pointRef.current || {}, { intensity: 2.4, duration: 0.5, ease: 'power2.out' });
        animateOrbScale(1.35, 0.7);
      } else {
        setActiveIconKey(null);
        animateIconVisibility(false);
        gsap.to(pointRef.current || {}, {
          intensity: skillsFocusRef.current ? 2 : 1.6,
          duration: 0.5,
          ease: 'power2.out',
        });
        animateOrbScale(skillsFocusRef.current ? 1.1 : 1, 0.7);
      }
    };

    window.addEventListener('skillHover', handleSkillHover as EventListener);
    return () => window.removeEventListener('skillHover', handleSkillHover as EventListener);
  }, [animateIconVisibility, animateOrbScale]);

  const activeIcon = activeIconKey ? skillIcons[activeIconKey] : null;

  return (
    <group>
      <Sphere ref={meshRef} args={[3, 64, 64]}>
        <MeshTransmissionMaterial
          color="#0b1220"
          thickness={1.8}
          chromaticAberration={0.04}
          anisotropy={0.1}
          ior={1.6}
          transmission={0.95}
          samples={10}
        />
      </Sphere>

      <Sphere ref={glowRef} args={[3.6, 32, 32]}>
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.06} side={THREE.BackSide} />
      </Sphere>

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

      <Billboard follow position={[0, 0, 0]}>
        <Text ref={iconRef} fontSize={0.8} anchorX="center" anchorY="middle">
          {activeIcon?.glyph || ''}
          <meshBasicMaterial
            ref={iconMaterialRef}
            transparent
            opacity={0}
            color={iconColor}
            toneMapped={false}
          />
        </Text>
      </Billboard>

      <pointLight ref={pointRef} position={[0, 0, 0]} intensity={2} color="#00d4ff" distance={40} />
    </group>
  );
}
