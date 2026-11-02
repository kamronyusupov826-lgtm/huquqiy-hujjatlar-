import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  SlidersHorizontal, 
  Sparkles, 
  Scale, 
  CheckCircle2, 
  FileText,
  Bookmark
} from 'lucide-react';
import { LegalDocument, CategoryId } from '../types';
import { CATEGORIES } from '../data/categories';
import { searchDocuments } from '../utils/search';
import { DocumentCard } from './DocumentCard';

interface CatalogViewProps {
  documents: LegalDocument[];
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectDoc: (doc: LegalDocument) => void;
}

const QUICK_SEARCH_TAGS = [
  'Ajrim',
  'Aliment',
  'Qarz tilxati',
  'Ijara shartnomasi',
  'O\'z xohishi bilan bo\'shash',
  'Himoya orderi',
  'Merosni qabul qilish',
  'Sud buyrug\'i',
  'Apellyatsiya',
  'Ishga tiklash',
];

export const CatalogView: React.FC<CatalogViewProps> = ({
  documents,
  isFavorite,
  onToggleFavorite,
  onSelectDoc,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'default' | 'az' | 'popular'>('default');

  // Filter documents using real search utility
  const filteredDocuments = useMemo(() => {
    let result = searchDocuments(documents, searchQuery, selectedCategory);

    if (sortBy === 'az') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title, 'uz'));
    } else if (sortBy === 'popular') {
      result = [...result].sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    }

    return result;
  }, [documents, searchQuery, selectedCategory, sortBy]);

  // Count by category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: documents.length };
    documents.forEach((doc) => {
      counts[doc.category] = (counts[doc.category] || 0) + 1;
    });
    return counts;
  }, [documents]);

  const handleClearSearch = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Search Section */}
      <section className="bg-slate-900 border-b border-slate-800 text-white pt-10 pb-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle decorative background circles */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-300 text-xs font-semibold">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>O'zbekistonning eng katta yuridik hujjatlar bazasi</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight text-white leading-tight">
            Kerakli yuridik hujjatni <span className="text-blue-400">oson qidiring</span> va to'ldiring
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            120 dan ortiq tayyor rasmiy arizalar, da'vo arizalari, shartnomalar va murojaatlar. Shaxsiy ma'lumotlaringizni kiriting va Word yoki PDF formatida yuklab oling.
          </p>

          {/* Interactive Search Bar */}
          <div className="pt-2 max-w-2xl mx-auto">
            <div className="relative flex items-center bg-white rounded-2xl shadow-xl shadow-slate-950/40 border border-slate-200/80 p-2 text-slate-900">
              <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Hujjat nomi, kalit so'z yoki toifa bo'yicha qidiring (masalan: ajrim, qarz, aliment)..."
                className="w-full px-3 py-2 text-sm sm:text-base outline-none bg-transparent placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors mr-1"
                  title="Tozalash"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Keyword Chips */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3 text-xs text-slate-300">
              <span className="text-slate-400 mr-1 text-[11px]">Ko'p qidirilganlar:</span>
              {QUICK_SEARCH_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors text-[11px]"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Categories Bar */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">
              Toifalar bo'yicha saralash (15 ta yo'nalish)
            </h2>
            {(selectedCategory !== 'all' || searchQuery) && (
              <button
                onClick={handleClearSearch}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                Filtrlarni tozalash
              </button>
            )}
          </div>

          {/* Category Chips Scroller */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>Barcha hujjatlar</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                selectedCategory === 'all' ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {categoryCounts.all}
              </span>
            </button>

            {CATEGORIES.map((cat) => {
              const count = categoryCounts[cat.id] || 0;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    isSelected ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Bar with Sort */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <span className="font-bold text-slate-900">{filteredDocuments.length} ta</span>
            <span>hujjat andozasi topildi</span>
            {selectedCategory !== 'all' && (
              <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                {CATEGORIES.find((c) => c.id === selectedCategory)?.name}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs text-slate-500">Saralash:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs font-semibold px-3 py-1.5 border border-slate-300 rounded-lg bg-white text-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="default">Odatiy tartibda</option>
              <option value="popular">Eng ko'p foydalaniladigan</option>
              <option value="az">Alifbo bo'yicha (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Documents Grid */}
        {filteredDocuments.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Search className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-800">
                Hech qanday hujjat topilmadi
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                "{searchQuery}" so'rovi bo'yicha hujjat topilmadi. So'zning qisqa shaklini yozib ko'ring yoki boshqa toifani tanlang.
              </p>
            </div>
            <button
              onClick={handleClearSearch}
              className="px-5 py-2 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
            >
              Barcha hujjatlarni ko'rsatish
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredDocuments.map((doc) => (
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
    </div>
  );
};
