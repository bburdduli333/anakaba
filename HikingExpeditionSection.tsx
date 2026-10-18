import React from 'react';
import { Currency } from '../types';
import { HIKING_ROUTES, NINO_BIO, formatPrice, buildHikingInquiryLink, buildWhatsAppLink } from '../data/toursData';
import { Mountain, Compass, Footprints, MessageCircle, ArrowUpRight, User, Users, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface HikingExpeditionSectionProps {
  currency: Currency;
  onOpenNinoBio: () => void;
}

export const HikingExpeditionSection: React.FC<HikingExpeditionSectionProps> = ({
  currency,
  onOpenNinoBio
}) => {
  return (
    <section id="hiking" className="py-16 md:py-24 bg-stone-900 text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Mountain className="w-4 h-4 text-amber-400" />
            <span>Wild Caucasus & 4x4 Off-Road Expeditions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-white tracking-tight">
            High Mountain Trails & 4x4 Off-Road Expeditions
          </h2>
          <p className="mt-3 text-base text-stone-300 leading-relaxed">
            For true mountain lovers and wild nature explorers. We take you beyond standard highways to remote glacial lakes, ancient stone watchtowers, and high alpine passes across Khevsureti, Svaneti, Javakheti, and Bakhmaro.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenNinoBio}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs transition-colors cursor-pointer shadow-sm active:scale-95"
              aria-label="Meet Nino Paichadze and open her bio"
            >
              <User className="w-4 h-4 text-stone-950" />
              <span>Meet Nino Paichadze & View Cottage Bio →</span>
            </button>
            <span className="text-xs text-stone-400">
              Pricing: <strong>$400 to $1,200 USD</strong> (based on days, remote terrain & route)
            </span>
          </div>
        </div>

        {/* Driver Allocation & Nino Partnership Notice Box */}
        <div className="bg-stone-800/90 border border-amber-500/30 rounded-3xl p-6 sm:p-7 mb-10 shadow-lg text-xs space-y-3">
          <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>How Drivers Are Assigned · Authentic Local Collaboration</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-stone-300 leading-relaxed">
            <div>
              <p>
                <strong className="text-white">Drivers are destined to travelers by route & party size:</strong> You do not need to worry about picking drivers from a menu. Anaka coordinates and destines the exact qualified driver and vehicle based on your route (paved highway vs extreme 4x4 mountain pass) and group size.
              </p>
            </div>
            <div>
              <p>
                <strong className="text-white">Partner Spotlight — Nino Paichadze:</strong> Nino is our featured lead partner girl. Her organic bio-wine cottage in Kakheti and her lifted 2021 Ford Ranger bring valuable shared business income. Hiking expeditions are also operated by other vetted, licensed mountain drivers in our network as appropriate.
              </p>
            </div>
          </div>

          {/* Pre-Formed Large Group Tours Note (Up to 45 people) */}
          <div className="mt-2 pt-3 border-t border-stone-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-stone-300">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong className="text-white">Planning a Group Tour (15, 25, or up to 45 People)?</strong> Anaka can organize and manage custom private tours for large groups that arrive <em>already assembled / grouped</em> using modern Mercedes Sprinter minibuses or 45-seat touring coaches! (Public scheduled group tours will be added later as the business grows).
              </span>
            </div>
            <a
              href={buildWhatsAppLink("Hello Anaka! I have an organized group of travelers (up to 45 people) and would like to ask about planning a group tour:")}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-amber-400 hover:text-amber-300 underline font-semibold text-xs"
            >
              Inquire Group Tour →
            </a>
          </div>
        </div>

        {/* Feature Hero Card with 4x4 Expedition Vehicle Advantages (No AI Photos) */}
        <div className="relative rounded-3xl overflow-hidden border border-stone-800 bg-stone-800/60 mb-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual 4x4 Expedition Badge Header */}
            <div className="lg:col-span-7 relative min-h-[280px] overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950 p-6 sm:p-8 flex flex-col justify-between text-white border-b lg:border-b-0 lg:border-r border-stone-800">
              <div className="flex items-center justify-between gap-3">
                <span className="bg-amber-400 text-stone-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Expedition Team
                </span>
                <span className="text-stone-400 text-xs font-mono">
                  Lifted 4x4 Off-Road Equipment
                </span>
              </div>

              <div className="my-6">
                <div className="text-2xl sm:text-3xl font-bold font-serif-heading text-white">
                  Wild Caucasus Trails & High Mountain Passes
                </div>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 max-w-md leading-relaxed">
                  Reaching untouched glacial lakes, volcanic plateaus, and remote highland gorges across Khevsureti, Svaneti, Javakheti, and Bakhmaro where ordinary passenger cars cannot travel.
                </p>
              </div>

              {/* Expedition Visual Stickers */}
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/10 px-3 py-1.5 rounded-xl text-xs font-medium border border-white/10">
                  🛞 Heavy-Duty Off-Road Suspension
                </span>
                <span className="bg-white/10 px-3 py-1.5 rounded-xl text-xs font-medium border border-white/10">
                  🥾 On-Foot Trail Navigation
                </span>
                <span className="bg-white/10 px-3 py-1.5 rounded-xl text-xs font-medium border border-white/10">
                  🏔️ Elevations Up to 3,300m
                </span>
                <span className="bg-white/10 px-3 py-1.5 rounded-xl text-xs font-medium border border-white/10">
                  🇦🇲 Armenia Cross-Border
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Compass className="w-4 h-4" />
                  <span>The Mountain Expedition Advantage</span>
                </div>

                <h3 className="text-2xl font-bold font-serif-heading text-white">
                  Conquering Where Standard Cars Cannot Go
                </h3>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Equipped with high-clearance 4x4 vehicles (including Nino's lifted 2021 Ford Ranger with heavy-duty off-road suspension and snorkel). Safely navigating rocky scree, mud passes, and mountain rivers to place you right at the trailhead.
                </p>

                <div className="space-y-2 text-xs text-stone-300 pt-2 border-t border-stone-700/80">
                  <div className="flex items-start gap-2">
                    <Footprints className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Active Trail Companions:</strong> Drivers follow and accompany you along trails on foot—hands-on mountain companions who know the safe paths.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Armenia Cross-Border Option:</strong> Cross-border routes into northern Armenia (Lori monasteries) are also available upon advance request.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-700/80 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] text-stone-400 uppercase tracking-wider">
                    Expedition Pricing
                  </div>
                  <div className="text-lg font-bold text-amber-300">
                    $400 – $1,200 USD
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={onOpenNinoBio}
                    className="px-3 py-2 text-xs font-semibold text-stone-200 bg-stone-700 hover:bg-stone-600 rounded-xl transition-colors cursor-pointer"
                  >
                    View Bio
                  </button>
                  <a
                    href={buildHikingInquiryLink("Custom 4x4 Caucasus Expedition")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-sm whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Plan Expedition</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Hiking Routes Grid (Clean display, zero risk alarm text per request) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold font-serif-heading text-white">
              Featured 4x4 Mountain Routes
            </h3>
            <span className="text-xs text-stone-400">
              Custom routes can always be designed on WhatsApp
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HIKING_ROUTES.map((route) => (
              <div
                key={route.id}
                className="bg-stone-800/80 border border-stone-700/80 rounded-2xl p-5 flex flex-col justify-between hover:border-amber-400/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-semibold text-stone-400 mb-1">
                    <span>{route.region}</span>
                    <span className="text-amber-400">{route.difficulty}</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {route.name}
                  </h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {route.highlights}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-stone-700/60 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400">
                    4x4 Expedition Vehicle
                  </span>
                  <a
                    href={buildHikingInquiryLink(route.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-300 hover:text-amber-200"
                  >
                    <span>Inquire Route</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
