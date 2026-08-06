"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Mic, MapPin, Calendar, Building2, ChevronDown } from "lucide-react";
import { talks } from "@/lib/data";
import { SectionReveal } from "./SectionReveal";
import Image from "next/image";

export function InvitedTalks() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="talks" className="py-24 lg:py-32 bg-canvas-light/50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="mb-16">
            <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Speaking Engagements
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white">
              Invited Talks
            </h2>
          </div>
        </SectionReveal>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent" />

          <div className="space-y-6">
            {talks.map((talk, index) => {
              const isExpanded = expandedId === talk.id;

              return (
                <motion.div
                  key={talk.id}
                  initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative pl-16 lg:pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 lg:left-6 top-3 w-4 h-4 rounded-full bg-canvas border-2 border-accent shadow-[0_0_12px_rgba(201,169,110,0.3)]" />

                  <div
                    className="rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden hover:border-accent/20 transition-all duration-300"
                  >
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : talk.id)}
                      className="w-full text-left p-5 hover:bg-white/[0.02] transition-colors"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="inline-flex items-center gap-1 text-xs text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                              <Mic className="w-3 h-3" />
                              {talk.date}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs text-muted bg-white/5 px-2 py-0.5 rounded-full">
                              <MapPin className="w-3 h-3" />
                              {talk.location}
                            </span>
                          </div>

                          <h3 className="text-white font-semibold leading-snug mb-1 group-hover:text-accent transition-colors">
                            {talk.eventTitle}
                          </h3>

                          <p className="text-sm text-muted flex items-center gap-1.5">
                            <Building2 className="w-3.5 h-3.5" />
                            {talk.institution}
                          </p>
                        </div>

                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="shrink-0 mt-1"
                        >
                          <ChevronDown className="w-4 h-4 text-muted" />
                        </motion.div>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && talk.description && (
                        <motion.div
                          initial={prefersReducedMotion ? {} : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={prefersReducedMotion ? {} : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5">
                            <div className="border-t border-white/5 pt-4">
                              {talk.image && (
                                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                                  <Image
                                    src={talk.image}
                                    alt={talk.eventTitle}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    loading="lazy"
                                  />
                                </div>
                              )}
                              <p className="text-sm text-muted leading-relaxed">
                                {talk.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
