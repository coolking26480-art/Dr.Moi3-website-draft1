'use client';

import React from 'react';
import { awardsContent } from '@/app/lib/content';

export default function AwardsPanel() {
  return (
    <section
      data-panel="3"
      className="flex-shrink-0 w-screen h-screen bg-navy-deep flex items-center justify-center px-6 md:px-12 pt-20"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="max-w-[900px] w-full mx-auto">
        <p className="font-roboto font-normal text-[11px] text-gray-muted tracking-[4px] uppercase mb-3">
          {awardsContent.kicker}
        </p>
        <h2 className="font-roboto font-bold text-[28px] md:text-[32px] text-white tracking-[4px] uppercase mb-8">
          {awardsContent.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {awardsContent.items.map((award, i) => (
            <div
              key={i}
              className="bg-[rgba(255,255,255,0.06)] rounded-lg border border-border-dark p-5 flex gap-4 items-start transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 bg-[rgba(255,255,255,0.1)] rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                🏆
              </div>
              <div>
                <h3 className="font-roboto font-semibold text-sm text-white mb-1">
                  {award.title}
                </h3>
                <p className="font-roboto font-normal text-[11px] text-gray-muted">
                  {award.org}
                </p>
                <p className="font-roboto font-normal text-[11px] text-[rgba(167,182,208,0.6)]">
                  {award.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
