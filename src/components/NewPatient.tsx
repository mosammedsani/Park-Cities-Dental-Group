/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { INSURANCE_NETWORKS } from "../types";
import { Download, FileText, Landmark, ShieldCheck, HeartPulse, Sparkles } from "lucide-react";

export default function NewPatient() {
  const onboardingSteps = [
    {
      step: "01",
      title: "Digital Registration",
      desc: "Download and fill your biological history forms ahead of time to skip clinical waiting delays."
    },
    {
      step: "02",
      title: "Benefit Pre-Verification",
      desc: "Submit insurance photos prior to arriving. Our patient coordinator pre-calculates out-of-pocket coverage."
    },
    {
      step: "03",
      title: "Comprehensive Initial Diagnostics",
      desc: "Our initial evaluation is an exhaustive, painless mapping session designed surrounding your sensory guidelines."
    }
  ];

  return (
    <section id="onboarding" className="py-24 bg-luxury-gradient-soft relative overflow-hidden scroll-mt-10">
      {/* Visual Backdrops */}
      <div className="absolute top-1/4 right-[5%] w-96 h-96 bg-luxury-teal/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Onboarding header */}
        <div className="text-center mb-16 select-none">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-luxury-gold block mb-2">
            Seamless Onboarding
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-luxury-navy font-medium tracking-tight">
            Welcoming New Patients to the Family
          </h2>
          <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto mt-4" />
          <p className="text-xs md:text-sm text-luxury-gray max-w-lg mx-auto mt-4 leading-relaxed font-light">
            We make your first visits exceptionally streamlined. Explore forms, pre-verify dental coverage, and coordinate easy financing beforehand.
          </p>
        </div>

        {/* 3 Steps Horizontal Onboarding */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 select-none">
          {onboardingSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-8 border border-neutral-100 hover:border-luxury-gold transition-all duration-305 shadow-luxury hover:shadow-luxury-hover flex flex-col justify-between"
            >
              <div className="space-y-4 text-left">
                <span className="font-mono text-3xl tracking-wide font-light text-luxury-gold/30">
                  {step.step}
                </span>
                <h3 className="font-serif text-base md:text-lg font-bold text-luxury-navy tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-luxury-gray leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 font-mono text-[9px] tracking-widest text-luxury-gold font-bold">
                STAGE_0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Insurance, forms, and financing double blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start select-none">
          
          {/* Digital Forms & Insurance Panel Left */}
          <div className="lg:col-span-6 space-y-8 text-left bg-white p-8 border border-neutral-101 shadow-luxury">
            
            {/* Download section */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-semibold uppercase tracking-wider text-luxury-navy flex items-center border-b pb-2">
                <FileText className="w-5 h-5 text-luxury-gold mr-2" />
                Patient Registration Forms
              </h3>
              <p className="text-xs text-luxury-gray leading-relaxed font-light">
                Please download and print our secure registration documents. Scanning these beforehand allows our treatment staff to configure your clinical file immediately.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); alert("Preparing secure intake PDF forms wrapper download..."); }}
                  className="px-5 py-3 border border-luxury-teal hover:bg-luxury-teal hover:text-white text-luxury-teal font-semibold text-xs uppercase tracking-widest transition-colors flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>General Intake Form (PDF)</span>
                </a>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); alert("Preparing secure dental history PDF download..."); }}
                  className="px-5 py-3 border border-luxury-teal hover:bg-luxury-teal hover:text-white text-luxury-teal font-semibold text-xs uppercase tracking-widest transition-colors flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Medical History (PDF)</span>
                </a>
              </div>
            </div>

            {/* Insurance details */}
            <div className="space-y-4 pt-4 border-t border-neutral-50">
              <h3 className="font-serif text-lg font-semibold uppercase tracking-wider text-luxury-navy flex items-center border-b pb-2">
                <ShieldCheck className="w-5 h-5 text-luxury-gold mr-2" />
                Coverages & Insurances
              </h3>
              <p className="text-xs text-luxury-gray leading-relaxed font-light">
                We coordinate directly as an out-of-network provider with most major PPO networks to process claims seamlessly. Verified networks include:
              </p>
              
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-luxury-navy">
                {INSURANCE_NETWORKS.map((net, i) => (
                  <div key={i} className="flex items-center space-x-2 py-2 px-3 bg-luxury-light border-l-2 border-luxury-gold text-[11px]">
                    <span>{net}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Flexible Financing Panel Right */}
          <div className="lg:col-span-6 space-y-6 text-left bg-luxury-navy text-white p-8 border border-white/5 shadow-2xl relative">
            <span className="absolute top-0 left-0 w-full h-[3px] bg-luxury-gradient-gold" />
            
            <h3 className="font-serif text-lg font-semibold uppercase tracking-wider text-white flex items-center border-b border-white/10 pb-2 select-none">
              <Landmark className="w-5 h-5 text-luxury-gold mr-2" />
              Financial & Payment Comforts
            </h3>

            <p className="text-xs text-white/70 leading-relaxed font-light select-none">
              Exceptional dentistry represents a core investment in your long-term biology. We optimize cost accessibility by partnering with premium healthcare financing systems.
            </p>

            <div className="space-y-4 pt-2 select-none">
              <div className="p-4 bg-white/5 border border-white/10 rounded-none text-left">
                <h4 className="font-serif text-sm font-semibold text-luxury-gold">CareCredit® Financial Plans</h4>
                <p className="text-xs text-white/60 mt-1 leading-relaxed font-light">
                  Enjoy custom 12 to 24-month zero APR customized budget plans. Apply online securely in under five minutes to get instant authorization values.
                </p>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-none text-left">
                <h4 className="font-serif text-sm font-semibold text-luxury-gold">All Major Credit Options</h4>
                <p className="text-xs text-white/60 mt-1 leading-relaxed font-light">
                  We accept major global card systems (including Visa, Mastercard, American Express, and Discover) alongside secure Apple Pay configurations.
                </p>
              </div>
            </div>

            <div className="bg-luxury-teal/20 p-4 font-light text-[11px] leading-relaxed select-none text-teal-200">
              <span className="font-bold text-white uppercase tracking-wider block mb-0.5">Note on Conservative Claims</span>
              Out-of-network benefits often cover up to 80-100% of preventive clinical cycles. Reach out to our billing concierge to run a comprehensive benefits screening today.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
