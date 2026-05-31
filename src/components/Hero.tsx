/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Calendar, Users, Shield, Award, Sparkles, Navigation } from "lucide-react";

interface HeroProps {
  onScheduleClick: () => void;
}

export default function Hero({ onScheduleClick }: HeroProps) {
  const trustPillars = [
    {
      icon: Sparkles,
      title: "Cosmetic Specialty",
      desc: "Veneers, Invisalign® & Elite Smile Design"
    },
    {
      icon: Shield,
      title: "Conservative Care",
      desc: "Preserving natural tooth structure foremost"
    },
    {
      icon: Award,
      title: "Accredited Surgeon",
      desc: "Led by Dr. J. Garrett Shaver, DDS"
    },
    {
      icon: Navigation,
      title: "Concierge Parking",
      desc: "Reserved free spaces right under our tower"
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-36 pb-20 bg-luxury-gradient-dark overflow-hidden"
    >
      {/* Cinematic Ambient Background Image Overlay */}
      <div className="absolute inset-0 opacity-40 mix-blend-luminosity">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Modern Clinical Suite"
          className="w-full h-full object-cover object-center scale-105 animate-pulse"
          style={{ animationDuration: "12s" }}
          referrerPolicy="no-referrer"
        />
      </div>
      
      {/* Solid gradient cover for ambient dark luxury feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-navy via-luxury-navy/90 to-transparent" />
      
      {/* Accent Radial glow representing pristine light */}
      <div className="absolute top-1/4 right-[10%] w-[450px] h-[450px] bg-luxury-teal/25 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative w-full z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Headline details */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8 select-none">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 border border-luxury-gold/30 bg-luxury-gold/10 backdrop-blur-md rounded-none">
              <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-luxury-gold">
                Dallas Premium Dentistry Group
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.1]">
              Luxury Dental Care <br />
              <span className="text-luxury-gradient-gold italic font-light drop-shadow-sm">
                Designed Around You
              </span>
            </h1>

            <p className="text-sm md:text-base text-white/80 font-normal leading-relaxed max-w-xl">
              Experience a world-class blend of dental artistry, advanced technologies, and premium comforts. Led by Dr. J. Garrett Shaver, DDS, we provide a warm, concierge-style healthcare experience in the heart of Highland Park and University Park.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 w-full sm:w-auto">
              <button
                id="hero-book-now"
                onClick={onScheduleClick}
                className="px-8 py-4 bg-luxury-gold hover:bg-luxury-gold-light text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-luxury hover:scale-[1.02] active:scale-95 text-center cursor-pointer"
              >
                Schedule Appointment
              </button>
              <a
                href="#doctor"
                className="px-8 py-4 border border-white/30 hover:border-white text-white hover:bg-white/5 font-semibold text-xs uppercase tracking-widest text-center transition-all duration-300"
              >
                Meet Our Dr.
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 border-t border-white/15 w-full grid grid-cols-3 gap-4">
              <div>
                <div className="font-serif text-2xl md:text-3xl text-luxury-gold">22+</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50">Years of Care</div>
              </div>
              <div>
                <div className="font-serif text-2xl md:text-3xl text-luxury-gold">5.0 ★</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50">Google Rating</div>
              </div>
              <div>
                <div className="font-serif text-2xl md:text-3xl text-luxury-gold">10k+</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50">Precise Smiles</div>
              </div>
            </div>

          </div>

          {/* Layered luxury side photography panel - responsive aspect-ratio without hardcoded heights */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <div className="relative w-[90%] max-w-[420px] ml-auto border-2 border-luxury-gold/20 p-2 z-10 transition-transform duration-500 hover:scale-[1.01] bg-luxury-navy">
              <div className="w-full aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=700"
                  alt="Aesthetic Patient Smile Confident Portrait"
                  className="w-full h-full object-cover transition-transform duration-7s hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Embedded custom comfort care detail card */}
              <div className="absolute -left-10 bottom-6 w-[85%] backdrop-blur-md bg-luxury-navy/95 border border-luxury-gold/30 p-4 shadow-2xl rounded-none select-none">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-luxury-gold/15 text-luxury-gold">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xs uppercase tracking-wider text-luxury-gold font-semibold text-left">
                      Pain-Free Dental Wellness
                    </h4>
                    <p className="text-[10px] xl:text-[11px] text-white/75 mt-1 font-light leading-snug text-left">
                      Experience state-of-the-art non-invasive diagnostics & heated massage clinical chairs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Refined Trust Pillars - flowing naturally to prevent mobile clipping or content overlapping */}
      <div className="w-full mt-16 md:mt-24 lg:mt-32 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustPillars.map((pillar, i) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={i}
                className="bg-white p-5 border border-luxury-teal/15 shadow-luxury flex items-center space-x-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-luxury-hover"
              >
                <div className="p-3 bg-luxury-light text-luxury-gold rounded-none">
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-serif text-xs md:text-sm font-semibold tracking-wide text-luxury-navy">
                    {pillar.title}
                  </h5>
                  <p className="text-[11px] text-luxury-gray mt-0.5">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Small helper inline icon component to avoid missing import
function Lock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
