'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
];

const SOCIAL_LINKS = [
  { label: 'Behance', href: 'https://behance.net' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Dribbble', href: 'https://dribbble.com' },
];

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <footer className="px-4 md:px-8 xl:px-12 pb-6 md:pb-8 bg-off-white">
      {/* Floating footer card */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="bg-charcoal text-cream rounded-4xl md:rounded-5xl overflow-hidden"
      >
        {/* Top content */}
        <div className="px-8 md:px-14 xl:px-20 pt-16 md:pt-20 pb-12 md:pb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs tracking-[0.25em] uppercase text-cream/40 font-medium">
              Let&apos;s Connect
            </span>
          </div>

          {/* Headline */}
          <h2
            className="font-semibold leading-none tracking-tightest mb-12 md:mb-16"
            style={{ fontSize: 'clamp(2rem, 6vw, 6rem)' }}
          >
            LET&apos;S MAKE
            <br />
            SOMETHING WORTH
            <br />
            <em className="not-italic text-cream/40">REMEMBERING.</em>
          </h2>

          {/* CTA */}
          <a
            href="mailto:haitham@design.studio"
            className="group inline-flex items-center gap-3 bg-cream text-charcoal text-sm font-semibold px-8 py-5 rounded-full hover:bg-accent transition-all duration-500 hover:scale-105"
          >
            START A PROJECT ↗
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10" />

        {/* Bottom links */}
        <div className="px-8 md:px-14 xl:px-20 py-8 md:py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-cream rounded-full" />
              <span className="text-sm font-semibold tracking-widest uppercase">
                Haitham
              </span>
              <span className="text-cream/30 text-xs ml-2">
                Graphic Designer
              </span>
            </div>

            {/* Nav links */}
            <nav className="flex flex-wrap gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-cream/50 hover:text-cream transition-colors duration-200 tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Social links */}
            <div className="flex flex-wrap gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/50 hover:text-cream transition-colors duration-200 underline-offset-4 hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 pt-8 border-t border-cream/10 gap-4">
            <p className="text-xs text-cream/25">
              © {new Date().getFullYear()} Haitham. All rights reserved.
            </p>
            <p className="text-xs text-cream/25">
              Crafted with precision & passion.
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
