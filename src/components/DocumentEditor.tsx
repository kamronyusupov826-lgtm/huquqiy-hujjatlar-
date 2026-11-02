import React, { useRef, useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Download, 
  Printer, 
  Copy, 
  Save, 
  Check, 
  Bold, 
  Italic, 
  Underline, 
  Strikethrough,
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  AlignJustify,
  List, 
  ListOrdered, 
  Undo, 
  Redo, 
  RotateCcw, 
  Calendar,
  FileDown,
  Sparkles,
  FileCheck
} from 'lucide-react';
import { LegalDocument, SavedDocument } from '../types';
import { exportToDocx } from '../utils/docxExport';
import { saveDocumentToStorage } from '../utils/storage';

interface DocumentEditorProps {
  document: LegalDocument;
  initialContent: string;
  formData: Record<string, string>;
  onBackToForm: () => void;
  onSaveSuccess: (savedDoc: SavedDocument) => void;
}

export const DocumentEditor: React.FC<DocumentEditorProps> = ({
  document: legalDoc,
  initialContent,
  formData,
  onBackToForm,
  onSaveSuccess,
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [docTitle, setDocTitle] = useState(legalDoc.title);
  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isExportingWord, setIsExportingWord] = useState(false);
  const [savedDocId, setSavedDocId] = useState<string>(`saved-${Date.now()}`);

  // Set initial text inside contenteditable div
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerText = initialContent;
    }
  }, [initialContent]);

  // Execute formatting command
  const executeCommand = (command: string, value: string | undefined = undefined) => {
    window.document.execCommand(command, false, value);
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  const getPlainText = (): string => {
    return editorRef.current ? (editorRef.current.innerText || '') : '';
  };

  // 1. Copy Document Text
  const handleCopy = async () => {
    const text = getPlainText();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const ta = window.document.createElement('textarea');
      ta.value = text;
      window.document.body.appendChild(ta);
      ta.select();
      window.document.execCommand('copy');
      window.document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // 2. Download Word DOCX
  const handleDownloadDocx = async () => {
    const text = getPlainText();
    setIsExportingWord(true);
    try {
      await exportToDocx(docTitle, text);
    } catch (err) {
      console.error('Word export error:', err);
    } finally {
      setIsExportingWord(false);
    }
  };

  // 3. Print / PDF Export
  const handlePrint = () => {
    window.print();
  };

  // 4. Save to LocalStorage
  const handleSave = () => {
    const text = getPlainText();
    const savedItem: SavedDocument = {
      id: savedDocId,
      templateId: legalDoc.id,
      title: docTitle,
      category: legalDoc.category,
      categoryName: legalDoc.categoryName,
      content: text,
      formData: formData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    saveDocumentToStorage(savedItem);
    setIsSaved(true);
    onSaveSuccess(savedItem);
    setTimeout(() => setIsSaved(false), 2500);
  };

  // Insert today's date
  const handleInsertDate = () => {
    const now = new Date();
    const uzbekMonths = [
      'yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun',
      'iyul', 'avgust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr'
    ];
    const dateStr = `${now.getFullYear()}-yil ${now.getDate()}-${uzbekMonths[now.getMonth()]}`;
    executeCommand('insertText', dateStr);
  };

  // Reset to initial content
  const handleReset = () => {
    if (editorRef.current && window.confirm("Hujjatni dastlabki to'ldirilgan holatga qaytarishni xohlaysizmi?")) {
      editorRef.current.innerText = initialContent;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 pb-16">
      {/* Top action bar */}
      <div className="no-print sticky top-20 z-20 bg-white border-b border-slate-200 shadow-sm px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Back & Document Title input */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToForm}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors shadow-xs"
              title="Maydonlarni qayta to'ldirish"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1">
              <input
                type="text"
                value={docTitle}
                onChange={(e) => setDocTitle(e.target.value)}
                className="text-base sm:text-lg font-bold font-serif text-slate-900 border-b border-transparent hover:border-slate-300 focus:border-blue-600 focus:outline-none px-1 py-0.5 w-full bg-transparent"
                title="Hujjat nomini tahrirlash"
              />
              <span className="text-[11px] text-slate-500 font-sans block">
                {legalDoc.categoryName} • ID: {legalDoc.id}
              </span>
            </div>
          </div>

          {/* Action Export Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              title="Matndan nusxa olish"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Nusxalandi!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-600" />
                  <span>Nusxa olish</span>
                </>
              )}
            </button>

            {/* Word DOCX Button */}
            <button
              onClick={handleDownloadDocx}
              disabled={isExportingWord}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition-colors"
              title="Microsoft Word (.docx) formatida yuklab olish"
            >
              <FileDown className="w-4 h-4 text-blue-600" />
              <span>{isExportingWord ? 'Yuklanmoqda...' : 'Word DOCX'}</span>
            </button>

            {/* Print / PDF Button */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-900 text-white transition-colors shadow-sm"
              title="Chop etish yoki PDF sifatida saqlash"
            >
              <Printer className="w-4 h-4" />
              <span>Chop etish / PDF</span>
            </button>

            {/* Save Button */}
            <button
              onClick={handleSave}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg transition-all shadow-md ${
                isSaved
                  ? 'bg-emerald-600 text-white'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/25'
              }`}
              title="Brauzer xotirasiga saqlash"
            >
              {isSaved ? (
                <>
                  <FileCheck className="w-4 h-4" />
                  <span>Saqlandi!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Saqlash</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Rich Formatting Toolbar */}
        <div className="max-w-7xl mx-auto mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center gap-1 sm:gap-1.5 text-slate-700">
          <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
            <button
              onClick={() => executeCommand('bold')}
              className="p-1.5 hover:bg-white hover:text-blue-700 rounded transition-colors"
              title="Qalin (Bold) - Ctrl+B"
            >
              <Bold className="w-4 h-4" />
            </button>
            <button
              onClick={() => executeCommand('italic')}
              className="p-1.5 hover:bg-white hover:text-blue-700 rounded transition-colors"
              title="Kursiv (Italic) - Ctrl+I"
            >
              <Italic className="w-4 h-4" />
            </button>
            <button
              onClick={() => executeCommand('underline')}
              className="p-1.5 hover:bg-white hover:text-blue-700 rounded transition-colors"
              title="Tagiga chizilgan (Underline) - Ctrl+U"
            >
              <Underline className="w-4 h-4" />
            </button>
            <button
              onClick={() => executeCommand('strikeThrough')}
              className="p-1.5 hover:bg-white hover:text-blue-700 rounded transition-colors"
              title="Ustiga chizilgan"
            >
              <Strikethrough className="w-4 h-4" />
            </button>
          </div>

          <div className="w-[1px] h-5 bg-slate-300 mx-1"></div>

          <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
            <button
              onClick={() => executeCommand('justifyLeft')}
              className="p-1.5 hover:bg-white hover:text-blue-700 rounded transition-colors"
              title="Chap tomonga tekislash"
            >
              <AlignLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => executeCommand('justifyCenter')}
              className="p-1.5 hover:bg-white hover:text-blue-700 rounded transition-colors"
              title="Markazga tekislash (Sarlavhalar uchun)"
            >
              <AlignCenter className="w-4 h-4" />
            </button>
            <button
              onClick={() => executeCommand('justifyRight')}
              className="p-1.5 hover:bg-white hover:text-blue-700 rounded transition-colors"
              title="O'ng tomonga tekislash (Sud/ariza oluvchi uchun)"
            >
              <AlignRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => executeCommand('justifyFull')}
              className="p-1.5 hover:bg-white hover:text-blue-700 rounded transition-colors"
              title="Kenglik bo'yicha tekislash (Asosiy matn)"
            >
              <AlignJustify className="w-4 h-4" />
            </button>
          </div>

          <div className="w-[1px] h-5 bg-slate-300 mx-1"></div>

          <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
            <button
              onClick={() => executeCommand('insertUnorderedList')}
              className="p-1.5 hover:bg-white hover:text-blue-700 rounded transition-colors"
              title="Belgili ro'yxat"
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => executeCommand('insertOrderedList')}
              className="p-1.5 hover:bg-white hover:text-blue-700 rounded transition-colors"
              title="Raqamlangan ro'yxat"
            >
              <ListOrdered className="w-4 h-4" />
            </button>
          </div>

          <div className="w-[1px] h-5 bg-slate-300 mx-1"></div>

          <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
            <button
              onClick={() => executeCommand('undo')}
              className="p-1.5 hover:bg-white hover:text-blue-700 rounded transition-colors"
              title="Bekor qilish (Undo)"
            >
              <Undo className="w-4 h-4" />
            </button>
            <button
              onClick={() => executeCommand('redo')}
              className="p-1.5 hover:bg-white hover:text-blue-700 rounded transition-colors"
              title="Qaytarish (Redo)"
            >
              <Redo className="w-4 h-4" />
            </button>
          </div>

          <div className="w-[1px] h-5 bg-slate-300 mx-1"></div>

          <button
            onClick={handleInsertDate}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors"
            title="Bugungi sanani kiritish"
          >
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            <span>Bugungi sana</span>
          </button>

          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200 transition-colors ml-auto"
            title="Dastlabki holatga qaytarish"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Dastlabki holat</span>
          </button>
        </div>
      </div>

      {/* Editor Body: A4 Paper Simulation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
        <div className="mb-3 text-xs text-slate-500 flex items-center justify-between no-print">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Matn to'liq tahrirlanuvchi (contenteditable). Xohlagan jumlani o'chirishingiz, qo'shishingiz yoki o'zgartirishingiz mumkin.
          </span>
          <span className="font-mono text-[11px] hidden sm:inline">
            A4: 210 x 297 mm
          </span>
        </div>

        {/* Printable & Editable Paper */}
        <div 
          id="printable-legal-document"
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          className="legal-paper rounded-xl border border-slate-300/80 outline-none transition-shadow focus:ring-2 focus:ring-blue-500/20"
          style={{ whiteSpace: 'pre-wrap' }}
        />
      </div>
    </div>
  );
};
