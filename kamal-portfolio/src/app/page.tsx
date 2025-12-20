'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import Navbar from '@/components/layout/NavbarSection';
import Footer from '@/components/layout/FooterSection';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/AboutSection';
import Skills from '@/components/sections/SkillsSection';
import Projects from '@/components/sections/ProjectsSection';
import Experience from '@/components/sections/ExperienceSection';
import Contact from '@/components/sections/ContactSection';
import LoadingScreen from '@/components/ui/LoadingScreen';

const GlobalScene = dynamic(() => import('@/components/three/GlobalScene'), {
  ssr: false,
  loading: () => null,
});

const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <SmoothScrollProvider>
        <CustomCursor />
        <GlobalScene />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </SmoothScrollProvider>
    </>
  );
}
