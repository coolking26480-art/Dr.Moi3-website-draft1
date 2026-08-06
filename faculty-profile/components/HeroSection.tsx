"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Heart, FileText, Mic, Star, GraduationCap, ChevronDown } from "lucide-react";
import { stats, researchInterests } from "@/lib/data";
import Image from "next/image";

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  Mic: <Mic className="w-5 h-5" />,
  Star: <Star className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
};

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Dr. Moitrayee Das - Professional Portrait"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas/60 via-transparent to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-white/5 rounded-3xl -z-10 hidden lg:block" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2"
          >
            <motion.p
              variants={itemVariants}
              className="text-accent font-medium text-sm uppercase tracking-[0.2em] mb-4"
            >
              Assistant Professor of Psychology
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Dr. Moitrayee{" "}
              <span className="text-accent">Das</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-muted text-lg leading-relaxed mb-2"
            >
              FLAME University, Pune
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-muted-light/80 leading-relaxed mb-8 max-w-xl"
            >
              A dedicated researcher and educator specializing in workplace mental health, 
              sleep and well-being, and organizational psychology. Her work bridges rigorous 
              academic inquiry with practical interventions that improve lives in professional 
              and community settings.
            </motion.p>

            {/* Research Interest Tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10">
              {researchInterests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 text-xs font-medium text-muted-light bg-white/5 border border-white/10 rounded-full hover:border-accent/30 hover:text-accent transition-colors duration-300"
                >
                  {interest}
                </span>
              ))}
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent/20 transition-all duration-300"
                >
                  <div className="text-accent mb-2">{iconMap[stat.icon]}</div>
                  <div className="text-2xl font-display font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
