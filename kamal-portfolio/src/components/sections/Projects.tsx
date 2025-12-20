'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Neural Vision AI',
    description: 'Real-time object detection and tracking system using YOLOv8 and custom CNN architectures. Deployed on edge devices for autonomous navigation.',
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'CUDA'],
    category: 'AI',
    color: '#00d4ff',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 2,
    title: 'Smart Home IoT Hub',
    description: 'Complete home automation system with voice control, sensor fusion, and predictive maintenance. Built with ESP32 mesh network and MQTT.',
    techStack: ['C++', 'ESP32', 'Node.js', 'MQTT', 'React'],
    category: 'IoT',
    color: '#00ff88',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 3,
    title: 'Distributed File System',
    description: 'Custom implementation of a fault-tolerant distributed file system with consistent hashing and replication strategies.',
    techStack: ['Go', 'gRPC', 'Docker', 'Redis'],
    category: 'Systems',
    color: '#8b5cf6',
    github: 'https://github.com',
    demo: null,
  },
  {
    id: 4,
    title: 'AI Code Review Bot',
    description: 'Automated code review system using GPT-4 and static analysis. Integrates with GitHub Actions for CI/CD pipelines.',
    techStack: ['Python', 'FastAPI', 'OpenAI', 'GitHub API'],
    category: 'AI',
    color: '#00d4ff',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 5,
    title: 'Environmental Monitor',
    description: 'IoT-based environmental monitoring system with ML-powered air quality prediction and real-time dashboard.',
    techStack: ['Arduino', 'Python', 'TensorFlow Lite', 'Grafana'],
    category: 'IoT',
    color: '#00ff88',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 6,
    title: 'Algorithm Visualizer',
    description: 'Interactive web application for visualizing sorting, searching, and graph algorithms with step-by-step animations.',
    techStack: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
    category: 'DSA',
    color: '#fbbf24',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);

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

      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        gsap.to(scrollContainer, {
          x: -scrollWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: () => `+=${scrollWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative overflow-hidden">
      <div className="h-screen flex flex-col justify-center">
        <div className="container mx-auto px-6 mb-12">
          <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold">
            <span className="text-[#71717a]">The</span>{' '}
            <span className="text-gradient">Lab</span>
          </h2>
          <p className="text-[#71717a] mt-4">Scroll to explore projects →</p>
        </div>

        <div ref={scrollContainerRef} className="flex gap-8 px-6 will-change-transform">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-[400px] md:w-[500px]"
            >
              <div
                className="glass-card rounded-3xl p-8 h-full cursor-pointer group hover:scale-[1.02] transition-all duration-500"
                style={{
                  boxShadow: `0 0 40px ${project.color}10`,
                }}
                onClick={() => setActiveProject(project)}
              >
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                  style={{
                    backgroundColor: `${project.color}20`,
                    color: project.color,
                  }}
                >
                  {project.category}
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-[#a1a1aa] mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 rounded-full text-xs text-[#71717a]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                      style={{ color: project.color }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="glass-card rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: `0 0 60px ${activeProject.color}20`,
            }}
          >
            <div className="flex justify-between items-start mb-6">
              <div
                className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: `${activeProject.color}20`,
                  color: activeProject.color,
                }}
              >
                {activeProject.category}
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="text-[#71717a] hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <h3 className="text-3xl font-bold mb-4">{activeProject.title}</h3>
            <p className="text-[#a1a1aa] mb-6 leading-relaxed">{activeProject.description}</p>

            <h4 className="text-sm font-semibold text-[#71717a] mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {activeProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 glass rounded-full text-sm"
                  style={{ color: activeProject.color }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 glass rounded-full text-center hover:bg-white/10 transition-colors"
              >
                View on GitHub
              </a>
              {activeProject.demo && (
                <a
                  href={activeProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-full text-center text-black font-semibold"
                  style={{ backgroundColor: activeProject.color }}
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
