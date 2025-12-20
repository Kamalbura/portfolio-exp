'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (!section || !title || !subtitle || !cta) return;

    // Initial state
    gsap.set([title, subtitle, cta], {
      opacity: 0,
      y: 100,
    });

    // Entrance animation timeline
    const tl = gsap.timeline({
      delay: 0.5,
    });

    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out',
    })
      .to(
        subtitle,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.8'
      )
      .to(
        cta,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.6'
      );

    // Parallax on scroll
    gsap.to(title, {
      y: -100,
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    gsap.to(subtitle, {
      y: -50,
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b0d10] pointer-events-none z-[5]" />

      {/* Content */}
      <div className="hero-content container text-center relative z-10">
        {/* Pre-title badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10">
          <span className="w-2 h-2 rounded-full bg-[#00ffc8] animate-pulse" />
          <span className="text-sm text-[#a1a1aa] tracking-wide">
            Available for opportunities
          </span>
        </div>

        {/* Main title */}
        <h1
          ref={titleRef}
          className="hero-title mb-6"
        >
          <span className="block text-[#f4f4f5]">KAMAL</span>
          <span className="block text-gradient">BURA</span>
        </h1>

        {/* Subtitle */}
        <div ref={subtitleRef} className="hero-subtitle mb-12">
          <span className="text-gradient-ai">AI</span>
          <span className="mx-3 text-[#52525b]">×</span>
          <span className="text-gradient-iot">IoT</span>
          <span className="mx-3 text-[#52525b]">×</span>
          <span className="text-gradient-systems">Systems</span>
          <span className="block mt-4 text-[#a1a1aa] text-lg tracking-normal normal-case">
            Engineering the Future at Vasavi College of Engineering
          </span>
        </div>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="magnetic-btn magnetic-btn-primary"
            data-cursor="View"
          >
            <span>Explore My Work</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="magnetic-btn"
            data-cursor="Contact"
          >
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-[#52525b] tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-6 h-10 rounded-full border border-[#52525b] flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[#00d4ff] rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Side decorations */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-10">
        {['01', '02', '03', '04'].map((num, i) => (
          <a
            key={num}
            href={`#${['home', 'about', 'projects', 'contact'][i]}`}
            className={`text-xs tracking-widest transition-colors duration-300 ${
              i === 0 ? 'text-[#00d4ff]' : 'text-[#52525b] hover:text-[#a1a1aa]'
            }`}
          >
            {num}
          </a>
        ))}
      </div>

      {/* Social links */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-10">
        {[
          { name: 'GitHub', href: 'https://github.com/kamalbura' },
          { name: 'LinkedIn', href: 'https://linkedin.com/in/kamalbura' },
          { name: 'Twitter', href: 'https://twitter.com/kamalbura' },
        ].map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest text-[#52525b] hover:text-[#00d4ff] transition-colors duration-300 [writing-mode:vertical-rl]"
            data-cursor={social.name}
          >
            {social.name}
          </a>
        ))}
      </div>
    </section>
  );
}
