import React, { useState, useEffect, useCallback } from 'react';
import { Currency, TourRiskInfo } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HomeTiles, SectionId } from './components/HomeTiles';
import { SectionModal } from './components/SectionModal';
import { SignatureWineSection } from './components/SignatureWineSection';
import { HikingExpeditionSection } from './components/HikingExpeditionSection';
import { ToursSection } from './components/ToursSection';
import { CompanionServiceSection } from './components/CompanionServiceSection';
import { AboutSection } from './components/AboutSection';
import { LocalNetworkSection } from './components/LocalNetworkSection';
import { RulesSection } from './components/RulesSection';
import { TripPlannerSection } from './components/TripPlannerSection';
import { TransparencyNotice } from './components/TransparencyNotice';
import { Footer } from './components/Footer';
import { BusinessTrackerModal } from './components/BusinessTrackerModal';
import { OwnerGuideModal } from './components/OwnerGuideModal';
import { NinoBioModal } from './components/NinoBioModal';
import { PhotoGalleryModal } from './components/PhotoGalleryModal';
import { TourRiskModal } from './components/TourRiskModal';
import { BringFriendModal } from './components/BringFriendModal';
import { buildWhatsAppLink } from './data/toursData';
import { MessageCircle } from 'lucide-react';

// Which popup each old "#link" in the menu/footer opens
const ANCHOR_TO_SECTION: Record<string, SectionId> = {
  'wine-special': 'wine',
  hiking: 'hiking',
  tours: 'tours',
  companion: 'companion',
  about: 'about',
  network: 'network',
  rules: 'rules',
  planner: 'planner',
  transparency: 'transparency',
};

const SECTION_TITLES: Record<SectionId, string> = {
  wine: 'Kakheti Wine & Cottage',
  hiking: '4x4 Hiking with Nino',
  tours: 'Day Trips',
  companion: 'Companion & Photo Session',
  about: 'About Anaka',
  network: 'Drivers & Guides',
  rules: 'House Rules',
  planner: 'Plan My Trip',
  transparency: 'Prices & Booking',
};

export default function App() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [openSection, setOpenSection] = useState<SectionId | null>(null);
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isNinoBioOpen, setIsNinoBioOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isBringFriendOpen, setIsBringFriendOpen] = useState(false);
  const [activeRiskInfo, setActiveRiskInfo] = useState<TourRiskInfo | null>(null);
  const [isRiskModalOpen, setIsRiskModalOpen] = useState(false);

  const handleOpenRisks = (riskInfo: TourRiskInfo) => {
    setActiveRiskInfo(riskInfo);
    setIsRiskModalOpen(true);
  };

  const closeSection = useCallback(() => setOpenSection(null), []);

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Menu and footer links like href="#hiking" open the matching popup instead of scrolling
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;
      const id = (link.getAttribute('href') || '').slice(1);
      if (id === 'hero') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const section = ANCHOR_TO_SECTION[id];
      if (section) {
        e.preventDefault();
        setOpenSection(section);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const anotherPopupOpen = isNinoBioOpen || isGalleryOpen || isBringFriendOpen || isRiskModalOpen || isTrackerOpen || isGuideOpen;

  const renderSection = (id: SectionId) => {
    switch (id) {
      case 'wine':
        return <SignatureWineSection currency={currency} onOpenNinoBio={() => setIsNinoBioOpen(true)} onOpenRisks={handleOpenRisks} />;
      case 'hiking':
        return <HikingExpeditionSection currency={currency} onOpenNinoBio={() => setIsNinoBioOpen(true)} onOpenRisks={handleOpenRisks} />;
      case 'tours':
        return (
          <ToursSection
            currency={currency}
            onSelectForPlanner={() => setOpenSection('planner')}
            onOpenRisks={handleOpenRisks}
            onOpenBringFriend={() => setIsBringFriendOpen(true)}
          />
        );
      case 'companion':
        return <CompanionServiceSection currency={currency} />;
      case 'about':
        return <AboutSection onOpenGallery={() => setIsGalleryOpen(true)} />;
      case 'network':
        return <LocalNetworkSection />;
      case 'rules':
        return <RulesSection />;
      case 'planner':
        return <TripPlannerSection />;
      case 'transparency':
        return <TransparencyNotice />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-stone-900 flex flex-col font-sans">
      <Navbar
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenTracker={() => setIsTrackerOpen(true)}
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenGallery={() => setIsGalleryOpen(true)}
      />

      <main className="flex-1">
        <Hero
          onExploreClick={() => scrollToId('explore')}
          onAboutClick={() => setOpenSection('about')}
          onOpenBringFriend={() => setIsBringFriendOpen(true)}
        />
        <HomeTiles
          onOpen={setOpenSection}
          onOpenBringFriend={() => setIsBringFriendOpen(true)}
          onOpenGallery={() => setIsGalleryOpen(true)}
        />
      </main>

      <Footer
        onOpenTracker={() => setIsTrackerOpen(true)}
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenGallery={() => setIsGalleryOpen(true)}
      />

      {openSection && (
        <SectionModal title={SECTION_TITLES[openSection]} onClose={closeSection} suspendEscape={anotherPopupOpen}>
          {renderSection(openSection)}
        </SectionModal>
      )}

      <BusinessTrackerModal isOpen={isTrackerOpen} onClose={() => setIsTrackerOpen(false)} />
      <OwnerGuideModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
      <NinoBioModal isOpen={isNinoBioOpen} onClose={() => setIsNinoBioOpen(false)} />
      <PhotoGalleryModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
      <BringFriendModal isOpen={isBringFriendOpen} onClose={() => setIsBringFriendOpen(false)} />
      <TourRiskModal isOpen={isRiskModalOpen} onClose={() => setIsRiskModalOpen(false)} riskInfo={activeRiskInfo} />

      <div className="sm:hidden fixed bottom-4 right-4 z-30">
        <a
          href={buildWhatsAppLink('Hello Anaka! I am interested in planning a private tour, hiking expedition, or companion service in Georgia.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-xs rounded-full shadow-lg"
          aria-label="Direct WhatsApp chat with Anaka"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Anaka</span>
        </a>
      </div>
    </div>
  );
}
