/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Phone, MapPin, Clock, Send, MessageSquare, Car, Smile, Check } from "lucide-react";

export default function ContactSection() {
  const [formInput, setFormInput] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
    isNewPatient: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formInput.fullName || !formInput.phone || !formInput.email) {
      alert("Please enter your name, email, and phone coordinates.");
      return;
    }

    setIsSubmitting(true);
    // Simulate high-security database transmit
    setTimeout(() => {
      setIsSubmitting(false);
      setFormInput({
        fullName: "",
        phone: "",
        email: "",
        message: "",
        isNewPatient: true
      });
      setSubmitFeedback("Thank you! Your schedule preference has been securely routed to our office coordinator. We will call you within two working hours to verify availability.");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-luxury-bg scroll-mt-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-12">
          
          {/* Office Metadata & Directions Panel Left */}
          <div className="lg:col-span-5 space-y-8 select-none text-left">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-luxury-gold block">
                Connect and Location
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-luxury-navy font-medium tracking-tight">
                Visit Our Practice In Dallas
              </h2>
              <div className="w-16 h-[1.5px] bg-luxury-gold" />
            </div>

            {/* General contact listings with metadata */}
            <div className="space-y-6 pt-4">
              
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white text-luxury-gold border border-neutral-100 shadow-sm mt-0.5 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-luxury-navy uppercase tracking-wider">
                    Office Coordinates
                  </h4>
                  <p className="text-xs md:text-sm text-luxury-gray mt-1 leading-relaxed font-light">
                    Park Cities Dental Group <br />
                    6116 N Central Expy #1225 <br />
                    Dallas, TX 75206
                  </p>
                </div>
              </div>

              {/* Calling coordinates */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white text-luxury-gold border border-neutral-100 shadow-sm mt-0.5 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-luxury-navy uppercase tracking-wider">
                    Direct Line
                  </h4>
                  <a
                    href="tel:2145287870"
                    className="text-xs md:text-sm font-semibold text-luxury-teal hover:text-luxury-navy block mt-1 transition-colors"
                  >
                    (214) 528-7870
                  </a>
                  <p className="text-[10px] text-luxury-gray font-light mt-0.5">Click-to-Call priority line.</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white text-luxury-gold border border-neutral-100 shadow-sm mt-0.5 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-luxury-navy uppercase tracking-wider">
                    Professional Hours
                  </h4>
                  <div className="text-xs text-luxury-gray mt-1 font-light space-y-1">
                    <p className="flex justify-between w-48 font-semibold text-luxury-navy">
                      <span>Mon - Thurs:</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </p>
                    <p className="flex justify-between w-48 text-neutral-400">
                      <span>Fri - Sun:</span>
                      <span>By Appointment Only / Closed</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Parking details */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white text-luxury-gold border border-neutral-100 shadow-sm mt-0.5 shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-luxury-navy uppercase tracking-wider">
                    Reserved Tower Parking
                  </h4>
                  <p className="text-xs text-luxury-gray mt-1 leading-relaxed font-light">
                    Our high-rise clinic has **dedicated, labeled guest parking slots** situated in the subterranean garage level with immediate elevator connections matching ADA compliance. Subterranean parking is completely free of charge to active clients.
                  </p>
                </div>
              </div>

            </div>

            {/* Interactive map coordinates display placeholder */}
            <div className="h-44 bg-neutral-200 relative overflow-hidden border border-neutral-105 shadow-sm group select-none">
              {/* Fake aesthetic styled maps */}
              <div className="absolute inset-0 opacity-80 bg-cover bg-center mix-blend-multiply" style={{ backgroundImage: "url('https://picsum.photos/seed/map/500/250')" }} />
              <div className="absolute inset-0 bg-luxury-navy/20" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center space-y-1">
                <span className="py-1 px-3 bg-luxury-navy border border-luxury-gold text-white font-mono uppercase text-[9px] tracking-widest font-bold">
                  Highland Park Node
                </span>
                <p className="text-[10px] text-white/95 font-semibold">6116 N Central Expy, Dallas, TX</p>
              </div>
            </div>

          </div>

          {/* Secure Interactive Schedule Booking Form Right */}
          <div className="lg:col-span-7 bg-white p-8 border border-neutral-100 shadow-luxury hover:border-luxury-gold transition-colors duration-300">
            <h3 className="font-serif text-xl font-bold text-luxury-navy tracking-tight text-left mb-3 select-none">
              Request Your Consultation Slot
            </h3>
            <p className="text-xs text-luxury-gray leading-relaxed text-left font-light select-none mb-6">
              Please declare your ideal scheduling coordinates below. Our billing and treatment concierge checks insurance benefits and pre-vets clinical parameters ahead of your arrival.
            </p>

            {submitFeedback ? (
              <div className="p-6 bg-luxury-teal/10 border-l-4 border-luxury-teal text-left space-y-3 animate-fade-in select-none">
                <div className="flex items-center space-x-2 text-luxury-teal">
                  <Check className="w-5 h-5" />
                  <span className="font-serif text-sm font-bold">Secure Transmit Accomplished</span>
                </div>
                <p className="text-xs text-luxury-gray leading-relaxed">{submitFeedback}</p>
                <button
                  onClick={() => setSubmitFeedback(null)}
                  className="text-xs uppercase tracking-wider font-bold text-luxury-gold hover:text-luxury-navy pt-2"
                >
                  Message another preference
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                
                {/* Full name */}
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="block text-[10px] uppercase tracking-widest text-luxury-navy font-bold select-none">
                    Patient Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formInput.fullName}
                    onChange={(e) => setFormInput({ ...formInput, fullName: e.target.value })}
                    placeholder="Enter your name coordinates..."
                    className="w-full px-4 py-3 border border-neutral-200 bg-luxury-bg text-xs focus:ring-1 focus:ring-luxury-gold focus:border-luxury-gold outline-none text-luxury-navy"
                    required
                  />
                </div>

                {/* Split Phone and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-[10px] uppercase tracking-widest text-luxury-navy font-bold select-none">
                      Primary Telephone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formInput.phone}
                      onChange={(e) => setFormInput({ ...formInput, phone: e.target.value })}
                      placeholder="(214) 000-0000"
                      className="w-full px-4 py-3 border border-neutral-200 bg-luxury-bg text-xs focus:ring-1 focus:ring-luxury-gold focus:border-luxury-gold outline-none text-luxury-navy"
                      required
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-[10px] uppercase tracking-widest text-luxury-navy font-bold select-none">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formInput.email}
                      onChange={(e) => setFormInput({ ...formInput, email: e.target.value })}
                      placeholder="name@patientmail.com"
                      className="w-full px-4 py-3 border border-neutral-200 bg-luxury-bg text-xs focus:ring-1 focus:ring-luxury-gold focus:border-luxury-gold outline-none text-luxury-navy"
                      required
                    />
                  </div>
                </div>

                {/* New patient indicator */}
                <div className="flex items-center space-x-3 py-1 select-none">
                  <input
                    type="checkbox"
                    id="isNewPatient"
                    checked={formInput.isNewPatient}
                    onChange={(e) => setFormInput({ ...formInput, isNewPatient: e.target.checked })}
                    className="w-4 h-4 text-luxury-gold border-neutral-300 focus:ring-luxury-gold"
                  />
                  <label htmlFor="isNewPatient" className="text-xs text-luxury-navy font-semibold">
                    I am a new patient inquiring about initial intake
                  </label>
                </div>

                {/* Message detail */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-[10px] uppercase tracking-widest text-luxury-navy font-bold select-none">
                    Ideal Treatment Interests
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formInput.message}
                    onChange={(e) => setFormInput({ ...formInput, message: e.target.value })}
                    placeholder="Describe your cosmetic/restorative smile goals or any temporal preferences..."
                    className="w-full px-4 py-3 border border-neutral-200 bg-luxury-bg text-xs focus:ring-1 focus:ring-luxury-gold focus:border-luxury-gold outline-none text-luxury-navy resize-none"
                  />
                </div>

                {/* Actions */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-luxury-gold hover:bg-luxury-gold-light text-luxury-navy text-xs uppercase tracking-widest font-bold transition-colors shadow-luxury flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Transmitting Coordinates..." : "Submit Appointment Preference"}</span>
                </button>

              </form>
            )}

            {/* Regulatory Disclaimer HIPAA compliance indicator */}
            <div className="mt-6 flex items-start space-x-2 text-[10px] text-luxury-gray select-none border-t pt-4 text-left">
              <Smile className="w-3.5 h-3.5 text-luxury-gold-light shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Your medical details are secure under standard HIPAA privacy guidelines. The communications above are routed through high density encrypted pipelines directly to clinical staff.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
