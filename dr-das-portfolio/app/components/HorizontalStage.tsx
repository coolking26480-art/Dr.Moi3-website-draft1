'use client';

import React, { forwardRef } from 'react';

interface HorizontalStageProps {
  children: React.ReactNode;
}

const HorizontalStage = forwardRef<HTMLDivElement, HorizontalStageProps>(({ children }, ref) => {
  return (
    <div
      ref={ref}
      className="flex w-screen h-screen overflow-x-auto scroll-smooth scroll-snap-x mandatory hide-scrollbar"
      style={{ scrollSnapType: 'x mandatory' }}
    >
      {children}
    </div>
  );
});

HorizontalStage.displayName = 'HorizontalStage';
export default HorizontalStage;
