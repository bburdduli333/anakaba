import React, { useState, useEffect } from 'react';
import { GALLERY_PHOTOS, PHOTO_SESSION_OFFER, WHATSAPP_DISPLAY, buildWhatsAppLink } from '../data/toursData';
import { GalleryPhoto } from '../types';
import { X, Camera, MapPin, ChevronLeft, ChevronRight, MessageCircle, Sparkles, ZoomIn } from 'lucide-react';

interface PhotoGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhotoGalleryModal: React.FC<PhotoGalleryModalProps> = ({ isOpen, onClose }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedPhotoIndex !== null) {
          setSelectedPhotoIndex(null);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowRight' && selectedPhotoIndex !== null) {
        setSelectedPhotoIndex((prev) => (prev! + 1) % GALLERY_PHOTOS.length);
      } else if (e.key === 'ArrowLeft' && selectedPhotoIndex !== null) {
        setSelectedPhotoIndex((prev) => (prev! - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedPhotoIndex, onClose]);

  if (!isOpen) return null;

  const currentSelectedPhoto: GalleryPhoto | null =
    selectedPhotoIndex !== null ? GALLERY_PHOTOS[selectedPhotoIndex] : null;

  const photoSessionWhatsAppUrl = buildWhatsAppLink(
    `Hello Anaka! I browsed your photo gallery and love your candid style. I would like to book a tour and add your Casual Canon Photo Session (+$30 USD/day). Could you please share your availability?`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-sm p-3 sm:p-6 lg:p-8 flex items-center justify-center animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-5 border-b border-stone-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
              <Camera className="w-5 h-5 text-amber-900" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="gallery-modal-title" className="text-xl sm:text-2xl font-bold font-serif-heading text-stone-900">
                  Anaka's Road Trip Gallery
                </h2>
                <span className="hidden sm:inline-block text-[11px] font-semibold bg-amber-50 text-amber-900 border border-amber-200/80 px-2 py-0.5 rounded-full">
                  Original Photos
                </span>
              </div>
              <p className="text-xs text-stone-500">
                Candid frames across Georgia taken with my beginner Canon camera
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold text-xs transition-colors cursor-pointer"
            aria-label="Close photo gallery"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
            <span>Close</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-8">
          
          {/* Anaka's Note on Photography & Casual Canon Add-on */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-800" />
                <span>Personal Note from Anaka</span>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed">
                "These are original photos taken by me! I am <strong>not a professional photographer</strong> and I don’t pretend to be one—I just bring along my beginner Canon camera to capture real, honest moments rather than staged tourist poses. If you want candid travel photos of yourself and your friends without having to stop strangers on the road, I can bring my Canon on our trip!"
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-900">
                <span className="bg-white px-2.5 py-1 rounded-lg border border-amber-200 shadow-2xs">
                  {PHOTO_SESSION_OFFER.title}
                </span>
                <span className="text-amber-900 font-bold bg-amber-100/90 px-2.5 py-1 rounded-lg">
                  +$30 USD / Day add-on
                </span>
              </div>
            </div>

            <a
              href={photoSessionWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Add to Tour via WhatsApp</span>
            </a>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GALLERY_PHOTOS.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhotoIndex(index)}
                className="group cursor-pointer bg-stone-50 border border-stone-200 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-white/90 backdrop-blur-xs text-stone-900 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>View Full Photo</span>
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-stone-900/75 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded-md flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>{photo.location}</span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm font-serif-heading group-hover:text-amber-900 transition-colors">
                      {photo.title}
                    </h3>
                    <p className="mt-1 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {photo.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-stone-200/70 flex items-center justify-between text-[11px] text-stone-400">
                    <span>{photo.cameraInfo}</span>
                    <span className="text-amber-900 font-medium group-hover:underline">Click to expand</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer Bar */}
        <div className="bg-stone-50 px-6 py-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-stone-400" />
            <span>Digital photos sent unedited to your phone or Google Drive on the same day.</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-stone-500">WhatsApp: {WHATSAPP_DISPLAY}</span>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-stone-700 bg-white border border-stone-300 hover:bg-stone-100 rounded-xl transition-colors"
            >
              Close Gallery
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox Overlay for Expanded View */}
      {currentSelectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-60 bg-stone-950/95 flex flex-col items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Top Bar with Close and Counter */}
          <div
            className="w-full max-w-5xl flex items-center justify-between text-white text-xs mb-4 px-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="font-semibold text-amber-400">
                Photo {selectedPhotoIndex! + 1} of {GALLERY_PHOTOS.length}
              </span>
              <span>·</span>
              <span className="text-stone-300">{currentSelectedPhoto.location}</span>
            </div>

            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="p-2 text-stone-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close photo view"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Photo & Navigation Controls */}
          <div
            className="relative w-full max-w-4xl max-h-[70vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhotoIndex((prev) => (prev! - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
              }}
              className="absolute left-2 sm:-left-12 z-10 p-2 sm:p-3 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Expanded Image */}
            <img
              src={currentSelectedPhoto.image}
              alt={currentSelectedPhoto.title}
              className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-stone-800"
            />

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhotoIndex((prev) => (prev! + 1) % GALLERY_PHOTOS.length);
              }}
              className="absolute right-2 sm:-right-12 z-10 p-2 sm:p-3 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div
            className="w-full max-w-2xl text-center text-white mt-4 space-y-1.5 px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-base sm:text-lg font-bold font-serif-heading">
              {currentSelectedPhoto.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {currentSelectedPhoto.description}
            </p>
            <div className="pt-1 text-[11px] text-stone-400 font-mono">
              {currentSelectedPhoto.cameraInfo}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
