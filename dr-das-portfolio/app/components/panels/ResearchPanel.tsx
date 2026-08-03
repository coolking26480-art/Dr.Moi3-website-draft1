'use client';

import React from 'react';
import { researchContent } from '@/app/lib/content';

export default function ResearchPanel() {
  return (
    <section
      data-panel="1"
      className="flex-shrink-0 w-screen h-screen bg-white flex items-center justify-center px-6 md:px-12 pt-20"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="max-w-[900px] w-full mx-auto">
        <p className="font-roboto font-normal text-[11px] text-gray-muted tracking-[4px] uppercase mb-3">
          {researchContent.kicker}
        </p>
        <h2 className="font-roboto font-bold text-[28px] md:text-[32px] text-navy-deep tracking-[4px] uppercase mb-8">
          {researchContent.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {researchContent.areas.map((area) => (
            <div
              key={area.num}
              className="bg-gray-light rounded-lg border border-border-light p-6 flex gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(15,30,58,0.06)]"
            >
              <span className="font-roboto font-bold text-[28px] text-gray-muted min-w-[40px]">
                {area.num}
              </span>
              <div>
                <h3 className="font-roboto font-semibold text-base text-navy-deep mb-1.5">
                  {area.title}
                </h3>
                <p className="font-roboto font-normal text-xs text-[#5A6B7D] leading-[1.6]">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
