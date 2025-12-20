'use client';

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  trigger?: string;
}

export function TextReveal({
  children,
  className = '',
  delay = 0,
  stagger = 0.03,
  trigger,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const split = new SplitType(container, {
      types: 'lines,words',
      lineClass: 'split-parent',
      wordClass: 'split-child',
    });

    // Wrap each line's content
    split.lines?.forEach((line) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'split-parent overflow-hidden';
      line.parentNode?.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });

    const words = container.querySelectorAll('.split-child');

    gsap.set(words, {
      y: '110%',
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: trigger
        ? {
            trigger: trigger,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          }
        : {
            trigger: container,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
    });

    tl.to(words, {
      y: '0%',
      opacity: 1,
      duration: 1,
      stagger: stagger,
      delay: delay,
      ease: 'power3.out',
    });

    return () => {
      tl.kill();
      split.revert();
    };
  }, [delay, stagger, trigger]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

interface LineRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function LineReveal({
  children,
  className = '',
  delay = 0,
  duration = 1,
}: LineRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const split = new SplitType(container, {
      types: 'lines',
      lineClass: 'split-line-inner',
    });

    // Wrap each line
    split.lines?.forEach((line) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'split-line overflow-hidden';
      line.parentNode?.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });

    const lines = container.querySelectorAll('.split-line-inner');

    gsap.set(lines, {
      y: '100%',
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.to(lines, {
      y: '0%',
      opacity: 1,
      duration: duration,
      stagger: 0.1,
      delay: delay,
      ease: 'power3.out',
    });

    return () => {
      tl.kill();
      split.revert();
    };
  }, [delay, duration]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

interface CharRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function CharReveal({
  text,
  className = '',
  delay = 0,
  stagger = 0.02,
}: CharRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const split = new SplitType(container, {
      types: 'chars',
      charClass: 'split-char',
    });

    const chars = container.querySelectorAll('.split-char');

    gsap.set(chars, {
      y: '100%',
      opacity: 0,
      rotateX: -90,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.to(chars, {
      y: '0%',
      opacity: 1,
      rotateX: 0,
      duration: 0.8,
      stagger: stagger,
      delay: delay,
      ease: 'power3.out',
    });

    return () => {
      tl.kill();
      split.revert();
    };
  }, [text, delay, stagger]);

  return (
    <div ref={containerRef} className={className} style={{ perspective: '1000px' }}>
      {text}
    </div>
  );
}

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

export function FadeIn({
  children,
  className = '',
  delay = 0,
  duration = 1,
  direction = 'up',
  distance = 60,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const directionMap = {
      up: { y: distance, x: 0 },
      down: { y: -distance, x: 0 },
      left: { x: distance, y: 0 },
      right: { x: -distance, y: 0 },
      none: { x: 0, y: 0 },
    };

    const { x, y } = directionMap[direction];

    gsap.set(element, {
      opacity: 0,
      y,
      x,
    });

    gsap.to(element, {
      opacity: 1,
      y: 0,
      x: 0,
      duration: duration,
      delay: delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  }, [delay, duration, direction, distance]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface ScaleInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function ScaleIn({
  children,
  className = '',
  delay = 0,
  duration = 1,
}: ScaleInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.set(element, {
      opacity: 0,
      scale: 0.8,
    });

    gsap.to(element, {
      opacity: 1,
      scale: 1,
      duration: duration,
      delay: delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  }, [delay, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
