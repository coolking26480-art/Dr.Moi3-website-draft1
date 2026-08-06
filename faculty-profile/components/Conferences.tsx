"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Calendar, Building2, Presentation } from "lucide-react";
import { conferences } from "@/lib/data";
import { SectionReveal } from "./SectionReveal";
import Image from "next/image";

export function Conferences() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="conferences" className="py-24 lg:py-32 bg-canvas-light/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="mb-12">
            <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Academic Engagement
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              Conferences
            </h2>
            <p className="text-muted max-w-2xl">
              Selected conference presentations and academic engagements spanning international 
              and national platforms in occupational health psychology and community psychology.
            </p>
          </div>
        </SectionReveal>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent -mx-6 px-6 lg:-mx-8 lg:px-8"
          style={{ scrollbarWidth: "thin" }}
        >
          {conferences.map((conf, index) => (
            <motion.div
              key={conf.id}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group flex-shrink-0 w-[320px] sm:w-[380px] snap-start"
            >
              <div className="h-full rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden hover:border-accent/20 transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={conf.image}
                    alt={conf.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="380px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="inline-flex items-center gap-1.5 text-xs text-accent bg-canvas/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      <Calendar className="w-3 h-3" />
                      {conf.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-white font-semibold leading-snug mb-3 group-hover:text-accent transition-colors">
                    {conf.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Building2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{conf.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{conf.location}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5">
                    <div className="flex items-start gap-2">
                      <Presentation className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-light/70 leading-relaxed">
                        {conf.presentationTitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
