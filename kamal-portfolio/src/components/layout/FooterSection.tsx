'use client';

import { FadeIn } from '../ui/TextAnimations';

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-[#1a1d24]/60">
      <div className="container">
        <FadeIn>
          <p className="text-center text-[#5c5c66] text-sm tracking-[0.25em] uppercase">
            All rights reserved Kamal Bura | burakamal.site
          </p>
        </FadeIn>
      </div>
    </footer>
  );
}
