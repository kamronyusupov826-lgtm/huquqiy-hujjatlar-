import { LegalDocument } from '../../types';
import { COMMON_PERSONAL_FIELDS } from '../commonFields';

export const EDUCATION_AND_COMPLAINTS_DOCS: LegalDocument[] = [
  // TA'LIM
  {
    id: 'tal-01',
    title: 'Akademik ta\'til berish to\'g\'risida OTM rektori nomiga ariza',
    category: 'talim',
    categoryName: "Ta'lim",
    description: 'Talabaga sog\'lig\'i (davolanish), homiladorlik/tug\'ruq yoki harbiy xizmat sababli 1 yilgacha akademik ta\'til olish arizasi.',
    keywords: ['akademik ta\'til', 'OTM rektori', 'universitet arizasi', 'ta\'lim to\'g\'risida qonun'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasining "Ta\'lim to\'g\'risida"gi Qonuni va VM Qarorlari',
      article: 'Qonunning 11-moddasi, Akademik ta\'til berish tartibi to\'g\'risidagi Nizom',
      lexUrl: 'https://lex.uz/docs/5013007',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetUniversityRector', label: 'OTM nomi va rektor F.I.Sh.', placeholder: 'O\'zbekiston Milliy Universiteti rektori nomiga', type: 'text' },
      { key: 'facultyAndCourse', label: 'Fakultet, yo\'nalish va bosqich', placeholder: 'Iqtisodiyot fakulteti 3-bosqich talabasi', type: 'text' },
      { key: 'studentIdNumber', label: 'Talabalik ID raqami', placeholder: 'ID: 321-2021', type: 'text' },
      { key: 'academicLeaveReason', label: 'Akademik ta\'til so\'rash sababi', placeholder: 'Sog\'lig\'im yomonlashgani sababli uzoq muddatli statsionar davolanish zaruriyati (TKK xulosasi ilova qilinadi)', type: 'textarea' },
    ],
    templateText: `{{targetUniversityRector}}ga

{{facultyAndCourse}}
{{fullName}}dan ({{studentIdNumber}})
Telefon: {{phone}}

ARIZA
(Akademik ta'til berish to'g'risida)

Men mazkur universitetda tahsil olib kelmoqdaman. Biroq yuzaga kelgan quyidagi sababga ko'ra: {{academicLeaveReason}}, o'qishni odatdagi tartibda davom ettirishga imkoniyatim yo'q.

"O'zbekiston Respublikasi oliy ta'lim muassasalari talabalariga akademik ta'til berish to'g'risida"gi Nizom talablariga muvofiq,

SO'RAYMAN:

Menga joriy o'quv yilidan boshlab qonunda belgilangan muddatga akademik ta'til berishingizni va tegishli buyruq chiqarishingizni.

Ilova: Tibbiy-maslahat komissiyasi (TMK) xulosasi / chaqiruv qog'ozi.

Talaba: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'tal-02',
    title: 'O\'qishni boshqa oliy ta\'lim muassasasiga ko\'chirish (Perevod) to\'g\'risida ariza',
    category: 'talim',
    categoryName: "Ta'lim",
    description: 'Turmushga chiqish, doimiy yashash joyi o\'zgarishi yoki turmush o\'rtog\'ining xizmat joyi o\'zgarishi munosabati bilan talabaning o\'qishini ko\'chirish.',
    keywords: ['o\'qishni ko\'chirish', 'perevod', 'OTM perevod', 'talaba'],
    popular: true,
    legalBasis: {
      lawName: 'Talabalar o\'qishini ko\'chirish, qayta tiklash va o\'qishdan chetlashtirish tartibi to\'g\'risidagi Nizom',
      article: 'Vazirlar Mahkamasining 393-son qarori',
      lexUrl: 'https://lex.uz/docs/3244181',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetMinistryOrRector', label: 'Davlat komissiyasi yoki Qabul qiluvchi OTM rektori', placeholder: 'Toshkent davlat iqtisodiyot universiteti rektori nomiga', type: 'text' },
      { key: 'currentUniversity', label: 'Hozirgi o\'qiyotgan universiteti va mutaxassisligi', placeholder: 'Farg\'ona davlat universiteti Moliya yo\'nalishi 2-bosqich talabasi', type: 'text' },
      { key: 'transferJustification', label: 'O\'qishni ko\'chirish uchun uzrli sabab', placeholder: 'Toshkent shahriga turmushga chiqqanligim sababli doimiy yashash joyim o\'zgargan (nikoh guvohnomasi ilova qilinadi)', type: 'textarea' },
    ],
    templateText: `{{targetMinistryOrRector}}ga

{{currentUniversity}}
{{fullName}}dan
Telefon: {{phone}}

ARIZA
(O'qishni ko'chirish to'g'risida)

Men hozirda {{currentUniversity}}da tahsil olmoqdaman. {{transferJustification}} munosabati bilan o'qishimni Siz rahbarlik qilayotgan universitetning mos va turdosh ta'lim yo'nalishiga ko'chirishimga amaliy yordam berishingizni so'rayman.

Ilovalar:
1. Reyting daftarchasi yoki akademik ma'lumotnoma (transkript).
2. Ko'chirish sababini tasdiqlovchi rasmiy hujjatlar.
3. Pasport nusxasi.

Talaba: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'tal-03',
    title: 'To\'lov-kontrakt shartnoma pulini to\'lash muddatini uzaytirish haqida ariza',
    category: 'talim',
    categoryName: "Ta'lim",
    description: 'Moddiy qiyinchilik tufayli navbatdagi shartnoma to\'lovini amalga oshirish muddatini 1-2 oyga kechiktirish bo\'yicha ariza.',
    keywords: ['kontrakt to\'lovi', 'muddatni uzaytirish', 'shartnoma puli', 'universitet'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Oliy ta\'lim muassasalarida to\'lov-kontrakt asosida o\'qitish tartibi',
      article: 'Shartnoma shartlari',
      lexUrl: 'https://lex.uz/docs/5013007',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'rectorTitle', label: 'Rektor nomiga', placeholder: 'Toshkent axborot texnologiyalari universiteti rektoriga', type: 'text' },
      { key: 'postponedDate', label: 'To\'lov qilinishi va\'da berilayotgan sana', placeholder: '2024-yil 25-noyabrga qadar', type: 'text' },
    ],
    templateText: `{{rectorTitle}}ga

Talaba: {{fullName}}
Telefon: {{phone}}

ARIZA
(To'lov-kontrakt muddatini kechiktirish haqida)

Oilamizdagi vaqtinchalik moddiy qiyinchiliklar tufayli semestr to'lov-shartnoma mablag'ini to'lash muddatini {{postponedDate}}ga qadar uzaytirishingizni va meni darslardan chetlatmasligingizni so'rayman.

Talaba: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'tal-04',
    title: 'Diplom (yoki ilova) dublikatini berish to\'g\'risida ariza',
    category: 'talim',
    categoryName: "Ta'lim",
    description: 'Oliy yoki o\'rta-maxsus ta\'lim diplomi yoxud uning baholar ilovasi yo\'qolganda yangi dublikat nusxa olish.',
    keywords: ['diplom dublikati', 'diplom yo\'qolishi', 'OTM'],
    legalBasis: {
      lawName: 'Davlat namunasidagi ta\'lim hujjatlari dublikatlarini berish tartibi',
      article: 'Vazirlar Mahkamasi Nizomi',
      lexUrl: 'https://lex.uz/docs/5013007',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'rectorTitle', label: 'OTM rahbari', placeholder: "O'zDJTU rektori nomiga", type: 'text' },
      { key: 'graduationYearFaculty', label: 'Bitirgan yili va mutaxassisligi', placeholder: '2019-yilda Ingliz filologiyasi fakultetini tamomlaganman', type: 'text' },
    ],
    templateText: `{{rectorTitle}}ga

Bitiruvchi: {{fullName}}
Telefon: {{phone}}

ARIZA
(Diplom dublikatini berish haqida)

{{graduationYearFaculty}}. Menga berilgan diplom ehtiyotsizlik tufayli yo'qolgan. Belgilangan tartibda gazeta e'loni berilgan. Diplom dublikatini rasmiylashtirib berishingizni so'rayman.

Ilovalar: Gazeta e'loni, pasport nusxasi, IIB ma'lumotnomasi.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'tal-05',
    title: 'O\'qishdan chetlashtirilgan talabani o\'qishga qayta tiklash to\'g\'risida ariza',
    category: 'talim',
    categoryName: "Ta'lim",
    description: 'Akademik qarzdorlik yoki kontrakt to\'lamaganlik tufayli talabalar safidan chiqarilgan shaxsning o\'qishini tiklash.',
    keywords: ['o\'qishni tiklash', 'talabalar safi', 'akademik qarzdorlik'],
    legalBasis: {
      lawName: 'Talabalar o\'qishini ko\'chirish va tiklash tartibi to\'g\'risidagi Nizom',
      article: 'VM 393-son qarori',
      lexUrl: 'https://lex.uz/docs/3244181',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'rectorTitle', label: 'OTM rektori', placeholder: 'Samarqand davlat universiteti rektori nomiga', type: 'text' },
      { key: 'expulsionDetails', label: 'Chetlashtirish buyrug\'i sanasi va sababi', placeholder: '2023-yil fevraldagi buyruq bilan akademik qarzdorlik sababli', type: 'text' },
    ],
    templateText: `{{rectorTitle}}ga

{{fullName}}dan
Telefon: {{phone}}

ARIZA
(O'qishga qayta tiklash haqida)

{{expulsionDetails}} talabalar safidan chetlashtirilgan edim. Qonunda belgilangan tartibda o'qishimni tegishli kursdan qayta tiklashingizni so'rayman.

Talaba: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'tal-06',
    title: 'Bolani 1-sinfga qabul qilish to\'g\'risida maktab direktori nomiga ariza',
    category: 'talim',
    categoryName: "Ta'lim",
    description: '7 yoshga to\'ladigan bolani mikrohudud bo\'yicha umumiy o\'rta ta\'lim maktabi 1-sinfiga qabul qilish arizasi.',
    keywords: ['1-sinfga qabul', 'maktab arizasi', 'ta\'lim', 'bola qabul'],
    legalBasis: {
      lawName: 'Umumiy o\'rta ta\'lim to\'g\'risidagi Nizom',
      article: 'Maktabga qabul qilish qoidalari',
      lexUrl: 'https://lex.uz/docs/5013007',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'schoolDirector', label: 'Maktab direktori F.I.Sh.', placeholder: 'Chilonzor tumani 217-sonli umumta\'lim maktabi direktoriga', type: 'text' },
      { key: 'childNameAndBirth', label: 'Bolaning ismi va tug\'ilgan sanasi', placeholder: 'Aliyeva Rayhona, 15.03.2017 yilda tug\'ilgan', type: 'text' },
    ],
    templateText: `{{schoolDirector}}ga

Ota-ona: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

ARIZA
(1-sinfga qabul qilish haqida)

Farzandim {{childNameAndBirth}}ni 2024/2025 o'quv yili uchun maktabingizning 1-sinfiga qabul qilishingizni so'rayman.

Ilovalar: Tug'ilganlik haqida guvohnoma, tibbiy 026-shakl ma'lumotnoma.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'tal-07',
    title: 'Magistratura bosqichida ilmiy rahbar va dissertatsiya mavzusini tasdiqlash haqida ariza',
    category: 'talim',
    categoryName: "Ta'lim",
    description: 'Magistr talabasining magistrlik dissertatsiyasi mavzusini va ilmiy rahbarini kafedra yig\'ilishida tasdiqlash.',
    keywords: ['magistratura', 'dissertatsiya mavzusi', 'ilmiy rahbar'],
    legalBasis: {
      lawName: 'Magistratura to\'g\'risidagi Nizom',
      article: 'Nizom qoidalari',
      lexUrl: 'https://lex.uz/docs/5013007',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'rectorOrDean', label: 'Rektor yoki fakultet dekani', placeholder: 'Fakultet dekani nomiga', type: 'text' },
      { key: 'thesisTopic', label: 'Dissertatsiya mavzusi nomi', placeholder: '"Raqamli iqtisodiyotda kichik biznesni moliyalashtirish mexanizmlari"', type: 'text' },
    ],
    templateText: `{{rectorOrDean}}ga

Magistrant: {{fullName}}

ARIZA
(Dissertatsiya mavzusini tasdiqlash haqida)

Mening magistrlik dissertatsiyam mavzusini: {{thesisTopic}} deb tasdiqlashingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'tal-08',
    title: 'Maktabgacha ta\'lim tashkilotiga (bolalar bog\'chasiga) yo\'llanma bo\'yicha murojaat',
    category: 'talim',
    categoryName: "Ta'lim",
    description: 'Davlat xizmatlari orqali navbat kelganda bolani davlat MTTsiga qabul qilish bo\'yicha ariza.',
    keywords: ['bog\'chaga qabul', 'maktabgacha ta\'lim', 'yo\'llanma'],
    legalBasis: {
      lawName: 'Maktabgacha ta\'lim to\'g\'risidagi Qonun',
      article: 'Qonun talablari',
      lexUrl: 'https://lex.uz/docs/4646908',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'mttDirector', label: 'MTT mudirasi', placeholder: 'Sergeli tumani 45-sonli Davlat MTT mudirasiga', type: 'text' },
      { key: 'childDetails', label: 'Bola ismi va tug\'ilgan yili', placeholder: 'Azizov Samandar, 2021-yil', type: 'text' },
    ],
    templateText: `{{mttDirector}}ga

Ota-ona: {{fullName}}
Telefon: {{phone}}

ARIZA
(MTTga qabul qilish haqida)

Yagona portal yo'llanmasiga asosan farzandim {{childDetails}}ni bog'cha tarbiyalanuvchilari safiga qabul qilishingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },

  // SHIKOYATLAR
  {
    id: 'shik-01',
    title: 'Majburiy ijro byurosi (MIB) davlat ijrochisi harakati ustidan sudga shikoyat',
    category: 'shikoyatlar',
    categoryName: 'Shikoyatlar',
    description: 'Sud ijrochisining noqonuniy qarori, hisoblangan nohaq qarz yoki harakatsizligi yuzasidan ma\'muriy sudga shikoyat.',
    keywords: ['MIB shikoyat', 'sud ijrochisi ustidan shikoyat', 'MSIYuTK 274', 'ijro harakati'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Ma\'muriy sud ishlarini yuritish to\'g\'risidagi kodeksi (MSIYuTK)',
      article: '274-278-moddalar',
      lexUrl: 'https://lex.uz/docs/3527353',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetAdminCourt', label: 'Tumanlararo ma\'muriy sudi nomi', placeholder: 'Toshkent tumanlararo ma\'muriy sudiga', type: 'text' },
      { key: 'mibBranchAndBailiff', label: 'Javobgar MIB bo\'limi va davlat ijrochisi', placeholder: 'MIB Mirzo Ulug\'bek tumani bo\'limi davlat ijrochisi', type: 'text' },
      { key: 'disputedActionDate', label: 'Shikoyat qilinayotgan ijro harakati yoki qarori', placeholder: '2024-yil 15-yanvardagi mol-mulkni xatlash qarori', type: 'text' },
      { key: 'complaintReason', label: 'Qarorning noqonuniylik vajlari', placeholder: 'Ijrochi qonun talablarini buzib, da\'vogarga tegishli bo\'lmagan ota-onasining uy-joyini asossiz xatlovga olgan', type: 'textarea' },
    ],
    templateText: `{{targetAdminCourt}}ga

Ariza beruvchi: {{fullName}}
Pasport/ID: {{passport}}
Manzil: {{address}}
Telefon: {{phone}}

Javobgar: {{mibBranchAndBailiff}}

SHIKOYAT
(Davlat ijrochisining harakati ustidan)

{{mibBranchAndBailiff}} tomonidan chiqarilgan {{disputedActionDate}} noqonuniy hisoblanadi:

{{complaintReason}}.

O'zbekiston Respublikasi MSIYuTKning 274-moddasiga ko'ra, davlat ijrochisining qarorlari, harakatlari (harakatsizligi) ustidan sudga o'n kunlik muddatda shikoyat qilinishi mumkin.

SO'RAYMAN:

Davlat ijrochisining {{disputedActionDate}}dagi qarorini noqonuniy deb topib, bekor qilishingizni.

Ilovalar: Shikoyat qilinayotgan MIB qarori nusxasi, dalillar.

Shikoyat beruvchi: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'shik-02',
    title: 'Iste\'molchi huquqlari buzilishi bo\'yicha Raqobat qo\'mitasiga shikoyat',
    category: 'shikoyatlar',
    categoryName: 'Shikoyatlar',
    description: 'Nuqsonli tovar sotgan, kafolat xizmatidan bosh tortgan yoki pulni qaytarmagan sotuvchi ustidan davlat nazorati organiga shikoyat.',
    keywords: ['iste\'molchi huquqi', 'raqobat qo\'mitasi', 'sifatsiz tovar', 'pulni qaytarish'],
    popular: true,
    legalBasis: {
      lawName: '"Iste\'molchilarning huquqlarini himoya qilish to\'g\'risida"gi O\'zbekiston Respublikasi Qonuni',
      article: '13-18-moddalar',
      lexUrl: 'https://lex.uz/docs/440',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetAntimonopoly', label: 'Raqobat qo\'mitasi hududiy boshqarmasi', placeholder: 'Raqobatni rivojlantirish va iste\'molchilar huquqlarini himoya qilish qo\'mitasiga', type: 'text' },
      { key: 'sellerStoreName', label: 'Sotuvchi do\'kon yoki korxona nomi', placeholder: '"Texnomart" maishiy texnika do\'koni', type: 'text' },
      { key: 'defectDetails', label: 'Tovardagi nosozlik va rad javobi', placeholder: 'Xarid qilingan televizor 2 haftada buzildi, servis markazi bepul ta\'mirlash yoki almashtirishni asossiz rad etdi', type: 'textarea' },
    ],
    templateText: `{{targetAntimonopoly}}ga

Iste'molchi: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

SHIKOYAT
(Iste'molchi huquqlari buzilganligi to'g'risida)

{{sellerStoreName}}dan xarid qilgan tovarim bo'yicha qonuniy huquqlarim poymol qilindi: {{defectDetails}}.

"Iste'molchilarning huquqlarini himoya qilish to'g'risida"gi Qonunning 13, 14-moddalariga asosan tekshiruv o'tkazib, sotuvchiga nisbatan chora ko'rishingizni va tovar almashtirilishini yoki to'langan pul to'liq qaytarilishini ta'minlashingizni so'rayman.

Ilovalar: Xarid cheki, kafolat taloni, fotosuratlar.

Iste'molchi: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'shik-03',
    title: 'Soliq organi qarori ustidan yuqori turuvchi soliq qo\'mitasiga shikoyat',
    category: 'shikoyatlar',
    categoryName: 'Shikoyatlar',
    description: 'Soliq inspeksiyasi tomonidan ortiqcha yoki nohaq hisoblangan soliq va jarimalarni bekor qilish bo\'yicha shikoyat.',
    keywords: ['soliq shikoyati', 'soliq kodeksi', 'jarima bekor qilish', 'soliq inspeksiyasi'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Soliq kodeksi',
      article: '230-235-moddalar',
      lexUrl: 'https://lex.uz/docs/4674902',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'taxCommittee', label: 'Yuqori soliq organi', placeholder: 'O\'zbekiston Respublikasi Soliq qo\'mitasiga', type: 'text' },
      { key: 'disputedTaxDecision', label: 'Norozi bo\'lingan soliq qarori raqami va sanasi', placeholder: 'Chilonzor tuman soliq inspeksiyasining 2024-yil 10-yanvardagi № 44-sonli qarori', type: 'text' },
      { key: 'taxGrounds', label: 'Nohaq hisoblangan soliq vajlari', placeholder: 'Mulk sotuvidan olingan daromad soliq imtiyozi doirasida bo\'lsa-da, inspeksiya nohaq 12 foiz soliq hisoblagan', type: 'textarea' },
    ],
    templateText: `{{taxCommittee}}ga

Soliq to'lovchi: {{fullName}}
STIR/JShShIR: {{passport}}
Telefon: {{phone}}

SHIKOYAT
(Soliq organining qarori ustidan)

{{disputedTaxDecision}} ustidan shikoyat qilaman. Ushbu qaror Soliq kodeksiga zid ravishda chiqarilgan: {{taxGrounds}}.

Soliq kodeksining 235-moddasiga asosan qarorni bekor qilishingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'shik-04',
    title: 'Tibbiyot muassasasi xodimlarining mas\'uliyatsizligi va xatosi ustidan Sog\'liqni saqlash vazirligiga shikoyat',
    category: 'shikoyatlar',
    categoryName: 'Shikoyatlar',
    description: 'Shifokorlarning e\'tiborsizligi, noto\'g\'ri tashxis yoki qo\'polligi yuzasidan xizmat tekshiruvi o\'tkazish talabi.',
    keywords: ['shifokor xatosi', 'tibbiyot shikoyat', 'SSV', 'bemor huquqi'],
    legalBasis: {
      lawName: '"Fuqarolar sog\'lig\'ini saqlash to\'g\'risida"gi O\'zbekiston Respublikasi Qonuni',
      article: '24-28-moddalar',
      lexUrl: 'https://lex.uz/docs/111460',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetHealthAuthority', label: 'Sog\'liqni saqlash boshqarmasi/Vazirlik', placeholder: 'O\'zbekiston Respublikasi Sog\'liqni saqlash vazirligiga', type: 'text' },
      { key: 'hospitalName', label: 'Tibbiyot muassasasi nomi', placeholder: 'Toshkent shahar 1-sonli klinik shifoxonasi', type: 'text' },
      { key: 'medicalNegligenceDetails', label: 'Vojlar va mas\'uliyatsizlik tafsiloti', placeholder: 'O\'tkir og\'riq bilan borgan bemorga o\'z vaqtida yordam ko\'rsatilmadi, noto\'g\'ri dori buyurildi', type: 'textarea' },
    ],
    templateText: `{{targetHealthAuthority}}ga

Murojaat qiluvchi: {{fullName}}
Telefon: {{phone}}

SHIKOYAT
(Sifatsiz tibbiy xizmat va shifokorlar xatosi yuzasidan)

{{hospitalName}} xodimlari tomonidan "Fuqarolar sog'lig'ini saqlash to'g'risida"gi Qonun talablari buzildi: {{medicalNegligenceDetails}}.

Xizmat tekshiruvi tayinlab, aybdor xodimlarga chora ko'rishingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'shik-05',
    title: 'Bank tomonidan noqonuniy komissiyalar yoki kredit foizlari ushlab qolinishi bo\'yicha Markaziy bankka shikoyat',
    category: 'shikoyatlar',
    categoryName: 'Shikoyatlar',
    description: 'Tijorat bankining shartnomada ko\'rsatilmagan ortiqcha foiz yoki yashirin to\'lovlar undirishi yuzasidan shikoyat.',
    keywords: ['bank shikoyati', 'markaziy bank', 'kredit komissiyasi', 'iste\'molchi'],
    legalBasis: {
      lawName: '"Banklar va bank faoliyati to\'g\'risida"gi Qonun',
      article: '62-modda (Bank xizmatlari iste\'molchilari huquqlarini himoya qilish)',
      lexUrl: 'https://lex.uz/docs/4581977',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCentralBank', label: 'Markaziy bank departamenti', placeholder: 'O\'zbekiston Respublikasi Markaziy bankining Bank xizmatlari iste\'molchilari huquqlarini himoya qilish xizmatiga', type: 'text' },
      { key: 'commercialBankName', label: 'Tijorat banki nomi', placeholder: '"Agrobank" ATB filiali', type: 'text' },
    ],
    templateText: `{{targetCentralBank}}ga

Murojaat qiluvchi: {{fullName}}
Telefon: {{phone}}

SHIKOYAT
(Bank xizmatlari iste'molchisi huquqi buzilganligi haqida)

{{commercialBankName}} shartnoma talablariga zid ravishda asossiz komissiya va ortiqcha to'lovlar undirmoqda. Qonuniy nazorat o'rnatib, ortiqcha summalarni qaytartirishingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'shik-06',
    title: 'Ko\'p qavatli uy boshqaruv servis kompaniyasi (BSK) faoliyatidan tuman hokimligiga shikoyat',
    category: 'shikoyatlar',
    categoryName: 'Shikoyatlar',
    description: 'Lift ishlamasligi, tom chakkalashi yoki tozalik ta\'minlanmaganligi holatida BSK ustidan shikoyat.',
    keywords: ['BSK shikoyat', 'boshqaruv kompaniyasi', 'uy-joy kommunal', 'lift nosozligi'],
    legalBasis: {
      lawName: '"Ko\'p kvartirali uylarni boshqarish to\'g\'risida"gi O\'zbekiston Respublikasi Qonuni',
      article: 'Qonun normalari',
      lexUrl: 'https://lex.uz/docs/4584288',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetKhokimiyat', label: 'Tuman hokimligi', placeholder: 'Yashnobod tumani hokimligiga', type: 'text' },
      { key: 'bskCompanyName', label: 'BSK nomi', placeholder: '"Obod Xonadon" BSK', type: 'text' },
    ],
    templateText: `{{targetKhokimiyat}}ga

Murojaat qiluvchi: {{fullName}}
Manzil: {{address}}

SHIKOYAT
(BSK faoliyatsizligi ustidan)

{{bskCompanyName}} majburiy badal to'lovlarini muntazam yig'ib olsa-da, uyimizning tomi chakkalashi va liftning buzilishini oylardan beri bartaraf etmayapti. Tekshiruv o'tkazishingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'shik-07',
    title: 'Avtosalondan yangi avtomobilni o\'z vaqtida yetkazib bermaganligi ustidan shikoyat',
    category: 'shikoyatlar',
    categoryName: 'Shikoyatlar',
    description: 'Avtomobil to\'lovi 100% to\'langan bo\'lsa-da, shartnoma muddatida yetkazib bermagan dilerlik markaziga nisbatan jarima undirish talabi.',
    keywords: ['avtosalon', 'mashina yetkazib berish', 'penya', 'uzavtosanoat'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi va Iste\'molchilar huquqlarini himoya qilish to\'g\'risidagi Qonun',
      article: 'FK 333, 382-moddalar',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetAgency', label: 'Raqobat qo\'mitasi / Bosh prokuratura', placeholder: 'Raqobat qo\'mitasiga', type: 'text' },
      { key: 'autoDealerName', label: 'Avtosalon dileri', placeholder: '"Sergeli Avtotexxizmat" MChJ dilerlik markazi', type: 'text' },
    ],
    templateText: `{{targetAgency}}ga

Iste'molchi: {{fullName}}
Telefon: {{phone}}

SHIKOYAT
(Avtomobil muddatida berilmaganligi yuzasidan)

Shartnoma bo'yicha to'lov to'liq amalga oshirilgan bo'lsa-da, {{autoDealerName}} avtomobilni o'z vaqtida bermasdan muddatni kechiktirmoqda. Shartnoma shartlarini majburiy bajartirib, kechiktirilgan har bir kun uchun penya undirishingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'shik-08',
    title: 'Sudya ustidan Sudyalar oliy kengashiga shikoyat',
    category: 'shikoyatlar',
    categoryName: 'Shikoyatlar',
    description: 'Sudya tomonidan sudyalik odobi qoidalari qo\'pol ravishda buzilganda va protsessual qonunlar qasddan buzilganda Kengashga murojaat.',
    keywords: ['sudya ustidan shikoyat', 'sudyalar oliy kengashi', 'odob qoidalari'],
    legalBasis: {
      lawName: '"Sudyalar oliy kengashi to\'g\'risida"gi Qonun',
      article: '8-modda',
      lexUrl: 'https://lex.uz/docs/3153347',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetJudicialCouncil', label: 'Sudyalar oliy kengashi', placeholder: 'O\'zbekiston Respublikasi Sudyalar oliy kengashi raisiga', type: 'text' },
      { key: 'judgeFullName', label: 'Sudya F.I.Sh. va sudi', placeholder: 'Yunusobod tuman sudi sudyasi', type: 'text' },
    ],
    templateText: `{{targetJudicialCouncil}}ga

Murojaat qiluvchi: {{fullName}}
Telefon: {{phone}}

SHIKOYAT
(Sudya tomonidan odob-axloq qoidalari buzilganligi haqida)

{{judgeFullName}} sud majlisi davomida o'zini noo'rin tutib, taraflarga nisbatan qo'pol muomala qildi va protsessual tenglik prinsipini qo'pol ravishda buzdi. Mazkur holat yuzasidan xizmat tekshiruvi tayinlashingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  }
];
