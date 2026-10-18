import React from 'react';
import { Currency, TourRiskInfo } from '../types';
import { SIGNATURE_WINE_TOURS, formatPrice, buildTourInquiryLink, buildWhatsAppLink } from '../data/toursData';
import { Wine, MessageCircle, ExternalLink, Sparkles, Check, Home, Award, Building2, HeartHandshake } from 'lucide-react';

interface SignatureWineSectionProps {
  currency: Currency;
  onOpenNinoBio: () => void;
  onOpenRisks: (riskInfo: TourRiskInfo) => void;
}

export const SignatureWineSection: React.FC<SignatureWineSectionProps> = ({ currency, onOpenNinoBio, onOpenRisks }) => {
  return (
    <section id="wine-special" className="py-16 md:py-24 bg-[#FBF8F3] border-t border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            <Wine className="w-4 h-4 text-amber-800" />
            <span>Anaka’s Special Course · The Heart of Georgian Wine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-stone-900 tracking-tight">
            Authentic Kakheti Wine & Artisan Village Encounters
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Kakheti is not just a destination for me—it is my family heritage and my deepest passion. Forget rushed commercial tour buses. We connect you with real local artisans, organic vineyards, and genuine family hospitality.
          </p>
        </div>

        {/* Traveler Wine Choice Highlight: Homemade Family Marani vs Fancy Factory Estate */}
        <div className="bg-white border-2 border-amber-300/80 rounded-3xl p-6 sm:p-8 mb-10 shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100/80 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-amber-800" />
                <span>Your Travel Style · You Choose the Wine Experience</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-stone-900">
                Homemade Family Marani or Fancy Factory Estate? You Decide!
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Georgia offers two completely different, magical sides to its winemaking culture. I personally know the hidden masters of both—and you can freely choose which one fits your dream trip:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:w-auto text-xs">
              <div className="bg-amber-50/80 border border-amber-200 p-4 rounded-2xl space-y-1.5">
                <div className="font-bold text-amber-950 flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-amber-800" />
                  <span>1. Authentic Homemade Maranis</span>
                </div>
                <p className="text-stone-600 text-[11px] leading-relaxed">
                  Secret village yards, raw clay Qvevri buried in dirt, unfiltered amber wine, sitting with local winemakers and tasting home cheeses.
                </p>
              </div>

              <div className="bg-stone-50 border border-stone-200 p-4 rounded-2xl space-y-1.5">
                <div className="font-bold text-stone-900 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-stone-700" />
                  <span>2. Fancy Factory & Palace Estates</span>
                </div>
                <p className="text-stone-600 text-[11px] leading-relaxed">
                  Aristocratic châteaux like Château Mukhrani, Prince Tsinandali Estate, or Khareba wine tunnels with sommelier service and crystal glassware.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-amber-100 flex items-center justify-between text-[11px] text-stone-500">
            <span>✨ You can even blend both: start with a historic palace estate and finish with a warm rustic village dinner!</span>
            <span className="font-medium text-amber-900">Customized directly on WhatsApp</span>
          </div>
        </div>

        {/* Featured 2 Marquee Cards: Nino Paichadze & Irma Shvelidze */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          
          {/* Card 1: Nino Paichadze Bio Wine & Wooden Cottage */}
          {/* On Nino's trip, avoid text about risks (per user request) */}
          <div className="bg-white rounded-3xl border border-amber-200/80 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                <img
                  src={SIGNATURE_WINE_TOURS[0].image}
                  alt={SIGNATURE_WINE_TOURS[0].imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-amber-900 text-white px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Signature Overnight Escape</span>
                </div>
              </div>

              {/* Cottage & Winemaking Real Photo Preview Strip */}
              <div className="px-5 py-2.5 bg-stone-900 text-white flex items-center justify-between gap-2 border-b border-stone-800">
                <div className="flex items-center gap-2 overflow-x-auto">
                  <span className="text-[10px] text-amber-300 uppercase font-bold tracking-wider shrink-0">
                    Cottage & Cellar:
                  </span>
                  {SIGNATURE_WINE_TOURS[0].cottageGallery?.slice(1, 4).map((imgUrl, i) => (
                    <button
                      key={i}
                      onClick={onOpenNinoBio}
                      className="w-8 h-8 rounded-md overflow-hidden border border-white/20 shrink-0 hover:border-amber-400 transition-colors"
                    >
                      <img src={imgUrl} alt="Nino cottage preview" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
                <button
                  onClick={onOpenNinoBio}
                  className="text-[11px] font-semibold text-amber-300 hover:text-amber-200 underline shrink-0 cursor-pointer flex items-center gap-1"
                >
                  <span>Photos & Bio</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={onOpenNinoBio}
                      className="text-xs font-bold text-amber-900 hover:text-amber-800 uppercase tracking-wider underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>{SIGNATURE_WINE_TOURS[0].partnerHost} (View Bio & Cottage)</span>
                      <Sparkles className="w-3 h-3 text-amber-600" />
                    </button>
                    <span className="text-[11px] font-semibold text-stone-500">
                      Fermio Artisan Bio Wine
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-serif-heading text-stone-900 mt-1">
                    {SIGNATURE_WINE_TOURS[0].title}
                  </h3>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    {SIGNATURE_WINE_TOURS[0].description}
                  </p>
                </div>

                {/* Included Package Strip */}
                <div className="bg-amber-50/70 border border-amber-200/60 p-4 rounded-2xl space-y-2">
                  <div className="text-xs font-bold text-amber-950 uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-800" />
                    <span>Included in This Experience ($875 USD Package):</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {SIGNATURE_WINE_TOURS[0].includedDetails?.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Destiny Matrix & Tarot Reading in the Woods Sale Offer */}
                <div className="bg-emerald-50/70 border border-emerald-200 p-3.5 rounded-xl flex items-center justify-between gap-3 text-xs">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-emerald-950">Sale: Destiny Matrix / Tarot Reading in the Woods</span>
                      <span className="bg-emerald-200 text-emerald-900 text-[10px] font-bold px-1.5 py-0.5 rounded">SAVE $80</span>
                    </div>
                    <span className="text-[11px] text-stone-600 block mt-0.5">
                      Personal intuitive guidance & destiny matrix reading with Nino in the tranquil woods
                    </span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[11px] text-stone-400 line-through block">$230</span>
                    <span className="font-bold text-emerald-800 bg-white px-2 py-1 rounded-md border border-emerald-200 block text-xs">
                      $150 USD
                    </span>
                  </div>
                </div>

                {/* Direct Farmer Link & Bio Button */}
                {SIGNATURE_WINE_TOURS[0].externalLink && (
                  <div className="pt-1 flex items-center justify-between text-xs">
                    <a
                      href={SIGNATURE_WINE_TOURS[0].externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-amber-900 hover:text-amber-800 hover:underline text-[11px]"
                    >
                      <span>View Nino Paichadze profile on Fermio.ge</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <button
                      onClick={onOpenNinoBio}
                      className="text-[11px] font-semibold text-stone-600 hover:text-stone-900 underline cursor-pointer"
                    >
                      Read Nino's Bio →
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold">
                  Complete Package Rate
                </div>
                <div className="text-2xl font-bold text-stone-900 tabular-nums">
                  {formatPrice(SIGNATURE_WINE_TOURS[0].startingPriceUSD, currency)}
                </div>
                <div className="text-[11px] text-stone-500">
                  Includes 1 night stay, bio wine bottle & private driver
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenNinoBio}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-semibold text-amber-950 bg-amber-100 hover:bg-amber-200 rounded-xl transition-colors cursor-pointer"
                >
                  <span>Meet Nino</span>
                </button>
                <a
                  href={buildTourInquiryLink(
                    SIGNATURE_WINE_TOURS[0].title,
                    formatPrice(SIGNATURE_WINE_TOURS[0].startingPriceUSD, currency)
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors shadow-xs whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Reserve on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Irma Shvelidze Family Garden & Khinkali Supra */}
          <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              {/* Irma Authentic Visual & Sticker Badge Card (No AI Photos) */}
              <div className="relative p-6 bg-gradient-to-br from-emerald-950 via-stone-900 to-amber-950 text-white overflow-hidden border-b border-stone-200">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-xs text-white px-3 py-1 rounded-full text-xs font-semibold">
                    <Home className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Culinary Masterclass & Family Supra</span>
                  </div>
                  <span className="bg-emerald-400 text-stone-950 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Irma Shvelidze
                  </span>
                </div>

                <div className="text-[11px] uppercase tracking-wider text-amber-300 font-bold mb-1">
                  Authentic Kakhetian Host Experience
                </div>
                <h4 className="text-xl font-bold font-serif-heading text-white">
                  Handmade Stone Art Garden, Khinkali Workshop & Homemade Supra
                </h4>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="bg-white/15 px-2.5 py-1 rounded-lg text-xs font-medium">🥟 Khinkali Masterclass</span>
                  <span className="bg-white/15 px-2.5 py-1 rounded-lg text-xs font-medium">🏰 Handmade Stone Art</span>
                  <span className="bg-white/15 px-2.5 py-1 rounded-lg text-xs font-medium">🍷 Family Wine Supra</span>
                  <span className="bg-white/15 px-2.5 py-1 rounded-lg text-xs font-medium">🌿 Kakheti Village</span>
                </div>
              </div>

              {/* Irma Real Photo Preview Strip (Handmade Stone Art & Family Supra) */}
              <div className="px-5 py-2.5 bg-stone-900 text-white flex items-center justify-between gap-2 border-b border-stone-800">
                <div className="flex items-center gap-2 overflow-x-auto">
                  <span className="text-[10px] text-amber-300 uppercase font-bold tracking-wider shrink-0">
                    Real Photos:
                  </span>
                  {SIGNATURE_WINE_TOURS[1].cottageGallery?.map((imgUrl, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-md overflow-hidden border border-white/20 shrink-0"
                    >
                      <img src={imgUrl} alt="Irma experience real photo" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold shrink-0">
                  Real Family Photos
                </span>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div>
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                    {SIGNATURE_WINE_TOURS[1].partnerHost} · Authentic Family Experience
                  </div>

                  <h3 className="text-2xl font-bold font-serif-heading text-stone-900 mt-1">
                    {SIGNATURE_WINE_TOURS[1].title}
                  </h3>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    {SIGNATURE_WINE_TOURS[1].description}
                  </p>
                </div>

                <div className="bg-stone-50 border border-stone-200/80 p-4 rounded-2xl space-y-2">
                  <div className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                    Highlights of Your Day with Irma:
                  </div>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {SIGNATURE_WINE_TOURS[1].includedDetails?.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Route Risks Button for Irma's Kakheti Trip */}
                {SIGNATURE_WINE_TOURS[1].risks && (
                  <button
                    onClick={() => onOpenRisks(SIGNATURE_WINE_TOURS[1].risks!)}
                    className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-950 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-amber-700">⚠️</span>
                      <span>View Route Risks & Weather Warnings</span>
                    </span>
                    <span className="text-amber-800 text-[11px]">Check Details →</span>
                  </button>
                )}

                <div className="text-xs text-stone-500">
                  Duration varies between 4 to 10 hours according to your mood and celebration pace.
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold">
                  Starting from
                </div>
                <div className="text-2xl font-bold text-stone-900 tabular-nums">
                  {formatPrice(SIGNATURE_WINE_TOURS[1].startingPriceUSD, currency)}
                </div>
                <div className="text-[11px] text-stone-500">
                  Per private car & masterclass experience
                </div>
              </div>

              <a
                href={buildTourInquiryLink(
                  SIGNATURE_WINE_TOURS[1].title,
                  formatPrice(SIGNATURE_WINE_TOURS[1].startingPriceUSD, currency)
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors shadow-xs whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
