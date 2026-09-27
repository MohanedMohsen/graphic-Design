'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STEPS = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'Every great design starts with deep understanding. We explore your brand, audience, competitors, and goals to build a solid strategic foundation before a single pixel is placed.',
    duration: '1–2 weeks',
  },
  {
    number: '02',
    title: 'Concept Development',
    description:
      'From strategy comes creative direction. I develop multiple distinct concepts, each exploring a different visual approach, before narrowing down to the strongest solution.',
    duration: '1–2 weeks',
  },
  {
    number: '03',
    title: 'Design & Refinement',
    description:
      'The chosen direction is developed in full detail — every element considered, refined, and polished. Feedback rounds ensure the design evolves in exactly the right direction.',
    duration: '2–3 weeks',
  },
  {
    number: '04',
    title: 'Delivery & Support',
    description:
      'Final files are delivered in every format you need, with a full brand guide if applicable. Ongoing support ensures successful implementation across all touchpoints.',
    duration: 'Ongoing',
  },
];

function StepRow({ step, index }: { step: (typeof STEPS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-5% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-6 md:gap-12 items-start border-t border-cream/10 py-10 md:py-12 hover:border-cream/30 transition-colors duration-300"
    >
      {/* Number */}
      <div className="text-6xl font-semibold text-cream/15 group-hover:text-accent transition-colors duration-500 leading-none">
        {step.number}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
          {step.title}
        </h3>
        <p className="text-cream/60 text-sm md:text-base leading-relaxed max-w-xl">
          {step.description}
        </p>
      </div>

      {/* Duration */}
      <div className="md:text-right">
        <div className="text-xs tracking-widest uppercase text-cream/30 mb-1">Timeline</div>
        <div className="text-sm font-medium text-cream/70 whitespace-nowrap">{step.duration}</div>
      </div>
    </motion.div>
  );
}

export default function HowIWork() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: '-10% 0px' });

  return (
    <section id="process" className="py-24 md:py-32 bg-charcoal text-cream">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-[0.25em] uppercase text-cream/50 font-medium">
                The Process
              </span>
            </div>
            <h2
              className="font-semibold leading-none tracking-tightest"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              How I Work
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-cream/60 max-w-xs text-sm leading-relaxed"
          >
            A structured creative process that delivers exceptional results, consistently.
          </motion.p>
        </div>

        {/* Steps */}
        <div>
          {STEPS.map((step, i) => (
            <StepRow key={step.number} step={step} index={i} />
          ))}
          <div className="border-t border-cream/10" />
        </div>
      </div>
    </section>
  );
}
