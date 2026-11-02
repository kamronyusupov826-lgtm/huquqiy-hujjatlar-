import { LegalDocument } from '../../types';
import { COMMON_PERSONAL_FIELDS } from '../commonFields';

export const COURTS_AND_PROCURACY_DOCS: LegalDocument[] = [
  // SUD HUJJATLARI
  {
    id: 'sud-01',
    title: 'Sud hal qiluv qarori ustidan apellyatsiya shikoyati',
    category: 'sud-hujjatlari',
    categoryName: 'Sud hujjatlari',
    description: 'Qonuniy kuchga kirmagan birinchi instantsiya sudi hal qiluv qarori ustidan yuqori turuvchi viloyat (Toshkent shahar) sudiga shikoyat keltirish.',
    keywords: ['apellyatsiya shikoyati', 'sud qarori ustidan shikoyat', 'FPK 383', 'norozilik'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik protsessual kodeksi',
      article: '383-388-moddalar',
      lexUrl: 'https://lex.uz/docs/3517337',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourtHigher', label: 'Apellyatsiya instansiyasi sudi nomi', placeholder: 'Toshkent shahar sudining fuqarolik ishlari bo\'yicha sudlov hay\'atiga', type: 'text' },
      { key: 'throughFirstCourt', label: 'Qaror chiqargan 1-bosqich sudi nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Mirzo Ulug\'bek tumanlararo sudi orqali', type: 'text' },
      { key: 'firstCourtDecisionDate', label: 'Qaror qabul qilingan sana va ish raqami', placeholder: '2024-yil 12-fevraldagi № 2-450/2024-sonli hal qiluv qarori', type: 'text' },
      { key: 'appellantRole', label: 'Shikoyat beruvchining ish bo\'yicha maqomi', placeholder: 'Da\'vogar / Javobgar / Uchinchi shaxs', type: 'text' },
      { key: 'appealGrounds', label: 'Sud qarorining noqonuniy va asossiz ekanligi vajlari', placeholder: 'Sud moddiy huquq normalarini noto\'g\'ri qo\'llagan, ish uchun muhim holatlarni to\'liq o\'rganmagan va asossiz rad qilgan', type: 'textarea' },
    ],
    templateText: `{{targetCourtHigher}}ga
({{throughFirstCourt}})

Shikoyat beruvchi ({{appellantRole}}): {{fullName}}
Pasport/ID: {{passport}}
Manzil: {{address}}
Telefon: {{phone}}

APELLYATSIYA SHIKOYATI
(Sud hal qiluv qarori ustidan)

{{throughFirstCourt}} tomonidan {{firstCourtDecisionDate}} bo'yicha fuqarolik ishi ko'rib chiqilib, hal qiluv qarori qabul qilingan.

Men mazkur sud hal qiluv qaroridan mutlaqo noroziman va uni noqonuniy hamda asossiz deb hisoblayman. Chunki: {{appealGrounds}}.

Birinchi instansiya sudi tomonidan FPK talablari buzilgan, dalillarga xolisona baho berilmagan.

O'zbekiston Respublikasi Fuqarolik protsessual kodeksining 383, 385, 399-moddalariga muvofiq,

SO'RAYMAN:

{{throughFirstCourt}}ning {{firstCourtDecisionDate}}dagi hal qiluv qarorini to'liq yoki qisman bekor qilishingizni va yangi hal qiluv qarori qabul qilishingizni.

Ilovalar:
1. Birinchi instantsiya sud qarori nusxasi.
2. Ishdagi taraflar soniga mutanosib shikoyat nusxalari.
3. Davlat boji to'lovi kvitansiyasi.

Shikoyat beruvchi: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'sud-02',
    title: 'Sud buyrug\'ini bekor qilish to\'g\'risida ariza (e\'tiroz)',
    category: 'sud-hujjatlari',
    categoryName: 'Sud hujjatlari',
    description: 'Qarzdorga nisbatan chiqarilgan sud buyrug\'idan norozi bo\'lganda, 10 kunlik muddat ichida uni bekor qilish bo\'yicha e\'tiroz arizasi.',
    keywords: ['sud buyrug\'ini bekor qilish', 'sud buyrug\'i e\'tiroz', 'FPK 178', 'kredit qarzi'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik protsessual kodeksi',
      article: '178-181-moddalar',
      lexUrl: 'https://lex.uz/docs/3517337',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourtOrder', label: 'Sud buyrug\'ini chiqargan sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Yakkasaroy tumanlararo sudiga', type: 'text' },
      { key: 'courtOrderDetails', label: 'Sud buyrug\'i sanasi va raqami', placeholder: '2024-yil 18-martdagi № 2-102/2024-sonli sud buyrug\'i', type: 'text' },
      { key: 'creditorName', label: 'Undiruvchi (bank / tashkilot / shaxs) nomi', placeholder: '"Ipoteka-bank" ATIB', type: 'text' },
      { key: 'disputeReason', label: 'Bildirilayotgan e\'tiroz sababi', placeholder: 'Undirilishi belgilangan summa noto\'g\'ri hisoblangan, asosiy qarz qisman to\'langan, foizlar va jarimalar asossiz oshirib ko\'rsatilgan', type: 'textarea' },
    ],
    templateText: `{{targetCourtOrder}}ga

Qarzdor: {{fullName}}
Pasport/ID: {{passport}}
Manzil: {{address}}
Telefon: {{phone}}

Undiruvchi: {{creditorName}}

ARIZA / E'TIROZNOMA
(Sud buyrug'ini bekor qilish to'g'risida)

{{targetCourtOrder}} sudyasi tomonidan {{courtOrderDetails}}ga asosan mendan undiruvchi {{creditorName}} foydasiga mablag' undirish to'g'risida sud buyrug'i chiqarilgan. Mazkur sud buyrug'i nusxasini men {{currentDate}} sanasida oldim.

Men mazkur sud buyrug'i va undiruvchining talablariga qat'iy e'tiroz bildiraman: {{disputeReason}}. Mazkur masala yuzasidan o'rtamizda jiddiy huquqiy nizo mavjud.

O'zbekiston Respublikasi FPKning 178-moddasiga binoan, qarzdor sud buyrug'i nusxasini olgan kundan e'tiboran o'n kunlik muddat ichida ushbu sud buyrug'ini chiqargan sudga talabga qarshi e'tirozini bildirishga haqlidir. Bunday holda sudya sud buyrug'ini bekor qiladi.

SO'RAYMAN:

{{courtOrderDetails}}dagi sud buyrug'ini bekor qilishingizni.

Ilova: Sud buyrug'i nusxasi, e'tirozga oid asoslar.

Qarzdor: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'sud-03',
    title: 'Da\'vo arizasiga nisbatan yozma e\'tiroz (Javob xati)',
    category: 'sud-hujjatlari',
    categoryName: 'Sud hujjatlari',
    description: 'Javobgar tomonidan o\'ziga nisbatan berilgan nohaq da\'vo arizasidagi vajlarni rad etish va o\'z pozitsiyasini dalillar bilan asoslash.',
    keywords: ['da\'voga e\'tiroz', 'otziv', 'javobgar e\'tirozi', 'FPK 200'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik protsessual kodeksi',
      article: '200-modda',
      lexUrl: 'https://lex.uz/docs/3517337',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'courtName', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Chilonzor tumanlararo sudiga', type: 'text' },
      { key: 'plaintiffParty', label: 'Da\'vogar F.I.Sh.', placeholder: 'Tursunov Jamshid', type: 'text' },
      { key: 'claimTheme', label: 'Da\'vo mazmuni', placeholder: 'Yetkazilgan zararni undirish to\'g\'risida', type: 'text' },
      { key: 'defenseObjections', label: 'Da\'voni rad etish asoslari', placeholder: 'Da\'vogar keltirgan vajlar haqiqatga to\'g\'ri kelmaydi, hodisada mening aybim yo\'q, tegishli dalillar taqdim etilmoqda', type: 'textarea' },
    ],
    templateText: `{{courtName}}ga

Javobgar: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

Da'vogar: {{plaintiffParty}}

DA'VO ARIZASIGA NISBATAN YOZMA E'TIROZ

Sud ish yurituvuvizda da'vogar {{plaintiffParty}}ning menga nisbatan "{{claimTheme}}" bo'yicha da'vo arizasi mavjud.

Men mazkur da'voni mutlaqo tan olmayman: {{defenseObjections}}.

FPK 200-moddasiga binoan, da'voni to'liq rad etishingizni so'rayman.

Javobgar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'sud-04',
    title: 'Sud majlisini boshqa kunga qoldirish haqida iltimosnoma',
    category: 'sud-hujjatlari',
    categoryName: 'Sud hujjatlari',
    description: 'Betoblik, xizmat safari yoki advokat ishtirokini ta\'minlash zarurati sababli sud muhokamasini boshqa kunga qoldirish iltimosnomasi.',
    keywords: ['sudni qoldirish', 'majlisni kechiktirish', 'FPK 217', 'uzrli sabab'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik protsessual kodeksi',
      article: '217, 218-moddalar',
      lexUrl: 'https://lex.uz/docs/3517337',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'courtName', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Yunusobod tumanlararo sudiga', type: 'text' },
      { key: 'currentSessionDate', label: 'Belgilangan sud sanasi va vaqti', placeholder: '2024-yil 25-aprel soat 14:30 ga', type: 'text' },
      { key: 'excuseReason', label: 'Uzrli sabab va tasdiqlovchi hujjat', placeholder: 'Kasalxonada stasionar davolanmoqdaman (095/u-sonli tibbiy ma\'lumotnoma ilova qilinadi)', type: 'textarea' },
    ],
    templateText: `{{courtName}}ga

Ishdagi taraf: {{fullName}}
Telefon: {{phone}}

ILTIMOSNOMA
(Sud majlisini qoldirish to'g'risida)

{{currentSessionDate}}ga tayinlangan sud majlisida uzrli sabablarga ko'ra ishtirok eta olmayman: {{excuseReason}}. Mazkur ishni mening ishtirokimsiz ko'rib chiqmasligingizni so'rayman.

FPK 217-moddasiga asosan sud majlisini boshqa kunga qoldirishingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'sud-05',
    title: 'Ijro varaqasining dublikatini berish to\'g\'risida ariza',
    category: 'sud-hujjatlari',
    categoryName: 'Sud hujjatlari',
    description: 'Asl ijro hujjati pochta orqali yoki boshqa sabablarga ko\'ra yo\'qolgan holatlarda sud tomonidan uning dublikatini olish.',
    keywords: ['ijro varaqasi dublikati', 'ijro hujjati yo\'qolishi', 'FPK 457'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik protsessual kodeksi',
      article: '457-modda',
      lexUrl: 'https://lex.uz/docs/3517337',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'courtName', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Sergeli tumanlararo sudiga', type: 'text' },
      { key: 'lossDetails', label: 'Ijro hujjati qanday yo\'qolgani', placeholder: 'MIB bo\'limiga pochta orqali yuborilganda yo\'qolgan, MIB ma\'lumotnomasi mavjud', type: 'text' },
    ],
    templateText: `{{courtName}}ga

Undiruvchi: {{fullName}}
Telefon: {{phone}}

ARIZA
(Ijro varaqasi dublikatini berish to'g'risida)

Sud tomonidan berilgan ijro varaqasi yo'qolgan: {{lossDetails}}.

FPK 457-moddasiga asosan ijro varaqasining dublikatini berishingizni so'rayman.

Undiruvchi: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'sud-06',
    title: 'Davlat bojini to\'lashni kechiktirish yoki bo\'lib-bo\'lib to\'lash haqida iltimosnoma',
    category: 'sud-hujjatlari',
    categoryName: 'Sud hujjatlari',
    description: 'Moddiy ahvoli og\'ir bo\'lgan fuqaroning sudga da\'vo kiritishda davlat bojini sud qarori chiqqandan keyin to\'lashini so\'rash.',
    keywords: ['davlat boji', 'bojni kechiktirish', 'FPK 111', 'kam ta\'minlangan'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik protsessual kodeksi',
      article: '111-modda',
      lexUrl: 'https://lex.uz/docs/3517337',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'courtName', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Shayxontohur sudiga', type: 'text' },
      { key: 'financialHardship', label: 'Moddiy qiyinchilik asoslari', placeholder: 'Vaqtincha ishsizman, oilamda yagona boquvchiman, "Ijtimoiy himoya yagona reyestri"da turaman', type: 'textarea' },
    ],
    templateText: `{{courtName}}ga

Da'vogar: {{fullName}}
Telefon: {{phone}}

ILTIMOSNOMA
(Davlat bojini kechiktirish haqida)

Hozirgi vaqtda belgilangan davlat bojini to'lashga moddiy imkoniyatim yetarli emas: {{financialHardship}}.

FPK 111-moddasiga binoan davlat bojini to'lashni sud qarori qabul qilingunga qadar kechiktirishingizni so'rayman.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'sud-07',
    title: 'Sud qarorini tushuntirish to\'g\'risida ariza',
    category: 'sud-hujjatlari',
    categoryName: 'Sud hujjatlari',
    description: 'Sud qarori matnida noaniqliklar bo\'lsa, uning mazmunini o\'zgartirmagan holda tushuntirib berish haqida ariza.',
    keywords: ['sud qarorini tushuntirish', 'qaror noaniqligi', 'FPK 265'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik protsessual kodeksi',
      article: '265-modda',
      lexUrl: 'https://lex.uz/docs/3517337',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'courtName', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Olmazor sudiga', type: 'text' },
      { key: 'ambiguousPoint', label: 'Tushuntirish talab qilinayotgan qism', placeholder: 'Qarorning ijro qilish tartibi va muddatlari noaniq bayon etilgan', type: 'text' },
    ],
    templateText: `{{courtName}}ga

Ariza beruvchi: {{fullName}}
Telefon: {{phone}}

ARIZA
(Sud qarorini tushuntirish haqida)

Sud chiqargan hal qiluv qarorining quyidagi bandi noaniqlik keltirib chiqarmoqda: {{ambiguousPoint}}. FPK 265-moddasiga asosan qarorga tushuntirish berishingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'sud-08',
    title: 'Sud qaroridagi yozuv xatolarini va arifmetik xatolarni tuzatish haqida ariza',
    category: 'sud-hujjatlari',
    categoryName: 'Sud hujjatlari',
    description: 'Qarordagi ism-familiya yoki raqamlardagi xatoliklarni sud majlisi o\'tkazib rasman tuzatish.',
    keywords: ['xatolarni tuzatish', 'arifmetik xato', 'FPK 264'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik protsessual kodeksi',
      article: '264-modda',
      lexUrl: 'https://lex.uz/docs/3517337',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'courtName', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Chilonzor sudiga', type: 'text' },
      { key: 'errorDetails', label: 'Yo\'l qo\'yilgan xatolik va to\'g\'ri shakli', placeholder: 'Ismim "Ali" o\'rniga yanglishib "Vali" deb yozilgan', type: 'text' },
    ],
    templateText: `{{courtName}}ga

Ariza beruvchi: {{fullName}}

ARIZA
(Qarordagi xatolikni tuzatish haqida)

Sud qarori matnida quyidagi xatolik ketgan: {{errorDetails}}. FPK 264-moddasiga asosan tuzatish kiritishingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },

  // PROKURATURA MUROJAATLARI
  {
    id: 'pro-01',
    title: 'Mansabdor shaxsning noqonuniy xatti-harakatlari ustidan prokurorga shikoyat',
    category: 'prokuratura-murojaatlari',
    categoryName: 'Prokuratura murojaatlari',
    description: 'Davlat xizmatchisi yoki mansabdor shaxsning qonun buzilishi, o\'z vakolatini suiiste\'mol qilishi yuzasidan tuman (shahar) prokuroriga shikoyat.',
    keywords: ['prokurorga shikoyat', 'mansabdor shaxs', 'qonunbuzarlik', 'prokuror nazorati'],
    popular: true,
    legalBasis: {
      lawName: '"Prokuratura to\'g\'risida"gi va "Murojaatlar to\'g\'risida"gi Qonunlar',
      article: '"Prokuratura to\'g\'risida"gi Qonun 4, 18, 19-moddalar',
      lexUrl: 'https://lex.uz/docs/105741',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetProsecutor', label: 'Prokuratura organi nomi', placeholder: 'Toshkent viloyati Bo\'stonliq tumani prokuroriga', type: 'text' },
      { key: 'officialDetails', label: 'Qonunbuzar mansabdor shaxs lavozimi va F.I.Sh.', placeholder: 'Bo\'stonliq tumani kadastr bo\'limi bosh mutaxassisi', type: 'text' },
      { key: 'illegalAction', label: 'Noqonuniy xatti-harakat va qonun buzilishi bayoni', placeholder: 'Ko\'chmas mulk hujjatlarini asossiz ravishda 3 oydan beri ro\'yxatdan o\'tkazmay, sun\'iy to\'siq yaratmoqda', type: 'textarea' },
    ],
    templateText: `{{targetProsecutor}}ga

Murojaat qiluvchi: {{fullName}}
Pasport/ID: {{passport}}
Manzil: {{address}}
Telefon: {{phone}}

SHIKOYAT
(Mansabdor shaxsning noqonuniy harakatlari ustidan)

Sizga shuni ma'lum qilamanki, {{officialDetails}} tomonidan mening qonuniy huquq va manfaatlarim qo'pol ravishda buzildi: {{illegalAction}}.

O'zbekiston Respublikasi "Prokuratura to'g'risida"gi Qonunning 18-19-moddalariga muvofiq, prokuratura organlari vazirliklar, davlat qo'mitalari, idoralar, fuqarolarning o'zini o'zi boshqarish organlari, jamoat birlashmalari, korxonalar, muassasalar, tashkilotlar hamda mansabdor shaxslar tomonidan qonunlarning aniq va bir xilda ijro etilishi ustidan nazoratni amalga oshiradi.

SO'RAYMAN:

1. Mazkur holat yuzasidan prokuror nazorati tartibida tekshiruv o'tkazishingizni;
2. Qonunbuzarlikka yo'l qo'ygan {{officialDetails}}ga nisbatan prokuror taqdimnomasi kiritishingizni va intizomiy/ma'muriy javobgarlik masalasini ko'rib chiqishingizni;
3. Mening buzilgan huquqlarimni tiklash choralarini ko'rishingizni.

Murojaat qiluvchi: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'pro-02',
    title: 'Ish haqining asossiz kechiktirilishi bo\'yicha prokuraturaga ariza',
    category: 'prokuratura-murojaatlari',
    categoryName: 'Prokuratura murojaatlari',
    description: 'Korxona yoki tashkilot tomonidan bir necha oy davomida xodimlarga oylik ish haqi berilmasligi yuzasidan qonuniy chora ko\'rish talabi.',
    keywords: ['ish haqi kechikishi', 'prokurorga ariza', 'mehnat huquqi', 'maosh to\'lanmadi'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Mehnat kodeksi va Prokuratura to\'g\'risidagi Qonun',
      article: 'MK 253, 333-moddalar, MJtK 49-modda',
      lexUrl: 'https://lex.uz/docs/6257288',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetProsecutor', label: 'Prokuratura nomi', placeholder: 'Andijon shahar prokuroriga', type: 'text' },
      { key: 'companyEmployer', label: 'Korxona (ish beruvchi) nomi', placeholder: '"Vodiy Tekstil" MChJ rahbariyati', type: 'text' },
      { key: 'unpaidSalaryMonths', label: 'Qarzdorlik davri va umumiy summa', placeholder: '2023-yil dekabr, 2024-yil yanvar va fevral oylari uchun jami 14 500 000 so\'m', type: 'text' },
    ],
    templateText: `{{targetProsecutor}}ga

Ariza beruvchi: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

ARIZA
(Ish haqi to'lanmaganligi holati yuzasidan)

Men {{companyEmployer}}da xodim bo'lib ishlayman. Ish beruvchi tomonidan mehnat qonunchiligi buzilib, oylik maoshim to'lanmay kelmoqda: {{unpaidSalaryMonths}}.

O'zbekiston Respublikasi MKning 253-moddasiga asosan ish beruvchi xodimga ish haqini o'z vaqtida to'lashi shart.

SO'RAYMAN:

Korxonada tekshiruv o'tkazib, ish beruvchiga nisbatan prokuror ta'sir choralarini qo'llashingizni va oylik maoshimning to'liq undirib berilishini ta'minlashingizni.

Ariza beruvchi: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'pro-03',
    title: 'Tergovga qadar tekshiruv harakatlaridan norozi bo\'lib prokurorga shikoyat',
    category: 'prokuratura-murojaatlari',
    categoryName: 'Prokuratura murojaatlari',
    description: 'IIB tergovchisi yoki surishtiruvchisi tomonidan qonuniy arizani ko\'rib chiqish asossiz cho\'zilishi yoki noxolislik yuzasidan shikoyat.',
    keywords: ['tergov ustidan shikoyat', 'JPK 38', 'surishtiruv', 'prokuror nazorati'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Jinoyat-protsessual kodeksi',
      article: '38, 39, 382-moddalar',
      lexUrl: 'https://lex.uz/docs/111463',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'prosecutorName', label: 'Prokuratura organi', placeholder: 'Samarqand viloyat prokuroriga', type: 'text' },
      { key: 'policeDepartment', label: 'Shikoyat qilinayotgan IIB bo\'limi', placeholder: 'Pastdarg\'om tumani IIB tergov bo\'linmasi', type: 'text' },
      { key: 'caseDetails', label: 'Tergovchining harakatsizligi yoki qonunbuzarligi', placeholder: 'Bergan arizam bo\'yicha 1 oydan buyon hech qanday tergov harakati o\'tkazilmayapti, dalillar o\'rganilmayapti', type: 'textarea' },
    ],
    templateText: `{{prosecutorName}}ga

Shikoyat qiluvchi: {{fullName}}
Telefon: {{phone}}

SHIKOYAT
(Surishtiruvchi/tergovchining harakatsizligi ustidan)

{{policeDepartment}}ga murojaat qilgan edim. Biroq: {{caseDetails}}. JPK 382-moddasiga binoan tergov ustidan prokuror nazoratini ta'minlab, qonuniy qaror qabul qilinishini so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'pro-04',
    title: 'MIB davlat ijrochisi harakatsizligi ustidan prokurorga shikoyat',
    category: 'prokuratura-murojaatlari',
    categoryName: 'Prokuratura murojaatlari',
    description: 'Sud qarori bo\'yicha berilgan ijro hujjatini oylardan beri ijro etmayotgan MIB ijrochisi ustidan shikoyat.',
    keywords: ['MIB harakatsizligi', 'ijro hujjati', 'prokuror shikoyat', 'aliment ijrosi'],
    legalBasis: {
      lawName: '"Sud hujjatlari va boshqa organlar hujjatlarini ijro etish to\'g\'risida"gi Qonun',
      article: '86-modda',
      lexUrl: 'https://lex.uz/docs/40849',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'prosecutorOffice', label: 'Prokuratura organi', placeholder: 'Namangan shahar prokuroriga', type: 'text' },
      { key: 'mibBranch', label: 'MIB bo\'limi', placeholder: 'MIB Namangan shahar bo\'limi', type: 'text' },
      { key: 'delayCircumstances', label: 'Ijro etilmayotgan sud hujjati tafsiloti', placeholder: 'Qarz undirish to\'g\'risidagi sud ijro varaqasi 6 oydan buyon ijro etilmasdan kelmoqda', type: 'textarea' },
    ],
    templateText: `{{prosecutorOffice}}ga

Undiruvchi: {{fullName}}
Telefon: {{phone}}

SHIKOYAT
(MIB davlat ijrochisi ustidan)

{{mibBranch}} davlat ijrochisi sud ijro hujjatini ijro qilish bo'yicha hech qanday amaliy chora ko'rmayapti: {{delayCircumstances}}. Qonun buzilishlarini bartaraf etishni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'pro-05',
    title: 'Fuqarolar murojaati ko\'rib chiqilmaganligi (muddati buzilganligi) bo\'yicha ariza',
    category: 'prokuratura-murojaatlari',
    categoryName: 'Prokuratura murojaatlari',
    description: 'Davlat tashkilotiga berilgan xat yoki ariza qonunda belgilangan 15 yoki 30 kunlik muddatda javobsiz qoldirilganligi bo\'yicha chora ko\'rish.',
    keywords: ['murojaatlar to\'g\'risida', 'javobsiz ariza', 'MJtK 43', 'muddati o\'tgan'],
    legalBasis: {
      lawName: '"Jismoniy va yuridik shaxslarning murojaatlari to\'g\'risida"gi Qonun',
      article: '28-modda, MJtK 43-modda',
      lexUrl: 'https://lex.uz/docs/3336169',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetProsecutor', label: 'Prokuratura organi', placeholder: 'Buxoro shahar prokuroriga', type: 'text' },
      { key: 'ignoredAgency', label: 'Javob bermagan tashkilot', placeholder: 'Buxoro shahar suv ta\'minoti korxonasi', type: 'text' },
      { key: 'applicationDateNum', label: 'Topshirilgan ariza sanasi va kirim raqami', placeholder: '2024-yil 10-yanvardagi № 105-sonli ariza', type: 'text' },
    ],
    templateText: `{{targetProsecutor}}ga

Ariza beruvchi: {{fullName}}
Telefon: {{phone}}

ARIZA
(Murojaat ko'rib chiqish muddati buzilganligi haqida)

{{ignoredAgency}}ga {{applicationDateNum}} bilan ariza topshirganman. 30 kundan ortiq vaqt o'tgan bo'lsa-da, hech qanday javob berilmadi. Mansabdor shaxslarga nisbatan MJtK 43-moddasi bilan ma'muriy ish qo'zg'atishingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'pro-06',
    title: 'Ekologik qonunbuzarlik va daraxtlarni noqonuniy kesish bo\'yicha murojaat',
    category: 'prokuratura-murojaatlari',
    categoryName: 'Prokuratura murojaatlari',
    description: 'Ko\'p yillik daraxtlarni moratoriyga zid ravishda kesish yoki atrof-muhitni ifloslantirish holati bo\'yicha prokuror aralashuvini talab qilish.',
    keywords: ['ekologiya', 'daraxt kesish', 'moratoriy', 'tabiatni muhofaza qilish'],
    legalBasis: {
      lawName: '"Tabiatni muhofaza qilish to\'g\'risida"gi Qonun',
      article: 'Qonun talablari va Prezident Farmonlari',
      lexUrl: 'https://lex.uz/docs/105741',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'prosecutorOffice', label: 'Prokuratura', placeholder: 'Toshkent shahar tabiatni muhofaza qilish prokuraturasiga', type: 'text' },
      { key: 'incidentPlace', label: 'Hodisa sodir bo\'lgan joy va vaqt', placeholder: 'Yunusobod tumani, 12-mavze hududidagi ko\'p yillik chinorlar', type: 'text' },
    ],
    templateText: `{{prosecutorOffice}}ga

Murojaat qiluvchi: {{fullName}}
Telefon: {{phone}}

MUROJAAT
(Noqonuniy daraxt kesish holati bo'yicha)

{{incidentPlace}} hududida moratoriy talablariga zid ravishda daraxtlar kesilmoqda. Zudlik bilan tekshiruv o'tkazib, aybdorlarga jazo berilishini va yetkazilgan tabiat zararining undirilishini so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'pro-07',
    title: 'Tadbirkorlik faoliyatiga noqonuniy aralashuv ustidan prokurorga shikoyat',
    category: 'prokuratura-murojaatlari',
    categoryName: 'Prokuratura murojaatlari',
    description: 'Nazorat organlarining ruxsatsiz yoki noqonuniy tekshiruvlari va biznesga to\'sqinlik qilishlari yuzasidan shikoyat.',
    keywords: ['tadbirkorlik himoyasi', 'noqonuniy tekshiruv', 'JK 192', 'prokuror'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi JK 192-moddalari',
      article: 'JK 192-1 - 192-8-moddalar',
      lexUrl: 'https://lex.uz/docs/111460',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'prosecutorOffice', label: 'Prokuratura', placeholder: 'Qoraqalpog\'iston Respublikasi prokuraturasiga', type: 'text' },
      { key: 'businessName', label: 'Tadbirkorlik subyekti nomi', placeholder: '"Baraka Biznes Fayz" MChJ', type: 'text' },
      { key: 'interferenceDetails', label: 'Noqonuniy aralashuv tafsiloti', placeholder: 'Nazorat organi Yagona elektron reyestrda ro\'yxatdan o\'tmasdan noqonuniy tekshiruv boshladi', type: 'textarea' },
    ],
    templateText: `{{prosecutorOffice}}ga

Murojaat qiluvchi: {{fullName}}
Tashkilot: {{businessName}}
Telefon: {{phone}}

SHIKOYAT
(Tadbirkorlik faoliyatiga to'sqinlik qilish bo'yicha)

Bizning korxonamizga nisbatan noqonuniy xatti-harakat sodir etildi: {{interferenceDetails}}. JK 192-moddalari talablari buzilganligi sababli tadbirkorlik huquqlarimizni himoya qilishingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'pro-08',
    title: 'Ijtimoiy ta\'minot va nogironlik nafaqasi to\'lanmasligi bo\'yicha ariza',
    category: 'prokuratura-murojaatlari',
    categoryName: 'Prokuratura murojaatlari',
    description: 'Pensiya jamg\'armasi yoki ijtimoiy xizmatlar tomonidan qonuniy belgilangan nafaqa yoki moddiy yordamni bermaslik yuzasidan ariza.',
    keywords: ['ijtimoiy himoya', 'nogironlik nafaqasi', 'pensiya fondi', 'prokuror nazorati'],
    legalBasis: {
      lawName: '"Fuqarolarning davlat pensiya ta\'minoti to\'g\'risida"gi Qonun',
      article: 'Qonun talablari',
      lexUrl: 'https://lex.uz/docs/111460',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'prosecutorOffice', label: 'Prokuratura', placeholder: 'Farg\'ona viloyati Rishton tumani prokuroriga', type: 'text' },
      { key: 'benefitType', label: 'To\'lanmayotgan nafaqa turi', placeholder: 'Bolalikdan nogironlik nafaqasi', type: 'text' },
    ],
    templateText: `{{prosecutorOffice}}ga

Ariza beruvchi: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

ARIZA
(Nafaqa to'lovlari asossiz to'xtatilganligi to'g'risida)

Qonuniy tayinlangan {{benefitType}} to'lovlari asossiz to'xtatib qo'yilgan. Qonuniylikni ta'minlab, to'lovlarning to'liq to'lanishiga ko'mak berishingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  }
];
