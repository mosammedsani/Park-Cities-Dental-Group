/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Sparkles, AlertCircle, Calendar } from "lucide-react";

interface GalleryCard {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const GALLERY_ITEMS: GalleryCard[] = [
  {
    id: "implant",
    category: "ANATOMICAL BIO-INTEGRATION",
    title: "Implant Dentistry",
    subtitle: "Titanium & Zirconia Implants",
    description: "State-of-the-art permanent clinical root replacement utilizing fully guided precise placement to restore optimal speech, chewing, and smile confidence.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=700"
  },
  {
    id: "preventive",
    category: "AESTHETIC WELLNESS",
    title: "Preventive Care",
    subtitle: "Bespoke Cleanings & Diagnostics",
    description: "Personalized periodontal assessment and pain-free airflow prophylaxis systems. Ensuring healthy tooth foundation and active gum defense.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=700"
  },
  {
    id: "invisalign",
    category: "INVISIBLE ALIGNMENT",
    title: "Invisalign Aligners",
    subtitle: "Discreet Orthodontic Systems",
    description: "Virtually unnoticeable, personalized clear tray retainers designed to align patient teeth comfortably, without metal wires or mouth irritation.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=700"
  },
  {
    id: "veneers",
    category: "SMILE SCULPTING",
    title: "Porcelain Veneers",
    subtitle: "High-Fidelity Restorations",
    description: "Premium ultra-thin individual hand-shaded porcelain veneers engineered to respect face shape, tooth geometry, and light transmission dynamics.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=700"
  },
  {
    id: "whitening",
    category: "LUMINESCENT THERAPY",
    title: "Teeth Whitening",
    subtitle: "Laser-Activated Whitening",
    description: "Advanced clinic UV/laser-assisted whitening systems that lift deep stains and brighten your smile's natural luster in a single visit.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=700"
  }
];

interface GallerySliderProps {
  onScheduleClick: () => void;
}

export default function CosmeticDentistryGallery({ onScheduleClick }: GallerySliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Adjust display card density based on screen configuration size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalItems = GALLERY_ITEMS.length;
  const maxIndex = Math.max(0, totalItems - visibleCount);

  // Safe bounds slider operations
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="py-24 bg-luxury-bg relative overflow-hidden text-left border-y border-neutral-100">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute -right-20 top-1/4 w-[450px] h-[450px] bg-luxury-teal/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 select-none">
        
        {/* Gallery Top Heading Grid block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-luxury-gold/10 border border-luxury-gold/20">
              <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-luxury-gold">
                Interactive Portfolio
              </span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl text-luxury-navy font-medium tracking-tight uppercase">
              COSMETIC DENTISTRY GALLERY
            </h2>
            <p className="text-xs md:text-sm text-luxury-gray max-w-xl font-light leading-relaxed">
              Scan through our premier dental specializations. Drag, swipe or click below to examine our clinical design capabilities.
            </p>
          </div>

          {/* Controller Arrows */}
          <div className="flex items-center space-x-3 self-start md:self-auto">
            <button
              onClick={handlePrev}
              className="p-3 border border-neutral-200 hover:border-luxury-gold bg-white text-luxury-navy hover:text-luxury-gold hover:shadow-luxury transition-all duration-300 cursor-pointer active:scale-95"
              aria-label="Previous services slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 border border-neutral-200 hover:border-luxury-gold bg-white text-luxury-navy hover:text-luxury-gold hover:shadow-luxury transition-all duration-300 cursor-pointer active:scale-95"
              aria-label="Next services slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div 
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{
              transform: `translateX(calc(-${currentIndex} * (100% + 24px) / ${visibleCount}))`
            }}
          >
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 transition-all duration-300 group"
                style={{
                  width: `calc((100% - ${(visibleCount - 1) * 24}px) / ${visibleCount})`
                }}
              >
                {/* Image Card Container */}
                <div className="bg-white border border-neutral-200 shadow-luxury group-hover:shadow-luxury-hover transition-all duration-300 flex flex-col h-full overflow-hidden relative group-hover:border-luxury-gold">
                  
                  {/* Photo with category banner overlay */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/80 via-luxury-navy/20 to-transparent opacity-90" />
                    
                    {/* Category Label Pin */}
                    <div className="absolute top-3 left-3 bg-luxury-navy px-2.5 py-1 text-[8px] font-mono tracking-widest text-luxury-gold uppercase border border-luxury-gold/20">
                      {item.category}
                    </div>

                    {/* Quick Booking Overlaid Button on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-luxury-navy/40 backdrop-blur-xs">
                      <button
                        onClick={onScheduleClick}
                        className="py-2.5 px-5 bg-luxury-navy/95 border border-luxury-gold/35 text-white hover:text-luxury-gold text-[10px] font-bold uppercase tracking-widest hover:bg-luxury-navy transition-all flex items-center space-x-1.5 cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5 text-luxury-gold" />
                        <span>Schedule Visit</span>
                      </button>
                    </div>
                  </div>

                  {/* Body textual values */}
                  <div className="p-6 flex flex-col justify-between flex-grow text-left space-y-4">
                    <div>
                      <h3 className="font-serif text-lg md:text-xl font-bold text-luxury-navy group-hover:text-luxury-gold transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[10px] text-luxury-gold italic tracking-wide font-medium mt-0.5">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-luxury-gray mt-3 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Learn more detail link */}
                    <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] font-semibold text-luxury-teal uppercase tracking-widest group-hover:text-luxury-gold transition-colors">
                      <span>Explore Case Studies</span>
                      <span>→</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Carousel Nav Indicators */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {[...Array(maxIndex + 1)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-none border-none cursor-pointer ${
                idx === currentIndex ? "bg-luxury-gold w-6" : "bg-neutral-200 w-1.5 hover:bg-neutral-400"
              }`}
              aria-label={`Go to slide page ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
