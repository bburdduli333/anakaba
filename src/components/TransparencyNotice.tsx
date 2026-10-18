import React from 'react';
import { ShieldCheck, MessageCircle, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppLink } from '../data/toursData';

export const TransparencyNotice: React.FC = () => {
  return (
    <section id="transparency" className="py-16 md:py-20 bg-stone-100/70 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            Clear Policies & Honest Travel
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-stone-900 tracking-tight">
            How Bookings & Agreements Work
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            We operate with complete openness so your journey in Georgia is smooth, safe, and transparent from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-3">
            <div className="flex items-center gap-2.5 text-stone-900 font-bold font-serif-heading">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
              <span>Direct WhatsApp Confirmation</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Every detail — including total cost, departure time, pickup hotel address, and vehicle specifications — is agreed upon directly in your WhatsApp conversation. Nothing is charged automatically through this website.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-3">
            <div className="flex items-center gap-2.5 text-stone-900 font-bold font-serif-heading">
              <AlertCircle className="w-5 h-5 text-amber-800" />
              <span>Driver & Guide Assignment</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Tours may be driven by Anaka personally or by independent partner drivers and licensed guides, depending on calendar availability and group vehicle needs. You will always know in advance who will be driving your trip.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-3">
            <div className="flex items-center gap-2.5 text-stone-900 font-bold font-serif-heading">
              <FileText className="w-5 h-5 text-emerald-700" />
              <span>Payment & Currency</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Prices are calculated in Georgian Lari (GEL) and approximate Euro (€) equivalents. Payment arrangements (cash upon pickup, bank transfer, or agreed deposit) are confirmed directly with your driver before departure.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-3">
            <div className="flex items-center gap-2.5 text-stone-900 font-bold font-serif-heading">
              <CheckCircle2 className="w-5 h-5 text-amber-800" />
              <span>Flexible Weather & Cancellation</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Caucasus weather can change quickly. If high mountain passes are blocked by snow or heavy rain, we will discuss alternative scenic routes or reschedule without harsh cancellation penalties.
            </p>
          </div>

          {/* Inclusivity & Respect Commitment */}
          <div className="md:col-span-2 bg-gradient-to-r from-stone-50 via-amber-50/50 to-stone-50 rounded-2xl border border-stone-200 p-6 space-y-2">
            <div className="flex items-center gap-2.5 text-stone-900 font-bold font-serif-heading">
              <span className="text-lg" role="img" aria-label="Pride flag">🏳️‍🌈</span>
              <span>Safe Space & Inclusivity Commitment: Zero Racism or Homophobia</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              We uphold strict mutual respect standards across all our drivers and partners. We warmly welcome LGBTQ+ travelers, solo adventurers, and guests of every race, religion, nationality, and background. You are treated with absolute dignity, genuine care, and authentic Georgian hospitality.
            </p>
          </div>

        </div>

        <div className="mt-8 text-center">
          <a
            href={buildWhatsAppLink("Hello Anaka! I have a question about booking terms and tour arrangements:")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 hover:text-emerald-900"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Have a specific itinerary question? Talk with Anaka on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
