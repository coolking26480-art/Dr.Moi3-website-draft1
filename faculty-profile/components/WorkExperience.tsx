"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Briefcase, Users, BookOpen, Award, Heart, Building2, ChevronDown } from "lucide-react";
import { workExperience } from "@/lib/data";
import { SectionReveal } from "./SectionReveal";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, React.ReactNode> = {
  "Academic Appointments": <Briefcase className="w-4 h-4" />,
  "Teaching": <BookOpen className="w-4 h-4" />,
  "Student Mentorship": <Users className="w-4 h-4" />,
  "Academic Leadership": <Award className="w-4 h-4" />,
  "Outreach Activities": <Heart className="w-4 h-4" />,
  "Institutional Service": <Building2 className="w-4 h-4" />,
};

const categories = Array.from(new Set(workExperience.map((w) => w.category)));

export function WorkExperience() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const statCallouts = [
    { value: "100+", label: "Outreach Sessions" },
    { value: "50+", label: "Co-authored Scholarly Outputs" },
    { value: "10+", label: "Undergraduate Dissertations" },
    { value: "2", label: "National Conferences Organized" },
    { value: "1", label: "Guest Editor, NHRD Journal" },
  ];

  return (
    <section id="experience" className="py-24 lg:py-32 bg-canvas-light/50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="mb-16">
            <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Career
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
              Work Experience
            </h2>
          </div>
        </SectionReveal>

        {/* Stat Callouts */}
        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {statCallouts.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5"
              >
                <div className="text-2xl font-display font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Experience by Category */}
        <div className="space-y-6">
          {categories.map((category, catIndex) => {
            const items = workExperience.filter((w) => w.category === category);
            const isExpanded = expandedCategory === category;

            return (
              <SectionReveal key={category} delay={catIndex * 0.08}>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
                  <button
                    onClick={() => setExpandedCategory(isExpanded ? null : category)}
                    className="w-full flex items-center justify-between p-5 hover:bg-white/[0.02] transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10 text-accent">
                        {categoryIcons[category] || <Briefcase className="w-4 h-4" />}
                      </div>
                      <h3 className="text-lg font-semibold text-white">{category}</h3>
                      <span className="text-xs text-muted bg-white/5 px-2 py-0.5 rounded-full">
                        {items.length}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4 text-muted" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={prefersReducedMotion ? {} : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={prefersReducedMotion ? {} : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 space-y-4">
                          {items.map((item, index) => (
                            <motion.div
                              key={item.id}
                              initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05, duration: 0.3 }}
                              className="pl-11 border-l border-white/5 ml-2"
                            >
                              <div className="pl-6 py-3">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                                  <h4 className="text-white font-medium">{item.role}</h4>
                                  <span className="text-xs text-muted bg-white/5 px-2 py-0.5 rounded-full self-start">
                                    {item.duration}
                                  </span>
                                </div>
                                <p className="text-sm text-accent mb-2">{item.institution}</p>
                                <p className="text-sm text-muted leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
