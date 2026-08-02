'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export function useScrollProgress(stageRef: React.RefObject<HTMLDivElement | null>) {
  const [activeIndex, setActiveIndex] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const scrollToPanel = useCallback((index: number) => {
    const stage = stageRef.current;
    if (!stage) return;
    const panelWidth = stage.clientWidth;
    stage.scrollTo({ left: index * panelWidth, behavior: 'smooth' });
  }, [stageRef]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const panels = stage.querySelectorAll('[data-panel]');
    if (panels.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.panel);
            setActiveIndex(index);
          }
        });
      },
      { root: stage, threshold: 0.5 }
    );

    panels.forEach((panel) => observerRef.current?.observe(panel));

    return () => observerRef.current?.disconnect();
  }, [stageRef]);

  return { activeIndex, scrollToPanel };
}
