export type CategoryId =
  | 'all'
  | 'icecream'
  | 'desserts'
  | 'mojito'
  | 'juices'
  | 'shakes_coffee'
  | 'hot_drinks'
  | 'snacks';

export type IllustrationVariant =
  | 'signature_splash_cone'
  | 'arabic_mastic_icecream'
  | 'datli_icecream_basra'
  | 'zabib_basrawi_iced'
  | 'luqaimat_nutella_icecream'
  | 'berry_chocolate_waffle'
  | 'tropical_mango_cocktail'
  | 'lotus_caramel_sundae'
  | 'nutella_banana_crepe'
  | 'pomegranate_berry_slush'
  | 'pistachio_saffron_cup'
  | 'family_happiness_box';

export interface ProductItem {
  id: string;
  category: Exclude<CategoryId, 'all'>;
  categoryLabel: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  priceDisplay: string;
  servingNote: string;
  highlightTag?: string;
  illustration: IllustrationVariant;
  flavors: string[];
  ingredients: string[];
}

export interface ScoopFlavor {
  id: string;
  name: string;
  tasteNote: string;
  colorPrimary: string;
  colorSecondary: string;
}

export interface BuilderOption {
  id: string;
  name: string;
  note: string;
  color: string;
}

export const BRAND_INFO = {
  nameAr: 'مرطبات رتولة',
  sloganAr: 'ذوق والطعم سعادة',
  cityAr: 'العراق · البصرة',
  addressAr: 'البصرة — مجمع الأمل السكني 1 — حديقة العمارات المركزية — بجوار عمارة 23',
  landmarkAr: 'مجمع الأمل السكني 1 (بجوار عمارة 23)',
  logo: `${import.meta.env.BASE_URL}assets/logo_ratoola.webp`,
  googleMapsUrl: 'https://maps.app.goo.gl/ys2razY7U3kj4ADX7',
  wazeUrl: 'https://waze.com/ul?ll=30.4234965,47.7846307&navigate=yes',
  instagram: 'rat_oo10',
  instagramUrl: 'https://instagram.com/rat_oo10',
  tiktok: 'rat_oo10',
  tiktokUrl: 'https://www.tiktok.com/@rat_oo10',
  phoneDisplay: '07706444465',
  phoneInternational: '+9647706444465',
  whatsappUrl: 'https://wa.me/9647706444465',
  cardImage: `${import.meta.env.BASE_URL}assets/aistudio/WhatsApp_Image_2026-10-21_at_23.58.04_7a0c2d69.jpeg`,
};

export const QUICK_WHATSAPP_QUESTIONS = [
  {
    id: 'flavors',
    label: 'شنو نكهات اليوم؟',
    message: 'مرحبا مرطبات رتولة، شنو النكهات والأصناف المتوفرة اليوم؟',
  },
  {
    id: 'delivery',
    label: 'متوفر توصيل بالبصرة؟',
    message: 'مرحبا مرطبات رتولة، متوفر توصيل حالياً داخل البصرة؟',
  },
  {
    id: 'location',
    label: 'أريد موقع المحل بالضبط',
    message: 'مرحبا مرطبات رتولة، ممكن عنوان المحل بالضبط وأقرب نقطة دالة بالبصرة؟',
  },
];

export const CATEGORIES: { id: CategoryId; label: string }[] = [
  {
    "id": "all",
    "label": "الكل (85 صنف)"
  },
  {
    "id": "icecream",
    "label": "🍦 الآيس كريم والجيلاتو"
  },
  {
    "id": "desserts",
    "label": "🧇 كريب ووافل وحلويات"
  },
  {
    "id": "mojito",
    "label": "🍹 موهيتو منعش"
  },
  {
    "id": "juices",
    "label": "🧃 عصائر وآيس تي"
  },
  {
    "id": "shakes_coffee",
    "label": "🥤 ميلك شيك وآيس كوفي"
  },
  {
    "id": "hot_drinks",
    "label": "☕ مشروبات ساخنة"
  },
  {
    "id": "snacks",
    "label": "🍿 أزبري وتسلية"
  }
];

export const MENU_ITEMS: ProductItem[] = [
  {
    "id": "ice-cup-small",
    "category": "icecream",
    "categoryLabel": "قسم الآيس كريم",
    "name": "قدح آيس كريم",
    "subtitle": "قدح كلاسيكي بارد منعش بالنكهات المفضلة",
    "description": "كوب آيس كريم تقليدي بنكهات رتولة الفاخرة والطازجة يومياً.",
    "price": 1000,
    "priceDisplay": "1,000 د.ع",
    "servingNote": "حجم قياسي",
    "illustration": "signature_splash_cone",
    "flavors": [
      "فانيليا",
      "شوكولاتة",
      "فراولة"
    ],
    "ingredients": [
      "حليب طازج",
      "كريمة خفق",
      "نكهة طبيعية"
    ]
  },
  {
    "id": "ice-cup-large",
    "category": "icecream",
    "categoryLabel": "قسم الآيس كريم",
    "name": "قدح آيس كريم كبير",
    "subtitle": "حجم كبير غني بطبقات الآيس كريم اللذيذة",
    "description": "قدح آيس كريم كبير مشبع بالنكهات اللذيذة مع رشة توبينج وصوص.",
    "price": 2000,
    "priceDisplay": "2,000 د.ع",
    "servingNote": "حجم كبير",
    "illustration": "arabic_mastic_icecream",
    "flavors": [
      "شوكولاتة",
      "فانيليا",
      "فستق"
    ],
    "ingredients": [
      "حليب طازج",
      "كريمة غنية",
      "صوص كراميل أو كاكاو"
    ]
  },
  {
    "id": "soft-cup-small",
    "category": "icecream",
    "categoryLabel": "قسم الآيس كريم",
    "name": "قدح مكينة صغير سوف",
    "subtitle": "سوفت آيس كريم ماكينة ناعم ومخملي",
    "description": "آيس كريم الماكينة المخملي البارد القوام الناعم اللذيذ.",
    "price": 1000,
    "priceDisplay": "1,000 د.ع",
    "servingNote": "سوفت سيرف ناعم",
    "illustration": "signature_splash_cone",
    "flavors": [
      "فانيليا ماكينة",
      "شوكولاتة ماكينة",
      "مكس"
    ],
    "ingredients": [
      "مزيج سوفت حليبي ناعم"
    ]
  },
  {
    "id": "soft-cup-large",
    "category": "icecream",
    "categoryLabel": "قسم الآيس كريم",
    "name": "قدح مكينة سوف كبير",
    "subtitle": "قدح كبير من آيس كريم الماكينة المخملي",
    "description": "حجم وفير من آيس كريم المكينة البارد المنعش لأجواء البصرة الصيفية.",
    "price": 2000,
    "priceDisplay": "2,000 د.ع",
    "servingNote": "حجم كبير مشبع",
    "illustration": "signature_splash_cone",
    "flavors": [
      "فانيليا",
      "شوكولاتة",
      "دبل مكس"
    ],
    "ingredients": [
      "مزيج حليب الماكينة المركز"
    ]
  },
  {
    "id": "biscuit-machine",
    "category": "icecream",
    "categoryLabel": "قسم الآيس كريم",
    "name": "بسكويت مكينة",
    "subtitle": "كورن بسكويت مقرمش مع سوفت آيس كريم",
    "description": "بسكويت قمعي مقرمش يعلوه آيس كريم الماكينة الطازج واللذيذ.",
    "price": 1000,
    "priceDisplay": "1,000 د.ع",
    "servingNote": "كورن مقرمش",
    "illustration": "signature_splash_cone",
    "flavors": [
      "فانيليا",
      "شوكولاتة"
    ],
    "ingredients": [
      "بسكويت مقرمش",
      "آيس كريم سوفت"
    ]
  },
  {
    "id": "biscuit-shell",
    "category": "icecream",
    "categoryLabel": "قسم الآيس كريم",
    "name": "بسكويت قوقعة",
    "subtitle": "بسكويت القوقعة المميز محشو بالآيس كريم الفاخر",
    "description": "بسكويت القوقعة الفريد والمقرمش مع كرات آيس كريم غنية وإضافات شهية.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "تقديم قوقعة فاخر",
    "illustration": "pistachio_saffron_cup",
    "flavors": [
      "نكهات متعددة",
      "شوكولاتة وفستق"
    ],
    "ingredients": [
      "بسكويت قوقعة خاص",
      "آيس كريم مشكل",
      "صوص ومكسرات"
    ]
  },
  {
    "id": "ice-quarter-kilo",
    "category": "icecream",
    "categoryLabel": "قسم الآيس كريم",
    "name": "ربع كيلو ايس كريم مشكل",
    "subtitle": "عبوة ربع كيلو مشكلة بنكهات رتولة المختارة",
    "description": "بوكس ربع كيلو مناسب للمشاركة السريعة والتحلية الفردية المميزة.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "علبة حفظ باردة 250 جم",
    "illustration": "family_happiness_box",
    "flavors": [
      "مشكل حسب الرغبة"
    ],
    "ingredients": [
      "آيس كريم طبيعي بنكهات مختارة"
    ]
  },
  {
    "id": "ice-half-kilo",
    "category": "icecream",
    "categoryLabel": "قسم الآيس كريم",
    "name": "نص كيلو آيس كريم مشكل",
    "subtitle": "علبة نص كيلو عائلية بنكهاتكم المفضلة",
    "description": "نصف كيلو من الآيس كريم الطازج المشكل بالعلبة الحافظة للبرودة.",
    "price": 6000,
    "priceDisplay": "6,000 د.ع",
    "servingNote": "علبة عائلية 500 جم",
    "illustration": "family_happiness_box",
    "flavors": [
      "تشكيلة نكهات رتولة"
    ],
    "ingredients": [
      "آيس كريم حليبي وفاكهي متنوع"
    ]
  },
  {
    "id": "ice-kilo",
    "category": "icecream",
    "categoryLabel": "قسم الآيس كريم",
    "name": "كيلو آيس كريم مشكل",
    "subtitle": "بوكس الكيلو الكامل للعائلة والجمعات",
    "description": "كيلو كامل من أشهى أصناف الآيس كريم من مرطبات رتولة لسهرات البصرة.",
    "price": 12000,
    "priceDisplay": "12,000 د.ع",
    "servingNote": "علبة كبيرة 1000 جم",
    "highlightTag": "الأوفر للعائلة",
    "illustration": "family_happiness_box",
    "flavors": [
      "كافة النكهات المختارة"
    ],
    "ingredients": [
      "كيلو آيس كريم مشكل فاخر"
    ]
  },
  {
    "id": "gelato-special",
    "category": "icecream",
    "categoryLabel": "قسم الآيس كريم",
    "name": "جيلاتو إيطالي",
    "subtitle": "جيلاتو كريمي كثيف محضر بالطريقة الإيطالية",
    "description": "قوام مخملي قليل الدسم عالي النكهة والنعومة.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "كوب جيلاتو مميز",
    "illustration": "arabic_mastic_icecream",
    "flavors": [
      "فستق حلبي",
      "شوكولاتة داكنة",
      "توت بري"
    ],
    "ingredients": [
      "حليب مركز",
      "نكهات طبيعية 100%"
    ]
  },
  {
    "id": "hala-nutella",
    "category": "desserts",
    "categoryLabel": "قسم الحلويات الباردة",
    "name": "حلا نوتيلا",
    "subtitle": "طبقات من الشوكولاتة والكريمة الغنية بالنوتيلا الأصيلة",
    "description": "كاس حلا بارد بطبقات البسكويت والشوكولاتة وصوص النوتيلا اللذيذ.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "يُقدم بارداً",
    "illustration": "lotus_caramel_sundae",
    "flavors": [
      "نوتيلا بندق",
      "كريمة باردة"
    ],
    "ingredients": [
      "بسكويت",
      "نوتيلا",
      "كريمة مخفوقة"
    ]
  },
  {
    "id": "hala-pistachio",
    "category": "desserts",
    "categoryLabel": "قسم الحلويات الباردة",
    "name": "حلا بستاشيو",
    "subtitle": "كريمي غني بزبدة الفستق الحلبي الطبيعي",
    "description": "حلا طبقات بارد ومترف بزبدة الفستق الفاخرة ورشة الفستق الحلبي المقرمش.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "يُقدم بارداً",
    "illustration": "pistachio_saffron_cup",
    "flavors": [
      "فستق حلبي",
      "كريمة فاخرة"
    ],
    "ingredients": [
      "زبدة الفستق",
      "بسكويت هش",
      "فستق مطحون"
    ]
  },
  {
    "id": "hala-lotus",
    "category": "desserts",
    "categoryLabel": "قسم الحلويات الباردة",
    "name": "حلا لوتس",
    "subtitle": "حلا بسكويت اللوتس المكرمل وزبدة اللوتس الأصلية",
    "description": "تدرج نكهات البسكويت المكرمل مع طبقة كريمة ناعمة ولمسة قرفة خفيفة.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "يُقدم بارداً",
    "illustration": "lotus_caramel_sundae",
    "flavors": [
      "لوتس بلجيكي",
      "كراميل"
    ],
    "ingredients": [
      "بسكويت لوتس",
      "زبدة لوتس",
      "كريمة"
    ]
  },
  {
    "id": "hala-kinder",
    "category": "desserts",
    "categoryLabel": "قسم الحلويات الباردة",
    "name": "حلا كندر",
    "subtitle": "مذاق شوكولاتة كندر بوينو بالحليب والبندق",
    "description": "حلا بارد مميز لعشاق شوكولاتة الكندر بالحليب السلس وصوص الكندر الغني.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "يُقدم بارداً",
    "illustration": "luqaimat_nutella_icecream",
    "flavors": [
      "شوكولاتة كندر",
      "حليب وبندق"
    ],
    "ingredients": [
      "شوكولاتة كندر",
      "بسكويت",
      "كريمة الحليب"
    ]
  },
  {
    "id": "cake-slice-small",
    "category": "desserts",
    "categoryLabel": "قسم الحلويات الباردة",
    "name": "كيك قطعة صغيرة",
    "subtitle": "شريحة كيك طازجة وهشة بنكهة اليوم",
    "description": "قطعة كيك فردية شهية مناسبة مع القهوة والمشروبات الباردة.",
    "price": 2000,
    "priceDisplay": "2,000 د.ع",
    "servingNote": "قطعة فردية",
    "illustration": "berry_chocolate_waffle",
    "flavors": [
      "شوكولاتة",
      "فانيليا"
    ],
    "ingredients": [
      "كيك إسفنجي طازج",
      "كريمة خفيفة"
    ]
  },
  {
    "id": "cake-medium",
    "category": "desserts",
    "categoryLabel": "قسم الحلويات الباردة",
    "name": "كيك وسط",
    "subtitle": "كيكة حجم وسط تكفي للمشاركة والتحلية الممتعة",
    "description": "كيك محضر بحرفية ومزين بصوصات شهية وفواكه أو شوكولاتة.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "حجم وسط",
    "illustration": "berry_chocolate_waffle",
    "flavors": [
      "شوكولاتة غنية",
      "فواكه"
    ],
    "ingredients": [
      "كيك طازج",
      "طبقات جناش وكريمة"
    ]
  },
  {
    "id": "crepe-nutella",
    "category": "desserts",
    "categoryLabel": "قسم الكريب والوافل",
    "name": "كريب نوتيلا",
    "subtitle": "كريب فرنسي رقيق غارق بشوكولاتة النوتيلا الأصلية",
    "description": "عجينة كريب طازجة تخبز فور الطلب وتُغلف بطبقة سخية من النوتيلا.",
    "price": 4000,
    "priceDisplay": "4,000 د.ع",
    "servingNote": "يُحضر طازجاً وساخناً",
    "illustration": "nutella_banana_crepe",
    "flavors": [
      "نوتيلا بندق"
    ],
    "ingredients": [
      "عجينة كريب فرنسية",
      "شوكولاتة نوتيلا"
    ]
  },
  {
    "id": "crepe-lotus",
    "category": "desserts",
    "categoryLabel": "قسم الكريب والوافل",
    "name": "كريب لوتس",
    "subtitle": "كريب ساخن مغطى بزبدة وبسكويت اللوتس البلجيكي",
    "description": "تناغم رائع بين قرمشة اللوتس وحرارة الكريب الطازج الناعم.",
    "price": 4000,
    "priceDisplay": "4,000 د.ع",
    "servingNote": "يُحضر فور الطلب",
    "illustration": "nutella_banana_crepe",
    "flavors": [
      "لوتس مكرمل"
    ],
    "ingredients": [
      "كريب طازج",
      "زبدة لوتس",
      "بسكويت لوتس مجروش"
    ]
  },
  {
    "id": "crepe-pistachio",
    "category": "desserts",
    "categoryLabel": "قسم الكريب والوافل",
    "name": "كريب بستاشيو",
    "subtitle": "كريب فاخر مغطى بكريمة الفستق الحلبي الأصلي",
    "description": "طعم غني من زبدة الفستق الحلبي مع رشة وفيرة من الفستق المحمص.",
    "price": 4000,
    "priceDisplay": "4,000 د.ع",
    "servingNote": "يُحضر فور الطلب",
    "illustration": "nutella_banana_crepe",
    "flavors": [
      "فستق حلبي فاخر"
    ],
    "ingredients": [
      "كريب رقيق",
      "زبدة بستاشيو",
      "فستق حلبي"
    ]
  },
  {
    "id": "crepe-mix",
    "category": "desserts",
    "categoryLabel": "قسم الكريب والوافل",
    "name": "كريب مكس",
    "subtitle": "مزيج مشكل من النوتيلا واللوتس والبستاشيو معاً",
    "description": "التشكيلة الملكية التي تجمع كل الصوصات الشهية في طبق كريب واحد.",
    "price": 5000,
    "priceDisplay": "5,000 د.ع",
    "servingNote": "مكس صوصات ثلاثي",
    "illustration": "nutella_banana_crepe",
    "flavors": [
      "نوتيلا",
      "لوتس",
      "بستاشيو"
    ],
    "ingredients": [
      "كريب",
      "ثلاث صوصات فاخرة",
      "توبينج مشكل"
    ]
  },
  {
    "id": "waffle-oreo",
    "category": "desserts",
    "categoryLabel": "قسم الكريب والوافل",
    "name": "وافل اوريو",
    "subtitle": "وافل بلجيكي مقرمش مع فتات بسكويت الأوريو والشوكولاتة",
    "description": "مربعات الوافل الذهبية الهشة محشوة ومغطاة بصوص الشوكولاتة والأوريو.",
    "price": 4000,
    "priceDisplay": "4,000 د.ع",
    "servingNote": "مقرمش وساخن",
    "illustration": "berry_chocolate_waffle",
    "flavors": [
      "أوريو",
      "شوكولاتة الحليب"
    ],
    "ingredients": [
      "وافل بلجيكي",
      "بسكويت أوريو",
      "صوص شوكولاتة"
    ]
  },
  {
    "id": "waffle-lotus",
    "category": "desserts",
    "categoryLabel": "قسم الكريب والوافل",
    "name": "وافل لوتس",
    "subtitle": "وافل مذهب ساخن غارق بزبدة اللوتس الشهيرة",
    "description": "قرمشة خفيفة من الخارج وقوام هش من الداخل مع صوص اللوتس الدافئ.",
    "price": 4000,
    "priceDisplay": "4,000 د.ع",
    "servingNote": "طازج وساخن",
    "illustration": "berry_chocolate_waffle",
    "flavors": [
      "لوتس مكرمل"
    ],
    "ingredients": [
      "وافل بلجيكي",
      "صوص لوتس",
      "بسكويت مجروش"
    ]
  },
  {
    "id": "waffle-nutella",
    "category": "desserts",
    "categoryLabel": "قسم الكريب والوافل",
    "name": "وافل نوتيلا",
    "subtitle": "الكلاسيك المفضل مع صوص النوتيلا الغزير",
    "description": "وافل مقرمش ذهبي يغمر بالكامل بالنوتيلا الغنية بالبندق.",
    "price": 4000,
    "priceDisplay": "4,000 د.ع",
    "servingNote": "طازج وساخن",
    "illustration": "berry_chocolate_waffle",
    "flavors": [
      "نوتيلا"
    ],
    "ingredients": [
      "وافل",
      "شوكولاتة نوتيلا"
    ]
  },
  {
    "id": "waffle-mix",
    "category": "desserts",
    "categoryLabel": "قسم الكريب والوافل",
    "name": "وافل مكس",
    "subtitle": "وافل مشكل بألذ الصوصات (نوتيلا ولوتس وبستاشيو)",
    "description": "لوحة من المذاقات المتنوعة في قطعة وافل واحدة مشبعة ولذيذة.",
    "price": 5000,
    "priceDisplay": "5,000 د.ع",
    "servingNote": "تشكيلة صوصات ملكية",
    "illustration": "berry_chocolate_waffle",
    "flavors": [
      "مكس صوصات"
    ],
    "ingredients": [
      "وافل بلجيكي",
      "نوتيلا",
      "لوتس",
      "بستاشيو"
    ]
  },
  {
    "id": "waffle-pistachio",
    "category": "desserts",
    "categoryLabel": "قسم الكريب والوافل",
    "name": "وافل بستاشيو",
    "subtitle": "وافل خاص بزبدة الفستق الحلبي الأخضر الفاخر",
    "description": "وافل بلجيكي محضر بعناية ومغطى بكريمة الفستق الحلبي الأصيلة.",
    "price": 5000,
    "priceDisplay": "5,000 د.ع",
    "servingNote": "طازج فور الطلب",
    "illustration": "berry_chocolate_waffle",
    "flavors": [
      "فستق حلبي"
    ],
    "ingredients": [
      "وافل",
      "زبدة بستاشيو نقية",
      "فستق حلبي مجروش"
    ]
  },
  {
    "id": "pancake-nutella",
    "category": "desserts",
    "categoryLabel": "قسم البان كيك",
    "name": "بان كيك نوتلا",
    "subtitle": "أقراص بان كيك ذهبية هشة غارقة بالنوتيلا",
    "description": "بان كيك طري إسفنجي يذوب في الفم مع صوص النوتيلا الدافئ.",
    "price": 4000,
    "priceDisplay": "4,000 د.ع",
    "servingNote": "طبقات بان كيك ساخنة",
    "illustration": "nutella_banana_crepe",
    "flavors": [
      "نوتيلا"
    ],
    "ingredients": [
      "بان كيك أمريكي طازج",
      "نوتيلا"
    ]
  },
  {
    "id": "pancake-lotus",
    "category": "desserts",
    "categoryLabel": "قسم البان كيك",
    "name": "بان كيك لوتس",
    "subtitle": "بان كيك خفيف وطري بصوص وبسكويت اللوتس",
    "description": "أقراص البان كيك المخبوزة طازجاً مغطاة بزبدة اللوتس الشهية.",
    "price": 4000,
    "priceDisplay": "4,000 د.ع",
    "servingNote": "طازج وساخن",
    "illustration": "nutella_banana_crepe",
    "flavors": [
      "لوتس"
    ],
    "ingredients": [
      "بان كيك",
      "زبدة وبسكويت لوتس"
    ]
  },
  {
    "id": "pancake-pistachio",
    "category": "desserts",
    "categoryLabel": "قسم البان كيك",
    "name": "بان كيك بستاشيو",
    "subtitle": "بان كيك ترف بكريمة الفستق الحلبي الغنية",
    "description": "قوام إسفنجي هش مع لمسة البستاشيو الفاخرة والفستق المجروش.",
    "price": 5000,
    "priceDisplay": "5,000 د.ع",
    "servingNote": "طازج فور الطلب",
    "illustration": "nutella_banana_crepe",
    "flavors": [
      "فستق حلبي"
    ],
    "ingredients": [
      "بان كيك",
      "كريمة بستاشيو",
      "فستق"
    ]
  },
  {
    "id": "mini-pancake-nutella",
    "category": "desserts",
    "categoryLabel": "قسم البان كيك",
    "name": "مني بان كيك نوتلا",
    "subtitle": "حبات ميني بان كيك صغيرة لطيفة مغطاة بالنوتيلا",
    "description": "قطع صغيرة من البان كيك اللذيذ سهلة التناول ومغرقة بالنوتيلا.",
    "price": 5000,
    "priceDisplay": "5,000 د.ع",
    "servingNote": "طبق حبات ميني بان كيك",
    "illustration": "luqaimat_nutella_icecream",
    "flavors": [
      "نوتيلا"
    ],
    "ingredients": [
      "ميني بان كيك",
      "نوتيلا غنية"
    ]
  },
  {
    "id": "mini-pancake-lotus",
    "category": "desserts",
    "categoryLabel": "قسم البان كيك",
    "name": "مني بان كيك لوتس",
    "subtitle": "ميني بان كيك هش مغطى بزبدة اللوتس المقرمشة",
    "description": "حبات ميني بان كيك خفيفة وممتعة في كل قضمة مع صوص اللوتس اللذيذ.",
    "price": 5000,
    "priceDisplay": "5,000 د.ع",
    "servingNote": "طبق ميني بان كيك",
    "illustration": "luqaimat_nutella_icecream",
    "flavors": [
      "لوتس"
    ],
    "ingredients": [
      "ميني بان كيك",
      "زبدة وبسكويت لوتس"
    ]
  },
  {
    "id": "mini-pancake-mix",
    "category": "desserts",
    "categoryLabel": "قسم البان كيك",
    "name": "مني بان كيك مكس",
    "subtitle": "ميني بان كيك مشكل بجميع الصوصات الفاخرة",
    "description": "طبق ميني بان كيك مشكل يجمع نوتيلا ولوتس وبستاشيو في تجربة واحدة.",
    "price": 6000,
    "priceDisplay": "6,000 د.ع",
    "servingNote": "طبق مكس ملكي",
    "illustration": "luqaimat_nutella_icecream",
    "flavors": [
      "مكس نوتيلا ولوتس وبستاشيو"
    ],
    "ingredients": [
      "ميني بان كيك",
      "صوصات ثلاثية"
    ]
  },
  {
    "id": "mojito-strawberry",
    "category": "mojito",
    "categoryLabel": "قسم الموهيتو المنعش",
    "name": "موهيتو فراولة",
    "subtitle": "انتعاش الصودا والنعناع والليمون مع صوص الفراولة الطبيعي",
    "description": "موهيتو مثلج فوار بنكهة الفراولة الطازجة ولمسات النعناع البارد.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "كاس بارد مثلج مع نعناع وليمون",
    "illustration": "pomegranate_berry_slush",
    "flavors": [
      "فراولة",
      "نعناع وليمون"
    ],
    "ingredients": [
      "صودا فوارة",
      "سيرب فراولة طبيعي",
      "نعناع طازج",
      "ثلج"
    ]
  },
  {
    "id": "mojito-berry",
    "category": "mojito",
    "categoryLabel": "قسم الموهيتو المنعش",
    "name": "موهيتو توت",
    "subtitle": "موهيتو التوت الأزرق والأحمر المثلج",
    "description": "مشروب موهيتو منعش وغني بنكهات التوت البري والنعناع الأخضر.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "مثلج فوار",
    "illustration": "pomegranate_berry_slush",
    "flavors": [
      "توت بري",
      "نعناع"
    ],
    "ingredients": [
      "توت مركز",
      "صودا",
      "ليمون ونعناع",
      "ثلج"
    ]
  },
  {
    "id": "mojito-blue",
    "category": "mojito",
    "categoryLabel": "قسم الموهيتو المنعش",
    "name": "موهيتو بلو",
    "subtitle": "موهيتو بلو كوراساو الأزرق المنعش والشهير",
    "description": "لون أزرق جذاب وطعم استوائي بارد لمقاومة حرارة البصرة.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "استوائي بارد",
    "illustration": "pomegranate_berry_slush",
    "flavors": [
      "بلو لاجون",
      "حمضيات ونعناع"
    ],
    "ingredients": [
      "سيرب بلو كوراساو",
      "صودا",
      "شرائح ليمون",
      "نعناع"
    ]
  },
  {
    "id": "mojito-passion",
    "category": "mojito",
    "categoryLabel": "قسم الموهيتو المنعش",
    "name": "موهيتو باشن فروت",
    "subtitle": "طعم الباشن فروت الاستوائي الحامض الحلو",
    "description": "موهيتو باشن فروت غني بنكهة الفاكهة الاستوائية الفواحة.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "استوائي منعش",
    "illustration": "tropical_mango_cocktail",
    "flavors": [
      "باشن فروت"
    ],
    "ingredients": [
      "لب باشن فروت",
      "صودا",
      "نعناع طازج",
      "ثلج"
    ]
  },
  {
    "id": "mojito-pineapple",
    "category": "mojito",
    "categoryLabel": "قسم الموهيتو المنعش",
    "name": "موهيتو اناناس",
    "subtitle": "انتعاش الأناناس الطبيعي مع الصودا والنعناع",
    "description": "موهيتو استوائي بارد مع عصير وسيرب الأناناس اللذيذ.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "مثلج منعش",
    "illustration": "tropical_mango_cocktail",
    "flavors": [
      "أناناس",
      "ليمون ونعناع"
    ],
    "ingredients": [
      "نكهة أناناس طبيعية",
      "صودا",
      "ليمون",
      "نعناع"
    ]
  },
  {
    "id": "mojito-bubblegum",
    "category": "mojito",
    "categoryLabel": "قسم الموهيتو المنعش",
    "name": "موهيتو بابل كام",
    "subtitle": "نكهة العلكة الوردية المميزة والمحبوبة",
    "description": "موهيتو مبتكر ومرح بنكهة البابل كام الطفولية الفوارة.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "فوار ومرح",
    "illustration": "pomegranate_berry_slush",
    "flavors": [
      "بابل كام وردي"
    ],
    "ingredients": [
      "سيرب بابل كام",
      "صودا",
      "ثلج ونعناع"
    ]
  },
  {
    "id": "mojito-peach",
    "category": "mojito",
    "categoryLabel": "قسم الموهيتو المنعش",
    "name": "موهيتو خوخ",
    "subtitle": "طعم الخوخ الحلو المنعش مع الليمون والنعناع",
    "description": "موهيتو الخوخ الصيفي المنعش بألوانه الرائعة وطعمه المروي للعطش.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "خوخ صيفي بارد",
    "illustration": "tropical_mango_cocktail",
    "flavors": [
      "خوخ حلو",
      "ليمون"
    ],
    "ingredients": [
      "نكهة خوخ طبيعي",
      "صودا",
      "نعناع",
      "ثلج"
    ]
  },
  {
    "id": "mojito-apple",
    "category": "mojito",
    "categoryLabel": "قسم الموهيتو المنعش",
    "name": "موهيتو تفاح",
    "subtitle": "موهيتو التفاح الأخضر المقرمش والحامض المنعش",
    "description": "انتعاش التفاح الأخضر مع لمسة الليمون الحامض والنعناع والغازات الباردة.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "تفاح أخضر بارد",
    "illustration": "pomegranate_berry_slush",
    "flavors": [
      "تفاح أخضر",
      "نعناع"
    ],
    "ingredients": [
      "سيرب تفاح أخضر",
      "صودا",
      "شرائح ليمون",
      "نعناع"
    ]
  },
  {
    "id": "mojito-sunset",
    "category": "mojito",
    "categoryLabel": "قسم الموهيتو المنعش",
    "name": "موهيتو غروب الشمس",
    "subtitle": "تدرج لوني ساحر بنكهات الفواكه الاستوائية المتعددة",
    "description": "موهيتو بطبقات متدرجة تحاكي ألوان غروب شمس شط العرب في البصرة.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "طبقات ملونة",
    "highlightTag": "الأكثر طلباً",
    "illustration": "tropical_mango_cocktail",
    "flavors": [
      "مكس فواكه استوائية",
      "رمان وبرتقال"
    ],
    "ingredients": [
      "سيرب رمان وبرتقال",
      "صودا",
      "نعناع وليمون"
    ]
  },
  {
    "id": "mojito-apricot",
    "category": "mojito",
    "categoryLabel": "قسم الموهيتو المنعش",
    "name": "موهيتو مشمش",
    "subtitle": "حلاوة المشمش الطبيعي مع قوام فوار منعش",
    "description": "موهيتو بنكهة المشمش الشرقية الغنية الممتعة والباردة.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "مشمش مثلج",
    "illustration": "tropical_mango_cocktail",
    "flavors": [
      "مشمش"
    ],
    "ingredients": [
      "سيرب مشمش",
      "صودا",
      "نعناع",
      "ثلج"
    ]
  },
  {
    "id": "mojito-lemon",
    "category": "mojito",
    "categoryLabel": "قسم الموهيتو المنعش",
    "name": "موهيتو ليمون",
    "subtitle": "الموهيتو الكلاسيكي الأصلي بالليمون الطبيعي والنعناع",
    "description": "أصل الموهيتو؛ ليمون طازج معصور مع أوراق النعناع الفواحة والصودا.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "كلاسيك أصلي",
    "illustration": "pomegranate_berry_slush",
    "flavors": [
      "ليمون طبيعي",
      "نعناع أخضر"
    ],
    "ingredients": [
      "ليمون معصور",
      "نعناع طازج",
      "صودا",
      "سكر خفيف"
    ]
  },
  {
    "id": "mojito-mix-berry",
    "category": "mojito",
    "categoryLabel": "قسم الموهيتو المنعش",
    "name": "مكس بيري",
    "subtitle": "مزيج التوت الأسود والأزرق والأحمر المنعش",
    "description": "انفجار من نكهات التوت المشكل مع الثلج المجروش والصودا.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "توت مشكل فوار",
    "illustration": "pomegranate_berry_slush",
    "flavors": [
      "توت مشكل",
      "نعناع"
    ],
    "ingredients": [
      "توت أحمر وأزرق وأسود",
      "صودا",
      "نعناع وثلج"
    ]
  },
  {
    "id": "juice-orange",
    "category": "juices",
    "categoryLabel": "قسم العصائر الطبيعية",
    "name": "عصير برتقال طبيعي",
    "subtitle": "برتقال طبيعي طازج معصور 100% بدون إضافات",
    "description": "فيتامين سي طبيعي بارد ومنعش معصور يومياً في المحل.",
    "price": 4000,
    "priceDisplay": "4,000 د.ع",
    "servingNote": "طازج 100%",
    "illustration": "tropical_mango_cocktail",
    "flavors": [
      "برتقال طازج"
    ],
    "ingredients": [
      "برتقال طبيعي 100%"
    ]
  },
  {
    "id": "juice-lemon",
    "category": "juices",
    "categoryLabel": "قسم العصائر الطبيعية",
    "name": "عصير ليمون طبيعي",
    "subtitle": "ليموناضة طبيعية منعشة ومبردة لحر الصيف",
    "description": "عصير الليمون المنعش مع لمسة نعناع خفيفة وثلج.",
    "price": 4000,
    "priceDisplay": "4,000 د.ع",
    "servingNote": "بارد ومنعش",
    "illustration": "tropical_mango_cocktail",
    "flavors": [
      "ليمون"
    ],
    "ingredients": [
      "ليمون طازج",
      "ماء مثلج",
      "سكر خفيف"
    ]
  },
  {
    "id": "juice-banana",
    "category": "juices",
    "categoryLabel": "قسم العصائر الطبيعية",
    "name": "عصير موز بالحليب",
    "subtitle": "موز طازج مخفوق مع الحليب الكريمي البارد",
    "description": "مشروب مغذي ولذيذ يعطيك طاقة وانتعاش فوري.",
    "price": 4000,
    "priceDisplay": "4,000 د.ع",
    "servingNote": "مخفوق طازج",
    "illustration": "tropical_mango_cocktail",
    "flavors": [
      "موز بالحليب"
    ],
    "ingredients": [
      "موز طازج",
      "حليب كامل الدسم"
    ]
  },
  {
    "id": "juice-strawberry",
    "category": "juices",
    "categoryLabel": "قسم العصائر الطبيعية",
    "name": "عصير فراولة طبيعي",
    "subtitle": "فراولة طازجة مخفوقة وباردة بقوام غني",
    "description": "عصير الفراولة الطبيعي بألوانه الزاهية وطعمه الصيفي المحبوب.",
    "price": 4000,
    "priceDisplay": "4,000 د.ع",
    "servingNote": "طبيعي وطازج",
    "illustration": "pomegranate_berry_slush",
    "flavors": [
      "فراولة طبيعية"
    ],
    "ingredients": [
      "فراولة طازجة",
      "ثلج خفيف"
    ]
  },
  {
    "id": "juice-watermelon",
    "category": "juices",
    "categoryLabel": "قسم العصائر الطبيعية",
    "name": "عصير بطيخ أحمر (رقي)",
    "subtitle": "عصير البطيخ الأحمر البارد المروي الأول للعطش",
    "description": "عصير الرقي العراقي اللذيذ والبارد الخالي من أي مواد حافظة.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "مثلج طبيعي",
    "illustration": "tropical_mango_cocktail",
    "flavors": [
      "بطيخ أحمر"
    ],
    "ingredients": [
      "بطيخ طبيعي معصور وبارد"
    ]
  },
  {
    "id": "juice-qamar-eldin",
    "category": "juices",
    "categoryLabel": "قسم العصائر الطبيعية",
    "name": "عصير قمر الدين",
    "subtitle": "المشروب التراثي اللذيذ من المشمش المجفف الفاخر",
    "description": "طعم شرقي أصيل وقوام مخملي محضر على الأصول.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "تراثي بارد",
    "illustration": "tropical_mango_cocktail",
    "flavors": [
      "مشمش قمر الدين"
    ],
    "ingredients": [
      "قمر الدين أصلي",
      "ماء الورد"
    ]
  },
  {
    "id": "juice-banana-strawberry",
    "category": "juices",
    "categoryLabel": "قسم العصائر الطبيعية",
    "name": "عصير موز وفراولة",
    "subtitle": "الكوكتيل الثنائي الكلاسيكي الأكثر طلباً",
    "description": "مزيج الموز الكريمي مع حلاوة الفراولة الطازجة في كاس واحد متناسق.",
    "price": 4000,
    "priceDisplay": "4,000 د.ع",
    "servingNote": "كوكتيل ثنائي",
    "illustration": "tropical_mango_cocktail",
    "flavors": [
      "موز وفراولة"
    ],
    "ingredients": [
      "موز طازج",
      "فراولة طبيعية",
      "حليب خفيف"
    ]
  },
  {
    "id": "icetea-peach",
    "category": "juices",
    "categoryLabel": "قسم الآيس تي",
    "name": "آيس تي خوخ",
    "subtitle": "شاي مثلج بنكهة الخوخ الباردة والمنعشة",
    "description": "شاي أسود منقى مع لمسات الخوخ الطبيعي وقطع الثلج.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "شاي مثلج",
    "illustration": "zabib_basrawi_iced",
    "flavors": [
      "خوخ",
      "شاي"
    ],
    "ingredients": [
      "شاي مثلج",
      "نكهة خوخ طبيعي",
      "ثلج"
    ]
  },
  {
    "id": "icetea-berry",
    "category": "juices",
    "categoryLabel": "قسم الآيس تي",
    "name": "آيس تي توت",
    "subtitle": "شاي مثلج غني بالتوت المنعش",
    "description": "مشروب صيفي خفيف يجمع نكهة الشاي مع حلاوة التوت البارد.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "شاي مثلج بالتوت",
    "illustration": "zabib_basrawi_iced",
    "flavors": [
      "توت",
      "شاي"
    ],
    "ingredients": [
      "شاي مثلج",
      "سيرب توت",
      "ثلج"
    ]
  },
  {
    "id": "icetea-passion",
    "category": "juices",
    "categoryLabel": "قسم الآيس تي",
    "name": "آيس تي باشن",
    "subtitle": "شاي مثلج استوائي بنكهة الباشن فروت",
    "description": "لمسة استوائية فواحة تضفي حيوية خاصة على كوب الشاي المثلج.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "استوائي مثلج",
    "illustration": "zabib_basrawi_iced",
    "flavors": [
      "باشن فروت",
      "شاي"
    ],
    "ingredients": [
      "شاي أسود منقى",
      "نكهة باشن",
      "ثلج"
    ]
  },
  {
    "id": "icetea-karkadeh",
    "category": "juices",
    "categoryLabel": "قسم الآيس تي",
    "name": "آيس كركدية",
    "subtitle": "كركديه أحمر مثلج طبيعي ومنعش للقلب",
    "description": "المشروب العربي التقليدي البارد بلونه الياقوتي المميز وطعمه الحامض الحلو.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "كركديه بلدي مثلج",
    "illustration": "zabib_basrawi_iced",
    "flavors": [
      "كركديه طبيعي"
    ],
    "ingredients": [
      "أوراق كركديه طبيعية",
      "ماء مثلج",
      "سكر معتدل"
    ]
  },
  {
    "id": "slush-orange",
    "category": "snacks",
    "categoryLabel": "قسم الأزبري",
    "name": "أزبري برتقال",
    "subtitle": "جرانيتا ثلج ناعم بنكهة البرتقال المنعش",
    "description": "سلاش ثلج مجروش ناعم يروي العطش في عز الصيف.",
    "price": 1000,
    "priceDisplay": "1,000 د.ع",
    "servingNote": "كاس أزبري مثلج",
    "illustration": "pomegranate_berry_slush",
    "flavors": [
      "برتقال"
    ],
    "ingredients": [
      "ثلج مجروش",
      "نكهة برتقال"
    ]
  },
  {
    "id": "slush-strawberry",
    "category": "snacks",
    "categoryLabel": "قسم الأزبري",
    "name": "أزبري فراولة",
    "subtitle": "ثلج مجروش وردي بنكهة الفراولة اللذيذة",
    "description": "أزبري الفراولة المحبوب من الكبار والصغار.",
    "price": 1000,
    "priceDisplay": "1,000 د.ع",
    "servingNote": "كوب أزبري مثلج",
    "illustration": "pomegranate_berry_slush",
    "flavors": [
      "فراولة"
    ],
    "ingredients": [
      "ثلج مجروش ناعم",
      "نكهة فراولة"
    ]
  },
  {
    "id": "slush-apricot",
    "category": "snacks",
    "categoryLabel": "قسم الأزبري",
    "name": "أزبري مشمش",
    "subtitle": "ثلج مجروش بنكهة المشمش الحلو المنعش",
    "description": "أزبري مشمش بارد وممتع في كل رشفة.",
    "price": 1000,
    "priceDisplay": "1,000 د.ع",
    "servingNote": "مثلج خفيف",
    "illustration": "pomegranate_berry_slush",
    "flavors": [
      "مشمش"
    ],
    "ingredients": [
      "ثلج ناعم",
      "نكهة مشمش"
    ]
  },
  {
    "id": "slush-lemon",
    "category": "snacks",
    "categoryLabel": "قسم الأزبري",
    "name": "أزبري ليمون",
    "subtitle": "انتعاش الليمون الحامض البارد مع بلورات الثلج",
    "description": "أزبري الليمون الحامض لإعادة الحيوية والنشاط.",
    "price": 1000,
    "priceDisplay": "1,000 د.ع",
    "servingNote": "حامض مثلج",
    "illustration": "pomegranate_berry_slush",
    "flavors": [
      "ليمون"
    ],
    "ingredients": [
      "ثلج مجروش",
      "ليمون"
    ]
  },
  {
    "id": "snack-corn-small",
    "category": "snacks",
    "categoryLabel": "قسم التسلية",
    "name": "ذرة صغير",
    "subtitle": "كوب ذرة مسلوقة ساخنة بالزبدة والبهارات",
    "description": "حبات ذرة حلوة صفراء طازجة وساخنة مع الزبدة والليمون.",
    "price": 1000,
    "priceDisplay": "1,000 د.ع",
    "servingNote": "كوب صغير ساخن",
    "illustration": "datli_icecream_basra",
    "flavors": [
      "ذرة بالزبدة"
    ],
    "ingredients": [
      "ذرة حلوة",
      "زبدة",
      "بهارات خاصة"
    ]
  },
  {
    "id": "snack-corn-large",
    "category": "snacks",
    "categoryLabel": "قسم التسلية",
    "name": "ذرة كبير",
    "subtitle": "حجم كبير من الذرة الصفراء الساخنة المتبلة",
    "description": "كوب ذرة كبير مشبع ومتبل بالزبدة والملح والبهار والليمون.",
    "price": 2000,
    "priceDisplay": "2,000 د.ع",
    "servingNote": "كوب كبير",
    "illustration": "datli_icecream_basra",
    "flavors": [
      "ذرة بالزبدة والليمون"
    ],
    "ingredients": [
      "ذرة طازجة",
      "زبدة ذائبة",
      "بهارات ليمون"
    ]
  },
  {
    "id": "snack-popcorn",
    "category": "snacks",
    "categoryLabel": "قسم التسلية",
    "name": "شامية (فشار)",
    "subtitle": "فشار ذرة مقرمش طازج وخفيف ومملح",
    "description": "شامية ساخنة ومفرقعة طازجة للمتعة في الطريق والجلسات.",
    "price": 1000,
    "priceDisplay": "1,000 د.ع",
    "servingNote": "كيس شامية طازج",
    "illustration": "datli_icecream_basra",
    "flavors": [
      "مملح ومقرمش"
    ],
    "ingredients": [
      "ذرة فشار",
      "زيت نباتي خفيف",
      "ملح"
    ]
  },
  {
    "id": "snack-fries",
    "category": "snacks",
    "categoryLabel": "قسم التسلية",
    "name": "فنكر (بطاطا مقلية)",
    "subtitle": "أصابع بطاطا مقلية مقرمشة وذهبية",
    "description": "فنكر ساخن ومقرمش يُقدم مع الصوص والكاتشب.",
    "price": 1000,
    "priceDisplay": "1,000 د.ع",
    "servingNote": "يُقلى فور الطلب",
    "illustration": "datli_icecream_basra",
    "flavors": [
      "بطاطا مقرمشة"
    ],
    "ingredients": [
      "بطاطا ذهبية",
      "بهارات فنكر"
    ]
  },
  {
    "id": "snack-indomie",
    "category": "snacks",
    "categoryLabel": "قسم التسلية",
    "name": "إندومي",
    "subtitle": "كوب نودلز إندومي ساخن ومبهر",
    "description": "إندومي سريع ولذيذ محضر بالبهارات اللذيذة والشوربة الساخنة.",
    "price": 1000,
    "priceDisplay": "1,000 د.ع",
    "servingNote": "ساخن فور التحضير",
    "illustration": "datli_icecream_basra",
    "flavors": [
      "نكهة الخضار والدجاج"
    ],
    "ingredients": [
      "نودلز إندومي",
      "توابل خاصة"
    ]
  },
  {
    "id": "snack-indomie-large",
    "category": "snacks",
    "categoryLabel": "قسم التسلية",
    "name": "اندومي الحجم الكبير",
    "subtitle": "وجبة إندومي كبيرة مشبعة بنكهات غنية",
    "description": "إندومي حجم كبير ساخن وممتع للجوع السريع في السهرة.",
    "price": 1500,
    "priceDisplay": "1,500 د.ع",
    "servingNote": "حجم كبير مشبع",
    "illustration": "datli_icecream_basra",
    "flavors": [
      "نكهات مشكلة مبهرة"
    ],
    "ingredients": [
      "نودلز إندومي دبل",
      "توابل خاصة"
    ]
  },
  {
    "id": "iced-spanish-latte",
    "category": "shakes_coffee",
    "categoryLabel": "قسم الآيس كوفي",
    "name": "إيس سبانش لاتيه",
    "subtitle": "إسبريسو غني مع الحليب المكثف المحلى والثلج",
    "description": "الآيس كوفي الأكثر شهرة؛ توازن رائع بين مرارة القهوة وحلاوة الحليب الإسباني.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "قهوة مثلجة فاخرة",
    "highlightTag": "الأكثر طلباً",
    "illustration": "zabib_basrawi_iced",
    "flavors": [
      "إسبريسو",
      "حليب مكثف محلى"
    ],
    "ingredients": [
      "شوت إسبريسو",
      "حليب طازج",
      "حليب مكثف",
      "ثلج"
    ]
  },
  {
    "id": "iced-caramel",
    "category": "shakes_coffee",
    "categoryLabel": "قسم الآيس كوفي",
    "name": "إيس كراميل",
    "subtitle": "قهوة مثلجة مع صوص الكراميل الذهبي والحليب",
    "description": "مشروب منعش لمحبي الكراميل الناعم والقهوة الباردة.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "بارد ومكرمل",
    "illustration": "lotus_caramel_sundae",
    "flavors": [
      "كراميل",
      "قهوة مثلجة"
    ],
    "ingredients": [
      "إسبريسو",
      "حليب",
      "صوص كراميل",
      "ثلج"
    ]
  },
  {
    "id": "iced-mocha",
    "category": "shakes_coffee",
    "categoryLabel": "قسم الآيس كوفي",
    "name": "إيس موكا",
    "subtitle": "المزيج الكلاسيكي من الشوكولاتة والإسبريسو والحليب",
    "description": "موكا مثلجة غنية بالكاكاو والقهوة لتعديل المزاج.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "قهوة وشوكولاتة مثلجة",
    "illustration": "lotus_caramel_sundae",
    "flavors": [
      "موكا كاكاو",
      "قهوة"
    ],
    "ingredients": [
      "إسبريسو",
      "شوكولاتة",
      "حليب",
      "ثلج"
    ]
  },
  {
    "id": "iced-hazelnut-latte",
    "category": "shakes_coffee",
    "categoryLabel": "قسم الآيس كوفي",
    "name": "إيس بندق لاتيه",
    "subtitle": "لاتيه مثلج فواح بنكهة البندق المحمص",
    "description": "شوت قهوة باردة مع لمسة البندق العطرية والحليب الرغوي.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "مثلج بالبندق",
    "illustration": "zabib_basrawi_iced",
    "flavors": [
      "بندق محمص",
      "لاتيه"
    ],
    "ingredients": [
      "إسبريسو",
      "سيرب بندق",
      "حليب بارد",
      "ثلج"
    ]
  },
  {
    "id": "cold-milk",
    "category": "shakes_coffee",
    "categoryLabel": "قسم الآيس كوفي",
    "name": "حليب بارد",
    "subtitle": "كوب حليب طازج نقي ومبرد",
    "description": "حليب طازج ونقي مبرد ومنعش وصحي.",
    "price": 1000,
    "priceDisplay": "1,000 د.ع",
    "servingNote": "كوب حليب بارد",
    "illustration": "arabic_mastic_icecream",
    "flavors": [
      "حليب طبيعي"
    ],
    "ingredients": [
      "حليب طازج مبستر"
    ]
  },
  {
    "id": "shake-oreo",
    "category": "shakes_coffee",
    "categoryLabel": "قسم الميلك شيك",
    "name": "ميلك شيك أوريو",
    "subtitle": "آيس كريم الفانيليا مخفوق مع بسكويت الأوريو والشوكولاتة",
    "description": "ميلك شيك كثيف وكريمي يجمع قرمشة الأوريو مع برودة الآيس كريم.",
    "price": 4000,
    "priceDisplay": "4,000 د.ع",
    "servingNote": "شيك سميك وكريمي",
    "illustration": "lotus_caramel_sundae",
    "flavors": [
      "أوريو",
      "شوكولاتة"
    ],
    "ingredients": [
      "آيس كريم فانيليا",
      "بسكويت أوريو",
      "حليب",
      "صوص شوكولاتة"
    ]
  },
  {
    "id": "shake-nutella",
    "category": "shakes_coffee",
    "categoryLabel": "قسم الميلك شيك",
    "name": "ميلك شيك نوتيلا",
    "subtitle": "شيك فاخر بشوكولاتة النوتيلا الغنية بالبندق",
    "description": "مخفوق الآيس كريم بالشوكولاتة والنوتيلا الأصيلة مع صوص داكن.",
    "price": 4000,
    "priceDisplay": "4,000 د.ع",
    "servingNote": "شيك نوتيلا غني",
    "illustration": "lotus_caramel_sundae",
    "flavors": [
      "نوتيلا"
    ],
    "ingredients": [
      "آيس كريم شوكولاتة",
      "نوتيلا",
      "حليب"
    ]
  },
  {
    "id": "shake-lotus",
    "category": "shakes_coffee",
    "categoryLabel": "قسم الميلك شيك",
    "name": "ميلك شيك لوتس",
    "subtitle": "شيك زبدة اللوتس وبسكويت الكراميل المقرمش",
    "description": "ميلك شيك كريمي يذوب بالنكهة البلجيكية وزبدة اللوتس الناعمة.",
    "price": 4000,
    "priceDisplay": "4,000 د.ع",
    "servingNote": "شيك مكرمل",
    "illustration": "lotus_caramel_sundae",
    "flavors": [
      "لوتس"
    ],
    "ingredients": [
      "آيس كريم فانيليا",
      "زبدة لوتس",
      "بسكويت لوتس"
    ]
  },
  {
    "id": "shake-strawberry",
    "category": "shakes_coffee",
    "categoryLabel": "قسم الميلك شيك",
    "name": "ميلك شيك فراولة",
    "subtitle": "آيس كريم الفراولة مع قطع وصوص الفراولة الطازجة",
    "description": "ميلك شيك وردي منعش بنكهة الفراولة الطبيعية وقوام كريمي لذيذ.",
    "price": 4000,
    "priceDisplay": "4,000 د.ع",
    "servingNote": "شيك فراولة طازج",
    "illustration": "pomegranate_berry_slush",
    "flavors": [
      "فراولة طبيعية"
    ],
    "ingredients": [
      "آيس كريم فراولة",
      "حليب",
      "صوص فراولة"
    ]
  },
  {
    "id": "shake-vanilla",
    "category": "shakes_coffee",
    "categoryLabel": "قسم الميلك شيك",
    "name": "ميلك شيك فانيلا",
    "subtitle": "الكلاسيك المخملي من الفانيليا الصافية والآيس كريم",
    "description": "قوام مخفوق ناعم ونكهة فانيليا نقية ومهدئة للأعصاب.",
    "price": 4000,
    "priceDisplay": "4,000 د.ع",
    "servingNote": "كلاسيك فانيليا",
    "illustration": "arabic_mastic_icecream",
    "flavors": [
      "فانيليا نقية"
    ],
    "ingredients": [
      "آيس كريم فانيليا طبيعي",
      "حليب بارد"
    ]
  },
  {
    "id": "shake-pistachio",
    "category": "shakes_coffee",
    "categoryLabel": "قسم الميلك شيك",
    "name": "ميلك شيك بستاشيو",
    "subtitle": "ميلك شيك الفستق الحلبي الفاخر ورشة المكسرات",
    "description": "مخفوق غني ومترف بزبدة الفستق الحلبي والآيس كريم وقوام سميك لا يُقاوم.",
    "price": 5000,
    "priceDisplay": "5,000 د.ع",
    "servingNote": "شيك ملكي فاخر",
    "illustration": "pistachio_saffron_cup",
    "flavors": [
      "فستق حلبي"
    ],
    "ingredients": [
      "آيس كريم فستق",
      "زبدة بستاشيو",
      "حليب",
      "فستق حلبي"
    ]
  },
  {
    "id": "hot-espresso",
    "category": "hot_drinks",
    "categoryLabel": "قسم المشروبات الساخنة",
    "name": "إسبريسو",
    "subtitle": "شوت قهوة إيطالية مركزة برغوة غنية",
    "description": "قهوة إسبريسو صافية وقوية لعشاق النكهة الكثيفة.",
    "price": 2000,
    "priceDisplay": "2,000 د.ع",
    "servingNote": "شوت مركز",
    "illustration": "zabib_basrawi_iced",
    "flavors": [
      "إسبريسو داكن"
    ],
    "ingredients": [
      "بن إيطالي مطحون طازج"
    ]
  },
  {
    "id": "hot-americano",
    "category": "hot_drinks",
    "categoryLabel": "قسم المشروبات الساخنة",
    "name": "أمريكانو",
    "subtitle": "إسبريسو مخفف بالماء الساخن بنكهة متوازنة",
    "description": "كوب قهوة أمريكانو كلاسيكي دافئ بمذاق سلس.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "كوب دافئ",
    "illustration": "zabib_basrawi_iced",
    "flavors": [
      "قهوة سوداء متوازنة"
    ],
    "ingredients": [
      "إسبريسو",
      "ماء ساخن"
    ]
  },
  {
    "id": "hot-cappuccino",
    "category": "hot_drinks",
    "categoryLabel": "قسم المشروبات الساخنة",
    "name": "كابتشينو",
    "subtitle": "إسبريسو مع الحليب المبخر ورغوة حليبية كثيفة",
    "description": "كابتشينو إيطالي أصيل مع رشة كاكاو خفيفة على الرغوة.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "رغوة كريمية دافئة",
    "illustration": "zabib_basrawi_iced",
    "flavors": [
      "قهوة وحليب رغوي"
    ],
    "ingredients": [
      "إسبريسو",
      "حليب مبخر",
      "رغوة حليب"
    ]
  },
  {
    "id": "hot-latte",
    "category": "hot_drinks",
    "categoryLabel": "قسم المشروبات الساخنة",
    "name": "لاتيه",
    "subtitle": "حليب مبخر دافئ مع لمسة خفيفة من الإسبريسو",
    "description": "مشروب ناعم وسلس يبدأ به اليوم أو تختم به السهرة.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "سلس ودافئ",
    "illustration": "zabib_basrawi_iced",
    "flavors": [
      "حليب لاتيه"
    ],
    "ingredients": [
      "إسبريسو",
      "حليب مبخر سلس"
    ]
  },
  {
    "id": "hot-tea-iraqi",
    "category": "hot_drinks",
    "categoryLabel": "قسم المشروبات الساخنة",
    "name": "شاي عراقي مهيّل",
    "subtitle": "شاي عراقي أصيل ومخدر على الفحم بلمسة الهيل",
    "description": "استكانة شاي عراقي ثقيل ومضبوط، عنوان الضيافة وأساس قعدات البصرة.",
    "price": 1000,
    "priceDisplay": "1,000 د.ع",
    "servingNote": "استكان شاي عراقي مخدر",
    "highlightTag": "شاي البصرة الأصيل",
    "illustration": "datli_icecream_basra",
    "flavors": [
      "شاي عراقي مخدر",
      "هيل فواح"
    ],
    "ingredients": [
      "شاي أسود سيلاني فاخر",
      "هيل أخضر",
      "سكر حسب الطلب"
    ]
  },
  {
    "id": "hot-tea-lemon",
    "category": "hot_drinks",
    "categoryLabel": "قسم المشروبات الساخنة",
    "name": "شاي بالليمون",
    "subtitle": "شاي ساخن مع شرائح الليمون الحامض المنعش",
    "description": "مشروب مهدئ ومنعش يجمع دفء الشاي وحموضة الليمون الطبيعي.",
    "price": 1000,
    "priceDisplay": "1,000 د.ع",
    "servingNote": "كوب دافئ مع ليمون",
    "illustration": "datli_icecream_basra",
    "flavors": [
      "شاي وحامض"
    ],
    "ingredients": [
      "شاي أسود",
      "ليمون طبيعي"
    ]
  },
  {
    "id": "hot-karak",
    "category": "hot_drinks",
    "categoryLabel": "قسم المشروبات الساخنة",
    "name": "شاي كرك",
    "subtitle": "شاي هندي مبهر بالحليب والهيل والزعفران والقرنفل",
    "description": "شاي كرك غني ومطبوخ على نار هادئة بطعم ثقيل يدفئ الروح.",
    "price": 2000,
    "priceDisplay": "2,000 د.ع",
    "servingNote": "كرك حار ومبهر",
    "illustration": "datli_icecream_basra",
    "flavors": [
      "كرك",
      "هيل وزعفران"
    ],
    "ingredients": [
      "شاي مركز",
      "حليب مبخر",
      "بهارات كرك خاصة"
    ]
  },
  {
    "id": "hot-lemon-tea",
    "category": "hot_drinks",
    "categoryLabel": "قسم المشروبات الساخنة",
    "name": "شاي ليمون مركز",
    "subtitle": "مشروب الليمون الساخن الطبيعي",
    "description": "عصير ليمون ساخن مع ماء دافئ وعسل أو سكر لتسكين الحلق والراحة.",
    "price": 2000,
    "priceDisplay": "2,000 د.ع",
    "servingNote": "كوب ساخن مهدئ",
    "illustration": "zabib_basrawi_iced",
    "flavors": [
      "ليمون دافئ"
    ],
    "ingredients": [
      "ليمون طازج",
      "ماء ساخن"
    ]
  },
  {
    "id": "hot-chocolate",
    "category": "hot_drinks",
    "categoryLabel": "قسم المشروبات الساخنة",
    "name": "هوت جوكلت",
    "subtitle": "شوكولاتة ساخنة مخملية بالحليب الكامل",
    "description": "كوب شوكولاتة كثيف ودافئ يمنحك شعوراً فورياً بالراحة واللذة.",
    "price": 3000,
    "priceDisplay": "3,000 د.ع",
    "servingNote": "شوكولاتة ساخنة",
    "illustration": "lotus_caramel_sundae",
    "flavors": [
      "شوكولاتة داكنة وحليب"
    ],
    "ingredients": [
      "شوكولاتة بلجيكية",
      "حليب ساخن",
      "كاكاو"
    ]
  },
  {
    "id": "hot-milk",
    "category": "hot_drinks",
    "categoryLabel": "قسم المشروبات الساخنة",
    "name": "حليب حار",
    "subtitle": "كوب حليب دافئ طبيعي مع لمسة هيل أو عسل",
    "description": "حليب طازج مغلي ودافئ ومريح.",
    "price": 1000,
    "priceDisplay": "1,000 د.ع",
    "servingNote": "كوب حليب دافئ",
    "illustration": "arabic_mastic_icecream",
    "flavors": [
      "حليب دافئ"
    ],
    "ingredients": [
      "حليب كامل الدسم"
    ]
  }
];

export const BUILDER_BASES: BuilderOption[] = [
  { id: 'waffle-cone', name: 'كورن وافل مقرمش', note: 'مخبوز يومياً', color: '#C67D3B' },
  { id: 'choco-cone', name: 'كورن بالشوكولاتة والفستق', note: 'حافة مغموسة بالفستق', color: '#4A2818' },
  { id: 'ratoola-cup', name: 'كاس رتولة الخاص', note: 'مناسب لتعدد الطبقات', color: '#1F5653' },
];

export const BUILDER_SCOOPS: ScoopFlavor[] = [
  {
    id: 'belgian-choco',
    name: 'شوكولاتة بلجيكية',
    tasteNote: 'غنية وداكنة',
    colorPrimary: '#4E2C1B',
    colorSecondary: '#2E180D',
  },
  {
    id: 'lemon-vanilla',
    name: 'فانيليا وليمون',
    tasteNote: 'كريمية ومنعشة',
    colorPrimary: '#F7D94C',
    colorSecondary: '#E3B924',
  },
  {
    id: 'raspberry-rose',
    name: 'توت وردي وفراولة',
    tasteNote: 'طعم فاكهي طبيعي',
    colorPrimary: '#D83A82',
    colorSecondary: '#A82260',
  },
  {
    id: 'blue-sky',
    name: 'بلوبيري استوائي',
    tasteNote: 'بارد ومنعش لحر البصرة',
    colorPrimary: '#3898B8',
    colorSecondary: '#226E88',
  },
  {
    id: 'pistachio-green',
    name: 'فستق حلبي فاخر',
    tasteNote: 'بالفستق المحمص',
    colorPrimary: '#7CB54B',
    colorSecondary: '#55872B',
  },
  {
    id: 'mango-sun',
    name: 'مانجو وقشطة',
    tasteNote: 'لب مانجو طبيعي',
    colorPrimary: '#F59E2D',
    colorSecondary: '#D47811',
  },
];

export const BUILDER_SAUCES: BuilderOption[] = [
  { id: 'none', name: 'بدون صوص', note: 'طعم صافي', color: 'transparent' },
  { id: 'hot-fudge', name: 'شوكولاتة بلجيكية', note: 'سبلاش دافئ', color: '#3B1E10' },
  { id: 'berry-drip', name: 'صوص التوت', note: 'توت طبيعي', color: '#D83A82' },
  { id: 'pistachio-cream', name: 'كريمة الفستق', note: 'فستق حلبي', color: '#6AA33E' },
];

export const BUILDER_TOPPINGS: BuilderOption[] = [
  { id: 'crushed-pistachio', name: 'فستق حلبي', note: 'محمص ومجروش', color: '#7CB54B' },
  { id: 'choco-pearls', name: 'كرات شوكولاتة', note: 'ويفر مقرمش', color: '#3E2215' },
  { id: 'lotus-crumbs', name: 'بسكويت لوتس', note: 'مكرمل مقرمش', color: '#C87638' },
  { id: 'fresh-berries', name: 'فواكه طازجة', note: 'توت وفراولة', color: '#D83A82' },
];
