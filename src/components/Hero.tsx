import React from 'react';
import { 
  ANAKA_PORTRAIT, 
  ANAKA_PROFILE, 
  buildWhatsAppLink, 
  WHATSAPP_DISPLAY, 
  ANAKA_GOOGLE_BUSINESS_LOGO 
} from '../data/toursData';
import { 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Car, 
  Music, 
  BookOpen, 
  Sparkles,
  Heart,
  UserCheck,
  Gift,
  Users
} from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onAboutClick: () => void;
  onOpenBringFriend?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onAboutClick, onOpenBringFriend }) => {
  const heroWhatsAppText = "Hello Anaka! I am visiting Georgia and would love to plan a private trip (1-3 adults with you, or group tour). Could we discuss dates and itinerary?";

  return (
    <section id="hero" className="relative pt-6 pb-8 md:pt-10 md:pb-12 overflow-hidden bg-gradient-to-b from-amber-50/40 via-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Bio Highlights, Value Proposition & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Google Business Profile Verified Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-stone-200/90 shadow-2xs text-xs">
                <img
                  src={ANAKA_GOOGLE_BUSINESS_LOGO}
                  alt="Tours with Anaka Google Profile Logo"
                  className="w-5 h-5 rounded-full object-cover border border-amber-900/30"
                />
                <div className="flex items-center gap-1.5 text-stone-800">
                  <span className="font-semibold text-stone-900">Google Profile:</span>
                  <span className="text-stone-600 font-medium">Tours with Anaka — Private Driver in Georgia</span>
                </div>
              </div>

              {onOpenBringFriend && (
                <button
                  onClick={onOpenBringFriend}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100/90 hover:bg-emerald-200 text-emerald-950 font-bold text-xs border border-emerald-300 transition-colors cursor-pointer"
                >
                  <Gift className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Bring a Friend: 10%-20% Cashback →</span>
                </button>
              )}
            </div>

            {/* Quick Sticker Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900">
              <span className="bg-amber-100 text-amber-950 px-2.5 py-0.5 rounded-full">Female Driver Safety</span>
              <span className="bg-stone-200/80 text-stone-800 px-2.5 py-0.5 rounded-full">Group Size: 1–3 Adults with Anaka</span>
              <span className="bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full">Psychology Student</span>
              <span className="bg-rose-100 text-rose-900 px-2.5 py-0.5 rounded-full">Leo ♌ 22 Years</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-heading tracking-tight text-stone-900 text-balance leading-[1.12]">
              Private Driver in Georgia <span className="text-amber-900">(Female)</span>
            </h1>

            <p className="text-lg text-stone-700 leading-relaxed max-w-2xl font-normal">
              Travel comfortably, safely, and authentically across Georgia with experienced female host and private driver <strong className="font-bold text-stone-900">Ana Burduli (Anaka)</strong>. With female drivers, your road journey is characterized by calm, attentive pacing—no reckless cliff overtaking, no aggressive speeding, and no forced commercial souvenir stops.
            </p>

            {/* Call to Actions: WhatsApp + "More About Anaka" Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={buildWhatsAppLink(heroWhatsAppText)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-xl transition-all shadow-sm hover:shadow-md whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat with Anaka on WhatsApp</span>
              </a>

              {/* The Requested "More about Anaka" Button */}
              <button
                onClick={onAboutClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-bold text-amber-950 bg-amber-100 hover:bg-amber-200 active:bg-amber-300 rounded-xl transition-colors whitespace-nowrap cursor-pointer shadow-xs border border-amber-300/80"
              >
                <Heart className="w-4 h-4 text-amber-800" />
                <span>More about Anaka →</span>
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>View Tours</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Inclusivity & Anti-Discrimination Trust Banner */}
            <div className="flex items-center gap-2.5 text-xs bg-amber-50/80 border border-amber-200/90 px-4 py-2.5 rounded-xl text-stone-700">
              <span className="text-base shrink-0" role="img" aria-label="Pride flag">🏳️‍🌈</span>
              <span className="leading-snug">
                <strong className="text-stone-900">LGBTQ+ & Internationally Friendly:</strong> We say a firm NO to racism and homophobia. A safe, welcoming space for every traveler exploring Georgia.
              </span>
            </div>

          </div>

          {/* Right Column: ANAKA'S REAL FACE (Authentic User Photo, No AI) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-stone-200/90 aspect-[4/5] bg-stone-100">
              <img
                src={ANAKA_PORTRAIT}
                alt="Ana Burduli (Anaka) laughing in a Georgian forest"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="eager"
              />

              {/* Authentic Overlay Badge with Real Face Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                
                {/* Visual Sticker Badges */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <span className="bg-amber-500/90 text-stone-950 font-bold px-2 py-0.5 rounded-md text-[10px] uppercase tracking-wider">
                    Authentic Host Photo
                  </span>
                  <span className="bg-white/20 backdrop-blur-xs text-white px-2 py-0.5 rounded-md text-[10px] font-medium">
                    1–3 Adults with Anaka
                  </span>
                  <span className="bg-white/20 backdrop-blur-xs text-white px-2 py-0.5 rounded-md text-[10px] font-medium">
                    Leo ♌ 22 Years
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-white">
                  Ana Burduli (Anaka)
                </h3>
                
                <p className="text-xs text-amber-200 mt-0.5 font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Private Driver in Georgia (Female) · Based in Tbilisi</span>
                </p>

                <p className="text-[11px] text-stone-300 mt-2 line-clamp-2 leading-relaxed">
                  "Safe, chill, and local vibes. No aggressive mountain driving, good music on the road, and honest care for every guest."
                </p>

                <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between">
                  <button
                    onClick={onAboutClick}
                    className="text-xs font-bold text-amber-300 hover:text-white underline transition-colors cursor-pointer"
                  >
                    Read full personal bio →
                  </button>
                  <span className="text-[11px] text-emerald-400 font-mono font-medium">
                    WhatsApp: {WHATSAPP_DISPLAY}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
