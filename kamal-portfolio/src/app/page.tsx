'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import Cursor from '@/components/ui/Cursor';
import LoadingScreen from '@/components/ui/LoadingScreen';

const Scene = dynamic(() => import('@/components/three/Scene'), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <Cursor />
      <Scene />
      <Navbar />
      <main className="relative noise-overlay">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
