/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { DENTAL_DOCTOR } from "../types";
import { Award, BookOpen, UserCheck, Check, Sparkles, X } from "lucide-react";

export default function DoctorShowcase() {
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);

  return (
    <section id="doctor" className="py-24 bg-luxury-bg scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Editorial Title */}
        <div className="text-center mb-16 select-none">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-luxury-gold block mb-2">
            The Standard of Care
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-luxury-navy font-medium tracking-tight">
            Meet Our Chief of Smile Artistry
          </h2>
          <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto mt-4" />
        </div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Large Editorial Portrait on the left */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-luxury-gradient-gold -translate-x-4 translate-y-4 max-w-full" />
            <div className="relative border border-white/20 shadow-2xl overflow-hidden bg-luxury-navy">
              <img
                src={DENTAL_DOCTOR.image}
                alt={DENTAL_DOCTOR.name}
                className="w-full h-[480px] object-cover object-center transition-all duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-5 left-5 bg-luxury-navy/95 border-l-4 border-luxury-gold p-4 text-white max-w-xs backdrop-blur-md">
                <span className="text-luxury-gold text-xs font-semibold tracking-wider font-mono">DALLAS, TX</span>
                <p className="text-xs text-white/90 mt-1 leading-snug">
                  Providing state-of-the-art biological dentistry in Highland Park enclave.
                </p>
              </div>
            </div>
          </div>

          {/* Descriptive Content Section */}
          <div className="lg:col-span-7 flex flex-col space-y-6 select-none">
            <h3 className="font-serif text-2xl md:text-3xl text-luxury-navy font-medium tracking-tight">
              {DENTAL_DOCTOR.name}
            </h3>
            <span className="text-xs uppercase tracking-widest font-semibold text-luxury-teal -mt-3">
              {DENTAL_DOCTOR.title}
            </span>

            <p className="text-sm md:text-base text-luxury-gray leading-relaxed">
              {DENTAL_DOCTOR.bio}
            </p>

            {/* Philosophy block Quote */}
            <div className="border-l-2 border-luxury-gold pl-5 py-2 my-4 bg-luxury-light/40">
              <h4 className="font-semibold text-xs tracking-wider uppercase text-luxury-teal mb-2 flex items-center">
                <Sparkles className="w-3.5 h-3.5 text-luxury-gold mr-1.5" />
                Conservative Philosophy
              </h4>
              <p className="font-serif italic text-sm md:text-base text-luxury-navy/85 leading-relaxed">
                "{DENTAL_DOCTOR.philosophy}"
              </p>
            </div>

            {/* High-Level Credentials list preview */}
            <div className="space-y-3 pt-2">
              <h4 className="font-serif text-sm font-semibold text-luxury-navy uppercase tracking-widest flex items-center">
                <Award className="w-4 h-4 text-luxury-gold mr-2" />
                Education & Achievements
              </h4>
              <ul className="text-xs text-luxury-gray space-y-2.5 pl-1">
                {DENTAL_DOCTOR.education.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-luxury-gold mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Trigger buttons */}
            <div className="pt-4 flex items-center space-x-4">
              <button
                id="doc-more-btn"
                onClick={() => setIsBioModalOpen(true)}
                className="px-6 py-3 border border-luxury-teal text-luxury-teal hover:bg-luxury-teal hover:text-white transition-all text-xs uppercase tracking-widest font-semibold cursor-pointer"
              >
                Read Full Biography
              </button>
              <a
                href="#services"
                className="text-xs uppercase tracking-widest font-semibold text-luxury-gold hover:text-luxury-navy transition-colors flex items-center"
              >
                View Services Offered →
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Pop-up Biography & Credentials Modal */}
      {isBioModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-luxury-navy/80 backdrop-blur-md">
          <div
            className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-none shadow-2xl relative select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 md:p-8 bg-luxury-navy text-white flex items-start justify-between border-b border-luxury-gold/20 sticky top-0 z-10">
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-white font-medium">
                  {DENTAL_DOCTOR.name}
                </h3>
                <span className="text-xs uppercase tracking-widest text-luxury-gold font-light mt-0.5 block">
                  Licensing, Accreditations & Member Board
                </span>
              </div>
              <button
                onClick={() => setIsBioModalOpen(false)}
                className="p-1.5 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body Info */}
            <div className="p-6 md:p-8 space-y-8">
              
              {/* Comprehensive timeline of educational benchmarks */}
              <div className="space-y-4">
                <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-luxury-navy border-b pb-1.5 flex items-center">
                  <BookOpen className="w-4 h-4 text-luxury-gold mr-2" />
                  Detailed Professional Training
                </h4>
                <div className="space-y-3.5">
                  {DENTAL_DOCTOR.education.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-xs md:text-sm text-luxury-gray">
                      <div className="w-5 h-5 rounded-full bg-luxury-light text-luxury-gold flex items-center justify-center font-bold shrink-0 mt-0.5 text-[10px]">
                        {idx + 1}
                      </div>
                      <p className="leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comprehensive board memberships */}
              <div className="space-y-4">
                <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-luxury-navy border-b pb-1.5 flex items-center">
                  <UserCheck className="w-4 h-4 text-luxury-gold mr-2" />
                  Board Certifications & Affiliations
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {DENTAL_DOCTOR.memberships.map((member, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-luxury-light hover:bg-luxury-gold/10 border-l-2 border-luxury-gold text-xs font-semibold text-luxury-navy transition-colors flex items-center"
                    >
                      <span>{member}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct clinical summary and commitment to the patient */}
              <div className="bg-luxury-light/30 p-5 border border-luxury-teal/10">
                <h4 className="font-serif text-xs uppercase tracking-wider text-luxury-teal font-bold mb-2">
                  Conservative Biomimetic Standard of Safety
                </h4>
                <p className="text-xs text-luxury-gray leading-relaxed">
                  Park Cities Dental Group operates under a strictly biomimetic philosophy. In alignment with ADA guidance, we prioritize protective hygiene, minimally invasive cavity preparation, chemical decay ablation models, and premium safe metal replacements. Each process is optimized to avoid permanent nerve irritation and preserve long-term biocompatibility.
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-5 bg-luxury-light flex items-center justify-end space-x-3">
              <button
                onClick={() => setIsBioModalOpen(false)}
                className="px-5 py-2.5 bg-luxury-navy text-white text-xs uppercase tracking-wider font-semibold hover:bg-luxury-teal transition-colors cursor-pointer"
              >
                Close View
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
