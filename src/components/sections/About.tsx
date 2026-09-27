'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ABOUT_IMAGES, ALL_IMAGES } from '@/data/images';

const STATS = [
  { value: '7+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '80+', label: 'Happy Clients' },
  { value: '15+', label: 'Awards & Features' },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: '-10% 0px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 60]);

  return (
    <section ref={sectionRef} id="about" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Images */}
          <div className="relative">
            {/* Main image with parallax */}
            <motion.div
              style={{ y: y1, aspectRatio: '3/4', position: 'relative', zIndex: 10 }}
              className="rounded-3xl overflow-hidden"
            >
              <Image
                src={ABOUT_IMAGES[0]}
                alt="Haitham — Graphic Designer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Secondary floating image */}
            <motion.div
              style={{
                y: y2,
                aspectRatio: '1/1',
                position: 'absolute',
                right: '-3rem',
                bottom: '3rem',
                width: '40%',
                zIndex: 20,
              }}
              className="rounded-2xl overflow-hidden border-4 border-cream shadow-2xl hidden md:block"
            >
              <Image
                src={ALL_IMAGES[11].src}
                alt="Design work detail"
                fill
                className="object-cover"
                sizes="20vw"
              />
            </motion.div>

            {/* Decorative circles */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full border border-light-border opacity-40 pointer-events-none" />
            <div className="absolute top-12 -left-12 w-24 h-24 rounded-full border border-light-border opacity-30 pointer-events-none" />
          </div>

          {/* Right — Content */}
          <div ref={headerRef}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-[0.25em] uppercase text-mid-gray font-medium">
                About the Designer
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-semibold text-charcoal tracking-tightest mb-8 leading-none"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              Design as a
              <br />
              <em className="not-italic text-mid-gray">conversation.</em>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5 text-mid-gray leading-relaxed mb-10"
            >
              <p>
                I&apos;m Haitham, a graphic designer with over 7 years of experience crafting visual identities, editorial layouts, and brand systems for ambitious clients around the world.
              </p>
              <p>
                My work lives at the intersection of strategy and aesthetics — every design decision is purposeful, rooted in understanding what a brand needs to communicate and who it needs to reach.
              </p>
              <p>
                Whether it&apos;s a complete brand identity or a single powerful poster, I approach every project with the same level of craft, curiosity, and creative ambition.
              </p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-6 mb-10"
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="border-t border-light-border pt-5">
                  <div className="text-3xl md:text-4xl font-semibold text-charcoal tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-wider uppercase text-mid-gray">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4"
            >
              <a
                href="#contact"
                className="flex items-center gap-2 bg-charcoal text-cream text-sm font-semibold px-7 py-4 rounded-full hover:bg-dark-gray transition-all duration-300 hover:scale-105"
              >
                Work With Me ↗
              </a>
              <a
                href="#work"
                className="text-sm font-medium text-mid-gray border-b border-mid-gray/40 pb-0.5 hover:text-charcoal hover:border-charcoal transition-colors duration-300"
              >
                See My Work
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
