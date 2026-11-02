import { LegalDocument } from '../../types';
import { COMMON_PERSONAL_FIELDS } from '../commonFields';

export const PETITIONS_AND_CONTRACTS_DOCS: LegalDocument[] = [
  // ILTIMOSNOMALAR
  {
    id: 'ilt-01',
    title: 'Sud majlisida videokonferensaloqa (VKS) rejimida ishtirok etish to\'g\'risida iltimosnoma',
    category: 'iltimosnomalar',
    categoryName: 'Iltimosnomalar',
    description: 'Boshqa viloyat yoki shaharda yashovchi da\'vogar yoki javobgarning o\'z hududidagi sud binosidan turib masofaviy qatnashishi haqida iltimosnoma.',
    keywords: ['videokonferensiya', 'VKS', 'masofaviy sud', 'FPK 209', 'audio video'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik protsessual kodeksi',
      article: '209-modda',
      lexUrl: 'https://lex.uz/docs/3517337',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourtName', label: 'Ishni ko\'rayotgan sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Toshkent shahar Mirzo Ulug\'bek tumanlararo sudiga', type: 'text' },
      { key: 'localCourtForVks', label: 'Ariza beruvchi joylashgan hududiy sud', placeholder: 'Fuqarolik ishlari bo\'yicha Samarqand shahar sudiga kelgan holda', type: 'text' },
      { key: 'civilCaseId', label: 'Fuqarolik ishi raqami', placeholder: '№ 2-1540/2024-sonli ish', type: 'text' },
    ],
    templateText: `{{targetCourtName}}ga

Ishdagi taraf: {{fullName}}
Pasport/ID: {{passport}}
Yashash manzili: {{address}}
Telefon: {{phone}}

ILTIMOSNOMA
(Sud majlisida videokonferensaloqa tizimi orqali ishtirok etish to'g'risida)

Sizning ish yurituvuvizda ko'rib chiqilayotgan {{civilCaseId}} bo'yicha men taraf sifatida ishtirok etmoqdaman.

Mening doimiy yashash joyim Toshkent shahridan uzoqda ({{address}}) joylashganligi sababli, har bir sud majlisiga kelib-ketish jiddiy moliyaviy va vaqt xarajatlarini talab etadi.

O'zbekiston Respublikasi Fuqarolik protsessual kodeksining 209-moddasiga ko'ra, ishda ishtirok etuvchi shaxslar o'zlarining iltimosnomasiga ko'ra sud majlisida videokonferensaloqa tizimidan foydalangan holda ishtirok etishlari mumkin.

SO'RAYMAN:

Mazkur fuqarolik ishi bo'yicha navbatdagi sud majlisida {{localCourtForVks}} binosida bo'lgan holda videokonferensaloqa tizimi orqali ishtirok etishimni ta'minlashingizni.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'ilt-02',
    title: 'Sud majlisida audio va video yozuv olib borishga ruxsat berish to\'g\'risida iltimosnoma',
    category: 'iltimosnomalar',
    categoryName: 'Iltimosnomalar',
    description: 'Ochiq sud majlisida jarayonni audio va videotasvirga olishga ruxsat so\'rash.',
    keywords: ['audio yozuv', 'video yozuv', 'sud oshkoraligi', 'FPK 19'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik protsessual kodeksi',
      article: '19-modda',
      lexUrl: 'https://lex.uz/docs/3517337',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'courtName', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Chilonzor sudiga', type: 'text' },
    ],
    templateText: `{{courtName}}ga

Ishdagi taraf: {{fullName}}
Telefon: {{phone}}

ILTIMOSNOMA
(Audio/video yozuv yuritish haqida)

FPK 19-moddasiga ko'ra sud majlislarining oshkoraligi prinsipiga asosan ochiq sud majlisi davomida shaxsiy audio va video qurilmalardan foydalanishimga ruxsat berishingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'ilt-03',
    title: 'Da\'voni ta\'minlash choralari (javobgarning mulkini xatlash) to\'g\'risida iltimosnoma',
    category: 'iltimosnomalar',
    categoryName: 'Iltimosnomalar',
    description: 'Javobgar mol-mulkini boshqalarga sotib yubormasligi yoki yashirmasligi uchun sud orqali xatlov (taqiq) qo\'yish.',
    keywords: ['da\'voni ta\'minlash', 'mol-mulkni xatlash', 'FPK 106', 'taqiq qo\'yish'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik protsessual kodeksi',
      article: '106-110-moddalar',
      lexUrl: 'https://lex.uz/docs/3517337',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'courtName', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Yakkasaroy sudiga', type: 'text' },
      { key: 'defendantName', label: 'Javobgar F.I.Sh.', placeholder: 'Qobilov Farrux', type: 'text' },
      { key: 'propertyToFreeze', label: 'Xatlanishi so\'ralayotgan mulk (avto, xonadon, bank hisobi)', placeholder: 'Javobgarga tegishli "Chevrolet Tracker" rusumli avtomobil va xonadon', type: 'text' },
    ],
    templateText: `{{courtName}}ga

Da'vogar: {{fullName}}
Telefon: {{phone}}

ILTIMOSNOMA
(Da'voni ta'minlash to'g'risida)

Javobgar {{defendantName}} sud davomida o'ziga tegishli mol-mulklarni boshqa shaxslar nomiga o'tkazib yuborishi va bo'lajak sud qarori ijrosini qiyinlashtirishi mumkin.

FPK 106-moddasiga muvofiq, javobgarga tegishli {{propertyToFreeze}}ga nisbatan taqiq qo'yish (xatlash) chorasini ko'rishingizni so'rayman.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'ilt-04',
    title: 'Ish bo\'yicha sud ekspertizasi tayinlash to\'g\'risida iltimosnoma',
    category: 'iltimosnomalar',
    categoryName: 'Iltimosnomalar',
    description: 'Sud-xatshunoslik, sud-tibbiy yoki sud qurilish-texnikaviy ekspertizasini tayinlash va ekspert oldiga savollar qo\'yish.',
    keywords: ['sud ekspertizasi', 'xatshunoslik', 'FPK 87', 'ekspert tayinlash'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik protsessual kodeksi',
      article: '87-94-moddalar',
      lexUrl: 'https://lex.uz/docs/3517337',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'courtName', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Shayxontohur sudiga', type: 'text' },
      { key: 'expertiseType', label: 'Ekspertiza turi', placeholder: 'Sud-xatshunoslik (qo\'lyozma) ekspertizasi', type: 'text' },
      { key: 'expertQuestions', label: 'Ekspert oldiga qo\'yilayotgan savollar', placeholder: 'Tilxatdagi imzo haqiqatdan ham javobgar tomonidan qo\'yilganmi yoki boshqa shaxs tomonidan qalbakilashtirilganmi?', type: 'textarea' },
    ],
    templateText: `{{courtName}}ga

Ishdagi taraf: {{fullName}}
Telefon: {{phone}}

ILTIMOSNOMA
(Sud ekspertizasi tayinlash to'g'risida)

Ish uchun muhim holatlarni aniqlash maqsadida maxsus bilimlardan foydalanish talab etiladi. FPK 87-moddasiga asosan:
1. Ish bo'yicha {{expertiseType}} tayinlashingizni;
2. Ekspert oldiga quyidagi savollarni qo'yishingizni:
{{expertQuestions}}

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'ilt-05',
    title: 'Qo\'shimcha guvohlarni sud majlisiga chaqirish va so\'roq qilish haqida iltimosnoma',
    category: 'iltimosnomalar',
    categoryName: 'Iltimosnomalar',
    description: 'Nizo holatlarini o\'z ko\'zi bilan ko\'rgan qo\'shimcha shaxslarni sudga chaqirib ko\'rsatmasini eshitish.',
    keywords: ['guvoh chaqirish', 'sud guvohi', 'FPK 80'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik protsessual kodeksi',
      article: '80, 81-moddalar',
      lexUrl: 'https://lex.uz/docs/3517337',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'courtName', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Sergeli sudiga', type: 'text' },
      { key: 'witnessDetails', label: 'Guvohning F.I.Sh., manzili va nimani tasdiqlashi', placeholder: 'Sattorov Elyor (Toshkent sh., Sergeli-4, 12-uy). Qarz puli uning guvohligida berilganligini tasdiqlaydi', type: 'textarea' },
    ],
    templateText: `{{courtName}}ga

Da'vogar/Javobgar: {{fullName}}

ILTIMOSNOMA
(Guvohni sudga chaqirish haqida)

FPK 80-moddasiga asosan quyidagi guvohni sudga chaqirib, so'roq qilishingizni so'rayman:
{{witnessDetails}}.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'ilt-06',
    title: 'Qo\'shimcha yozma dalillarni davlat organlaridan talab qilib olish haqida iltimosnoma',
    category: 'iltimosnomalar',
    categoryName: 'Iltimosnomalar',
    description: 'Fuqaroga berilmaydigan bank, kadastr yoki arxiv ma\'lumotlarini sud orqali rasmiy so\'rovnoma bilan talab qilish.',
    keywords: ['dalil talab qilish', 'sud so\'rovi', 'FPK 74', 'yozma dalil'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik protsessual kodeksi',
      article: '74, 75-moddalar',
      lexUrl: 'https://lex.uz/docs/3517337',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'courtName', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Olmazor sudiga', type: 'text' },
      { key: 'evidenceRequestDetails', label: 'Qaysi tashkilotdan qanday hujjat so\'ralmoqda', placeholder: 'Davlat kadastrlari palatasi Olmazor tuman bo\'limidan xonadonning kadastr yig\'majildini talab qilish', type: 'textarea' },
    ],
    templateText: `{{courtName}}ga

Ishdagi taraf: {{fullName}}

ILTIMOSNOMA
(Yozma dalillarni talab qilib olish to'g'risida)

Mustaqil ravishda olish imkoni bo'lmaganligi sababli, FPK 74-moddasiga muvofiq quyidagi dalillarni sud so'rovi orqali talab qilib olishingizni so'rayman:
{{evidenceRequestDetails}}.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'ilt-07',
    title: 'Sud majlisi bayonnomasi bilan tanishish va e\'tiroz bildirish haqida iltimosnoma',
    category: 'iltimosnomalar',
    categoryName: 'Iltimosnomalar',
    description: 'Sud majlisi bayonnomasi bilan 3 kunlik muddatda tanishish va kiritilmagan gaplarni yozma e\'tiroz bilan to\'ldirish.',
    keywords: ['sud bayonnomasi', 'bayonnomaga e\'tiroz', 'FPK 272'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik protsessual kodeksi',
      article: '272, 273-moddalar',
      lexUrl: 'https://lex.uz/docs/3517337',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'courtName', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Yunusobod sudiga', type: 'text' },
    ],
    templateText: `{{courtName}}ga

Ishdagi taraf: {{fullName}}

ILTIMOSNOMA
(Sud bayonnomasi bilan tanishish haqida)

FPK 272-moddasiga asosan sud majlisi bayonnomasi bilan tanishib chiqishim uchun ruxsat berishingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'ilt-08',
    title: 'Sud ijrosini orqaga qaytarish (restitutsiya) to\'g\'risida iltimosnoma',
    category: 'iltimosnomalar',
    categoryName: 'Iltimosnomalar',
    description: 'Bekor qilingan sud qarori bo\'yicha undirilgan barcha pullarni qarzdorga qaytarib berish to\'g\'risida sudga ariza.',
    keywords: ['ijroni qaytarish', 'restitutsiya', 'FPK 464'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik protsessual kodeksi',
      article: '464, 465-moddalar',
      lexUrl: 'https://lex.uz/docs/3517337',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'courtName', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Mirzo Ulug\'bek sudiga', type: 'text' },
      { key: 'restitutionSum', label: 'Qaytarilishi lozim bo\'lgan summa', placeholder: '15 000 000 so\'m', type: 'text' },
    ],
    templateText: `{{courtName}}ga

Ariza beruvchi: {{fullName}}

ILTIMOSNOMA
(Sud qarori ijrosini orqaga qaytarish haqida)

Oldingi sud qarori bekor qilinganligi munosabati bilan, FPK 464-moddasiga asosan undirib olingan {{restitutionSum}}ni da'vogardan menga qaytarish to'g'risida ajrim chiqarishingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },

  // SHARTNOMALAR
  {
    id: 'shar-01',
    title: 'Turar-joy (kvartira) ijara shartnomasi',
    category: 'shartnomalar',
    categoryName: 'Shartnomalar',
    description: 'Kvartira yoki xususiy uyni fuqarolar o\'rtasida ijaraga berish, oylik to\'lov, depozit va majburiyatlarni belgilovchi rasmiy yozma shartnoma.',
    keywords: ['ijara shartnomasi', 'kvartira ijarasi', 'FK 558', 'soliq ijara', 'ijaraga beruvchi'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '558-564, 600-616-moddalar',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'tenantFullName', label: 'Ijaraga oluvchi (ijarachi) F.I.Sh.', placeholder: 'Sultonov Daler Azizovich', type: 'text' },
      { key: 'tenantPassport', label: 'Ijarachining pasport/ID ma\'lumotlari', placeholder: 'AC 9876543, IIB tomonidan 2021-yilda berilgan', type: 'text' },
      { key: 'rentalAddress', label: 'Ijaraga berilayotgan turar-joy manzili', placeholder: 'Toshkent shahri, Chilonzor tumani, 9-mavze, 12-uy, 45-xonadon', type: 'text' },
      { key: 'monthlyRentFee', label: 'Oylik ijara to\'lovi miqdori', placeholder: '4 000 000 (to\'rt million) so\'m', type: 'text' },
      { key: 'contractPeriod', label: 'Shartnoma amal qilish muddati', placeholder: '12 oy (2024-yil 1-apreldan 2025-yil 1-aprelgacha)', type: 'text' },
    ],
    templateText: `TURAR-JOY IJARA SHARTNOMASI

Toshkent shahri                                                   "____" _________ 2024-yil

Bir tomondan, mulkdor {{fullName}} (Pasport: {{passport}}, Manzil: {{address}}, Tel: {{phone}}), keyingi o'rinlarda "Ijaraga beruvchi" deb ataluvchi, va ikkinchi tomondan fuqaro {{tenantFullName}} (Pasport: {{tenantPassport}}, Tel: Ijarachi telefoni), keyingi o'rinlarda "Ijaraga oluvchi" deb ataluvchi, quyidagilar haqida mazkur shartnomani tuzdilar:

1. SHARTNOMA PREDMETI
1.1. Ijaraga beruvchi o'ziga xususiy mulk huquqi asosida tegishli bo'lgan {{rentalAddress}} manzilidagi turar-joyni Ijaraga oluvchiga vaqtincha yashash uchun haq evaziga ijaraga beradi.

2. TO'LOV TARTIBI
2.1. Turar-joy uchun oylik ijara haqi {{monthlyRentFee}} miqdorida belgilanadi.
2.2. To'lov har oyning _____ sanasiga qadar oldindan naqd yoki bank kartasi orqali to'lanadi.
2.3. Kommunal xizmatlar (elektr, gaz, sovuq va issiq suv, internet) to'lovlari amaldagi hisoblagichlar bo'yicha Ijaraga oluvchi tomonidan to'lanadi.

3. TARAFLARNING HUQUQ VA MAJBURIYATLARI
3.1. Ijaraga oluvchi uy-joyni soz holatda saqlashi, sanitariya va yong'in xavfsizligi qoidalariga rioya qilishi, qo'shnilarning osoyishtaligini buzmasligi shart.
3.2. Ijaraga beruvchi uyni kelishilgan sanada yashash uchun yaroqli holatda topshirishi shart.

4. SHARTNOMA MUDDATI VA BEKOR QILISH
4.1. Shartnoma {{contractPeriod}} muddatga tuzildi.
4.2. Shartnoma O'zbekiston Respublikasi Soliq organlarida (ijara.soliq.uz) ro'yxatdan o'tkaziladi.

TARAFLARNING REKVIZITLARI VA IMZOLARI:

Ijaraga beruvchi:
{{fullName}}
Pasport/ID: {{passport}}
Telefon: {{phone}}
Imzo: _______________

Ijaraga oluvchi:
{{tenantFullName}}
Pasport/ID: {{tenantPassport}}
Imzo: _______________`
  },
  {
    id: 'shar-02',
    title: 'Fuqarolar o\'rtasida qarz shartnomasi va tilxat',
    category: 'shartnomalar',
    categoryName: 'Shartnomalar',
    description: 'Qarz oluvchi tomonidan ma\'lum summadagi pulni olganligini va belgilangan muddatda qaytarishini tasdiqlovchi qonuniy kuchga ega qarz shartnomasi.',
    keywords: ['qarz shartnomasi', 'tilxat', 'pul qarzi', 'FK 732', 'notarius'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '732-736-moddalar',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'borrowerFullName', label: 'Qarz oluvchi F.I.Sh.', placeholder: 'Karimov Jasur Shavkatovich', type: 'text' },
      { key: 'borrowerPassport', label: 'Qarz oluvchining pasport ma\'lumotlari', placeholder: 'AA 7654321, IIO tomonidan berilgan', type: 'text' },
      { key: 'borrowerAddress', label: 'Qarz oluvchining manzili', placeholder: 'Samarqand shahri, Bog\'ishamol ko\'chasi 14-uy', type: 'text' },
      { key: 'loanPrincipal', label: 'Qarz summasi (raqam va so\'z bilan)', placeholder: '30 000 000 (o\'ttiz million) so\'m', type: 'text' },
      { key: 'returnDeadlineDate', label: 'Qarzni qaytarishning oxirgi kuni', placeholder: '2024-yil 1-dekabr', type: 'date' },
    ],
    templateText: `QARZ SHARTNOMASI VA TILXAT

Shahar: ___________________                                     Sana: {{currentDate}}

Biz, bir tomondan {{fullName}} (Pasport/ID: {{passport}}, Yashash manzili: {{address}}, Tel: {{phone}}), keyingi o'rinlarda "Qarz beruvchi", va ikkinchi tomondan {{borrowerFullName}} (Pasport/ID: {{borrowerPassport}}, Yashash manzili: {{borrowerAddress}}), keyingi o'rinlarda "Qarz oluvchi", ushbu shartnomani quyidagilar haqida tuzdik:

1. Qarz beruvchi {{fullName}} bugun Qarz oluvchi {{borrowerFullName}}ga naqd {{loanPrincipal}} miqdorida qarz berdi, Qarz oluvchi esa mazkur pul mablag'ini to'liq sanab oldi.
2. Qarz oluvchi ushbu {{loanPrincipal}} miqdoridagi qarz summasini kechiktirmasdan {{returnDeadlineDate}} sanasiga qadar Qarz beruvchiga to'liq qaytarib berish majburiyatini oladi.
3. Qarz o'z vaqtida qaytarilmagan taqdirda, O'zbekiston Respublikasi FKning 735-moddasiga asosan kechiktirilgan har bir kun uchun foizlar va sud xarajatlari qarz oluvchi hisobidan undiriladi.

Qarz oldim va qaytarish majburiyatini olaman:
Qarz oluvchi: {{borrowerFullName}}
Imzo: _______________

Qarz berdim:
Qarz beruvchi: {{fullName}}
Imzo: _______________`
  },
  {
    id: 'shar-03',
    title: 'Avtotransport vositasini ijaraga berish shartnomasi',
    category: 'shartnomalar',
    categoryName: 'Shartnomalar',
    description: 'Yengil avtomobilni haydovchisiz vaqtinchalik ijaraga berish (prokat) bo\'yicha shartnoma.',
    keywords: ['avto ijara', 'mashina ijarasi', 'FK 565', 'avtomobil shartnomasi'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '565-572-moddalar',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'carRenter', label: 'Ijarachi F.I.Sh.', placeholder: 'Nodirov Otabek', type: 'text' },
      { key: 'carModelNumber', label: 'Mashina modeli va davlat raqami', placeholder: 'Chevrolet Lacetti, davlat raqami 01 A 777 AA', type: 'text' },
      { key: 'dailyMonthlyFee', label: 'Ijara haqi (kunlik/oylik)', placeholder: 'Oyiga 6 000 000 so\'m', type: 'text' },
    ],
    templateText: `AVTOTRANSPORT VOSITASI IJARA SHARTNOMASI

Sana: {{currentDate}}

Ijaraga beruvchi {{fullName}} (Tel: {{phone}}) o'ziga tegishli {{carModelNumber}} avtomashinasini fuqaro {{carRenter}}ga vaqtinchalik foydalanishga beradi.
Ijara haqi: {{dailyMonthlyFee}}. Ijarachi YHQ qoidalariga rioya qilish, jarimalar va yoqilg'i xarajatlarini to'lash majburiyatini oladi.

Ijaraga beruvchi: {{fullName}} (Imzo: _______________)
Ijarachi: {{carRenter}} (Imzo: _______________)`
  },
  {
    id: 'shar-04',
    title: 'Haq evaziga xizmatlar ko\'rsatish shartnomasi (FXX)',
    category: 'shartnomalar',
    categoryName: 'Shartnomalar',
    description: 'Dasturlash, dizayn, ta\'mirlash, repetitorlik yoki konsalting xizmatlarini ko\'rsatish bo\'yicha fuqarolik-huquqiy shartnomasi.',
    keywords: ['xizmat ko\'rsatish', 'FXX', 'fuqarolik shartnomasi', 'FK 703'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '703-708-moddalar',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'clientFullName', label: 'Buyurtmachi F.I.Sh. yoki korxona', placeholder: '"Smart Soft" MChJ', type: 'text' },
      { key: 'serviceDescription', label: 'Ko\'rsatiladigan xizmat turi', placeholder: 'Korxona uchun veb-sayt va mobil ilova ishlab chiqish', type: 'textarea' },
      { key: 'servicePrice', label: 'Xizmat haqi summasi', placeholder: '15 000 000 so\'m', type: 'text' },
    ],
    templateText: `XIZMAT KO'RSATISH SHARTNOMASI

Sana: {{currentDate}}

Buyurtmachi {{clientFullName}} va Ijrochi {{fullName}} ushbu shartnomani tuzdilar:
Ijrochi {{serviceDescription}} xizmatini bajaradi. Buyurtmachi qabul qilib olgach {{servicePrice}} to'laydi.

Ijrochi: {{fullName}} (Imzo: _______________)
Buyurtmachi: {{clientFullName}} (Imzo: _______________)`
  },
  {
    id: 'shar-05',
    title: 'Xususiy mulkni tekin foydalanishga berish (Ssuda) shartnomasi',
    category: 'shartnomalar',
    categoryName: 'Shartnomalar',
    description: 'Yaqin qarindoshlar o\'rtasida uy yoki mashinani hech qanday ijara to\'lovisiz vaqtincha foydalanishga berish shartnomasi.',
    keywords: ['ssuda shartnomasi', 'tekin foydalanish', 'FK 617'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '617-625-moddalar',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'userPerson', label: 'Foydalanuvchi qarindosh F.I.Sh.', placeholder: 'Valiyev Sardor (o\'g\'li)', type: 'text' },
      { key: 'propertyItem', label: 'Tekin berilayotgan mulk', placeholder: 'Toshkent sh., Yunusobod 4-mavzedagi xonadon', type: 'text' },
    ],
    templateText: `TEKIN FOYDALANISH (SSUDA) SHARTNOMASI

Mulkdor {{fullName}} o'ziga qarashli {{propertyItem}}ni fuqaro {{userPerson}}ga tekin foydalanish uchun topshiradi.

Mulkdor: {{fullName}}
Foydalanuvchi: {{userPerson}}`
  },
  {
    id: 'shar-06',
    title: 'Kvartirani ta\'mirlash bo\'yicha maishiy pudrat shartnomasi',
    category: 'shartnomalar',
    categoryName: 'Shartnomalar',
    description: 'Xonadonni evrota\'mir qilish bo\'yicha usta bilan muddat, narx va kafolatni rasmiylashtiruvchi shartnoma.',
    keywords: ['ta\'mir shartnomasi', 'pudrat', 'usta shartnomasi', 'FK 631'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '631-655-moddalar',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'masterBuilder', label: 'Usta (pudratchi) F.I.Sh.', placeholder: 'Ergashev Jamshid', type: 'text' },
      { key: 'repairScope', label: 'Ta\'mirlash ishlari ro\'yxati va muddati', placeholder: 'Kafel yotqizish, devorlarni bo\'yash, muddat: 45 kun', type: 'textarea' },
      { key: 'repairFee', label: 'Ta\'mir haqi', placeholder: '25 000 000 so\'m', type: 'text' },
    ],
    templateText: `MAISHIY PUDRAT SHARTNOMASI

Buyurtmachi: {{fullName}} (Tel: {{phone}})
Pudratchi: {{masterBuilder}}

Pudratchi {{repairScope}} ishlarini bajaradi. Jami to'lov: {{repairFee}}. Ishlarga 1 yillik kafolat beriladi.

Buyurtmachi: {{fullName}} (Imzo: _______________)
Pudratchi: {{masterBuilder}} (Imzo: _______________)`
  },
  {
    id: 'shar-07',
    title: 'Buyum (tovar) oldi-sotdi shartnomasi',
    category: 'shartnomalar',
    categoryName: 'Shartnomalar',
    description: 'Fuqarolar o\'rtasida uskuna, mebel yoki boshqa qimmatbaho mulkni sotish shartnomasi.',
    keywords: ['oldi-sotdi shartnomasi', 'mulk sotish', 'FK 378'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '378-422-moddalar',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'buyerName', label: 'Sotib oluvchi F.I.Sh.', placeholder: 'Sobirov Ulug\'bek', type: 'text' },
      { key: 'itemSold', label: 'Sotilayotgan buyum tavsifi', placeholder: 'Konditsioner Artel 18 va generator', type: 'text' },
      { key: 'itemPrice', label: 'Sotish bahosi', placeholder: '8 500 000 so\'m', type: 'text' },
    ],
    templateText: `BUYUM OLDI-SOTDI SHARTNOMASI

Sotuvchi: {{fullName}}
Xaridor: {{buyerName}}

Sotuvchi {{itemSold}}ni Xaridorga topshiradi, Xaridor esa {{itemPrice}} miqdoridagi to'lovni to'liq amalga oshiradi.

Sotuvchi: {{fullName}} (Imzo: _______________)
Xaridor: {{buyerName}} (Imzo: _______________)`
  },
  {
    id: 'shar-08',
    title: 'Ko\'chmas mulk oldi-sotdi dastlabki shartnomasi',
    category: 'shartnomalar',
    categoryName: 'Shartnomalar',
    description: 'Kelgusida notarial tartibda asosiy oldi-sotdi shartnomasini tuzish majburiyatini belgilovchi dastlabki shartnoma.',
    keywords: ['dastlabki shartnoma', 'uy oldi sotdi', 'FK 361'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '361-modda',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'futureBuyer', label: 'Bo\'lajak xaridor F.I.Sh.', placeholder: 'Ahrorov Bobur', type: 'text' },
      { key: 'agreedPrice', label: 'Kelishilgan sotuv summasi', placeholder: '50 000 AQSh dollari', type: 'text' },
    ],
    templateText: `KO'CHMAS MULK OLDI-SOTDI DASTLABKI SHARTNOMASI

Taraflar 30 kun ichida notarial tartibda xonadon oldi-sotdi shartnomasini {{agreedPrice}} bahosida rasmiylashtirish majburiyatini oladilar.

Sotuvchi: {{fullName}}
Xaridor: {{futureBuyer}}`
  },

  // ISHONCHNOMALAR
  {
    id: 'ish-01',
    title: 'Sudda va davlat organlarida vakillik qilish uchun ishonchnoma',
    category: 'ishonchnomalar',
    categoryName: 'Ishonchnomalar',
    description: 'Fuqaroning o\'z huquq va manfaatlarini barcha sudlar, prokuratura, IIB, MIB va davlat tashkilotlarida himoya qilish uchun beriladigan notarial ishonchnomasi.',
    keywords: ['sudda ishonchnoma', 'vakillik', 'advokat ishonchnomasi', 'FPK 67', 'FK 134'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi va Fuqarolik protsessual kodeksi',
      article: 'FK 134-144, FPK 67-69-moddalar',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'representativeFullName', label: 'Vakil (ishonchli shaxs) F.I.Sh.', placeholder: 'Advokat Qosimov Rustam Aliyevich', type: 'text' },
      { key: 'representativePassport', label: 'Vakilning pasport/ID ma\'lumotlari', placeholder: 'AB 8765432, 2021-yilda Toshkent sh. IIBB tomonidan berilgan', type: 'text' },
      { key: 'representativeAddress', label: 'Vakilning manzili', placeholder: 'Toshkent shahri, Mirobod tumani, Nukus ko\'chasi 21-uy', type: 'text' },
      { key: 'proxyDuration', label: 'Ishonchnoma amal qilish muddati', placeholder: '3 (uch) yil muddatga', type: 'text' },
    ],
    templateText: `ISHONCHNOMA
(Sudlarda va davlat organlarida vakillik qilish uchun)

O'zbekiston Respublikasi, Toshkent shahri                              Sana: {{currentDate}}

Men — fuqaro {{fullName}} (Pasport/ID: {{passport}}, Yashash manzili: {{address}}, Tel: {{phone}}), ushbu ishonchnoma orqali fuqaro {{representativeFullName}}ga (Pasport/ID: {{representativePassport}}, Yashash manzili: {{representativeAddress}}) quyidagi vakolatlarni beraman:

O'zbekiston Respublikasining barcha fuqarolik, iqtisodiy, ma'muriy va jinoyat ishlari bo'yicha sudlarida, Majburiy ijro byurosi (MIB), Prokuratura, Ichki ishlar organlari, Adliya, Kadastr, Soliq va boshqa barcha davlat hamda nodavlat tashkilotlarida mening nomimdan qonuniy vakil sifatida ishtirok etish.

Ushbu maqsadda vakilimga da'vo arizasini, arizalarni, shikoyat va iltimosnomalarni imzolash, sud hal qiluv qarorlari ustidan apellyatsiya va kassatsiya shikoyatlari berish, davlat bojlarini to'lash, ishlarni tinchlik bitimi bilan yakunlash, sud ijro hujjatlarini taqdim etish va undirilgan pul mablag'lari hamda mulklarni qabul qilib olish huquqini beraman.

Ishonchnoma {{proxyDuration}} muddatga berildi (boshqa shaxsga o'tkazish huquqi bilan/huquqisiz).

Ishonch bildiruvchi:
{{fullName}} ________________________ (Imzo)

(Ushbu andoza notarial idorada tasdiqlanishi lozim)`
  },
  {
    id: 'ish-02',
    title: 'Avtotransport vositasini boshqarish va tasarruf etish (bosh ishonchnoma) andozasi',
    category: 'ishonchnomalar',
    categoryName: 'Ishonchnomalar',
    description: 'Avtomobilni haydash, texnik ko\'rikdan o\'tkazish, sug\'urtalash, sotish yoki qayta ro\'yxatdan o\'tkazish huquqi bilan beriladigan ishonchnoma.',
    keywords: ['bosh ishonchnoma', 'avtomashina ishonchnomasi', 'general doverennost', 'FK 135'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '135, 140-moddalar',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'driverRepresentative', label: 'Ishonchli haydovchi F.I.Sh.', placeholder: 'Ahmedov Boburjon', type: 'text' },
      { key: 'carTechnicalData', label: 'Avtomobil rusumi, davlat raqami, kuzov va texposport raqami', placeholder: 'Chevrolet Gentra, davlat raqami 01 B 999 BA, texposport AAC 1234567', type: 'textarea' },
      { key: 'proxyTerm', label: 'Muddati', placeholder: '3 yil muddatga', type: 'text' },
    ],
    templateText: `AVTOTRANSPORT VOSITASINI TASARRUF ETISH UCHUN ISHONCHNOMA

Mulkdor: {{fullName}}
Pasport/ID: {{passport}}
Manzil: {{address}}

Vakil: {{driverRepresentative}}

Men o'zimga tegishli {{carTechnicalData}} avtotransport vositasini boshqarish, texnik ko'rikdan o'tkazish, barcha turdagi sug'urta shartnomalarini tuzish, YHXB organlarida ro'yxatga olish, sotish, almashtirish va ijaraga berish vakolatlarini {{driverRepresentative}}ga topshiraman.

Muddati: {{proxyTerm}}.

Ishonch bildiruvchi: {{fullName}} (Imzo: _______________)`
  },
  {
    id: 'ish-03',
    title: 'Bankdagi hisobvaraqdan mablag\'larni tasarruf etish ishonchnomasi',
    category: 'ishonchnomalar',
    categoryName: 'Ishonchnomalar',
    description: 'Bankda omonat ochish, pul mablag\'larini yechib olish yoki to\'lovlarni amalga oshirish bo\'yicha ishonchnoma.',
    keywords: ['bank ishonchnoma', 'hisobvaraq', 'omonat', 'FK 134'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '134, 137-moddalar',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'bankRepName', label: 'Vakil F.I.Sh.', placeholder: 'Salimova Dilnoza', type: 'text' },
      { key: 'bankNameBranch', label: 'Bank nomi va hisobvaraq', placeholder: '"Ipoteka-bank" ATIB Chilonzor filiali', type: 'text' },
    ],
    templateText: `BANK HISOBVARAQ BO'YICHA ISHONCHNOMA

{{fullName}} o'ziga tegishli {{bankNameBranch}}dagi hisobvaraqlaridan pullarni yechib olish, o'tkazish va kvitansiyalarni imzolash huquqini {{bankRepName}}ga ishonib topshiradi.

Ishonch bildiruvchi: {{fullName}} (Imzo: _______________)`
  },
  {
    id: 'ish-04',
    title: 'Pensiya va nafaqalarni pochta yoki bankdan olish uchun ishonchnoma',
    category: 'ishonchnomalar',
    categoryName: 'Ishonchnomalar',
    description: 'Keksa yoki betob fuqaroning oylik pensiya pulini qabul qilib olishi uchun oila a\'zosiga beradigan ishonchnomasi.',
    keywords: ['pensiya ishonchnomasi', 'nafaqa olish', 'FK 136'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '136-modda (Statsionar davolanishdagi muassasa yoki mahalla tomonidan tasdiqlanishi mumkin)',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'trustedPersonPension', label: 'Ishonchli shaxs F.I.Sh.', placeholder: 'Yoqubov Farhod (o\'g\'li)', type: 'text' },
    ],
    templateText: `PENSIYA OLISH UCHUN ISHONCHNOMA

Men — pensioner {{fullName}} menga tayinlangan oylik yoshga doir pensiya va nafaqa pullarini Xalq banki yoki Aloqabank bo'limlaridan olish, ro'yxatga imzo qo'yish huquqini {{trustedPersonPension}}ga ishonib topshiraman.

Pensioner: {{fullName}} (Imzo: _______________)`
  },
  {
    id: 'ish-05',
    title: 'Meros ishlarini yuritish va hujjatlarni rasmiylashtirish uchun ishonchnoma',
    category: 'ishonchnomalar',
    categoryName: 'Ishonchnomalar',
    description: 'Notarius, arxiv va kadastr idoralarida merosni qabul qilib guvohnoma olish bo\'yicha ishonchnoma.',
    keywords: ['meros ishonchnoma', 'merosxo\'r vakili', 'notarius'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '134, 1146-moddalar',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'heritageRepresentative', label: 'Vakil F.I.Sh.', placeholder: 'G\'aniyev Alisher', type: 'text' },
    ],
    templateText: `MEROS ISHLARI BO'YICHA ISHONCHNOMA

Marhumdan qolgan merosni qabul qilish, notarial idoraga ariza berish va meros guvohnomasini olish vakolatini {{heritageRepresentative}}ga topshiraman.

Ishonch bildiruvchi: {{fullName}} (Imzo: _______________)`
  },
  {
    id: 'ish-06',
    title: 'Ko\'chmas mulkni sotish yoki sotib olish bo\'yicha vakillik ishonchnomasi',
    category: 'ishonchnomalar',
    categoryName: 'Ishonchnomalar',
    description: 'Xorijda yoki boshqa shaharda bo\'lgan uy egasining nomidan uyni sotish yoki sotib olish ishonchnomasi.',
    keywords: ['uy sotish ishonchnoma', 'ko\'chmas mulk', 'kadastr ishonchnomasi'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '134, 135-moddalar',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'realtorAgent', label: 'Vakil shaxs F.I.Sh.', placeholder: 'Usmonova Shahnoza', type: 'text' },
      { key: 'realtyAddressInfo', label: 'Ko\'chmas mulk manzili', placeholder: 'Toshkent sh., Yunusobod 15-mavze 8-uy', type: 'text' },
    ],
    templateText: `KO'CHMAS MULKNI SOTISH UCHUN ISHONCHNOMA

{{realtyAddressInfo}} manzilidagi xonadonni sotish, kadastr hujjatlarini tayyorlash va notariusda shartnoma imzolash vakolatini {{realtorAgent}}ga ishonib topshiraman.

Ishonch bildiruvchi: {{fullName}} (Imzo: _______________)`
  },
  {
    id: 'ish-07',
    title: 'Yuridik shaxs (korxona) nomidan shartnomalar tuzish uchun ishonchnoma',
    category: 'ishonchnomalar',
    categoryName: 'Ishonchnomalar',
    description: 'Korxona direktori tomonidan xodimga mahsulot yetkazib berish, tovarlarni qabul qilish va shartnomalar imzolash huquqini berish.',
    keywords: ['korxona ishonchnomasi', 'tijorat ishonchnomasi', 'FK 138'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '138-modda',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'companyDirectorTitle', label: 'Korxona va direktor nomi', placeholder: '"Orient Silk" MChJ bosh direktori', type: 'text' },
      { key: 'authorizedStaffName', label: 'Vakolatli xodim F.I.Sh. va lavozimi', placeholder: 'Savdo bo\'limi boshlig\'i Karimov Davron', type: 'text' },
    ],
    templateText: `KORXONA NOMIDAN VAKILLIK ISHONCHNOMASI

{{companyDirectorTitle}} ushbu ishonchnoma orqali {{authorizedStaffName}}ga korxona nomidan xo'jalik shartnomalarini imzolash va tovar-moddiy boyliklarni qabul qilish huquqini beradi.

Bosh direktor: {{fullName}} (Imzo va muhr)`
  },
  {
    id: 'ish-08',
    title: 'Pochta jo\'natmalari va buyurtma xatlarni qabul qilib olish ishonchnomasi',
    category: 'ishonchnomalar',
    categoryName: 'Ishonchnomalar',
    description: 'Pochta aloqa bo\'limlaridan sud xabarnomalari, posilka va rasmiy xatlarni qabul qilish ishonchnomasi.',
    keywords: ['pochta ishonchnomasi', 'xat olish', 'posilka'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '136-modda',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'mailProxyReceiver', label: 'Ishonchli shaxs F.I.Sh.', placeholder: 'Sobirov Shavkat', type: 'text' },
    ],
    templateText: `POCHTA JO'NATMALARINI OLISH UCHUN ISHONCHNOMA

{{fullName}} nomiga kelgan barcha buyurtma xatlar, posilkalar va xabarnomalarni "O'zbekiston pochtasi" AJ bo'limlaridan qabul qilib olish huquqini {{mailProxyReceiver}}ga ishonib topshiraman.

Ishonch bildiruvchi: {{fullName}} (Imzo: _______________)`
  }
];
