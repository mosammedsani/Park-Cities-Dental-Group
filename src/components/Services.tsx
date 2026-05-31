/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { DENTAL_SERVICES, ServiceItem } from "../types";
import { Sparkles, Activity, ShieldCheck, HeartPulse, Zap, Heart, AlertCircle, Smile, Clock, Check, X, Calendar } from "lucide-react";

interface ServicesProps {
  onScheduleClick: () => void;
}

// Icon mapper mapping string lookup to Lucide component
const iconMap: Record<string, React.ComponentType<any>> = {
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  Activity: Activity,
  Zap: Zap,
  HeartPulse: HeartPulse,
  Heart: Heart,
  AlertCircle: AlertCircle,
  Smile: Smile,
  Clock: Clock
};

export default function Services({ onScheduleClick }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = ["All", "Cosmetic", "Implants", "Restorative", "Preventive", "Emergency"];

  const filteredServices = activeCategory === "All"
    ? DENTAL_SERVICES
    : DENTAL_SERVICES.filter(srv => srv.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-luxury-bg scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center mb-16 select-none">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-luxury-gold block mb-2">
            Clinical Scope
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-luxury-navy font-medium tracking-tight">
            Sophisticated Dental Offerings
          </h2>
          <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto mt-4" />
          <p className="text-xs md:text-sm text-luxury-gray max-w-lg mx-auto mt-4 leading-relaxed font-light">
            We provide a comprehensive ecosystem of treatments ranging from advanced cosmetic design to restorative implants—all administered under luxury comfort parameters.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 select-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-widest border transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-luxury-navy border-luxury-navy text-white shadow-luxury"
                  : "bg-white border-neutral-100 text-luxury-navy hover:border-luxury-gold hover:text-luxury-teal"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Treatments Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComp = iconMap[service.iconName] || Smile;
            return (
              <div
                key={service.id}
                className="bg-white border border-neutral-100 hover:border-luxury-gold transition-all duration-300 shadow-luxury hover:shadow-luxury-hover hover:-translate-y-1 block flex flex-col justify-between"
              >
                <div>
                  {/* Photo area with zoom limits */}
                  <div className="relative h-56 overflow-hidden bg-luxury-navy select-none">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    {/* Category Label Overlay */}
                    <div className="absolute top-4 left-4 py-1 px-3 bg-white/95 backdrop-blur-sm self-start">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-luxury-teal">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Text details */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-2 text-luxury-gold">
                      <IconComp className="w-4 h-4" />
                      <span className="text-[10px] font-mono tracking-widest font-semibold uppercase">
                        Clinical Suite
                      </span>
                    </div>

                    <h3 className="font-serif text-lg md:text-xl font-bold text-luxury-navy tracking-tight">
                      {service.name}
                    </h3>

                    <p className="text-xs md:text-sm text-luxury-gray leading-relaxed font-light line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 pt-0 border-t border-neutral-50 flex items-center justify-between mt-auto select-none">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold uppercase tracking-widest text-luxury-teal hover:text-luxury-navy transition-colors flex items-center cursor-pointer"
                  >
                    Clinical Details →
                  </button>
                  <button
                    onClick={onScheduleClick}
                    className="text-[10px] py-1 px-3 bg-luxury-light text-luxury-navy font-semibold uppercase tracking-wider hover:bg-luxury-gold hover:text-luxury-navy transition-colors cursor-pointer"
                  >
                    Quick Visit
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Expanded Quick Details Dialog Overlay */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-luxury-navy/80 backdrop-blur-md animate-fade-in">
          <div
            className="bg-white max-w-xl w-full max-h-[90vh] overflow-y-auto rounded-none shadow-2xl relative select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Embedded image */}
            <div className="relative h-52 bg-luxury-navy">
              <img
                src={selectedService.image}
                alt={selectedService.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-black/45 text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="absolute bottom-5 left-6 text-white text-left">
                <span className="text-[9px] uppercase tracking-widest font-semibold text-luxury-gold bg-black/40 px-2 py-0.5 rounded-none">
                  Treatment category: {selectedService.category}
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-medium mt-1">
                  {selectedService.name}
                </h3>
              </div>
            </div>

            {/* Treatment breakdown details */}
            <div className="p-6 md:p-8 space-y-6">
              
              <div className="space-y-2 text-left">
                <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-luxury-teal">
                  Treatment Overview
                </h4>
                <p className="text-xs md:text-sm text-luxury-gray leading-relaxed font-light">
                  {selectedService.fullDescription}
                </p>
              </div>

              {/* Treatment clinical highlights list */}
              <div className="space-y-3 text-left">
                <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-luxury-navy border-b pb-1.5">
                  Scope and Expected Results
                </h4>
                <ul className="grid grid-cols-1 gap-2">
                  {selectedService.highlights.map((hlt, i) => (
                    <li key={i} className="flex items-start space-x-2 text-xs text-luxury-gray">
                      <Check className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                      <span>{hlt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Patient safety disclaimer */}
              <div className="bg-luxury-light p-4 text-[11px] text-luxury-gray leading-relaxed text-left">
                <span className="font-bold text-luxury-navy uppercase tracking-wider block mb-1">
                  Conservative Calibration Guard
                </span>
                At Park Cities Dental Group, all treatments map directly onto high-definition tooth preservation guidance. Standard protocols include computerized decay verification to safeguard healthy enamel layers.
              </div>

            </div>

            {/* Dialog Footer Actions */}
            <div className="p-5 bg-luxury-light flex items-center justify-end space-x-3 border-t">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 border border-luxury-teal text-luxury-teal text-xs uppercase tracking-widest font-semibold hover:bg-luxury-teal/10 transition-colors cursor-pointer"
              >
                Close details
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onScheduleClick();
                }}
                className="px-5 py-2.5 bg-luxury-gold text-white text-xs uppercase tracking-widest font-semibold hover:bg-luxury-gold-light transition-colors cursor-pointer"
              >
                Schedule Consultation
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
