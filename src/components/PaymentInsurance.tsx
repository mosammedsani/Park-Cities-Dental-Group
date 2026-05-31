/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { INSURANCE_NETWORKS } from "../types";
import { Landmark, ShieldCheck, DollarSign, CheckCircle2, ChevronRight, HelpCircle, PhoneCall } from "lucide-react";

export default function PaymentInsurance() {
  const customFAQ = [
    {
      q: "Are you an in-network or out-of-network clinic?",
      a: "Yes, we coordinate directly as an premier out-of-network provider with almost all major PPO insurance products (such as Delta Dental, Guardian, Cigna, and MetLife). This status allows us to maintain a protective, conservative philosophy where clinical decisions are dictated entirely by your biological interest—never limited by arbitrary corporate insurance caps."
    },
    {
      q: "How does benefits pre-verification work?",
      a: "Our experienced patient coordinator handles everything. Simply call us at (214) 528-7870 or email a copy of your insurance ID to info@parkcitiesdentalgroup.com prior to your appointment. We will contact your provider to pre-calculate and detail your exact out-of-pocket coverage."
    },
    {
      q: "What is CareCredit® and how do I apply?",
      a: "CareCredit is a dedicated, interest-free healthcare credit card designed to finance medical, beauty, and dental wellness. We offer customized 12 and 24-month zero APR customized payment plans. You can apply in-office or online securely in 5 minutes with immediate response coordinates."
    }
  ];

  return (
    <section className="py-24 bg-luxury-gradient-soft relative overflow-hidden min-h-[80vh]">
      {/* Visual background accents */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-luxury-teal/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[60%] right-[-10%] w-[450px] h-[450px] bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Header section */}
        <div className="text-center mb-16 select-none">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-luxury-gold block mb-2">
            Financial Transparency
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-luxury-navy font-medium tracking-tight">
            Payment & Insurance Information
          </h2>
          <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto mt-4" />
          <p className="text-xs md:text-sm text-luxury-gray max-w-xl mx-auto mt-5 leading-relaxed font-light">
            We believe in complete transparency and seamless administrative workflows. Learn how we optimize your insurance benefits and private credit flexibilities to make exceptional dentistry seamlessly accessible.
          </p>
        </div>

        {/* Double pillars grid: Insurances on Left, CareCredit on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
          
          {/* Insurance Card - Left */}
          <div className="lg:col-span-6 bg-white p-8 md:p-10 border border-neutral-100 shadow-luxury flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 border-b border-neutral-100 pb-3 text-left">
                <div className="p-2 bg-luxury-light text-luxury-gold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-[#888] uppercase">PPO Insurance Claims</span>
                  <h3 className="font-serif text-xl font-bold text-luxury-navy">Coverages & Claims Processing</h3>
                </div>
              </div>

              <p className="text-xs md:text-sm text-luxury-gray leading-relaxed font-light text-left">
                We accept and file claims with nearly all major dental PPO insurance plans as a premier out-of-network provider. Because we refuse to let insurance companies dictate your standard of dental biology, we provide personalized billing coordination where we draft and submit all insurance paperwork on your behalf.
              </p>

              {/* Grid list of networks */}
              <div className="space-y-3 pt-2 text-left">
                <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-luxury-navy">
                  Common Coordinated PPO Networks:
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-luxury-navy">
                  {INSURANCE_NETWORKS.map((net, i) => (
                    <div key={i} className="flex items-center space-x-2 py-2 px-3.5 bg-luxury-light border-l-2 border-luxury-gold text-[11px] leading-snug">
                      <span>{net}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-luxury-light p-4 text-[11px] text-luxury-gray leading-relaxed text-left mt-8">
              <span className="font-bold text-luxury-navy uppercase tracking-wider block mb-0.5">
                Out-of-Network Advantage
              </span>
              Out-of-network benefits often cover up to 80-100% of standard preventive hygiene cycles. Our desk concierge executes automated benefit pre-checks to detail everything in advance!
            </div>
          </div>

          {/* CareCredit and flexible finance - Right */}
          <div className="lg:col-span-6 bg-luxury-navy text-white p-8 md:p-10 border border-white/5 shadow-2xl relative flex flex-col justify-between">
            <span className="absolute top-0 left-0 w-full h-[3px] bg-luxury-gradient-gold" />
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3 border-b border-white/10 pb-3 text-left select-none">
                <div className="p-2 bg-white/5 text-luxury-gold">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-luxury-gold uppercase">Consumer Finance Systems</span>
                  <h3 className="font-serif text-xl font-bold text-white">Conserves Long-Term Cash Flow</h3>
                </div>
              </div>

              <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light text-left select-none">
                Exceptional smile rejuvenation represents a permanent, structural investment in your overall biology and self-image. To keep your cash flow fluid, we support interest-free installment options designed specifically for healthcare procedures.
              </p>

              {/* Finance list */}
              <div className="space-y-4 pt-2">
                <div className="p-4 bg-white/5 border border-white/10 rounded-none text-left">
                  <h4 className="font-serif text-sm font-semibold text-luxury-gold">CareCredit® Healthcare Card</h4>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed font-light">
                    Enjoy convenient monthly terms spanning up to 24 months with 0% interest on qualified clinical cosmetic parameters. Quick, secured credit check forms provide pre-approvals instantly.
                  </p>
                  <a
                    href="https://www.carecredit.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 text-[11px] uppercase tracking-widest text-luxury-gold hover:text-white font-semibold mt-2 transition-colors cursor-pointer"
                  >
                    <span>Apply Online Securely</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-none text-left select-none">
                  <h4 className="font-serif text-sm font-semibold text-luxury-gold">Traditional Payment Methods</h4>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed font-light">
                    We accept Visa, Mastercard, AMEX, Discover, cash deposits, personal bank checks, and dynamic contactless Apple Pay configurations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-luxury-teal/20 p-4 font-light text-[11px] leading-relaxed select-none text-teal-200 mt-6 text-left">
              <span className="font-bold text-white uppercase tracking-wider block mb-0.5">Flexible Pre-Verification</span>
              Whether you are opting for Invisalign or hand-layered veneers, our desk coordinators are trained to frame custom structural installment schedules matching your timing.
            </div>
          </div>

        </div>

        {/* FAQs section specifically on Billing */}
        <div className="bg-white p-8 md:p-12 border border-neutral-100 shadow-luxury text-left mb-12 select-none">
          <h3 className="font-serif text-xl md:text-2xl font-bold text-luxury-navy mb-8 border-b pb-3 flex items-center">
            <HelpCircle className="w-5.5 h-5.5 text-luxury-gold mr-2.5" />
            Billing & Insurance FAQs
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {customFAQ.map((faq, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="font-serif text-sm font-bold text-luxury-navy flex items-start">
                  <ChevronRight className="w-4 h-4 text-luxury-gold shrink-0 mr-1 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs md:text-sm text-luxury-gray font-light leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact pre-check teaser banner */}
        <div className="bg-luxury-navy text-white p-8 border border-white/5 shadow-2xl relative text-left flex flex-col md:flex-row items-center justify-between">
          <div className="space-y-2 max-w-xl md:mb-0 mb-6 select-none">
            <span className="text-[9px] uppercase tracking-widest text-luxury-gold font-bold">Have Specific Billing Questions?</span>
            <h4 className="font-serif text-lg md:text-xl font-bold">Let Our Billing Coordinator Run Your Plan</h4>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              We can call your insurance carrier and verify your exact active benefits in minutes. Give us a call or send a quick email copy over!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
            <a
              href="tel:2145287870"
              className="px-6 py-3.5 bg-luxury-gold hover:bg-luxury-gold-light text-white font-semibold text-xs tracking-widest uppercase transition-all flex items-center justify-center space-x-2 text-center shadow-luxury hover:scale-[1.02]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>(214) 528-7870</span>
            </a>
            <a
              href="mailto:info@parkcitiesdentalgroup.com"
              className="px-6 py-3.5 border border-white/20 hover:border-white text-white hover:bg-white/5 font-semibold text-xs tracking-widest uppercase transition-all text-center"
            >
              info@parkcitiesdentalgroup.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
