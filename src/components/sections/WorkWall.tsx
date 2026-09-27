'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WORK_WALL_IMAGES } from '@/data/images';
import type { ImageAsset } from '@/data/images';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface WorkItemProps {
  image: ImageAsset;
  index: number;
}

function WorkItem({ image, index }: WorkItemProps) {
  const categoryLabels: Record<string, string> = {
    branding: 'Brand Identity',
    editorial: 'Editorial',
    poster: 'Poster Design',
    social: 'Digital & Social',
  };

  const yearIndex = 2023 + (index % 2);

  return (
    <div
      className="work-item rounded-2xl overflow-hidden aspect-[4/3] relative w-full"
      data-work-item
    >
      <Image
        src={image.src}
        alt={`Design work — ${categoryLabels[image.category] || image.category}`}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading={index < 12 ? 'eager' : 'lazy'}
      />
      <div className="work-overlay" />
      <div className="work-info text-cream">
        <p className="text-xs tracking-[0.2em] uppercase opacity-70 mb-1">
          {categoryLabels[image.category] || image.category}
        </p>
        <h3 className="text-sm font-semibold">Design Project {String(index + 1).padStart(2, '0')}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs opacity-50">{yearIndex}</span>
          <span className="text-xs font-medium opacity-90 hover:opacity-100">
            View Project ↗
          </span>
        </div>
      </div>
    </div>
  );
}

export default function WorkWall() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const items = gridRef.current.querySelectorAll('[data-work-item]');

    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 50,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        stagger: {
          amount: 1.5,
          from: 'start',
        },
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Show 60 images in the work wall
  const displayImages = WORK_WALL_IMAGES.slice(0, 60);

  return (
    <section ref={sectionRef} id="work" className="py-24 md:py-32 bg-off-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-[0.25em] uppercase text-mid-gray font-medium">
                Selected Work
              </span>
            </div>
            <h2
              className="font-semibold text-charcoal leading-none tracking-tightest"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              The Work Wall
            </h2>
          </div>
          <p className="text-mid-gray text-base md:text-lg max-w-xs leading-relaxed">
            A curated collection of projects spanning branding, print, digital, and beyond.
          </p>
        </div>

        {/* Masonry Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          style={{ gridAutoRows: 'auto' }}
        >
          {displayImages.map((image, i) => (
            <WorkItem key={image.filename} image={image} index={i} />
          ))}
        </div>

        {/* View all */}
        <div className="flex justify-center mt-16">
          <button className="group flex items-center gap-3 border border-light-border text-charcoal text-sm font-medium px-8 py-4 rounded-full hover:bg-charcoal hover:text-cream hover:border-charcoal transition-all duration-500">
            View All Projects
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
