/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { PATIENT_TESTIMONIALS } from "../types";
import { Star, ChevronLeft, ChevronRight, MessageSquare, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll loop for the luxury testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PATIENT_TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PATIENT_TESTIMONIALS.length) % PATIENT_TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PATIENT_TESTIMONIALS.length);
  };

  return (
    <section className="py-24 bg-luxury-gradient-dark text-white relative overflow-hidden">
      {/* Visual Backings */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-luxury-teal/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title structure */}
        <div className="text-center mb-16 select-none">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-luxury-gold block mb-2">
            Verified Experiences
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-medium tracking-tight">
            Our Patient Testimonials
          </h2>
          <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto mt-4" />
        </div>

        {/* Carousel slide space */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          
          {PATIENT_TESTIMONIALS.map((testimonial, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={testimonial.id}
                className={`w-full transition-all duration-700 absolute inset-0 flex flex-col items-center justify-center select-none ${
                  isActive
                    ? "opacity-100 translate-x-0 scale-100 z-10"
                    : "opacity-0 translate-x-12 scale-95 pointer-events-none -z-10"
                }`}
              >
                <div className="w-full max-w-3xl text-center space-y-6">
                  
                  {/* Glowing Quote Icon */}
                  <div className="inline-flex p-3 bg-white/5 border border-white/10 rounded-full text-luxury-gold mb-2">
                    <Quote className="w-6 h-6 rotate-180" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <p className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl font-light italic text-white/90 leading-relaxed px-4 md:px-12">
                    "{testimonial.quote}"
                  </p>

                  {/* Patient Details metadata */}
                  <div className="pt-4 border-t border-white/15 w-40 mx-auto">
                    <h4 className="font-serif text-sm md:text-base font-semibold text-white">
                      {testimonial.patientName}
                    </h4>
                    <span className="text-[10px] uppercase tracking-widest text-luxury-gold block mt-0.5">
                      {testimonial.location}
                    </span>
                    <span className="text-[9px] font-mono tracking-widest text-teal-200 uppercase mt-1 block">
                      {testimonial.treatmentRecieved}
                    </span>
                  </div>

                </div>
              </div>
            );
          })}

        </div>

        {/* Manual navigation arrows */}
        <div className="flex items-center justify-center space-x-4 mt-12 select-none relative z-20">
          <button
            onClick={handlePrev}
            className="p-3 border border-white/15 hover:border-luxury-gold text-white hover:text-luxury-gold hover:bg-white/5 transition-all cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Nav slide indicators */}
          <div className="flex items-center space-x-2">
            {PATIENT_TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 transition-all rounded-full cursor-pointer ${
                  idx === currentIndex ? "bg-luxury-gold w-6" : "bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 border border-white/15 hover:border-luxury-gold text-white hover:text-luxury-gold hover:bg-white/5 transition-all cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Brand Rating footer section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between select-none max-w-3xl mx-auto text-left gap-4 text-xs text-white/50">
          <div className="flex items-center space-x-3">
            <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 font-bold tracking-widest uppercase text-[10px]">
              Verifiable Review
            </div>
            <span>Based on 250+ active Dallas patient surveys.</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="font-bold text-white text-sm">5.0 Out of 5.0</span>
            <div className="flex text-luxury-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
