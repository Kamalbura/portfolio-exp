'use client';

import { useRef, useMemo, useState, useEffect, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleMorphProps {
  onComplete: () => void;
}

function ParticleMorph({ onComplete }: ParticleMorphProps) {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Adaptive particle count - loading screen should be lighter
  const count = useMemo(() => {
    if (typeof window === 'undefined') return 8000;
    return window.innerWidth < 768 ? 5000 : 8000;
  }, []);
  
  const [phase, setPhase] = useState<'sphere' | 'morphing' | 'text' | 'fadeOut'>('sphere');
  const startTimeRef = useRef(0);
  const textPositionsRef = useRef<Float32Array | null>(null);
  const spherePositionsRef = useRef<Float32Array | null>(null);

  // Create text positions from canvas
  const createTextPoints = useCallback(() => {
    const text = 'KAMAL BURA';
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return new Float32Array(count * 3);

    const fontSize = 120;
    const padding = 40;

    ctx.font = `bold ${fontSize}px Arial, sans-serif`;
    const textMetrics = ctx.measureText(text);
    const textWidth = textMetrics.width;
    const textHeight = fontSize;

    canvas.width = textWidth + padding * 2;
    canvas.height = textHeight + padding * 2;

    ctx.fillStyle = 'white';
    ctx.font = `bold ${fontSize}px Arial, sans-serif`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    const points: { x: number; y: number }[] = [];
    const threshold = 128;

    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i] > threshold) {
        const x = (i / 4) % canvas.width;
        const y = Math.floor((i / 4) / canvas.width);
        
        if (Math.random() < 0.25) {
          points.push({
            x: (x - canvas.width / 2) / 12,
            y: -(y - canvas.height / 2) / 12
          });
        }
      }
    }

    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      if (i < points.length) {
        positions[i * 3] = points[i].x;
        positions[i * 3 + 1] = points[i].y;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
      } else {
        const angle = Math.random() * Math.PI * 2;
        const radius = 15 + Math.random() * 20;
        positions[i * 3] = Math.cos(angle) * radius;
        positions[i * 3 + 1] = Math.sin(angle) * radius;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      }
    }

    return positions;
  }, [count]);

  // Create sphere positions
  const createSpherePositions = useCallback(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const radius = 8;
      
      positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi) + (Math.random() - 0.5) * 0.3;
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi) + (Math.random() - 0.5) * 0.3;
      positions[i * 3 + 2] = radius * Math.cos(phi) + (Math.random() - 0.5) * 0.3;
    }
    
    return positions;
  }, [count]);

  // Initialize geometry
  const geometry = useMemo(() => {
    const spherePositions = createSpherePositions();
    spherePositionsRef.current = spherePositions;
    
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const color = new THREE.Color();
      const depth = Math.random();
      color.setHSL(0.5 + depth * 0.15, 0.8, 0.5 + depth * 0.2);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(spherePositions.slice(), 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    return geo;
  }, [count, createSpherePositions]);

  // Start morph sequence
  useEffect(() => {
    textPositionsRef.current = createTextPoints();
    
    const timer = setTimeout(() => {
      setPhase('morphing');
      startTimeRef.current = performance.now();
    }, 200);
    
    return () => clearTimeout(timer);
  }, [createTextPoints]);

  // Animation loop
  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const spherePos = spherePositionsRef.current;
    const textPos = textPositionsRef.current;
    
    if (!spherePos || !textPos) return;

    if (phase === 'sphere') {
      pointsRef.current.rotation.y += 0.003;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    } else if (phase === 'morphing') {
      const elapsed = (performance.now() - startTimeRef.current) / 1000;
      const duration = 0.5;
      const t = Math.min(elapsed / duration, 1);
      
      const eased = t < 0.5 
        ? 4 * t * t * t 
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
      
      pointsRef.current.rotation.y *= 0.97;
      pointsRef.current.rotation.x *= 0.97;
      
      for (let i = 0; i < count * 3; i++) {
        positions[i] = spherePos[i] + (textPos[i] - spherePos[i]) * eased;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      
      if (t >= 1) {
        setPhase('text');
        startTimeRef.current = performance.now();
      }
    } else if (phase === 'text') {
      const elapsed = (performance.now() - startTimeRef.current) / 1000;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3 + 2] = textPos[i3 + 2] + Math.sin(state.clock.elapsedTime * 2 + i * 0.01) * 0.1;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      
      if (elapsed > 0.5) {
        setPhase('fadeOut');
        startTimeRef.current = performance.now();
      }
    } else if (phase === 'fadeOut') {
      const elapsed = (performance.now() - startTimeRef.current) / 1000;
      const duration = 1.2;
      const t = Math.min(elapsed / duration, 1);
      
      const material = pointsRef.current.material as THREE.PointsMaterial;
      material.opacity = 0.8 * (1 - t);
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const expandFactor = 1 + t * 2;
        positions[i3] = textPos[i3] * expandFactor;
        positions[i3 + 1] = textPos[i3 + 1] * expandFactor;
        positions[i3 + 2] = textPos[i3 + 2] + (Math.random() - 0.5) * t * 5;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      
      if (t >= 1) {
        onComplete();
      }
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry} frustumCulled={false}>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete: externalOnComplete }: LoadingScreenProps) {
  const [isComplete, setIsComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleComplete = useCallback(() => {
    setIsComplete(true);
    setTimeout(() => {
      setIsVisible(false);
      externalOnComplete?.();
    }, 500);
  }, [externalOnComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-[#0a0a0f] transition-opacity duration-500 ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <Canvas
        camera={{ position: [0, 0, 25], fov: 75 }}
        gl={{ antialias: true, alpha: false }}
        style={{ background: '#0a0a0f' }}
      >
        <color attach="background" args={['#0a0a0f']} />
        <ambientLight intensity={0.5} />
        <ParticleMorph onComplete={handleComplete} />
      </Canvas>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0a0a0f]/50" />
      </div>
      
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-sm tracking-widest transition-opacity duration-500 ${
        isComplete ? 'opacity-0' : 'opacity-100'
      }`}>
        <span className="animate-pulse">LOADING</span>
      </div>
    </div>
  );
}
