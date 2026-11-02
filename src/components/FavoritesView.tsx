import React from 'react';
import { Bookmark, ArrowRight, FileText } from 'lucide-react';
import { LegalDocument } from '../types';
import { DocumentCard } from './DocumentCard';

interface FavoritesViewProps {
  favoriteDocs: LegalDocument[];
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectDoc: (doc: LegalDocument) => void;
  onGoToCatalog: () => void;
}

export const FavoritesView: React.FC<FavoritesViewProps> = ({
  favoriteDocs,
  isFavorite,
  onToggleFavorite,
  onSelectDoc,
  onGoToCatalog,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
              <Bookmark className="w-5 h-5 fill-current" />
            </span>
            <h1 className="text-2xl font-bold font-serif text-slate-900">
              Mening sevimli andozalarim
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Tez-tez ishlatish uchun saqlab qo'yilgan yuridik hujjat andozalari ({favoriteDocs.length} ta)
          </p>
        </div>
      </div>

      {/* Empty State */}
      {favoriteDocs.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-lg mx-auto space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mx-auto">
            <Bookmark className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-800">
              Hozircha sevimlilar ro'yxati bo'sh
            </h3>
            <p className="text-xs text-slate-500">
              Katalogdagi andozalarning yuqori o'ng burchagidagi xatcho'p (bookmark) belgisini bosib sevimli qilishingiz mumkin.
            </p>
          </div>
          <button
            onClick={onGoToCatalog}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-all"
          >
            Katalogga o'tish
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {favoriteDocs.map((doc) => (
            <DocumentCard
              key={doc.id}
              document={doc}
              isFavorite={isFavorite(doc.id)}
              onToggleFavorite={onToggleFavorite}
              onSelect={onSelectDoc}
            />
          ))}
        </div>
      )}
    </div>
  );
};
