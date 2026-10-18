import React from 'react';
import { ShieldAlert, CheckCircle, Clock, Sparkles, AlertCircle, HeartHandshake } from 'lucide-react';
import { buildWhatsAppLink } from '../data/toursData';

export const RulesSection: React.FC = () => {
  return (
    <section id="rules" className="py-16 md:py-20 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            Clear Boundaries & Expectations
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-stone-900 tracking-tight">
            Anaka’s House Rules: Mutual Respect First
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            We don't believe in the old cliché that "the client is always right." We believe in mutual human respect. Treat us with courtesy, and we will move mountains to make your Georgian trip unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Rule 1: Mutual Respect */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-2.5">
            <div className="flex items-center gap-2.5 text-stone-900 font-bold font-serif-heading">
              <HeartHandshake className="w-5 h-5 text-amber-800" />
              <span>1. Respect Me & I Respect You</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              We welcome travelers from all walks of life. Rude behavior, aggressive demands, or condescending attitudes will not be tolerated. We take care of you like family, and expect the same warmth in return.
            </p>
          </div>

          {/* Rule 2: Payment Before Departure */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-2.5">
            <div className="flex items-center gap-2.5 text-stone-900 font-bold font-serif-heading">
              <CheckCircle className="w-5 h-5 text-emerald-700" />
              <span>2. Full Payment Before Departure</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              The full agreed tour price is paid before the vehicle departs (cash upon pickup, agreed bank transfer, or advance deposit). No post-trip payment negotiations.
            </p>
          </div>

          {/* Rule 3: Late Notice Bookings */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-2.5">
            <div className="flex items-center gap-2.5 text-stone-900 font-bold font-serif-heading">
              <Clock className="w-5 h-5 text-amber-800" />
              <span>3. Late Notice Surcharge</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Inquiries submitted with short notice (the day before or late the night prior) require urgent calendar shuffling and vehicle preparation, and come with an additional rush fee. Please plan ahead whenever possible.
            </p>
          </div>

          {/* Rule 4: Vehicle Care & Damage */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-2.5">
            <div className="flex items-center gap-2.5 text-stone-900 font-bold font-serif-heading">
              <ShieldAlert className="w-5 h-5 text-red-700" />
              <span>4. Vehicle Care & Cleaning Policy</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Our cars are kept spotless and fresh for your comfort. If a passenger stains the upholstery, damages interior fittings, or leaves a mess, they are financially responsible for immediate professional detailing or repair costs.
            </p>
          </div>

          {/* Rule 5: Extra Stops & Overtime */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-2.5">
            <div className="flex items-center gap-2.5 text-stone-900 font-bold font-serif-heading">
              <AlertCircle className="w-5 h-5 text-amber-800" />
              <span>5. Unplanned Stops & Delays</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Day tours vary between 4 up to 14 hours based on the agreed itinerary. If you decide during the journey to add unplanned side towns or linger at stops far past the agreed schedule, overtime fees apply.
            </p>
          </div>

          {/* Rule 6: Multi-Day Accommodations */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-2.5">
            <div className="flex items-center gap-2.5 text-stone-900 font-bold font-serif-heading">
              <Sparkles className="w-5 h-5 text-emerald-700" />
              <span>6. Multi-Day Expenses</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              On multi-day road trips across Georgia, modest accommodation and meals for your driver (and licensed guide, if booked) are covered directly by the traveler or added to the quote prior to booking.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
