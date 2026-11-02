import React from 'react';
import { Bookmark, ExternalLink, ChevronRight, CheckCircle2, FileText } from 'lucide-react';
import { LegalDocument } from '../types';

interface DocumentCardProps {
  document: LegalDocument;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelect: (doc: LegalDocument) => void;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({
  document,
  isFavorite,
  onToggleFavorite,
  onSelect,
}) => {
  return (
    <div 
      onClick={() => onSelect(document)}
      className="group bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400/80 transition-all duration-200 cursor-pointer flex flex-col justify-between relative overflow-hidden"
    >
      {/* Top row: Category badge & Favorite button */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-200/70">
            {document.categoryName}
          </span>
          <button
            onClick={(e) => onToggleFavorite(document.id, e)}
            className={`p-2 rounded-lg transition-colors ${
              isFavorite
                ? 'text-amber-500 bg-amber-50 hover:bg-amber-100'
                : 'text-slate-400 hover:text-amber-500 hover:bg-slate-100'
            }`}
            title={isFavorite ? "Sevimlilardan o'chirish" : "Sevimlilarga qo'shish"}
          >
            <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2 mb-2 font-serif leading-snug">
          {document.title}
        </h3>

        {/* Short explanation */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
          {document.description}
        </p>
      </div>

      {/* Bottom meta & action */}
      <div className="pt-3 border-t border-slate-100 mt-2 space-y-3">
        {/* Legal basis verified tag */}
        <div className="flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1.5 text-emerald-700 font-medium truncate max-w-[85%]">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate" title={document.legalBasis.lawName}>
              {document.legalBasis.lawName}
            </span>
          </div>
          {document.legalBasis.lexUrl && (
            <span 
              className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100 hover:underline"
              title="lex.uz qonunchilik bazasidagi tasdiqlangan manba"
            >
              lex.uz
            </span>
          )}
        </div>

        {/* Action button */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-xs font-semibold text-blue-600 group-hover:text-blue-700 flex items-center gap-1">
            Hujjatni to'ldirish
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            ID: {document.id}
          </span>
        </div>
      </div>
    </div>
  );
};
