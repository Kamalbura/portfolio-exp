'use client';

import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '15+', label: 'Projects Completed', color: 'ai' },
  { value: '3+', label: 'Years Experience', color: 'iot' },
  { value: '∞', label: 'Curiosity', color: 'gradient' },
];

const techStack = [
  { name: 'TensorFlow' },
  { name: 'PyTorch' },
  { name: 'Arduino' },
  { name: 'React' },
  { name: 'Python' },
  { name: 'Node.js' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);
  const timelinesRef = useRef<gsap.core.Timeline[]>([]);

  const initAnimations = useCallback(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const paragraphs = paragraphsRef.current;
    const imageContainer = imageContainerRef.current;
    const statsContainer = statsRef.current;
    const techStack = techStackRef.current;

    if (!section) return;

    // Clean up existing
    scrollTriggersRef.current.forEach(st => st.kill());
    timelinesRef.current.forEach(tl => tl.kill());
    scrollTriggersRef.current = [];
    timelinesRef.current = [];

    // Split heading text
    let headingSplit: SplitType | null = null;
    if (heading) {
      headingSplit = new SplitType(heading, {
        types: 'lines,words',
        lineClass: 'overflow-hidden',
      });

      if (headingSplit.words) {
        gsap.set(headingSplit.words, { y: '100%', opacity: 0 });
        
        const headingTl = gsap.timeline({
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
        
        headingTl.to(headingSplit.words, {
          y: '0%',
          opacity: 1,
          duration: 1,
          stagger: 0.05,
          ease: 'power3.out',
        });
        
        timelinesRef.current.push(headingTl);
      }
    }

    // Paragraph reveals
    if (paragraphs) {
      const pElements = paragraphs.querySelectorAll('p');
      pElements.forEach((p, i) => {
        gsap.set(p, { opacity: 0, y: 40 });
        
        const pSt = ScrollTrigger.create({
          trigger: p,
          start: 'top 85%',
          onEnter: () => {
            gsap.to(p, {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: i * 0.15,
              ease: 'power3.out',
            });
          },
          onLeaveBack: () => {
            gsap.to(p, { opacity: 0, y: 40, duration: 0.5 });
          },
        });
        scrollTriggersRef.current.push(pSt);
      });
    }

    // Image parallax and reveal
    if (imageContainer) {
      gsap.set(imageContainer, { opacity: 0, scale: 0.9, y: 60 });
      
      const imageSt = ScrollTrigger.create({
        trigger: imageContainer,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(imageContainer, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
          });
        },
        onLeaveBack: () => {
          gsap.to(imageContainer, { opacity: 0, scale: 0.9, y: 60, duration: 0.5 });
        },
      });
      scrollTriggersRef.current.push(imageSt);

      // Parallax effect
      const imageParallax = ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
        animation: gsap.to(imageContainer, { y: -100, ease: 'none' }),
      });
      scrollTriggersRef.current.push(imageParallax);
    }

    // Stats counter animation
    if (statsContainer) {
      const statItems = statsContainer.querySelectorAll('.stat-item');
      statItems.forEach((item, i) => {
        gsap.set(item, { opacity: 0, y: 50, scale: 0.9 });
        
        const statSt = ScrollTrigger.create({
          trigger: item,
          start: 'top 90%',
          onEnter: () => {
            gsap.to(item, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: i * 0.1,
              ease: 'back.out(1.7)',
            });
          },
          onLeaveBack: () => {
            gsap.to(item, { opacity: 0, y: 50, scale: 0.9, duration: 0.4 });
          },
        });
        scrollTriggersRef.current.push(statSt);
      });
    }

    // Tech stack floating animation
    if (techStack) {
      const techItems = techStack.querySelectorAll('.tech-item');
      techItems.forEach((item, i) => {
        gsap.set(item, { opacity: 0, scale: 0 });
        
        const techSt = ScrollTrigger.create({
          trigger: techStack,
          start: 'top 85%',
          onEnter: () => {
            gsap.to(item, {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              delay: i * 0.08,
              ease: 'back.out(2)',
            });
          },
          onLeaveBack: () => {
            gsap.to(item, { opacity: 0, scale: 0, duration: 0.3 });
          },
        });
        scrollTriggersRef.current.push(techSt);
      });
    }

    return () => {
      headingSplit?.revert();
    };
  }, []);

  useEffect(() => {
    const cleanup = initAnimations();
    
    return () => {
      cleanup?.();
      scrollTriggersRef.current.forEach(st => st.kill());
      timelinesRef.current.forEach(tl => tl.kill());
      scrollTriggersRef.current = [];
      timelinesRef.current = [];
    };
  }, [initAnimations]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Content Column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Section Label */}
            <div className="mb-6">
              <span className="section-label inline-flex items-center gap-2">
                <span className="w-8 h-px bg-[#00d4ff]" />
                About Me
              </span>
            </div>

            {/* Heading with kinetic reveal */}
            <h2 
              ref={headingRef}
              className="section-title mb-10"
            >
              Crafting Intelligent
              <br />
              <span className="text-gradient">Solutions</span> for Tomorrow
            </h2>

            {/* Paragraphs */}
            <div ref={paragraphsRef} className="space-y-6 mb-12">
              <p className="section-description">
                I&apos;m a <span className="text-[#f4f4f5] font-medium">Computer Science Engineering</span> student 
                at <span className="text-[#00d4ff]">Vasavi College of Engineering</span>, Hyderabad, with a deep 
                passion for the intersection of Artificial Intelligence and the Internet of Things.
              </p>
              
              <p className="section-description">
                My journey in tech is driven by an insatiable curiosity to understand how systems work 
                and how they can be made <span className="text-[#00ffc8]">smarter</span>, more <span className="text-[#8b5cf6]">efficient</span>, 
                and more <span className="text-gradient">impactful</span>. From building neural networks that predict 
                patterns in complex datasets to designing IoT systems that bridge the physical and digital worlds.
              </p>

              <p className="section-description">
                I thrive on challenges that push the boundaries of what&apos;s possible. My approach combines 
                rigorous engineering principles with creative problem-solving, always keeping the end user 
                and real-world impact at the center of every solution I build.
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div ref={techStackRef} className="mb-12">
              <span className="text-xs text-[#71717a] uppercase tracking-widest mb-4 block">Core Technologies</span>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <div 
                    key={tech.name}
                    className="tech-item px-4 py-2 rounded-full glass border border-white/5 flex items-center gap-2 hover:border-[#00d4ff]/30 transition-colors duration-300"
                  >
                    <span className="text-sm text-[#a1a1aa]">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div 
                  key={stat.label}
                  className="stat-item text-center lg:text-left"
                >
                  <div className={`text-4xl lg:text-5xl font-bold mb-2 ${
                    stat.color === 'ai' ? 'text-gradient-ai' :
                    stat.color === 'iot' ? 'text-gradient-iot' :
                    stat.color === 'systems' ? 'text-gradient-systems' :
                    'text-gradient'
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-[#71717a] text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div
              ref={imageContainerRef}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/20 via-[#0b0d10] to-[#8b5cf6]/20" />
              
              {/* Animated orbital rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full border border-[#00d4ff]/30 animate-pulse" />
                <div className="absolute w-56 h-56 rounded-full border border-[#00ffc8]/20 animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-72 h-72 rounded-full border border-[#8b5cf6]/15 animate-[spin_30s_linear_infinite_reverse]" />
                <div className="absolute w-88 h-88 rounded-full border border-white/5" />
                
                {/* Center orb */}
                <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#00ffc8] opacity-80 blur-sm" />
                <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#00ffc8]" />
              </div>

              {/* Glass card overlay */}
              <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#00ffc8] flex items-center justify-center text-[#0b0d10] font-bold text-lg">
                    KB
                  </div>
                  <div>
                    <div className="font-semibold text-[#f4f4f5]">Kamal Bura</div>
                    <div className="text-[#71717a] text-sm">B.E. CSE • Class of 2025</div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ffc8]" />
                      <span className="text-xs text-[#00ffc8]">Open to opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 right-8 lg:right-0 glass rounded-2xl p-4 border-beam animate-float">
              <span className="text-3xl">🤖</span>
            </div>
            <div className="absolute top-1/3 -left-4 lg:-left-8 glass rounded-2xl p-4 glow-iot animate-float" style={{ animationDelay: '-2s' }}>
              <span className="text-3xl">📡</span>
            </div>
            <div className="absolute bottom-1/3 right-4 lg:-right-4 glass rounded-2xl p-4 glow-systems animate-float" style={{ animationDelay: '-4s' }}>
              <span className="text-3xl">⚡</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
