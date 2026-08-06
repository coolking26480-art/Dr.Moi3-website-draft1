"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award, Calendar, Building2 } from "lucide-react";
import { awards } from "@/lib/data";
import { SectionReveal } from "./SectionReveal";
import Image from "next/image";

export function Awards() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="awards" className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="mb-16">
            <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Recognition
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white">
              Awards & Honors
            </h2>
          </div>
        </SectionReveal>

        <div className="space-y-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className={
                index % 2 === 0
                  ? "flex flex-col lg:flex-row gap-6 lg:gap-10 items-start"
                  : "flex flex-col lg:flex-row-reverse gap-6 lg:gap-10 items-start"
              }
            >
              {/* Image */}
              <div className="w-full lg:w-2/5 shrink-0">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                  <Image
                    src={award.image}
                    alt={award.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas/40 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 py-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {award.year}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-muted/50" />
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      {award.institution}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl lg:text-2xl font-display font-bold text-white mb-3">
                  {award.name}
                </h3>

                <p className="text-muted leading-relaxed">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
