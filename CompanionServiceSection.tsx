import React from 'react';
import { Currency } from '../types';
import { formatPrice, buildWhatsAppLink, WHATSAPP_DISPLAY, PHOTO_SESSION_OFFER } from '../data/toursData';
import { Sparkles, Music, Wine, MessageCircle, ShieldCheck, Camera, Check, Heart } from 'lucide-react';

interface CompanionServiceSectionProps {
  currency: Currency;
}

export const CompanionServiceSection: React.FC<CompanionServiceSectionProps> = ({ currency }) => {
  const companionWhatsAppMsg = "Hello Anaka! I am visiting Georgia and interested in your Event & City Companion Service (starts from $80, usually $100 USD / 6 hours). Here are my event details:";
  const photoWhatsAppMsg = "Hello Anaka! I would love to add your Casual Canon Photo Session (+$30 USD/day) to my tour. Here are my trip dates:";

  return (
    <section id="companion" className="py-16 md:py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Card 1: Event & City Companion Service */}
        <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Description & Value */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100/60 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-amber-800" />
                <span>Special Solo Traveler Service</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-stone-900 tracking-tight">
                Event & City Companion Service with Anaka
              </h2>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                Traveling to Georgia alone and don't want to attend a concert, cultural festival, jazz night, or Tbilisi wine bar by yourself? Anaka offers a trusted, friendly companion service so you can enjoy Georgia's vibrant social life with confidence and safety.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-stone-700">
                <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-stone-200/80">
                  <Music className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900">Concerts & Festivals:</strong> Live music, Black Sea arena gigs, club nights & theatre.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-stone-200/80">
                  <Wine className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900">Bars & Nightlife:</strong> Atmospheric Old Tbilisi wine bars, rooftop terraces & jazz spots.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-stone-200/80">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900">Safe & Respectful:</strong> A local trusted friend to guide your evening.
                  </div>
                </div>
              </div>

              {/* Clear Transparent Rules & Variable pricing */}
              <div className="pt-2 text-xs text-stone-600 bg-amber-50/70 border border-amber-200/60 p-4 rounded-xl space-y-1.5">
                <div className="font-bold text-amber-950">
                  Honest Pricing Scale: Usually $100 USD (Starts from $80 USD)
                </div>
                <p>
                  Standard companion accompaniment is typically <strong className="text-stone-900">$100 USD</strong> for up to 6 hours, with simpler local events starting from <strong>$80 USD</strong>. If an event is far outside Tbilisi, requires extra travel time, or demands a lot of physical energy / late-night hours, the price can vary flexibly and will be agreed upon beforehand.
                </p>
                <p className="text-stone-500 text-[11px] pt-1 border-t border-amber-200/50">
                  *All direct event tickets, museum admissions, meals, drinks, and guest taxis are covered directly by the client.
                </p>
              </div>
            </div>

            {/* Right Column: Pricing & WhatsApp CTA */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between space-y-4 shadow-xs text-center sm:text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Companion Rate
                </span>
                <div className="text-3xl font-bold text-stone-900 mt-1 tabular-nums">
                  {formatPrice(100, currency)}
                </div>
                <div className="text-xs text-stone-500 mt-1">
                  Usually $100 (Starts from $80 USD) · Up to 6 hours
                </div>
              </div>

              <div className="text-xs text-stone-600 leading-relaxed">
                Enjoy peace of mind, great conversation, and an authentic local perspective without any awkwardness.
              </div>

              <a
                href={buildWhatsAppLink(companionWhatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-xl transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire Companion on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

        {/* Card 2: Anaka's Casual Canon Photo Add-On (+$30/day) */}
        <div className="bg-[#FAF7F2] border border-amber-200/80 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100/80 px-3 py-1 rounded-full">
                <Camera className="w-3.5 h-3.5 text-amber-800" />
                <span>Popular Tour Add-On</span>
              </div>

              <h3 className="text-2xl font-bold font-serif-heading text-stone-900 tracking-tight">
                Anaka’s Casual Canon Photo Session
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed">
                Full honesty here: <strong className="text-stone-900">I am not a professional studio photographer!</strong> But I love bringing along my beginner Canon camera to snap candid travel moments, scenic viewpoint shots, and genuine portraits of you throughout our journey.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-stone-700">
                <div className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-amber-100">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Zero Selfies & Zero Strangers:</strong> Relax and enjoy the views—I handle capturing your memories.</span>
                </div>
                <div className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-amber-100">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>All Unedited Digitals:</strong> Every photo transferred directly to your phone/email at the end of the trip.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white rounded-2xl border border-amber-200 p-6 flex flex-col justify-between space-y-4 shadow-xs text-center sm:text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Daily Photo Add-On
                </span>
                <div className="text-3xl font-bold text-stone-900 mt-1 tabular-nums">
                  {formatPrice(30, currency)}
                </div>
                <div className="text-xs text-stone-500 mt-1">
                  Per day · All digital photo files included
                </div>
              </div>

              <a
                href={buildWhatsAppLink(photoWhatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-800 active:bg-amber-950 rounded-xl transition-all shadow-xs"
              >
                <Camera className="w-4 h-4" />
                <span>Add Photos to Your Trip</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
