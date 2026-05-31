/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Sparkles, Check, ArrowRight, Zap, Shield } from "lucide-react";

interface CosmeticProps {
  onScheduleClick: () => void;
}

export default function CosmeticDentistry({ onScheduleClick }: CosmeticProps) {
  // Positional state of visual before-after comparison line (percentage)
  const [sliderPos, setSliderPos] = useState(50);

  const capabilities = [
    {
      title: "Ultra-Thin Porcelain Veneers",
      desc: "Preserving your natural enamel while correcting chips, overlaps, and deep discoloration permanently."
    },
    {
      title: "Bespoke Digital Smile Design",
      desc: "See a virtual mapping of your balanced cosmetic layout before starting any physical clinical steps."
    },
    {
      title: "Invisalign® Orthodontic Systems",
      desc: "Invisibly shift misaligned arches using custom-shaped, comfortable BPA-free medical liners."
    }
  ];

  return (
    <section className="py-24 bg-luxury-navy text-white relative overflow-hidden">
      {/* Accent Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-luxury-teal/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Flagship header block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 select-none">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-luxury-gold/10 border border-luxury-gold/20">
              <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-luxury-gold">
                Flagship Aesthetic Artistry
              </span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl text-white font-medium tracking-tight">
              Cosmetic Dentistry at the Highest Professional Altitude
            </h2>
          </div>
          
          <div className="lg:col-span-5 select-none">
            <p className="text-sm text-white/70 leading-relaxed font-light">
              We define cosmetic dentistry as a harmonious surgical discipline. Under Dr. Shaver's guidance, each tooth is mapped to respect your lip contours and facial aesthetics, sculpting flawless, authentic results.
            </p>
          </div>
        </div>

        {/* Content split with Interactive Smile Comparison Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Aesthetic capability details on the left */}
          <div className="lg:col-span-5 space-y-8 select-none">
            <div className="space-y-6">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="p-2 border border-luxury-gold/30 bg-luxury-gold/5 text-luxury-gold shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-white tracking-wide">
                      {cap.title}
                    </h4>
                    <p className="text-xs md:text-sm text-white/60 mt-1 leading-relaxed font-light">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
              <button
                onClick={onScheduleClick}
                className="px-6 py-3.5 bg-luxury-gold hover:bg-luxury-gold-light text-luxury-navy font-semibold text-xs uppercase tracking-widest transition-all shadow-luxury gold cursor-pointer"
              >
                Aesthetic Consultation
              </button>
              <a
                href="#gallery"
                className="text-white/80 hover:text-luxury-gold tracking-widest text-xs uppercase font-semibold transition-colors flex items-center justify-center py-3"
              >
                Explore Transformation Records <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Interactive Slider on the right */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* The comparison viewport */}
            <div className="relative w-full max-w-[580px] h-[340px] md:h-[400px] select-none border border-white/10 overflow-hidden shadow-2xl bg-neutral-900">
              
              {/* BEFORE IMAGE (Full Background) */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800"
                  alt="Aesthetic Before Smile Transformation"
                  className="w-full h-full object-cover object-center grayscale opacity-80"
                  referrerPolicy="no-referrer"
                />
                
                {/* Before text label */}
                <div className="absolute bottom-4 left-4 py-1 px-3 bg-black/60 border border-white/10 text-[9px] font-mono uppercase text-white font-bold select-none">
                  BIOLOGICAL BEFORE
                </div>
              </div>

              {/* AFTER IMAGE (Sliding Overlay) */}
              <div
                className="absolute inset-0 z-10 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
                  alt="Aesthetic After Smile Transformation"
                  className="absolute top-0 left-0 w-[580px] h-[340px] md:h-[400px] object-cover object-center max-w-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* After text label */}
                <div className="absolute bottom-4 right-4 py-1 px-3 bg-luxury-gold/95 text-[9px] font-mono uppercase text-white font-bold select-none whitespace-nowrap">
                  COSMETIC OUTCOME
                </div>
              </div>

              {/* Slider Line Divider */}
              <div
                className="absolute top-0 bottom-0 z-20 w-[2px] bg-luxury-gold pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                {/* Central Handle node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-luxury-gold text-white shadow-2xl flex items-center justify-center font-bold text-xs select-none">
                  ↔
                </div>
              </div>

              {/* Overlay Input Range to capture dragged states easily */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 z-30 w-full h-full opacity-0 cursor-ew-resize select-none"
                aria-label="Smile before and after comparison slider"
              />

            </div>

            <p className="text-[10px] md:text-sm text-white/50 tracking-widest font-light mt-4 select-none">
              ★ DRAG ACCENTS TO COOPERATE SENSORY TRANSFORMATION PATH
            </p>

          </div>

        </div>

        {/* Supporting Technology elements */}
        <div className="mt-20 border-t border-white/10 pt-10 grid grid-cols-1 md:grid-cols-2 gap-8 select-none text-left">
          <div className="flex items-start space-x-3.5">
            <Zap className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
            <div>
              <h5 className="font-serif text-sm font-semibold tracking-wide">
                Feldspathic vs. Pressed Materials
              </h5>
              <p className="text-xs text-white/60 mt-1 leading-relaxed font-light">
                We select the glass-ceramic formulation on an individual structural basis. Feldspathic layered structures allow translucent light gradients, whereas high-strength lithium disilicate prevents structural fracture on deep bruxism (clenching) profiles.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3.5">
            <Shield className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
            <div>
              <h5 className="font-serif text-sm font-semibold tracking-wide">
                Biological Conservatism
              </h5>
              <p className="text-xs text-white/60 mt-1 leading-relaxed font-light">
                Many modern corporate clinics aggressively over-prepare teeth, stripping safe enamel layers. Dr. Shaver employs clinical micro-abrasion requiring high skill to conserve biological margins and shield nerves.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
