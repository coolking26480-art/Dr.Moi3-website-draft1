'use client';

import React, { useRef, useState, useCallback } from 'react';
import Navigation from '@/app/components/Navigation';
import HorizontalStage from '@/app/components/HorizontalStage';
import ProgressDots from '@/app/components/ProgressDots';
import ContactModal from '@/app/components/ContactModal';
import HeroPanel from '@/app/components/panels/HeroPanel';
import ResearchPanel from '@/app/components/panels/ResearchPanel';
import PublicationsPanel from '@/app/components/panels/PublicationsPanel';
import AwardsPanel from '@/app/components/panels/AwardsPanel';
import OutreachPanel from '@/app/components/panels/OutreachPanel';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';

export default function Home() {
  const stageRef = useRef<HTMLDivElement>(null);
  const { activeIndex, scrollToPanel } = useScrollProgress(stageRef);
  const [contactOpen, setContactOpen] = useState(false);

  const handleContact = useCallback(() => setContactOpen(true), []);
  const handleResearch = useCallback(() => scrollToPanel(1), [scrollToPanel]);

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-navy-deep">
      <Navigation activeIndex={activeIndex} onNavigate={scrollToPanel} />

      <HorizontalStage ref={stageRef}>
        <HeroPanel onContact={handleContact} onResearch={handleResearch} />
        <ResearchPanel />
        <PublicationsPanel />
        <AwardsPanel />
        <OutreachPanel />
      </HorizontalStage>

      <ProgressDots
        count={5}
        activeIndex={activeIndex}
        onDotClick={scrollToPanel}
      />

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}
