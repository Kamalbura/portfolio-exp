'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          taglineRef.current?.children || [],
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          scrollIndicatorRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.2'
        );

      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: -100,
        opacity: 0,
        scale: 0.9,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b0d10] z-10 pointer-events-none" />

      <div className="container mx-auto px-6 text-center z-20 relative">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6"
        >
          <span className="text-gradient">Kamal</span>
          <br />
          <span className="text-white">Bura</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-[#a1a1aa] mb-8 max-w-2xl mx-auto"
        >
          AI & IoT Engineer | CSE Student
        </p>

        <div ref={taglineRef} className="flex flex-wrap justify-center gap-4 mb-16">
          {['AI', 'IoT', 'Systems', 'Engineering Excellence'].map((tag, index) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full glass text-sm md:text-base text-[#00d4ff] border border-[#00d4ff]/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#71717a] uppercase tracking-widest">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-[#71717a] rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-[#00d4ff] rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
