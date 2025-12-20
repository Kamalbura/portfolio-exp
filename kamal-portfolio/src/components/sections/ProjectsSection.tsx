'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FadeIn } from '../ui/TextAnimations';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Neural Vision System',
    category: 'AI / Computer Vision',
    description:
      'Real-time object detection and tracking system using YOLOv8 and custom-trained models. Deployed on edge devices for industrial automation with 98% accuracy.',
    tech: ['Python', 'PyTorch', 'OpenCV', 'ONNX', 'Jetson Nano'],
    color: 'ai',
    image: '/projects/neural-vision.jpg',
    link: '#',
    github: 'https://github.com/kamalbura/neural-vision',
  },
  {
    id: 2,
    title: 'SmartFarm IoT Platform',
    category: 'IoT / Agriculture',
    description:
      'End-to-end IoT solution for precision agriculture. Sensor network monitors soil moisture, temperature, and crop health with automated irrigation control.',
    tech: ['ESP32', 'MQTT', 'Node.js', 'InfluxDB', 'Grafana'],
    color: 'iot',
    image: '/projects/smartfarm.jpg',
    link: '#',
    github: 'https://github.com/kamalbura/smartfarm-iot',
  },
  {
    id: 3,
    title: 'Distributed ML Pipeline',
    category: 'Systems / MLOps',
    description:
      'Scalable machine learning infrastructure for training and deploying models across multiple nodes. Handles petabyte-scale data processing.',
    tech: ['Kubernetes', 'Apache Spark', 'MLflow', 'Docker', 'Terraform'],
    color: 'systems',
    image: '/projects/ml-pipeline.jpg',
    link: '#',
    github: 'https://github.com/kamalbura/ml-pipeline',
  },
  {
    id: 4,
    title: 'Autonomous Drone Navigation',
    category: 'AI / Robotics',
    description:
      'SLAM-based autonomous navigation system for drones. Uses depth cameras and IMU fusion for real-time mapping and obstacle avoidance.',
    tech: ['ROS2', 'C++', 'Python', 'OpenCV', 'PX4'],
    color: 'ai',
    image: '/projects/drone-nav.jpg',
    link: '#',
    github: 'https://github.com/kamalbura/drone-nav',
  },
  {
    id: 5,
    title: 'Energy Monitor Dashboard',
    category: 'IoT / Sustainability',
    description:
      'Real-time energy consumption monitoring for smart buildings. Predictive analytics reduce energy waste by 30% through intelligent scheduling.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Modbus', 'AWS IoT'],
    color: 'iot',
    image: '/projects/energy-monitor.jpg',
    link: '#',
    github: 'https://github.com/kamalbura/energy-monitor',
  },
  {
    id: 6,
    title: 'LLM Research Assistant',
    category: 'AI / NLP',
    description:
      'Custom RAG pipeline for academic research. Processes papers, extracts insights, and generates literature reviews with citation tracking.',
    tech: ['LangChain', 'Pinecone', 'FastAPI', 'React', 'GPT-4'],
    color: 'systems',
    image: '/projects/research-assistant.jpg',
    link: '#',
    github: 'https://github.com/kamalbura/research-assistant',
  },
];

const colorMap = {
  ai: {
    gradient: 'from-[#00d4ff]/20 to-[#0066ff]/20',
    border: 'border-[#00d4ff]/30',
    glow: 'hover:shadow-[0_0_60px_-15px_rgba(0,212,255,0.5)]',
    tag: 'bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/20',
  },
  iot: {
    gradient: 'from-[#00ffc8]/20 to-[#00d4a0]/20',
    border: 'border-[#00ffc8]/30',
    glow: 'hover:shadow-[0_0_60px_-15px_rgba(0,255,200,0.5)]',
    tag: 'bg-[#00ffc8]/10 text-[#00ffc8] border-[#00ffc8]/20',
  },
  systems: {
    gradient: 'from-[#8b5cf6]/20 to-[#6d28d9]/20',
    border: 'border-[#8b5cf6]/30',
    glow: 'hover:shadow-[0_0_60px_-15px_rgba(139,92,246,0.5)]',
    tag: 'bg-[#8b5cf6]/10 text-[#8b5cf6] border-[#8b5cf6]/20',
  },
};

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const wrapper = wrapperRef.current;

    if (!section || !container || !wrapper) return;

    // Calculate total scroll distance
    const totalWidth = wrapper.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalWidth - viewportWidth;

    // Horizontal scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${scrollDistance}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(wrapper, {
      x: -scrollDistance,
      ease: 'none',
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden"
    >
      {/* Header - Fixed during scroll */}
      <div className="absolute top-12 left-0 right-0 z-20 container">
        <FadeIn>
          <span className="section-label">Portfolio</span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </FadeIn>
      </div>

      {/* Horizontal scroll container */}
      <div ref={containerRef} className="h-screen flex items-center pt-32">
        <div
          ref={wrapperRef}
          className="horizontal-scroll-container pl-[5vw]"
        >
          {projects.map((project, index) => {
            const colors = colorMap[project.color as keyof typeof colorMap];

            return (
              <article
                key={project.id}
                className={`project-card glass-card ${colors.glow} transition-shadow duration-500`}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-50`}
                />

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-between z-10">
                  {/* Top section */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs px-3 py-1 rounded-full border ${colors.tag}`}
                      >
                        {project.category}
                      </span>
                      <span className="text-[#52525b] text-sm">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-[#f4f4f5]">
                      {project.title}
                    </h3>

                    <p className="text-[#a1a1aa] text-sm lg:text-base leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom section */}
                  <div>
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded bg-[#1a1d24] text-[#a1a1aa] border border-[#2a2d34]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <a
                        href={project.link}
                        className="magnetic-btn text-sm py-2 px-4"
                        data-cursor="View"
                      >
                        <span>View Project</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#71717a] hover:text-[#f4f4f5] transition-colors"
                        data-cursor="GitHub"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                  <div
                    className={`absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br ${colors.gradient} blur-2xl`}
                  />
                </div>
              </article>
            );
          })}

          {/* End spacer */}
          <div className="flex-shrink-0 w-[20vw]" />
        </div>
      </div>

      {/* Scroll progress indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <span className="text-[#52525b] text-xs tracking-widest uppercase">
          Drag to explore
        </span>
        <svg
          className="w-4 h-4 text-[#52525b]"
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
      </div>
    </section>
  );
}
