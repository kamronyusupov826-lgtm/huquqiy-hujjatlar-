import { LegalDocument } from '../../types';
import { COMMON_PERSONAL_FIELDS } from '../commonFields';

export const INTERIOR_AND_LABOR_DOCS: LegalDocument[] = [
  // ICHKI ISHLAR ORGANLARIGA MUROJAATLAR
  {
    id: 'iib-01',
    title: 'Tazyiq va zo\'ravonlikdan himoya orderi berish to\'g\'risida IIBga ariza',
    category: 'ichki-ishlar',
    categoryName: 'Ichki ishlar organlariga murojaatlar',
    description: 'Oilada yoki boshqa joyda jismoniy, ruhiy yoki iqtisodiy tazyiqqa uchragan ayollar va shaxslarning profilaktika inspektoriga himoya orderi talabnomasi.',
    keywords: ['himoya orderi', 'tazyiq va zo\'ravonlik', 'IIB profilaktika', 'ayollar huquqi'],
    popular: true,
    legalBasis: {
      lawName: '"Xotin-qizlarni tazyiq va zo\'ravonlikdan himoya qilish to\'g\'risida"gi O\'zbekiston Respublikasi Qonuni',
      article: '10, 11, 23-28-moddalar',
      lexUrl: 'https://lex.uz/docs/4494709',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetPoliceOffice', label: 'Ichki ishlar bo\'limi nomi', placeholder: 'Toshkent shahar Yashnobod tumani IIO FMB profilaktika inspektoriga', type: 'text' },
      { key: 'harasserName', label: 'Tazyiq o\'tkazuvchi shaxs F.I.Sh.', placeholder: 'Jumayev Baxtiyor', type: 'text' },
      { key: 'relationshipToVictim', label: 'Ariza beruvchiga aloqadorligi', placeholder: 'Qonuniy turmush o\'rtog\'i / Sobiq er / Qarindosh', type: 'text' },
      { key: 'violenceDetails', label: 'Tazyiq va zo\'ravonlik holatlari', placeholder: 'Muntazam ravishda haqorat qiladi, jismoniy kuch ishlatish bilan qo\'rqitadi, moddiy ta\'minotdan mahrum qiladi', type: 'textarea' },
    ],
    templateText: `{{targetPoliceOffice}}ga

Ariza beruvchi: {{fullName}}
Pasport/ID: {{passport}}
Manzil: {{address}}
Telefon: {{phone}}

ARIZA
(Himoya orderi berish to'g'risida)

Men fuqaro {{harasserName}} ({{relationshipToVictim}}) tomonidan muntazam tazyiq va zo'ravonlikka duch kelmoqdaman:

{{violenceDetails}}.

Mazkur holatlar mening va voyaga yetmagan farzandlarimning ruhiy va jismoniy salomatligiga, xavfsizligimizga bevosita jiddiy xavf solmoqda.

"Xotin-qizlarni tazyiq va zo'ravonlikdan himoya qilish to'g'risida"gi O'zbekiston Respublikasi Qonunining 23-28-moddalariga muvofiq,

SO'RAYMAN:

1. Fuqaro {{harasserName}}ga nisbatan qonunda belgilangan tartibda 30 kun muddatga HIMOYA ORDERI rasmiylashtirib berishingizni;
2. Tazyiq o'tkazuvchiga menga va oila a'zolarimga yaqinlashishni, muloqot qilishni taqiqlash choralarini ko'rishingizni;
3. Uni profilaktik hisobga qo'yishingizni.

Ariza beruvchi: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'iib-02',
    title: 'Plastik kartadagi mablag\'larni o\'g\'irlash (Kiberjinoyat) yuzasidan ariza',
    category: 'ichki-ishlar',
    categoryName: 'Ichki ishlar organlariga murojaatlar',
    description: 'Bank kartasidan SMS-kodni aldov bilan olib yoki soxta havola (fishing) orqali pul yechib olgan kiberjinoyatchilarga qarshi Kiberxavfsizlik bo\'limiga ariza.',
    keywords: ['kiberjinoyat', 'plastik karta o\'g\'riligi', 'fishing', 'SMS kod', 'JK 169'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi JK 168, 169-moddalar, "Kiberxavfsizlik to\'g\'risida"gi Qonun',
      article: 'JK 168-modda 3-qism "g" bandi, JK 169',
      lexUrl: 'https://lex.uz/docs/111460',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCyberUnit', label: 'IIB Kiberxavfsizlik bo\'limi', placeholder: 'O\'zbekiston Respublikasi IIV Kiberxavfsizlik markaziga', type: 'text' },
      { key: 'cardNumberMasked', label: 'Bank kartasi raqami', placeholder: '8600 **** **** 1234 ("Ipoteka-bank")', type: 'text' },
      { key: 'stolenMoneyAmount', label: 'O\'g\'irlangan pul miqdori', placeholder: '15 400 000 so\'m', type: 'text' },
      { key: 'cyberIncidentDetails', label: 'Hodisa qanday yuz bergani va soxta havola/raqam', placeholder: 'Telegram orqali "Yordam puli" deb havola yuborishdi, kiritganimdan so\'ng hisobimdagi pullar yechib olindi', type: 'textarea' },
    ],
    templateText: `{{targetCyberUnit}}ga

Ariza beruvchi: {{fullName}}
Pasport/ID: {{passport}}
Manzil: {{address}}
Telefon: {{phone}}

ARIZA
(Kiberjinoyat sodir etilganligi to'g'risida)

{{cyberIncidentDetails}}. Natijada mening {{cardNumberMasked}}-sonli bank kartamdan {{stolenMoneyAmount}} miqdoridagi pul mablag'lari noma'lum hisoblarga o'tkazilib, talon-toroj qilindi.

Bank ilovasi orqali pul o'tgan tranzaksiya ID raqamlari va hisobvaraqlar aniqlangan.

SO'RAYMAN:

Mazkur kiberjinoyat yuzasidan qidiruv-surishtiruv ishlarini amalga oshirib, aybdorlarni aniqlashingizni, JK 168-moddasi 3-qismi bilan jinoyat ishi qo'zg'atishingizni hamda pullarimni qaytarilishini ta'minlashingizni.

Ilova: Bankdan ko'chirma, yozishmalar skrinshotlari.

Ariza beruvchi: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'iib-03',
    title: 'Jamoat tartibini buzish va tungi osoyishtalikni buzayotgan shaxslar ustidan ariza',
    category: 'ichki-ishlar',
    categoryName: 'Ichki ishlar organlariga murojaatlar',
    description: 'Ko\'p qavatli uylarda tungi vaqtda (soat 23:00 dan 06:00 gacha) shovqin solayotgan, janjal ko\'tarayotgan qo\'shnilar ustidan chora ko\'rish arizasi.',
    keywords: ['shovqin', 'osoyishtalikni buzish', 'MJtK 192', 'qo\'shnilar shovqini'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Ma\'muriy javobgarlik to\'g\'risidagi kodeksi',
      article: '192-modda',
      lexUrl: 'https://lex.uz/docs/97664',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetPoliceStation', label: 'Hududiy profilaktika inspektori', placeholder: 'Mirzo Ulug\'bek tumani "Oltintepa" MFY profilaktika inspektoriga', type: 'text' },
      { key: 'violatorApartment', label: 'Shovqin solayotgan xonadon yoki shaxs', placeholder: 'Shu uydagi 58-xonadonda yashovchi fuqarolar', type: 'text' },
    ],
    templateText: `{{targetPoliceStation}}ga

Ariza beruvchi: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

ARIZA
(Tungi osoyishtalikni buzganlik holati yuzasidan)

{{violatorApartment}} tomonidan tungi soat 23:00 dan keyin baland ovozda musiqa qo'yish, shovqin solish orqali ko'p qavatli uyda yashovchi aholining tinchligi buzilmoqda.

MJtK 192-moddasiga asosan ma'muriy bayonnoma rasmiylashtirib, chora ko'rishingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'iib-04',
    title: 'Yo\'qolgan pasport / ID-karta haqida ariza',
    category: 'ichki-ishlar',
    categoryName: 'Ichki ishlar organlariga murojaatlar',
    description: 'Fuqarolik pasporti yoki identifikatsiya ID-kartasini yo\'qotganlik yuzasidan yangi hujjat rasmiylashtirish uchun IIB migratsiya bo\'limiga ariza.',
    keywords: ['pasport yo\'qolishi', 'ID-karta yo\'qolishi', 'migratsiya', 'MvaFRB'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Vazirlar Mahkamasining Pasport tizimi to\'g\'risidagi qarorlari',
      article: 'Nizom qoidalari',
      lexUrl: 'https://lex.uz/docs/111460',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetPassportDept', label: 'Migratsiya va fuqarolikni rasmiylashtirish bo\'limi', placeholder: 'Yunusobod tumani IIO FMB MvaFRB boshlig\'iga', type: 'text' },
      { key: 'lostDocDetails', label: 'Yo\'qolgan hujjat seriyasi va yo\'qolish sharoiti', placeholder: 'ID-karta seriyasi AB 1234567, joriy oyda ehtiyotsizlik oqibatida yo\'qotilgan', type: 'textarea' },
    ],
    templateText: `{{targetPassportDept}}ga

Ariza beruvchi: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

ARIZA
(Pasport / ID-karta yo'qolganligi to'g'risida)

Menga tegishli bo'lgan shaxsni tasdiqlovchi hujjat yo'qolgan: {{lostDocDetails}}. Mazkur hujjatdan g'arazli maqsadlarda foydalanmasliklari uchun uni haqiqiy emas deb topishingizni hamda menga yangi ID-karta berishingizni so'rayman.

Ariza beruvchi: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'iib-05',
    title: 'Yo\'l-transport hodisasi (YTH) bo\'yicha surishtiruv o\'tkazish to\'g\'risida ariza',
    category: 'ichki-ishlar',
    categoryName: 'Ichki ishlar organlariga murojaatlar',
    description: 'YTH sodir bo\'lganda yoki aybdor haydovchi voqea joyidan qochib ketganda YHXB organlariga murojaat.',
    keywords: ['YTH', 'avariya', 'YHXB', 'surishtiruv', 'MJtK 133'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi MJtK 133-modda, YHQ',
      article: 'MJtK 133, 137-moddalar',
      lexUrl: 'https://lex.uz/docs/97664',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'trafficPoliceDept', label: 'YHXB bo\'limi', placeholder: 'Toshkent shahar IIBB YHXB boshlig\'iga', type: 'text' },
      { key: 'accidentPlaceTime', label: 'Avariya yuz bergan joy va mashinalar', placeholder: 'Navoiy va Labzak ko\'chalari kesishmasida Cobalt va Lacetti to\'qnashuvi', type: 'text' },
    ],
    templateText: `{{trafficPoliceDept}}ga

Ariza beruvchi: {{fullName}}
Telefon: {{phone}}

ARIZA
(YTH yuzasidan qonuniy chora ko'rish haqida)

{{accidentPlaceTime}}da sodir bo'lgan YTH bo'yicha surishtiruv o'tkazib, aybdor haydovchiga nisbatan qonuniy chora ko'rishingizni va sug'urta to'lovi uchun hujjatlarni taqdim etishingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'iib-06',
    title: 'Haqorat va o\'ldirish bilan tahdid qilish holati bo\'yicha ariza',
    category: 'ichki-ishlar',
    categoryName: 'Ichki ishlar organlariga murojaatlar',
    description: 'Hayotga yoki sog\'liqqa tajovuz qilish, o\'ldirish bilan tahdid qilingan holatlarda shaxsiy xavfsizlikni ta\'minlash arizasi.',
    keywords: ['o\'ldirish bilan tahdid', 'JK 112', 'xavfsizlik', 'IIB'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Jinoyat kodeksi',
      article: '112-modda',
      lexUrl: 'https://lex.uz/docs/111460',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetPolice', label: 'Tuman IIB boshlig\'iga', placeholder: 'Chilonzor tumani IIO FMB boshlig\'iga', type: 'text' },
      { key: 'threatenerPerson', label: 'Tahdid qiluvchi shaxs F.I.Sh.', placeholder: 'Ergashev Anvar', type: 'text' },
      { key: 'threatWords', label: 'Tahdid so\'zlari va holati', placeholder: 'Meni va oilamni jismoniy yo\'q qilish bilan og\'zaki va xabarlar orqali tahdid qilmoqda', type: 'textarea' },
    ],
    templateText: `{{targetPolice}}ga

Ariza beruvchi: {{fullName}}
Telefon: {{phone}}

ARIZA
(Tahdid qilish holati yuzasidan)

Fuqaro {{threatenerPerson}} tomonidan: {{threatWords}}. O'zbekiston Respublikasi JKning 112-moddasiga asosan jinoiy javobgarlikka tortishingizni va xavfsizligimni ta'minlashingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'iib-07',
    title: 'Yo\'qolgan yaqin qarindoshni qidirish to\'g\'risida IIBga ariza',
    category: 'ichki-ishlar',
    categoryName: 'Ichki ishlar organlariga murojaatlar',
    description: 'Uydan chiqib ketib qaytib kelmagan shaxsni tezkor-qidiruv choralari orqali topish arizasi.',
    keywords: ['shaxsni qidirish', 'yo\'qolgan shaxs', 'tezkor qidiruv', 'IIB'],
    legalBasis: {
      lawName: '"Tezkor-qidiruv faoliyati to\'g\'risida"gi Qonun',
      article: 'Qonun normalari',
      lexUrl: 'https://lex.uz/docs/111460',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetPolice', label: 'IIB organi', placeholder: 'Olmazor tumani IIO FMB boshlig\'iga', type: 'text' },
      { key: 'missingRelativeInfo', label: 'Yo\'qolgan shaxsning F.I.Sh., yoshi va belgilari', placeholder: '1985-yilda tug\'ilgan, bo\'yi 175 sm, egnida qora kurtka bo\'lgan', type: 'textarea' },
    ],
    templateText: `{{targetPolice}}ga

Ariza beruvchi: {{fullName}}
Telefon: {{phone}}

ARIZA
(Shaxsni qidirib topish haqida)

Yaqin qarindoshim uydan chiqib ketib, bedarak ketgan: {{missingRelativeInfo}}. Zudlik bilan qidiruv ishlarini boshlashingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'iib-08',
    title: 'O\'zboshimchalik bilan mulkni egallab olish holati bo\'yicha ariza',
    category: 'ichki-ishlar',
    categoryName: 'Ichki ishlar organlariga murojaatlar',
    description: 'Xususiy yer uchastkasi yoki mulkini noqonuniy to\'sib olgan yoki kiritmayotgan shaxslar yuzasidan ariza.',
    keywords: ['o\'zboshimchalik', 'MJtK 200', 'mulkni egallash'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi MJtK 200-modda, JK 229-modda',
      article: 'MJtK 200, JK 229',
      lexUrl: 'https://lex.uz/docs/97664',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetPolice', label: 'IIB boshlig\'iga', placeholder: 'Zangiota tumani IIB boshlig\'iga', type: 'text' },
      { key: 'violatorParty', label: 'Huquqbuzar shaxs', placeholder: 'Qo\'shni Saidov M.', type: 'text' },
    ],
    templateText: `{{targetPolice}}ga

Ariza beruvchi: {{fullName}}
Telefon: {{phone}}

ARIZA
(O'zboshimchalik holati bo'yicha)

Menga tegishli mulkka nisbatan fuqaro {{violatorParty}} o'zboshimchalik harakatlarini sodir etmoqda. Qonuniy chora ko'rishingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },

  // MEHNAT HUQUQI
  {
    id: 'meh-01',
    title: 'Xodim tashabbusi bilan mehnat shartnomasini bekor qilish haqida ariza (O\'z xohishiga ko\'ra)',
    category: 'mehnat-huquqi',
    categoryName: 'Mehnat huquqi',
    description: 'Xodim o\'z ixtiyori bilan 14 kun (yoki kelishuvga ko\'ra) oldin ish beruvchini ogohlantirgan holda ishdan bo\'shash to\'g\'risida rasmiy arizasi.',
    keywords: ['o\'z xohishi bilan bo\'shash', 'mehnat kodeksi 160', 'ishdan bo\'shash', 'ariza'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi yangi Mehnat kodeksi',
      article: '160-modda',
      lexUrl: 'https://lex.uz/docs/6257288',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetEmployerDirector', label: 'Ish beruvchi rahbarining lavozimi va F.I.Sh.', placeholder: '"O\'zbekiston Temir Yo\'llari" AJ boshqaruv raisiga', type: 'text' },
      { key: 'employeePosition', label: 'Xodimning egallab turgan lavozimi va bo\'limi', placeholder: 'Moliya bo\'limi bosh mutaxassisi', type: 'text' },
      { key: 'resignationDate', label: 'Ishdan bo\'shash sanasi', placeholder: '2024-yil 30-aprel kunidan', type: 'text' },
    ],
    templateText: `{{targetEmployerDirector}}ga

{{employeePosition}}
{{fullName}}dan
Telefon: {{phone}}

ARIZA
(Mehnat shartnomasini bekor qilish to'g'risida)

O'zbekiston Respublikasi Mehnat kodeksining 160-moddasiga asosan, men bilan tuzilgan mehnat shartnomasini o'z xohishimga binoan {{resignationDate}}dan boshlab bekor qilishingizni so'rayman.

Mehnat daftarchamni topshirishingizni hamda tegishli barcha yakuniy hisob-kitob (foydalanilmagan ta'tillar kompensatsiyasi va ish haqi) pullarini to'lab berishingizni so'rayman.

Xodim: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'meh-02',
    title: 'Yillik asosiy mehnat ta\'tili berish to\'g\'risida ariza',
    category: 'mehnat-huquqi',
    categoryName: 'Mehnat huquqi',
    description: 'Xodimga qonunda belgilangan kamida 21 kalendar kundan iborat navbatdagi yillik mehnat ta\'tilini ajratish to\'g\'risida ariza.',
    keywords: ['mehnat ta\'tili', 'ta\'til arizasi', 'MK 216', 'yillik ta\'til'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi yangi Mehnat kodeksi',
      article: '216-224-moddalar',
      lexUrl: 'https://lex.uz/docs/6257288',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'employerDirector', label: 'Rahbar lavozimi va tashkilot nomi', placeholder: '"Orient Finans" MChJ bosh direktoriga', type: 'text' },
      { key: 'employeeJob', label: 'Xodim lavozimi', placeholder: 'Bosh hisobchi', type: 'text' },
      { key: 'vacationDays', label: 'Ta\'til kunlari soni va boshlanish sanasi', placeholder: '21 kalendar kun muddatga, 2024-yil 1-iyundan', type: 'text' },
    ],
    templateText: `{{employerDirector}}ga

{{employeeJob}}
{{fullName}}dan
Telefon: {{phone}}

ARIZA
(Yillik mehnat ta'tili berish to'g'risida)

O'zbekiston Respublikasi yangi Mehnat kodeksining 216-224-moddalariga asosan, menga ish davrim uchun {{vacationDays}}dan boshlab yillik asosiy mehnat ta'tili ajratishingizni hamda ta'til pulini to'lab berishingizni so'rayman.

Xodim: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'meh-03',
    title: 'Noqonuniy ishdan bo\'shatilgan xodimni ishga tiklash haqida da\'vo arizasi',
    category: 'mehnat-huquqi',
    categoryName: 'Mehnat huquqi',
    description: 'Ish beruvchi tomonidan qonun talablari buzilgan holda ishdan bo\'shatilgan xodimni avvalgi lavozimiga tiklash va majburiy progul uchun ish haqini undirish.',
    keywords: ['ishga tiklash', 'noqonuniy ishdan bo\'shatish', 'MK 568', 'majburiy progul'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Mehnat kodeksi',
      article: '565-569-moddalar',
      lexUrl: 'https://lex.uz/docs/6257288',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCivilCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Mirzo Ulug\'bek tumanlararo sudiga', type: 'text' },
      { key: 'employerDefendant', label: 'Javobgar ish beruvchi tashkilot nomi', placeholder: '"Toshkent Agro Xolding" MChJ', type: 'text' },
      { key: 'dismissalOrderDetails', label: 'Ishdan bo\'shatish buyrug\'i sanasi va asosi', placeholder: '2024-yil 1-martdagi № 14-k sonli buyruq bilan MK 161-moddasi 2-qismi bo\'yicha', type: 'text' },
      { key: 'illegalityGrounds', label: 'Buyruqning noqonuniy ekanligi sabablari', placeholder: 'Hech qanday ogohlantirish berilmagan, kasaba uyushmasi roziligi olinmagan, shtat qisqartirilmagan', type: 'textarea' },
    ],
    templateText: `{{targetCivilCourt}}ga

Da'vogar: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

Javobgar: {{employerDefendant}}

DA'VO ARIZASI
(Ishga tiklash va majburiy progul davri uchun ish haqini undirish to'g'risida)

Men javobgar tashkilotda ishlab kelayotgan edim. {{dismissalOrderDetails}} bilan men bilan tuzilgan mehnat shartnomasi g'ayriqonuniy ravishda bekor qilindi.

Mazkur buyruq noqonuniy hisoblanadi: {{illegalityGrounds}}.

O'zbekiston Respublikasi Mehnat kodeksining 568-moddasiga ko'ra, mehnat shartnomasi qonunga xilof ravishda bekor qilingan xodim avvalgi ishiga tiklanishi lozim. Shuningdek xodimga majburiy progul vaqti uchun haq to'lanadi.

SO'RAYMAN:

1. Ish beruvchining men bilan mehnat shartnomasini bekor qilish haqidagi buyrug'ini noqonuniy deb topib, bekor qilishingizni;
2. Meni avvalgi egallab turgan lavozimimga ishga tiklashingizni;
3. Ish beruvchidan majburiy progul kunlari uchun o'rtacha oylik ish haqimni va yetkazilgan ma'naviy zararni undirishingizni.

Ilovalar: Buyruq nusxasi, mehnat daftarchasi, mehnat shartnomasi.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'meh-04',
    title: 'Bola parvarishlash ta\'tili (3 yoshgacha) berish to\'g\'risida ariza',
    category: 'mehnat-huquqi',
    categoryName: 'Mehnat huquqi',
    description: 'Farzandi 3 yoshga to\'lgunga qadar xodimga ish o\'rni saqlangan holda bola parvarishi ta\'tili ajratish.',
    keywords: ['bola parvarishi', 'dekret', 'MK 405', '3 yoshgacha ta\'til'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Mehnat kodeksi',
      article: '405-modda',
      lexUrl: 'https://lex.uz/docs/6257288',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'employerHead', label: 'Tashkilot rahbari', placeholder: '15-sonli maktab direktori nomiga', type: 'text' },
      { key: 'childBirthDetails', label: 'Bolaning ismi va tug\'ilgan sanasi', placeholder: 'Farzandim Aliyeva Oysha, 10.01.2024 yilda tug\'ilgan', type: 'text' },
    ],
    templateText: `{{employerHead}}ga

{{fullName}}dan
Telefon: {{phone}}

ARIZA
(Bola parvarishlash ta'tili berish to'g'risida)

MK 405-moddasiga asosan menga {{childBirthDetails}} 3 yoshga to'lguniga qadar ish o'rnimni (lavozimimni) saqlagan holda bolani parvarishlash ta'tili berishingizni so'rayman.

Ilova: Bolaning tug'ilganlik haqidagi guvohnomasi nusxasi.

Xodim: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'meh-05',
    title: 'Ish haqini to\'lab berish to\'g\'risida ish beruvchiga talabnoma',
    category: 'mehnat-huquqi',
    categoryName: 'Mehnat huquqi',
    description: 'Ishdan bo\'shaganda yoki oylik hisob-kitoblar kechiktirilganda sudgacha hal qilish uchun rasmiy yozma talabnoma.',
    keywords: ['talabnoma', 'ish haqi talabi', 'MK 333', 'kompensatsiya'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Mehnat kodeksi',
      article: '253, 333-moddalar',
      lexUrl: 'https://lex.uz/docs/6257288',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'companyHead', label: 'Ish beruvchi korxona rahbari', placeholder: '"Grand Stroy" MChJ bosh direktoriga', type: 'text' },
      { key: 'salaryDebtAmount', label: 'To\'lanmagan qarzdorlik summasi', placeholder: '12 800 000 so\'m', type: 'text' },
    ],
    templateText: `{{companyHead}}ga

Xodim: {{fullName}}
Telefon: {{phone}}

TALABNOMA
(Oylik ish haqini to'lash to'g'risida)

Menga to'lanishi lozim bo'lgan {{salaryDebtAmount}} miqdoridagi ish haqi asossiz ravishda to'lanmayapti. MK 333-moddasiga binoan ushbu summani foizlari bilan 3 kun muddatda to'lab berishingizni talab qilaman, aks holda sudga da'vo arizasi kiritiladi.

Xodim: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'meh-06',
    title: 'Ish haqini saqlamagan holda ta\'til (o\'z hisobidan ta\'til) berish haqida ariza',
    category: 'mehnat-huquqi',
    categoryName: 'Mehnat huquqi',
    description: 'Oilaviy sharoit yoki boshqa uzrli sabablar yuzasidan oylik saqlanmagan holda vaqtincha ta\'til olish.',
    keywords: ['o\'z hisobidan ta\'til', 'MK 241', 'ish haqi saqlanmagan'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Mehnat kodeksi',
      article: '241-243-moddalar',
      lexUrl: 'https://lex.uz/docs/6257288',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'employerHead', label: 'Tashkilot rahbari', placeholder: '"Milliy Bank" departament boshlig\'iga', type: 'text' },
      { key: 'unpaidDays', label: 'So\'ralayotgan ta\'til muddati', placeholder: '5 kalendar kun muddatga (oilaviy sharoitim tufayli)', type: 'text' },
    ],
    templateText: `{{employerHead}}ga

{{fullName}}dan
Telefon: {{phone}}

ARIZA
(Ish haqi saqlanmaydigan ta'til berish haqida)

MK 241-moddasiga asosan menga oilaviy sharoitim tufayli {{unpaidDays}} muddatga ish haqi saqlanmagan ta'til berishingizni so'rayman.

Xodim: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'meh-07',
    title: 'Homiladorlik va tug\'ruq ta\'tili berish to\'g\'risida ariza',
    category: 'mehnat-huquqi',
    categoryName: 'Mehnat huquqi',
    description: 'Tibbiyot muassasasi bergan mehnatga layoqatsizlik varaqasi asosida 126 kunlik ta\'til va davlat nafaqasini to\'lash.',
    keywords: ['homiladorlik ta\'tili', 'dekret arizasi', 'MK 404', 'bolnichniy'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Mehnat kodeksi',
      article: '404-modda',
      lexUrl: 'https://lex.uz/docs/6257288',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'employerHead', label: 'Tashkilot rahbari', placeholder: 'Klinika bosh shifokoriga', type: 'text' },
      { key: 'sickLeaveNumber', label: 'Mehnatga layoqatsizlik varaqasi raqami va sanasi', placeholder: '№ 445521-sonli varaqaga binoan', type: 'text' },
    ],
    templateText: `{{employerHead}}ga

{{fullName}}dan
Telefon: {{phone}}

ARIZA
(Homiladorlik va tug'ruq ta'tili haqida)

{{sickLeaveNumber}} asosida MK 404-moddasiga muvofiq menga homiladorlik va tug'ruq ta'tili berishingizni hamda qonunda belgilangan davlat ijtimoiy sug'urta nafaqasini to'lashingizni so'rayman.

Ilova: Mehnatga layoqatsizlik varaqasi (asl nusxasi).

Xodim: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'meh-08',
    title: 'Mehnat intizomiy jazosini muddatidan oldin olib tashlash haqida iltimosnoma',
    category: 'mehnat-huquqi',
    categoryName: 'Mehnat huquqi',
    description: 'Hayfsan yoki jarima intizomiy jazosi berilgan xodimning jazosini yaxshi xizmatlari uchun 1 yil o\'tmasdan olib tashlash.',
    keywords: ['hayfsanni olish', 'intizomiy jazo', 'MK 315'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Mehnat kodeksi',
      article: '315-modda',
      lexUrl: 'https://lex.uz/docs/6257288',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'employerHead', label: 'Tashkilot rahbari', placeholder: 'Kompaniya bosh direktoriga', type: 'text' },
      { key: 'penaltyDetails', label: 'Berilgan jazo buyrug\'i', placeholder: '2023-yil 10-noyabrdagi 45-sonli hayfsan e\'lon qilish buyrug\'i', type: 'text' },
    ],
    templateText: `{{employerHead}}ga

{{fullName}}dan

ILTIMOSNOMA
(Intizomiy jazoni olib tashlash haqida)

{{penaltyDetails}} bilan berilgan intizomiy jazoni MK 315-moddasiga asosan muddatidan oldin olib tashlashingizni so'rayman.

Xodim: _______________ / {{fullName}}
Sana: {{currentDate}}`
  }
];
