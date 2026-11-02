import React, { useState, useEffect } from 'react';
import { X, Check, Save, User, ShieldCheck } from 'lucide-react';
import { UserProfile } from '../types';
import { getUserProfile, saveUserProfile } from '../utils/storage';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProfileUpdated: (profile: UserProfile) => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  onProfileUpdated,
}) => {
  const [profile, setProfile] = useState<UserProfile>(getUserProfile());
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setProfile(getUserProfile());
      setSavedSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveUserProfile(profile);
    onProfileUpdated(profile);
    setSavedSuccess(true);
    setTimeout(() => {
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif">Mening ma'lumotlarim (Profil)</h3>
              <p className="text-xs text-slate-300">
                Andozalarni avtomatik to'ldirish uchun shaxsiy ma'lumotlar
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-900 flex items-start gap-2.5">
            <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <p>
              Ma'lumotlaringiz faqat qurilmangizdagi <strong>brauzer xotirasida (localStorage)</strong> saqlanadi. Hech qanday server yoki tashqi bazaga yuborilmaydi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Familiya *
              </label>
              <input
                type="text"
                required
                value={profile.lastName}
                onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                placeholder="Valiyev"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Ism *
              </label>
              <input
                type="text"
                required
                value={profile.firstName}
                onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                placeholder="Ali"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Otasining ismi (Sharifi)
            </label>
            <input
              type="text"
              value={profile.middleName || ''}
              onChange={(e) => setProfile({ ...profile, middleName: e.target.value })}
              placeholder="Hasanovich"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Telefon raqami *
            </label>
            <input
              type="text"
              required
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              placeholder="+998901234567"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Doimiy yashash manzili *
            </label>
            <textarea
              required
              rows={2}
              value={profile.address}
              onChange={(e) => setProfile({ ...profile, address: e.target.value })}
              placeholder="Toshkent shahri, Yunusobod tumani, 12-mavze, 4-uy, 15-xonadon"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Pasport yoki ID-karta ma'lumotlari
            </label>
            <input
              type="text"
              value={profile.passportSeries || ''}
              onChange={(e) => setProfile({ ...profile, passportSeries: e.target.value })}
              placeholder="AA 1234567, 15.04.2020 yilda berilgan"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          {/* Footer Actions */}
          <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              className={`flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white rounded-lg transition-all shadow-md ${
                savedSuccess ? 'bg-emerald-600' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/25'
              }`}
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  Saqlandi!
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Profilni saqlash
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
