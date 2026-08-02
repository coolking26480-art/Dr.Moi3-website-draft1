'use client';

import React from 'react';
import { heroContent } from '@/app/lib/content';
import PhotoPlaceholder from '@/app/components/PhotoPlaceholder';

interface HeroPanelProps {
  onContact: () => void;
  onResearch: () => void;
}

export default function HeroPanel({ onContact, onResearch }: HeroPanelProps) {
  return (
    <section
      data-panel="0"
      className="flex-shrink-0 w-screen h-screen bg-navy-deep flex items-center justify-center px-6 md:px-12 pt-20"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="max-w-[1100px] w-full mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        {/* Left column */}
        <div>
          <p className="font-roboto font-normal text-[11px] text-gray-muted tracking-[4px] uppercase mb-4">
            {heroContent.kicker}
          </p>
          <h1 className="font-roboto font-bold text-[42px] md:text-[52px] text-white leading-[1.15] mb-5">
            {heroContent.headline.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>
          <p className="font-roboto font-normal text-sm text-gray-muted max-w-[420px] leading-[1.7] mb-7">
            {heroContent.bio}
          </p>

          <div className="flex gap-8 mb-7">
            {heroContent.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-roboto font-bold text-2xl text-white">{stat.number}</div>
                <div className="font-roboto text-[10px] text-gray-muted uppercase">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={onResearch}
              className="px-5 py-2.5 bg-white text-navy-deep font-roboto font-semibold text-xs uppercase tracking-[0.05em] rounded transition-all hover:opacity-90 hover:scale-[1.02] cursor-pointer border-none"
            >
              View Research
            </button>
            <button
              onClick={onContact}
              className="px-5 py-2.5 bg-transparent text-white font-roboto font-semibold text-xs uppercase tracking-[0.05em] rounded border border-white/40 transition-all hover:border-white cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Right column - Portrait */}
        <div className="flex flex-col items-center">
          <div className="w-[220px] h-[280px] rounded-lg bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center mb-4 overflow-hidden">
            <PhotoPlaceholder width={220} height={280} index={0} rounded className="w-full h-full" />
          </div>
          <div className="font-roboto font-semibold text-lg text-white text-center">
            {heroContent.portrait.name}
          </div>
          <div className="font-roboto text-[11px] text-gray-muted uppercase tracking-[2px] text-center">
            {heroContent.portrait.org}
          </div>
        </div>
      </div>
    </section>
  );
}
