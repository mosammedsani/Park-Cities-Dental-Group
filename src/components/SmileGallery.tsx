/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { SMILE_GALLERY, SmileTransformation } from "../types";
import { Sparkles, Smile, ArrowRight, Eye, Calendar } from "lucide-react";

interface SmileGalleryProps {
  onScheduleClick: () => void;
}

export default function SmileGallery({ onScheduleClick }: SmileGalleryProps) {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [lightboxCase, setLightboxCase] = useState<SmileTransformation | null>(null);

  const tabs = ["All", "Veneers", "Invisalign", "Smile Makeover", "Whitening"];

  const filteredCases = activeTab === "All"
    ? SMILE_GALLERY
    : SMILE_GALLERY.filter((cs) => cs.category === activeTab);

  return (
    <section id="gallery" className="py-24 bg-luxury-bg scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery main header */}
        <div className="text-center mb-16 select-none">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-luxury-gold block mb-2">
            Clinical Proof of Excellence
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-luxury-navy font-medium tracking-tight">
            The Smile Design Transformations
          </h2>
          <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto mt-4" />
          <p className="text-xs md:text-sm text-luxury-gray max-w-lg mx-auto mt-4 leading-relaxed font-light">
            Each case represents careful diagnostic planning, conservative biological margins, and custom porcelain craftsmanship led by Dr. Shaver.
          </p>
        </div>

        {/* Dynamic Category Nav Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 select-none">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-widest border transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? "bg-luxury-navy border-luxury-navy text-white shadow-luxury"
                  : "bg-white border-neutral-100 text-luxury-navy hover:border-luxury-gold hover:text-luxury-teal"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Horizontal Case Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 select-none">
          {filteredCases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="bg-white border border-neutral-100 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between hover:border-luxury-gold group"
            >
              <div>
                
                {/* Images Container grid (Before and After side-by-side) */}
                <div className="grid grid-cols-2 gap-1 bg-luxury-navy relative overflow-hidden h-60">
                  
                  {/* Before */}
                  <div className="relative overflow-hidden group/img h-full border-r border-white/5">
                    <img
                      src={caseItem.beforeImage}
                      alt={`${caseItem.title} - Before Dentistry`}
                      className="w-full h-full object-cover grayscale brightness-90 transition-transform duration-500 group-hover/img:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-3 left-3 px-2 py-0.5 bg-black/60 text-[8px] font-mono uppercase text-white tracking-widest rounded-none">
                      Before
                    </div>
                  </div>

                  {/* After */}
                  <div className="relative overflow-hidden group/img h-full">
                    <img
                      src={caseItem.afterImage}
                      alt={`${caseItem.title} - After Veneers`}
                      className="w-full h-full object-cover brightness-105 transition-transform duration-500 group-hover/img:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-luxury-gold text-[8px] font-mono uppercase text-luxury-navy tracking-widest font-bold rounded-none">
                      After
                    </div>
                  </div>

                  {/* Zoom Lightbox Trigger Overlay */}
                  <button
                    onClick={() => setLightboxCase(caseItem)}
                    className="absolute inset-0 bg-luxury-navy/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 text-white cursor-pointer z-20"
                  >
                    <div className="py-2.5 px-5 bg-luxury-navy/95 border border-luxury-gold/30 text-xs font-semibold uppercase tracking-widest flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-luxury-gold animate-bounce" />
                      <span>Compare Case details</span>
                    </div>
                  </button>

                </div>

                {/* Typography and Descriptions */}
                <div className="p-6 text-left space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest font-semibold text-luxury-teal">
                    {caseItem.category} // CASE FILE
                  </span>
                  <h3 className="font-serif text-lg font-bold text-luxury-navy tracking-tight group-hover:text-luxury-teal transition-colors duration-200">
                    {caseItem.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-luxury-gold-light tracking-wide italic">
                    {caseItem.treatment}
                  </p>
                  <p className="text-xs text-luxury-gray leading-relaxed font-light pt-1">
                    {caseItem.description}
                  </p>
                </div>

              </div>

              {/* Consultation trigger banner inside card */}
              <div className="px-6 pb-6 pt-2 select-none mt-auto">
                <button
                  onClick={onScheduleClick}
                  className="w-full py-2.5 border border-dashed border-neutral-250 hover:border-luxury-gold hover:bg-luxury-gold/5 text-luxury-teal hover:text-luxury-navy transition-all duration-300 text-[10px] uppercase font-bold tracking-widest flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request similar aesthetic outline</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Lightbox pop-up Zoom Comparison View */}
        {lightboxCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-luxury-navy/90 backdrop-blur-md">
            <div
              className="bg-white max-w-3xl w-full rounded-none shadow-2xl relative select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 md:p-6 bg-luxury-navy text-white flex items-center justify-between border-b border-luxury-gold/20">
                <div>
                  <span className="text-[9px] font-mono uppercase text-luxury-gold tracking-widest">
                    Digital Case Study // {lightboxCase.category}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-medium mt-0.5">
                    {lightboxCase.title}
                  </h3>
                </div>
                <button
                  onClick={() => setLightboxCase(null)}
                  className="p-1 px-3 border border-white/20 text-white/70 hover:text-white text-xs uppercase cursor-pointer"
                >
                  X Close
                </button>
              </div>

              {/* Viewport side by side high definition */}
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Before */}
                  <div className="space-y-1">
                    <div className="h-64 md:h-72 border border-neutral-200 overflow-hidden relative">
                      <img
                        src={lightboxCase.beforeImage}
                        alt={`${lightboxCase.title} - HD Close before`}
                        className="w-full h-full object-cover grayscale"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 py-1 px-2.5 bg-black/70 text-[8px] font-mono tracking-widest uppercase text-white font-bold">
                        ORIGINAL VALUE
                      </div>
                    </div>
                    <p className="text-[10px] text-luxury-gray text-center italic">Failed structure and dull margins.</p>
                  </div>

                  {/* After */}
                  <div className="space-y-1">
                    <div className="h-64 md:h-72 border border-luxury-gold/30 overflow-hidden relative">
                      <img
                        src={lightboxCase.afterImage}
                        alt={`${lightboxCase.title} - HD Close after`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 right-3 py-1 px-2.5 bg-luxury-gold text-[8px] font-mono tracking-widest uppercase text-luxury-navy font-bold">
                        TRANSFORMED VALUE
                      </div>
                    </div>
                    <p className="text-[10px] text-luxury-gold-light text-center font-bold italic">Stable porcelain micro-structure and hand coloration.</p>
                  </div>
                </div>

                {/* Case narrative analysis */}
                <div className="bg-luxury-light p-4 text-left border-l-2 border-luxury-teal space-y-2">
                  <h4 className="font-serif text-xs font-bold uppercase text-luxury-teal tracking-wider">
                    Anatomical Clinical Log
                  </h4>
                  <p className="text-xs text-luxury-gray leading-relaxed font-light">
                    {lightboxCase.description} Our hand-crafted restorations incorporate multiple thin layers of highly translucent glass ceramics to reflect light authentically.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="p-5 bg-luxury-light flex items-center justify-end space-x-3 border-t">
                <button
                  onClick={() => {
                    setLightboxCase(null);
                    onScheduleClick();
                  }}
                  className="px-5 py-2.5 bg-luxury-navy text-white text-xs uppercase tracking-widest font-semibold hover:bg-luxury-teal transition-colors cursor-pointer"
                >
                  Inquire case details
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
