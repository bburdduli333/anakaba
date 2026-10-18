import React from 'react';
import { X, FileCode, DollarSign, UploadCloud, Download, CheckCircle, ExternalLink, Shield } from 'lucide-react';

interface OwnerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerGuideModal: React.FC<OwnerGuideModalProps> = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl border border-stone-200 shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-900 text-white flex items-center justify-center font-bold text-sm">
              <FileCode className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-stone-900">
                Owner Guide: Editing, Free Hosting & Source Code
              </h2>
              <p className="text-[11px] text-stone-500">
                How to update prices, customize tours, and host 100% free with zero locked-in databases
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

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-stone-700 leading-relaxed">
          
          {/* Section 1: 100% Free Hosting Explanation */}
          <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
              <CheckCircle className="w-4 h-4 text-emerald-700" />
              <span>Free Hosting & Zero Recurring Database Costs</span>
            </div>
            <p>
              Your website is designed as a lightweight, lightning-fast static application. Because you do not need visitors to create accounts or store passwords, <strong>there are zero database subscription fees</strong> (no Firebase billing, no SQL server fees).
            </p>
            <div className="bg-white p-3 rounded-xl border border-emerald-100 text-[11px] space-y-1">
              <div><strong>Free Deployment Options:</strong></div>
              <div>• <strong>Cloudflare Pages:</strong> 100% free tier with unlimited bandwidth and custom domain support (.com, .ge).</div>
              <div>• <strong>GitHub Pages:</strong> 100% free hosting directly from your own GitHub repository.</div>
              <div>• <strong>Netlify or Vercel:</strong> Generous free hobby tiers with 1-click Git deployments.</div>
              <div className="text-stone-500 pt-1">
                <em>*Note on Google Cloud Run / AI Studio:</em> AI Studio development preview is active. If you deploy directly to Google Cloud Run, Cloud Run has a free monthly tier (2 million requests/month), but may require a linked billing account. To ensure 0$ cost, we recommend exporting the code to Cloudflare Pages or GitHub Pages.
              </div>
            </div>
          </div>

          {/* Section 2: How to Edit Tours & Prices */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-amber-900" />
              <span>How to Change Prices, Routes & WhatsApp Number</span>
            </h3>
            <p>
              All tour details are stored in a single easy-to-read file: <code className="bg-stone-100 text-stone-900 px-1.5 py-0.5 rounded font-mono text-[11px]">src/data/toursData.ts</code>.
            </p>
            <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-[11px] overflow-x-auto space-y-1">
              <div className="text-stone-400">// Change your WhatsApp number here:</div>
              <div className="text-emerald-400">export const WHATSAPP_NUMBER = '995571001701';</div>
              <div className="text-stone-400 mt-2">// Change starting prices & tour details:</div>
              <div>title: 'Kazbegi & The Georgian Military Highway',</div>
              <div>startingPriceGEL: 250, <span className="text-stone-400">// change to your price</span></div>
              <div>startingPriceEUR: 85,  <span className="text-stone-400">// change to your euro price</span></div>
            </div>
          </div>

          {/* Section 3: Replacing Images */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
              <UploadCloud className="w-4 h-4 text-amber-900" />
              <span>How to Add Your Own Photos</span>
            </h3>
            <p>
              Place your own car or tour photos into <code className="bg-stone-100 text-stone-900 px-1.5 py-0.5 rounded font-mono text-[11px]">src/photos/</code> and update the <code className="bg-stone-100 text-stone-900 px-1.5 py-0.5 rounded font-mono text-[11px]">image</code> path inside <code className="bg-stone-100 text-stone-900 px-1.5 py-0.5 rounded font-mono text-[11px]">src/data/toursData.ts</code>.
            </p>
          </div>

          {/* Section 4: Full Code Ownership & Portability */}
          <div className="bg-stone-50 border border-stone-200 p-4 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
              <Shield className="w-4 h-4 text-amber-900" />
              <span>100% Code Ownership</span>
            </div>
            <p>
              You own all the source code in this repository. There are no vendor lock-ins or proprietary CMS plugins. You can run <code className="bg-stone-200 text-stone-800 px-1 rounded font-mono">npm run build</code> anytime to generate a standard static <code className="bg-stone-200 text-stone-800 px-1 rounded font-mono">dist/</code> folder and drop it onto any server in the world.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-stone-200 bg-stone-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-colors"
          >
            Got It
          </button>
        </div>

      </div>
    </div>
  );
};
