'use client';

import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    id: 'ai-ml',
    category: 'AI & Machine Learning',
    color: 'ai',
    icon: '🧠',
    items: [
      { name: 'TensorFlow / PyTorch', level: 90 },
      { name: 'Computer Vision', level: 85 },
      { name: 'NLP / LLMs', level: 80 },
      { name: 'Deep Learning', level: 88 },
    ],
    description: 'Building intelligent systems that learn, adapt, and evolve.',
    gridClass: 'lg:col-span-2 lg:row-span-2',
  },
  {
    id: 'iot',
    category: 'IoT & Embedded',
    color: 'iot',
    icon: '📡',
    items: [
      { name: 'Arduino / ESP32', level: 92 },
      { name: 'Raspberry Pi', level: 88 },
      { name: 'MQTT / CoAP', level: 85 },
      { name: 'Sensor Networks', level: 80 },
    ],
    description: 'Connecting the physical and digital worlds seamlessly.',
    gridClass: 'lg:col-span-2',
  },
  {
    id: 'systems',
    category: 'Systems & DevOps',
    color: 'systems',
    icon: '⚙️',
    items: [
      { name: 'Linux / Unix', level: 85 },
      { name: 'Docker / K8s', level: 78 },
      { name: 'Cloud (AWS/GCP)', level: 82 },
    ],
    description: 'Designing scalable, resilient infrastructure.',
    gridClass: '',
  },
  {
    id: 'languages',
    category: 'Languages',
    color: 'ai',
    icon: '💻',
    items: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript/TypeScript', level: 88 },
      { name: 'C/C++', level: 82 },
      { name: 'Rust', level: 70 },
    ],
    description: 'Polyglot approach to problem-solving.',
    gridClass: '',
  },
  {
    id: 'web',
    category: 'Web Development',
    color: 'iot',
    icon: '🌐',
    items: [
      { name: 'React / Next.js', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Three.js / WebGL', level: 75 },
    ],
    description: 'Crafting immersive digital experiences.',
    gridClass: 'lg:col-span-2',
  },
];

const colorMap = {
  ai: {
    gradient: 'from-[#00d4ff] to-[#0066ff]',
    glow: 'hover:shadow-[0_0_60px_-15px_rgba(0,212,255,0.4)]',
    text: 'text-[#00d4ff]',
    bar: 'bg-gradient-to-r from-[#00d4ff] to-[#0066ff]',
    border: 'hover:border-[#00d4ff]/30',
    bg: 'bg-[#00d4ff]/5',
  },
  iot: {
    gradient: 'from-[#00ffc8] to-[#00d4a0]',
    glow: 'hover:shadow-[0_0_60px_-15px_rgba(0,255,200,0.4)]',
    text: 'text-[#00ffc8]',
    bar: 'bg-gradient-to-r from-[#00ffc8] to-[#00d4a0]',
    border: 'hover:border-[#00ffc8]/30',
    bg: 'bg-[#00ffc8]/5',
  },
  systems: {
    gradient: 'from-[#8b5cf6] to-[#6d28d9]',
    glow: 'hover:shadow-[0_0_60px_-15px_rgba(139,92,246,0.4)]',
    text: 'text-[#8b5cf6]',
    bar: 'bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9]',
    border: 'hover:border-[#8b5cf6]/30',
    bg: 'bg-[#8b5cf6]/5',
  },
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<Map<string, HTMLDivElement>>(new Map());
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);
  const timelinesRef = useRef<gsap.core.Timeline[]>([]);

  const setBarRef = useCallback((el: HTMLDivElement | null, key: string) => {
    if (el) {
      barsRef.current.set(key, el);
    } else {
      barsRef.current.delete(key);
    }
  }, []);

  const initAnimations = useCallback(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const grid = gridRef.current;

    if (!section) return;

    // Cleanup
    scrollTriggersRef.current.forEach(st => st.kill());
    timelinesRef.current.forEach(tl => tl.kill());
    scrollTriggersRef.current = [];
    timelinesRef.current = [];

    // Heading split text animation
    let headingSplit: SplitType | null = null;
    if (heading) {
      headingSplit = new SplitType(heading, {
        types: 'lines,words',
        lineClass: 'overflow-hidden',
      });

      if (headingSplit.words) {
        gsap.set(headingSplit.words, { y: '100%', opacity: 0 });

        const headingSt = ScrollTrigger.create({
          trigger: heading,
          start: 'top 85%',
          onEnter: () => {
            gsap.to(headingSplit!.words, {
              y: '0%',
              opacity: 1,
              duration: 1,
              stagger: 0.04,
              ease: 'power3.out',
            });
          },
          onLeaveBack: () => {
            gsap.to(headingSplit!.words, {
              y: '100%',
              opacity: 0,
              duration: 0.5,
            });
          },
        });
        scrollTriggersRef.current.push(headingSt);
      }
    }

    // Bento grid items staggered reveal
    if (grid) {
      const items = grid.querySelectorAll('.bento-skill-card');
      items.forEach((item, i) => {
        gsap.set(item, { 
          opacity: 0, 
          y: 60, 
          scale: 0.95,
        });

        const itemSt = ScrollTrigger.create({
          trigger: item,
          start: 'top 90%',
          onEnter: () => {
            gsap.to(item, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: i * 0.08,
              ease: 'power3.out',
            });
          },
          onLeaveBack: () => {
            gsap.to(item, {
              opacity: 0,
              y: 60,
              scale: 0.95,
              duration: 0.4,
            });
          },
        });
        scrollTriggersRef.current.push(itemSt);
      });
    }

    // Progress bars animation
    barsRef.current.forEach((bar, key) => {
      const level = bar.dataset.level;
      gsap.set(bar, { width: '0%' });

      const barSt = ScrollTrigger.create({
        trigger: bar,
        start: 'top 95%',
        onEnter: () => {
          gsap.to(bar, {
            width: `${level}%`,
            duration: 1.2,
            delay: 0.3,
            ease: 'power3.out',
          });
        },
        onLeaveBack: () => {
          gsap.to(bar, { width: '0%', duration: 0.4 });
        },
      });
      scrollTriggersRef.current.push(barSt);
    });

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
      id="skills"
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#00d4ff]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-[150px]" />
      </div>

      <div className="container relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="section-label inline-flex items-center gap-3 justify-center mb-4">
            <span className="w-8 h-px bg-[#00d4ff]" />
            Expertise
            <span className="w-8 h-px bg-[#00d4ff]" />
          </span>
          <h2 ref={headingRef} className="section-title">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="section-description mx-auto mt-6 max-w-2xl">
            A diverse and ever-expanding toolkit for building the future of technology.
            From low-level embedded systems to high-level AI architectures.
          </p>
        </div>

        {/* Bento Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[minmax(200px,auto)]"
        >
          {skills.map((skill) => {
            const colors = colorMap[skill.color as keyof typeof colorMap];

            return (
              <div
                key={skill.id}
                className={`bento-skill-card group relative glass-card rounded-2xl p-6 transition-all duration-500 ${skill.gridClass} ${colors.glow} ${colors.border}`}
              >
                {/* Border beam on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 border-beam pointer-events-none" />
                
                {/* Icon badge */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} mb-4`}>
                  <span className="text-2xl">{skill.icon}</span>
                </div>

                {/* Category */}
                <h3 className={`text-xl font-semibold mb-2 ${colors.text}`}>
                  {skill.category}
                </h3>

                {/* Description */}
                <p className="text-[#71717a] text-sm mb-6 leading-relaxed">
                  {skill.description}
                </p>

                {/* Skills list with progress bars */}
                <div className="space-y-4 mt-auto">
                  {skill.items.map((item, itemIndex) => {
                    const barKey = `${skill.id}-${itemIndex}`;
                    return (
                      <div key={item.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-[#e4e4e7]">{item.name}</span>
                          <span className="text-xs text-[#71717a] tabular-nums">{item.level}%</span>
                        </div>
                        <div className="h-1.5 bg-[#1a1d24] rounded-full overflow-hidden">
                          <div
                            ref={(el) => setBarRef(el, barKey)}
                            data-level={item.level}
                            className={`h-full rounded-full ${colors.bar}`}
                            style={{ width: 0 }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Subtle gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />
              </div>
            );
          })}
        </div>

        {/* Additional Context */}
        <div className="mt-16 text-center">
          <p className="text-[#52525b] text-sm">
            Always learning, always building. Currently exploring{' '}
            <span className="text-[#00d4ff]">Reinforcement Learning</span>,{' '}
            <span className="text-[#00ffc8]">Edge Computing</span>, and{' '}
            <span className="text-[#8b5cf6]">WebGPU</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
