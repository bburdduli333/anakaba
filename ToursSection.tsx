import React, { useState } from 'react';
import { Tour, Currency, TourRiskInfo } from '../types';
import { STANDARD_TOURS, formatPrice, buildTourInquiryLink, MULTI_TOUR_DISCOUNTS } from '../data/toursData';
import { Clock, MessageCircle, ChevronDown, ChevronUp, Check, Info, Fuel, Sparkles, ShieldAlert, AlertTriangle, Gift, Users } from 'lucide-react';

interface ToursSectionProps {
  currency: Currency;
  onSelectForPlanner: (tourId: string) => void;
  onOpenRisks: (riskInfo: TourRiskInfo) => void;
  onOpenBringFriend?: () => void;
}

export const ToursSection: React.FC<ToursSectionProps> = ({
  currency,
  onSelectForPlanner,
  onOpenRisks,
  onOpenBringFriend
}) => {
  const [expandedTourId, setExpandedTourId] = useState<string | null>(null);

  const toggleExpand = (tourId: string) => {
    setExpandedTourId(expandedTourId === tourId ? null : tourId);
  };

  return (
    <section id="tours" className="py-16 md:py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            Private Scenic Routes
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-stone-900 tracking-tight">
            Popular Day Trips & Historic Itineraries
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Every itinerary is private and customized. Group size with Anaka: <strong className="text-stone-900">strictly 1–3 adults</strong> in her comfortable 2016 Toyota Corolla for an intimate, calm journey. Day trips vary from <strong className="font-semibold text-stone-900">4 up to 14 hours</strong> depending on photo stops and mountain road conditions.
          </p>

          {/* Pricing & Fuel Context Strip */}
          <div className="mt-4 bg-amber-50/80 border border-amber-200/80 p-4 rounded-2xl text-xs text-stone-700 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-950">
              <Fuel className="w-4 h-4 text-amber-800" />
              <span>Transparent Fuel & Maintenance Standards</span>
            </div>
            <p className="leading-relaxed">
              Our rates reflect honest, safe mountain transport without cutting corners. Long alpine journeys like Kazbegi start from <strong className="text-stone-900">$300 USD</strong>. When local fuel prices decrease, rates adjust down to $250 USD accordingly.
            </p>
          </div>
        </div>

        {/* Special Multi-Tour Discount & Bring A Friend Cashback Double Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Banner 1: Multi-Tour Discount Schedule */}
          <div className="bg-gradient-to-br from-amber-900 to-stone-900 text-white rounded-3xl p-6 shadow-md flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Multi-Tour Booking Sale</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-white">
                Book Multiple Tours & Save Up to 20%
              </h3>
              <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                Planning multiple day excursions while visiting Georgia? Consecutive bookings receive our automatic progressive discount:
              </p>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center text-xs pt-2">
              <div className="bg-white/10 rounded-xl p-2.5 border border-white/10">
                <span className="text-[10px] text-stone-300 block">1st Tour</span>
                <strong className="text-white">Regular</strong>
              </div>
              <div className="bg-amber-400 text-stone-950 rounded-xl p-2.5 font-bold shadow-xs">
                <span className="text-[10px] text-stone-800 block">2nd Tour</span>
                <span className="text-sm block font-black">10% OFF</span>
              </div>
              <div className="bg-amber-400 text-stone-950 rounded-xl p-2.5 font-bold shadow-xs">
                <span className="text-[10px] text-stone-800 block">3rd Tour</span>
                <span className="text-sm block font-black">15% OFF</span>
              </div>
              <div className="bg-emerald-400 text-stone-950 rounded-xl p-2.5 font-bold shadow-xs">
                <span className="text-[10px] text-stone-800 block">4th Tour</span>
                <span className="text-sm block font-black">20% OFF</span>
              </div>
            </div>

            <div className="text-[11px] text-amber-200/90 pt-1 border-t border-white/15 flex items-center justify-between">
              <span>Automatic calculation on custom multi-day plans</span>
              <a href="#planner" className="underline font-semibold text-white hover:text-amber-300">Open Trip Builder →</a>
            </div>
          </div>

          {/* Banner 2: Bring A Friend & Earn Cashback */}
          <div className="bg-gradient-to-br from-emerald-950 to-stone-900 text-white rounded-3xl p-6 shadow-md flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300 mb-1">
                <Gift className="w-4 h-4 text-emerald-300" />
                <span>Referral Reward Program</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-white">
                Bring a Friend & Earn 10% to 20% Cashback
              </h3>
              <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                Traveling with friends or recommending guests? Receive direct cash back: <strong>10% for 1 friend</strong>, or a massive <strong>20% from all travelers</strong> when bringing multiple people!
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-3.5 border border-white/15 text-xs text-stone-200 space-y-1.5">
              <div className="flex items-center justify-between font-semibold">
                <span>Bring 1 Friend:</span>
                <span className="text-emerald-300 font-bold">10% Cashback</span>
              </div>
              <div className="flex items-center justify-between font-semibold">
                <span>Bring Multiple People:</span>
                <span className="text-emerald-300 font-bold">20% Cashback from all!</span>
              </div>
              <p className="text-[10px] text-stone-400 pt-1 border-t border-white/10">
                *Cashback situation must be discussed and agreed upon with Anaka in advance before booking.
              </p>
            </div>

            {onOpenBringFriend ? (
              <button
                onClick={onOpenBringFriend}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-stone-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-sm cursor-pointer"
              >
                <Gift className="w-4 h-4" />
                <span>Learn How Cashback Works & Inquire →</span>
              </button>
            ) : (
              <a
                href="#planner"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-stone-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-sm"
              >
                <Gift className="w-4 h-4" />
                <span>Discuss Cashback with Anaka →</span>
              </a>
            )}
          </div>

        </div>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STANDARD_TOURS.map((tour) => {
            const isExpanded = expandedTourId === tour.id;
            const priceFormatted = formatPrice(tour.startingPriceUSD, currency);
            const inquiryUrl = buildTourInquiryLink(tour.title, priceFormatted);

            return (
              <div
                key={tour.id}
                className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col"
              >
                {/* Authentic Route Visual & Cultural Sticker Badges (No AI Photos) */}
                <div className="relative p-6 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 text-white overflow-hidden border-b border-stone-200">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-xs text-white px-3 py-1 rounded-full text-xs font-semibold">
                      <Clock className="w-3.5 h-3.5 text-amber-300" />
                      <span>{tour.durationNote}</span>
                    </div>
                    <span className="bg-amber-400 text-stone-950 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {tour.vehicleSuitability}
                    </span>
                  </div>

                  <div className="text-[11px] uppercase tracking-wider text-amber-300 font-bold mb-1">
                    Curated Scenic Road Route
                  </div>
                  <h4 className="text-xl font-bold font-serif-heading text-white">
                    {tour.title}
                  </h4>

                  {/* Route Visual Stickers */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {tour.id === 'kazbegi-military-highway' && (
                      <>
                        <span className="bg-white/15 px-2.5 py-1 rounded-lg text-xs font-medium">🏔️ Cross Pass (2,379m)</span>
                        <span className="bg-white/15 px-2.5 py-1 rounded-lg text-xs font-medium">🏰 Ananuri Fortress</span>
                        <span className="bg-white/15 px-2.5 py-1 rounded-lg text-xs font-medium">⛪ Gergeti Trinity</span>
                        <span className="bg-amber-400/20 text-amber-200 border border-amber-400/30 px-2.5 py-1 rounded-lg text-xs font-medium">🚗 1–3 Adults with Anaka</span>
                      </>
                    )}
                    {tour.id === 'mtskheta-gori-combo' && (
                      <>
                        <span className="bg-emerald-500/30 text-emerald-200 border border-emerald-400/40 px-2.5 py-1 rounded-lg text-xs font-bold">✨ Save $50 Combo ($400)</span>
                        <span className="bg-white/15 px-2.5 py-1 rounded-lg text-xs font-medium">⛪ Svetitskhoveli UNESCO</span>
                        <span className="bg-white/15 px-2.5 py-1 rounded-lg text-xs font-medium">🗿 Uplistsikhe Caves</span>
                      </>
                    )}
                    {tour.id === 'mtskheta-alone' && (
                      <>
                        <span className="bg-white/15 px-2.5 py-1 rounded-lg text-xs font-medium">⛪ Jvari Monastery Overlook</span>
                        <span className="bg-white/15 px-2.5 py-1 rounded-lg text-xs font-medium">🌿 25m from Tbilisi</span>
                        <span className="bg-white/15 px-2.5 py-1 rounded-lg text-xs font-medium">⏱️ Relaxed Half Day</span>
                      </>
                    )}
                    {tour.id === 'gori-alone' && (
                      <>
                        <span className="bg-amber-400/20 text-amber-200 border border-amber-400/30 px-2.5 py-1 rounded-lg text-xs font-bold">$250 Day Tour</span>
                        <span className="bg-white/15 px-2.5 py-1 rounded-lg text-xs font-medium">🗿 3,000-Yr Cave City</span>
                        <span className="bg-white/15 px-2.5 py-1 rounded-lg text-xs font-medium">🏰 Gori Fortress</span>
                      </>
                    )}
                    {tour.id === 'borjomi-vardzia' && (
                      <>
                        <span className="bg-white/15 px-2.5 py-1 rounded-lg text-xs font-medium">💧 Natural Mineral Springs</span>
                        <span className="bg-white/15 px-2.5 py-1 rounded-lg text-xs font-medium">🏰 Rabati Castle</span>
                        <span className="bg-white/15 px-2.5 py-1 rounded-lg text-xs font-medium">🧗 Vardzia Cave Monastery</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Tour Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-stone-500 font-medium mb-1">
                      Private Day Trip · {tour.vehicleSuitability}
                    </div>

                    <h3 className="text-xl font-bold font-serif-heading text-stone-900">
                      {tour.title}
                    </h3>

                    <p className="mt-2 text-sm text-stone-600 line-clamp-2">
                      {tour.description}
                    </p>

                    {/* Highlights list */}
                    <div className="mt-4 pt-4 border-t border-stone-100 space-y-2">
                      <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                        Route Highlights:
                      </div>
                      <ul className="space-y-1.5 text-xs text-stone-700">
                        {tour.highlights.slice(0, 4).map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expandable Itinerary Accordion */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-dashed border-stone-200 text-xs text-stone-700 space-y-3">
                        <div className="font-semibold text-stone-900 uppercase tracking-wider text-[11px]">
                          All Stops Included:
                        </div>
                        <ul className="space-y-1.5">
                          {tour.highlights.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-stone-600">
                              <span className="text-amber-900 font-bold whitespace-nowrap">·</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Toggle Button */}
                    <button
                      onClick={() => toggleExpand(tour.id)}
                      className="mt-3 text-xs font-semibold text-amber-900 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Show less stops' : 'View all stops & itinerary'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {/* Route Risks & Weather Warnings Button */}
                    {tour.risks && (
                      <button
                        onClick={() => onOpenRisks(tour.risks!)}
                        className="mt-4 w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-950 text-xs font-semibold transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-amber-700">⚠️</span>
                          <span>View Risks & Road Realities</span>
                        </span>
                        <span className="text-amber-800 text-[11px] underline">Check Details →</span>
                      </button>
                    )}
                  </div>

                  {/* Card Footer: Price & Actions */}
                  <div className="mt-6 pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold">
                        Starting from
                      </div>
                      <div className="text-2xl font-bold text-stone-900 tabular-nums">
                        {priceFormatted}
                      </div>
                      <div className="text-[11px] text-stone-500">
                        {tour.id === 'mtskheta-gori-combo'
                          ? 'Combo package (Save $50)'
                          : 'Per private vehicle & driver'}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectForPlanner(tour.id)}
                        className="px-3.5 py-2.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors cursor-pointer"
                        title="Customize this route in Trip Builder"
                      >
                        Customize
                      </button>

                      <a
                        href={inquiryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-xl transition-all shadow-2xs whitespace-nowrap"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Inquire</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
