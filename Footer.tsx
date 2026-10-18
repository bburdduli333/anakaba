import { WHATSAPP_DISPLAY, buildWhatsAppLink, ANAKA_GOOGLE_BUSINESS_LOGO } from '../data/toursData';
import { MessageCircle, ShieldCheck, Compass, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenTracker: () => void;
  onOpenGuide: () => void;
  onOpenGallery: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTracker, onOpenGuide, onOpenGallery }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={ANAKA_GOOGLE_BUSINESS_LOGO}
                alt="Tours with Anaka Logo"
                className="w-10 h-10 rounded-full object-cover border border-amber-700/50 shadow-xs"
              />
              <div>
                <span className="text-xl font-bold font-serif-heading text-white block">
                  Tours with Anaka
                </span>
                <span className="text-[10px] text-amber-400 font-medium tracking-wider uppercase">
                  Private Driver (Female) · Georgia
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Private tours in Georgia, with a trusted local network. Personalized road journeys with female private driver Anaka or vetted local partner drivers and licensed guides.
            </p>

            <div className="text-xs text-stone-400 flex items-center gap-1.5 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Tours with Anaka — Private Driver in Georgia · Tbilisi, Georgia</span>
            </div>

            <div className="pt-2">
              <a
                href={buildWhatsAppLink("Hello Anaka!")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-100">
              Explore Georgia
            </div>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#wine-special" className="hover:text-amber-300 transition-colors text-amber-200">
                  Nino Paitchadze Bio Wine & Cottage ($875)
                </a>
              </li>
              <li>
                <a href="#wine-special" className="hover:text-white transition-colors">
                  Irma Shvelidze Garden Supra & Khinkali ($350)
                </a>
              </li>
              <li>
                <a href="#hiking" className="hover:text-white transition-colors">
                  4x4 Mountain Expeditions (Ford Ranger 2021)
                </a>
              </li>
              <li>
                <a href="#tours" className="hover:text-white transition-colors">
                  Kazbegi & Military Highway ($300)
                </a>
              </li>
              <li>
                <a href="#tours" className="hover:text-white transition-colors">
                  Mtskheta & Gori Historic Combo ($350)
                </a>
              </li>
              <li>
                <a href="#companion" className="hover:text-white transition-colors">
                  Event & City Companion ($100 / 6h)
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenGallery}
                  className="hover:text-amber-300 text-stone-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Anaka's Road Trip Photo Gallery (Beginner Canon)</span>
                </button>
              </li>
              <li>
                <a href="#rules" className="hover:text-white transition-colors">
                  House Rules & Respect Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Owner Tools & Hosting Info */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-100">
              Owner Portal & Code
            </div>
            <p className="text-[11px] text-stone-400">
              Built with zero customer signup and zero monthly database fees.
            </p>
            <div className="space-y-2 pt-1 text-xs">
              <button
                onClick={onOpenTracker}
                className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Private Business Tracker (PIN: 1701)</span>
              </button>

              <button
                onClick={onOpenGuide}
                className="flex items-center gap-2 text-stone-400 hover:text-stone-200 transition-colors"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Free Hosting & Editing Guide</span>
              </button>
            </div>
          </div>

        </div>

        {/* Safe Space & Inclusivity Declaration */}
        <div className="my-6 p-4 rounded-2xl bg-stone-800/90 border border-stone-700/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-300">
          <div className="flex items-center gap-2.5">
            <span className="text-lg" role="img" aria-label="Pride flag">🏳️‍🌈</span>
            <span>
              <strong className="text-white">LGBTQ+ & Internationally Friendly:</strong> We stand firmly against racism and homophobia. A welcoming, safe, and respectful space for every traveler exploring Georgia.
            </span>
          </div>
          <span className="text-[11px] text-emerald-400 font-mono font-medium shrink-0">
            WhatsApp: {WHATSAPP_DISPLAY}
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Tours with Anaka. All rights reserved. Direct bookings via WhatsApp: {WHATSAPP_DISPLAY}.
          </div>
          <div className="flex items-center gap-4">
            <a href="#transparency" className="hover:text-stone-400 transition-colors">
              Booking Transparency
            </a>
            <span aria-hidden="true">·</span>
            <a href="#about" className="hover:text-stone-400 transition-colors">
              Female Driver in Georgia
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
