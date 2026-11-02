import { LegalDocument } from '../../types';
import { COMMON_PERSONAL_FIELDS } from '../commonFields';

export const CRIMINAL_AND_CIVIL_DOCS: LegalDocument[] = [
  // JINOYAT ISHLARI
  {
    id: 'jin-01',
    title: 'Firibgarlik holati yuzasidan jinoyat ishi qo\'zg\'atish to\'g\'risida ariza',
    category: 'jinoyat-ishlari',
    categoryName: 'Jinoyat ishlari',
    description: 'Ishonchni suiiste\'mol qilish yoki aldash yo\'li bilan pul yoki mulkni o\'zlashtirgan shaxsga nisbatan Jinoyat kodeksining 168-moddasi bo\'yicha tuman IIB/Prokuraturasiga ariza.',
    keywords: ['firibgarlik', 'jinoyat ishi', 'aldov', 'pul o\'g\'irlash', 'JK 168', 'JPK 39-modda'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Jinoyat kodeksi va JPK',
      article: 'JK 168-modda, JPK 39, 41, 329-330-moddalar',
      lexUrl: 'https://lex.uz/docs/111460',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetLawEnforcement', label: 'Tegishli organ nomi', placeholder: 'Toshkent shahar Mirzo Ulug\'bek tumani IIO FMB boshlig\'iga', type: 'text' },
      { key: 'suspectName', label: 'Gumon qilinuvchi shaxs F.I.Sh.', placeholder: 'Alimov Baxtiyor Komilovich', type: 'text' },
      { key: 'suspectPhone', label: 'Gumon qilinuvchining telefoni (agar bo\'lsa)', placeholder: '+998 90 999 88 77', type: 'text' },
      { key: 'incidentDate', label: 'Hodisa yuz bergan sana va joy', placeholder: '2024-yil 15-yanvar kuni Toshkent shahrida', type: 'text' },
      { key: 'fraudAmount', label: 'Yetkazilgan moddiy zarar miqdori', placeholder: '50 000 000 (ellik million) so\'m', type: 'text' },
      { key: 'incidentNarrative', label: 'Hodisaning to\'liq bayoni va dalillar', placeholder: 'Menga mashina olib berishni va\'da qilib, aldash yo\'li bilan pulimni olib, o\'z ehtiyojlariga sarflab yuborgan, qo\'ng\'iroqlarga javob bermayapti', type: 'textarea' },
    ],
    templateText: `{{targetLawEnforcement}}ga

Ariza beruvchi: {{fullName}}
Pasport/ID: {{passport}}
Yashash manzili: {{address}}
Telefon: {{phone}}

ARIZA
(Firibgarlik jinoyati sodir etilganligi to'g'risida)

Sizga shuni ma'lum qilamanki, {{incidentDate}}da fuqaro {{suspectName}} (telefon: {{suspectPhone}}) mening ishonchimga kirib, quyidagi firibgarlik harakatini sodir etdi:

{{incidentNarrative}}.

Natijada menga {{fraudAmount}} miqdorida jiddiy moddiy zarar yetkazildi. O'tgan vaqt davomida u turli bahonalar bilan pulni qaytarmasdan, menga nisbatan qasddan aldash va ishonchni suiiste'mol qilish yo'lini qo'llab kelmoqda.

O'zbekiston Respublikasi Jinoyat kodeksining 168-moddasiga ko'ra, firibgarlik, ya'ni aldash yoki ishonchni suiiste'mol qilish yo'li bilan o'zganing mulkini yoki o'zganing mulkiga bo'lgan huquqni qo'lga kiritish jinoiy javobgarlikka sabab bo'ladi.

O'zbekiston Respublikasi JPKning 39, 41 va 329-moddalariga muvofiq, O'zbekiston Respublikasi Jinoyat kodeksining 237-moddasiga asosan bila turib yolg'on chaquv qilganlik uchun jinoiy javobgarlik haqida ogohlantirilgan holda,

SO'RAYMAN:

1. Mazkur holat yuzasidan zudlik bilan tergovga qadar tekshiruv o'tkazishingizni;
2. Fuqaro {{suspectName}}ning harakatlarida O'zbekiston Respublikasi JKning 168-moddasida nazarda tutilgan jinoyat alomatlari mavjudligi sababli unga nisbatan JINOYAT ISHI QO'ZG'ATISHINGIZNI;
3. Menga yetkazilgan {{fraudAmount}} miqdoridagi moddiy zararning to'liq undirilishini ta'minlashingizni.

Ilovalar:
1. Pul o'tkazmasi cheklari yoki bank ko'chirmasi.
2. Yozishmalar va audio yozuvlar skrinshotlari.
3. Pasport nusxam.

Ogohlantirildim (JK 237-moddasi): _______________
Ariza beruvchi: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'jin-02',
    title: 'O\'g\'rilik holati to\'g\'risida IIBga ariza',
    category: 'jinoyat-ishlari',
    categoryName: 'Jinoyat ishlari',
    description: 'Xususiy mulk yoki xonadonga yashirincha kirib mol-mulkni talon-toroj qilgan noma\'lum yoki ma\'lum shaxslarni jinoiy javobgarlikka tortish arizasi.',
    keywords: ['o\'g\'rilik', 'mulkni o\'g\'irlash', 'IIB', 'jinoyat kodeksi 169', 'tergov'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Jinoyat kodeksi',
      article: '169-modda',
      lexUrl: 'https://lex.uz/docs/111460',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetPolice', label: 'Ichki ishlar organi nomi', placeholder: 'Samarqand shahar IIO FMB boshlig\'iga', type: 'text' },
      { key: 'theftLocation', label: 'O\'g\'rilik sodir etilgan joy', placeholder: 'Menga tegishli savdo do\'koni (Samarqand sh., Rudakiy ko\'chasi 10-uy)', type: 'text' },
      { key: 'stolenItems', label: 'O\'g\'irlangan mulklar ro\'yxati va qiymati', placeholder: 'Noutbuk HP, tilla taqinchoqlar, 5 000 000 so\'m naqd pul. Jami qiymati 25 000 000 so\'m', type: 'textarea' },
    ],
    templateText: `{{targetPolice}}ga

Ariza beruvchi: {{fullName}}
Yashash manzili: {{address}}
Telefon: {{phone}}

ARIZA
(O'g'rilik jinoyati sodir etilganligi to'g'risida)

{{theftLocation}}da noma'lum shaxslar tomonidan yashirin ravishda mulklarim talon-toroj qilingan.

O'g'irlangan mulklar va zarar miqdori:
{{stolenItems}}.

O'zbekiston Respublikasi Jinoyat kodeksining 169-moddasi (O'g'rilik) hamda JPK 329-moddasiga asosan jinoyat ishi qo'zg'atishingizni va aybdor shaxslarni aniqlab, qonuniy jazo berishingizni so'rayman.

Bila turib yolg'on chaquv qilganlik uchun JK 237-moddasi bo'yicha javobgarlik haqida ogohlantirildim.

Ariza beruvchi: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'jin-03',
    title: 'Tuhmat va haqorat uchun jinoiy/ma\'muriy javobgarlikka tortish haqida ariza',
    category: 'jinoyat-ishlari',
    categoryName: 'Jinoyat ishlari',
    description: 'Ijtimoiy tarmoqlarda yoki omma oldida sha\'n va qadr-qimmatni kamsituvchi, bila turib yolg\'on ma\'lumot tarqatgan shaxsga nisbatan ariza.',
    keywords: ['tuhmat', 'haqorat', 'sha\'n va qadr-qimmat', 'MJtK 40', 'JK 139', 'JK 140'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi JK 139, 140-moddalar, MJtK 40, 41-moddalar',
      article: 'JK 139-140, MJtK 40-41',
      lexUrl: 'https://lex.uz/docs/111460',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetAuthority', label: 'Tuman IIB yoki Sud nomi', placeholder: 'Yunusobod tumani IIO FMB boshlig\'iga', type: 'text' },
      { key: 'offenderName', label: 'Huquqbuzar F.I.Sh. (yoki profil ma\'lumoti)', placeholder: 'Sodiqov Dilshod (Telegramdagi @sodiqov_99 profili)', type: 'text' },
      { key: 'defamationDetails', label: 'Tuhmat/haqorat mazmuni va tarqatilgan joy', placeholder: 'Telegram guruhida mening nomimga asossiz o\'g\'ri va poraxo\'r deb yozib, behayo so\'zlar bilan haqorat qilgan', type: 'textarea' },
    ],
    templateText: `{{targetAuthority}}ga

Ariza beruvchi: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

ARIZA
(Tuhmat va haqorat uchun javobgarlikka tortish to'g'risida)

Fuqaro {{offenderName}} tomonidan sha'nim va qadr-qimmatimni bevosita kamsituvchi harakatlar sodir etildi: {{defamationDetails}}.

Ushbu noqonuniy harakatlar meni omma oldida noqulay ahvolga solib, ruhiy azob chekishimga sabab bo'lmoqda.

SO'RAYMAN:

Fuqaro {{offenderName}}ni qonunda belgilangan tartibda javobgarlikka tortishingizni so'rayman.

Ilovalar:
1. Skrinshotlar va audio/video yozuvlar.
2. Pasport nusxam.

Ariza beruvchi: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'jin-04',
    title: 'Jinoyat ishi bo\'yicha jabrlanuvchi deb e\'tirof etish to\'g\'risida iltimosnoma',
    category: 'jinoyat-ishlari',
    categoryName: 'Jinoyat ishlari',
    description: 'Dastlabki tergov organiga jinoyat oqibatida ma\'naviy yoki moddiy zarar ko\'rgan shaxsni rasman jabrlanuvchi maqomiga kiritish to\'g\'risida iltimosnoma.',
    keywords: ['jabrlanuvchi', 'iltimosnoma', 'tergov', 'JPK 54', 'JPK 55'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Jinoyat-protsessual kodeksi',
      article: '54, 55-moddalar',
      lexUrl: 'https://lex.uz/docs/111463',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'investigatorTitle', label: 'Tergovchi yoki tergov bo\'limi', placeholder: 'Yakkasaroy tumani IIO FMB tergov bo\'limi tergovchisi nomiga', type: 'text' },
      { key: 'caseNumber', label: 'Jinoyat ishi raqami', placeholder: '№ 12/2024-sonli jinoyat ishi', type: 'text' },
      { key: 'damageDescription', label: 'Yetkazilgan zarar bayoni', placeholder: 'Sodir etilgan jinoyat natijasida sog\'lig\'imga o\'rtacha og\'irlikdagi shikast yetkazilgan', type: 'textarea' },
    ],
    templateText: `{{investigatorTitle}}ga

Iltimosnoma beruvchi: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

ILTIMOSNOMA
(Jabrlanuvchi deb e'tirof etish to'g'risida)

Sizning ish yurituvuvizda turgan {{caseNumber}} bo'yicha menga nisbatan quyidagi zarar yetkazilgan: {{damageDescription}}.

O'zbekiston Respublikasi JPKning 54-moddasiga ko'ra, jinoyat natijasida ma'naviy, jismoniy yoki mulkiy zarar ko'rgan shaxs jabrlanuvchi deb e'tirof etiladi.

SO'RAYMAN:

Meni mazkur jinoyat ishi bo'yicha jabrlanuvchi deb e'tirof etish to'g'risida qaror chiqarishingizni hamda JPK 55-moddasida nazarda tutilgan barcha huquqlarimni tushuntirishingizni.

Iltimosnoma beruvchi: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'jin-05',
    title: 'Jinoyat ishi bo\'yicha fuqaroviy da\'vo arizasi (Zararni undirish)',
    category: 'jinoyat-ishlari',
    categoryName: 'Jinoyat ishlari',
    description: 'Jinoyat oqibatida yetkazilgan moddiy va ma\'naviy zararni ayblanuvchidan sud orqali undirish to\'g\'risida jinoyat ishi doirasidagi da\'vo.',
    keywords: ['fuqaroviy da\'vo', 'jinoyat ishi', 'zararni qoplash', 'JPK 56-57', 'FK 985'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Jinoyat-protsessual kodeksi',
      article: '56, 57, 275-283-moddalar',
      lexUrl: 'https://lex.uz/docs/111463',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCriminalCourt', label: 'Jinoyat ishlari bo\'yicha sud nomi', placeholder: 'Jinoyat ishlari bo\'yicha Mirobod tuman sudiga', type: 'text' },
      { key: 'defendantAccused', label: 'Sudlanuvchi (ayblanuvchi) F.I.Sh.', placeholder: 'Karimov Jasur', type: 'text' },
      { key: 'materialDamage', label: 'Moddiy zarar miqdori (so\'mda)', placeholder: '32 500 000 so\'m', type: 'text' },
      { key: 'moralDamage', label: 'Ma\'naviy zarar miqdori (so\'mda)', placeholder: '10 000 000 so\'m', type: 'text' },
    ],
    templateText: `{{targetCriminalCourt}}ga

Fuqaroviy da'vogar: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

Sudlanuvchi: {{defendantAccused}}

JINOYAT ISHI DOIRASIDA FUQAROVIY DA'VO ARIZASI
(Yetkazilgan moddiy va ma'naviy zararni qoplash to'g'risida)

Sud ko'rib chiqayotgan sudlanuvchi {{defendantAccused}}ga nisbatan bo'lgan jinoyat ishi bo'yicha men jabrlanuvchi hisoblanaman.

Sudlanuvchining jinoiy harakatlari natijasida menga {{materialDamage}} miqdorida moddiy va {{moralDamage}} miqdorida ma'naviy zarar yetkazildi.

JPK 56-moddasi va Fuqarolik kodeksining 985, 1021-moddalariga asosan,

SO'RAYMAN:

Sudlanuvchi {{defendantAccused}}dan mening foydamga:
1. Moddiy zarar uchun {{materialDamage}};
2. Ma'naviy zarar uchun {{moralDamage}} undirib berishingizni.

Ilovalar:
Davolanish, ekspertiza va zararni tasdiqlovchi kvitansiyalar.

Fuqaroviy da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'jin-06',
    title: 'Yarashuv to\'g\'risida ariza (JK 66-1-moddasi asosida javobgarlikdan ozod qilish)',
    category: 'jinoyat-ishlari',
    categoryName: 'Jinoyat ishlari',
    description: 'Jabrlanuvchi va ayblanuvchi o\'zaro yarashganligi, zarar to\'liq qoplanganligi sababli jinoyat ishini tugatish haqida sudga murojaat.',
    keywords: ['yarashuv', 'yarashuv to\'g\'risida ariza', 'JK 66-1', 'ishni tugatish'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Jinoyat kodeksi',
      article: '66-1-modda',
      lexUrl: 'https://lex.uz/docs/111460',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'courtName', label: 'Sud nomi', placeholder: 'Jinoyat ishlari bo\'yicha Olmazor tuman sudiga', type: 'text' },
      { key: 'accusedName', label: 'Sudlanuvchi F.I.Sh.', placeholder: 'Usmonov Otabek', type: 'text' },
      { key: 'reconciliationTerms', label: 'Zarar qoplangani va da\'vo yo\'qligi tafsiloti', placeholder: 'Yetkazilgan barcha zarar ixtiyoriy ravishda to\'liq qoplandi, hech qanday da\'vom yo\'q', type: 'textarea' },
    ],
    templateText: `{{courtName}}ga

Jabrlanuvchi: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

ARIZA
(Taraflarning yarashganligi munosabati bilan)

Sudlanuvchi {{accusedName}}ga nisbatan ko'rilayotgan jinoyat ishi bo'yicha biz o'zaro ixtiyoriy yarashdik: {{reconciliationTerms}}.

O'zbekiston Respublikasi Jinoyat kodeksining 66-1-moddasiga asosan sudlanuvchi {{accusedName}}ni jinoiy javobgarlikdan ozod qilib, jinoyat ishini tugatishingizni so'rayman.

Jabrlanuvchi: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'jin-07',
    title: 'Jinoyat ishi materiallari bilan tanishish to\'g\'risida iltimosnoma',
    category: 'jinoyat-ishlari',
    categoryName: 'Jinoyat ishlari',
    description: 'Tergov tugaganda jabrlanuvchi yoki himoyachining barcha hujjatlar bilan to\'liq tanishib chiqishi bo\'yicha iltimosnoma.',
    keywords: ['ish materiallari', 'tanishish', 'JPK 375', 'tergov'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Jinoyat-protsessual kodeksi',
      article: '375-381-moddalar',
      lexUrl: 'https://lex.uz/docs/111463',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'investigatorName', label: 'Tergov organi/tergovchi', placeholder: 'Toshkent shahar IIBB Tergov boshqarmasi tergovchisiga', type: 'text' },
      { key: 'caseId', label: 'Jinoyat ishi raqami', placeholder: '№ 01/2024', type: 'text' },
    ],
    templateText: `{{investigatorName}}ga

Jabrlanuvchi / Ariza beruvchi: {{fullName}}
Telefon: {{phone}}

ILTIMOSNOMA
(Ish materiallari bilan tanishish haqida)

{{caseId}}-sonli jinoyat ishi bo'yicha O'zbekiston Respublikasi JPKning 375-moddasiga asosan tergov hujjatlari bilan to'liq tanishib chiqishim uchun imkoniyat yaratib berishingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'jin-08',
    title: 'Ehtiyot chorasini o\'zgartirish to\'g\'risida iltimosnoma (Qamoqdan garovga)',
    category: 'jinoyat-ishlari',
    categoryName: 'Jinoyat ishlari',
    description: 'Qamoqqa olish ehtiyot chorasini garov yoki munosib xulq-atvorda bo\'lish to\'g\'risidagi tilxatga o\'zgartirish to\'g\'risida sudga iltimosnoma.',
    keywords: ['ehtiyot chorasi', 'garov', 'qamoqni bekor qilish', 'JPK 242'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Jinoyat-protsessual kodeksi',
      article: '242-249-moddalar',
      lexUrl: 'https://lex.uz/docs/111463',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'courtName', label: 'Sud nomi', placeholder: 'Jinoyat ishlari bo\'yicha Shayxontohur tuman sudiga', type: 'text' },
      { key: 'accusedFullName', label: 'Gumon qilinuvchi/ayblanuvchi F.I.Sh.', placeholder: 'Hojiyev Kamoliddin', type: 'text' },
      { key: 'bailAmount', label: 'Taklif qilinayotgan garov summasi', placeholder: '50 000 000 so\'m', type: 'text' },
    ],
    templateText: `{{courtName}}ga

Himoyachi / Qonuniy vakil: {{fullName}}
Telefon: {{phone}}

ILTIMOSNOMA
(Qamoq ehtiyot chorasini garovga o'zgartirish haqida)

Ayblanuvchi {{accusedFullName}}ga nisbatan qo'llanilgan qamoqqa olish ehtiyot chorasini JPK 249-moddasiga muvofiq {{bailAmount}} miqdoridagi garov ehtiyot chorasiga o'zgartirishingizni so'rayman. Ayblanuvchi tergovdan qochish niyati yo'q, doimiy yashash joyiga va qaramog'ida yosh bolalarga ega.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },

  // FUQAROLIK ISHLARI
  {
    id: 'fuq-01',
    title: 'Qarz shartnomasi bo\'yicha pul mablag\'larini undirish haqida da\'vo arizasi',
    category: 'fuqarolik-ishlari',
    categoryName: 'Fuqarolik ishlari',
    description: 'Tilxat (tilxat asosida) yoki yozma qarz shartnomasi bo\'yicha olingan qarzni muddatida qaytarmagan qarzdordan mablag\'ni majburiy undirish.',
    keywords: ['qarz undirish', 'tilxat', 'qarz shartnomasi', 'FK 732', 'fuqarolik da\'vo'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '732-736-moddalar',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Uchtepa tumanlararo sudiga', type: 'text' },
      { key: 'debtorName', label: 'Qarzdor (javobgar) F.I.Sh.', placeholder: 'Nematov Alisher Bahromovich', type: 'text' },
      { key: 'debtorAddress', label: 'Qarzdorning manzili', placeholder: 'Toshkent shahri, Uchtepa tumani, 26-mavze', type: 'text' },
      { key: 'loanDate', label: 'Qarz berilgan sana', placeholder: '10.03.2023', type: 'date' },
      { key: 'repaymentDeadline', label: 'Qaytarish va\'da qilingan sana', placeholder: '10.09.2023', type: 'date' },
      { key: 'loanAmount', label: 'Asosiy qarz summasi', placeholder: '40 000 000 (qirq million) so\'m', type: 'text' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Pasport/ID: {{passport}}
Yashash manzili: {{address}}
Telefon: {{phone}}

Javobgar: {{debtorName}}
Manzil: {{debtorAddress}}

Da'vo bahosi: {{loanAmount}}

DA'VO ARIZASI
(Qarz summasini undirish to'g'risida)

{{loanDate}} yilda javobgar {{debtorName}} mendan {{repaymentDeadline}} kuniga qadar qaytarib berish sharti bilan {{loanAmount}} miqdorida qarz olgan. Mazkur qarz fakti bo'yicha javobgar o'z qo'li bilan yozma tilxat bergan edi.

Biroq ko'rsatilgan muddat o'tgan bo'lsa-da, javobgar qarzni qaytarmasdan kelmoqda. Mening bir necha bor og'zaki va yozma talablarim e'tiborsiz qoldirildi.

O'zbekiston Respublikasi Fuqarolik kodeksining 732-moddasiga asosan, qarz shartnomasi bo'yicha bir taraf (qarz beruvchi) ikkinchi tarafga (qarz oluvchiga) pul beradi, qarz oluvchi esa olingan pul summasini qarz beruvchiga qaytarib berish majburiyatini oladi. FKning 735-moddasiga ko'ra, qarz oluvchi olingan qarz summasini qarz shartnomasida nazarda tutilgan muddatda va tartibda qaytarishi shart.

Yuqoridagilarga asosan,

SO'RAYMAN:

Javobgar {{debtorName}}dan mening foydamga {{loanAmount}} miqdoridagi asosiy qarz summasini hamda davlat boji xarajatlarini undirishingizni.

Ilovalar:
1. Qarz tilxati (asl nusxasi sud majlisida taqdim etiladi).
2. Talabnoma xati nusxasi.
3. Davlat boji to'langanligi kvitansiyasi.
4. Da'vo arizasi nusxasi.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'fuq-02',
    title: 'Yetkazilgan moddiy zararni qoplash haqida da\'vo arizasi',
    category: 'fuqarolik-ishlari',
    categoryName: 'Fuqarolik ishlari',
    description: 'Yo\'l-transport hodisasi, xonadonni suv bosishi yoki mulkka ziyon yetkazilgan holatlarda ziyon yetkazuvchidan to\'liq zararni undirish.',
    keywords: ['zararni qoplash', 'FK 985', 'moddiy zarar', 'mulkka ziyon'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '985, 14-moddalar',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Sergeli tumanlararo sudiga', type: 'text' },
      { key: 'defendantName', label: 'Javobgar F.I.Sh.', placeholder: 'G\'aniyev Farhod', type: 'text' },
      { key: 'damageDetails', label: 'Zarar keltirish holati va baholash xulosasi', placeholder: 'Javobgar aybi bilan avariya yuz berib mashinam pachoq bo\'ldi, baholash xulosasiga binoan zarar 18 000 000 so\'m', type: 'textarea' },
      { key: 'claimSum', label: 'Undirilishi so\'ralayotgan summa', placeholder: '18 000 000 so\'m', type: 'text' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

Javobgar: {{defendantName}}
Da'vo bahosi: {{claimSum}}

DA'VO ARIZASI
(Yetkazilgan moddiy zararni undirish to'g'risida)

Javobgar {{defendantName}}ning aybli harakatlari oqibatida: {{damageDetails}}.

O'zbekiston Respublikasi FKning 985-moddasiga ko'ra, g'ayriqonuniy harakat (harakatsizlik) tufayli fuqaroning shaxsiga yoki mol-mulkiga yetkazilgan zarar uni yetkazgan shaxs tomonidan to'liq hajmda qoplanishi shart.

SO'RAYMAN:

Javobgar {{defendantName}}dan mening foydamga {{claimSum}} miqdorida yetkazilgan zarar hamda to'langan davlat bojini undirishingizni.

Ilovalar:
1. Baholash dalolatnomasi.
2. Huquqbuzarlik bayonnomasi.
3. Davlat boji to'lovi.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'fuq-03',
    title: 'Yuridik ahamiyatga ega bo\'lgan faktni (tug\'ilganlik/o\'lim/qarindoshlik) belgilash haqida ariza',
    category: 'fuqarolik-ishlari',
    categoryName: 'Fuqarolik ishlari',
    description: 'Hujjatlarda xatolik ketgan yoki arxivda saqlanmagan hollarda qarindoshlik aloqalari, ism-familiyadagi nomuvofiqlikni sud tartibida tasdiqlash.',
    keywords: ['yuridik fakt', 'qarindoshlikni belgilash', 'FPK 288', 'arxiv hujjat'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik protsessual kodeksi',
      article: '288, 289-moddalar',
      lexUrl: 'https://lex.uz/docs/3517337',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Farg\'ona tumanlararo sudiga', type: 'text' },
      { key: 'factToEstablish', label: 'Belgilanishi lozim bo\'lgan fakt', placeholder: 'Mening marhum otam bilan qarindoshlik (ota-bola) faktini belgilash', type: 'text' },
      { key: 'inconsistencyDetails', label: 'Nomuvofiqlik sababi va FHDYo rad javobi', placeholder: 'Metrikada otamning familiyasi bitta harf farq bilan yozilgan, FHDYo o\'zgartirish kiritishni rad etdi', type: 'textarea' },
    ],
    templateText: `{{targetCourt}}ga

Ariza beruvchi: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

Manfaatdor shaxs: Tuman FHDYo bo'limi

ARIZA
(Yuridik ahamiyatga ega bo'lgan faktni belgilash to'g'risida)

Menga merosni rasmiylashtirish uchun {{factToEstablish}} zarur bo'lmoqda. Biroq {{inconsistencyDetails}}. Ushbu faktni boshqa tartibda tiklash imkoni yo'q.

O'zbekiston Respublikasi FPKning 288-moddasiga binoan,

SO'RAYMAN:

{{factToEstablish}} faktini belgilashingizni.

Ilovalar:
1. FHDYo rad javobi.
2. Arxiv ma'lumotnomasi.
3. Guvohlar ko'rsatmalari.

Ariza beruvchi: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'fuq-04',
    title: 'Fuqaroni bedarak yo\'qolgan deb topish to\'g\'risida ariza',
    category: 'fuqarolik-ishlari',
    categoryName: 'Fuqarolik ishlari',
    description: 'Bir yil davomida yashash joyida ma\'lumot bo\'lmagan fuqaroni sud orqali bedarak yo\'qolgan deb e\'tirof etish.',
    keywords: ['bedarak yo\'qolgan', 'FK 33', 'FPK 290'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '33-modda',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Qarshi tumanlararo sudiga', type: 'text' },
      { key: 'missingPerson', label: 'Yo\'qolgan shaxs F.I.Sh.', placeholder: 'Sattorov Shokir', type: 'text' },
      { key: 'lastSeenDetails', label: 'Oxirgi marta ko\'rilgan vaqt va qidiruv natijasi', placeholder: '2022-yil mart oyidan buyon qayerdaligi noma\'lum, IIB tomonidan qidiruv e\'lon qilingan', type: 'textarea' },
    ],
    templateText: `{{targetCourt}}ga

Ariza beruvchi: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

ARIZA
(Fuqaroni bedarak yo'qolgan deb topish to'g'risida)

Fuqaro {{missingPerson}} mening yaqinim bo'lib, uning yashash joyida bir yildan ortiq vaqt davomida hech qanday ma'lumot yo'q: {{lastSeenDetails}}.

FK 33-moddasi va FPK 290-moddasiga asosan,

SO'RAYMAN:

Fuqaro {{missingPerson}}ni bedarak yo'qolgan deb topishingizni.

Ilovalar: IIB qidiruv xati, mahalla ma'lumotnomasi.

Ariza beruvchi: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'fuq-05',
    title: 'Bitimni haqiqiy emas deb topish to\'g\'risida da\'vo arizasi',
    category: 'fuqarolik-ishlari',
    categoryName: 'Fuqarolik ishlari',
    description: 'Aldash, qo\'rqitish yoki qonun talablariga zid ravishda tuzilgan oldi-sotdi yoki hadya bitimini bekor qilish.',
    keywords: ['bitimni bekor qilish', 'haqiqiy emas deb topish', 'FK 113', 'aldov'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '113-128-moddalar',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Buxoro tumanlararo sudiga', type: 'text' },
      { key: 'defendantParty', label: 'Javobgar F.I.Sh.', placeholder: 'Sobirov Ulug\'bek', type: 'text' },
      { key: 'dealDetails', label: 'Tuzilgan bitim va haqiqiy emaslik asosi', placeholder: 'Ko\'chmas mulk hadya shartnomasi qattiq yanglishish va aldash ta\'sirida tuzilgan', type: 'textarea' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

Javobgar: {{defendantParty}}

DA'VO ARIZASI
(Bitimni haqiqiy emas deb topish haqida)

{{dealDetails}}. Mazkur bitim FK 116, 122-moddalariga zid ravishda amalga oshirilgan.

SO'RAYMAN:

Tuzilgan shartnomani haqiqiy emas deb topib, taraflarni dastlabki holatga qaytarishingizni.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'fuq-06',
    title: 'Asossiz boylik orttirish natijasida olingan mablag\'ni qaytarish haqida da\'vo',
    category: 'fuqarolik-ishlari',
    categoryName: 'Fuqarolik ishlari',
    description: 'Adashib o\'tkazilgan yoki hech qanday qonuniy asossiz egallab olingan pul mablag\'ini sud orqali majburiy qaytarish.',
    keywords: ['asossiz boylik', 'plastik kartadan xato o\'tkazma', 'FK 1023'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '1023-1025-moddalar',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Shayxontohur sudiga', type: 'text' },
      { key: 'recipientPerson', label: 'Javobgar F.I.Sh.', placeholder: 'Bekzodov Akmal', type: 'text' },
      { key: 'mistakeAmount', label: 'Adashib o\'tkazilgan summa', placeholder: '12 000 000 so\'m', type: 'text' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Telefon: {{phone}}

Javobgar: {{recipientPerson}}

DA'VO ARIZASI
(Asossiz boylikni qaytarish to'g'risida)

Bank ilovasi orqali javobgar kartasiga yanglishib {{mistakeAmount}} o'tkazilgan. Javobgar pulni qaytarishdan asossiz bosh tortmoqda.

FK 1023-moddasiga ko'ra,

SO'RAYMAN:

Javobgardan mening foydamga {{mistakeAmount}} miqdoridagi asossiz boylikni undirib berishingizni.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'fuq-07',
    title: 'Egalik huquqini vujudga keltiruvchi muddat (15 yil) asosida tan olish haqida da\'vo',
    category: 'fuqarolik-ishlari',
    categoryName: 'Fuqarolik ishlari',
    description: 'Ko\'chmas mulkka 15 yil davomida halol, oshkora va uzluksiz egalik qilgan shaxsning mulk huquqini e\'tirof etish.',
    keywords: ['egalik qilish muddati', 'mulk huquqi', 'FK 187'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '187-modda',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Zangiota tumanlararo sudiga', type: 'text' },
      { key: 'propertyAddress', label: 'Ko\'chmas mulk manzili', placeholder: 'Zangiota tumani, Guliston MFY, 45-uy', type: 'text' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Manzil: {{address}}

DA'VO ARIZASI
(Mulk huquqini egalik qilish muddati bo'yicha tan olish haqida)

Men {{propertyAddress}}dagi uy-joyga 15 yildan ortiq vaqt davomida halol, oshkora va uzluksiz egalik qilib, kommunal to'lovlarni to'lab kelmoqdaman.

FK 187-moddasiga ko'ra, ko'chmas mulkka o'n besh yil uzluksiz egalik qilgan shaxs unga mulk huquqini oladi.

SO'RAYMAN:

Mazkur mulkka nisbatan mulk huquqimni tan olishingizni.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'fuq-08',
    title: 'Fuqaroni muomala layoqatini cheklash haqida ariza',
    category: 'fuqarolik-ishlari',
    categoryName: 'Fuqarolik ishlari',
    description: 'Spirtli ichimliklar yoki giyohvand moddalarni suiiste\'mol qilib, oilasini og\'ir moddiy ahvolga solayotgan shaxsning muomala layoqatini cheklash.',
    keywords: ['muomala layoqati', 'vasiylik', 'FK 31'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '31-modda',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Andijon tumanlararo sudiga', type: 'text' },
      { key: 'personToLimit', label: 'Cheklanishi so\'ralayotgan shaxs F.I.Sh.', placeholder: 'Karimov Anvar', type: 'text' },
    ],
    templateText: `{{targetCourt}}ga

Ariza beruvchi: {{fullName}}
Manzil: {{address}}

ARIZA
(Fuqaroning muomala layoqatini cheklash haqida)

Fuqaro {{personToLimit}} muntazam spirtli ichimlik iste'mol qilib, oilamizni og'ir moddiy ahvolga solmoqda.

FK 31-moddasiga asosan uning muomala layoqatini cheklashingizni va homiy tayinlashingizni so'rayman.

Ariza beruvchi: _______________ / {{fullName}}
Sana: {{currentDate}}`
  }
];
