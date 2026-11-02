import React, { useState, useEffect, useMemo } from 'react';
import { ALL_DOCUMENTS, getDocumentById } from './data/documents';
import { LegalDocument, SavedDocument, UserProfile } from './types';
import { 
  getFavorites, 
  toggleFavorite as toggleFavStorage, 
  getSavedDocuments, 
  getUserProfile,
  addRecentDocument
} from './utils/storage';
import { Header } from './components/Header';
import { CatalogView } from './components/CatalogView';
import { DocumentDetailModal } from './components/DocumentDetailModal';
import { DocumentForm } from './components/DocumentForm';
import { DocumentEditor } from './components/DocumentEditor';
import { SavedDocumentsView } from './components/SavedDocumentsView';
import { FavoritesView } from './components/FavoritesView';
import { FaqView } from './components/FaqView';
import { UserProfileModal } from './components/UserProfileModal';
import { Scale, Heart, ExternalLink, ShieldCheck } from 'lucide-react';

export default function App() {
  // Navigation tabs
  const [activeTab, setActiveTab] = useState<'catalog' | 'saved' | 'favorites' | 'faq'>('catalog');

  // Active workflow state: null | 'form' | 'editor'
  const [activeWorkflow, setActiveWorkflow] = useState<'catalog' | 'form' | 'editor'>('catalog');
  
  // Selected document for preview / filling
  const [selectedDoc, setSelectedDoc] = useState<LegalDocument | null>(null);
  
  // Filled document content and form data for the editor
  const [editorContent, setEditorContent] = useState<string>('');
  const [currentFormData, setCurrentFormData] = useState<Record<string, string>>({});

  // Local storage reactive states
  const [favorites, setFavorites] = useState<string[]>([]);
  const [savedDocs, setSavedDocs] = useState<SavedDocument[]>([]);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UserProfile>(getUserProfile());

  // Load initial localStorage state on mount
  useEffect(() => {
    setFavorites(getFavorites());
    setSavedDocs(getSavedDocuments());
    setUserProfile(getUserProfile());
  }, []);

  const refreshSavedDocs = () => {
    setSavedDocs(getSavedDocuments());
  };

  const handleToggleFavorite = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    toggleFavStorage(id);
    setFavorites(getFavorites());
  };

  const isFavorite = (id: string) => favorites.includes(id);

  // When user clicks document card in catalog
  const handleSelectDoc = (doc: LegalDocument) => {
    setSelectedDoc(doc);
    addRecentDocument(doc.id);
  };

  // When user clicks "Hujjatni to'ldirish" from detail modal
  const handleProceedToFill = (doc: LegalDocument) => {
    setSelectedDoc(doc);
    setActiveWorkflow('form');
  };

  // When user completes form and proceeds to editor
  const handleProceedToEditor = (filledText: string, formData: Record<string, string>) => {
    setEditorContent(filledText);
    setCurrentFormData(formData);
    setActiveWorkflow('editor');
  };

  // When user saves document inside editor
  const handleSaveSuccess = (savedDoc: SavedDocument) => {
    refreshSavedDocs();
  };

  // When user opens a saved document from "Saqlanganlar"
  const handleOpenSavedDoc = (savedDoc: SavedDocument) => {
    const parentDoc = getDocumentById(savedDoc.templateId) || {
      id: savedDoc.templateId,
      title: savedDoc.title,
      category: savedDoc.category,
      categoryName: savedDoc.categoryName,
      description: '',
      keywords: [],
      templateText: savedDoc.content,
      requiredFields: [],
      legalBasis: {
        lawName: "O'zbekiston Respublikasi Qonunchiligi",
        article: '',
        isVerified: true
      }
    };
    setSelectedDoc(parentDoc);
    setEditorContent(savedDoc.content);
    setCurrentFormData(savedDoc.formData || {});
    setActiveWorkflow('editor');
  };

  // Favorite documents objects
  const favoriteDocuments = useMemo(() => {
    return ALL_DOCUMENTS.filter((doc) => favorites.includes(doc.id));
  }, [favorites]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Navigation Bar */}
      <Header
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          setActiveWorkflow('catalog');
        }}
        savedCount={savedDocs.length}
        favoritesCount={favorites.length}
        onOpenProfile={() => setIsProfileModalOpen(true)}
        totalDocsCount={ALL_DOCUMENTS.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* If user is inside Form mode */}
        {activeWorkflow === 'form' && selectedDoc ? (
          <DocumentForm
            document={selectedDoc}
            initialFormData={currentFormData}
            onBack={() => setActiveWorkflow('catalog')}
            onProceedToEditor={handleProceedToEditor}
          />
        ) : activeWorkflow === 'editor' && selectedDoc ? (
          /* If user is inside Editor mode */
          <DocumentEditor
            document={selectedDoc}
            initialContent={editorContent}
            formData={currentFormData}
            onBackToForm={() => setActiveWorkflow('form')}
            onSaveSuccess={handleSaveSuccess}
          />
        ) : (
          /* Standard Tab Views */
          <>
            {activeTab === 'catalog' && (
              <CatalogView
                documents={ALL_DOCUMENTS}
                isFavorite={isFavorite}
                onToggleFavorite={handleToggleFavorite}
                onSelectDoc={handleSelectDoc}
              />
            )}

            {activeTab === 'saved' && (
              <SavedDocumentsView
                documents={savedDocs}
                onOpenDocument={handleOpenSavedDoc}
                onRefreshList={refreshSavedDocs}
                onGoToCatalog={() => setActiveTab('catalog')}
              />
            )}

            {activeTab === 'favorites' && (
              <FavoritesView
                favoriteDocs={favoriteDocuments}
                isFavorite={isFavorite}
                onToggleFavorite={handleToggleFavorite}
                onSelectDoc={handleSelectDoc}
                onGoToCatalog={() => setActiveTab('catalog')}
              />
            )}

            {activeTab === 'faq' && <FaqView />}
          </>
        )}
      </main>

      {/* Document Detail Preview Modal */}
      {selectedDoc && activeWorkflow === 'catalog' && (
        <DocumentDetailModal
          document={selectedDoc}
          onClose={() => setSelectedDoc(null)}
          onProceedToFill={handleProceedToFill}
          isFavorite={isFavorite(selectedDoc.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      )}

      {/* User Profile Modal */}
      <UserProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        onProfileUpdated={(updated) => setUserProfile(updated)}
      />

      {/* Footer */}
      <footer className="no-print bg-slate-950 text-slate-400 border-t border-slate-800 text-xs py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-900/60 border border-blue-500/30 flex items-center justify-center text-amber-400">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-white font-serif tracking-wide">
                  HUQUQIY HUJJATLAR
                </span>
                <p className="text-[11px] text-slate-400">
                  O'zbekiston Respublikasi fuqarolari uchun rasmiy yuridik hujjatlar tizimi
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-slate-400 text-xs">
              <a
                href="https://lex.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                lex.uz milliy bazasi
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://my.sud.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                my.sud.uz portali
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://adliya.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1"
              >
                Adliya vazirligi
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
            <p>
              © {new Date().getFullYear()} HUQUQIY HUJJATLAR. Barcha ma'lumotlar foydalanuvchining o'z qurilmasida saqlanadi (100% maxfiy).
            </p>
            <div className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Sun'iy intellektsiz, pullik obunasiz, to'liq mustaqil tizim</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
