'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SERVICES = [
  {
    number: '01',
    title: 'Brand Identity',
    description:
      'Complete visual identity systems — logotype design, color theory, typography, brand guidelines, and the strategic thinking that ties it all together.',
    deliverables: ['Logo & Logotype', 'Brand Guidelines', 'Color Systems', 'Typography'],
  },
  {
    number: '02',
    title: 'Editorial & Print',
    description:
      'Magazine layouts, books, annual reports, and printed matter where typography and image combine to create compelling narratives.',
    deliverables: ['Magazine Design', 'Book Layout', 'Annual Reports', 'Print Collateral'],
  },
  {
    number: '03',
    title: 'Poster & Campaign',
    description:
      'Large-format poster design and campaign visuals that demand attention in physical and digital spaces alike.',
    deliverables: ['Event Posters', 'Campaign Systems', 'Art Direction', 'Large Format'],
  },
  {
    number: '04',
    title: 'Digital & Social',
    description:
      'Social media content systems, digital assets, and motion graphics engineered for engagement and brand consistency.',
    deliverables: ['Content Systems', 'Motion Graphics', 'Digital Ads', 'Social Templates'],
  },
  {
    number: '05',
    title: 'Packaging Design',
    description:
      'Product packaging that transforms everyday items into collectible design objects, merging aesthetics with functionality.',
    deliverables: ['Product Packaging', 'Label Design', '3D Mockups', 'Retail Ready'],
  },
  {
    number: '06',
    title: 'Creative Direction',
    description:
      'Strategic creative oversight for photoshoots, brand campaigns, and multi-channel projects requiring a unified vision.',
    deliverables: ['Photo Direction', 'Campaign Strategy', 'Creative Consulting', 'Brand Audits'],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-5% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group border border-light-border rounded-2xl p-8 hover:border-charcoal/30 hover:bg-off-white transition-all duration-500 cursor-default"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="text-4xl font-semibold text-light-border group-hover:text-accent transition-colors duration-400">
          {service.number}
        </span>
        <div className="w-8 h-8 border border-light-border rounded-full flex items-center justify-center text-light-border group-hover:border-charcoal group-hover:text-charcoal group-hover:rotate-45 transition-all duration-400">
          ↗
        </div>
      </div>

      <h3 className="text-xl font-semibold text-charcoal mb-3 tracking-tight">
        {service.title}
      </h3>
      <p className="text-sm text-mid-gray leading-relaxed mb-6">
        {service.description}
      </p>

      <ul className="flex flex-wrap gap-2">
        {service.deliverables.map((item) => (
          <li
            key={item}
            className="text-[11px] tracking-wider uppercase text-mid-gray border border-light-border px-3 py-1 rounded-full"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: '-10% 0px' });

  return (
    <section id="services" className="py-24 md:py-32 bg-off-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">
        {/* Header */}
        <div ref={headerRef} className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs tracking-[0.25em] uppercase text-mid-gray font-medium">
              What I Do
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-semibold text-charcoal leading-none tracking-tightest"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              Services &
              <br />
              Expertise
            </motion.h2>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center gap-3 self-start lg:self-auto text-sm font-semibold text-charcoal border-b border-charcoal pb-1 hover:gap-5 transition-all duration-300"
            >
              Discuss Your Project
              <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                ↗
              </span>
            </motion.a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
