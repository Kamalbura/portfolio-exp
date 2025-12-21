'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';

interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
  isClicking: boolean;
  hoverText: string;
  hoverColor: string;
  isSkillHover: boolean;
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const [state, setState] = useState<CursorState>({
    x: -100,
    y: -100,
    isHovering: false,
    isClicking: false,
    hoverText: '',
    hoverColor: '',
    isSkillHover: false,
  });

  // Skill hover event listener
  useEffect(() => {
    const handleSkillHover = (e: CustomEvent<{ category: string; color: string }>) => {
      const { category, color } = e.detail;
      setState((prev) => ({
        ...prev,
        isSkillHover: !!category,
        hoverText: category,
        hoverColor: color,
      }));

      const cursor = cursorRef.current;
      if (!cursor) return;

      if (category) {
        gsap.to(cursor, {
          scale: 2.5,
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('skillHover', handleSkillHover as EventListener);
    return () => {
      window.removeEventListener('skillHover', handleSkillHover as EventListener);
    };
  }, []);

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
        scale: state.isHovering || state.isSkillHover ? 2 : 1,
        duration: 0.15,
        ease: 'power2.out',
      });
    };

    // Animation loop using gsap.ticker for smooth 60fps
    const animate = () => {
      // Smooth follow for outer cursor (lerp factor 0.12)
      cursorX += (mouseX - cursorX) * 0.12;
      cursorY += (mouseY - cursorY) * 0.12;

      // Faster follow for dot (lerp factor 0.3)
      dotX += (mouseX - dotX) * 0.3;
      dotY += (mouseY - dotY) * 0.3;

      gsap.set(cursor, {
        x: cursorX - 20,
        y: cursorY - 20,
      });

      gsap.set(cursorDot, {
        x: dotX - 4,
        y: dotY - 4,
      });
    };

    gsap.ticker.add(animate);

    // Interactive elements hover handlers
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverText = target.dataset.cursorText || target.dataset.cursor || '';
      
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
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Add hover listeners to interactive elements
    const setupInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [data-cursor], [data-cursor-text], .magnetic-btn, input, textarea'
      );
      
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter as EventListener);
        el.addEventListener('mouseleave', handleMouseLeave);
      });

      return interactiveElements;
    };

    let interactiveElements = setupInteractiveElements();

    // MutationObserver to handle dynamically added elements
    const observer = new MutationObserver(() => {
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter as EventListener);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      interactiveElements = setupInteractiveElements();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Hide cursor on mobile/touch devices
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    if (mediaQuery.matches) {
      cursor.style.display = 'none';
      cursorDot.style.display = 'none';
    }

    return () => {
      gsap.ticker.remove(animate);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      observer.disconnect();
      
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter as EventListener);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [state.isHovering, state.isSkillHover]);

  return (
    <>
      {/* Outer cursor ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[10000] mix-blend-difference"
        style={{ willChange: 'transform' }}
      >
        <div
          className={`w-full h-full rounded-full border-2 transition-colors duration-300 flex items-center justify-center ${
            state.isHovering || state.isSkillHover
              ? 'border-white bg-white/10'
              : 'border-white/60'
          }`}
          style={{
            borderColor: state.isSkillHover && state.hoverColor ? state.hoverColor : undefined,
            boxShadow: state.isSkillHover && state.hoverColor 
              ? `0 0 20px ${state.hoverColor}, inset 0 0 20px ${state.hoverColor}40`
              : undefined,
          }}
        >
          {(state.hoverText || state.isSkillHover) && (
            <span 
              ref={cursorTextRef}
              className="text-[7px] font-bold uppercase tracking-wider whitespace-nowrap"
              style={{
                color: state.isSkillHover ? state.hoverColor : 'white',
                textShadow: state.isSkillHover ? `0 0 10px ${state.hoverColor}` : undefined,
              }}
            >
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
        <div 
          className="w-full h-full rounded-full bg-white"
          style={{
            backgroundColor: state.isSkillHover && state.hoverColor ? state.hoverColor : undefined,
            boxShadow: state.isSkillHover && state.hoverColor 
              ? `0 0 10px ${state.hoverColor}`
              : undefined,
          }}
        />
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
