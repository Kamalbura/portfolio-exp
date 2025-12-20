'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );

      const lines = linesRef.current?.querySelectorAll('.about-line');
      lines?.forEach((line, i) => {
        gsap.fromTo(
          line,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: line,
              start: 'top 85%',
              end: 'top 60%',
              scrub: 1,
            },
          }
        );
      });

      gsap.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0, rotate: -5 },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const aboutLines = [
    "I'm an engineering student at a prestigious institution in India,",
    "passionate about pushing the boundaries of technology.",
    "My expertise spans Artificial Intelligence, Internet of Things,",
    "and core Computer Science fundamentals.",
    "I build intelligent systems that solve real-world problems.",
    "From neural networks to embedded systems,",
    "I turn complex ideas into elegant solutions."
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding relative"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              ref={titleRef}
              className="text-4xl md:text-6xl font-bold mb-12"
            >
              <span className="text-[#71717a]">The</span>
              <br />
              <span className="text-gradient-blue">Engineer</span>
            </h2>

            <div ref={linesRef} className="space-y-4">
              {aboutLines.map((line, index) => (
                <p
                  key={index}
                  className="about-line text-lg md:text-xl text-[#a1a1aa] leading-relaxed"
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="mt-12 flex gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#00ff88] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-[#00d4ff]/20 transition-all duration-300"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-4 glass rounded-full text-white hover:bg-white/10 transition-all duration-300"
              >
                View Projects
              </a>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="glass-card rounded-3xl p-8 glow-blue">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#00ff88]/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#00ff88] flex items-center justify-center">
                    <span className="text-5xl font-bold text-black">KB</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Kamal Bura</h3>
                  <p className="text-[#a1a1aa]">AI & IoT Engineer</p>
                  <div className="mt-6 flex justify-center gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#00d4ff]">500+</div>
                      <div className="text-xs text-[#71717a]">DSA Problems</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#00ff88]">20+</div>
                      <div className="text-xs text-[#71717a]">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#8b5cf6]">5+</div>
                      <div className="text-xs text-[#71717a]">Hackathons</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[#00d4ff]/10 blur-2xl animate-pulse-glow" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#00ff88]/10 blur-2xl animate-pulse-glow" />
          </div>
        </div>
      </div>
    </section>
  );
}
