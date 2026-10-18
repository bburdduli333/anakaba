import { isPlaceholder } from '../data/photos';
import React from 'react';
import {
  ANAKA_PROFILE,
  ANAKA_PORTRAIT,
  ANAKA_REDDIT_POSTER,
  ANAKA_SUNSET_GUITAR,
  ANAKA_CANDID,
  WHATSAPP_DISPLAY,
  buildWhatsAppLink,
} from '../data/toursData';
import {
  MessageCircle,
  MapPin,
  ShieldCheck,
  Home,
  Music,
  BookOpen,
  Instagram,
  Sparkles,
  Camera,
  Car,
} from 'lucide-react';

interface AboutSectionProps {
  onOpenGallery: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenGallery }) => {
  const whatsappMsg = "Hello Anaka! I saw your story on your website and would love to ask about planning my trip in Georgia.";

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-8 relative shadow-sm overflow-hidden">
              
              {/* Anaka's Portrait Image */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-6 border border-stone-200 shadow-sm bg-stone-200">
                <img
                  src={ANAKA_PORTRAIT}
                  alt="Ana Burduli (Anaka) laughing in a Georgian forest"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white px-3 py-1 rounded-md text-xs font-semibold">
                  Ana Burduli (Anaka) · Founder
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900">
                    Host & Private Driver
                  </span>
                  <h3 className="text-2xl font-bold font-serif-heading text-stone-900">
                    {ANAKA_PROFILE.fullName}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-amber-950 bg-amber-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                    Leo ♌ · 22 Years
                  </span>
                </div>
              </div>

              <p className="text-xs text-stone-500 flex items-center gap-1.5 pb-2">
                <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>Born & raised in Tbilisi · Roots in Caucasus Mountains & Kakheti</span>
              </p>

              <div className="space-y-2.5 text-xs text-stone-600 border-t border-stone-200/80 pt-4">
                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-stone-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">Vehicle & Group Size:</strong> 2016 Toyota Corolla (Clean, air-conditioned, AUX for music · Strictly 1–3 adults for maximum comfort & legroom).
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">Languages:</strong> English (Fluent), Russian (Fluent), Georgian (Native).
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">Psychology Student:</strong> Final year Bachelor in Psychology. Empathetic, calm listening, and attentive human care.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Music className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">Academic Choir Singer & Guitar:</strong> In an academic singing studio since 2010; performed at classical cultural concerts; guitar teacher.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">Travel & Safety Background:</strong> Experienced organizing youth travel groups with ICSU (safety, itinerary budget & care).
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Camera className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">Casual Canon Photos:</strong> Available for candid holiday photo snaps (+$30/day).{' '}
                    <button
                      onClick={onOpenGallery}
                      className="text-amber-900 underline font-semibold hover:text-amber-950"
                    >
                      View Gallery
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Instagram className="w-4 h-4 text-pink-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">Instagram:</strong>{' '}
                    <a
                      href={`https://instagram.com/${ANAKA_PROFILE.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-800 hover:text-amber-900 underline font-mono font-medium"
                    >
                      {ANAKA_PROFILE.instagram}
                    </a>
                  </div>
                </div>

                {/* Village House Stay Teaser */}
                <div className="flex items-start gap-3 bg-amber-50/80 p-3 rounded-xl border border-amber-200/60 text-amber-950">
                  <Home className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <strong>Village House Stay (Coming Soon):</strong> An authentic country house stay being prepared for travelers seeking peaceful village life.
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/60">
                <a
                  href={buildWhatsAppLink(whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Message Anaka directly: {WHATSAPP_DISPLAY}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: In-Depth Biography & Gallery Teaser */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-800" />
              <span>Get to Know Your Host</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-stone-900 tracking-tight text-balance">
              "I wanted to build a travel experience where you feel genuinely cared for, safe, and free from tourist traps."
            </h2>

            <div className="prose prose-stone text-stone-600 space-y-4 text-base leading-relaxed">
              <p>
                Hello! I am <strong className="text-stone-900">Ana Burduli (Anaka)</strong>. I am 22 years old, a Leo, and was born and raised right here in Tbilisi. My family roots tie into both the breathtaking <strong className="text-stone-900">high Caucasus mountains</strong> and the sun-drenched vineyards of <strong className="text-stone-900">Kakheti</strong>.
              </p>

              <p>
                I am currently in my final year finishing my <strong className="text-stone-900">Bachelor's Degree in Psychology</strong>. Understanding people, making them feel heard, and creating a relaxed environment is second nature to me. When I’m not driving or planning routes, you will find me singing—I have been in an academic choir studio since 2010, performed in classical cultural concerts, and teach guitar.
              </p>

              <p>
                Before launching <em>Tours with Anaka</em>, I worked in diverse fields: managing youth travel programs at ICSU where I was directly responsible for group safety, itinerary budgeting, and entertainment; working in cafe hospitality, customer service, administration, and teaching. All of this shaped my philosophy: <strong className="text-stone-900">safety, punctuality, and mutual respect come first</strong>.
              </p>

              <div className="bg-stone-50 border border-stone-200 p-5 rounded-2xl text-sm space-y-2">
                <div className="font-bold text-stone-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Why Travel with a Female Driver in Georgia?</span>
                </div>
                <p className="text-stone-600 text-xs sm:text-sm">
                  Too many visitors leave Georgia with stressful memories of aggressive drivers overtaking blind corners on mountain cliffs. With female drivers, your journey is characterized by calm pacing, vigilant road awareness, and real consideration for how you feel in the car.
                </p>
              </div>

              <p>
                <strong>My Network & Partner Nino Paichadze:</strong> While the company carries my name and vision, I collaborate with a circle of trusted drivers and my wonderful partner, <strong className="text-stone-900">Nino Paichadze</strong>. Drivers are destined to guests according to the route and party size (travelers don't have to worry about picking drivers from a menu). Nino is our lead partner girl whose bio-wine wooden cottage and 4x4 expeditions bring shared income. For pre-assembled groups of 15, 25, or up to 45 guests, I also coordinate private group tours with modern Mercedes Sprinters or touring coaches!
              </p>

              <p>
                <strong>Winery Expertise:</strong> Whether you prefer tiny, rustic homemade family maranis with underground clay Qvevri and village hospitality, or upscale aristocratic factory estates like Château Mukhrani and Prince Tsinandali, I know the true local secrets of both. You choose your favorite style!
              </p>

              {/* Inclusivity & Safe Space Declaration */}
              <div className="bg-gradient-to-r from-amber-50 via-rose-50 to-emerald-50 border-2 border-stone-200 rounded-2xl p-4 sm:p-5 text-stone-800 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900">
                  <span className="text-base">🏳️‍🌈</span>
                  <span>Safe & Welcoming For All: No to Racism & Homophobia</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                  We believe travel in Georgia should feel warm, liberating, and secure for every human soul. We stand firmly <strong>against racism, homophobia, and discrimination</strong>. We proudly welcome <strong className="text-stone-900">LGBTQ+ travelers, solo female adventurers, couples, and visitors of all races, religions, and nationalities</strong>. In our cars and at our artisan cottages, you are respected, protected, and celebrated.
                </p>
              </div>
            </div>

            {/* How It Started: The Famous Reddit Ad */}
            <div className={`bg-[#FAF7F2] border border-amber-200/90 rounded-3xl p-6 sm:p-7 shadow-xs ${isPlaceholder(ANAKA_REDDIT_POSTER) ? 'hidden' : ''}`}>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-full sm:w-44 aspect-[3/4] rounded-2xl overflow-hidden border border-amber-300 shadow-sm shrink-0 bg-stone-100">
                  <img
                    src={ANAKA_REDDIT_POSTER}
                    alt="Ana's original Reddit ad for Private Driver in Georgia (Female)"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2.5 text-stone-700">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-amber-800" />
                    <span>How Many Travelers Found Me · The Reddit Post</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-serif-heading text-stone-900">
                    "Private Driver in Georgia (Female) — Safe, Chill, and Local Vibes"
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    <em>"Hey travelers! I’m Ana, based in Tbilisi. I drive a 2016 Toyota Corolla, and I’m also a psychology student and choir singer (English/Russian). Kazbegi, Kakheti, Mtskheta, Gori, Kutaisi, Borjomi. Honest Prices · Great Music 🎵 · Safe · Female-led."</em>
                  </p>
                  <p className="text-xs text-stone-500">
                    Travelers on Reddit who searched for <strong>"Private Driver in Georgia (Female)"</strong> loved the relaxed pace, non-smoking clean Corolla, genuine local stories, and zero forced commercial souvenir stops.
                  </p>
                </div>
              </div>
            </div>

            {/* Dedicated Photo Gallery Card Teaser (Photos kept in Gallery modal per Anaka's request) */}
            <div className="pt-2 border-t border-stone-200">
              <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-7 relative overflow-hidden shadow-xs hover:border-amber-300 transition-colors">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                  <div className="space-y-2 max-w-lg">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider">
                      <Camera className="w-4 h-4 text-amber-800" />
                      <span>Original Photos Taken by Anaka</span>
                    </div>
                    <h3 className="text-xl font-bold font-serif-heading text-stone-900">
                      Explore Anaka's Georgia Photo Gallery
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      All original photographs taken across Georgia (Bakhmaro sea of clouds, high Caucasus pastures, Kakheti harvest, and Old Sololaki) are curated in my personal gallery modal so the main page stays clean.
                    </p>
                  </div>

                  <button
                    onClick={onOpenGallery}
                    className="shrink-0 inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-950 rounded-xl transition-all shadow-xs cursor-pointer"
                  >
                    <Camera className="w-4 h-4" />
                    <span>Open Photo Gallery</span>
                  </button>
                </div>

                {/* Casual Photoshoot Offer Banner */}
                <div className="mt-5 pt-4 border-t border-stone-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>
                      <strong>Casual Canon Photoshoot (+ $30 USD / Day):</strong> Beginner Canon camera, candid unedited photos of you delivered on the same day.
                    </span>
                  </div>
                  <button
                    onClick={onOpenGallery}
                    className="text-amber-900 font-semibold hover:underline shrink-0 text-xs"
                  >
                    View Samples & Details →
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={buildWhatsAppLink("Hello Anaka! I would love to connect and discuss planning a trip in Georgia:")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Anaka on WhatsApp</span>
              </a>

              <a
                href="#hiking"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors"
              >
                <span>View Nino’s 4x4 Hiking Routes</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
