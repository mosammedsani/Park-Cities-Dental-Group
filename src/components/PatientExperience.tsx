/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Calendar, Coffee, Sparkles, Smile } from "lucide-react";

export default function PatientExperience() {
  const roadmapSteps = [
    {
      icon: Calendar,
      title: "01. Concierge Booking",
      desc: "Connect online or request a direct callback. Our patient coordinator manages calendar parameters, security verifications, and parking space reservation details prior to your arrival."
    },
    {
      icon: Coffee,
      title: "02. Comfort-First Intake",
      desc: "Step into our serene, high-rise lounge. Enjoy fine organic coffee or chilled sparkling water. Our treatment suites feature noise-damping headphones and micro-compression heated cushions."
    },
    {
      icon: Sparkles,
      title: "03. Interactive Smile Co-Design",
      desc: "Review your ultra-low dose digital scans directly with Dr. Shaver. We construct simulated previews so you can check and approve your final aesthetic symmetry before we take any restorative steps."
    },
    {
      icon: Smile,
      title: "04. Pristine Painless Deliverables",
      desc: "Complete your session under advanced safety conditions (including painless local gels and drill-free micro-air tool options). Walk away with a customized smile that physically endures."
    }
  ];

  return (
    <section className="py-24 bg-luxury-navy text-white relative overflow-hidden">
      {/* Dynamic Background elements */}
      <div className="absolute top-[20%] right-0 w-80 h-80 bg-luxury-teal/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Concierge title block */}
        <div className="text-center mb-20 select-none">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-luxury-gold block mb-2 animate-pulse">
            Boutique Care Workflow
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-medium tracking-tight">
            The Concierge Patient Experience
          </h2>
          <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto mt-4" />
          <p className="text-xs md:text-sm text-white/60 max-w-lg mx-auto mt-5 leading-relaxed font-light">
            We redrafted dental care layout to resemble a high-end health spa. Every interaction balances clinical priority with hospitality attention.
          </p>
        </div>

        {/* Dynamic timeline horizontal timeline roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative select-none">
          
          {/* Timeline background linkage bar for wide displays */}
          <div className="absolute top-1/2 left-[5%] right-[5%] h-[1px] bg-white/10 hidden lg:block -translate-y-[60px]" />

          {roadmapSteps.map((step, index) => {
            const IconComp = step.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-start bg-luxury-navy border border-white/5 hover:border-luxury-gold p-7 shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Visual Connector Dot */}
                <div className="absolute top-0 left-7 -translate-y-1/2 w-4 h-4 rounded-full bg-luxury-gold border-4 border-luxury-navy hidden lg:block" />
                
                <div className="space-y-4 text-left">
                  {/* Icon encapsulation */}
                  <div className="w-12 h-12 rounded-none bg-luxury-teal/20 text-luxury-gold border border-luxury-gold/30 flex items-center justify-center">
                    <IconComp className="w-5.5 h-5.5" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                    {step.title}
                  </h3>

                  <p className="text-xs text-white/65 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Safety standards quote element */}
        <div className="mt-16 text-center select-none max-w-xl mx-auto">
          <p className="text-xs text-white/35 font-mono italic">
            “True quality begins when you establish safety and tranquility first.” — Dr. J. Garrett Shaver, DDS
          </p>
        </div>

      </div>
    </section>
  );
}
