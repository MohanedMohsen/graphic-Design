'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { HERO_IMAGES } from '@/data/images';

const HEADLINE_WORDS = ['DESIGN', 'THAT', 'GETS', 'NOTICED.'];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    mouseX.set((e.clientX - innerWidth / 2) / innerWidth * 30);
    mouseY.set((e.clientY - innerHeight / 2) / innerHeight * 20);
  }, [mouseX, mouseY]);

  useEffect(() => {
    setMounted(true);
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Animate headline in with GSAP
  useEffect(() => {
    if (!mounted || !headlineRef.current) return;
    const words = headlineRef.current.querySelectorAll('.headline-word');
    gsap.fromTo(
      words,
      { y: '100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 1,
        stagger: 0.08,
        ease: 'power4.out',
        delay: 0.3,
      }
    );
  }, [mounted]);

  // Image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
    >
      {/* Background Images */}
      {HERO_IMAGES.map((img, i) => (
        <motion.div
          key={img.filename}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: i === currentImage ? 1 : 0,
            scale: i === currentImage ? 1.05 : 1,
          }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="absolute inset-[-5%]"
            style={{ x: springX, y: springY }}
          >
            <Image
              src={img.src}
              alt={`Design work ${i + 1}`}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Sophisticated overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `
            linear-gradient(to right, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0.2) 60%, transparent 100%),
            linear-gradient(to top, rgba(26,26,26,0.8) 0%, transparent 50%)
          `,
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 z-10 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-end pb-16 md:pb-20 px-6 md:px-10 xl:px-16 max-w-[1600px] mx-auto">
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-6 md:mb-8"
        >
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs tracking-[0.25em] uppercase text-cream/70 font-medium">
            Creative Studio
          </span>
        </motion.div>

        {/* Headline */}
        <div ref={headlineRef} className="overflow-hidden mb-8 md:mb-10">
          <div className="flex flex-wrap gap-x-4 md:gap-x-6">
            {HEADLINE_WORDS.map((word, i) => (
              <div key={i} className="overflow-hidden">
                <div
                  className="headline-word text-cream font-semibold leading-none tracking-tightest"
                  style={{
                    fontSize: 'clamp(3.5rem, 10vw, 9rem)',
                    letterSpacing: '-0.04em',
                  }}
                >
                  {word}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-0 md:justify-between">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="text-cream/75 text-base md:text-lg max-w-sm leading-relaxed"
          >
            Visual identity, editorial design & brand strategy
            <br />
            for brands that demand excellence.
          </motion.p>

          {/* CTA group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6"
          >
            {/* Image counter */}
            <div className="flex items-center gap-2">
              {HERO_IMAGES.slice(0, 5).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-5 h-0.5 rounded-full transition-all duration-500 ${
                    i === currentImage % 5 ? 'bg-cream w-8' : 'bg-cream/40'
                  }`}
                />
              ))}
            </div>

            <a
              href="#contact"
              className="group flex items-center gap-3 bg-cream text-charcoal text-sm font-semibold px-7 py-4 rounded-full hover:bg-accent transition-all duration-500 hover:scale-105"
            >
              START A PROJECT
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 right-8 md:right-16 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-cream/50 text-[10px] tracking-[0.3em] uppercase rotate-90 origin-center mb-4">
          Scroll
        </span>
        <div className="w-px h-12 bg-cream/30 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-cream"
            animate={{ y: ['0%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ height: '40%' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
