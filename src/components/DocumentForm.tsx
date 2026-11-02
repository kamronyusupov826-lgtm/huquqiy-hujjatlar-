import React, { useState, useEffect, useMemo } from 'react';
import { 
  ArrowLeft, 
  FileEdit, 
  Eye, 
  Sparkles, 
  UserCheck, 
  CheckCircle2, 
  ExternalLink,
  RotateCcw,
  Scale
} from 'lucide-react';
import { LegalDocument, UserProfile } from '../types';
import { fillTemplatePlaceholders } from '../utils/templateFiller';
import { getUserProfile } from '../utils/storage';

interface DocumentFormProps {
  document: LegalDocument;
  onBack: () => void;
  onProceedToEditor: (filledContent: string, formData: Record<string, string>) => void;
  initialFormData?: Record<string, string>;
}

export const DocumentForm: React.FC<DocumentFormProps> = ({
  document: legalDoc,
  onBack,
  onProceedToEditor,
  initialFormData,
}) => {
  // Initialize form data with stored user profile or initial passed data
  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const profile = getUserProfile();
    const defaults: Record<string, string> = {
      firstName: profile.firstName || '',
      lastName: profile.lastName || '',
      middleName: profile.middleName || '',
      phone: profile.phone || '',
      address: profile.address || '',
      passport: profile.passportSeries || '',
    };

    // Pre-populate any field default values
    legalDoc.requiredFields.forEach((f) => {
      if (f.defaultValue && !defaults[f.key]) {
        defaults[f.key] = f.defaultValue;
      }
    });

    return { ...defaults, ...(initialFormData || {}) };
  });

  const [activeMobileView, setActiveMobileView] = useState<'form' | 'preview'>('form');

  // Live filled text preview
  const liveFilledText = useMemo(() => {
    return fillTemplatePlaceholders(legalDoc.templateText, formData);
  }, [legalDoc.templateText, formData]);

  const handleFieldChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleLoadFromProfile = () => {
    const profile = getUserProfile();
    setFormData((prev) => ({
      ...prev,
      firstName: profile.firstName || prev.firstName,
      lastName: profile.lastName || prev.lastName,
      middleName: profile.middleName || prev.middleName,
      phone: profile.phone || prev.phone,
      address: profile.address || prev.address,
      passport: profile.passportSeries || prev.passport,
    }));
  };

  const handleResetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      middleName: '',
      phone: '',
      address: '',
      passport: '',
    });
  };

  // Separate common personal fields and document-specific fields
  const commonFields = legalDoc.requiredFields.filter((f) => f.isCommonField);
  const specificFields = legalDoc.requiredFields.filter((f) => !f.isCommonField);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onProceedToEditor(liveFilledText, formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Top Breadcrumb & Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-colors shadow-xs"
            title="Katalogga qaytish"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                {legalDoc.categoryName}
              </span>
              <span className="text-xs text-slate-500 font-mono">
                Andoza #{legalDoc.id}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-1">
              {legalDoc.title}
            </h1>
          </div>
        </div>

        {/* Mobile View Switcher */}
        <div className="flex lg:hidden bg-slate-200 p-1 rounded-xl w-full sm:w-auto">
          <button
            onClick={() => setActiveMobileView('form')}
            className={`flex-1 sm:flex-none px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeMobileView === 'form'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600'
            }`}
          >
            Ma'lumotlar formasi
          </button>
          <button
            onClick={() => setActiveMobileView('preview')}
            className={`flex-1 sm:flex-none px-4 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeMobileView === 'preview'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            Jonli ko'rinish
          </button>
        </div>
      </div>

      {/* Main 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form */}
        <div
          className={`lg:col-span-6 space-y-6 ${
            activeMobileView === 'preview' ? 'hidden lg:block' : 'block'
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Autofill card */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-5 text-white shadow-md flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Avtomatik to'ldirish
                </span>
                <h3 className="text-sm font-bold text-white">
                  Shaxsiy ma'lumotlaringizni kiritish
                </h3>
                <p className="text-xs text-blue-200">
                  Ism, Familiya, Telefon va Manzil hujjatga avtomatik biriktiriladi.
                </p>
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleLoadFromProfile}
                  className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  Profilimdan yuklash
                </button>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="px-3.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 text-[11px] transition-colors flex items-center justify-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  Tozalash
                </button>
              </div>
            </div>

            {/* Common Personal Fields Section */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    1. Asosiy shaxsiy ma'lumotlar
                  </h3>
                  <p className="text-xs text-slate-500">
                    Ariza beruvchi (Da'vogar) to'g'risidagi ma'lumotlar
                  </p>
                </div>
                <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  Majburiy maydonlar
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Familiya <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName || ''}
                    onChange={(e) => handleFieldChange('lastName', e.target.value)}
                    placeholder="Valiyev"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-slate-50/40 focus:bg-white transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Ism <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName || ''}
                    onChange={(e) => handleFieldChange('firstName', e.target.value)}
                    placeholder="Ali"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-slate-50/40 focus:bg-white transition-all font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Otasining ismi (Sharifi)
                </label>
                <input
                  type="text"
                  value={formData.middleName || ''}
                  onChange={(e) => handleFieldChange('middleName', e.target.value)}
                  placeholder="Hasanovich"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-slate-50/40 focus:bg-white transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Telefon raqami <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.phone || ''}
                    onChange={(e) => handleFieldChange('phone', e.target.value)}
                    placeholder="+998901234567"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-slate-50/40 focus:bg-white transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Pasport / ID-karta
                  </label>
                  <input
                    type="text"
                    value={formData.passport || ''}
                    onChange={(e) => handleFieldChange('passport', e.target.value)}
                    placeholder="AA 1234567"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-slate-50/40 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Doimiy yashash manzili <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={2}
                  value={formData.address || ''}
                  onChange={(e) => handleFieldChange('address', e.target.value)}
                  placeholder="Namangan shahri, Bobur shoh ko'chasi 15-uy"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-slate-50/40 focus:bg-white transition-all resize-none"
                />
              </div>
            </div>

            {/* Document-specific Fields Section */}
            {specificFields.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="pb-3 border-b border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900">
                    2. Mazkur hujjatga xos ma'lumotlar
                  </h3>
                  <p className="text-xs text-slate-500">
                    Sud, qarzdor yoki hodisa tafsilotlarini kiriting
                  </p>
                </div>

                <div className="space-y-4">
                  {specificFields.map((field) => (
                    <div key={field.key}>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {field.label}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          rows={3}
                          value={formData[field.key] || ''}
                          onChange={(e) => handleFieldChange(field.key, e.target.value)}
                          placeholder={field.placeholder}
                          className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-slate-50/40 focus:bg-white transition-all resize-y"
                        />
                      ) : (
                        <input
                          type={field.type === 'date' ? 'date' : 'text'}
                          value={formData[field.key] || ''}
                          onChange={(e) => handleFieldChange(field.key, e.target.value)}
                          placeholder={field.placeholder}
                          className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-slate-50/40 focus:bg-white transition-all"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Submit Action */}
            <div className="sticky bottom-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg flex items-center justify-between gap-4">
              <span className="text-xs text-slate-600 hidden sm:inline">
                Ma'lumotlar to'ldirildi. Matnni to'liq tahrirlash uchun muharrirga o'ting:
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <FileEdit className="w-4 h-4" />
                Muharrirda tahrirlash &amp; Saqlash
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Real-time Live Document Preview */}
        <div
          className={`lg:col-span-6 space-y-4 ${
            activeMobileView === 'form' ? 'hidden lg:block' : 'block'
          }`}
        >
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 font-sans">
                Jonli hujjat ko'rinishi (Avtomatik to'ldirish)
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">
              A4 Format
            </span>
          </div>

          {/* Paper Container */}
          <div className="bg-slate-200/80 p-3 sm:p-5 rounded-2xl border border-slate-300 shadow-inner max-h-[85vh] overflow-y-auto">
            <div 
              id="printable-legal-document"
              className="legal-paper rounded-lg border border-slate-200/80"
            >
              {/* Official legal watermark or header */}
              <div className="border-b border-slate-200 pb-3 mb-6 text-center text-xs text-slate-500 flex items-center justify-between">
                <span className="font-sans font-medium text-slate-600">
                  HUQUQIY HUJJATLAR
                </span>
                <span className="font-sans text-[11px] text-slate-500">
                  {legalDoc.legalBasis.lawName}
                </span>
              </div>

              {/* Document Text */}
              <div className="whitespace-pre-wrap font-serif text-[13px] sm:text-[14px] leading-relaxed text-slate-900">
                {liveFilledText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
