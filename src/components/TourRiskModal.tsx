import React, { useEffect } from 'react';
import { TourRiskInfo } from '../types';
import { WHATSAPP_DISPLAY, buildRiskInquiryLink } from '../data/toursData';
import { 
  X, 
  AlertTriangle, 
  CloudSnow, 
  ThermometerSnowflake, 
  Compass, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle,
  Footprints,
  Info
} from 'lucide-react';

interface TourRiskModalProps {
  isOpen: boolean;
  onClose: () => void;
  riskInfo: TourRiskInfo | null;
}

export const TourRiskModal: React.FC<TourRiskModalProps> = ({
  isOpen,
  onClose,
  riskInfo
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !riskInfo) return null;

  const inquiryUrl = buildRiskInquiryLink(riskInfo.destinationName);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/85 backdrop-blur-sm overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="risk-modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Ultra-Clear Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-stone-900 font-bold text-xs shadow-xl hover:bg-stone-100 active:scale-95 transition-all cursor-pointer border border-stone-300"
          aria-label="Close road risks window"
        >
          <X className="w-4 h-4 text-stone-900 stroke-[2.5]" />
          <span>Close ✕</span>
        </button>

        {/* Header Strip with Caution Theme */}
        <div className="bg-amber-900 text-white p-6 sm:p-7 pr-24 relative">
          <div className="flex items-center gap-2 text-amber-200 text-xs font-bold uppercase tracking-wider mb-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-300" />
            <span>Honest Mountain & Road Realities</span>
          </div>

          <h3 id="risk-modal-title" className="text-2xl sm:text-3xl font-bold font-serif-heading text-white">
            {riskInfo.destinationName}
          </h3>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="bg-amber-950/60 border border-amber-400/30 text-amber-100 px-3 py-1 rounded-full font-medium flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-amber-300" />
              <span>{riskInfo.roadDifficulty}</span>
            </span>
            <span className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-[11px]">
              {riskInfo.terrainType}
            </span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-7 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* High Priority Caution Card: Snow, Mud & Getting Stuck Risk */}
          <div className="bg-amber-50 border-2 border-amber-300/80 rounded-2xl p-4 sm:p-5 text-amber-950 space-y-2.5">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-500 text-stone-950 shrink-0 mt-0.5">
                <CloudSnow className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold uppercase tracking-wide text-amber-950">
                  Snow, Weather Traps & Risk of Getting Stuck
                </h4>
                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-normal">
                  {riskInfo.gettingStuckRisk}
                </p>
              </div>
            </div>
            
            <div className="mt-2 pt-2.5 border-t border-amber-200 text-[11px] text-amber-900 flex items-center gap-2">
              <Info className="w-4 h-4 text-amber-800 shrink-0" />
              <span>
                <strong>Crucial Rule:</strong> If high mountain snow or police road closures delay our return, safety always dictates waiting for the road crews to clear the way. Never book tight same-day flights!
              </span>
            </div>
          </div>

          {/* Unpredictable Weather Shifts */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 sm:p-5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-900 uppercase tracking-wider">
              <ThermometerSnowflake className="w-4 h-4 text-blue-600" />
              <span>Unpredicted Weather & Temperature Swings</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {riskInfo.weatherAlert}
            </p>
            {riskInfo.seasonalityWarning && (
              <p className="text-xs text-stone-500 pt-1 border-t border-stone-200/60">
                <strong>Seasonal note:</strong> {riskInfo.seasonalityWarning}
              </p>
            )}
          </div>

          {/* What to Pack & Gear */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 sm:p-5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-900 uppercase tracking-wider">
              <Footprints className="w-4 h-4 text-stone-700" />
              <span>What You Must Pack & Wear For This Destination</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              {riskInfo.essentialGear.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white p-2 rounded-xl border border-stone-200/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Anaka & Nino's Safety Protocol */}
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 sm:p-5 text-xs text-emerald-950 space-y-2">
            <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-emerald-900">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Our Safety Guarantee & Free Adaptation Policy</span>
            </div>
            <p className="text-stone-700 leading-relaxed text-xs">
              {riskInfo.anakaSafetyAdvice}
            </p>
            <p className="text-[11px] text-emerald-800">
              If unexpected blizzards, mudslides, or rock clearance close a pass on the morning of your trip, you will never be forced into a dangerous situation. We either modify the route to a safe beautiful alternative or reschedule without penalty.
            </p>
          </div>

        </div>

        {/* Modal Footer with Direct WhatsApp Connection */}
        <div className="bg-stone-50 p-5 sm:p-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-stone-600 text-center sm:text-left">
            <span>Direct WhatsApp Help: </span>
            <strong className="text-stone-900 font-mono">{WHATSAPP_DISPLAY}</strong>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-bold text-stone-800 bg-stone-200 hover:bg-stone-300 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <X className="w-4 h-4 text-stone-700 stroke-[2.5]" />
              <span>Close Window</span>
            </button>
            <a
              href={inquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask About Today’s Road Conditions</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
