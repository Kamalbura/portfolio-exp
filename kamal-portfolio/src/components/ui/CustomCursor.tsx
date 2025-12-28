'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface SkillHoverDetail {
  category: string;
  color: string;
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorTextRef = useRef<HTMLDivElement | null>(null);

  // Check if custom cursor should be enabled
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Check for fine pointer (desktop) and user preference for motion
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    setIsEnabled(hasFinePointer && !prefersReducedMotion);
  }, []);

  // UI state (non-position)
  const [hoverText, setHoverText] = useState<string>('');
  const [hoverColor, setHoverColor] = useState<string>('');
  const [isSkillHover, setIsSkillHover] = useState<boolean>(false);

  // Position refs to avoid re-renders
  const mouse = useRef({ x: -9999, y: -9999, initialized: false });
  const outerPos = useRef({ x: -9999, y: -9999 });
  const dotPos = useRef({ x: -9999, y: -9999 });

  // Quick setters (created on mount)
  const setOuterX = useRef<any>(null);
  const setOuterY = useRef<any>(null);
  const setDotX = useRef<any>(null);
  const setDotY = useRef<any>(null);

  // NOTE: keep hooks stable — guard inside effects rather than early returning
  useEffect(() => {
    if (!isEnabled) return;
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    // Initially hide to prevent top-left jump
    cursor.style.display = 'none';
    dot.style.display = 'none';

    // Create quickSetters for performant updates
    setOuterX.current = gsap.quickSetter(cursor, 'x', 'px');
    setOuterY.current = gsap.quickSetter(cursor, 'y', 'px');
    setDotX.current = gsap.quickSetter(dot, 'x', 'px');
    setDotY.current = gsap.quickSetter(dot, 'y', 'px');

    const onFirstMove = (e: MouseEvent) => {
      // reveal cursor at first reliable position
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      outerPos.current.x = e.clientX;
      outerPos.current.y = e.clientY;
      dotPos.current.x = e.clientX;
      dotPos.current.y = e.clientY;

      cursor.style.display = 'block';
      dot.style.display = 'block';
      mouse.current.initialized = true;

      window.removeEventListener('mousemove', onFirstMove);
    };

    window.addEventListener('mousemove', onFirstMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onFirstMove);
    };
  }, [isEnabled]);

  useEffect(() => {
    if (!isEnabled) return;
    const tick = () => {
      // If mouse not initialized yet, skip
      if (!mouse.current.initialized) return;

      // lerp outer and dot positions
      outerPos.current.x += (mouse.current.x - outerPos.current.x) * 0.14;
      outerPos.current.y += (mouse.current.y - outerPos.current.y) * 0.14;

      dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.33;
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.33;

      // apply via quickSetters (very fast)
      setOuterX.current?.(outerPos.current.x - 20);
      setOuterY.current?.(outerPos.current.y - 20);
      setDotX.current?.(dotPos.current.x - 4);
      setDotY.current?.(dotPos.current.y - 4);
    };

    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
    };
  }, [isEnabled]);

  // Mouse move subscription updates the mouse ref only
  useEffect(() => {
    if (!isEnabled) return;
    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onDown = () => {
      gsap.to(cursorRef.current, { scale: 0.78, duration: 0.12, overwrite: 'auto', ease: 'power2.out' });
    };

    const onUp = () => {
      gsap.to(cursorRef.current, { scale: isSkillHover || hoverText ? 2 : 1, duration: 0.12, overwrite: 'auto', ease: 'power2.out' });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, [isEnabled, isSkillHover, hoverText]);

  // Interactive element hover handlers (scale cursor without changing position refs)
  useEffect(() => {
    if (!isEnabled) return;
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const text = (target.dataset && (target.dataset.cursorText || target.dataset.cursor)) || '';
      setHoverText(text);

      gsap.to(cursorRef.current, { scale: 2, duration: 0.18, overwrite: 'auto', ease: 'power2.out' });
      gsap.to(cursorDotRef.current, { scale: 0, duration: 0.18, overwrite: 'auto', ease: 'power2.out' });
    };

    const handleMouseLeave = () => {
      setHoverText('');
      gsap.to(cursorRef.current, { scale: 1, duration: 0.18, overwrite: 'auto', ease: 'power2.out' });
      gsap.to(cursorDotRef.current, { scale: 1, duration: 0.18, overwrite: 'auto', ease: 'power2.out' });
    };

    const interactiveElements = document.querySelectorAll('a, button, [data-cursor], [data-cursor-text], .magnetic-btn, input, textarea');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    const observer = new MutationObserver(() => {
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      const next = document.querySelectorAll('a, button, [data-cursor], [data-cursor-text], .magnetic-btn, input, textarea');
      next.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      observer.disconnect();
    };
  }, [isEnabled]);

  // Skill hover event listener (for category-aware cursor)
  useEffect(() => {
    if (!isEnabled) return;
    const onSkill = (e: Event) => {
      const ev = e as CustomEvent<SkillHoverDetail>;
      const { category, color } = ev.detail || { category: '', color: '' };
      setIsSkillHover(!!category);
      setHoverText(category || '');
      setHoverColor(color || '');

      if (category) {
        gsap.to(cursorRef.current, { scale: 2.5, duration: 0.22, overwrite: 'auto', ease: 'power2.out' });
      } else {
        gsap.to(cursorRef.current, { scale: 1, duration: 0.22, overwrite: 'auto', ease: 'power2.out' });
      }
    };

    window.addEventListener('skillHover', onSkill as EventListener);
    return () => window.removeEventListener('skillHover', onSkill as EventListener);
  }, [isEnabled]);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[10000] mix-blend-difference"
        style={{ willChange: 'transform', display: 'none' }}
      >
        <div
          className={`w-full h-full rounded-full border-2 transition-colors duration-300 flex items-center justify-center`}
          style={{
            borderColor: isSkillHover && hoverColor ? hoverColor : undefined,
            boxShadow: isSkillHover && hoverColor ? `0 0 20px ${hoverColor}, inset 0 0 20px ${hoverColor}40` : undefined,
          }}
        >
          {(hoverText || isSkillHover) && (
            <span
              ref={cursorTextRef}
              className="text-[7px] font-bold uppercase tracking-wider whitespace-nowrap"
              style={{ color: isSkillHover ? hoverColor : 'white', textShadow: isSkillHover ? `0 0 10px ${hoverColor}` : undefined }}
            >
              {hoverText}
            </span>
          )}
        </div>
      </div>

      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[10001] mix-blend-difference"
        style={{ willChange: 'transform', display: 'none' }}
      >
        <div
          className="w-full h-full rounded-full bg-white"
          style={{ backgroundColor: isSkillHover && hoverColor ? hoverColor : undefined, boxShadow: isSkillHover && hoverColor ? `0 0 10px ${hoverColor}` : undefined }}
        />
      </div>

      <style jsx global>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>
    </>
  );
}

