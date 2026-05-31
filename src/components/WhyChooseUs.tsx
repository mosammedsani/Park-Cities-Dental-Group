/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HeartPulse, Cpu, ShieldCheck, Sparkles, Smile, Award } from "lucide-react";

export default function WhyChooseUs() {
  const valuesPillars = [
    {
      icon: HeartPulse,
      title: "Personalized Treatment Plans",
      desc: "Each patient receives an exhaustive, individual dental blueprint. We never practice assembly-line healthcare."
    },
    {
      icon: Cpu,
      title: "Advanced Dental Technology",
      desc: "From zero-radiation digital radiography and intraoral cameras to 3D iTero® scanners and painless computerized aesthetics."
    },
    {
      icon: ShieldCheck,
      title: "Comprehensive Direct Care",
      desc: "Get premium diagnostics, cosmetic makeovers, restorative bridges, and surgical implants in the comfort of a single clinic."
    },
    {
      icon: Sparkles,
      title: "Cosmetic & Aesthetic Artistry",
      desc: "Specialized porcelain chemistry allows Dr. Shaver to match light scatter and transparency of biological tooth enamel."
    },
    {
      icon: Smile,
      title: "Immersive Relaxation Suites",
      desc: "Heated massage clinical chairs, silent air abrasion units, sound-isolation suites, and noise-damping headphone arrays."
    },
    {
      icon: Award,
      title: "Two Decades of Trusted Local Prestige",
      desc: "A cornerstone of the Highland Park community. Trusted by physicians, executives, and generations of Dallas families."
    }
  ];

  return (
    <section className="py-24 bg-luxury-gradient-soft relative overflow-hidden">
      {/* Decorative backing shapes */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-luxury-teal/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-16 select-none">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-luxury-gold mb-2 block animate-pulse">
            Boutique Patient Standards
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-luxury-navy font-medium tracking-tight">
            Designed Around Your Comfort and Trust
          </h2>
          <div className="w-16 h-[1.5px] bg-luxury-gold mt-4" />
          <p className="text-xs md:text-sm text-luxury-gray max-w-lg mt-4 leading-relaxed font-light">
            We deliver exceptional clinical outcomes by combining our patient-first, conservative philosophy with the industry's most sophisticated technologies.
          </p>
        </div>

        {/* Six Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valuesPillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white p-8 border border-neutral-100 hover:border-luxury-gold transition-all duration-300 shadow-luxury hover:shadow-luxury-hover hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Decorative border accent */}
                <span className="absolute top-0 left-0 w-0 h-[3px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
                
                <div className="space-y-4 select-none">
                  {/* Icon Area */}
                  <div className="w-12 h-12 bg-luxury-light text-luxury-teal flex items-center justify-center rounded-none group-hover:bg-luxury-navy group-hover:text-white transition-colors duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-base md:text-lg font-bold text-luxury-navy tracking-tight group-hover:text-luxury-teal transition-colors duration-200">
                    {pillar.title}
                  </h3>

                  <p className="text-xs md:text-sm text-luxury-gray leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 font-mono text-[10px] tracking-widest text-luxury-gold font-bold select-none">
                  INTEGRITY // 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Luxury Banner Counter row */}
        <div className="mt-20 glass-card p-8 md:p-12 border border-luxury-teal/10 shadow-2xl relative">
          <div className="absolute inset-y-0 left-0 w-1.5 bg-luxury-gold" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center select-none">
            <div className="space-y-2">
              <span className="text-3xl md:text-4xl font-serif text-luxury-navy font-medium">99.8%</span>
              <p className="text-xs uppercase tracking-widest text-luxury-gray">Clinical Satisfaction</p>
            </div>
            <div className="space-y-2 border-y md:border-y-0 md:border-x border-neutral-100 py-6 md:py-0">
              <span className="text-3xl md:text-4xl font-serif text-luxury-navy font-medium">No radiation</span>
              <p className="text-xs uppercase tracking-widest text-luxury-gray">Digital Imaging System</p>
            </div>
            <div className="space-y-2">
              <span className="text-3xl md:text-4xl font-serif text-luxury-navy font-medium">1-on-1</span>
              <p className="text-xs uppercase tracking-widest text-luxury-gray">Dentist Appointment Care</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
