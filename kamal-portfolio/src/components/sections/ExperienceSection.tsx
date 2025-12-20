'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FadeIn } from '../ui/TextAnimations';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    role: 'AI Research Intern',
    company: 'TechCorp Innovation Labs',
    period: 'Jun 2024 – Present',
    description:
      'Leading research on multimodal AI systems. Developed a novel architecture for vision-language models achieving 15% improvement over baseline. Published findings at top-tier conferences.',
    highlights: [
      'Developed custom transformer architectures',
      'Optimized model inference by 40%',
      'Mentored 3 junior researchers',
    ],
    color: 'ai',
  },
  {
    id: 2,
    role: 'IoT Solutions Developer',
    company: 'SmartCity Innovations',
    period: 'Jan 2024 – May 2024',
    description:
      'Designed and deployed IoT infrastructure for smart city pilot program. Created real-time traffic monitoring system serving 50,000+ daily users.',
    highlights: [
      'Architected scalable MQTT broker cluster',
      'Reduced latency by 60% through edge computing',
      'Integrated with municipal traffic systems',
    ],
    color: 'iot',
  },
  {
    id: 3,
    role: 'Full Stack Developer',
    company: 'Startup Accelerator',
    period: 'Jun 2023 – Dec 2023',
    description:
      'Built MVPs for 5+ early-stage startups. Specialized in real-time applications and data visualization dashboards.',
    highlights: [
      'Delivered 5 production applications',
      'Implemented CI/CD pipelines',
      'Reduced time-to-market by 30%',
    ],
    color: 'systems',
  },
  {
    id: 4,
    role: 'Research Assistant',
    company: 'Vasavi College of Engineering',
    period: 'Aug 2022 – Present',
    description:
      'Contributing to multiple research projects in AI and embedded systems. Published 3 papers on neural network optimization techniques.',
    highlights: [
      'Co-authored 3 research papers',
      'Developed open-source ML toolkit',
      'Organized technical workshops',
    ],
    color: 'ai',
  },
];

const colorMap = {
  ai: {
    line: 'bg-[#00d4ff]',
    dot: 'bg-[#00d4ff]',
    glow: 'shadow-[0_0_20px_rgba(0,212,255,0.5)]',
    tag: 'text-[#00d4ff] border-[#00d4ff]/30',
  },
  iot: {
    line: 'bg-[#00ffc8]',
    dot: 'bg-[#00ffc8]',
    glow: 'shadow-[0_0_20px_rgba(0,255,200,0.5)]',
    tag: 'text-[#00ffc8] border-[#00ffc8]/30',
  },
  systems: {
    line: 'bg-[#8b5cf6]',
    dot: 'bg-[#8b5cf6]',
    glow: 'shadow-[0_0_20px_rgba(139,92,246,0.5)]',
    tag: 'text-[#8b5cf6] border-[#8b5cf6]/30',
  },
};

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const items = timeline.querySelectorAll('.timeline-item');

    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Animate timeline line
    const line = timeline.querySelector('.timeline-line');
    if (line) {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: timeline,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-64 h-64 bg-[#00d4ff]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-64 h-64 bg-[#8b5cf6]/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className="text-center mb-20">
          <FadeIn>
            <span className="section-label">Journey</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-title">
              Professional <span className="text-gradient">Experience</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="section-description mx-auto mt-4">
              Building expertise through impactful work
            </p>
          </FadeIn>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#2a2d34]">
            <div
              className="timeline-line absolute inset-0 bg-gradient-to-b from-[#00d4ff] via-[#00ffc8] to-[#8b5cf6] origin-top"
              style={{ transform: 'scaleY(0)' }}
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const colors = colorMap[exp.color as keyof typeof colorMap];
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`timeline-item relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full ${colors.dot} ${colors.glow} z-10`}
                  />

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 pl-8 md:pl-0 ${
                      isLeft ? 'md:pr-16' : 'md:pl-16'
                    }`}
                  >
                    <div className="glass-card rounded-xl p-6 group hover:scale-[1.02] transition-transform duration-500">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-[#f4f4f5] mb-1">
                            {exp.role}
                          </h3>
                          <p className={`text-sm ${colors.tag}`}>{exp.company}</p>
                        </div>
                        <span className="text-xs text-[#71717a] whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-[#a1a1aa] text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-[#71717a]"
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
