import React from 'react';
import { Wine, Mountain, Car, Users, Heart, Compass, ShieldCheck, Sparkles, Gift, Camera, Info } from 'lucide-react';

export type SectionId =
  | 'wine' | 'hiking' | 'tours' | 'companion' | 'about'
  | 'network' | 'rules' | 'planner' | 'transparency';

interface HomeTilesProps {
  onOpen: (id: SectionId) => void;
  onOpenBringFriend: () => void;
  onOpenGallery: () => void;
}

interface Tile {
  key: string;
  title: string;
  text: string;
  icon: React.ReactNode;
  action: () => void;
  style: string;
}

export const HomeTiles: React.FC<HomeTilesProps> = ({ onOpen, onOpenBringFriend, onOpenGallery }) => {
  const big = 'bg-amber-50 border-amber-300 hover:border-amber-500 text-stone-900';
  const normal = 'bg-white border-stone-200 hover:border-stone-400 text-stone-900';
  const dark = 'bg-stone-900 border-stone-800 hover:border-amber-400 text-white';

  const tiles: Tile[] = [
    { key: 'wine', title: 'Kakheti Wine & Cottage', text: 'Our specialty: bio wine, Nino’s wooden cottage, Irma’s supra garden', icon: <Wine className="w-6 h-6 text-amber-800" />, action: () => onOpen('wine'), style: big },
    { key: 'hiking', title: '4x4 Hiking with Nino', text: 'Mountains, lakes and canyons in a Ford Ranger', icon: <Mountain className="w-6 h-6 text-amber-300" />, action: () => onOpen('hiking'), style: dark },
    { key: 'tours', title: 'Day Trips', text: 'Kazbegi, Mtskheta, Gori, Borjomi, Vardzia', icon: <Car className="w-6 h-6 text-stone-700" />, action: () => onOpen('tours'), style: normal },
    { key: 'companion', title: 'Companion & Photos', text: 'Concerts, bars and city nights, plus a casual photo session', icon: <Camera className="w-6 h-6 text-stone-700" />, action: () => onOpen('companion'), style: normal },
    { key: 'planner', title: 'Plan My Trip', text: 'Build your message and send it to Anaka on WhatsApp', icon: <Sparkles className="w-6 h-6 text-emerald-700" />, action: () => onOpen('planner'), style: normal },
    { key: 'friend', title: 'Bring a Friend', text: '10% to 20% cashback, plus discounts for several tours', icon: <Gift className="w-6 h-6 text-emerald-700" />, action: onOpenBringFriend, style: 'bg-emerald-50 border-emerald-300 hover:border-emerald-500 text-stone-900' },
    { key: 'about', title: 'About Anaka', text: 'My story, my car, my music and my values', icon: <Heart className="w-6 h-6 text-rose-700" />, action: () => onOpen('about'), style: normal },
    { key: 'gallery', title: 'Photo Gallery', text: 'Photos from the road', icon: <Compass className="w-6 h-6 text-stone-700" />, action: onOpenGallery, style: normal },
    { key: 'network', title: 'Drivers & Guides', text: 'Who drives you, and how guides work', icon: <Users className="w-6 h-6 text-stone-700" />, action: () => onOpen('network'), style: normal },
    { key: 'rules', title: 'House Rules', text: 'Payment, late notice, car care and respect', icon: <ShieldCheck className="w-6 h-6 text-stone-700" />, action: () => onOpen('rules'), style: normal },
    { key: 'transparency', title: 'Prices & Booking', text: 'How quotes and payment work', icon: <Info className="w-6 h-6 text-stone-700" />, action: () => onOpen('transparency'), style: normal },
  ];

  return (
    <section id="explore" className="py-10 md:py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-stone-900">What are you looking for?</h2>
          <p className="mt-2 text-sm text-stone-600">Tap a card to see details. Starting prices only, final quote on WhatsApp.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tiles.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={t.action}
              className={`text-left rounded-2xl border-2 p-5 transition-all hover:shadow-md active:scale-[0.99] cursor-pointer flex items-start gap-4 ${t.style}`}
            >
              <span className="shrink-0 mt-0.5">{t.icon}</span>
              <span>
                <span className="block text-base font-bold leading-snug">{t.title}</span>
                <span className="block mt-1 text-xs opacity-80 leading-relaxed">{t.text}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
