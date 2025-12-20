'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Preload } from '@react-three/drei';
import ParticleField from './ParticleField';
import CoreOrb from './CoreOrb';

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 60 }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#00d4ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#00ff88" />
          <ParticleField />
          <CoreOrb />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
