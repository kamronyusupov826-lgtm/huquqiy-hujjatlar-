import React from 'react';
import { 
  FileText, 
  Bookmark, 
  FolderCheck, 
  HelpCircle, 
  User, 
  Scale, 
  Search,
  CheckCircle2
} from 'lucide-react';

interface HeaderProps {
  activeTab: 'catalog' | 'saved' | 'favorites' | 'faq';
  onSelectTab: (tab: 'catalog' | 'saved' | 'favorites' | 'faq') => void;
  savedCount: number;
  favoritesCount: number;
  onOpenProfile: () => void;
  totalDocsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  savedCount,
  favoritesCount,
  onOpenProfile,
  totalDocsCount,
}) => {
  return (
    <header className="no-print bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-30 shadow-md">
      {/* Top micro-bar */}
      <div className="bg-slate-950 border-b border-slate-800/80 px-4 py-1.5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              O'zbekiston Respublikasi Qonunchilik Bazasiga (lex.uz) muvofiq
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300">
              <strong className="text-amber-400">{totalDocsCount} ta</strong> rasmiy andoza
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              100% Bepul &amp; Xavfsiz (Local)
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <button
            onClick={() => onSelectTab('catalog')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 border border-blue-500/30 flex items-center justify-center shadow-lg shadow-blue-900/40 group-hover:scale-105 transition-transform">
              <Scale className="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white font-serif">
                  HUQUQIY HUJJATLAR
                </span>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50">
                  UZB
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans tracking-wide">
                Yuridik Hujjatlar Generatori va Muharriri
              </p>
            </div>
          </button>

          {/* Navigation links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => onSelectTab('catalog')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'catalog'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <FileText className="w-4 h-4" />
              Hujjatlar katalogi
            </button>

            <button
              onClick={() => onSelectTab('saved')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors relative ${
                activeTab === 'saved'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <FolderCheck className="w-4 h-4" />
              Saqlanganlar
              {savedCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 text-xs font-bold rounded-full bg-amber-500 text-slate-950">
                  {savedCount}
                </span>
              )}
            </button>

            <button
              onClick={() => onSelectTab('favorites')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors relative ${
                activeTab === 'favorites'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              Sevimlilar
              {favoritesCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 text-xs font-bold rounded-full bg-blue-500 text-white">
                  {favoritesCount}
                </span>
              )}
            </button>

            <button
              onClick={() => onSelectTab('faq')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'faq'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              Qo'llanma &amp; E-Sud
            </button>
          </nav>

          {/* User Profile CTA */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenProfile}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all hover:border-slate-600 shadow-sm"
              title="Avtomatik to'ldirish uchun shaxsiy ma'lumotlarni saqlash"
            >
              <div className="w-6 h-6 rounded-full bg-blue-900/80 border border-blue-400/40 flex items-center justify-center text-blue-300">
                <User className="w-3.5 h-3.5" />
              </div>
              <span className="hidden sm:inline">Mening profilim</span>
            </button>
          </div>
        </div>

        {/* Mobile Submenu Bar */}
        <div className="lg:hidden flex items-center justify-around py-2.5 border-t border-slate-800 text-xs">
          <button
            onClick={() => onSelectTab('catalog')}
            className={`flex flex-col items-center gap-1 ${
              activeTab === 'catalog' ? 'text-blue-400 font-semibold' : 'text-slate-400'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Katalog</span>
          </button>
          <button
            onClick={() => onSelectTab('saved')}
            className={`flex flex-col items-center gap-1 relative ${
              activeTab === 'saved' ? 'text-blue-400 font-semibold' : 'text-slate-400'
            }`}
          >
            <FolderCheck className="w-4 h-4" />
            <span>Saqlanganlar ({savedCount})</span>
          </button>
          <button
            onClick={() => onSelectTab('favorites')}
            className={`flex flex-col items-center gap-1 relative ${
              activeTab === 'favorites' ? 'text-blue-400 font-semibold' : 'text-slate-400'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>Sevimlilar ({favoritesCount})</span>
          </button>
          <button
            onClick={() => onSelectTab('faq')}
            className={`flex flex-col items-center gap-1 ${
              activeTab === 'faq' ? 'text-blue-400 font-semibold' : 'text-slate-400'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Qo'llanma</span>
          </button>
        </div>
      </div>
    </header>
  );
};
