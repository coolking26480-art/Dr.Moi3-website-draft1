'use client';

import React from 'react';
import { cn } from '@/app/lib/utils';

interface ProgressDotsProps {
  count: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}

export default function ProgressDots({ count, activeIndex, onDotClick }: ProgressDotsProps) {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex gap-2.5">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className={cn(
            'w-2 h-2 rounded-full transition-all duration-300 ease bg-transparent border-none cursor-pointer',
            activeIndex === i ? 'bg-navy-deep scale-[1.2]' : 'bg-[rgba(167,182,208,0.4)]'
          )}
          aria-label={`Go to panel ${i + 1}`}
        />
      ))}
    </div>
  );
}
