/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Phone, MapPin, Clock, ShieldCheck, Mail, Star } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-navy text-white pt-20 pb-10 border-t border-luxury-gold/20 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute bottom-0 right-0 w-80 h-85 bg-luxury-teal/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 select-none text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Logo brand & overview column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center mb-4">
              <img
                src="https://parkcitiesdentalgroup.com/wp-content/uploads/2015/10/PCDG_Logo_FINAL.png"
                alt="Park Cities Dental Group Logo"
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Dallas' premier boutique clinical environment serving Highland Park, University Park, and surrounding areas. Bringing over 20 years of state-of-the-art conservative diagnostics and premium porcelain smile transformations.
            </p>
            <div className="flex items-center space-x-2 text-luxury-gold text-xs">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-white/70 font-mono text-[11px] font-semibold">5.0 GOOGLE VALUE RATINGS</span>
            </div>
          </div>

          {/* Quick-links columns (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-luxury-gold">
              Navigation
            </h4>
            <ul className="text-xs space-y-3 font-light text-white/70">
              <li><a href="#/" className="hover:text-luxury-gold transition-colors">Home</a></li>
              <li><a href="#/our-doctors" className="hover:text-luxury-gold transition-colors">Our Doctors</a></li>
              <li><a href="#/patient-forms" className="hover:text-luxury-gold transition-colors">Patient Forms</a></li>
              <li><a href="#/our-services" className="hover:text-luxury-gold transition-colors">Our Services</a></li>
              <li><a href="#/payment-insurance" className="hover:text-luxury-gold transition-colors">Payment & Insurance</a></li>
              <li><a href="#/before-after" className="hover:text-luxury-gold transition-colors">Before & After</a></li>
              <li><a href="#/contact-parking" className="hover:text-luxury-gold transition-colors">Contact & Parking</a></li>
            </ul>
          </div>

          {/* Core Services categories columns (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-luxury-gold">
              Clinical Specializations
            </h4>
            <ul className="text-xs space-y-3 font-light text-white/70">
              <li><a href="#/our-services" className="hover:text-luxury-gold transition-colors">Premium Porcelain Veneers</a></li>
              <li><a href="#/our-services" className="hover:text-luxury-gold transition-colors">Invisalign® Clear Aligners</a></li>
              <li><a href="#/our-services" className="hover:text-luxury-gold transition-colors">Advanced Dental Implants</a></li>
              <li><a href="#/our-services" className="hover:text-luxury-gold transition-colors">Bespoke In-office Whitening</a></li>
              <li><a href="#/our-services" className="hover:text-luxury-gold transition-colors">Conservative Dental Restorations</a></li>
              <li><a href="#/our-services" className="hover:text-luxury-gold transition-colors">Therapeutic Periodontal Care</a></li>
            </ul>
          </div>

          {/* Coordinates and Location summary details (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-luxury-gold">
              Boutique Coordinates
            </h4>
            
            <div className="text-xs space-y-3.5 text-white/70 font-light font-sans">
              
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                <span>
                  6116 N Central Expy #1225 <br />
                  Dallas, TX 75206
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-luxury-gold shrink-0" />
                <a href="tel:2145287870" className="font-semibold text-white hover:text-luxury-gold">
                  (214) 528-7870
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-luxury-gold shrink-0" />
                <a href="mailto:info@parkcitiesdentalgroup.com" className="font-semibold text-white hover:text-luxury-gold">
                  info@parkcitiesdentalgroup.com
                </a>
              </div>

              <div className="flex items-start space-x-2 text-white/50 pt-1">
                <Clock className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p>Mon - Thurs: 8 AM - 5 PM</p>
                  <p>Fri - Sun: Closed / Appt Only</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Footer legal declarations and ADA privacy declarations */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-white/40 font-light gap-4 select-none">
          <div className="space-y-1">
            <p>© {currentYear} Park Cities Dental Group. All rights reserved.</p>
            <p className="flex items-center text-[10px] text-white/30">
              <ShieldCheck className="w-3.5 h-3.5 text-luxury-gold/60 mr-1 shrink-0" />
              HIPAA Encrypted Compliant • Private Clinical Enclave
            </p>
          </div>
          
          <div className="flex items-center space-x-5 text-[10px] text-white/30">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">ADA Access Statement</a>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Patient Portal Log</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
