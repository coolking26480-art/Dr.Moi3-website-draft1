'use client';

import React from 'react';
import { outreachContent } from '@/app/lib/content';

export default function OutreachPanel() {
  return (
    <section
      data-panel="4"
      className="flex-shrink-0 w-screen h-screen bg-white flex items-center justify-center px-6 md:px-12 pt-20"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="max-w-[900px] w-full mx-auto text-center">
        <p className="font-roboto font-normal text-[11px] text-gray-muted tracking-[4px] uppercase mb-3">
          {outreachContent.kicker}
        </p>
        <h2 className="font-roboto font-bold text-[28px] md:text-[32px] text-navy-deep tracking-[4px] uppercase mb-10">
          {outreachContent.title}
        </h2>

        <div className="flex justify-center gap-16 mb-10 flex-wrap">
          {outreachContent.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-roboto font-bold text-[42px] md:text-5xl text-navy-deep">
                {stat.number}
              </div>
              <div className="font-roboto text-[11px] text-gray-muted uppercase tracking-[1.5px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {outreachContent.partners.map((partner) => (
            <span
              key={partner}
              className="bg-gray-light border border-border-light rounded px-[18px] py-2 font-roboto font-medium text-[11px] text-[#5A6B7D] tracking-[0.5px]"
            >
              {partner}
            </span>
          ))}
        </div>

        <button className="px-5 py-2.5 bg-navy-deep text-white font-roboto font-semibold text-xs uppercase tracking-[0.05em] rounded transition-all hover:opacity-90 hover:scale-[1.02] cursor-pointer border-none">
          {outreachContent.cta}
        </button>
      </div>
    </section>
  );
}
