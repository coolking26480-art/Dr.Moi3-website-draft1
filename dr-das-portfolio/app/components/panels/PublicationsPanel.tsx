'use client';

import React from 'react';
import { publicationsContent } from '@/app/lib/content';

export default function PublicationsPanel() {
  return (
    <section
      data-panel="2"
      className="flex-shrink-0 w-screen h-screen bg-gray-light flex items-center justify-center px-6 md:px-12 pt-20"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="max-w-[800px] w-full mx-auto">
        <p className="font-roboto font-normal text-[11px] text-gray-muted tracking-[4px] uppercase mb-3">
          {publicationsContent.kicker}
        </p>
        <h2 className="font-roboto font-bold text-[28px] md:text-[32px] text-navy-deep tracking-[4px] uppercase mb-8">
          {publicationsContent.title}
        </h2>

        <div className="flex flex-col gap-3">
          {publicationsContent.items.map((pub, i) => (
            <div
              key={i}
              className="bg-white rounded-md border border-[rgba(167,182,208,0.15)] px-6 py-[18px] flex gap-5 items-start transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="font-roboto font-semibold text-sm text-gray-muted min-w-[40px]">
                {pub.year}
              </span>
              <div>
                <h3 className="font-roboto font-semibold text-sm text-navy-deep leading-[1.4] mb-1">
                  {pub.title}
                </h3>
                <p className="font-roboto font-normal text-[11px] text-gray-muted">
                  {pub.meta}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button className="font-roboto font-semibold text-xs text-navy-deep tracking-[0.5px] bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity">
            {publicationsContent.footerLink}
          </button>
        </div>
      </div>
    </section>
  );
}
