import React, { useState } from 'react';
import { 
  FolderCheck, 
  Trash2, 
  FileEdit, 
  Printer, 
  FileDown, 
  Copy, 
  Check, 
  Calendar, 
  Search,
  ArrowRight
} from 'lucide-react';
import { SavedDocument } from '../types';
import { exportToDocx } from '../utils/docxExport';
import { deleteSavedDocument } from '../utils/storage';

interface SavedDocumentsViewProps {
  documents: SavedDocument[];
  onOpenDocument: (doc: SavedDocument) => void;
  onRefreshList: () => void;
  onGoToCatalog: () => void;
}

export const SavedDocumentsView: React.FC<SavedDocumentsViewProps> = ({
  documents,
  onOpenDocument,
  onRefreshList,
  onGoToCatalog,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = documents.filter((doc) => {
    const q = searchQuery.toLowerCase();
    return (
      doc.title.toLowerCase().includes(q) ||
      doc.categoryName.toLowerCase().includes(q) ||
      doc.content.toLowerCase().includes(q)
    );
  });

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm("Rostdan ham ushbu saqlangan hujjatni o'chirib tashlamoqchimisiz?")) {
      deleteSavedDocument(id);
      onRefreshList();
    }
  };

  const handleCopy = (doc: SavedDocument, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(doc.content);
    setCopiedId(doc.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDocxExport = async (doc: SavedDocument, e: React.MouseEvent) => {
    e.stopPropagation();
    await exportToDocx(doc.title, doc.content);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <FolderCheck className="w-5 h-5" />
            </span>
            <h1 className="text-2xl font-bold font-serif text-slate-900">
              Mening saqlangan hujjatlarim
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Brauzeringiz xotirasida (localStorage) saqlangan shaxsiy hujjatlaringiz ro'yxati ({documents.length} ta)
          </p>
        </div>

        {/* Search */}
        {documents.length > 0 && (
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Saqlangan hujjatlardan izlash..."
              className="w-full pl-9 pr-4 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-white"
            />
          </div>
        )}
      </div>

      {/* Empty State */}
      {documents.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-lg mx-auto space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <FolderCheck className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-800">
              Hozircha saqlangan hujjatlar mavjud emas
            </h3>
            <p className="text-xs text-slate-500">
              Hujjatlar katalogidan andozani tanlang, to'ldiring va "Saqlash" tugmasini bosing.
            </p>
          </div>
          <button
            onClick={onGoToCatalog}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/20 transition-all"
          >
            Katalogga o'tish
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((doc) => (
            <div
              key={doc.id}
              onClick={() => onOpenDocument(doc)}
              className="group bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                    {doc.categoryName}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(doc.updatedAt).toLocaleDateString('uz-UZ')}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2 font-serif mb-2">
                  {doc.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4 font-serif bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  {doc.content.substring(0, 150)}...
                </p>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-blue-600 flex items-center gap-1">
                  <FileEdit className="w-3.5 h-3.5" />
                  Tahrirlash
                </span>

                <div className="flex items-center gap-1">
                  <button
                    onClick={(e) => handleCopy(doc, e)}
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
                    title="Nusxa olish"
                  >
                    {copiedId === doc.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  <button
                    onClick={(e) => handleDocxExport(doc, e)}
                    className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-600 hover:text-blue-800 transition-colors"
                    title="Word DOCX yuklab olish"
                  >
                    <FileDown className="w-4 h-4" />
                  </button>

                  <button
                    onClick={(e) => handleDelete(doc.id, e)}
                    className="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors"
                    title="O'chirish"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
