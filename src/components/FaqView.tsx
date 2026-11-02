import React from 'react';
import { 
  HelpCircle, 
  ExternalLink, 
  ShieldCheck, 
  Landmark, 
  Scale, 
  FileCheck, 
  AlertCircle,
  CreditCard,
  Send
} from 'lucide-react';

export const FaqView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-1">
          <HelpCircle className="w-3.5 h-3.5" />
          Yuridik Qo'llanma &amp; Maslahatlar
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
          O'zbekiston sudlariga hujjat topshirish tartibi
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Rasmiy arizalar, davlat boji imtiyozlari, my.sud.uz va qonuniy me'yorlar bo'yicha amaliy qo'llanma
        </p>
      </div>

      {/* Guide Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: E-SUD */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                1. my.sud.uz orqali ariza yuborish
              </h3>
              <p className="text-xs text-slate-500">
                Elektron sud axborot tizimi
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Hujjatni ushbu saytda to'ldirib, Word yoki PDF formatida yuklab olganingizdan so'ng, sudga bormasdan <strong>my.sud.uz</strong> portali orqali OneID (ERI kalit yoki Mobile-ID) bilan kirib, elektron tartibda yuborishingiz mumkin.
          </p>
          <a
            href="https://my.sud.uz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline"
          >
            my.sud.uz portaliga o'tish
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Card 2: Davlat boji */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                2. Davlat boji va imtiyozlar
              </h3>
              <p className="text-xs text-slate-500">
                "Davlat boji to'g'risida"gi O'RQ-600-son Qonun
              </p>
            </div>
          </div>
          <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
            <p>
              Quyidagi toifadagi da'volar bo'yicha da'vogarlar sudga murojaat qilishda <strong>davlat boji to'lashdan to'liq ozod qilinadi</strong>:
            </p>
            <ul className="list-disc pl-4 space-y-1 text-slate-700">
              <li>Aliment undirish to'g'risidagi arizalar;</li>
              <li>Oylik ish haqini undirish va mehnat nizolari;</li>
              <li>Iste'molchilar huquqlarini himoya qilish da'volari;</li>
              <li>I va II guruh nogironligi bo'lgan shaxslar.</li>
            </ul>
          </div>
        </div>

        {/* Card 3: FPK 189-191 */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                3. Da'vo arizasiga qo'yiladigan talablar
              </h3>
              <p className="text-xs text-slate-500">
                FPKning 189 va 191-moddalari
              </p>
            </div>
          </div>
          <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
            <p>
              Sud arizani qabul qilishi uchun quyidagilar bo'lishi shart:
            </p>
            <ul className="list-disc pl-4 space-y-1 text-slate-700">
              <li>Sudning aniq nomi;</li>
              <li>Da'vogar va javobgarning F.I.Sh., manzili va telefonlari;</li>
              <li>Huquq buzilishi holatlari va asoslovchi dalillar;</li>
              <li>Da'vo talabi va ilova qilingan hujjatlar ro'yxati.</li>
            </ul>
          </div>
        </div>

        {/* Card 4: Lex.uz */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                4. lex.uz milliy qonunchilik bazasi
              </h3>
              <p className="text-xs text-slate-500">
                Adliya vazirligining rasmiy axborot portali
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Ushbu saytdagi barcha 120 ta andoza O'zbekiston Respublikasining amaldagi qonunlari, yangi tahrirdagi Mehnat kodeksi, Oila kodeksi, Fuqarolik kodeksiga to'liq moslashtirilgan.
          </p>
          <a
            href="https://lex.uz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 hover:underline"
          >
            lex.uz qonunchilik bazasiga o'tish
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
