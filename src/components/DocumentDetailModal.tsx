import React, { useState } from 'react';
import { 
  X, 
  FileEdit, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Copy, 
  Check, 
  Bookmark, 
  Layers,
  Scale
} from 'lucide-react';
import { LegalDocument } from '../types';

interface DocumentDetailModalProps {
  document: LegalDocument | null;
  onClose: () => void;
  onProceedToFill: (doc: LegalDocument) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const DocumentDetailModal: React.FC<DocumentDetailModalProps> = ({
  document,
  onClose,
  onProceedToFill,
  isFavorite,
  onToggleFavorite,
}) => {
  const [copied, setCopied] = useState(false);

  if (!document) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(document.templateText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-auto overflow-hidden border border-slate-200 animate-fadeIn flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 px-6 py-5 text-white flex items-start justify-between border-b border-slate-800">
          <div className="space-y-1.5 pr-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-blue-900 text-blue-200 border border-blue-700">
                {document.categoryName}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Andoza #{document.id}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif leading-snug text-white">
              {document.title}
            </h2>
          </div>
          
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onToggleFavorite(document.id)}
              className={`p-2 rounded-xl border transition-colors ${
                isFavorite
                  ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
              }`}
              title={isFavorite ? "Sevimlilardan o'chirish" : "Sevimlilarga qo'shish"}
            >
              <Bookmark className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 border border-slate-700 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-slate-50/50">
          {/* Explanation Banner */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-blue-600" />
              Hujjat tavsifi va qo'llanish sohasi
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {document.description}
            </p>
          </div>

          {/* Legal Basis & Lex.uz reference */}
          <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                  Qonuniy asosi (Tasdiqlangan me'yoriy hujjat)
                </span>
                <p className="text-sm font-semibold text-emerald-950">
                  {document.legalBasis.lawName} ({document.legalBasis.article})
                </p>
              </div>
            </div>

            {document.legalBasis.lexUrl && (
              <a
                href={document.legalBasis.lexUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-sm transition-colors shrink-0"
              >
                lex.uz da ko'rish
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Required Fields summary */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              To'ldirish talab etiladigan maydonlar ({document.requiredFields.length} ta)
            </h4>
            <div className="flex flex-wrap gap-2">
              {document.requiredFields.map((field) => (
                <span
                  key={field.key}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                >
                  {field.label}
                </span>
              ))}
            </div>
          </div>

          {/* Template Text Preview */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-blue-600" />
                Hujjat andozasi (Dastlabki ko'rinish)
              </h4>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-blue-600 px-2.5 py-1 rounded bg-white border border-slate-200 shadow-xs"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Nusxa olindi!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Matndan nusxa olish</span>
                  </>
                )}
              </button>
            </div>

            {/* Template paper snippet */}
            <div className="bg-white border border-slate-300 rounded-xl p-6 font-serif text-sm leading-relaxed text-slate-800 whitespace-pre-wrap shadow-inner max-h-80 overflow-y-auto">
              {document.templateText}
            </div>
          </div>
        </div>

        {/* Footer with primary CTA */}
        <div className="bg-white px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            "Hujjatni to'ldirish" tugmasini bosing va o'z ma'lumotlaringizni kiriting.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
            >
              Yopish
            </button>
            <button
              onClick={() => {
                onProceedToFill(document);
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
            >
              <FileEdit className="w-4 h-4" />
              Hujjatni to'ldirish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
