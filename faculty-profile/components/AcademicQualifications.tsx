"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Scroll, Certificate, BadgeCheck } from "lucide-react";
import { qualifications } from "@/lib/data";
import { SectionReveal } from "./SectionReveal";
import { cn } from "@/lib/utils";
import React from "react";


const degreeIcons: Record<string, React.ReactNode> = {
  "Ph.D.": <GraduationCap className="w-5 h-5" />,
  "M.Phil.": <BookOpen className="w-5 h-5" />,
  "M.A.": <Scroll className="w-5 h-5" />,
  "B.A.": <Award className="w-5 h-5" />,
  "Postgraduate Diploma": <Certificate className="w-5 h-5" />,
  "Certification": <BadgeCheck className="w-5 h-5" />,
};

function getIconForDegree(degree: string) {
  for (const key of Object.keys(degreeIcons)) {
    if (degree.includes(key)) return degreeIcons[key];
  }
  return <BadgeCheck className="w-5 h-5" />;
}

export function AcademicQualifications() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="qualifications" className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="mb-16">
            <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Education
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white">
              Academic Qualifications
            </h2>
          </div>
        </SectionReveal>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent" />

          <div className="space-y-8">
            {qualifications.map((qual, index) => (
              <motion.div
                key={qual.id}
                initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative pl-16 lg:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-6 top-2 w-4 h-4 rounded-full bg-canvas border-2 border-accent shadow-[0_0_12px_rgba(201,169,110,0.3)]" />

                <div className="group p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                      {getIconForDegree(qual.degree)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {qual.degree}
                      </h3>
                      <p className="text-accent text-sm font-medium">{qual.institution}</p>
                    </div>
                    <span className="text-xs text-muted bg-white/5 px-2.5 py-1 rounded-full shrink-0">
                      {qual.duration}
                    </span>
                  </div>

                  <div className="pl-12">
                    <p className="text-sm text-muted-light/70 mb-2">
                      <span className="text-muted">Specialization:</span>{" "}
                      {qual.specialization}
                    </p>
                    {qual.description && (
                      <p className="text-sm text-muted leading-relaxed">
                        {qual.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
