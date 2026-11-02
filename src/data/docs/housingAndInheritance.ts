import { LegalDocument } from '../../types';
import { COMMON_PERSONAL_FIELDS } from '../commonFields';

export const HOUSING_AND_INHERITANCE_DOCS: LegalDocument[] = [
  // UY-JOY HUQUQI
  {
    id: 'uy-01',
    title: 'Uy-joyga kiritish va yashash huquqini belgilash haqida da\'vo arizasi',
    category: 'uy-joy-huquqi',
    categoryName: 'Uy-joy huquqi',
    description: 'Nikoh bekor qilingandan so\'ng yoki oilaviy nizo oqibatida qonuniy ro\'yxatda turgan uyiga kiritilmayotgan er/xotin yoki oila a\'zolarining uyga kiritish bo\'yicha da\'vosi.',
    keywords: ['uyga kiritish', 'yashash huquqi', 'uy-joy kodeksi 32', 'propiska'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Uy-joy kodeksi',
      article: '32-modda',
      lexUrl: 'https://lex.uz/docs/106136',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCivilCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Yunusobod tumanlararo sudiga', type: 'text' },
      { key: 'homeownerDefendant', label: 'Javobgar (uy egasi / sobiq er/qaynota) F.I.Sh.', placeholder: 'Karimov Anvar Saidovich', type: 'text' },
      { key: 'homeAddress', label: 'Nizoli turar-joy manzili', placeholder: 'Toshkent shahri, Yunusobod tumani, 11-mavze, 15-uy', type: 'text' },
      { key: 'lockoutCircumstances', label: 'Uyga kiritmaslik va eshik qulflarini almashtirish holatlari', placeholder: 'Javobgar eshik qulflarini almashtirib, mening va bolamning shaxsiy buyumlarini bermay, uyga kiritishdan mutlaqo bosh tortmoqda', type: 'textarea' },
    ],
    templateText: `{{targetCivilCourt}}ga

Da'vogar: {{fullName}}
Pasport/ID: {{passport}}
Manzil: {{address}}
Telefon: {{phone}}

Javobgar: {{homeownerDefendant}}
Manzil: {{homeAddress}}

DA'VO ARIZASI
(Uy-joyga kiritish to'g'risida)

Men {{homeAddress}} manzilida doimiy ro'yxatdan o'tganman va mazkur xonadonda uzoq yillardan beri yashab kelganman.

Biroq javobgar {{homeownerDefendant}} asossiz ravishda: {{lockoutCircumstances}}. Mening boshqa yashash uchun uy-joyim mavjud emas.

O'zbekiston Respublikasi Uy-joy kodeksining 32-moddasiga asosan, mulkdorning oila a'zolari, shuningdek ular bilan doimiy yashayotgan boshqa fuqarolar uy-joydan foydalanishga to'la huquqlidirlar. Ular o'rtasida foydalanish huquqi yuzasidan kelib chiqqan nizolar sud tartibida hal qilinadi.

SO'RAYMAN:

1. Meni — {{fullName}}ni (va voyaga yetmagan farzandimni) {{homeAddress}} manzilidagi uy-joyga majburiy tartibda kiritishingizni;
2. Javobgarga menga xonadon kalitlaridan bir nusxasini berish hamda to'sqinlik qilmaslik majburiyatini yuklashingizni.

Ilovalar:
1. Doimiy ro'yxatda (propiskada) turganlik haqida ma'lumotnoma.
2. Mahalla dalolatnomasi.
3. Davlat boji to'lovi.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'uy-02',
    title: 'Turar-joydan foydalanish huquqini yo\'qotgan deb topish haqida da\'vo arizasi (Ro\'yxatdan chiqarish)',
    category: 'uy-joy-huquqi',
    categoryName: 'Uy-joy huquqi',
    description: 'Xonadonda 6 oydan ortiq uzrsiz sabablarga ko\'ra yashamayotgan, kommunal to\'lovlarni to\'lamayotgan shaxsni sud orqali ro\'yxatdan chiqarish.',
    keywords: ['ro\'yxatdan chiqarish', 'foydalanish huquqini yo\'qotish', 'propiskadan chiqarish', 'UJK 52'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Uy-joy kodeksi',
      article: '52-modda',
      lexUrl: 'https://lex.uz/docs/106136',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCivilCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Chilonzor tumanlararo sudiga', type: 'text' },
      { key: 'registeredDefendant', label: 'Javobgar (ro\'yxatda turgan shaxs) F.I.Sh.', placeholder: 'Sultonov Bekzod', type: 'text' },
      { key: 'housingAddress', label: 'Mulk manzili', placeholder: 'Toshkent sh., Chilonzor tumani, 5-mavze, 22-uy', type: 'text' },
      { key: 'absenceDuration', label: 'Yashamayotgan davr va sabab', placeholder: 'Oxirgi 3 yildan buyon xonadonda yashamaydi, buyumlari yo\'q, qayerdaligi noma\'lum', type: 'textarea' },
    ],
    templateText: `{{targetCivilCourt}}ga

Da'vogar: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

Javobgar: {{registeredDefendant}}

DA'VO ARIZASI
(Turar-joydan foydalanish huquqini yo'qotgan deb topish to'g'risida)

Menga tegishli {{housingAddress}} manzilidagi xonadonda javobgar {{registeredDefendant}} rasmiy ro'yxatda turadi. Biroq javobgar: {{absenceDuration}}.

Uy-joy kodeksining 52-moddasiga ko'ra, turar joydan foydalanish huquqi fuqaro unda uzrsiz sabablarga ko'ra olti oydan ortiq yashamasa yo'qotilishi mumkin.

SO'RAYMAN:

Javobgar {{registeredDefendant}}ni {{housingAddress}}dagi turar-joydan foydalanish huquqini yo'qotgan deb topishingizni.

Ilovalar: Kadastr hujjati, Mahalla dalolatnomasi, Davlat boji.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'uy-03',
    title: 'Qo\'shni tomonidan xonadonni suv bosishi oqibatida yetkazilgan zararni undirish haqida da\'vo',
    category: 'uy-joy-huquqi',
    categoryName: 'Uy-joy huquqi',
    description: 'Yuqori qavatdagi qo\'shnining quvur yorilishi yoki beparvoligi tufayli ta\'mir va buyumlarga yetkazilgan moddiy zararni sud orqali undirish.',
    keywords: ['suv bosishi', 'qo\'shni zarari', 'dalolatnoma', 'FK 985', 'ta\'mir xarajati'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '985, 14-moddalar',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCivilCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Mirzo Ulug\'bek sudiga', type: 'text' },
      { key: 'upstairsNeighbor', label: 'Yuqori qavatdagi javobgar F.I.Sh.', placeholder: 'Tohirov Jamshid', type: 'text' },
      { key: 'floodingDate', label: 'Suv toshgan sana', placeholder: '2024-yil 12-fevral kuni', type: 'date' },
      { key: 'damageSumCalculated', label: 'Baholangan zarar summasi', placeholder: '22 000 000 so\'m', type: 'text' },
    ],
    templateText: `{{targetCivilCourt}}ga

Da'vogar: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

Javobgar: {{upstairsNeighbor}}
Da'vo bahosi: {{damageSumCalculated}}

DA'VO ARIZASI
(Xonadonga yetkazilgan moddiy zararni undirish to'g'risida)

{{floodingDate}}da yuqori qavatda yashovchi javobgar {{upstairsNeighbor}}ning xonadonidan suv oqib, mening xonadonimni suv bosdi. BSK (boshqaruv kompaniyasi) ishtirokida dalolatnoma tuzilib, zarar {{damageSumCalculated}} miqdorida baholandi. Javobgar zararni qoplashdan bosh tortmoqda.

FK 985-moddasiga asosan zararni to'liq undirishingizni so'rayman.

Ilovalar: BSK dalolatnomasi, baholash hisoboti, fotosuratlar.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'uy-04',
    title: 'Umumiy birgalikdagi uy-joydan natura holida ulush ajratib berish haqida da\'vo',
    category: 'uy-joy-huquqi',
    categoryName: 'Uy-joy huquqi',
    description: 'Teng mulkdorlar o\'rtasida hovli yoki uyni alohida xonalar va kirish yo\'llariga ajratib taqsimlash.',
    keywords: ['ulush ajratish', 'uyni bo\'lish', 'FK 223'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '223-modda',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Samarqand tumanlararo sudiga', type: 'text' },
      { key: 'coOwnerDefendant', label: 'Boshqa mulkdor F.I.Sh.', placeholder: 'Rahimov Ulug\'bek', type: 'text' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Manzil: {{address}}

DA'VO ARIZASI
(Uy-joydan ulush ajratish haqida)

FK 223-moddasiga asosan umumiy ulushli mulkdagi uy-joydan mening tegishli ulushimni natura shaklida ajratib berishingizni va zarurat bo'lsa sud qurilish-texnikaviy ekspertizasi tayinlashingizni so'rayman.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'uy-05',
    title: 'Kommunal to\'lovlar bo\'yicha asossiz qarzdorlikni hisobdan chiqarish to\'g\'risida ariza',
    category: 'uy-joy-huquqi',
    categoryName: 'Uy-joy huquqi',
    description: 'Gaz, elektr yoki issiq suv korxonalari tomonidan asossiz yozilgan qarzni qayta hisob-kitob qilish talabi.',
    keywords: ['kommunal qarz', 'qayta hisoblash', 'MIB', 'hisoblagich'],
    legalBasis: {
      lawName: '"Iste\'molchilarning huquqlarini himoya qilish to\'g\'risida"gi Qonun',
      article: '4, 19-moddalar',
      lexUrl: 'https://lex.uz/docs/440',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'utilityProvider', label: 'Kommunal korxona nomi', placeholder: '"Hududgaz Toshkent" shahar filiali rahbariga', type: 'text' },
      { key: 'disputedDebtSum', label: 'Asossiz qarzdorlik summasi', placeholder: '3 400 000 so\'m', type: 'text' },
    ],
    templateText: `{{utilityProvider}}ga

Iste'molchi: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

ARIZA
(Asossiz hisoblangan qarzni bekor qilish haqida)

Mening hisobimga ko'rsatilgan {{disputedDebtSum}} miqdoridagi qarzdorlik asossiz yozilgan. Hisoblagich ko'rsatkichlarim to'liq to'langan. Qonun talablariga muvofiq qayta hisob-kitob qilib, noto'g'ri qarzni bekor qilishingizni so'rayman.

Ilovalar: Oxirgi to'lov cheklari va hisoblagich fotosurati.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'uy-06',
    title: 'Noqonuniy qurilmani buzdirish to\'g\'risida da\'vo arizasi',
    category: 'uy-joy-huquqi',
    categoryName: 'Uy-joy huquqi',
    description: 'Qo\'shnining ruxsatsiz, qizil chiziqni buzib yoki yorug\'likni to\'sib qurgan noqonuniy binosini buzish to\'g\'risida sudga da\'vo.',
    keywords: ['noqonuniy qurilma', 'qurilmani buzish', 'FK 212'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '212-modda',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Bo\'stonliq sudiga', type: 'text' },
      { key: 'illegalBuilder', label: 'Quruvchi javobgar F.I.Sh.', placeholder: 'Qodirov Aziz', type: 'text' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Telefon: {{phone}}

Javobgar: {{illegalBuilder}}

DA'VO ARIZASI
(Noqonuniy qurilmani buzdirish haqida)

Javobgar shaharsozlik normalarini buzib, noqonuniy devor/qurilma qurib olgan. FK 212-moddasiga binoan noqonuniy qurilmani javobgar hisobidan majburiy buzdirishingizni so'rayman.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'uy-07',
    title: 'Xonadon ijarachisini ijaradan chiqarish to\'g\'risida da\'vo arizasi',
    category: 'uy-joy-huquqi',
    categoryName: 'Uy-joy huquqi',
    description: 'Shartnoma muddati tugagan bo\'lsa-da yoki to\'lovlarni to\'lamay kvartirani bo\'shatmayotgan ijarachini majburiy chiqarish.',
    keywords: ['ijarachini chiqarish', 'ijara nizosi', 'FK 615'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '600, 615-moddalar',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Shayxontohur sudiga', type: 'text' },
      { key: 'tenantName', label: 'Ijarachi javobgar F.I.Sh.', placeholder: 'Karimberdiyev Shuhrat', type: 'text' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Telefon: {{phone}}

Javobgar: {{tenantName}}

DA'VO ARIZASI
(Ijarachini xonadondan majburiy chiqarish haqida)

Ijara shartnomasi muddati tugagan bo'lishiga qaramay, javobgar uyimni bo'shatishdan bosh tortmoqda. FK 615-moddasiga asosan uni majburiy chiqarishingizni so'rayman.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'uy-08',
    title: 'Uy-joy oldi-sotdi dastlabki shartnomasini bekor qilish va behni (zakalat) qaytarish haqida da\'vo',
    category: 'uy-joy-huquqi',
    categoryName: 'Uy-joy huquqi',
    description: 'Sotuvchi uyni boshqaga sotib yuborganida yoki kelishuvni buzganida to\'langan zakalat pulini ikki baravar miqdorida qaytarish.',
    keywords: ['zakalat', 'beh', 'oldi sotdi bekor qilish', 'FK 312'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '311, 312-moddalar',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Mirobod sudiga', type: 'text' },
      { key: 'sellerName', label: 'Sotuvchi F.I.Sh.', placeholder: 'Alimov Sanjar', type: 'text' },
      { key: 'depositAmount', label: 'Berilgan zakalat summasi', placeholder: '5 000 AQSh dollari', type: 'text' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Telefon: {{phone}}

Javobgar: {{sellerName}}

DA'VO ARIZASI
(Zakalat summasini ikki baravar undirish haqida)

Javobgar shartnomani buzganligi sababli FK 312-moddasiga asosan berilgan zakalat summasi bo'yicha javobgardan ikki baravar miqdorda to'lov undirishingizni so'rayman.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },

  // MEROS
  {
    id: 'mer-01',
    title: 'Merosni qabul qilib olish to\'g\'risida notariusga ariza',
    category: 'meros',
    categoryName: 'Meros',
    description: 'Meros qoldiruvchi vafot etganidan keyin 6 oylik muddat ichida notarial idoraga merosni qabul qilganlik to\'g\'risida rasmiy murojaat.',
    keywords: ['merosni qabul qilish', 'notarius meros', 'FK 1146', 'meros guvohnomasi'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi va "Notariat to\'g\'risida"gi Qonun',
      article: 'FK 1146-1148-moddalar',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetNotaryOffice', label: 'Davlat notarial idorasi / xususiy notarius nomi', placeholder: 'Toshkent shahar Mirzo Ulug\'bek tumani xususiy notariusi nomiga', type: 'text' },
      { key: 'deceasedFullName', label: 'Meros qoldiruvchi (marhum) F.I.Sh.', placeholder: 'Valiyev Hasan Karimovich', type: 'text' },
      { key: 'dateOfDeath', label: 'Vafot etgan sana', placeholder: '2024-yil 10-yanvar', type: 'date' },
      { key: 'kinshipStatus', label: 'Merosxo\'rning qarindoshlik darajasi', placeholder: 'Farzandi (o\'g\'li) / Turmush o\'rtog\'i', type: 'text' },
      { key: 'heritageProperty', label: 'Meros mulki ro\'yxati', placeholder: 'Toshkent sh., Mirzo Ulug\'bek tumani, 4-mavze, 10-uy manzilidagi xonadon va avtotransport vositasi', type: 'textarea' },
    ],
    templateText: `{{targetNotaryOffice}}ga

Merosxo'r: {{fullName}}
Pasport/ID: {{passport}}
Manzil: {{address}}
Telefon: {{phone}}

ARIZA
(Merosni qabul qilish to'g'risida)

{{dateOfDeath}}da mening {{kinshipStatus}} bo'lgan {{deceasedFullName}} vafot etdi. Marhumning o'limidan so'ng quyidagi meros mulki qoldi:

{{heritageProperty}}.

Men O'zbekiston Respublikasi Fuqarolik kodeksining 1146-1148-moddalariga muvofiq marhumdan qolgan barcha meros mol-mulkini qabul qilib olganimni ma'lum qilaman hamda qonunda belgilangan muddat o'tgach menga Merosga bo'lgan huquq to'g'risida guvohnoma berishingizni so'rayman.

Boshqa merosxo'rlar: Marhumning boshqa birinchi navbatdagi merosxo'rlari mavjud emas / mavjud.

Merosxo'r: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'mer-02',
    title: 'Merosni qabul qilish muddatini tiklash to\'g\'risida da\'vo arizasi',
    category: 'meros',
    categoryName: 'Meros',
    description: 'Qonunda belgilangan 6 oylik muddatni uzrli sabablarga ko\'ra (og\'ir kasallik, xorijda bo\'lish) o\'tkazib yuborgan merosxo\'rning huquqini sud orqali tiklash.',
    keywords: ['meros muddatini tiklash', 'o\'tkazib yuborilgan muddat', 'FK 1147'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '1147-modda',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCivilCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Farg\'ona tumanlararo sudiga', type: 'text' },
      { key: 'deceasedName', label: 'Marhum meros qoldiruvchi', placeholder: 'Akromov Botirjon', type: 'text' },
      { key: 'excuseReasonForDelay', label: 'Muddat o\'tishining uzrli sababi', placeholder: 'Meros qoldiruvchining o\'limi haqida xabardor bo\'lmaganman, uzoq muddat chet elda davolanishda edim', type: 'textarea' },
    ],
    templateText: `{{targetCivilCourt}}ga

Da'vogar: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

DA'VO ARIZASI
(Merosni qabul qilish muddatini tiklash to'g'risida)

Marhum {{deceasedName}}ning vafotidan so'ng qolgan merosni qabul qilish uchun 6 oylik muddatni uzrli sabablarga ko'ra o'tkazib yubordim: {{excuseReasonForDelay}}.

O'zbekiston Respublikasi FK 1147-moddasiga ko'ra, merosxo'r muddatni uzrli sabablarga ko'ra o'tkazib yuborgan bo'lsa, sud muddatni tiklashi mumkin.

SO'RAYMAN:

Merosni qabul qilish muddatini tiklab, meni merosni qabul qilgan deb e'tirof etishingizni.

Ilovalar: O'lim haqida guvohnoma, qarindoshlik hujjati, uzrli sababni tasdiqlovchi hujjatlar.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'mer-03',
    title: 'Merosdan voz kechish to\'g\'risida notariusga ariza',
    category: 'meros',
    categoryName: 'Meros',
    description: 'Merosxo\'r o\'z ulushidan boshqa aniq merosxo\'r foydasiga yoki shartsiz voz kechishi to\'g\'risida notarius nomiga rasmiy ariza.',
    keywords: ['merosdan voz kechish', 'notarius', 'FK 1153', 'meros ulushi'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '1153-modda',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'notaryOffice', label: 'Notarial idora', placeholder: 'Toshkent shahar Shayxontohur tumani xususiy notariusiga', type: 'text' },
      { key: 'deceasedPerson', label: 'Marhum F.I.Sh.', placeholder: 'Rahimov Zokirjon', type: 'text' },
      { key: 'favoredHeir', label: 'Foydasiga voz kechilayotgan shaxs (agar bo\'lsa)', placeholder: 'Onam Rahimova Fotima foydasiga', type: 'text' },
    ],
    templateText: `{{notaryOffice}}ga

Merosxo'r: {{fullName}}
Telefon: {{phone}}

ARIZA
(Merosdan voz kechish haqida)

Marhum {{deceasedPerson}}dan qolgan barcha meros mol-mulkidagi o'z ulushimdan FK 1153-moddasiga asosan {{favoredHeir}} butunlay va qaytarib olmaslik sharti bilan voz kechaman.

Merosxo'r: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'mer-04',
    title: 'Vasiyatnomani haqiqiy emas deb topish to\'g\'risida da\'vo arizasi',
    category: 'meros',
    categoryName: 'Meros',
    description: 'Meros qoldiruvchi ruhiy holati sababli o\'z harakatlariga javob bera olmagan vaqtda tuzilgan vasiyatnomani sud orqali bekor qilish.',
    keywords: ['vasiyatnoma bekor qilish', 'haqiqiy emas vasiyat', 'FK 1130'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '1130-modda',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Buxoro sudiga', type: 'text' },
      { key: 'favoredDefendantHeir', label: 'Vasiyat bo\'yicha javobgar merosxo\'r', placeholder: 'Shokirov Ilhom', type: 'text' },
      { key: 'invalidityGrounds', label: 'Vasiyatnomaning haqiqiy emasligi asoslari', placeholder: 'Marhum og\'ir insultdan so\'ng aqldan ozgan holatda edi, o\'z harakatini anglamasdi', type: 'textarea' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Telefon: {{phone}}

Javobgar: {{favoredDefendantHeir}}

DA'VO ARIZASI
(Vasiyatnomani haqiqiy emas deb topish to'g'risida)

{{invalidityGrounds}}. FK 1130-moddasiga asosan marhum nomidan tuzilgan vasiyatnomani haqiqiy emas deb topishingizni va qonun bo'yicha merosxo'rlik tartibini qo'llashingizni so'rayman.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'mer-05',
    title: 'Meros mulkini qonuniy merosxo\'rlar o\'rtasida bo\'lish to\'g\'risida da\'vo',
    category: 'meros',
    categoryName: 'Meros',
    description: 'Merosxo\'rlar merosga qolgan uy-joy yoki mashinani o\'zaro ixtiyoriy taqsimlay olmaganlarida sud orqali bo\'lish arizasi.',
    keywords: ['merosni bo\'lish', 'ulushli mulk', 'FK 1157'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '1157-modda',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Qarshi sudiga', type: 'text' },
      { key: 'otherHeirDefendant', label: 'Boshqa merosxo\'r(lar) F.I.Sh.', placeholder: 'Rustamov Sardor', type: 'text' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Telefon: {{phone}}

Javobgar: {{otherHeirDefendant}}

DA'VO ARIZASI
(Meros mulkini bo'lish to'g'risida)

Qonuniy merosxo'rlar sifatida qolgan meros mulkini o'zaro kelishuv yo'li bilan taqsimlay olmayapmiz. FK 1157-moddasiga muvofiq meros mulkini qonuniy ulushlarga mutanosib ravishda bo'lib berishingizni so'rayman.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'mer-06',
    title: 'Merosda majburiy ulush ajratib berish to\'g\'risida da\'vo arizasi',
    category: 'meros',
    categoryName: 'Meros',
    description: 'Vasiyatnomadan qat\'i nazar, voyaga yetmagan yoki mehnatga layoqatsiz merosxo\'rga tegishli majburiy 1/2 ulushni undirish.',
    keywords: ['majburiy ulush', 'meros huquqi', 'FK 1142'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '1142-modda',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Namangan sudiga', type: 'text' },
      { key: 'testamentaryHeir', label: 'Vasiyat bo\'yicha merosxo\'r', placeholder: 'Karimova Munira', type: 'text' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Telefon: {{phone}}

Javobgar: {{testamentaryHeir}}

DA'VO ARIZASI
(Merosda majburiy ulush ajratish to'g'risida)

Men mehnatga layoqatsiz (nogiron) bo'lib, FK 1142-moddasiga ko'ra vasiyatnoma mavjudligidan qat'i nazar menga qonun bo'yicha tegishi lozim bo'lgan ulushning kamida yarmi miqdorida majburiy ulush olish huquqiga egaman.

SO'RAYMAN:

Meros mulkidan menga majburiy ulush ajratib berishingizni.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'mer-07',
    title: 'Meros mulkini qo\'riqlash (muhofaza qilish) choralarini ko\'rish haqida notariusga ariza',
    category: 'meros',
    categoryName: 'Meros',
    description: 'Meros mulki talon-toroj qilinishining oldini olish uchun xonadonni muhrlash va xatlov o\'tkazish talabi.',
    keywords: ['merosni qo\'riqlash', 'xatlov', 'FK 1150', 'notarius'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '1150-modda',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'notaryOffice', label: 'Notarius', placeholder: 'Samarqand shahar 2-sonli davlat notarial idorasi notariusiga', type: 'text' },
      { key: 'threatDetails', label: 'Meros yo\'qolish xavfi', placeholder: 'Begona shaxslar xonadondan mol-mulklarni noqonuniy olib chiqib ketishga urinmoqda', type: 'text' },
    ],
    templateText: `{{notaryOffice}}ga

Merosxo'r: {{fullName}}
Telefon: {{phone}}

ARIZA
(Merosni muhofaza qilish haqida)

FK 1150-moddasiga asosan marhumdan qolgan mulkni xatlovdan o'tkazib, muhofaza qilish choralarini ko'rishingizni so'rayman.

Imzo: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'mer-08',
    title: 'Meros guvohnomasini bekor qilish to\'g\'risida da\'vo arizasi',
    category: 'meros',
    categoryName: 'Meros',
    description: 'Boshqa merosxo\'rlardan yashirincha qalbaki hujjat bilan olingan meros guvohnomasini sud orqali haqiqiy emas deb topish.',
    keywords: ['meros guvohnomasi bekor qilish', 'notarial guvohnoma', 'FK 1146'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Fuqarolik kodeksi',
      article: '1146-modda, Notariat qonuni',
      lexUrl: 'https://lex.uz/docs/111189',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Olmazor sudiga', type: 'text' },
      { key: 'unlawfulHeir', label: 'Guvohnomani olgan javobgar', placeholder: 'Nodirov Sanjar', type: 'text' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Telefon: {{phone}}

Javobgar: {{unlawfulHeir}}

DA'VO ARIZASI
(Meros guvohnomasini haqiqiy emas deb topish haqida)

Javobgar boshqa qonuniy merosxo'rlarni yashirgan holda meros guvohnomasi olgan. Mazkur guvohnomani bekor qilishingizni so'rayman.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  }
];
