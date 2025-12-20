'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    color: '#00d4ff',
    skills: [
      { name: 'TensorFlow / PyTorch', level: 85 },
      { name: 'Deep Learning', level: 80 },
      { name: 'NLP & Computer Vision', level: 75 },
      { name: 'Data Science', level: 85 },
    ],
  },
  {
    title: 'IoT & Embedded Systems',
    color: '#00ff88',
    skills: [
      { name: 'Arduino / ESP32', level: 90 },
      { name: 'Raspberry Pi', level: 85 },
      { name: 'Sensor Integration', level: 88 },
      { name: 'MQTT / Protocols', level: 80 },
    ],
  },
  {
    title: 'CSE Fundamentals',
    color: '#8b5cf6',
    skills: [
      { name: 'Operating Systems', level: 85 },
      { name: 'Computer Networks', level: 80 },
      { name: 'DBMS', level: 85 },
      { name: 'System Design', level: 75 },
    ],
  },
  {
    title: 'DSA & Problem Solving',
    color: '#fbbf24',
    skills: [
      { name: 'Data Structures', level: 90 },
      { name: 'Algorithms', level: 88 },
      { name: 'Competitive Coding', level: 82 },
      { name: 'Time Complexity', level: 85 },
    ],
  },
  {
    title: 'Full Stack Development',
    color: '#00ffcc',
    skills: [
      { name: 'React / Next.js', level: 85 },
      { name: 'Node.js / Express', level: 80 },
      { name: 'Python / FastAPI', level: 85 },
      { name: 'MongoDB / PostgreSQL', level: 78 },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          },
        }
      );

      const cards = cardsRef.current?.querySelectorAll('.skill-card');
      cards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );

        const bars = card.querySelectorAll('.skill-bar-fill');
        bars.forEach((bar) => {
          const width = bar.getAttribute('data-width');
          gsap.fromTo(
            bar,
            { width: '0%' },
            {
              width: width + '%',
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
              },
            }
          );
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section-padding relative">
      <div className="container mx-auto px-6">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold text-center mb-16">
          <span className="text-[#71717a]">The</span>{' '}
          <span className="text-gradient">Stack</span>
        </h2>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="skill-card glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300"
              style={{
                boxShadow: `0 0 30px ${category.color}10`,
              }}
            >
              <h3
                className="text-xl font-bold mb-6"
                style={{ color: category.color }}
              >
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-[#a1a1aa]">{skill.name}</span>
                      <span className="text-sm text-[#71717a]">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#1a1a2e] rounded-full overflow-hidden">
                      <div
                        className="skill-bar-fill h-full rounded-full"
                        data-width={skill.level}
                        style={{
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {['Python', 'C++', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'Git', 'Docker', 'AWS', 'Linux'].map(
            (tech) => (
              <span
                key={tech}
                className="px-4 py-2 glass rounded-full text-sm text-[#a1a1aa] hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
