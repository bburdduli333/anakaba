import React, { useState } from 'react';
import { Currency } from '../types';
import { WHATSAPP_DISPLAY, buildWhatsAppLink, ANAKA_GOOGLE_BUSINESS_LOGO } from '../data/toursData';
import { MessageCircle, Menu, X, ShieldCheck, Compass } from 'lucide-react';

interface NavbarProps {
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onOpenTracker: () => void;
  onOpenGuide: () => void;
  onOpenGallery: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currency,
  onCurrencyChange,
  onOpenTracker,
  onOpenGuide,
  onOpenGallery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const defaultMsg = "Hello Anaka! I’m interested in a private tour in Georgia. Could you help me plan a trip?";

  return (
    <>
      {/* Top Banner: Inclusivity & Direct WhatsApp Contact */}
      <div className="bg-stone-950 text-stone-200 text-[11px] py-1.5 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm" role="img" aria-label="Pride rainbow">🏳️‍🌈</span>
            <span className="font-medium text-stone-200">
              LGBTQ+ & Internationally Friendly · Safe travel for all: No to racism & homophobia
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-stone-400 text-[11px]">
            <span>Tbilisi, Georgia</span>
            <span>·</span>
            <span>Direct WhatsApp: <strong className="text-emerald-400 font-mono">{WHATSAPP_DISPLAY}</strong></span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Wordmark & Google Profile Logo */}
        <a href="#hero" className="flex items-center gap-3 group shrink-0">
          <img
            src={ANAKA_GOOGLE_BUSINESS_LOGO}
            alt="Tours with Anaka — Private Driver in Georgia"
            className="w-11 h-11 rounded-full object-cover border border-amber-900/30 shadow-xs group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-stone-900 font-serif-heading group-hover:text-amber-900 transition-colors whitespace-nowrap">
              Tours with Anaka
            </span>
            <span className="text-[11px] font-medium text-stone-500 tracking-wider uppercase -mt-0.5">
              Private Driver (Female) · Georgia
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 text-sm font-medium text-stone-600">
          <a href="#wine-special" className="hover:text-amber-900 transition-colors whitespace-nowrap text-amber-900 font-semibold">
            Wine Specials
          </a>
          <a href="#hiking" className="hover:text-amber-900 transition-colors whitespace-nowrap text-stone-800 font-semibold">
            4x4 Hiking (Nino)
          </a>
          <a href="#tours" className="hover:text-amber-900 transition-colors whitespace-nowrap">
            Day Tours
          </a>
          <a href="#companion" className="hover:text-amber-900 transition-colors whitespace-nowrap">
            Companion ($100)
          </a>
          <a href="#rules" className="hover:text-amber-900 transition-colors whitespace-nowrap">
            Rules & Pricing
          </a>
          <a href="#about" className="hover:text-amber-900 transition-colors whitespace-nowrap">
            About Anaka
          </a>
          <button
            onClick={onOpenGallery}
            className="hover:text-amber-900 transition-colors whitespace-nowrap text-stone-600 flex items-center gap-1 cursor-pointer"
          >
            <span>Photo Gallery</span>
          </button>
          <a href="#planner" className="hover:text-amber-900 transition-colors whitespace-nowrap">
            Trip Builder
          </a>
        </nav>

        {/* Zone 3: Currency selector & WhatsApp Action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Currency Toggle (USD, GEL, EUR) */}
          <div className="flex items-center bg-stone-100 p-0.5 rounded-lg border border-stone-200 text-xs font-semibold">
            <button
              onClick={() => onCurrencyChange('USD')}
              className={`px-2 py-1 rounded-md transition-all ${
                currency === 'USD'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
              title="View prices in US Dollars ($)"
            >
              $ USD
            </button>
            <button
              onClick={() => onCurrencyChange('GEL')}
              className={`px-2 py-1 rounded-md transition-all ${
                currency === 'GEL'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
              title="View prices in Georgian Lari (₾)"
            >
              ₾ GEL
            </button>
            <button
              onClick={() => onCurrencyChange('EUR')}
              className={`px-2 py-1 rounded-md transition-all ${
                currency === 'EUR'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
              title="View prices in Euro (€)"
            >
              € EUR
            </button>
          </div>

          {/* Primary Action Button */}
          <a
            href={buildWhatsAppLink(defaultMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-lg transition-colors whitespace-nowrap shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-stone-900 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-base font-medium text-stone-800">
            <a
              href="#wine-special"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-50 text-amber-900 font-semibold"
            >
              Wine Specials (Kakheti)
            </a>
            <a
              href="#hiking"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-50 text-stone-900 font-semibold"
            >
              4x4 Hiking with Nino (Ford Ranger)
            </a>
            <a
              href="#tours"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-50 transition-colors"
            >
              Day Tours & Routes
            </a>
            <a
              href="#companion"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-50 transition-colors"
            >
              Event Companion ($100 / 6h)
            </a>
            <a
              href="#rules"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-50 transition-colors"
            >
              Anaka’s House Rules
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-50 transition-colors"
            >
              About Anaka & Female Drivers
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGallery();
              }}
              className="px-3 py-2 rounded-md hover:bg-stone-50 transition-colors text-left text-amber-900 font-semibold flex items-center justify-between"
            >
              <span>Anaka's Road Trip Photo Gallery</span>
              <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full font-sans">Canon Photos</span>
            </button>
            <a
              href="#planner"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-50 transition-colors"
            >
              Custom Trip Builder
            </a>
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <a
              href={buildWhatsAppLink(defaultMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
            </a>

            <div className="flex items-center justify-between pt-2 text-xs text-stone-500">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGuide();
                }}
                className="flex items-center gap-1.5 hover:text-stone-800 p-1"
              >
                <Compass className="w-3.5 h-3.5 text-stone-400" />
                <span>How to Edit & Deploy Free</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTracker();
                }}
                className="flex items-center gap-1.5 hover:text-stone-800 p-1 font-medium text-amber-900"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Owner Tracker</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  );
};
