 'use client';

import { useRef } from 'react';
import type { ReactNode } from 'react';
import { FadeIn } from '../ui/TextAnimations';

const socials: { name: string; href: string; icon: ReactNode }[] = [
  {
    name: 'Email',
    href: 'mailto:burakamal13@gmail.com',
    icon: (
      <svg width="18" height="14" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M2 3h20v12H2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 4.2l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kamal-bura',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-2-2 2 2 0 00-2 2v6h-4V8h4v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="8" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Kamalbura',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 2C7.03 2 3 6.03 3 11c0 4 2.53 7.38 6.04 8.58.44.08.6-.19.6-.42 0-.21-.01-.77-.01-1.5-2.45.53-2.97-1.16-2.97-1.16-.4-1.02-1-1.29-1-1.29-.82-.56.06-.55.06-.55.9.06 1.37.93 1.37.93.8 1.36 2.09.97 2.6.74.08-.58.31-.97.56-1.19-1.95-.22-4-0.98-4-4.36 0-.96.34-1.74.9-2.35-.09-.22-.39-1.11.09-2.3 0 0 .74-.24 2.42.9a8.3 8.3 0 012.2-.3c.75 0 1.5.1 2.2.3 1.68-1.14 2.42-.9 2.42-.9.48 1.19.18 2.08.09 2.3.56.61.9 1.39.9 2.35 0 3.39-2.06 4.13-4.02 4.35.32.28.6.82.6 1.66 0 1.2-.01 2.17-.01 2.46 0 .23.16.5.61.42C18.47 18.38 21 15 21 11c0-4.97-4.03-9-9-9z" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section
      id="contact"
      className="relative section-spacing overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#00d4ff]/5 via-transparent to-transparent rounded-full" />
      </div>

      <div className="container relative max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Info */}
          <div>
            <FadeIn>
              <span className="section-label">Get in Touch</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="section-title mb-6">
                Let&apos;s Build
                <br />
                <span className="text-gradient">Something Great</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="section-description mb-10">
                Whether you have a project in mind, want to collaborate on research,
                or just want to connect—I&apos;d love to hear from you. Let&apos;s explore
                how we can create impactful solutions together.
              </p>
            </FadeIn>

            {/* Contact details */}
            <FadeIn delay={0.3}>
              <div className="space-y-4 mb-12 mt-8">
                <div className="p-4 rounded-2xl glass-card flex items-center gap-5 hover:bg-white/5 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#00d4ff]/10 flex items-center justify-center text-[#00d4ff] border border-[#00d4ff]/20">
                    <div className="w-2.5 h-2.5 bg-[#00d4ff] rounded-full" />
                  </div>
                  <div>
                    <p className="text-xs text-[#71717a] uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-[#f4f4f5] font-medium">Hyderabad, India</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl glass-card flex items-center gap-5 hover:bg-white/5 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#00ffc8]/10 flex items-center justify-center text-[#00ffc8] border border-[#00ffc8]/20">
                    <div className="w-3 h-1.5 bg-[#00ffc8] rounded-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-[#71717a] uppercase tracking-wider mb-0.5">Email</p>
                    <a href="mailto:burakamal13@gmail.com" className="text-[#f4f4f5] font-medium hover:text-[#00d4ff] transition-colors">
                      burakamal13@gmail.com
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl glass-card flex items-center gap-5 hover:bg-white/5 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center text-[#8b5cf6] border border-[#8b5cf6]/20">
                    <div className="w-2.5 h-2.5 bg-[#8b5cf6] rounded-full animate-pulse" />
                  </div>
                  <div>
                    <p className="text-xs text-[#71717a] uppercase tracking-wider mb-0.5">Availability</p>
                    <p className="text-[#f4f4f5] font-medium">Open to opportunities</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Social links */}
            <FadeIn delay={0.4}>
              <div className="flex items-center gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.name === 'Email' ? '_self' : '_blank'}
                    rel={social.name === 'Email' ? undefined : 'noopener noreferrer'}
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-[#71717a] hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all duration-300"
                    data-cursor={social.name}
                    aria-label={social.name}
                  >
                    <span className="inline-flex" style={{ color: 'currentColor' }}>{social.icon}</span>
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right column - Form */}
          <div>
            <FadeIn direction="right" delay={0.2}>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-8 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-[#a1a1aa] mb-2 terminal-label">
                      Name
                    </label>
                    <div className="terminal-field">
                      <input
                        className="w-full bg-[rgba(255,255,255,0.03)] border-0 outline-none pb-2 text-white"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-[#a1a1aa] mb-2 terminal-label">
                      Email
                    </label>
                    <div className="terminal-field">
                      <input
                        className="w-full bg-[rgba(255,255,255,0.03)] border-0 outline-none pb-2 text-white"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-[#a1a1aa] mb-2 terminal-label">Subject</label>
                  <div className="terminal-field">
                    <input
                      className="w-full bg-[rgba(255,255,255,0.03)] border-0 outline-none pb-2 text-white"
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Project Collaboration"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-[#a1a1aa] mb-2 terminal-label">Message</label>
                  <div className="terminal-field">
                    <textarea
                      className="w-full bg-[rgba(255,255,255,0.03)] border-0 outline-none pb-2 text-white resize-none"
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="magnetic-btn magnetic-btn-primary w-full" data-cursor="Send">
                  <span className="mr-3">Send Message</span>
                  <div className="w-4 h-4 bg-white/10 rounded-sm" />
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
