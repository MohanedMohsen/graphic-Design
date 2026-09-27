'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ALL_IMAGES } from '@/data/images';

// Marquee strip of images
const STRIP_IMAGES = ALL_IMAGES.slice(60, 80);

export default function CallToAction() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: '-10% 0px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section ref={sectionRef} id="contact" className="py-24 md:py-32 bg-off-white overflow-hidden">
      {/* Scrolling image strip */}
      <div className="mb-20 -mx-6 md:-mx-10 xl:-mx-16 overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-4 w-max"
        >
          {[...STRIP_IMAGES, ...STRIP_IMAGES].map((img, i) => (
            <div
              key={`${img.filename}-${i}`}
              className="relative w-48 md:w-64 flex-shrink-0 rounded-xl overflow-hidden"
              style={{ aspectRatio: '3/4' }}
            >
              <Image
                src={img.src}
                alt=""
                fill
                className="object-cover"
                sizes="256px"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">
        <div ref={headerRef} className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs tracking-[0.25em] uppercase text-mid-gray font-medium">
              New Projects
            </span>
            <div className="w-8 h-px bg-accent" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-semibold text-charcoal tracking-tightest leading-none mb-10"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)' }}
          >
            Ready to Create
            <br />
            <em className="not-italic text-mid-gray">Something Brilliant?</em>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-mid-gray text-lg leading-relaxed mb-14 max-w-lg mx-auto"
          >
            Whether you&apos;re starting from scratch or leveling up an existing brand, let&apos;s talk about what we can build together.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="mailto:haitham@design.studio"
              className="group flex items-center gap-3 bg-charcoal text-cream text-base font-semibold px-10 py-5 rounded-full hover:bg-dark-gray transition-all duration-300 hover:scale-105"
            >
              START A PROJECT
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
            <a
              href="mailto:haitham@design.studio"
              className="group flex items-center gap-2 border border-light-border text-charcoal text-base font-medium px-8 py-5 rounded-full hover:border-charcoal transition-all duration-300"
            >
              Send an Email
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center justify-center gap-8 mt-16 text-xs tracking-widest uppercase text-mid-gray/60"
          >
            <span>Based in Egypt</span>
            <span className="w-1 h-1 rounded-full bg-light-border" />
            <span>Available Worldwide</span>
            <span className="w-1 h-1 rounded-full bg-light-border" />
            <span>Open to Collaboration</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
