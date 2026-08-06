"use client";

import { Mail, Phone, MapPin, ExternalLink, Download } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

export function Footer() {
  return (
    <footer id="contact" className="py-20 lg:py-24 border-t border-white/5 bg-canvas-light/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-white font-display font-semibold text-lg mb-6">
                Contact
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:moitrayee.das@flame.edu.in"
                  className="flex items-center gap-3 text-muted hover:text-accent transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-accent/10 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">moitrayee.das@flame.edu.in</span>
                </a>
                <a
                  href="tel:+912067676767"
                  className="flex items-center gap-3 text-muted hover:text-accent transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-accent/10 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">+91 20 6767 6767</span>
                </a>
                <div className="flex items-start gap-3 text-muted">
                  <div className="p-2 rounded-lg bg-white/5 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm leading-relaxed">
                    Department of Psychology<br />
                    FLAME University<br />
                    Lavale, Pune – 411042, India
                  </span>
                </div>
              </div>
            </div>

            {/* Academic Profiles */}
            <div>
              <h3 className="text-white font-display font-semibold text-lg mb-6">
                Academic Profiles
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Google Scholar", href: "https://scholar.google.com" },
                  { label: "ORCID", href: "https://orcid.org" },
                  { label: "LinkedIn", href: "https://linkedin.com" },
                  { label: "FLAME University", href: "https://www.flame.edu.in" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted hover:text-accent transition-colors group"
                  >
                    <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Download CV */}
            <div>
              <h3 className="text-white font-display font-semibold text-lg mb-6">
                Curriculum Vitae
              </h3>
              <p className="text-sm text-muted mb-6 leading-relaxed">
                Download the complete curriculum vitae for a comprehensive overview of 
                education, publications, conferences, and professional service.
              </p>
              <button
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 border border-accent/20 text-accent rounded-lg hover:bg-accent/20 transition-colors text-sm font-medium"
                onClick={() => alert("CV download functionality – replace with actual PDF link")}
              >
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </div>
          </div>
        </SectionReveal>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Dr. Moitrayee Das. All rights reserved.
          </p>
          <p className="text-xs text-muted/60">
            Assistant Professor of Psychology, FLAME University
          </p>
        </div>
      </div>
    </footer>
  );
}
