'use client';

import React, { useState } from 'react';
import { siteConfig, navLinks } from '@/app/lib/content';
import { cn } from '@/app/lib/utils';

interface NavigationProps {
  activeIndex: number;
  onNavigate: (index: number) => void;
}

export default function Navigation({ activeIndex, onNavigate }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-7 py-2.5 rounded-[50px] bg-white/70 backdrop-blur-[24px] saturate-[180%] border border-[rgba(167,182,208,0.25)] shadow-[0_4px_30px_rgba(15,30,58,0.08)] max-w-[90vw]">
      <span className="font-roboto font-bold text-[22px] text-navy-deep whitespace-nowrap">
        {siteConfig.logo}
      </span>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-5">
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => onNavigate(link.panelIndex)}
            className={cn(
              'font-roboto font-medium text-xs tracking-[0.05em] transition-colors duration-300 ease bg-transparent border-none cursor-pointer',
              activeIndex === link.panelIndex ? 'text-navy-deep' : 'text-gray-muted hover:text-navy-deep'
            )}
          >
            {link.label}
          </button>
        ))}
      </div>

      <span className="hidden md:block font-roboto font-semibold text-sm text-navy-deep tracking-[0.5px] whitespace-nowrap">
        {siteConfig.name}
      </span>

      {/* Mobile hamburger */}
      <button
        className="md:hidden bg-transparent border-none cursor-pointer p-1"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F1E3A" strokeWidth="2">
          {mobileOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 py-3 px-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-[rgba(167,182,208,0.25)] shadow-lg md:hidden flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => {
                onNavigate(link.panelIndex);
                setMobileOpen(false);
              }}
              className={cn(
                'font-roboto font-medium text-xs tracking-[0.05em] text-left py-2 bg-transparent border-none cursor-pointer',
                activeIndex === link.panelIndex ? 'text-navy-deep' : 'text-gray-muted'
              )}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
