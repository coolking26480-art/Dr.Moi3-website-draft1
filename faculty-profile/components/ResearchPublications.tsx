"use client";

import { useState, useMemo } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Search, FileText, BookOpen, ClipboardList, Newspaper, ExternalLink, Download } from "lucide-react";
import { publications, type Publication } from "@/lib/data";
import { SectionReveal } from "./SectionReveal";
import { cn } from "@/lib/utils";

type Category = "all" | "journal" | "book-chapter" | "case-study" | "op-ed";

const categories: { key: Category; label: string; icon: React.ReactNode }[] = [
  { key: "journal", label: "Journal Articles", icon: <FileText className="w-5 h-5" /> },
  { key: "book-chapter", label: "Book Chapters", icon: <BookOpen className="w-5 h-5" /> },
  { key: "case-study", label: "Case Studies", icon: <ClipboardList className="w-5 h-5" /> },
  { key: "op-ed", label: "Opinion Editorials", icon: <Newspaper className="w-5 h-5" /> },
];

function getCategoryCount(key: Category) {
  if (key === "all") return publications.length;
  return publications.filter((p) => p.category === key).length;
}

export function ResearchPublications() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const prefersReducedMotion = useReducedMotion();

  const filteredPublications = useMemo(() => {
    let filtered = publications;
    if (activeCategory !== "all") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.authors.toLowerCase().includes(query) ||
          p.journal.toLowerCase().includes(query) ||
          p.year.toString().includes(query)
      );
    }
    return filtered.sort((a, b) => b.year - a.year);
  }, [activeCategory, searchQuery]);

  const groupedByYear = useMemo(() => {
    const groups: Record<number, Publication[]> = {};
    filteredPublications.forEach((p) => {
      if (!groups[p.year]) groups[p.year] = [];
      groups[p.year].push(p);
    });
    return groups;
  }, [filteredPublications]);

  const years = Object.keys(groupedByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <section id="publications" className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="mb-16">
            <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Scholarship
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
              Research Publications
            </h2>
          </div>
        </SectionReveal>

        {/* Category Cards */}
        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(activeCategory === cat.key ? "all" : cat.key)}
                className={cn(
                  "relative p-5 rounded-xl border text-left transition-all duration-300 group",
                  activeCategory === cat.key
                    ? "bg-accent/10 border-accent/30"
                    : "bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]"
                )}
              >
                <div
                  className={cn(
                    "mb-3 transition-colors",
                    activeCategory === cat.key ? "text-accent" : "text-muted group-hover:text-white"
                  )}
                >
                  {cat.icon}
                </div>
                <div className="text-2xl font-display font-bold text-white mb-1">
                  {getCategoryCount(cat.key)}
                </div>
                <div className="text-xs text-muted">{cat.label}</div>
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Search */}
        <SectionReveal delay={0.15}>
          <div className="relative mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              placeholder="Search by title, author, journal, or year..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-muted focus:outline-none focus:border-accent/30 focus:ring-1 focus:ring-accent/20 transition-all text-sm"
            />
          </div>
        </SectionReveal>

        {/* Publications List */}
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            {years.length > 0 ? (
              years.map((year) => (
                <motion.div
                  key={year}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Sticky Year Header */}
                  <div className="sticky top-16 lg:top-20 z-10 mb-4">
                    <div className="inline-flex items-center gap-3 bg-canvas/90 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2">
                      <span className="text-accent font-display font-bold text-lg">{year}</span>
                      <span className="w-8 h-px bg-white/20" />
                      <span className="text-xs text-muted">
                        {groupedByYear[year].length} publication{groupedByYear[year].length > 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {groupedByYear[year].map((pub, index) => (
                      <motion.div
                        key={pub.id}
                        initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className="group p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all duration-300"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-accent mb-1.5">{pub.authors}</p>
                            <h4 className="text-white font-medium leading-relaxed mb-2 group-hover:text-accent transition-colors">
                              {pub.title}
                            </h4>
                            <p className="text-sm text-muted italic">{pub.journal}</p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            {pub.doi && (
                              <a
                                href={`https://doi.org/${pub.doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-white/5 text-muted hover:text-accent hover:bg-accent/10 transition-colors"
                                aria-label="View DOI"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                            <button
                              className="p-2 rounded-lg bg-white/5 text-muted hover:text-accent hover:bg-accent/10 transition-colors"
                              aria-label="Download PDF"
                            >
                              <Download className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-muted">No publications found matching your criteria.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
