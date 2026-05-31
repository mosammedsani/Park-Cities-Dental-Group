/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, ClipboardList, PenTool, Activity, ShieldCheck, HeartPulse } from "lucide-react";

export default function DentalImplants() {
  const implantTypes = [
    {
      title: "Single Tooth Replacements",
      desc: "An isolated, biocompatible titanium post topped by a custom sculpted porcelain crown, avoiding damage to adjacent healthy teeth."
    },
    {
      title: "Multiple Tooth Restorations",
      desc: "Custom high-tensile bridges anchored onto dental implants, bridging gaps comfortably without relying on slipping plates."
    },
    {
      title: "Full-Arch Permanent Rehabilitation",
      desc: "All-on-4® or implant-supported hybrid prosthetic sheets that fully restore chewing integrity and youthful facial contouring."
    }
  ];

  const implantProcess = [
    {
      step: "01",
      icon: ClipboardList,
      title: "Diagnostic Assessment",
      desc: "We perform ultra-high definition CBCT radiography to map available bone densities and neurological pathways with absolute geometric safety."
    },
    {
      step: "02",
      icon: PenTool,
      title: "Digital Virtual Planning",
      desc: "Dr. Shaver layouts the exact placement vectors virtually. This enables precise clinical placements and minimizes surgical time."
    },
    {
      step: "03",
      icon: Activity,
      title: "Implant Placement",
      desc: "A top regional micro-surgeon stabilizes the grade-V titanium post. Over 3-6 months, osseointegration triggers the bone to fuse naturally."
    },
    {
      step: "04",
      icon: ShieldCheck,
      title: "Artistic Restoration",
      desc: "Dr. Shaver crowns the healed post with an executive all-ceramic zirconium tooth colored with lifelike depth and translucency."
    }
  ];

  return (
    <section className="py-24 bg-luxury-gradient-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Implant section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 select-none">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-luxury-gold block">
              Permanent Restorative Restorations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-luxury-navy font-medium tracking-tight">
              Restore Your Absolute Bite Functionality with Dental Implants
            </h2>
            <div className="w-16 h-[1.5px] bg-luxury-gold mt-2" />
          </div>
          
          <div className="lg:col-span-5 select-none text-left">
            <p className="text-sm text-luxury-gray leading-relaxed font-light">
              Dental implants substituted failing teeth with maximum anatomical permanence. By functioning exactly like real tooth roots, implants communicate direct biomechanical forces back to the jawbone, preserving underlying facial structure.
            </p>
          </div>
        </div>

        {/* 3 Column Grid detailing the different scope options */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 select-none">
          {implantTypes.map((type, idx) => (
            <div
              key={idx}
              className="bg-white p-8 border border-neutral-100 hover:border-luxury-teal/30 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 relative"
            >
              <div className="absolute top-0 right-0 p-3 font-mono text-xs text-neutral-200">
                0{idx + 1}
              </div>
              <div className="space-y-4 text-left">
                <HeartPulse className="w-6 h-6 text-luxury-gold" />
                <h3 className="font-serif text-lg font-bold text-luxury-navy tracking-tight">
                  {type.title}
                </h3>
                <p className="text-xs md:text-sm text-luxury-gray leading-relaxed font-light">
                  {type.desc}
                </p>
                <ul className="space-y-2 pt-2 text-xs text-luxury-gray">
                  <li className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-luxury-teal" />
                    <span>Permanent natural fusion</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-luxury-teal" />
                    <span>No reliance on surrounding enamel</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Vertical/Horizontal Infographic Roadmap of the treatment process */}
        <div className="select-none">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-luxury-gold block">
              Clinical Progression Timeline
            </span>
            <h3 className="font-serif text-xl md:text-2xl text-luxury-navy font-medium mt-1">
              Your Surgical & Aesthetic Roadmap
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {implantProcess.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/80 p-6 border border-neutral-100 shadow-sm relative text-left hover:border-luxury-gold transition-colors hover:shadow-luxury duration-300"
                >
                  <span className="absolute top-4 right-4 font-mono text-3xl font-light text-neutral-100">
                    {item.step}
                  </span>
                  
                  <div className="space-y-4">
                    <div className="w-10 h-10 bg-luxury-light text-luxury-teal flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    
                    <h4 className="font-serif text-base font-bold text-luxury-navy tracking-tight">
                      {item.title}
                    </h4>
                    
                    <p className="text-xs text-luxury-gray leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
