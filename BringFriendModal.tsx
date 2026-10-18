import React, { useEffect } from 'react';
import { WHATSAPP_DISPLAY, buildWhatsAppLink } from '../data/toursData';
import { X, Users, Gift, MessageCircle, CheckCircle2, Sparkles, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

interface BringFriendModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BringFriendModal: React.FC<BringFriendModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cashbackWhatsAppMsg = "Hello Anaka! I am planning to bring a friend / group of friends for tours in Georgia, and I'd like to discuss the 10%-20% Cashback reward before booking!";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cashback-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-sm p-3 sm:p-6 flex items-center justify-center animate-in fade-in zoom-in-95 duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-stone-900 font-bold text-xs shadow-xl hover:bg-stone-100 active:scale-95 transition-all cursor-pointer border border-stone-300"
          aria-label="Close cashback window"
        >
          <X className="w-4 h-4 text-stone-900 stroke-[2.5]" />
          <span>Close ✕</span>
        </button>

        {/* Header Strip */}
        <div className="bg-gradient-to-br from-amber-900 via-amber-800 to-emerald-950 text-white p-6 sm:p-8 pr-24 relative">
          <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Gift className="w-4 h-4 text-amber-300" />
            <span>Exclusive Referral Reward Program</span>
          </div>

          <h3 id="cashback-modal-title" className="text-2xl sm:text-3xl font-bold font-serif-heading text-white">
            Bring a Friend & Earn 10% to 20% Cashback
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-stone-200 max-w-lg leading-relaxed">
            Travel is richer when shared with good people. When you recommend Tours with Anaka and bring fellow travelers, you receive direct cash back in your pocket!
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-xs text-stone-700 leading-relaxed">
          
          {/* Cashback Tier Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Tier 1: 1 Friend */}
            <div className="bg-amber-50/90 border-2 border-amber-300/80 rounded-2xl p-5 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded-md">
                    Bring 1 Friend
                  </span>
                  <span className="text-2xl font-black text-amber-950 font-serif-heading">
                    10%
                  </span>
                </div>
                <h4 className="text-base font-bold text-stone-900 mt-2">
                  10% Direct Cashback
                </h4>
                <p className="text-stone-600 mt-1 text-xs">
                  Bring 1 friend with you on any private tour or recommend a friend who books with Anaka.
                </p>
              </div>

              <div className="pt-3 border-t border-amber-200/80 text-[11px] text-amber-950 font-medium">
                Example: On a $300 Kazbegi tour booking, you get <strong>$30 USD cashback</strong>!
              </div>
            </div>

            {/* Tier 2: Multiple Friends */}
            <div className="bg-emerald-50/90 border-2 border-emerald-400/80 rounded-2xl p-5 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 bg-emerald-200/80 px-2 py-0.5 rounded-md">
                    Multiple People (2+)
                  </span>
                  <span className="text-2xl font-black text-emerald-950 font-serif-heading">
                    20%
                  </span>
                </div>
                <h4 className="text-base font-bold text-stone-900 mt-2">
                  20% Total Cashback
                </h4>
                <p className="text-stone-600 mt-1 text-xs">
                  Bring multiple friends or a pre-assembled group. You receive a generous <strong>20% cashback from all of them</strong>!
                </p>
              </div>

              <div className="pt-3 border-t border-emerald-200/80 text-[11px] text-emerald-950 font-medium">
                Example: On $900 in group bookings, you receive <strong>$180 USD cashback</strong>!
              </div>
            </div>

          </div>

          {/* Important Rule: Talk Before Booking */}
          <div className="bg-amber-100/70 border border-amber-300 rounded-2xl p-4 sm:p-5 text-amber-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm text-amber-900">
              <AlertCircle className="w-5 h-5 text-amber-800 shrink-0" />
              <span>Important: Cashback Must Be Discussed Before Booking</span>
            </div>
            <p className="text-xs leading-relaxed text-amber-950/90">
              To apply the cashback correctly to your payment or cash refund, <strong>the cashback situation must be talked about and agreed upon with Anaka in advance before the booking is confirmed</strong>. Simply mention on WhatsApp that you are bringing friends so we can log your reward upfront!
            </p>
          </div>

          {/* Multi-Tour Sale Combination */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 sm:p-5 space-y-2.5">
            <div className="flex items-center gap-2 font-bold text-stone-900 text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-800" />
              <span>Can You Combine Cashback with Multi-Tour Sales?</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              When booking multiple private tours, you already receive our consecutive tour sale discounts:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                <span className="text-stone-500 block text-[10px]">1st Tour</span>
                <strong className="text-stone-900">Regular</strong>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-emerald-200 text-emerald-900">
                <span className="text-stone-500 block text-[10px]">2nd Tour</span>
                <strong className="font-bold">10% OFF</strong>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-emerald-200 text-emerald-900">
                <span className="text-stone-500 block text-[10px]">3rd Tour</span>
                <strong className="font-bold">15% OFF</strong>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-emerald-200 text-emerald-900">
                <span className="text-stone-500 block text-[10px]">4th Tour</span>
                <strong className="font-bold">20% OFF</strong>
              </div>
            </div>
          </div>

          {/* How Cashback is Paid */}
          <div className="bg-white border border-stone-200 rounded-2xl p-4 space-y-2 text-xs text-stone-600">
            <div className="flex items-center gap-2 font-bold text-stone-900">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>How You Receive Your Cashback</span>
            </div>
            <p>
              Cashback can be given as a direct deduction from your tour balance, cash in hand in Georgia (USD or GEL), or paid to your local/international transfer method once your friends' tours take place.
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-stone-50 p-5 sm:p-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-stone-600 text-center sm:text-left">
            <span>Talk to Anaka: </span>
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
              href={buildWhatsAppLink(cashbackWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors shadow-xs whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss Cashback on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
