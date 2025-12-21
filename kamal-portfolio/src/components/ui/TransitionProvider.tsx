"use client";

import React, { createContext, useContext, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { useSmoothScroll } from '../providers/SmoothScrollProvider';

type TransitionContextType = {
  startTransition: (cb?: () => void) => Promise<void>;
};

const TransitionContext = createContext<TransitionContextType>({
  startTransition: async () => {},
});

export const useTransition = () => useContext(TransitionContext);

interface Props { children: ReactNode }

export default function TransitionProvider({ children }: Props) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const overlay2Ref = useRef<HTMLDivElement | null>(null);
  const { lenis } = useSmoothScroll();

  const startTransition = async (cb?: () => void) => {
    const overlay = overlayRef.current;
    const overlay2 = overlay2Ref.current;
    if (!overlay || !overlay2) {
      if (cb) cb();
      return;
    }

    // Prevent scroll during transition
    try { lenis?.stop(); } catch (e) {}

    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

    // Simple cinematic curtain: two panels slide in from opposite sides
    tl.set([overlay, overlay2], { autoAlpha: 1, yPercent: 0 });
    // Animate page content slightly (fade + slide up) to sync with curtain
    const page = document.querySelector('main');
    if (page) {
      tl.to(page, { y: 20, opacity: 0, duration: 0.45, ease: 'expo.out' }, 0);
    }
    tl.fromTo(overlay, { xPercent: -100 }, { xPercent: 0, duration: 0.5 }, 0);
    tl.fromTo(overlay2, { xPercent: 100 }, { xPercent: 0, duration: 0.5 }, 0);

    // Fade out content (consumer should call navigation after this resolves)
    await tl.then();

    if (cb) cb();

    // reverse panels to reveal
    const tlOut = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tlOut.to([overlay, overlay2], { xPercent: 0, duration: 0 });
    tlOut.to(overlay, { xPercent: -100, duration: 0.55 }, 0.08);
    tlOut.to(overlay2, { xPercent: 100, duration: 0.55 }, 0.08);

    await tlOut.then();

    try { lenis?.start(); } catch (e) {}
  };

  return (
    <TransitionContext.Provider value={{ startTransition }}>
      {children}
      <div ref={overlayRef} aria-hidden className="pointer-events-none fixed inset-0 z-[9998]" style={{ background: 'linear-gradient(90deg,#000000, #050712)', transform: 'translateX(-100%)' }} />
      <div ref={overlay2Ref} aria-hidden className="pointer-events-none fixed inset-0 z-[9997]" style={{ background: 'linear-gradient(90deg,#050712, #000000)', transform: 'translateX(100%)' }} />
    </TransitionContext.Provider>
  );
}
