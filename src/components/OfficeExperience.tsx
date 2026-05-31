/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { OFFICE_AMENITIES } from "../types";
import { Coffee, ShieldCheck, Heart, Sparkles, Navigation, X, Eye } from "lucide-react";

const ambientImages = [
  {
    title: "Luxury High-Rise Lounge",
    desc: "Plush organic layout with fresh flowers and mineral waters.",
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Treatment Suite 12",
    desc: "Heated spinal cushions overlooking the Dallas skyline.",
    url: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Surgical Sterilization Hub",
    desc: "Hospital-grade positive-pressure safety filtration systems.",
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Digital iTero Scan Center",
    desc: "Zero-contact laser model scanning.",
    url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800"
  }
];

export default function OfficeExperience() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-luxury-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Office header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 select-none">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-luxury-gold block">
              Architectural Standard
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-luxury-navy font-medium tracking-tight">
              A Boutique Space Engineered for Total Tranquility
            </h2>
            <div className="w-16 h-[1.5px] bg-luxury-gold mt-2" />
          </div>
          
          <div className="lg:col-span-12 lg:col-start-8 lg:col-span-5 select-none text-left">
            <p className="text-sm text-luxury-gray leading-relaxed font-light">
              We understand that clinical scents and mechanical noises trigger anxiety. Our office is engineered to reflect a serene luxury day spa—featuring muted tones, air filtration, and therapeutic elements designed around your sensory comfort.
            </p>
          </div>
        </div>

        {/* Content splits - Amenities list and side photo grids */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Comfort Amenities Left Area */}
          <div className="lg:col-span-5 space-y-6 text-left select-none">
            <h3 className="font-serif text-lg md:text-xl text-luxury-navy font-semibold uppercase tracking-wider border-b pb-3">
              Your Suite Amenities
            </h3>
            
            <div className="space-y-6">
              {OFFICE_AMENITIES.map((amenity, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="p-3 bg-white border border-neutral-100 text-luxury-gold group-hover:bg-luxury-teal group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                    {index === 0 && <Coffee className="w-5 h-5" />}
                    {index === 1 && <ShieldCheck className="w-5 h-5" />}
                    {index === 2 && <Heart className="w-5 h-5" />}
                    {index === 3 && <Sparkles className="w-5 h-5" />}
                    {index === 4 && <Navigation className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-luxury-navy tracking-wide">
                      {amenity.title}
                    </h4>
                    <p className="text-xs text-luxury-gray mt-1 leading-relaxed font-light">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Showcase Grid Right Area */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 select-none">
            {ambientImages.map((img, i) => (
              <div
                key={i}
                onClick={() => setActivePhotoIndex(i)}
                className="group relative h-48 md:h-52 overflow-hidden border border-neutral-100 shadow-sm cursor-zoom-in bg-luxury-navy"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Cover hover indicator */}
                <div className="absolute inset-0 bg-luxury-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left text-white z-10">
                  <div className="flex items-center space-x-2 text-luxury-gold mb-1">
                    <Eye className="w-4 h-4" />
                    <span className="text-[9px] uppercase tracking-widest font-bold">Lightbox view</span>
                  </div>
                  <h4 className="font-serif text-sm font-semibold">{img.title}</h4>
                  <p className="text-[10px] text-white/70 mt-0.5 font-light leading-snug">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Lightbox full screen Modal overlay */}
      {activePhotoIndex !== null && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-luxury-navy/95 p-4 backdrop-blur-md">
          <button
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full border border-white/20 text-white hover:border-luxury-gold hover:text-luxury-gold transition-all text-xs uppercase cursor-pointer"
          >
            ✕ Close View
          </button>

          {/* Large display box */}
          <div className="w-full max-w-2xl select-none text-center space-y-4">
            <div className="h-96 md:h-[450px] border border-white/15 overflow-hidden">
              <img
                src={ambientImages[activePhotoIndex].url}
                alt={ambientImages[activePhotoIndex].title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="text-white text-left space-y-1">
              <h3 className="font-serif text-lg md:text-xl font-medium text-luxury-gold">
                {ambientImages[activePhotoIndex].title}
              </h3>
              <p className="text-xs text-white/75 font-light leading-relaxed">
                {ambientImages[activePhotoIndex].desc}
              </p>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center space-x-4 pt-2">
              <button
                onClick={() => setActivePhotoIndex((idx) => (idx! - 1 + ambientImages.length) % ambientImages.length)}
                className="text-xs uppercase hover:text-luxury-gold text-white/50 cursor-pointer"
              >
                ← Prev Picture
              </button>
              <span className="text-xs font-mono text-white/40">{activePhotoIndex + 1} / {ambientImages.length}</span>
              <button
                onClick={() => setActivePhotoIndex((idx) => (idx! + 1) % ambientImages.length)}
                className="text-xs uppercase hover:text-luxury-gold text-white/50 cursor-pointer"
              >
                Next Picture →
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
