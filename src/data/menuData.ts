export type CategoryId = 'all' | 'basra' | 'cones' | 'waffles' | 'juices';

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
  { id: 'all', label: 'الكل' },
  { id: 'basra', label: 'نكهات البصرة' },
  { id: 'cones', label: 'آيس كريم وموطا' },
  { id: 'waffles', label: 'وافل وكريب' },
  { id: 'juices', label: 'عصائر وكوكتيل' },
];

export const MENU_ITEMS: ProductItem[] = [
  {
    id: 'ratoola-signature-cone',
    category: 'cones',
    categoryLabel: 'كورن رتولة الخاص',
    name: 'كورن رتولة الملكي',
    subtitle: '٤ نكهات مع سبلاش الشوكولاتة البلجيكية',
    description:
      'الصنف الأيقوني المستوحى من بطاقة مرطبات رتولة؛ أربع كرات آيس كريم غنية داخل بسكويت الوافل المقرمش مع تغطية الشوكولاتة البلجيكية الساخنة.',
    servingNote: 'يُقدم في بسكويت وافل مقرمش أو كاس خاص',
    highlightTag: 'الأكثر طلباً',
    illustration: 'signature_splash_cone',
    flavors: ['شوكولاتة بلجيكية', 'فانيليا ليمون', 'توت وردي'],
    ingredients: ['حليب طازج كامل الدسم', 'شوكولاتة بلجيكية داكنة', 'فواكه طبيعية', 'بسكويت وافل محمص'],
  },
  {
    id: 'datli-icecream-basra',
    category: 'basra',
    categoryLabel: 'مشهورات البصرة',
    name: 'داطلي حار مع موطا القشطة',
    subtitle: 'داطلي بصراوي مقرمش حار مع آيس كريم القشطة والفستق',
    description:
      'المزيج المفضل في أمسيات البصرة؛ قطع الداطلي العراقي الذهبي المقرمش والساخن مع كرات موطا القشطة الباردة ورشة الفستق الحلبي والراشي أو العسل.',
    servingNote: 'يُقدم الداطلي ساخناً مع الآيس كريم البارد',
    highlightTag: 'خاص لأهل البصرة',
    illustration: 'datli_icecream_basra',
    flavors: ['داطلي عراقي مقرمش', 'موطا قشطة', 'فستق حلبي'],
    ingredients: ['داطلي محضر طازجاً', 'آيس كريم قشطة بلدية', 'فستق حلبي مجروش', 'شيرة خفيفة'],
  },
  {
    id: 'arabic-pistachio-mastic',
    category: 'cones',
    categoryLabel: 'موطا عربية بالقشطة',
    name: 'بوظة عربية بالفستق الحلبي',
    subtitle: 'قوام مطاطي أصيل بالسحلب الطبيعي والقشطة والفستق',
    description:
      'موطا عربية تقليدية محضرة من الحليب الطازج والسحلب الجبلي والمستكة الأصلية، مغطاة بطبقة كثيفة من الفستق الحلبي المحمص.',
    servingNote: 'تُقدم كشرائح رول أو كاسات بالقشطة',
    highlightTag: 'تحضير يومي',
    illustration: 'arabic_mastic_icecream',
    flavors: ['قشطة وسحلب', 'فستق حلبي', 'مستكة أصلية'],
    ingredients: ['حليب طازج', 'سحلب طبيعي ومستكة', 'قشطة بلدية', 'فستق حلبي درجة أولى'],
  },
  {
    id: 'zabib-basrawi-iced',
    category: 'basra',
    categoryLabel: 'انتعاش صيف البصرة',
    name: 'عصير زبيب بصراوي مثلج',
    subtitle: 'زبيب أسود طبيعي مركز مع الثلج المجروش والنعناع',
    description:
      'مشروب البصرة التراثي الأول لمقاومة الحر؛ عصير زبيب طبيعي محضر على الطريقة البصراوية الأصيلة بلمسة نعناع طازج وثلج مجروش بارد.',
    servingNote: 'يُقدم بارداً جداً مع رغوة الزبيب الغنية',
    highlightTag: 'تراث بصراوي',
    illustration: 'zabib_basrawi_iced',
    flavors: ['زبيب أسود طبيعي', 'نعناع طازج', 'ثلج مجروش'],
    ingredients: ['زبيب عراقي فاخر', 'أوراق نعناع أخضر', 'ماء ورد خفيف', 'ثلج مجروش'],
  },
  {
    id: 'berry-chocolate-waffle',
    category: 'waffles',
    categoryLabel: 'وافل بلجيكي',
    name: 'وافل التوت والشوكولاتة',
    subtitle: 'وافل ذهبي ساخن مع كرتين آيس كريم وتوت طازج',
    description:
      'عجينة وافل خاصة تُخبز فورياً لتكون مقرمشة من الخارج وهشة من الداخل، تُزين بالشوكولاتة البلجيكية وصوص التوت مع الآيس كريم.',
    servingNote: 'يُحضر ساخناً فور الطلب',
    highlightTag: 'يُخبز طازجاً',
    illustration: 'berry_chocolate_waffle',
    flavors: ['شوكولاتة بلجيكية', 'توت بري', 'فانيليا'],
    ingredients: ['عجينة وافل طازجة', 'شوكولاتة بلجيكية', 'توت وفراولة', 'آيس كريم فانيليا'],
  },
  {
    id: 'luqaimat-nutella-icecream',
    category: 'basra',
    categoryLabel: 'حلويات وموطا',
    name: 'لقيمات مقرمشة بالنوتيلا والموطا',
    subtitle: 'كرات اللقيمات الذهبية مع صوص النوتيلا واللوتس والآيس كريم',
    description:
      'لقيمات ذهبية مقرمشة محضرة طازجاً ومغطاة بصوص النوتيلا وزبدة اللوتس والفستق الحلبي، تُقدم بجانب كرة آيس كريم فانيليا باردة.',
    servingNote: 'صحن مشكل ساخن وبارد',
    highlightTag: 'سهرة البصرة',
    illustration: 'luqaimat_nutella_icecream',
    flavors: ['لقيمات ذهبية', 'نوتيلا ولوتس', 'موطا فانيليا'],
    ingredients: ['لقيمات مقرمشة', 'شوكولاتة نوتيلا', 'زبدة اللوتس', 'آيس كريم وفستق'],
  },
  {
    id: 'tropical-mango-cocktail',
    category: 'juices',
    categoryLabel: 'كوكتيل طبيعي',
    name: 'كوكتيل شقف بالقشطة والعسل',
    subtitle: 'طبقات المانجو والفراولة والموز مع القشطة والمكسرات',
    description:
      'تناغم منعش من عصير المانجو الطبيعي والفراولة الطازجة مع قطع الفواكه الموسمية، يُعلوه تاج من القشطة الغنية والمكسرات والعسل.',
    servingNote: 'فواكه طبيعية ١٠٠٪',
    illustration: 'tropical_mango_cocktail',
    flavors: ['مانجو استوائي', 'فراولة وموز', 'قشطة وعسل'],
    ingredients: ['مانجو طبيعي', 'فراولة وموز طازج', 'قشطة طازجة', 'عسل طبيعي وفستق'],
  },
  {
    id: 'lotus-caramel-sundae',
    category: 'cones',
    categoryLabel: 'صنداي وكاسات',
    name: 'صنداي اللوتس والكراميل',
    subtitle: 'آيس كريم الفانيليا والشوكولاتة مع زبدة وبسكويت اللوتس',
    description:
      'طبقات غنية تجمع بين برودة الآيس كريم الكريمي ودفء زبدة اللوتس البلجيكية الأصيلة مع فتات البسكويت المكرمل.',
    servingNote: 'كاس صنداي متعدد الطبقات',
    illustration: 'lotus_caramel_sundae',
    flavors: ['زبدة اللوتس', 'كراميل مملح', 'بندق محمص'],
    ingredients: ['آيس كريم فانيليا وشوكولاتة', 'زبدة وبسكويت لوتس', 'صوص كراميل', 'بندق محمص'],
  },
  {
    id: 'nutella-banana-crepe',
    category: 'waffles',
    categoryLabel: 'كريب فرنسي',
    name: 'كريب فوتشيني نوتيلا وفواكه',
    subtitle: 'شرائح الكريب الرقيقة مع النوتيلا والموز والفراولة',
    description:
      'كريب فرنسي رقيق مقطّع على طريقة الفوتشيني ليغمر بالكامل بصوص الشوكولاتة بالبندق، ويُقدم مع الفواكه الطازجة وكرة آيس كريم.',
    servingNote: 'يُقدم ساخناً مع آيس كريم بارد',
    illustration: 'nutella_banana_crepe',
    flavors: ['نوتيلا بالبندق', 'موز وفراولة', 'آيس كريم'],
    ingredients: ['شرائح كريب طازجة', 'شوكولاتة بندق غنية', 'موز وفراولة', 'آيس كريم'],
  },
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
