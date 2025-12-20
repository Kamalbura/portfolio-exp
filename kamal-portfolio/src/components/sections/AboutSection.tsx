'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FadeIn } from '../ui/TextAnimations';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;

    if (!section || !image) return;

    // Parallax image
    gsap.to(image, {
      y: -80,
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <FadeIn delay={0.1}>
              <span className="section-label">About Me</span>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="section-title mb-8">
                Crafting Intelligent
                <br />
                <span className="text-gradient">Solutions</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="section-description mb-6">
                I&apos;m a Computer Science Engineering student at Vasavi College of Engineering, 
                Hyderabad, with a deep passion for the intersection of Artificial Intelligence 
                and the Internet of Things. My journey in tech is driven by an insatiable 
                curiosity to understand how systems work and how they can be made smarter.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="section-description mb-10">
                From building neural networks that predict patterns in complex datasets to 
                designing IoT systems that bridge the physical and digital worlds, I thrive 
                on challenges that push the boundaries of what&apos;s possible. My approach 
                combines rigorous engineering principles with creative problem-solving.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-gradient-ai mb-2">15+</div>
                  <div className="text-[#a1a1aa] text-sm">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gradient-iot mb-2">3+</div>
                  <div className="text-[#a1a1aa] text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gradient-systems mb-2">5+</div>
                  <div className="text-[#a1a1aa] text-sm">Research Papers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gradient mb-2">∞</div>
                  <div className="text-[#a1a1aa] text-sm">Curiosity</div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <FadeIn direction="right" delay={0.3}>
              <div
                ref={imageRef}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden"
              >
                {/* Placeholder gradient - replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/20 via-[#0b0d10] to-[#8b5cf6]/20" />
                
                {/* Decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border border-[#00d4ff]/20 animate-pulse" />
                  <div className="absolute w-64 h-64 rounded-full border border-[#00ffc8]/10" />
                  <div className="absolute w-80 h-80 rounded-full border border-[#8b5cf6]/10" />
                </div>

                {/* Glass card overlay */}
                <div className="absolute bottom-6 left-6 right-6 glass-card rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#00ffc8] flex items-center justify-center text-[#0b0d10] font-bold">
                      KB
                    </div>
                    <div>
                      <div className="font-medium text-sm">Kamal Bura</div>
                      <div className="text-[#a1a1aa] text-xs">B.E. CSE • Class of 2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 glass rounded-xl p-3 border-beam">
              <span className="text-2xl">🤖</span>
            </div>
            <div className="absolute top-1/3 -left-6 glass rounded-xl p-3 glow-iot">
              <span className="text-2xl">📡</span>
            </div>
            <div className="absolute bottom-1/4 -right-8 glass rounded-xl p-3 glow-systems">
              <span className="text-2xl">⚡</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
