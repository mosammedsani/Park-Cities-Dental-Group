/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Download, FileText, CheckCircle, ShieldCheck, Clock, UserCheck } from "lucide-react";

export default function PatientForms() {
  const intakeSteps = [
    {
      idx: "01",
      title: "Download Documents",
      desc: "Retrieve our HIPAA-compliant intake and medical history PDF files directly below."
    },
    {
      idx: "02",
      title: "Fill At Your Leisure",
      desc: "Complete your medical backgrounds, systemic profiles, and allergy records at home."
    },
    {
      idx: "03",
      title: "Digital Submission",
      desc: "Email your completed files to info@parkcitiesdentalgroup.com or bring printed versions."
    }
  ];

  return (
    <section className="py-24 bg-luxury-gradient-soft relative overflow-hidden min-h-[80vh]">
      {/* Decorative Blur */}
      <div className="absolute top-[10%] right-[-10%] w-96 h-96 bg-luxury-teal/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Page title and description */}
        <div className="text-center mb-16 select-none">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-luxury-gold block mb-2">
            Privileged Onboarding
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-luxury-navy font-medium tracking-tight">
            Patient Registration Forms
          </h2>
          <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto mt-4" />
          <p className="text-xs md:text-sm text-luxury-gray max-w-xl mx-auto mt-5 leading-relaxed font-light">
            We value your time. Filling out registration materials ahead of your initial consultation significantly condenses clinical administrative processes, allowing Dr. Shaver to see you promptly.
          </p>
        </div>

        {/* Steps roadmap block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 select-none">
          {intakeSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-8 border border-neutral-100 shadow-luxury hover:border-luxury-gold transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4 text-left">
                <span className="font-mono text-2xl text-luxury-gold/30 font-bold block">
                  STAGE_{step.idx}
                </span>
                <h3 className="font-serif text-lg font-bold text-luxury-navy tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-luxury-gray leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
              <div className="pt-4 flex items-center space-x-2 text-[10px] uppercase tracking-wider text-luxury-teal font-semibold">
                <CheckCircle className="w-4 h-4 text-luxury-teal" />
                <span>Streamlined Entry</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Panel and Downloads */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Instructions and checklist */}
          <div className="lg:col-span-6 bg-white p-8 md:p-10 border border-neutral-100 shadow-luxury text-left flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-luxury-navy border-b pb-3 flex items-center">
                <UserCheck className="w-5.5 h-5.5 text-luxury-gold mr-2.5" />
                What to Bring to Your First Session
              </h3>
              
              <ul className="space-y-4 text-xs md:text-sm text-luxury-gray font-light">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-luxury-gold mt-0.5 shrink-0" />
                  <span>Your printed and completed physical or digital Patient Intake PDF files.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-luxury-gold mt-0.5 shrink-0" />
                  <span>A valid state driver's license or identification card.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-luxury-gold mt-0.5 shrink-0" />
                  <span>Any relevant dental insurance ID card (if you wish to pre-verify benefits).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-luxury-gold mt-0.5 shrink-0" />
                  <span>Your medical timeline including current prescription coordinate logs if applicable.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100">
              <p className="text-[11px] text-luxury-gray italic flex items-center">
                <Clock className="w-4 h-4 text-luxury-teal mr-2" />
                Please arrive 10-15 minutes prior to your preferred scheduled slot window.
              </p>
            </div>
          </div>

          {/* Actual download card */}
          <div className="lg:col-span-6 bg-luxury-navy text-white p-8 md:p-10 border border-white/5 shadow-2xl relative flex flex-col justify-between select-none">
            <span className="absolute top-0 left-0 w-full h-[3px] bg-luxury-gradient-gold" />
            
            <div className="space-y-6">
              <div>
                <span className="text-[8px] font-mono text-luxury-gold uppercase tracking-[0.2em]">Clinical Files Manager</span>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-white mt-1 border-b border-white/10 pb-3 flex items-center">
                  <FileText className="w-5.5 h-5.5 text-luxury-gold mr-2.5" />
                  Secure PDF Package Downloads
                </h3>
              </div>
              
              <p className="text-xs text-white/70 leading-relaxed font-light text-left">
                Download the individual segments of our patient registration kit. These files comply fully with federal HIPAA healthcare encryption standards.
              </p>

              <div className="space-y-3 pt-2">
                {/* File 1 */}
                <div className="flex items-center justify-between p-3.5 bg-white/5 border border-white/10 hover:border-luxury-gold transition-colors duration-200">
                  <div className="text-left">
                    <h4 className="text-xs font-semibold text-white">01. New Patient Registration Form</h4>
                    <span className="text-[10px] text-white/50 font-mono">PDF Doc • 142 KB</span>
                  </div>
                  <button
                    onClick={() => alert("Downloading secure General Patient Intake PDF forms wrapper...")}
                    className="p-2 border border-white/20 hover:border-luxury-gold text-white hover:text-luxury-gold hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>

                {/* File 2 */}
                <div className="flex items-center justify-between p-3.5 bg-white/5 border border-white/10 hover:border-luxury-gold transition-colors duration-200">
                  <div className="text-left">
                    <h4 className="text-xs font-semibold text-white">02. Medical Description & History Form</h4>
                    <span className="text-[10px] text-white/50 font-mono">PDF Doc • 118 KB</span>
                  </div>
                  <button
                    onClick={() => alert("Downloading secure Medical History & Biological Profiling PDF forms...")}
                    className="p-2 border border-white/20 hover:border-luxury-gold text-white hover:text-luxury-gold hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>

                {/* File 3 */}
                <div className="flex items-center justify-between p-3.5 bg-white/5 border border-white/10 hover:border-luxury-gold transition-colors duration-200">
                  <div className="text-left">
                    <h4 className="text-xs font-semibold text-white">03. Privacy Policy & HIPAA Compliance Notice</h4>
                    <span className="text-[10px] text-white/50 font-mono">PDF Doc • 94 KB</span>
                  </div>
                  <button
                    onClick={() => alert("Downloading secure HIPAA Privacy Guidelines and Compliance Notice...")}
                    className="p-2 border border-white/20 hover:border-luxury-gold text-white hover:text-luxury-gold hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-luxury-teal/20 p-4 font-light text-[11px] leading-relaxed select-none text-teal-200 mt-6 text-left">
              <span className="font-bold text-white uppercase tracking-wider block mb-0.5">HIPAA Digital Warning</span>
              Your submitted data remains 100% encrypted beneath physical and dynamic digital firewalls inside the Park Cities private medical node.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
