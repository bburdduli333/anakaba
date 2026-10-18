import React, { useState, useEffect } from 'react';
import { NINO_BIO, WHATSAPP_DISPLAY, buildWhatsAppLink } from '../data/toursData';
import { X, ExternalLink, Sparkles, Compass, Wine, Car, Footprints, ShieldAlert, MessageCircle, Heart, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

interface NinoBioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NinoBioModal: React.FC<NinoBioModalProps> = ({ isOpen, onClose }) => {
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const ninoWhatsAppMsg = "Hello Anaka! I read about Nino Paichadze and saw her cottage and vineyard photos. I'd love to ask about booking her bio wine cottage stay ($875) or 4x4 hiking:";

  const activePhoto = NINO_BIO.gallery[activePhotoIdx];

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl border border-stone-200 shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-900/40 shadow-xs shrink-0 bg-stone-200">
              <img
                src={NINO_BIO.mainPhoto}
                alt="Nino Paichadze"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-stone-900 font-serif-heading">
                  {NINO_BIO.name}
                </h2>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100/90 px-2 py-0.5 rounded-full">
                  Partner
                </span>
              </div>
              <p className="text-[11px] text-stone-500">
                Lead 4x4 Off-Road Driver · Trail Guide · Fermio Artisan Bio Winemaker
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold text-xs transition-colors cursor-pointer"
            aria-label="Close modal window"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
            <span>Close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-stone-700 leading-relaxed">
          
          {/* Main Visual Feature: Featured Photo & Interactive Gallery Thumbnails */}
          <div className="space-y-3">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-stone-900 group">
              <img
                src={activePhoto.url}
                alt={activePhoto.title}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                      Photo {activePhotoIdx + 1} of {NINO_BIO.gallery.length}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold font-serif-heading">
                      {activePhoto.title}
                    </h3>
                    <p className="text-xs text-stone-200 max-w-lg mt-0.5">
                      {activePhoto.caption}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="shrink-0 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-xs rounded-full text-white transition-colors"
                    title="View full screen"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Gallery Thumbnails Strip (6 Real Photos) */}
            <div className="grid grid-cols-6 gap-2">
              {NINO_BIO.gallery.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activePhotoIdx === idx
                      ? 'border-amber-900 ring-2 ring-amber-900/20 scale-102'
                      : 'border-stone-200 opacity-70 hover:opacity-100'
                  }`}
                  title={photo.title}
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Intro Story */}
          <div className="bg-amber-50/70 border border-amber-200/60 p-4 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
              <Sparkles className="w-4 h-4 text-amber-800" />
              <span>Winemaker, Mountain Explorer & Anaka's Trusted Partner</span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              Nino is a vital force behind Tours with Anaka. As an independent artisan winemaker in Kakheti and fearless off-road driver, she creates chemical-free natural bio wines and welcomes travelers to stay in her secluded wooden cottage right amidst the grapevines. She also leads our wild 4x4 mountain expeditions across the Caucasus.
            </p>
          </div>

          {/* Featured Offer 1: Bio Wine Wooden Cottage Overnight Package ($875 USD) */}
          <div className="bg-white border-2 border-amber-900/30 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                  Signature Vineyard Escape
                </span>
                <h4 className="text-base font-bold text-stone-900 font-serif-heading mt-1">
                  Nino’s Kakheti Bio Wine, Wooden Cottage & Cuisine
                </h4>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-lg font-bold text-amber-950 font-serif-heading block">
                  $875 USD
                </span>
                <span className="text-[10px] text-stone-500">
                  Overnight package (includes private transfer)
                </span>
              </div>
            </div>

            <p className="text-[11px] text-stone-600 leading-relaxed">
              {NINO_BIO.cottageFeatures}. Spend the evening unwinding in her charming wooden cottage, soak in the candlelit clawfoot tub under the stairs, and wake up to mountain views over the vines.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-stone-700 bg-stone-50 p-3 rounded-xl border border-stone-200/70">
              <div className="flex items-center gap-2">
                <span className="text-emerald-700 font-bold">✓</span>
                <span><strong>1 Bottle Included:</strong> Nino's artisan natural bio wine</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-700 font-bold">✓</span>
                <span><strong>1 Night Stay:</strong> Private wooden cottage in vineyard</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-700 font-bold">✓</span>
                <span><strong>Georgian Cuisine:</strong> Fresh authentic home meals included</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-700 font-bold">✓</span>
                <span><strong>Venakhi Care:</strong> Hands-on vineyard tending experience</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <a
                href={NINO_BIO.fermioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-900 hover:underline"
              >
                <span>View Nino on Fermio.ge</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={buildWhatsAppLink("Hello Anaka! I would love to book Nino Paichadze's Bio Wine & Wooden Cottage Package ($875 USD) in Kakheti:")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-2xs"
              >
                <MessageCircle className="w-3 h-3" />
                <span>Book Cottage on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Key Roles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Role 1: 4x4 Expedition & On-Foot Trail Guide */}
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-xs">
                <Car className="w-4 h-4 text-emerald-700" />
                <span>2021 Ford Ranger 4x4 Beast</span>
              </div>
              <p className="text-[11px] text-stone-600">
                Nino operates a specialized 2021 Ford Ranger with full off-road package advantages, capable of conquering remote volcanic plateaus, glacial valleys, river crossings, and high mountain passes.
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 font-semibold pt-1">
                <Footprints className="w-3.5 h-3.5" />
                <span>On-Foot Trail Leader (She hikes with you!)</span>
              </div>
            </div>

            {/* Role 2: Bio Winemaker on Fermio */}
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-xs">
                <Wine className="w-4 h-4 text-amber-800" />
                <span>Artisan Bio Wine & Qvevri</span>
              </div>
              <p className="text-[11px] text-stone-600">
                Featured on Fermio.ge: natural bio wine made in underground clay Qvevri with zero synthetic additives. Clean fermentation and traditional Kakhetian craftsmanship.
              </p>
              <div className="text-[11px] text-stone-500 pt-1">
                Expeditions: <strong>$400 – $1,200 USD</strong>
              </div>
            </div>

          </div>

          {/* Guiding Style Transparency */}
          <div className="bg-stone-50 border border-stone-200 p-4 rounded-2xl space-y-1.5">
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-stone-700" />
              <span>Nino’s Guiding Style</span>
            </h4>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Please note: Nino is an authentic mountain adventurer and trail guide who leads and accompanies you on foot along hiking paths—<strong>she is not an academic historian guide</strong>. If you are looking for someone who navigates wild trails safely, spots secret viewpoints, and shares real Georgian life, Nino is extraordinary.
            </p>
          </div>

          {/* Special Destiny Matrix & Tarot Reading Offer */}
          <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-2xl space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="font-bold text-emerald-950 text-xs flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-emerald-700" />
                <span>Special Sale Offer: Destiny Matrix & Tarot Reading in the Woods</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-stone-400 line-through mr-1">$230</span>
                <span className="text-xs font-bold text-emerald-900 bg-white px-2 py-0.5 rounded-md border border-emerald-200">
                  $150 USD
                </span>
              </div>
            </div>
            <p className="text-[11px] text-stone-600 leading-relaxed">
              Seeking deeper mental clarity, karmic understanding, or soulful alignment during your trip? Nino offers a 1-on-1 personal Destiny Matrix calculation and intuitive Tarot reading nestled in the quiet woods that can be seamlessly added to your cottage stay or hiking expedition.
            </p>
          </div>

          {/* Nature & Expedition Safety Notice */}
          <div className="bg-stone-100 p-4 rounded-2xl space-y-1 border border-stone-200 text-stone-600 text-[11px]">
            <div className="flex items-center gap-1.5 font-bold text-stone-900 text-xs">
              <ShieldAlert className="w-4 h-4 text-red-600" />
              <span>Mountain Safety Warning:</span>
            </div>
            <p>
              Georgian mountain weather is unpredictable. For your safety, travelers must strictly follow Nino’s instructions regarding trail routes, departure times, and weather warnings.
            </p>
          </div>

        </div>

        {/* Footer Bar */}
        <div className="px-6 py-4 border-t border-stone-200 bg-stone-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-stone-500">
            Direct coordination on WhatsApp: {WHATSAPP_DISPLAY}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
            >
              Close
            </button>
            <a
              href={buildWhatsAppLink(ninoWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Book with Nino on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-60 bg-stone-950/95 flex flex-col items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="w-full max-w-4xl flex items-center justify-between text-white text-xs mb-3"
            onClick={(e) => e.stopPropagation()}
          >
            <span>{activePhoto.title} ({activePhotoIdx + 1}/{NINO_BIO.gallery.length})</span>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-1 hover:bg-white/10 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div
            className="relative max-h-[75vh] max-w-4xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhotoIdx((prev) => (prev - 1 + NINO_BIO.gallery.length) % NINO_BIO.gallery.length)}
              className="absolute left-2 z-10 p-2 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <img
              src={activePhoto.url}
              alt={activePhoto.title}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
            />
            <button
              onClick={() => setActivePhotoIdx((prev) => (prev + 1) % NINO_BIO.gallery.length)}
              className="absolute right-2 z-10 p-2 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <p
            className="text-stone-300 text-xs mt-3 max-w-xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {activePhoto.caption}
          </p>
        </div>
      )}
    </div>
  );
};
