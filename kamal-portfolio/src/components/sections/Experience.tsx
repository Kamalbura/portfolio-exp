'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: '2024',
    title: 'AI Research Internship',
    organization: 'Leading Tech Company',
    description: 'Worked on large language models and developed production-ready AI pipelines for enterprise applications.',
    type: 'internship',
    color: '#00d4ff',
  },
  {
    year: '2024',
    title: 'Smart India Hackathon Winner',
    organization: 'Government of India',
    description: 'Built an AI-powered crop disease detection system using drone imagery and deep learning.',
    type: 'hackathon',
    color: '#00ff88',
  },
  {
    year: '2023',
    title: 'IoT Systems Developer',
    organization: 'University Research Lab',
    description: 'Designed and deployed sensor networks for environmental monitoring across campus buildings.',
    type: 'research',
    color: '#8b5cf6',
  },
  {
    year: '2023',
    title: 'Machine Learning Specialization',
    organization: 'Stanford Online (Coursera)',
    description: 'Completed comprehensive ML course covering supervised learning, neural networks, and deep learning.',
    type: 'certification',
    color: '#fbbf24',
  },
  {
    year: '2022',
    title: 'Started B.Tech in CSE',
    organization: 'Premier Engineering College, India',
    description: 'Began undergraduate journey specializing in AI and IoT systems engineering.',
    type: 'education',
    color: '#00ffcc',
  },
  {
    year: '2022',
    title: 'First Open Source Contribution',
    organization: 'GitHub',
    description: 'Contributed to popular ML libraries and started building my own projects.',
    type: 'milestone',
    color: '#ff6b6b',
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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

      const items = timelineRef.current?.querySelectorAll('.timeline-item');
      items?.forEach((item, i) => {
        gsap.fromTo(
          item,
          { 
            x: i % 2 === 0 ? -50 : 50, 
            opacity: 0 
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
          }
        );
      });

      const line = timelineRef.current?.querySelector('.timeline-line');
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: 'top',
            ease: 'none',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="section-padding relative">
      <div className="container mx-auto px-6">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold text-center mb-16">
          <span className="text-[#71717a]">The</span>{' '}
          <span className="text-gradient-violet">Path</span>
        </h2>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          <div className="timeline-line absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#00d4ff] via-[#8b5cf6] to-[#00ff88]" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`timeline-item relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                  }`}
                >
                  <div
                    className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300"
                    style={{
                      boxShadow: `0 0 30px ${item.color}15`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3 justify-between md:justify-start">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: `${item.color}20`,
                          color: item.color,
                        }}
                      >
                        {item.type}
                      </span>
                      <span className="text-sm text-[#71717a]">{item.year}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-[#a1a1aa] mb-3">{item.organization}</p>
                    <p className="text-sm text-[#71717a]">{item.description}</p>
                  </div>
                </div>

                <div
                  className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 z-10"
                  style={{
                    backgroundColor: '#0b0d10',
                    borderColor: item.color,
                    boxShadow: `0 0 20px ${item.color}50`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
