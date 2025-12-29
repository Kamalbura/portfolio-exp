 'use client';

import { useRef, useState } from 'react';
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
    name: 'WhatsApp',
    href: 'https://wa.me/919491862415',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const fd = new FormData(form);
    const name = (fd.get('name') as string) || '';
    const email = (fd.get('email') as string) || '';
    const subject = (fd.get('subject') as string) || '';
    const message = (fd.get('message') as string) || '';

    const to = 'burakamal13@gmail.com';
    const bodyPlain = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyPlain)}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyPlain)}`;

    setStatus('sending');

    // Try opening Gmail compose in a new tab; if blocked/fails, fallback to mailto
    let opened = false;
    try {
      const w = window.open(gmailUrl, '_blank');
      if (w) opened = true;
    } catch (err) {
      opened = false;
    }

    if (!opened) {
      // Fallback to mailto which opens the user's default mail client
      window.location.href = mailto;
    }

    // Provide quick UX feedback — user still needs to send the message from their mail client
    setStatus('sent');

    // Clear status after a short delay
    setTimeout(() => setStatus('idle'), 4000);
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mb-12 mt-12">
                <div>
                  <p className="text-xs text-[#71717a] uppercase tracking-widest mb-2 font-medium">Location</p>
                  <p className="text-[#f4f4f5] text-lg font-serif tracking-wide">Hyderabad, India</p>
                </div>

                <div>
                  <p className="text-xs text-[#71717a] uppercase tracking-widest mb-2 font-medium">Email</p>
                  <a href="mailto:burakamal13@gmail.com" className="text-[#f4f4f5] text-lg font-serif tracking-wide hover:text-[#00d4ff] transition-colors block">
                    burakamal13@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-xs text-[#71717a] uppercase tracking-widest mb-2 font-medium">WhatsApp</p>
                  <a href="https://wa.me/919491862415" target="_blank" rel="noopener noreferrer" className="text-[#f4f4f5] text-lg font-serif tracking-wide hover:text-[#25D366] transition-colors block">
                    +91 94918 62415
                  </a>
                </div>

                <div>
                  <p className="text-xs text-[#71717a] uppercase tracking-widest mb-2 font-medium">Availability</p>
                  <p className="text-[#f4f4f5] text-lg font-serif tracking-wide">Open to opportunities</p>
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
                className="space-y-8 pt-4"
              >
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="group">
                    <label htmlFor="name" className="block text-xs text-[#71717a] uppercase tracking-widest mb-2 group-focus-within:text-[#00d4ff] transition-colors">
                      Name
                    </label>
                    <input
                      className="w-full bg-transparent border-b border-white/10 outline-none pb-2 text-white focus:border-[#00d4ff] transition-colors placeholder:text-white/10"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-xs text-[#71717a] uppercase tracking-widest mb-2 group-focus-within:text-[#00d4ff] transition-colors">
                      Email
                    </label>
                    <input
                      className="w-full bg-transparent border-b border-white/10 outline-none pb-2 text-white focus:border-[#00d4ff] transition-colors placeholder:text-white/10"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-xs text-[#71717a] uppercase tracking-widest mb-2 group-focus-within:text-[#00d4ff] transition-colors">Subject</label>
                  <input
                    className="w-full bg-transparent border-b border-white/10 outline-none pb-2 text-white focus:border-[#00d4ff] transition-colors placeholder:text-white/10"
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Collaboration"
                    required
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-xs text-[#71717a] uppercase tracking-widest mb-2 group-focus-within:text-[#00d4ff] transition-colors">Message</label>
                  <textarea
                    className="w-full bg-transparent border-b border-white/10 outline-none pb-2 text-white resize-none focus:border-[#00d4ff] transition-colors placeholder:text-white/10"
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-liquid w-full py-4 rounded-xl text-white font-medium tracking-wide uppercase text-sm border border-white/10 hover:border-transparent transition-colors disabled:opacity-50"
                  data-cursor="Send"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Opening compose…' : 'Send Message'}
                </button>

                {status === 'sent' && (
                  <p className="mt-3 text-sm text-[#a1a1aa]">Compose window opened — please finish and send the email from your mail client.</p>
                )}
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
