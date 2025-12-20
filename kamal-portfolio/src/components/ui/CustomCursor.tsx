'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
  isClicking: boolean;
  hoverText: string;
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<CursorState>({
    x: -100,
    y: -100,
    isHovering: false,
    isClicking: false,
    hoverText: '',
  });

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    let dotX = -100;
    let dotY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseDown = () => {
      setState((prev) => ({ ...prev, isClicking: true }));
      gsap.to(cursor, {
        scale: 0.8,
        duration: 0.15,
        ease: 'power2.out',
      });
    };

    const onMouseUp = () => {
      setState((prev) => ({ ...prev, isClicking: false }));
      gsap.to(cursor, {
        scale: state.isHovering ? 2 : 1,
        duration: 0.15,
        ease: 'power2.out',
      });
    };

    // Animation loop
    const animate = () => {
      // Smooth follow for outer cursor
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      // Faster follow for dot
      dotX += (mouseX - dotX) * 0.35;
      dotY += (mouseY - dotY) * 0.35;

      gsap.set(cursor, {
        x: cursorX - 20,
        y: cursorY - 20,
      });

      gsap.set(cursorDot, {
        x: dotX - 4,
        y: dotY - 4,
      });

      requestAnimationFrame(animate);
    };

    // Interactive elements
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverText = target.dataset.cursor || '';
      
      setState((prev) => ({ ...prev, isHovering: true, hoverText }));
      
      gsap.to(cursor, {
        scale: 2,
        duration: 0.3,
        ease: 'power2.out',
      });

      gsap.to(cursorDot, {
        scale: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      setState((prev) => ({ ...prev, isHovering: false, hoverText: '' }));
      
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });

      gsap.to(cursorDot, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    // Set up event listeners
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [data-cursor], .magnetic-btn, input, textarea'
    );
    
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter as EventListener);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    animate();

    // Hide cursor on mobile
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    if (mediaQuery.matches) {
      cursor.style.display = 'none';
      cursorDot.style.display = 'none';
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter as EventListener);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [state.isHovering]);

  return (
    <>
      {/* Outer cursor ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[10000] mix-blend-difference"
        style={{ willChange: 'transform' }}
      >
        <div
          className={`w-full h-full rounded-full border transition-colors duration-300 flex items-center justify-center ${
            state.isHovering
              ? 'border-white bg-white/10'
              : 'border-white/50'
          }`}
        >
          {state.hoverText && (
            <span className="text-[8px] font-medium text-white uppercase tracking-wider">
              {state.hoverText}
            </span>
          )}
        </div>
      </div>

      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[10001] mix-blend-difference"
        style={{ willChange: 'transform' }}
      >
        <div className="w-full h-full rounded-full bg-white" />
      </div>

      {/* Hide default cursor globally */}
      <style jsx global>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
