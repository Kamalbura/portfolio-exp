'use client';

import { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = !!(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hoverable')
      );
      setIsHovering(isHoverable);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleElementHover);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 ease-out hidden md:block"
        style={{
          left: position.x - 4,
          top: position.y - 4,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className={`w-2 h-2 bg-white rounded-full transition-transform duration-300 ${
            isHovering ? 'scale-[3]' : 'scale-100'
          }`}
        />
      </div>
      <div
        className="fixed pointer-events-none z-[9998] border border-white/30 rounded-full transition-all duration-500 ease-out hidden md:block"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          width: 40,
          height: 40,
          opacity: isVisible ? 1 : 0,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
        }}
      />
    </>
  );
}
