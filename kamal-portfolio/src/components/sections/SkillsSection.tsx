'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FadeIn } from '../ui/TextAnimations';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    category: 'AI & Machine Learning',
    color: 'ai',
    icon: '🧠',
    items: [
      { name: 'TensorFlow / PyTorch', level: 90 },
      { name: 'Computer Vision', level: 85 },
      { name: 'NLP / LLMs', level: 80 },
      { name: 'Deep Learning', level: 88 },
    ],
    description: 'Building intelligent systems that learn and adapt',
    span: 'span-2 row-2',
  },
  {
    category: 'IoT & Embedded',
    color: 'iot',
    icon: '📡',
    items: [
      { name: 'Arduino / ESP32', level: 92 },
      { name: 'Raspberry Pi', level: 88 },
      { name: 'MQTT / CoAP', level: 85 },
      { name: 'Sensor Networks', level: 80 },
    ],
    description: 'Connecting the physical and digital worlds',
    span: 'span-2',
  },
  {
    category: 'Systems',
    color: 'systems',
    icon: '⚙️',
    items: [
      { name: 'Linux / Unix', level: 85 },
      { name: 'Docker / K8s', level: 78 },
      { name: 'Cloud (AWS/GCP)', level: 82 },
    ],
    description: 'Designing scalable infrastructure',
    span: '',
  },
  {
    category: 'Languages',
    color: 'ai',
    icon: '💻',
    items: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript/TypeScript', level: 88 },
      { name: 'C/C++', level: 82 },
      { name: 'Rust', level: 70 },
    ],
    description: 'Polyglot programming approach',
    span: '',
  },
  {
    category: 'Web Development',
    color: 'iot',
    icon: '🌐',
    items: [
      { name: 'React / Next.js', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Three.js / WebGL', level: 75 },
    ],
    description: 'Crafting immersive digital experiences',
    span: 'span-2',
  },
];

const colorMap = {
  ai: {
    gradient: 'from-[#00d4ff] to-[#0066ff]',
    glow: 'glow-ai',
    text: 'text-[#00d4ff]',
    bar: 'bg-gradient-to-r from-[#00d4ff] to-[#0066ff]',
  },
  iot: {
    gradient: 'from-[#00ffc8] to-[#00d4a0]',
    glow: 'glow-iot',
    text: 'text-[#00ffc8]',
    bar: 'bg-gradient-to-r from-[#00ffc8] to-[#00d4a0]',
  },
  systems: {
    gradient: 'from-[#8b5cf6] to-[#6d28d9]',
    glow: 'glow-systems',
    text: 'text-[#8b5cf6]',
    bar: 'bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9]',
  },
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const bars = barsRef.current.filter(Boolean);

    bars.forEach((bar) => {
      if (!bar) return;
      const level = bar.dataset.level;

      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width: `${level}%`,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  let barIndex = 0;

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="section-label">Expertise</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-title">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="section-description mx-auto mt-4">
              A diverse toolkit for building the future of technology
            </p>
          </FadeIn>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {skills.map((skill, index) => {
            const colors = colorMap[skill.color as keyof typeof colorMap];

            return (
              <FadeIn
                key={skill.category}
                delay={index * 0.1}
                className={`bento-item glass-card ${skill.span} ${colors.glow}`}
              >
                <div className="h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-3xl mb-2 block">{skill.icon}</span>
                      <h3 className={`text-lg font-semibold ${colors.text}`}>
                        {skill.category}
                      </h3>
                      <p className="text-[#71717a] text-sm mt-1">
                        {skill.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills list */}
                  <div className="flex-1 space-y-4 mt-4">
                    {skill.items.map((item) => {
                      const currentIndex = barIndex++;
                      return (
                        <div key={item.name}>
                          <div className="flex justify-between mb-1.5">
                            <span className="text-sm text-[#f4f4f5]">
                              {item.name}
                            </span>
                            <span className="text-xs text-[#71717a]">
                              {item.level}%
                            </span>
                          </div>
                          <div className="h-1.5 bg-[#1a1d24] rounded-full overflow-hidden">
                            <div
                              ref={(el) => { barsRef.current[currentIndex] = el; }}
                              data-level={item.level}
                              className={`h-full rounded-full ${colors.bar}`}
                              style={{ width: 0 }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Border beam effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 border-beam pointer-events-none" />
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
