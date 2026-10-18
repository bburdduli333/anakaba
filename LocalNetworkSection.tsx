import React from 'react';
import { Car, Users, Shield, Sparkles, CheckCircle2, AlertCircle, Compass, Bus } from 'lucide-react';
import { buildWhatsAppLink } from '../data/toursData';

export const LocalNetworkSection: React.FC = () => {
  return (
    <section id="network" className="py-16 md:py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            Honest Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-stone-900 tracking-tight">
            Our Trusted Drivers & Group Tour Planning
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Because Anaka drives an intimate personal car for 1 to 3 adult guests, she coordinates with a circle of vetted female and male drivers with diverse vehicles—from 4x4 mountain rigs to executive touring coaches.
          </p>
        </div>

        {/* Driver Allocation Policy Notice */}
        <div className="bg-white border-2 border-stone-300 rounded-3xl p-6 sm:p-8 mb-10 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-stone-900 font-bold uppercase tracking-wider text-xs">
            <Compass className="w-4 h-4 text-amber-800" />
            <span>Driver Assignment Policy: Destined by Route & Group Size</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-stone-600 leading-relaxed">
            <div>
              <p>
                <strong className="text-stone-900 font-semibold block mb-1">Travelers Do Not Pick Drivers From a Menu:</strong>
                To guarantee absolute road safety, vehicle suitability, and flawless logistical timing, drivers are assigned to your trip by Anaka. We assess whether your route is an easy paved highway (like Mtskheta) or a treacherous 4x4 mountain pass (like Khevsureti or Bakhmaro) and assign the ideal vehicle.
              </p>
            </div>
            <div>
              <p>
                <strong className="text-stone-900 font-semibold block mb-1">Our Partnership with Nino Paichadze:</strong>
                We enthusiastically promote partner Nino Paichadze because her artisan bio-wine cottage in Kakheti and her 4x4 Ford Ranger services bring shared business income and support local independent women. Nino is our featured lead partner girl, while other vetted, experienced mountain drivers in our circle also operate hiking routes.
              </p>
            </div>
          </div>
        </div>

        {/* 3-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Anaka */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center mb-5">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif-heading text-stone-900 mb-2">
                Anaka — Founder & Driver
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Mindful, gentle, and safe driving in her 2016 Toyota Corolla for <strong className="text-stone-900 font-semibold">1 to 3 adult travelers</strong>. Serene pacing, genuine conversations, and authentic Kakheti wine connections.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500">
              Strictly 1–3 adults for optimal passenger comfort and personal care.
            </div>
          </div>

          {/* Pillar 2: Fellow Drivers (Girls & Boys) */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif-heading text-stone-900 mb-2">
                Trusted Mountain & Team Drivers
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Hand-picked female and male drivers operating clean modern sedans, lifted 4x4 SUVs (including Nino's Ford Ranger), and spacious minivans for parties of 4 to 7 guests.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500">
              Safe mountain drivers, non-smokers, and respectful of your itinerary.
            </div>
          </div>

          {/* Pillar 3: Pre-Assembled Large Group Tours */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5">
                <Bus className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif-heading text-stone-900 mb-2">
                Pre-Formed Groups (Up to 45 Pax)
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Traveling as an organized group, family reunion, wedding party, or university retreat? Anaka plans and manages private group tours for <strong className="text-stone-900">15, 25, or up to 45 guests</strong> using vetted Mercedes Sprinters or touring coaches.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500">
              Must arrive already grouped. (Public scheduled group tours will launch later).
            </div>
          </div>

        </div>

        {/* Clear Rules Regarding Drivers & Guides */}
        <div className="mt-8 bg-amber-50/70 border border-amber-200/60 p-5 rounded-2xl text-xs text-stone-700 space-y-2">
          <div className="flex items-center gap-2 font-bold text-amber-950">
            <AlertCircle className="w-4 h-4 text-amber-800 shrink-0" />
            <span>Important Distinction: Drivers vs. Tour Guides</span>
          </div>
          <p className="leading-relaxed">
            Drivers provide safe road transport, punctual schedules, and clean vehicles. If you desire deep archaeological, ecclesiastical, or UNESCO history lectures, you can request an optional licensed guide ($60 to $200 USD). If a driver shares personal stories or tips during the drive, it is their personal kindness, not a contracted academic lecture.
          </p>
        </div>

      </div>
    </section>
  );
};
