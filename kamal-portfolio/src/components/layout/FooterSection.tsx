'use client';

import { FadeIn } from '../ui/TextAnimations';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-[#1a1d24]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <FadeIn>
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-2xl font-bold text-gradient">KB</span>
              <p className="text-[#52525b] text-sm">
                © {currentYear} Kamal Bura. Crafted with precision.
              </p>
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-6">
              {['About', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[#71717a] hover:text-[#00d4ff] text-sm transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </FadeIn>

          {/* Status */}
          <FadeIn delay={0.2}>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ffc8] animate-pulse" />
              <span className="text-[#71717a] text-sm">
                Available for work
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Bottom decoration */}
        <div className="mt-12 pt-8 border-t border-[#1a1d24]/50">
          <p className="text-center text-[#52525b] text-xs">
            Built with Next.js, Three.js & GSAP • Designed in Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  );
}
