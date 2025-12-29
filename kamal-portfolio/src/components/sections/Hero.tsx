'use client';

import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

const heroNavItems = [
  { num: '01', id: 'home', label: 'Home' },
  { num: '02', id: 'about', label: 'About' },
  { num: '03', id: 'skills', label: 'Skills' },
  { num: '04', id: 'projects', label: 'Projects' },
  { num: '05', id: 'experience', label: 'Experience' },
  { num: '06', id: 'contact', label: 'Contact' },
];

interface HeroProps {
  isLoaded?: boolean;
}

export default function Hero({ isLoaded = true }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const sideNavRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const initAnimations = useCallback(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;
    const scrollIndicator = scrollIndicatorRef.current;
    const sideNav = sideNavRef.current;
    const social = socialRef.current;

    if (!section || !title) return;

    // Clear any existing animations
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Split title text for kinetic typography
    const titleSplit = new SplitType(title, {
      types: 'chars,lines',
      charClass: 'hero-char',
    });

    // Initial hidden states
    gsap.set(titleSplit.chars, { 
      y: 120, 
      opacity: 0,
      rotateX: -80,
    });
    if (subtitle) gsap.set(subtitle, { opacity: 0, y: 60 });
    if (cta) gsap.set(cta, { opacity: 0, y: 50 });
    if (scrollIndicator) gsap.set(scrollIndicator, { opacity: 0, y: 30 });
    if (sideNav) gsap.set(sideNav.children, { opacity: 0, x: -20 });
    if (social) gsap.set(social.children, { opacity: 0, x: 20 });

    // Master entrance timeline - synced with LoadingScreen exit
    const tl = gsap.timeline({
      delay: 0.3, // Sync with loading screen fade out
      defaults: { ease: 'power4.out' }
    });

    timelineRef.current = tl;

    // Title chars stagger reveal with 3D effect
    tl.to(titleSplit.chars, {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: 1.0,
      stagger: {
        each: 0.03,
        from: 'start',
      },
      ease: 'power4.out',
    });

    // Subtitle entrance
    if (subtitle) {
      tl.to(subtitle, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, '-=0.6');
    }

    // CTA buttons entrance
    if (cta) {
      tl.to(cta, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, '-=0.5');
    }

    // Scroll indicator
    if (scrollIndicator) {
      tl.to(scrollIndicator, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, '-=0.4');
    }

    // Side navigation
    if (sideNav) {
      tl.to(sideNav.children, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
      }, '-=0.5');
    }

    // Social links
    if (social) {
      tl.to(social.children, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
      }, '-=0.5');
    }

    return () => {
      titleSplit.revert();
    };
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const cleanup = initAnimations();
      return () => {
        cleanup?.();
        if (timelineRef.current) {
          timelineRef.current.kill();
        }
      };
    }
  }, [isLoaded, initAnimations]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0b0d10_70%)] pointer-events-none z-[2]" />
      
      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0b0d10] to-transparent pointer-events-none z-[5]" />

      {/* Content */}
      <div className="hero-content container text-center relative z-10 max-w-4xl">
        {/* Main title with perspective for 3D effect */}
        <h1
          ref={titleRef}
          className="hero-title mb-8"
          style={{ perspective: '1000px' }}
        >
          <span className="inline-block text-[#f4f4f5]">KAMAL </span>
          <span className="inline-block text-[#f4f4f5] ml-6"> BURA</span>
        </h1>

        {/* Subtitle */}
        <div ref={subtitleRef} className="hero-subtitle mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="text-gradient-ai font-semibold">AI</span>
            <span className="text-[#52525b]">×</span>
            <span className="text-gradient-iot font-semibold">IoT</span>
            <span className="text-[#52525b]">×</span>
            <span className="text-gradient-systems font-semibold">Systems</span>
          </div>
          <p className="text-[#a1a1aa] text-lg lg:text-xl tracking-normal normal-case max-w-xl mx-auto leading-relaxed">
            Computer Science Engineering Student at{' '}
            <span className="text-[#f4f4f5]">Vasavi College of Engineering</span>,
            specializing in Artificial Intelligence and Internet of Things.
          </p>
        </div>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 md:gap-6 lg:gap-8 mt-8 md:mt-12">
          <a
            href="#projects"
            className="magnetic-btn hero-cta hero-cta-primary group w-full sm:w-auto"
            data-cursor="View"
            data-cursor-text="View"
          >
            <span>Explore My Work</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
            className="magnetic-btn hero-cta hero-cta-secondary group w-full sm:w-auto"
            data-cursor="Contact"
            data-cursor-text="Contact"
          >
            <span>Get in Touch</span>
            <svg
              className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[10px] text-[#52525b] tracking-[0.3em] uppercase font-medium">
          Scroll to explore
        </span>
        <div className="w-6 h-10 rounded-full border border-[#3f3f46] flex items-start justify-center p-2">
          <div className="w-1 h-2.5 bg-gradient-to-b from-[#00d4ff] to-[#00ffc8] rounded-full animate-bounce" />
        </div>
      </div>

      {/* Side section navigation */}
      <div 
        ref={sideNavRef}
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-5 z-10"
      >
        {heroNavItems.map((item, i) => (
          <a
            key={item.num}
            href={`#${item.id}`}
            className={`group flex items-center gap-3 text-xs tracking-widest transition-all duration-300 ${
              i === 0 ? 'text-[#00d4ff]' : 'text-[#52525b] hover:text-[#a1a1aa]'
            }`}
            data-cursor-text={item.label}
          >
            <span className="font-mono">{item.num}</span>
            <span className={`h-px transition-all duration-300 bg-current ${
              i === 0 ? 'w-8' : 'w-0 group-hover:w-8'
            }`} />
          </a>
        ))}
      </div>

      {/* Social links */}
      <div 
        ref={socialRef}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-10"
      >
        {[
          { name: 'GitHub', href: 'https://github.com/kamalbura', icon: 'GH' },
          { name: 'LinkedIn', href: 'https://linkedin.com/in/kamalbura', icon: 'LI' },
          { name: 'Twitter', href: 'https://twitter.com/kamalbura', icon: 'TW' },
        ].map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest text-[#52525b] hover:text-[#00d4ff] transition-colors duration-300 [writing-mode:vertical-rl] font-medium"
            data-cursor-text={social.name}
          >
            {social.name}
          </a>
        ))}
      </div>
    </section>
  );
}
