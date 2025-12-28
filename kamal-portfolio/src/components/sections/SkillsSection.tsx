'use client';

import { useEffect, useRef, useMemo, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Deep engineering vocabulary - no generic AI copy
const skillWords = [
  // AI / Machine Learning
  { text: 'PyTorch', category: 'ai', weight: 5 },
  { text: 'TensorFlow', category: 'ai', weight: 4 },
  { text: 'Neural Networks', category: 'ai', weight: 5 },
  { text: 'Transformers', category: 'ai', weight: 4 },
  { text: 'CUDA', category: 'ai', weight: 3 },
  { text: 'Computer Vision', category: 'ai', weight: 4 },
  { text: 'CNNs', category: 'ai', weight: 3 },
  { text: 'GANs', category: 'ai', weight: 3 },
  { text: 'Reinforcement Learning', category: 'ai', weight: 4 },
  { text: 'NLP', category: 'ai', weight: 4 },
  { text: 'LLMs', category: 'ai', weight: 5 },
  { text: 'Hugging Face', category: 'ai', weight: 3 },
  { text: 'Scikit-learn', category: 'ai', weight: 3 },
  { text: 'OpenCV', category: 'ai', weight: 3 },
  { text: 'YOLO', category: 'ai', weight: 3 },
  { text: 'Attention', category: 'ai', weight: 3 },
  { text: 'Backpropagation', category: 'ai', weight: 2 },
  { text: 'Gradient Descent', category: 'ai', weight: 2 },
  { text: 'Feature Extraction', category: 'ai', weight: 2 },
  { text: 'Model Quantization', category: 'ai', weight: 2 },
  
  // IoT / Embedded Systems
  { text: 'MQTT', category: 'iot', weight: 4 },
  { text: 'ESP32', category: 'iot', weight: 5 },
  { text: 'Arduino', category: 'iot', weight: 4 },
  { text: 'Raspberry Pi', category: 'iot', weight: 4 },
  { text: 'LoRaWAN', category: 'iot', weight: 3 },
  { text: 'Zigbee', category: 'iot', weight: 3 },
  { text: 'Edge Computing', category: 'iot', weight: 4 },
  { text: 'Sensor Fusion', category: 'iot', weight: 3 },
  { text: 'I2C', category: 'iot', weight: 2 },
  { text: 'SPI', category: 'iot', weight: 2 },
  { text: 'UART', category: 'iot', weight: 2 },
  { text: 'PWM', category: 'iot', weight: 2 },
  { text: 'FreeRTOS', category: 'iot', weight: 3 },
  { text: 'Embedded C', category: 'iot', weight: 3 },
  { text: 'CoAP', category: 'iot', weight: 2 },
  { text: 'OTA Updates', category: 'iot', weight: 2 },
  { text: 'GPIO', category: 'iot', weight: 2 },
  { text: 'Bluetooth LE', category: 'iot', weight: 3 },
  { text: 'WiFi Mesh', category: 'iot', weight: 3 },
  
  // Systems / DevOps / Languages
  { text: 'Python', category: 'systems', weight: 5 },
  { text: 'TypeScript', category: 'systems', weight: 4 },
  { text: 'Rust', category: 'systems', weight: 3 },
  { text: 'C++', category: 'systems', weight: 4 },
  { text: 'Linux', category: 'systems', weight: 4 },
  { text: 'Docker', category: 'systems', weight: 4 },
  { text: 'Kubernetes', category: 'systems', weight: 3 },
  { text: 'WebGL', category: 'systems', weight: 4 },
  { text: 'Three.js', category: 'systems', weight: 4 },
  { text: 'React', category: 'systems', weight: 4 },
  { text: 'Next.js', category: 'systems', weight: 4 },
  { text: 'Node.js', category: 'systems', weight: 3 },
  { text: 'PostgreSQL', category: 'systems', weight: 3 },
  { text: 'Redis', category: 'systems', weight: 2 },
  { text: 'GraphQL', category: 'systems', weight: 3 },
  { text: 'REST APIs', category: 'systems', weight: 3 },
  { text: 'WebSockets', category: 'systems', weight: 3 },
  { text: 'Git', category: 'systems', weight: 3 },
  { text: 'CI/CD', category: 'systems', weight: 3 },
  { text: 'AWS', category: 'systems', weight: 3 },
  { text: 'GCP', category: 'systems', weight: 2 },
  { text: 'Shell', category: 'systems', weight: 2 },
  { text: 'WebGPU', category: 'systems', weight: 3 },
];

const categoryColors = {
  ai: { color: '#00d4ff', glow: '0 0 40px rgba(0, 212, 255, 0.9)', label: 'AI/ML' },
  iot: { color: '#00ffc8', glow: '0 0 40px rgba(0, 255, 200, 0.9)', label: 'IoT' },
  systems: { color: '#8b5cf6', glow: '0 0 40px rgba(139, 92, 246, 0.9)', label: 'Systems' },
};

interface WordData {
  text: string;
  category: 'ai' | 'iot' | 'systems';
  weight: number;
  fontSize: number;
  baseOpacity: number;
  rotation: number;
}

// Deterministic seeded random for consistent SSR/CSR
function seededRandom(seed: number): () => number {
  return () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<Map<number, HTMLSpanElement>>(new Map());
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);
  const skillsActiveRef = useRef(false);
  
  // Generate word positions with useMemo for performance
  const wordData = useMemo<WordData[]>(() => {
    const random = seededRandom(42);
    
    return skillWords.map((word) => {
      // Calculate font size based on weight (1rem to 4rem)
      const fontSize = 0.9 + (word.weight / 5) * 3;
      
      // Base opacity varies by depth (0.06 to 0.2)
      const baseOpacity = 0.06 + random() * 0.14;
      
      return {
        ...word,
        category: word.category as 'ai' | 'iot' | 'systems',
        fontSize,
        baseOpacity,
        rotation: (random() - 0.5) * 4,
      };
    });
  }, []);

  const setWordRef = useCallback((el: HTMLSpanElement | null, index: number) => {
    if (el) {
      wordsRef.current.set(index, el);
    } else {
      wordsRef.current.delete(index);
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const setSectionActive = (active: boolean) => {
      skillsActiveRef.current = active;
      window.dispatchEvent(new CustomEvent('skillsFocus', { detail: { active } }));
      if (!active) {
        window.dispatchEvent(new CustomEvent('skillHover', {
          detail: { category: '', color: '', key: '' },
        }));
      }
    };

    // Cleanup
    scrollTriggersRef.current.forEach(st => st.kill());
    scrollTriggersRef.current = [];

    const words = Array.from(wordsRef.current.values());
    
    // Set initial states
    words.forEach((word, i) => {
      const data = wordData[i];
      if (!data) return;
      gsap.set(word, {
        opacity: 0,
        y: 60 + Math.random() * 40,
      });
    });

    // Entrance animation - staggered reveal
    const entranceSt = ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      onEnter: () => {
        words.forEach((word, i) => {
          const data = wordData[i];
          if (!data) return;
          gsap.to(word, {
            opacity: data.baseOpacity,
            y: 0,
            duration: 1 + Math.random() * 0.5,
            delay: i * 0.02,
            ease: 'power3.out',
          });
        });
      },
      onLeaveBack: () => {
        words.forEach((word) => {
          gsap.to(word, { opacity: 0, y: 40, duration: 0.4 });
        });
      },
    });
    scrollTriggersRef.current.push(entranceSt);

    const focusSt = ScrollTrigger.create({
      trigger: section,
      start: 'top 70%',
      end: 'bottom top',
      onEnter: () => setSectionActive(true),
      onEnterBack: () => setSectionActive(true),
      onLeave: () => setSectionActive(false),
      onLeaveBack: () => setSectionActive(false),
    });
    scrollTriggersRef.current.push(focusSt);

    // The "Scanning Light" effect - words glow as they enter viewport center
    const scanTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.3,
      onUpdate: () => {
        const viewportCenter = window.innerHeight / 2;
        
        words.forEach((word, i) => {
          const data = wordData[i];
          if (!data || !word) return;
          
          const wordRect = word.getBoundingClientRect();
          const wordCenter = wordRect.top + wordRect.height / 2;
          
          // Distance from viewport center (normalized 0-1)
          const distanceFromCenter = Math.abs(wordCenter - viewportCenter) / (window.innerHeight * 0.5);
          const proximity = Math.max(0, 1 - distanceFromCenter);
          
          // Enhanced glow for words near center
          const glowIntensity = proximity * proximity * proximity; // Cubic falloff for tighter focus
          const targetOpacity = data.baseOpacity + (1 - data.baseOpacity) * glowIntensity * 0.9;
          const targetScale = 1 + glowIntensity * 0.06;
          
          gsap.to(word, {
            opacity: targetOpacity,
            scale: targetScale,
            duration: 0.2,
            ease: 'power1.out',
            overwrite: 'auto',
          });
        });
      }
    });
    scrollTriggersRef.current.push(scanTrigger);

    return () => {
      scrollTriggersRef.current.forEach(st => st.kill());
      scrollTriggersRef.current = [];
    };
  }, [wordData]);

  // Hover handlers
  const handleWordHover = useCallback((index: number) => {
    if (!skillsActiveRef.current) return;
    const word = wordsRef.current.get(index);
    const data = wordData[index];
    if (!word || !data) return;

    const colors = categoryColors[data.category];
    
    gsap.to(word, {
      color: colors.color,
      textShadow: colors.glow,
      scale: 1.2,
      opacity: 1,
      duration: 0.25,
      ease: 'power2.out',
    });

    // Dispatch custom event for cursor
    window.dispatchEvent(new CustomEvent('skillHover', {
      detail: { category: colors.label, color: colors.color, key: data.category }
    }));
  }, [wordData]);

  const handleWordLeave = useCallback((index: number) => {
    if (!skillsActiveRef.current) return;
    const word = wordsRef.current.get(index);
    const data = wordData[index];
    if (!word || !data) return;

    gsap.to(word, {
      color: '#f4f4f5',
      textShadow: 'none',
      scale: 1,
      opacity: data.baseOpacity,
      duration: 0.35,
      ease: 'power2.out',
    });

    // Clear cursor
    window.dispatchEvent(new CustomEvent('skillHover', {
      detail: { category: '', color: '', key: '' }
    }));
  }, [wordData]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen section-spacing overflow-hidden"
      data-section="skills"
    >
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0b0d10] to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0d10] to-transparent z-10" />
        
        {/* Central scanning light beam */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_30%_at_50%_50%,rgba(0,212,255,0.04)_0%,transparent_60%)] pointer-events-none" />
      </div>

      {/* Section Header - Asymmetric positioning */}
      <div className="container relative z-20 mb-16 lg:mb-20 max-w-5xl">
        <div className="w-full text-center">
          <span className="section-label inline-flex items-center gap-3 mb-4">
            <span className="w-12 h-px bg-gradient-to-r from-[#00d4ff] to-transparent" />
            Technical Depth
          </span>
          <h2 className="section-title">
            The Stack That
            <br />
            <span className="text-gradient">Powers Innovation</span>
          </h2>
          <p className="section-description mt-6 mx-auto text-center">
            A constellation of technologies mastered through building real systems—
            from neural architectures to embedded firmware, from cloud infrastructure 
            to real-time graphics.
          </p>
        </div>
      </div>

      {/* The Wall of Words */}
      <div 
        ref={containerRef}
        className="relative w-full min-h-[70vh] flex justify-center"
      >
        <div className="skill-wall relative max-w-5xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          {wordData.map((word, index) => (
            <span
              key={`${word.text}-${index}`}
              ref={(el) => setWordRef(el, index)}
              className="skill-word relative cursor-default select-none font-semibold tracking-tight text-[#f4f4f5] transition-colors will-change-transform whitespace-normal break-words"
              style={{
                fontSize: `clamp(${word.fontSize * 0.5}rem, ${word.fontSize * 0.8}vw, ${word.fontSize}rem)`,
                transform: `rotate(${word.rotation}deg)`,
              }}
              data-category={word.category}
              data-cursor-text={categoryColors[word.category].label}
              onMouseEnter={() => handleWordHover(index)}
              onMouseLeave={() => handleWordLeave(index)}
            >
              {word.text}
            </span>
          ))}
        </div>
      </div>

      {/* Floating accent lights */}
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-[#00d4ff]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-[#8b5cf6]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/4 w-60 h-60 bg-[#00ffc8]/3 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
