import { LegalDocument } from '../../types';
import { COMMON_PERSONAL_FIELDS } from '../commonFields';

export const FAMILY_AND_DIVORCE_DOCS: LegalDocument[] = [
  // OILAVIY HUQUQ
  {
    id: 'oil-01',
    title: 'Farzandlikka olish to\'g\'risida sudga ariza',
    category: 'oilaviy-huquq',
    categoryName: 'Oilaviy huquq',
    description: 'Voyaga yetmagan bolani farzandlikka olish istagidagi shaxslar tomonidan fuqarolik ishlari bo\'yicha tumanlararo sudiga taqdim etiladigan rasmiy ariza.',
    keywords: ['farzandlikka olish', 'bola asrab olish', 'sud', 'oila kodeksi', 'bolalar huquqi'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Oila kodeksi',
      article: '151-167-moddalar, Fuqarolik protsessual kodeksining 298-304-moddalari',
      lexUrl: 'https://lex.uz/docs/104720',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Tegishli sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Mirzo Ulug\'bek tumanlararo sudiga', type: 'text' },
      { key: 'childFullName', label: 'Farzandlikka olinuvchi bolaning to\'liq F.I.Sh.', placeholder: 'Sobirov Jasur Bahodir o\'g\'li', type: 'text' },
      { key: 'childBirthDate', label: 'Bolaning tug\'ilgan sanasi', placeholder: '15.05.2021', type: 'date' },
      { key: 'childLocation', label: 'Hozirgi turar joyi / Bolalar uyi nomi', placeholder: 'Toshkent shahar 1-sonli Mehribonlik uyi', type: 'text' },
      { key: 'maritalStatus', label: 'Ariza beruvchilarning oilaviy ahvoli', placeholder: 'Qonuniy nikohda, 2018-yil 12-avgustda tuzilgan', type: 'text' },
      { key: 'livingConditions', label: 'Moddiy va maishiy sharoitlar tavsifi', placeholder: 'O\'z nomimizdagi 3 xonali xonadon, doimiy daromadga ega', type: 'textarea' },
    ],
    templateText: `{{targetCourt}}ga

Ariza beruvchi: {{fullName}}
Pasport/ID: {{passport}}
Manzil: {{address}}
Telefon: {{phone}}

Manfaatdor shaxs: Vasiylik va homiylik organi
Manzil: {{address}} bo'yicha tuman hokimligi

ARIZA
(Farzandlikka olish to'g'risida)

Biz, ariza beruvchilar {{fullName}} qonuniy nikohdan o'tib, {{maritalStatus}} yashab kelmoqdamiz. Birgalikdagi turmushimiz davomida farzandimiz yo'q.

Biz {{childBirthDate}} yilda tug'ilgan voyaga yetmagan {{childFullName}}ni o'z tarbiyamizga va qaramog'imizga olib, unga haqiqiy ota-onalik mehrini berish niyatidamiz. Bola hozirda {{childLocation}}da tarbiyalanmoqda.

Bizning sog'lig'imiz, moddiy ta'minotimiz va uy-joy sharoitimiz bolani to'laqonli tarbiyalash, o'qitish va voyaga yetkazishga to'liq imkon beradi. Xususan: {{livingConditions}}.

Biz O'zbekiston Respublikasi Oila kodeksining 151-167-moddalarida nazarda tutilgan farzandlikka oluvchi shaxslarga qo'yilgan barcha talablarga javob beramiz, ilgari sudlanmaganmiz va muomala layoqatimiz cheklanmagan.

Yuqoridagilarga ko'ra, O'zbekiston Respublikasi Oila kodeksining 151-167-moddalari hamda Fuqarolik protsessual kodeksining 298-304-moddalariga asosan,

SO'RAYMIZ:

1. {{childBirthDate}} yilda tug'ilgan voyaga yetmagan {{childFullName}}ni biz — {{fullName}} nomiga farzandlikka olishimizga ruxsat berishingizni;
2. Bolaning tug'ilganligi haqidagi dalolatnoma yozuviga tegishli o'zgartirishlar kiritishni fuqarolik holati dalolatnomalarini yozish (FHDYo) organiga yuklashingizni.

Ilova qilinadigan hujjatlar:
1. Nikoh to'g'risidagi guvohnoma nusxasi.
2. Turar joy va daromadlar to'g'risida ma'lumotnomalar.
3. Sog'liqni saqlash muassasasining tibbiy xulosalari.
4. Sudlanmaganlik to'g'risida ma'lumotnoma.
5. Vasiylik va homiylik organining xulosasi.
6. Davlat boji to'langanligi haqida kvitansiya.

Ariza beruvchi imzosi: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'oil-02',
    title: 'Ota-onalik huquqidan mahrum qilish haqida da\'vo arizasi',
    category: 'oilaviy-huquq',
    categoryName: 'Oilaviy huquq',
    description: 'Ota yoki onaning o\'z majburiyatlarini bajarmasligi, spirtli ichimliklarga ruju qo\'yishi yoki bolaga nisbatan shafqatsiz munosabati sababli sudga beriladigan da\'vo arizasi.',
    keywords: ['ota-onalik huquqi', 'huquqdan mahrum qilish', 'bola manfaati', 'oila sarmoyasi'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Oila kodeksi',
      article: '79-82-moddalar',
      lexUrl: 'https://lex.uz/docs/104720',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Shayxontohur tumanlararo sudiga', type: 'text' },
      { key: 'respondentName', label: 'Javobgar (ota/ona) F.I.Sh.', placeholder: 'Karimov Jasur Shavkatovich', type: 'text' },
      { key: 'respondentAddress', label: 'Javobgarning manzili', placeholder: 'Toshkent shahri, Shayxontohur tumani, 5-mavze', type: 'text' },
      { key: 'childName', label: 'Bola (bolalar) F.I.Sh. va tug\'ilgan sanasi', placeholder: 'Karimova Dilnoza Jasur qizi, 10.04.2016 yilda tug\'ilgan', type: 'text' },
      { key: 'violationDetails', label: 'Majburiyatlarni buzish holatlari va dalillar', placeholder: 'Javobgar 3 yildan beri bola tarbiyasi bilan shug\'ullanmaydi, moddiy yordam ko\'rsatmaydi, muntazam spirtli ichimlik iste\'mol qiladi', type: 'textarea' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Yashash manzili: {{address}}
Telefon: {{phone}}

Javobgar: {{respondentName}}
Yashash manzili: {{respondentAddress}}

Uchinchi shaxs: Tuman hokimligi huzuridagi Vasiylik va homiylik organi

DA'VO ARIZASI
(Ota-onalik huquqidan mahrum qilish to'g'risida)

Men va javobgar {{respondentName}} qonuniy nikohdan o'tganmiz. Birgalikdagi turmushimizdan farzandimiz {{childName}} dunyoga kelgan.

Biroq javobgar {{respondentName}} ota-onalik burchini bajarishdan qasddan bosh tortib kelmoqda. {{violationDetails}}.

O'zbekiston Respublikasi Oila kodeksining 79-moddasiga binoan, ota-ona ota-onalik majburiyatlarini bajarishdan bo'yin tovlasa, shu jumladan aliment to'lashdan bo'yin tovlasa, uzrsiz sabablarga ko'ra bolani tug'uruqxona yoki boshqa bolalar muassasasidan olishdan bosh tortsa, ota-onalik huquqini suiiste'mol qilsa, bolalarga nisbatan shafqatsiz muomalada bo'lsa, muttasil spirtli ichimliklar yoki giyohvandlik vositalarini iste'mol qilsa, ota-onalik huquqidan mahrum qilinishi mumkin.

Yuqoridagilarga asosan hamda Oila kodeksining 79-82-moddalariga tayangan holda,

SO'RAYMAN:

1. Javobgar {{respondentName}}ni {{childName}}ga nisbatan ota-onalik huquqidan mahrum qilishingizni;
2. Bolaning qaramog'imda qoldirilishini ta'minlashingizni;
3. Javobgardan bola ta'minoti uchun qonunda belgilangan tartibda aliment undirishni davom ettirishingizni.

Ilovalar:
1. Bolaning tug'ilganlik haqidagi guvohnomasi nusxasi.
2. Nikoh guvohnomasi yoki nikoh bekor qilinganligi to'g'risida guvohnoma.
3. Mahalla fuqarolar yig'inidan dalolatnoma va tavsifnoma.
4. Aliment qarzdorligi to'g'risida MIB ma'lumotnomasi.
5. Vasiylik va homiylik organi xulosasi.
6. Da'vo arizasi nusxasi va davlat boji to'lovi hujjati.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'oil-03',
    title: 'Bolaning yashash joyini belgilash haqida da\'vo arizasi',
    category: 'oilaviy-huquq',
    categoryName: 'Oilaviy huquq',
    description: 'Ota-ona alohida yashagan taqdirda voyaga yetmagan bolaning qaysi biri bilan yashashini sud orqali hal qilish arizasi.',
    keywords: ['bolaning yashash joyi', 'ota ona nizosi', 'oila kodeksi 73', 'sud da\'vo'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Oila kodeksi',
      article: '73, 75-moddalar',
      lexUrl: 'https://lex.uz/docs/104720',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Chilonzor tumanlararo sudiga', type: 'text' },
      { key: 'respondentName', label: 'Javobgar F.I.Sh.', placeholder: 'Ahmedov Farrux Odilovich', type: 'text' },
      { key: 'respondentAddress', label: 'Javobgar manzili', placeholder: 'Toshkent sh., Yunusobod tumani, 4-mavze', type: 'text' },
      { key: 'childInfo', label: 'Farzand(lar) to\'liq ismi va tug\'ilgan yili', placeholder: 'Ahmedova Nilufar Farrux qizi, 2019-yil', type: 'text' },
      { key: 'plaintiffConditions', label: 'Da\'vogarning moddiy va ma\'naviy imkoniyatlari', placeholder: 'Doimiy ish joyiga ega, shaxsiy uy-joy, bola bilan kuchli mehr-oqibat rishtalari mavjud', type: 'textarea' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

Javobgar: {{respondentName}}
Manzil: {{respondentAddress}}

Uchinchi shaxs: Vasiylik va homiylik organi

DA'VO ARIZASI
(Voyaga yetmagan bolaning yashash joyini belgilash to'g'risida)

Men va javobgar {{respondentName}} o'rtamizdagi oilaviy munosabatlar to'xtagan bo'lib, biz hozirda alohida-alohida yashamoqdamiz. O'rtamizda voyaga yetmagan farzandimiz {{childInfo}} bor.

Hozirgi vaqtda farzandimizning kim bilan birga yashashi borasida javobgar bilan o'zaro kelishuvga erisha olmayapmiz. 

Mening yashash sharoitim bolani to'liq ta'minlash, uning jismoniy, aqliy va ma'naviy rivojlanishi uchun barcha qulayliklarga ega. Xususan: {{plaintiffConditions}}. Bola yosh bo'lib, onasiga/otamga juda bog'langan.

Oila kodeksining 75-moddasiga ko'ra, ota-ona alohida yashaganda bolalarning yashash joyi ota-onaning kelishuviga binoan belgilanadi. Kelishuv bo'lmaganda nizo sud tomonidan bolaning manfaatlari va uning fikrini hisobga olgan holda hal qilinadi.

Yuqoridagilarga asosan,

SO'RAYMAN:

1. Voyaga yetmagan {{childInfo}}ning yashash joyini men — da'vogar {{fullName}}ning yashash manzili ({{address}}) bo'yicha belgilashingizni.
2. Vasiylik va homiylik organidan taraflarning turar joy va maishiy sharoitlarini tekshirish dalolatnomasini talab qilib olishingizni.

Ilovalar:
1. Bolaning tug'ilganlik haqidagi guvohnomasi.
2. Daromad va ish joyidan ma'lumotnoma.
3. Turar joy dalolatnomasi va mulk huquqi hujjati.
4. Davlat boji to'lovi kvitansiyasi.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'oil-04',
    title: 'Bolani tarbiyalash va u bilan ko\'rishib turish tartibini belgilash haqida da\'vo',
    category: 'oilaviy-huquq',
    categoryName: 'Oilaviy huquq',
    description: 'Alohida yashayotgan ota yoki onaning farzandi bilan haftalik ko\'rishish, muloqot qilish va ta\'tillarni birga o\'tkazish jadvalini sud orqali tasdiqlash.',
    keywords: ['bolani ko\'rishish', 'ko\'rishib turish tartibi', 'ota huquqi', 'muloqot tartibi'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Oila kodeksi',
      article: '76-modda',
      lexUrl: 'https://lex.uz/docs/104720',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Yakkasaroy tumanlararo sudiga', type: 'text' },
      { key: 'respondentName', label: 'Javobgar F.I.Sh.', placeholder: 'Rustamova Zarina Akramovna', type: 'text' },
      { key: 'respondentAddress', label: 'Javobgar manzili', placeholder: 'Toshkent sh., Yakkasaroy tumani', type: 'text' },
      { key: 'childName', label: 'Bola ismi va yoshi', placeholder: 'Rustamov Bobur, 6 yoshda', type: 'text' },
      { key: 'desiredSchedule', label: 'So\'ralayotgan ko\'rishish tartibi va vaqti', placeholder: 'Har shanba soat 10:00 dan yakshanba soat 18:00 gacha, yozgi ta\'tilda 15 kun birga dam olish', type: 'textarea' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

Javobgar: {{respondentName}}
Manzil: {{respondentAddress}}

DA'VO ARIZASI
(Bolani tarbiyalashda ishtirok etish va ko'rishib turish tartibini belgilash to'g'risida)

Men va javobgar {{respondentName}} o'rtamizda tuzilgan nikoh bekor qilingan. Birgalikdagi turmushimizdan farzandimiz {{childName}} tug'ilgan bo'lib, hozirda javobgar qaramog'ida yashamoqda.

Men farzandimni yaxshi ko'raman, uning ta'minoti uchun muntazam moddiy yordam ko'rsatib kelaman. Biroq javobgar menga farzandim bilan muloqot qilish, uni ko'rish va tarbiyasida ishtirok etishimga asossiz to'sqinlik qilib kelmoqda.

O'zbekiston Respublikasi Oila kodeksining 76-moddasiga muvofiq, boladan alohida yashayotgan ota (ona) bola bilan ko'rishish, uning tarbiyasida ishtirok etish va ta'lim olishi masalalarini hal qilishda ishtirok etish huquqiga ega. Bola bilan birga yashayotgan ota (ona) uning ikkinchi ota-ona bilan muloqot qilishiga to'sqinlik qilmasligi shart.

Shu sababli quyidagi ko'rishish tartibi belgilanishini maqsadga muvofiq deb hisoblayman: {{desiredSchedule}}.

Yuqoridagilarga asosan,

SO'RAYMAN:

1. Voyaga yetmagan {{childName}} bilan da'vogar {{fullName}}ning ko'rishib turish tartibini quyidagicha belgilashingizni:
{{desiredSchedule}}
2. Javobgar {{respondentName}}ning mazkur muloqotga to'sqinlik qilmaslik majburiyatini yuklashingizni.

Ilovalar:
1. Nikoh bekor qilinganligi haqida guvohnoma / sud qarori.
2. Bolaning tug'ilganlik guvohnomasi nusxasi.
3. Aliment to'lovlari tasdig'i.
4. Mahalla dalolatnomasi.
5. Davlat boji to'lovi.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'oil-05',
    title: 'Otalikni tan olish va belgilash haqida ariza',
    category: 'oilaviy-huquq',
    categoryName: 'Oilaviy huquq',
    description: 'Qonuniy nikohda bo\'lmagan ota-onadan tug\'ilgan bolaga nisbatan otalikni sud tartibida belgilash.',
    keywords: ['otalikni belgilash', 'ota deb topish', 'oila kodeksi 61', 'DNK ekspertizasi'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Oila kodeksi',
      article: '61-62-moddalar',
      lexUrl: 'https://lex.uz/docs/104720',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Samarqand shahar sudiga', type: 'text' },
      { key: 'defendantFather', label: 'Javobgar (taxminiy ota) F.I.Sh.', placeholder: 'Qosimov Shuhrat Murodovich', type: 'text' },
      { key: 'defendantAddress', label: 'Javobgar manzili', placeholder: 'Samarqand shahri, Registon ko\'chasi', type: 'text' },
      { key: 'childNameAndDate', label: 'Bolaning F.I.Sh. va tug\'ilgan sanasi', placeholder: 'Qosimov Temur, 05.02.2022 yilda tug\'ilgan', type: 'text' },
      { key: 'evidenceFacts', label: 'Birga yashaganlik yoki bolani tan olganlik dalillari', placeholder: '2020-2022 yillarda birga yashaganmiz, birgalikdagi fotosuratlar, xatlar, pul o\'tkazmalari mavjud', type: 'textarea' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

Javobgar: {{defendantFather}}
Manzil: {{defendantAddress}}

DA'VO ARIZASI
(Otalikni belgilash to'g'risida)

Men javobgar {{defendantFather}} bilan 2020-yildan buyon qonuniy nikohdan o'tmasdan birga yashab keldik. Birgalikdagi munosabatlarimiz natijasida {{childNameAndDate}} dunyoga keldi.

Bolaning tug'ilganligi FHDYo organida ro'yxatdan o'tkazilayotganda otasi haqidagi ma'lumotlar onasining arizasiga binoan yozilgan. Javobgar bolaning o'zidan ekanligini dastlab tan olgan bo'lsa-da, FHDYo organiga birgalikda ariza berishdan bosh tortdi.

O'rtamizdagi munosabatlar va bolaning javobgardan ekanligini quyidagi dalillar tasdiqlaydi: {{evidenceFacts}}.

O'zbekiston Respublikasi Oila kodeksining 61-62-moddalariga muvofiq, bola o'zaro nikohda bo'lmagan ota-onadan tug'ilganda otalik sud tartibida belgilanadi. Sud bolaning kelib chiqishini aniq tasdiqlaydigan har qanday dalillarni e'tiborga oladi.

Yuqoridagilarga asosan,

SO'RAYMAN:

1. {{defendantFather}}ning {{childNameAndDate}}ga nisbatan otaligi faktini belgilashingizni;
2. FHDYo bo'limiga bolaning tug'ilganlik haqidagi dalolatnoma yozuvining "otasi" ustuniga tegishli o'zgartirish kiritish majburiyatini yuklashingizni;
3. Zarurat tug'ilsa sud-genetik (DNK) ekspertizasi tayinlashingizni.

Ilovalar:
1. Bolaning tug'ilganlik to'g'risidagi guvohnomasi.
2. Birga yashaganlikni tasdiqlovchi fotosuratlar, yozishmalar.
3. Davlat boji to'lovi kvitansiyasi.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'oil-06',
    title: 'Nikoh yoshini qisqartirish to\'g\'risida tuman hokimiga ariza',
    category: 'oilaviy-huquq',
    categoryName: 'Oilaviy huquq',
    description: 'Uzrli sabablar (homiladorlik, bola tug\'ilishi) mavjud bo\'lganda nikoh yoshini 1 yilga qisqartirish bo\'yicha tuman (shahar) hokimligi nomiga ariza.',
    keywords: ['nikoh yoshi', 'nikoh yoshini qisqartirish', 'hokim qarori', 'oila kodeksi 15'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Oila kodeksi',
      article: '15-modda',
      lexUrl: 'https://lex.uz/docs/104720',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetKhokim', label: 'Tuman/shahar hokimligi', placeholder: 'Farg\'ona shahar hokimi nomiga', type: 'text' },
      { key: 'fianceInfo', label: 'Nikohlanuvchi shaxsning F.I.Sh. va yoshi', placeholder: 'Sobirova Madina Anvarovna, 17 yoshda', type: 'text' },
      { key: 'reasonDetails', label: 'Qisqartirish uchun uzrli sabab', placeholder: 'Homiladorlik holati mavjudligi (tibbiy ma\'lumotnoma ilova qilinadi)', type: 'textarea' },
    ],
    templateText: `{{targetKhokim}}ga

Ariza beruvchi: {{fullName}}
Yashash manzili: {{address}}
Telefon: {{phone}}

ARIZA
(Nikoh yoshini qisqartirish to'g'risida)

Men va fuqaro {{fianceInfo}} o'zaro bir-birimizni sevib, oila qurishga ahd qildik. Ota-onalarimiz ham mazkur nikohga to'liq rozilik bildirishgan.

Biroq fuqaro {{fianceInfo}} nikoh yoshiga to'lmagan. Shu bilan birga oramizda nikohni kechiktirib bo'lmaydigan uzrli sabab mavjud: {{reasonDetails}}.

O'zbekiston Respublikasi Oila kodeksining 15-moddasiga asosan, uzrli sabablar bo'lganida nikohga kirishishni xohlovchilarning iltimosiga ko'ra tuman, shahar hokimi nikoh yoshini ko'pi bilan bir yilga qisqartirishi mumkin.

Yuqoridagilarga asosan,

SO'RAYMAN:

Fuqaro {{fianceInfo}}ning nikoh yoshini qisqartirish to'g'risida qaror qabul qilishingizni hamda tegishli FHDYo bo'limida nikohimizni rasmiylashtirishga ruxsat berishingizni.

Ilova qilinadigan hujjatlar:
1. Pasport yoki ID-karta nusxalari.
2. Uzrli sababni tasdiqlovchi tibbiy xulosa/ma'lumotnoma.
3. Ota-onalarning rozilik arizalari.

Ariza beruvchi: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'oil-07',
    title: 'Ota-onalik huquqini tiklash to\'g\'risida sudga ariza',
    category: 'oilaviy-huquq',
    categoryName: 'Oilaviy huquq',
    description: 'Xulq-atvori, turmush tarzi va moddiy ahvoli ijobiy tomonga o\'zgargan ota yoki onaning huquqini qayta tiklash to\'g\'risidagi sud arizasi.',
    keywords: ['ota onalik huquqini tiklash', 'bolani qaytarish', 'oila kodeksi 82'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Oila kodeksi',
      article: '82-modda',
      lexUrl: 'https://lex.uz/docs/104720',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Andijon tumanlararo sudiga', type: 'text' },
      { key: 'deprivationDetails', label: 'Mahrum qilingan sud qarori sanasi va tafsilotlari', placeholder: '2022-yil 14-apreldagi sud hal qiluv qarori bilan', type: 'text' },
      { key: 'childDetails', label: 'Bola F.I.Sh. va yoshi', placeholder: 'Yusupov Sardor, 8 yoshda', type: 'text' },
      { key: 'positiveChanges', label: 'Yuz bergan ijobiy o\'zgarishlar', placeholder: 'To\'liq davolanib sog\'lom hayot tarziga o\'tdim, rasmiy doimiy ishga kirdim, turar joy sharoitim yaxshilandi', type: 'textarea' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

Javobgar (vasiy / ikkinchi ota-ona / muassasa): Manfaatdor shaxs
Uchinchi shaxs: Vasiylik va homiylik organi

DA'VO ARIZASI
(Ota-onalik huquqini tiklash to'g'risida)

{{deprivationDetails}}ga asosan men farzandim {{childDetails}}ga nisbatan ota-onalik huquqidan mahrum qilingan edim.

Mazkur qarordan so'ng men o'z hayotimni tubdan o'zgartirdim: {{positiveChanges}}. Hozirda farzandimga mehr berish, uni o'z qaramog'imda tarbiyalash uchun barcha moddiy va ma'naviy sharoitlarim mavjud.

O'zbekiston Respublikasi Oila kodeksining 82-moddasiga ko'ra, agar ota-ona o'z xulq-atvorini, turmush tarzini va bolani tarbiyalashga bo'lgan munosabatini tubdan o'zgartirgan bo'lsa, ota-onalik huquqi tiklanishi mumkin.

Yuqoridagilarga asosan,

SO'RAYMAN:

1. Da'vogar {{fullName}}ning voyaga yetmagan {{childDetails}}ga nisbatan ota-onalik huquqini tiklashingizni;
2. Bolani o'z tarbiyamga qaytarib berishingizni.

Ilovalar:
1. Sud hal qiluv qarori nusxasi.
2. Ish joyidan ma'lumotnoma va daromadlar qog'ozi.
3. Mahalla va qo'shnilar tavsifnomasi.
4. Tibbiy dispanserlardan ma'lumotnomalar.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'oil-08',
    title: 'Bolani o\'zboshimchalik bilan ushlab turgan shaxsdan qaytarib olish haqida da\'vo',
    category: 'oilaviy-huquq',
    categoryName: 'Oilaviy huquq',
    description: 'Qonuniy asoslarsiz bolani olib ketgan yoki qaytarmayotgan qarindoshlar yoki boshqa shaxslardan bolani qaytarish to\'g\'risidagi da\'vo.',
    keywords: ['bolani qaytarish', 'bolani noqonuniy ushlab turish', 'oila kodeksi 74'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Oila kodeksi',
      article: '74-modda',
      lexUrl: 'https://lex.uz/docs/104720',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Buxoro tumanlararo sudiga', type: 'text' },
      { key: 'respondentRelative', label: 'Javobgar (bolani ushlab turgan shaxs) F.I.Sh.', placeholder: 'Narzullayeva Halima', type: 'text' },
      { key: 'childName', label: 'Bola ismi va tug\'ilgan yili', placeholder: 'Narzullayev Otabek, 2018-yil', type: 'text' },
      { key: 'withholdingCircumstances', label: 'Bolani qaytarmaslik holatlari', placeholder: 'Javobgar buvisi bo\'lib, bolani vaqtincha mehmonga olib ketib, keyinchalik onasiga qaytarishdan bosh tortmoqda', type: 'textarea' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

Javobgar: {{respondentRelative}}
Manzil: Buxoro shahri

DA'VO ARIZASI
(Bolani qonunsiz ushlab turgan shaxsdan qaytarib olish to'g'risida)

Men voyaga yetmagan {{childName}}ning qonuniy onasi/otasi hisoblanaman. Javobgar {{respondentRelative}} bolani o'zboshimchalik bilan ushlab turibdi: {{withholdingCircumstances}}.

O'zbekiston Respublikasi Oila kodeksining 74-moddasiga asosan, ota-ona bolani qonunga yoki sud qaroriga asoslanmasdan o'z qaramog'ida ushlab turgan har qanday shaxsdan qaytarib berishni talab qilish huquqiga ega.

SO'RAYMAN:

1. Voyaga yetmagan {{childName}}ni javobgar {{respondentRelative}}ning noqonuniy egaligidan olib, qonuniy vakili {{fullName}}ga qaytarib berishingizni.

Ilovalar:
1. Bolaning tug'ilganlik guvohnomasi.
2. Ichki ishlar bo'limiga murojaat nusxalari.
3. Davlat boji to'lovi.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },

  // AJRIM VA ALIMENT
  {
    id: 'ajr-01',
    title: 'Nikohni bekor qilish to\'g\'risida da\'vo arizasi (Ajrim)',
    category: 'ajrim-va-aliment',
    categoryName: 'Ajrim va aliment',
    description: 'Voyaga yetmagan farzandlar mavjud bo\'lganda yoki er-xotindan biri ajrashishga rozi bo\'lmagan holatlarda fuqarolik ishlari bo\'yicha sudga taqdim etiladigan rasmiy ajrim arizasi.',
    keywords: ['ajrim', 'nikohni bekor qilish', 'sudga ariza', 'ajrashish', 'oila kodeksi 38-42'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Oila kodeksi',
      article: '38, 40, 41, 42-moddalar',
      lexUrl: 'https://lex.uz/docs/104720',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Tegishli sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Toshkent shahar Chilonzor tumanlararo sudiga', type: 'text' },
      { key: 'spouseName', label: 'Javobgar (turmush o\'rtog\'ingiz) F.I.Sh.', placeholder: 'Valiyeva Nargiza Olimovna', type: 'text' },
      { key: 'spouseAddress', label: 'Javobgarning yashash manzili', placeholder: 'Toshkent shahri, Chilonzor tumani, 19-mavze, 5-uy, 12-xonadon', type: 'text' },
      { key: 'marriageDate', label: 'Nikoh tuzilgan sana', placeholder: '10.08.2017', type: 'date' },
      { key: 'registryOffice', label: 'Nikoh qayd etilgan FHDYo bo\'limi', placeholder: 'Chilonzor tumani FHDYo bo\'limi, dalolatnoma raqami 1234', type: 'text' },
      { key: 'childrenInfo', label: 'Farzandlar haqida ma\'lumot (F.I.Sh. va tug\'ilgan sanasi)', placeholder: 'Valiyev Sardor Aliyevich, 15.06.2018 yilda tug\'ilgan', type: 'textarea' },
      { key: 'breakupReason', label: 'Ajrashish sabablari va birga yashash to\'xtagan vaqt', placeholder: 'Muntazam oilaviy kelishmovchiliklar, xarakterlar to\'g\'ri kelmasligi sababli 2023-yil sentyabrdan buyon birga yashamaymiz', type: 'textarea' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Pasport/ID: {{passport}}
Manzil: {{address}}
Telefon: {{phone}}

Javobgar: {{spouseName}}
Manzil: {{spouseAddress}}
Telefon: Javobgar telefoni

DA'VO ARIZASI
(Nikohni bekor qilish to'g'risida)

Men va javobgar {{spouseName}} {{marriageDate}} yilda {{registryOffice}}da qonuniy nikohdan o'tganmiz.

Birgalikdagi turmushimizdan farzandimiz (farzandlarimiz): {{childrenInfo}} dunyoga kelgan.

Dastlab birga ahil yashagan bo'lsak-da, keyinchalik oramizda kelishmovchiliklar kelib chiqdi. {{breakupReason}}. Mahalla oqsoqollari va yaqinlarimiz tomonidan o'tkazilgan yarashtirish choralari hech qanday ijobiy natija bermadi. Hozirda oilani qayta tiklashning umuman iloji yo'q, oramizdagi er-xotinlik munosabatlari amalda butunlay to'xtagan.

O'rtamizda voyaga yetmagan farzandlar borligi hamda javobgar bilan o'zaro kelishuvga erisha olmaganligimiz sababli nikoh faqat sud tartibida bekor qilinishi mumkin.

O'zbekiston Respublikasi Oila kodeksining 38, 40, 41-moddalari hamda Fuqarolik protsessual kodeksining 188-191-moddalariga asosan,

SO'RAYMAN:

1. Men — {{fullName}} va javobgar {{spouseName}} o'rtasida {{marriageDate}} yilda {{registryOffice}}da qayd etilgan nikohni bekor qilishingizni;
2. Voyaga yetmagan farzandimiz (farzandlarimiz) tarbiyasini onasi/otasi qaramog'ida qoldirishingizni;
3. Ishni javobgar ishtirokisiz ko'rmaslikni yoki qonunda belgilangan tartibda hal etishingizni.

Ilova qilinadigan hujjatlar:
1. Nikoh to'g'risidagi guvohnomaning asl nusxasi.
2. Farzand(lar)ning tug'ilganlik to'g'risidagi guvohnomalari nusxasi.
3. Turar joydan ma'lumotnoma va oila tarkibi ma'lumotnomasi.
4. Mahalla yarashtirish komissiyasi bayonnomasi/xulosasi.
5. Davlat boji to'langanligi to'g'risida kvitansiya.
6. Da'vo arizasi nusxasi javobgar uchun.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'ajr-02',
    title: 'Voyaga yetmagan bolalar uchun aliment undirish to\'g\'risida sud buyrug\'i berish haqida ariza',
    category: 'ajrim-va-aliment',
    categoryName: 'Ajrim va aliment',
    description: 'Sud majlisi o\'tkazilmasdan va nizosiz tartibda oylik ish haqining tegishli qismi (1/4, 1/3, 1/2) miqdorida aliment undirish bo\'yicha sud buyrug\'i talabnomasi.',
    keywords: ['sud buyrug\'i', 'aliment', 'aliment undirish', 'bolalar ta\'minoti', 'oila kodeksi 96-99'],
    popular: true,
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Oila kodeksi va FPK',
      article: 'Oila kodeksi 96, 99-moddalar, FPK 171-modda',
      lexUrl: 'https://lex.uz/docs/104720',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Namangan tumanlararo sudiga', type: 'text' },
      { key: 'debtorName', label: 'Qarzdor (aliment to\'lovchi ota/ona) F.I.Sh.', placeholder: 'Karimov Rustam Alisherovich', type: 'text' },
      { key: 'debtorAddress', label: 'Qarzdorning yashash manzili', placeholder: 'Namangan viloyati, Namangan shahri, Bobur ko\'chasi, 24-uy', type: 'text' },
      { key: 'debtorWorkplace', label: 'Qarzdorning ish joyi (agar ma\'lum bo\'lsa)', placeholder: '"O\'zavtosanoat" AJ zavodi filiali', type: 'text' },
      { key: 'childrenDetails', label: 'Farzandlar ismi va tug\'ilgan sanasi', placeholder: 'Karimova Malika Rustam qizi, 12.04.2020 yilda tug\'ilgan', type: 'textarea' },
      { key: 'alimonyShare', label: 'So\'ralayotgan ulush miqdori', placeholder: '1 nafar bola uchun qarzdor daromadining 1/4 qismi miqdorida', type: 'text' },
    ],
    templateText: `{{targetCourt}}ga

Undiruvchi: {{fullName}}
Yashash manzili: {{address}}
Telefon: {{phone}}
Pasport/ID: {{passport}}

Qarzdor: {{debtorName}}
Yashash manzili: {{debtorAddress}}
Ish joyi: {{debtorWorkplace}}

ARIZA
(Aliment undirish to'g'risida sud buyrug'i berish haqida)

Men va qarzdor {{debtorName}} qonuniy nikohda (yoki qonuniy nikohsiz otalik belgilangan holda) turmush kechirganmiz. O'rtamizdagi nikohdan voyaga yetmagan farzandimiz (farzandlarimiz): {{childrenDetails}} tug'ilgan.

Bola hozirda to'liq mening qaramog'imda yashamoqda. Qarzdor esa farzandini moddiy jihatdan ta'minlash, kiyim-kechak, oziq-ovqat va davolanish xarajatlarini qoplashdan asossiz bo'yin tovlab kelmoqda.

O'zbekiston Respublikasi Oila kodeksining 96-moddasiga ko'ra, ota-ona voyaga yetmagan bolalariga ta'minot berishi shart. Oila kodeksining 99-moddasiga muvofiq, agar voyaga yetmagan bolalariga ta'minot berish haqida ota-ona o'rtasida kelishuv bo'lmasa, aliment sud tomonidan ota-onaning har oydagi ish haqi va (yoki) boshqa daromadining: bir bola uchun — to'rtdan bir qismi; ikki bola uchun — uchdan bir qismi; uch va undan ortiq bola uchun — yarmi miqdorida undiriladi.

Mazkur talab bo'yicha otalikni belgilash yoki bolaning yashash joyi haqida nizo mavjud emas. Shuning uchun talab sud buyrug'i tartibida ko'rib chiqilishi lozim.

Yuqoridagilarga asosan hamda Fuqarolik protsessual kodeksining 170-173-moddalariga tayangan holda,

SO'RAYMAN:

Qarzdor {{debtorName}}dan {{childrenDetails}}ning ta'minoti uchun ariza berilgan kundan boshlab, bola(lar) voyaga yetgunga qadar har oyda qarzdorning ish haqi va boshqa daromadlarining {{alimonyShare}} miqdorida aliment undirish haqida SUD BUYRUG'I chiqarishingizni.

Ilovalar:
1. Bolaning tug'ilganlik guvohnomasi nusxasi.
2. Nikoh guvohnomasi yoki nikoh bekor qilinganligi to'g'risida guvohnoma nusxasi.
3. Bolaning ariza beruvchi qaramog'ida ekanligi haqida ma'lumotnoma (mahalla).
4. Qarzdorning ish joyi haqida ma'lumot (mavjud bo'lsa).

Ariza beruvchi: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'ajr-03',
    title: 'Qat\'iy pul summasida aliment undirish to\'g\'risida da\'vo arizasi',
    category: 'ajrim-va-aliment',
    categoryName: 'Ajrim va aliment',
    description: 'Qarzdorning daromadi noaniq, beqaror, mavsumiy yoki daromadini yashirayotgan hollarda qat\'iy summada aliment undirish arizasi.',
    keywords: ['qat\'iy summa', 'aliment', 'daromadsiz qarzdor', 'oila kodeksi 102'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Oila kodeksi',
      article: '102-modda',
      lexUrl: 'https://lex.uz/docs/104720',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Qarshi tumanlararo sudiga', type: 'text' },
      { key: 'debtorName', label: 'Javobgar F.I.Sh.', placeholder: 'Qurbonov Sanjar Bekmurodovich', type: 'text' },
      { key: 'debtorAddress', label: 'Javobgar manzili', placeholder: 'Qarshi shahri, Mustaqillik shoh ko\'chasi', type: 'text' },
      { key: 'childInfo', label: 'Bola haqida ma\'lumot', placeholder: 'Qurbonov Asilbek Sanjar o\'g\'li, 2020-yil', type: 'text' },
      { key: 'requestedFixedSum', label: 'So\'ralayotgan qat\'iy pul summasi (oyiga)', placeholder: 'BHMning 2 baravari (yoki 2 000 000 so\'m)', type: 'text' },
      { key: 'reasonUnstableIncome', label: 'Qarzdorning beqaror daromadi sabablari', placeholder: 'Javobgar rasmiy ish joyiga ega emas, xususiy tijorat bilan shug\'ullanadi, daromadi beqaror', type: 'textarea' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

Javobgar: {{debtorName}}
Manzil: {{debtorAddress}}

DA'VO ARIZASI
(Qat'iy pul summasida aliment undirish to'g'risida)

Men va javobgar {{debtorName}} birgalikdagi turmushimizdan voyaga yetmagan farzandimiz {{childInfo}} tarbiyalanmoqda. Bola to'liq mening qaramog'imda bo'lib, uning o'sishi va ta'lim olishi xarajatlarini yolg'iz o'zim ko'tarib kelmoqdaman.

Javobgar {{reasonUnstableIncome}}. Shu sababli uning daromadidan ulush tarzida aliment undirish bolaning yetarli moddiy ta'minotiga jiddiy putur yetkazadi.

O'zbekiston Respublikasi Oila kodeksining 102-moddasiga ko'ra, ota-onaning aliment to'lashi shart bo'lgan paytda doimiy ish haqi yoki boshqa daromadi bo'lmasa, yoxud ish haqi beqaror bo'lsa, sud har oyda to'lanishi lozim bo'lgan aliment miqdorini qat'iy pul summasida belgilashga haqlidir.

Yuqoridagilarga asosan,

SO'RAYMAN:

Javobgar {{debtorName}}dan voyaga yetmagan {{childInfo}} ta'minoti uchun har oyda {{requestedFixedSum}} miqdorida qat'iy pul summasida aliment undirish to'g'risida hal qiluv qarori chiqarishingizni.

Ilovalar:
1. Bolaning tug'ilganlik guvohnomasi nusxasi.
2. Xarajatlar (bog'cha, dori-darmon, kiyim) cheklari.
3. Davlat bojidan ozod qilish haqida iltimosnoma (Soliq kodeksi 378-modda).

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'ajr-04',
    title: 'Aliment miqdorini kamaytirish haqida da\'vo arizasi',
    category: 'ajrim-va-aliment',
    categoryName: 'Ajrim va aliment',
    description: 'Qarzdorning oilaviy yoki moddiy ahvoli o\'zgarganda (boshqa bolalari tug\'ilganda, nogiron bo\'lib qolganda) aliment foizini kamaytirish arizasi.',
    keywords: ['alimentni kamaytirish', 'aliment miqdori', 'oila kodeksi 105', 'sud da\'vo'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Oila kodeksi',
      article: '105-modda',
      lexUrl: 'https://lex.uz/docs/104720',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Urganch tumanlararo sudiga', type: 'text' },
      { key: 'recipientName', label: 'Aliment oluvchi shaxs F.I.Sh.', placeholder: 'Boboyeva Nilufar Karim qizi', type: 'text' },
      { key: 'recipientAddress', label: 'Aliment oluvchi manzili', placeholder: 'Urganch shahri, Al-Xorazmiy ko\'chasi', type: 'text' },
      { key: 'previousJudgement', label: 'Oldingi sud qarori yoki sud buyrug\'i tafsiloti', placeholder: '2021-yil 12-fevraldagi sud buyrug\'iga asosan 1/4 qism aliment to\'lab kelmoqdaman', type: 'text' },
      { key: 'newCircumstances', label: 'Yangi oilaviy yoki moddiy ahvol o\'zgarishi', placeholder: 'Ikkinchi oilamda 2 nafar farzand tug\'ildi, ularga ham aliment undirilmoqda, daromadim kamaydi', type: 'textarea' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar (qarzdor): {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

Javobgar (undiruvchi): {{recipientName}}
Manzil: {{recipientAddress}}

DA'VO ARIZASI
(Aliment miqdorini kamaytirish to'g'risida)

{{previousJudgement}} bo'yicha javobgar {{recipientName}} foydasiga voyaga yetmagan farzandim ta'minoti uchun har oyda daromadimdan aliment to'lab kelmoqdaman.

Biroq hozirgi kunda mening moddiy va oilaviy ahvolim jiddiy o'zgardi: {{newCircumstances}}. Amaldagi aliment miqdori qolgan voyaga yetmagan bolalarimning moddiy ta'minotiga salbiy ta'sir ko'rsatmoqda.

O'zbekiston Respublikasi Oila kodeksining 105-moddasiga ko'ra, agar aliment to'lovchining boshqa voyaga yetmagan bolalari bo'lib, ulardan aliment undirilganda ushbu bolalar aliment olayotgan bolaga nisbatan moddiy jihatdan kamroq ta'minlangan bo'lib qolsa, shuningdek ota-onaning moddiy yoki oilaviy ahvoli o'zgargan bo'lsa, sud aliment miqdorini kamaytirishga haqlidir.

SO'RAYMAN:

Mendan javobgar {{recipientName}} foydasiga undirilayotgan aliment miqdorini kamaytirishingizni va yangi mutanosib ulush belgilashingizni.

Ilovalar:
1. Sud buyrug'i nusxasi.
2. Yangi nikoh va keyingi bolalarning tug'ilganlik guvohnomalari.
3. Ish haqi va daromadlar to'g'risida ma'lumotnoma.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'ajr-05',
    title: 'Aliment qarzdorligini aniqlash va undirish haqida sud ijrochisiga (MIB) ariza',
    category: 'ajrim-va-aliment',
    categoryName: 'Ajrim va aliment',
    description: 'Qarzdor aliment to\'lamay kelayotgan davr uchun hisoblangan qarz summasini belgilash va majburiy undirish bo\'yicha MIB bo\'limiga murojaat.',
    keywords: ['aliment qarzi', 'MIB', 'majburiy ijro', 'ijro hujjati', 'oila kodeksi 140'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Oila kodeksi va "Sud hujjatlarini ijro etish to\'g\'risida"gi Qonun',
      article: 'Oila kodeksi 140-142-moddalar',
      lexUrl: 'https://lex.uz/docs/104720',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetMib', label: 'MIB bo\'limi nomi', placeholder: 'Majburiy ijro byurosi Yunusobod tuman bo\'limi davlat ijrochisiga', type: 'text' },
      { key: 'debtorFullName', label: 'Qarzdor F.I.Sh.', placeholder: 'Ahmedov Botir Shokirovich', type: 'text' },
      { key: 'executionDocDetails', label: 'Ijro hujjati raqami va sanasi', placeholder: 'Ijro varaqasi № 2-1205/2021, 15.09.2021 yilda berilgan', type: 'text' },
      { key: 'debtPeriod', label: 'Qarzdorlik yuzaga kelgan davr', placeholder: '2023-yil yanvar oyidan hozirgi kunga qadar', type: 'text' },
    ],
    templateText: `{{targetMib}}ga

Undiruvchi: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

ARIZA
(Aliment qarzdorligini hisoblash va undirish to'g'risida)

Sizning ish yurituvuvizda {{executionDocDetails}} bo'yicha qarzdor {{debtorFullName}}dan mening foydamga voyaga yetmagan farzandim ta'minoti uchun aliment undirish to'g'risidagi ijro hujjati mavjud.

Biroq qarzdor {{debtorFullName}} {{debtPeriod}} davomida aliment to'lovlarini to'lashdan qasddan bo'yin tovlab kelmoqda va natijada katta miqdorda aliment qarzdorligi yuzaga kelgan.

Oila kodeksining 140-moddasi hamda "Sud hujjatlari va boshqa organlar hujjatlarini ijro etish to'g'risida"gi Qonun talablariga asosan,

SO'RAYMAN:

1. Qarzdor {{debtorFullName}}ning {{debtPeriod}} uchun to'lanmagan aliment qarzdorligi miqdorini aniq hisoblab chiqib, qaror chiqarishingizni;
2. Qarzdorning O'zbekiston Respublikasidan chetga chiqish huquqini vaqtincha cheklash chorasini ko'rishingizni;
3. Qarzdorga tegishli bank hisobvaraqlari va mol-mulklarini aniqlab, qarzni qoplash uchun xatlovga olishingizni.

Undiruvchi: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'ajr-06',
    title: 'Voyaga yetgan mehnatga layoqatsiz bolaga aliment undirish haqida da\'vo arizasi',
    category: 'ajrim-va-aliment',
    categoryName: 'Ajrim va aliment',
    description: '18 yoshga to\'lgan bo\'lsa-da, I yoki II guruh nogironligi bo\'lgan va moddiy yordamga muhtoj farzand uchun ota yoki onadan aliment talab qilish.',
    keywords: ['nogiron farzand', 'voyaga yetgan bola aliment', 'oila kodeksi 100'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Oila kodeksi',
      article: '100-modda',
      lexUrl: 'https://lex.uz/docs/104720',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Qo\'qon shahar sudiga', type: 'text' },
      { key: 'parentRespondent', label: 'Javobgar ota (ona) F.I.Sh.', placeholder: 'Madrahimov Ilhomjon', type: 'text' },
      { key: 'disabilityInfo', label: 'Nogironlik guruhi va guvohnoma tafsiloti', placeholder: 'Bolalikdan II guruh nogironi, TMEK xulosasi № 54', type: 'text' },
      { key: 'requestedSum', label: 'So\'ralayotgan oylik mablag\'', placeholder: 'BHMning 1.5 baravari miqdorida', type: 'text' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

Javobgar: {{parentRespondent}}
Manzil: Qo'qon shahri

DA'VO ARIZASI
(Voyaga yetgan mehnatga layoqatsiz bolaga aliment undirish to'g'risida)

Men javobgar {{parentRespondent}}ning farzandiman. Men 18 yoshga to'lgan bo'lsam-da, sog'lig'im sababli mehnatga layoqatsizman: {{disabilityInfo}}. Olgan nogironlik nafaqam dorilar va yashash uchun yetarli emas.

Javobgar esa menga hech qanday moddiy yordam ko'rsatmay kelmoqda.

O'zbekiston Respublikasi Oila kodeksining 100-moddasiga ko'ra, ota-ona voyaga yetgan mehnatga layoqatsiz, yordamga muhtoj bolalariga ta'minot berishi shart.

SO'RAYMAN:

Javobgar {{parentRespondent}}dan mening foydamga har oyda {{requestedSum}} miqdorida aliment undirishingizni.

Ilovalar:
1. Pasport nusxasi.
2. Tug'ilganlik guvohnomasi.
3. TMEK nogironlik ma'lumotnomasi.
4. Xarajatlar to'g'risida kvitansiyalar.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'ajr-07',
    title: 'Sobiq er/xotindan ta\'minot (aliment) undirish to\'g\'risida da\'vo arizasi',
    category: 'ajrim-va-aliment',
    categoryName: 'Ajrim va aliment',
    description: 'Nikoh bekor qilingandan so\'ng 3 yoshgacha bo\'lgan umumiy bolani parvarishlayotgan ona yoki mehnatga layoqatsiz bo\'lib qolgan er/xotin uchun aliment.',
    keywords: ['sobiq xotin aliment', 'bola 3 yoshgacha', 'oila kodeksi 118'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Oila kodeksi',
      article: '118-modda',
      lexUrl: 'https://lex.uz/docs/104720',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Navoiy tumanlararo sudiga', type: 'text' },
      { key: 'exSpouseName', label: 'Javobgar (sobiq turmush o\'rtoq) F.I.Sh.', placeholder: 'Ergashev Sherzod', type: 'text' },
      { key: 'careBabyInfo', label: 'Parvarishdagi chaqaloq ismi va yoshi', placeholder: 'Ergasheva Omina, 1 yoshu 2 oylik', type: 'text' },
      { key: 'amountWanted', label: 'Talab qilinayotgan oylik ta\'minot', placeholder: 'BHMning 1 baravari (oyiga)', type: 'text' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

Javobgar: {{exSpouseName}}
Manzil: Navoiy shahri

DA'VO ARIZASI
(Sobiq erdan o'z ta'minotim uchun aliment undirish to'g'risida)

Men va javobgar {{exSpouseName}} o'rtasidagi nikoh bekor qilingan. Hozirda umumiy farzandimiz {{careBabyInfo}}ni parvarish qilib, bolalar parvarishi ta'tilidaman va ishlay olmayman. Moddiy yordamga o'ta muhtojman.

Oila kodeksining 118-moddasiga muvofiq, umumiy bolani parvarishlayotgan sobiq xotin bola 3 yoshga to'lgunga qadar sobiq eridan aliment olish huquqiga ega.

SO'RAYMAN:

Javobgar {{exSpouseName}}dan men {{fullName}}ning ta'minotim uchun har oyda {{amountWanted}} miqdorida aliment undirishingizni.

Ilovalar:
1. Nikoh bekor qilinganligi haqida hujjat.
2. Bolaning tug'ilganlik guvohnomasi.
3. Ishlamayotganlik va daromadsizlik haqida ma'lumotnoma.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  },
  {
    id: 'ajr-08',
    title: 'Aliment to\'lashdan ozod qilish haqida da\'vo arizasi',
    category: 'ajrim-va-aliment',
    categoryName: 'Ajrim va aliment',
    description: 'Bola boshqa ota-onaning to\'liq ta\'minotiga o\'tganida yoki farzandlikka olinganda aliment to\'lash majburiyatini bekor qilish.',
    keywords: ['alimentdan ozod qilish', 'majburiyatni tugatish', 'oila kodeksi 115'],
    legalBasis: {
      lawName: 'O\'zbekiston Respublikasi Oila kodeksi',
      article: '115, 127-moddalar',
      lexUrl: 'https://lex.uz/docs/104720',
      isVerified: true
    },
    requiredFields: [
      ...COMMON_PERSONAL_FIELDS,
      { key: 'targetCourt', label: 'Sud nomi', placeholder: 'Fuqarolik ishlari bo\'yicha Jizzax tumanlararo sudiga', type: 'text' },
      { key: 'recipientEx', label: 'Aliment undiruvchi F.I.Sh.', placeholder: 'Mansurova Go\'zal', type: 'text' },
      { key: 'terminationReason', label: 'Ozod qilish asosi (bola da\'vogar bilan yashamoqda / farzandlikka olingan)', placeholder: 'Bola 1 yildan buyon to\'liq mening tarbiyamda yashamoqda', type: 'textarea' },
    ],
    templateText: `{{targetCourt}}ga

Da'vogar: {{fullName}}
Manzil: {{address}}
Telefon: {{phone}}

Javobgar: {{recipientEx}}
Manzil: Jizzax shahri

DA'VO ARIZASI
(Aliment to'lash majburiyatidan ozod qilish to'g'risida)

Sudning avvalgi qaroriga asosan men javobgar foydasiga aliment to'lab kelganman. Biroq {{terminationReason}}. Hozirda javobgar bola ta'minotiga hech qanday xarajat qilmayapti.

SO'RAYMAN:

Mening zimmamga yuklatilgan aliment to'lash majburiyatini bekor qilib, aliment to'lashdan ozod qilishingizni.

Ilovalar:
1. Sud qarori nusxasi.
2. Mahalla dalolatnomasi va bolaning yashash joyi ma'lumotnomasi.

Da'vogar: _______________ / {{fullName}}
Sana: {{currentDate}}`
  }
];
