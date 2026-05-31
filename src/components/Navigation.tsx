/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar, Sparkles } from "lucide-react";

interface NavigationProps {
  activePage: string;
  onPageChange: (pageName: string) => void;
  onScheduleClick: () => void;
}

export default function Navigation({ activePage, onPageChange, onScheduleClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", hash: "#/" },
    { name: "Our Doctors", hash: "#/our-doctors" },
    { name: "Patient Forms", hash: "#/patient-forms" },
    { name: "Our Services", hash: "#/our-services" },
    { name: "Payment & Insurance", hash: "#/payment-insurance" },
    { name: "Before and After", hash: "#/before-after" },
    { name: "Contact & Parking", hash: "#/contact-parking" }
  ];

  const handleLinkClick = (pageName: string, hash: string) => {
    setIsMobileMenuOpen(false);
    onPageChange(pageName);
    window.location.hash = hash;
  };

  return (
    <>
      <nav
        id="luxury-navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-luxury-navy border-b border-luxury-gold/20 shadow-luxury ${
          isScrolled ? "py-2 px-4 md:px-8" : "py-4 px-4 md:px-8"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
          
          {/* Logo Brand Area - Using official logo only, removing duplicate placeholders */}
          <a
            href="#/"
            className="flex items-center select-none group focus:outline-none shrink-0"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("Home", "#/");
            }}
          >
            <div className="h-10 md:h-12 flex items-center">
              <img
                src="https://parkcitiesdentalgroup.com/wp-content/uploads/2015/10/PCDG_Logo_FINAL.png"
                alt="Park Cities Dental Group"
                className="h-8 md:h-10 lg:h-11 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </a>

          {/* Desktop Central Menu - Tightened margins and adjusted responsive sizes to completely avoid overlapping */}
          <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5">
            {menuItems.map((item) => {
              const isSelected = activePage === item.name;
              return (
                <a
                  key={item.name}
                  href={item.hash}
                  className={`py-2 px-1 xl:px-2.5 text-[9.5px] xl:text-[10.5px] uppercase tracking-wider font-semibold transition-all duration-200 relative group select-none whitespace-nowrap ${
                    isSelected ? "text-luxury-gold" : "text-white/80 hover:text-white"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.name, item.hash);
                  }}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] transition-all duration-305 ${
                      isSelected ? "w-2/3 bg-luxury-gold" : "w-0 group-hover:w-1/2 bg-luxury-gold/50"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Action Call-to-actions - Made compact for seamless side-by-side spacing */}
          <div className="hidden lg:flex items-center space-x-2.5 xl:space-x-4 shrink-0">
            <a
              href="tel:2145287870"
              className="flex items-center space-x-1.5 text-[9.5px] xl:text-xs uppercase tracking-widest font-semibold text-teal-200 hover:text-white transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-luxury-gold" />
              <span>(214) 528-7870</span>
            </a>
            <button
              id="nav-schedule-btn"
              onClick={onScheduleClick}
              className="px-2.5 py-1.5 xl:px-4 xl:py-2.5 rounded-none text-[9px] xl:text-xs uppercase tracking-widest font-bold bg-luxury-gold hover:bg-luxury-gold-light text-white transition-all duration-200 shadow-luxury hover:scale-[1.02] active:scale-95 flex items-center space-x-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>Schedule Visit</span>
            </button>
          </div>

          {/* Mobile Hamburguer Toggler */}
          <div className="flex lg:hidden items-center space-x-3 shrink-0">
            <a
              href="tel:2145287870"
              className="p-2 rounded-full border text-white border-white/10 hover:border-luxury-gold text-luxury-gold transition-colors"
              title="Call Office"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-luxury-gold transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Flyout Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-luxury-navy/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-80 h-full bg-luxury-navy text-white p-8 flex flex-col justify-between shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-8 border-b border-white/10">
              <div className="flex items-center">
                <img
                  src="https://parkcitiesdentalgroup.com/wp-content/uploads/2015/10/PCDG_Logo_FINAL.png"
                  alt="Park Cities Dental Group"
                  className="h-8 w-auto object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white hover:text-luxury-gold transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col space-y-4 mt-8">
              {menuItems.map((item) => {
                const isSelected = activePage === item.name;
                return (
                  <a
                    key={item.name}
                    href={item.hash}
                    className={`text-xs uppercase tracking-widest font-semibold py-2 border-b border-white/5 transition-all ${
                      isSelected ? "text-luxury-gold pl-2" : "text-white/80 hover:text-luxury-gold"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.name, item.hash);
                    }}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="tel:2145287870"
              className="flex items-center justify-center space-x-2 py-3 border border-white/10 hover:border-luxury-gold text-white tracking-widest text-[11px] uppercase transition-colors"
            >
              <Phone className="w-4 h-4 text-luxury-gold" />
              <span>(214) 528-7870</span>
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onScheduleClick();
              }}
              className="w-full py-3 bg-luxury-gold hover:bg-luxury-gold-light text-white tracking-widest text-[11px] uppercase font-bold transition-all shadow-luxury flex items-center justify-center space-x-2 cursor-pointer border-none"
            >
              <span>Book Appointment</span>
            </button>
            <div className="text-center text-[10px] text-white/40 font-light mt-2">
              6116 N Central Expy #1225 • Dallas, TX
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
