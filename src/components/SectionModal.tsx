import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface SectionModalProps {
  title: string;
  onClose: () => void;
  /** true while another popup (bio, risks...) is open on top, so Escape closes only that one */
  suspendEscape?: boolean;
  children: React.ReactNode;
}

export const SectionModal: React.FC<SectionModalProps> = ({ title, onClose, suspendEscape, children }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !suspendEscape) onClose();
    };
    window.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose, suspendEscape]);

  return (
    <div
      className="fixed inset-0 z-40 overflow-y-auto bg-stone-950/70 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="section-modal-body relative mx-auto max-w-6xl bg-white min-h-full sm:min-h-0 sm:rounded-3xl shadow-2xl overflow-clip"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-20 flex items-center justify-between gap-3 bg-white/95 backdrop-blur border-b border-stone-200 px-4 sm:px-6 py-3">
          <h2 className="text-base sm:text-lg font-bold text-stone-900 truncate">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-900 hover:bg-stone-700 text-white text-xs font-bold cursor-pointer"
            aria-label="Close window"
          >
            <X className="w-4 h-4" />
            <span>Close</span>
          </button>
        </div>
        {children}
        <div className="border-t border-stone-200 p-4 flex justify-center bg-stone-50">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-stone-900 hover:bg-stone-700 text-white text-xs font-bold cursor-pointer"
          >
            Close and go back
          </button>
        </div>
      </div>
    </div>
  );
};
