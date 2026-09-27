'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { SELECTED_PROJECTS } from '@/data/images';

function ProjectCard({
  project,
  index,
}: {
  project: (typeof SELECTED_PROJECTS)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl bg-cream mb-6">
        <div
          className="relative overflow-hidden aspect-[4/3]"
        >
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-charcoal/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="text-cream text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="w-16 h-16 border-2 border-cream rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">↗</span>
              </div>
              <span className="text-sm tracking-widest uppercase font-medium">
                View Project
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs tracking-[0.2em] uppercase text-mid-gray font-medium">
              {project.category}
            </span>
            <span className="text-xs text-light-border">—</span>
            <span className="text-xs text-mid-gray">{project.year}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-charcoal tracking-tight leading-tight mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-mid-gray leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
        <div className="flex-shrink-0 text-2xl text-light-border group-hover:text-charcoal group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
          ↗
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] tracking-wider uppercase border border-light-border text-mid-gray px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SelectedProjects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: '-10% 0px' });

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-[0.25em] uppercase text-mid-gray font-medium">
                Case Studies
              </span>
            </div>
            <h2
              className="font-semibold text-charcoal leading-none tracking-tightest"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              Selected
              <br />
              Projects
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4"
          >
            <span className="text-5xl md:text-6xl font-semibold text-light-border">
              {String(SELECTED_PROJECTS.length).padStart(2, '0')}
            </span>
            <p className="text-mid-gray text-sm max-w-[200px] leading-relaxed">
              Featured projects from across disciplines.
            </p>
          </motion.div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {SELECTED_PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
