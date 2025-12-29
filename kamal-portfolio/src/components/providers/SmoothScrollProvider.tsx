'use client';

import { createContext, useContext, useEffect, useRef, useState, ReactNode, useCallback } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_SECTIONS = 6;

interface SmoothScrollContextType {
  lenis: Lenis | null;
  scrollProgress: number;
  currentSection: number;
  getScrollProgress: () => number;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  scrollProgress: 0,
  currentSection: 0,
  getScrollProgress: () => 0,
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  // High-frequency scroll value stored in ref (no re-renders)
  const scrollProgressRef = useRef(0);
  // Coarse section index for components that need React reactivity (0-5 sections)
  const [currentSection, setCurrentSection] = useState(0);
  const rafCallbackRef = useRef<((time: number) => void) | null>(null);

  // Stable getter for high-frequency access (e.g., useFrame in R3F)
  const getScrollProgress = useCallback(() => scrollProgressRef.current, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', (e: { scroll: number; limit: number; velocity: number; direction: number; progress: number }) => {
      // Update ref (no re-render)
      scrollProgressRef.current = e.progress;
      
      // Only update React state when section boundary changes (coarse-grained)
      const newSection = Math.min(TOTAL_SECTIONS - 1, Math.floor(e.progress * TOTAL_SECTIONS));
      setCurrentSection((prev) => (prev !== newSection ? newSection : prev));
      
      ScrollTrigger.update();
    });

    // Store the callback so we can remove it properly
    rafCallbackRef.current = (time: number) => {
      lenis.raf(time * 1000);
    };

    // Add Lenis to GSAP ticker for smooth synchronization
    gsap.ticker.add(rafCallbackRef.current);
    gsap.ticker.lagSmoothing(0);

    // Set up ScrollTrigger to use Lenis
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: 'transform',
    });

    ScrollTrigger.defaults({
      scroller: document.body,
    });

    // Refresh ScrollTrigger after setup
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      if (rafCallbackRef.current) {
        gsap.ticker.remove(rafCallbackRef.current);
      }
      // Note: We do NOT kill all ScrollTriggers here - that's each component's responsibility
    };
  }, []);

  // Derive scrollProgress from section for backwards compatibility
  // Components needing precise values should use getScrollProgress()
  const scrollProgress = currentSection / Math.max(1, TOTAL_SECTIONS - 1);

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current, scrollProgress, currentSection, getScrollProgress }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
