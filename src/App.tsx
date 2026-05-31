/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import DoctorShowcase from "./components/DoctorShowcase";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import CosmeticDentistry from "./components/CosmeticDentistry";
import CosmeticDentistryGallery from "./components/CosmeticDentistryGallery";
import DentalImplants from "./components/DentalImplants";
import PatientExperience from "./components/PatientExperience";
import SmileGallery from "./components/SmileGallery";
import Testimonials from "./components/Testimonials";
import OfficeExperience from "./components/OfficeExperience";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import PatientForms from "./components/PatientForms";
import PaymentInsurance from "./components/PaymentInsurance";

import { Calendar, Phone, X, Check, Shield, Send, Sparkles } from "lucide-react";

export default function App() {
  const [activePage, setActivePage] = useState<string>("Home");
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [modalInput, setModalInput] = useState({
    fullName: "",
    phone: "",
    email: "",
    treatmentType: "Veneers & Cosmetic Design",
    timeOfDay: "morning",
    isNew: true
  });
  const [modalSubmitting, setModalSubmitting] = useState(false);
  const [modalSuccessMessage, setModalSuccessMessage] = useState<string | null>(null);

  // Synchronize hash in address bar with page routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#/our-doctors") {
        setActivePage("Our Doctors");
      } else if (hash === "#/patient-forms") {
        setActivePage("Patient Forms");
      } else if (hash === "#/our-services") {
        setActivePage("Our Services");
      } else if (hash === "#/payment-insurance") {
        setActivePage("Payment & Insurance");
      } else if (hash === "#/before-after") {
        setActivePage("Before and After");
      } else if (hash === "#/contact-parking") {
        setActivePage("Contact & Parking");
      } else {
        setActivePage("Home");
      }
      window.scrollTo(0, 0); // Jump back to top on page switches to mirror standard page load
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handlePageChange = (pageName: string) => {
    setActivePage(pageName);
    if (pageName === "Home") window.location.hash = "#/";
    else if (pageName === "Our Doctors") window.location.hash = "#/our-doctors";
    else if (pageName === "Patient Forms") window.location.hash = "#/patient-forms";
    else if (pageName === "Our Services") window.location.hash = "#/our-services";
    else if (pageName === "Payment & Insurance") window.location.hash = "#/payment-insurance";
    else if (pageName === "Before and After") window.location.hash = "#/before-after";
    else if (pageName === "Contact & Parking") window.location.hash = "#/contact-parking";
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalInput.fullName || !modalInput.phone || !modalInput.email) {
      alert("Please enter your name, phone, and email to coordinate benefits.");
      return;
    }

    setModalSubmitting(true);
    // Simulate secure transmit delay over mock HIPAA pipelines
    setTimeout(() => {
      setModalSubmitting(false);
      setModalSuccessMessage("Thank you! Your scheduling coordinates have been transmitted securely over HIPAA pipelines. Dr. Shaver's reception concierge will contact you within two working hours to finalize your visit.");
      setModalInput({
        fullName: "",
        phone: "",
        email: "",
        treatmentType: "Veneers & Cosmetic Design",
        timeOfDay: "morning",
        isNew: true
      });
    }, 1500);
  };

  const openScheduleModal = () => {
    setModalSuccessMessage(null);
    setIsScheduleModalOpen(true);
  };

  // Helper type-safe setter wrapper satisfying React inputs easily
  function setFormInput(fields: any) {
    setModalInput((prev) => ({ ...prev, ...fields }));
  }

  return (
    <div className="bg-luxury-bg font-sans selection:bg-luxury-gold selection:text-luxury-navy min-h-screen flex flex-col justify-between">
      
      {/* 1. Sticky Header Navigation bar */}
      <Navigation
        activePage={activePage}
        onPageChange={handlePageChange}
        onScheduleClick={openScheduleModal}
      />

      {/* 2. Main Multi-Page content rendering */}
      <main className="flex-grow pt-16 md:pt-20">
        
        {activePage === "Home" && (
          <div className="animate-fade-in">
            {/* Cinematic Hero header */}
            <Hero onScheduleClick={openScheduleModal} />

            {/* Elegant Spacer spacing flow */}
            <div className="h-16 bg-luxury-bg" />

            {/* 6 core clinical trust pillars */}
            <WhyChooseUs />

            {/* Interactive Cosmetic Dentistry gallery slider */}
            <CosmeticDentistryGallery onScheduleClick={openScheduleModal} />

            {/* Spa/concierge clinical experience timelines */}
            <PatientExperience />

            {/* Verified patient reviews slider carousel */}
            <Testimonials />
          </div>
        )}

        {activePage === "Our Doctors" && (
          <div className="animate-fade-in">
            {/* Doctor Showcase clinical biographical portfolio */}
            <DoctorShowcase />

            {/* Clinic physical design look and feel with comfort amenities list */}
            <OfficeExperience />
          </div>
        )}

        {activePage === "Patient Forms" && (
          <div className="animate-fade-in">
            {/* Secure pdf intake forms and registration roadmaps */}
            <PatientForms />
          </div>
        )}

        {activePage === "Our Services" && (
          <div className="animate-fade-in">
            {/* Direct interactively filterable Treatments menu */}
            <Services onScheduleClick={openScheduleModal} />

            {/* Complete technical anatomical implant focus details */}
            <DentalImplants />
          </div>
        )}

        {activePage === "Payment & Insurance" && (
          <div className="animate-fade-in">
            {/* Custom billing transparency block */}
            <PaymentInsurance />
          </div>
        )}

        {activePage === "Before and After" && (
          <div className="animate-fade-in">
            {/* High fidelity comparison drag slider widget */}
            <CosmeticDentistry onScheduleClick={openScheduleModal} />

            {/* Interactive Cosmetic Dentistry gallery slider */}
            <CosmeticDentistryGallery onScheduleClick={openScheduleModal} />

            {/* Full Smile comparison case transformations gallery with lightbox support */}
            <SmileGallery onScheduleClick={openScheduleModal} />
          </div>
        )}

        {activePage === "Contact & Parking" && (
          <div className="animate-fade-in">
            {/* Physical addresses, opening hours, underground coordinates and map routing */}
            <ContactSection />
          </div>
        )}

      </main>

      {/* 3. Global Dark luxury Footer branding layout */}
      <Footer />

      {/* 4. Sticky floating floating CTA for mobile convenience */}
      <div className="fixed bottom-6 right-6 left-6 md:left-auto md:w-80 z-40 flex items-center bg-luxury-navy/95 border border-luxury-gold/20 shadow-2xl backdrop-blur-md p-3 select-none">
        
        {/* Call Option */}
        <a
          href="tel:2145287870"
          className="flex flex-col items-center justify-center px-4 py-2 text-white hover:text-luxury-gold border-r border-white/10 shrink-0"
        >
          <Phone className="w-5 h-5 text-luxury-gold" />
          <span className="text-[9px] uppercase tracking-widest font-bold mt-1">Call Now</span>
        </a>

        {/* Book Appointment Action */}
        <button
          onClick={openScheduleModal}
          className="flex-grow flex items-center justify-center space-x-2 py-2.5 px-4 bg-luxury-gradient-gold text-white text-[11px] font-bold uppercase tracking-widest hover:bg-luxury-gold-light transition-all cursor-pointer border-none"
        >
          <Calendar className="w-4 h-4" />
          <span>Request Booking</span>
        </button>
      </div>

      {/* 5. State managed Scheduling Consultation Modal */}
      {isScheduleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-luxury-navy/80 backdrop-blur-md animate-fade-in">
          <div
            className="bg-white max-w-lg w-full rounded-none shadow-2xl relative select-none animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Head */}
            <div className="p-6 bg-luxury-navy text-white flex items-start justify-between border-b border-luxury-gold/20 sticky top-0 z-10 text-left">
              <div>
                <span className="text-[9px] font-mono text-luxury-gold uppercase tracking-widest flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Privileged Patient Intake
                </span>
                <h3 className="font-serif text-lg md:text-xl text-white font-medium mt-0.5">
                  Coordinate Your Visit Preference
                </h3>
              </div>
              <button
                onClick={() => setIsScheduleModalOpen(false)}
                className="p-1 px-3 border border-white/15 text-white/70 hover:text-white hover:border-white text-xs uppercase transition-colors cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            {/* Modal Body form details */}
            <div className="p-6 md:p-8">
              {modalSuccessMessage ? (
                <div className="space-y-4 text-left p-4 bg-luxury-teal/10 border-l-4 border-luxury-teal animate-fade-in">
                  <div className="flex items-center space-x-2 text-luxury-teal">
                    <Check className="w-5 h-5" />
                    <span className="font-serif text-sm font-bold">Transmit Completed</span>
                  </div>
                  <p className="text-xs text-luxury-gray leading-relaxed font-light">
                    {modalSuccessMessage}
                  </p>
                  <button
                    onClick={() => setIsScheduleModalOpen(false)}
                    className="w-full py-3 bg-luxury-navy text-white text-xs uppercase tracking-widest font-semibold hover:bg-luxury-teal transition-colors cursor-pointer border-none"
                  >
                    Confirm & Dismiss View
                  </button>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} className="space-y-4 text-left">
                  
                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="modal-name" className="block text-[10px] uppercase tracking-widest text-luxury-navy font-bold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="modal-name"
                      value={modalInput.fullName}
                      onChange={(e) => setFormInput({ fullName: e.target.value })}
                      placeholder="Enter full name coordinates..."
                      className="w-full px-3.5 py-2.5 border border-neutral-200 bg-luxury-bg text-xs outline-none text-luxury-navy focus:border-luxury-gold"
                      required
                    />
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="modal-phone" className="block text-[10px] uppercase tracking-widest text-luxury-navy font-bold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="modal-phone"
                        value={modalInput.phone}
                        onChange={(e) => setFormInput({ phone: e.target.value })}
                        placeholder="(214) 000-0000"
                        className="w-full px-3.5 py-2.5 border border-neutral-200 bg-luxury-bg text-xs outline-none text-luxury-navy focus:border-luxury-gold"
                        required
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label htmlFor="modal-email" className="block text-[10px] uppercase tracking-widest text-luxury-navy font-bold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="modal-email"
                        value={modalInput.email}
                        onChange={(e) => setFormInput({ email: e.target.value })}
                        placeholder="name@patientmail.com"
                        className="w-full px-3.5 py-2.5 border border-neutral-200 bg-luxury-bg text-xs outline-none text-luxury-navy focus:border-luxury-gold"
                        required
                      />
                    </div>
                  </div>

                  {/* Selecting Treatment preferences dropdown */}
                  <div className="space-y-1">
                    <label htmlFor="modal-treatment" className="block text-[10px] uppercase tracking-widest text-luxury-navy font-bold">
                      Primary Clinical Inquiry
                    </label>
                    <select
                      id="modal-treatment"
                      value={modalInput.treatmentType}
                      onChange={(e) => setFormInput({ treatmentType: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-neutral-200 bg-luxury-bg text-xs outline-none text-luxury-navy focus:border-luxury-gold"
                    >
                      <option>Veneers & Cosmetic Design</option>
                      <option>Invisalign® Clear Aligners</option>
                      <option>Dental Implants Placement</option>
                      <option>Bespoke Teeth Whitening</option>
                      <option>Crowns, Bridges & Restorations</option>
                      <option>Boutique Preventive Prophylaxis</option>
                    </select>
                  </div>

                  {/* Day Preference details */}
                  <div className="space-y-1">
                    <span className="block text-[10px] uppercase tracking-widest text-luxury-navy font-bold">
                      Preferred Booking Window
                    </span>
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <label className="flex items-center space-x-2 py-2 px-3 border border-neutral-200 hover:border-luxury-gold cursor-pointer bg-luxury-bg text-xs">
                        <input
                          type="radio"
                          name="timeOfDay"
                          checked={modalInput.timeOfDay === "morning"}
                          onChange={() => setFormInput({ timeOfDay: "morning" })}
                          className="text-luxury-gold focus:ring-luxury-gold"
                        />
                        <span>Morning (8AM - 12PM)</span>
                      </label>
                      
                      <label className="flex items-center space-x-2 py-2 px-3 border border-neutral-200 hover:border-luxury-gold cursor-pointer bg-luxury-bg text-xs">
                        <input
                          type="radio"
                          name="timeOfDay"
                          checked={modalInput.timeOfDay === "afternoon"}
                          onChange={() => setFormInput({ timeOfDay: "afternoon" })}
                          className="text-luxury-gold focus:ring-luxury-gold"
                        />
                        <span>Afternoon (1PM - 5PM)</span>
                      </label>
                    </div>
                  </div>

                  {/* New patient checkbox */}
                  <div className="flex items-center space-x-2.5 pt-1.5">
                    <input
                      type="checkbox"
                      id="modal-is-new"
                      checked={modalInput.isNew}
                      onChange={(e) => setFormInput({ isNew: e.target.checked })}
                      className="w-4 h-4 text-luxury-gold border-neutral-300 focus:ring-luxury-gold"
                    />
                    <label htmlFor="modal-is-new" className="text-xs text-luxury-navy font-semibold">
                      Please pre-verify my insurance coverage
                    </label>
                  </div>

                  {/* Proceed submit action */}
                  <button
                    type="submit"
                    disabled={modalSubmitting}
                    className="w-full py-4 bg-luxury-gold hover:bg-luxury-gold-light text-white text-xs uppercase tracking-widest font-bold transition-all shadow-luxury flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 border-none"
                  >
                    <Send className="w-4 h-4" />
                    <span>{modalSubmitting ? "Transmitting..." : "Send booking request"}</span>
                  </button>

                  {/* HIPAA safe guidelines */}
                  <div className="flex items-start space-x-1.5 text-[9px] text-luxury-gray pt-3 border-t">
                    <Shield className="w-3.5 h-3.5 text-luxury-gold-light mt-0.5 shrink-0" />
                    <span>Your session details are encrypted securely matching global clinical HIPAA rules. Out-of-pocket benefits are calculated immediately upon verification.</span>
                  </div>

                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
