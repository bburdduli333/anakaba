import React, { useState } from 'react';
import { WHATSAPP_DISPLAY, buildWhatsAppLink } from '../data/toursData';
import { MessageCircle, Calendar, Users, MapPin, Sparkles, Dog, Baby, Navigation, Wine, Gift, CheckCircle2 } from 'lucide-react';

export const TripPlannerSection: React.FC = () => {
  // State variables for all required fields
  const [dateType, setDateType] = useState<'exact' | 'approximate'>('exact');
  const [dateValue, setDateValue] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('1-3 adults (with Anaka in personal car)');
  const [pickupCity, setPickupCity] = useState('Tbilisi Center / Hotel');
  
  const [hasPets, setHasPets] = useState(false);
  const [petDetails, setPetDetails] = useState('');
  
  const [hasChildren, setHasChildren] = useState(false);
  const [childDetails, setChildDetails] = useState('');

  const [wineryPreference, setWineryPreference] = useState('Blend of Both (Fancy Estate + Authentic Family Marani)');
  const [numberOfTours, setNumberOfTours] = useState('1 tour');
  const [stopPreference, setStopPreference] = useState('3-4 balanced sightseeing stops');
  const [locationsToSee, setLocationsToSee] = useState('Kakheti Wine (Nino cottage or Irma supra) or Kazbegi');
  
  const [needLicensedGuide, setNeedLicensedGuide] = useState(false);
  const [wantMountainExpedition, setWantMountainExpedition] = useState(false);
  const [wantDestinyMatrix, setWantDestinyMatrix] = useState(false);
  const [wantArmeniaCrossBorder, setWantArmeniaCrossBorder] = useState(false);
  const [wantPhotoSession, setWantPhotoSession] = useState(false);
  const [wantCashbackInfo, setWantCashbackInfo] = useState(false);
  const [additionalQuestions, setAdditionalQuestions] = useState('');

  // Assemble comprehensive WhatsApp message
  const generatedMessage = [
    `Hello Anaka! I would like to plan a custom private tour in Georgia:`,
    `· Dates: ${dateType === 'exact' ? (dateValue || 'To be specified') : `Approximate: ${dateValue || 'Flexible in upcoming weeks'}`}`,
    `· Group Size: ${numberOfPeople}`,
    `· Pickup City: ${pickupCity}`,
    `· Preferred Locations: ${locationsToSee || 'Open to recommendations'}`,
    `· Winery Style Preference: ${wineryPreference}`,
    `· Number of Tours Planned: ${numberOfTours}`,
    `· Sightseeing & Stops: ${stopPreference}`,
    wantPhotoSession ? `· Anaka's Casual Canon Photo Session: Yes (+$30 USD/day)` : null,
    wantMountainExpedition ? `· 4x4 Mountain / Hiking Expedition: Yes ($400-$1,200 · Driver destined by route)` : null,
    wantDestinyMatrix ? `· Destiny Matrix / Tarot Reading in the Woods: Yes ($150 USD Sale · Regular $230)` : null,
    wantArmeniaCrossBorder ? `· Armenia Cross-Border Transit: Yes` : null,
    wantCashbackInfo ? `· Bring a Friend Referral: Yes (Discussing 10%-20% Cashback)` : null,
    hasChildren ? `· Children: Yes (${childDetails || 'Child seat needed'})` : null,
    hasPets ? `· Traveling with Pet: Yes (${petDetails || 'Small dog/cat'})` : null,
    needLicensedGuide ? `· Optional Licensed Guide: Yes ($60-$200 request)` : null,
    additionalQuestions ? `· Notes / Questions: ${additionalQuestions}` : null,
    `\nCould you please let me know your availability and estimated quote? Thank you!`
  ].filter(Boolean).join('\n');

  const whatsappUrl = buildWhatsAppLink(generatedMessage);

  return (
    <section id="planner" className="py-16 md:py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            Interactive Trip Customizer
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-stone-900 tracking-tight">
            Build Your Custom Georgia Tour
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Fill in your preferred travel details below. Our builder automatically configures group size, winery style, and multi-tour sales discounts, formatting a clean WhatsApp inquiry directly to Anaka.
          </p>
        </div>

        {/* 2-Column Layout: Form on Left, WhatsApp Live Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold font-serif-heading text-stone-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-900" />
              <span>Trip Specification Checklist</span>
            </h3>

            {/* Dates: Exact vs Approximate */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-stone-400" />
                <span>Date Preference (Exact or Approximate)</span>
              </label>

              <div className="flex items-center gap-2 mb-2">
                <button
                  type="button"
                  onClick={() => setDateType('exact')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                    dateType === 'exact'
                      ? 'bg-amber-900 text-white border-amber-900'
                      : 'bg-white text-stone-600 border-stone-300'
                  }`}
                >
                  Exact Date
                </button>
                <button
                  type="button"
                  onClick={() => setDateType('approximate')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                    dateType === 'approximate'
                      ? 'bg-amber-900 text-white border-amber-900'
                      : 'bg-white text-stone-600 border-stone-300'
                  }`}
                >
                  Approximate / Month
                </button>
              </div>

              {dateType === 'exact' ? (
                <input
                  type="date"
                  value={dateValue}
                  onChange={(e) => setDateValue(e.target.value)}
                  className="w-full text-sm bg-white border border-stone-300 rounded-xl px-3 py-2 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-900"
                />
              ) : (
                <input
                  type="text"
                  placeholder="e.g. Early June / Around June 10-15"
                  value={dateValue}
                  onChange={(e) => setDateValue(e.target.value)}
                  className="w-full text-sm bg-white border border-stone-300 rounded-xl px-3 py-2 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-900"
                />
              )}
            </div>

            {/* Group Size & Pickup City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-stone-400" />
                  <span>Number of People & Vehicle Type</span>
                </label>
                <select
                  value={numberOfPeople}
                  onChange={(e) => setNumberOfPeople(e.target.value)}
                  className="w-full text-sm bg-white border border-stone-300 rounded-xl px-3 py-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-900"
                >
                  <option value="1-3 adults (with Anaka in personal car)">1–3 adults (with Anaka in personal car)</option>
                  <option value="4-7 adults (Spacious Minivan)">4–7 adults (Spacious Minivan)</option>
                  <option value="8-19 adults (Mercedes Sprinter Minibus)">8–19 adults (Mercedes Sprinter)</option>
                  <option value="20-45 adults (Pre-formed Group Tour Coach)">20–45 adults (Pre-formed Group Coach)</option>
                </select>
                <p className="text-[10px] text-stone-500">
                  *With Anaka: strictly 1–3 adults. Larger pre-assembled groups use team Sprinters or coaches.
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  <span>Pickup Location</span>
                </label>
                <select
                  value={pickupCity}
                  onChange={(e) => setPickupCity(e.target.value)}
                  className="w-full text-sm bg-white border border-stone-300 rounded-xl px-3 py-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-900"
                >
                  <option value="Tbilisi Center / Hotel">Tbilisi Center / Hotel</option>
                  <option value="Tbilisi Airport (TBS) Pickup">Tbilisi Airport (TBS) Pickup</option>
                  <option value="Kutaisi / Kutaisi Airport (KUT)">Kutaisi / Kutaisi Airport</option>
                  <option value="Batumi Black Sea">Batumi Black Sea</option>
                  <option value="Other Area in Georgia">Other Area in Georgia</option>
                </select>
              </div>
            </div>

            {/* Winery Style Preference */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
                <Wine className="w-3.5 h-3.5 text-amber-800" />
                <span>Winery Style Preference (Homemade vs. Factory Estate)</span>
              </label>
              <select
                value={wineryPreference}
                onChange={(e) => setWineryPreference(e.target.value)}
                className="w-full text-sm bg-white border border-stone-300 rounded-xl px-3 py-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-900"
              >
                <option value="Blend of Both (Fancy Estate + Authentic Family Marani)">Blend of Both (Fancy Estate + Authentic Family Marani)</option>
                <option value="Authentic Homemade Family Marani (Raw Qvevri in Village)">Authentic Homemade Family Marani (Raw Qvevri in Village)</option>
                <option value="Fancy Factory & Palace Estate (Château Mukhrani / Tsinandali)">Fancy Factory & Palace Estate (Château Mukhrani / Tsinandali)</option>
                <option value="No wine stops / Scenic nature & monasteries only">No wine stops / Scenic nature & monasteries only</option>
              </select>
            </div>

            {/* Number of Tours & Multi-Tour Sale */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-stone-700">
                  Number of Tours Planned (Multi-Tour Sale Applied)
                </label>
                <span className="text-[10px] text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded-full">
                  Up to 20% OFF
                </span>
              </div>
              <select
                value={numberOfTours}
                onChange={(e) => setNumberOfTours(e.target.value)}
                className="w-full text-sm bg-white border border-stone-300 rounded-xl px-3 py-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-900"
              >
                <option value="1 tour (Regular Price)">1 tour (Regular Price)</option>
                <option value="2 tours (2nd tour is 10% SALE)">2 tours (2nd tour is 10% SALE)</option>
                <option value="3 tours (2nd 10%, 3rd 15% SALE)">3 tours (2nd 10%, 3rd 15% SALE)</option>
                <option value="4+ tours (4th tour is 20% SALE)">4+ tours (4th tour is 20% SALE)</option>
              </select>
            </div>

            {/* Locations to see */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-stone-400" />
                <span>Locations & Sights You Wish to Visit</span>
              </label>
              <input
                type="text"
                value={locationsToSee}
                onChange={(e) => setLocationsToSee(e.target.value)}
                placeholder="e.g. Kakheti (Nino bio wine or Irma supra), Kazbegi, Gori ($250), Mtskheta combo ($400)"
                className="w-full text-sm bg-white border border-stone-300 rounded-xl px-3 py-2 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-900"
              />
            </div>

            {/* Number of stops & style */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-700">
                Number & Pace of Sightseeing Stops
              </label>
              <select
                value={stopPreference}
                onChange={(e) => setStopPreference(e.target.value)}
                className="w-full text-sm bg-white border border-stone-300 rounded-xl px-3 py-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-900"
              >
                <option value="1-2 deep, relaxed stops (unhurried meals & walks)">1-2 deep, relaxed stops (unhurried meals & walks)</option>
                <option value="3-4 balanced sightseeing stops (standard day trip)">3-4 balanced sightseeing stops (standard day trip)</option>
                <option value="5+ full day multi-stop exploration">5+ full day multi-stop exploration</option>
                <option value="Scenic drive with quick viewpoint photo pauses only">Scenic drive with quick viewpoint photo pauses only</option>
              </select>
            </div>

            {/* Children & Pets details */}
            <div className="pt-2 border-t border-stone-200/80 space-y-3">
              <div className="flex flex-col sm:flex-row gap-4 text-xs text-stone-700">
                
                {/* Children checkbox */}
                <div className="flex-1 space-y-1.5">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={hasChildren}
                      onChange={(e) => setHasChildren(e.target.checked)}
                      className="rounded border-stone-300 text-amber-900 focus:ring-amber-900 w-4 h-4"
                    />
                    <span className="flex items-center gap-1 font-semibold">
                      <Baby className="w-3.5 h-3.5 text-stone-500" />
                      <span>Traveling with Children?</span>
                    </span>
                  </label>
                  {hasChildren && (
                    <input
                      type="text"
                      placeholder="Ages & child car seat needs"
                      value={childDetails}
                      onChange={(e) => setChildDetails(e.target.value)}
                      className="w-full text-xs bg-white border border-stone-300 rounded-lg p-2 text-stone-800"
                    />
                  )}
                </div>

                {/* Pets checkbox */}
                <div className="flex-1 space-y-1.5">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={hasPets}
                      onChange={(e) => setHasPets(e.target.checked)}
                      className="rounded border-stone-300 text-amber-900 focus:ring-amber-900 w-4 h-4"
                    />
                    <span className="flex items-center gap-1 font-semibold">
                      <Dog className="w-3.5 h-3.5 text-stone-500" />
                      <span>Traveling with Pets?</span>
                    </span>
                  </label>
                  {hasPets && (
                    <input
                      type="text"
                      placeholder="Pet type, carrier, size"
                      value={petDetails}
                      onChange={(e) => setPetDetails(e.target.value)}
                      className="w-full text-xs bg-white border border-stone-300 rounded-lg p-2 text-stone-800"
                    />
                  )}
                </div>

              </div>
            </div>

            {/* Special Add-on Options */}
            <div className="pt-2 border-t border-stone-200/80 space-y-2.5 text-xs text-stone-700">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={wantPhotoSession}
                  onChange={(e) => setWantPhotoSession(e.target.checked)}
                  className="rounded border-stone-300 text-amber-900 focus:ring-amber-900 w-4 h-4"
                />
                <span>
                  <strong>Add Anaka’s Casual Canon Photo Session:</strong> (+$30 USD/day · candid travel memories)
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={wantMountainExpedition}
                  onChange={(e) => setWantMountainExpedition(e.target.checked)}
                  className="rounded border-stone-300 text-amber-900 focus:ring-amber-900 w-4 h-4"
                />
                <span>
                  <strong>Include 4x4 Mountain / Hiking Expeditions:</strong> ($400-$1,200 · Driver destined by route & terrain)
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={wantDestinyMatrix}
                  onChange={(e) => setWantDestinyMatrix(e.target.checked)}
                  className="rounded border-stone-300 text-emerald-800 focus:ring-emerald-800 w-4 h-4"
                />
                <span>
                  <strong>Add Destiny Matrix / Tarot Reading in the Woods:</strong> ($150 USD Special Sale · Regular $230 USD)
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={wantCashbackInfo}
                  onChange={(e) => setWantCashbackInfo(e.target.checked)}
                  className="rounded border-stone-300 text-emerald-800 focus:ring-emerald-800 w-4 h-4"
                />
                <span>
                  <strong>Bring a Friend Referral Cashback:</strong> (I'm bringing friends and want to discuss the 10%-20% Cashback)
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={wantArmeniaCrossBorder}
                  onChange={(e) => setWantArmeniaCrossBorder(e.target.checked)}
                  className="rounded border-stone-300 text-amber-900 focus:ring-amber-900 w-4 h-4"
                />
                <span>
                  <strong>Armenia Cross-Border Extension:</strong> (Visiting Lori/Haghpat, additional border transit fee)
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={needLicensedGuide}
                  onChange={(e) => setNeedLicensedGuide(e.target.checked)}
                  className="rounded border-stone-300 text-amber-900 focus:ring-amber-900 w-4 h-4"
                />
                <span>
                  <strong>Request Optional Licensed Cultural Guide ($60 - $200 USD):</strong> For in-depth history lectures.
                </span>
              </label>
            </div>

            {/* Additional needs or questions */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-700">
                Additional Needs, Dietary Preferences or Specific Questions
              </label>
              <textarea
                value={additionalQuestions}
                onChange={(e) => setAdditionalQuestions(e.target.value)}
                placeholder="e.g. Vegetarian food stops, photography enthusiast, luggage size, specific winery visit..."
                rows={2}
                className="w-full text-sm bg-white border border-stone-300 rounded-xl p-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-900 resize-none"
              />
            </div>

          </div>

          {/* Right Column: Live WhatsApp Message Preview & Send */}
          <div className="lg:col-span-5 bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-6 lg:sticky lg:top-28 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                WhatsApp Live Preview
              </span>
              <span className="text-[11px] text-emerald-800 font-mono font-medium">
                {WHATSAPP_DISPLAY}
              </span>
            </div>

            <div className="bg-[#EFEAE2] p-4 rounded-2xl border border-[#D9D3C7] shadow-inner font-sans text-xs text-stone-900 whitespace-pre-wrap leading-relaxed max-h-[380px] overflow-y-auto">
              {generatedMessage}
            </div>

            <div className="space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Custom Inquiry to Anaka</span>
              </a>

              <p className="text-[11px] text-stone-500 text-center leading-snug">
                Clicking opens WhatsApp directly with your message pre-filled. Anaka replies promptly with vehicle availability and confirmed pricing.
              </p>
            </div>

            {/* Inclusivity reminder */}
            <div className="bg-amber-50/70 border border-amber-200/60 p-3 rounded-xl text-[11px] text-stone-600 flex items-center gap-2">
              <span className="text-base shrink-0">🏳️‍🌈</span>
              <span>
                <strong>Safe & Welcoming:</strong> No racism or homophobia. LGBTQ+ & solo female travelers warmly welcomed.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
