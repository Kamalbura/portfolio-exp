'use client';

import { useState, useEffect } from 'react';
import { useSmoothScroll } from '../providers/SmoothScrollProvider';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );
      
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(navItems[index].name.toLowerCase());
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target && lenis) {
      lenis.scrollTo(target as HTMLElement, {
        offset: -96,
        duration: 1.5,
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'py-2 glass-strong' : 'py-3 bg-transparent'
      }`}
    >
      <nav className="container flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="relative group ml-1 sm:ml-2 md:ml-0"
          data-cursor="Home"
        >
          <span className="text-2xl font-bold text-gradient">KB</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#00ffc8] transition-all duration-300 group-hover:w-full" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative px-6 py-2 text-sm transition-colors duration-200 ${
                activeSection === item.name.toLowerCase()
                  ? 'text-[#00d4ff]'
                  : 'text-[#a1a1aa] hover:text-[#f4f4f5]'
              }`}
              data-cursor={item.name}
            >
              {item.name}
              {activeSection === item.name.toLowerCase() && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00d4ff]" />
              )}
            </a>
          ))}
        </div>

        {/* CTA Button - visible on all screen sizes */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="magnetic-btn text-sm py-2 px-6"
          data-cursor="Contact"
        >
          <span>Let&apos;s Talk</span>
        </a>
      </nav>
    </header>
  );
}
