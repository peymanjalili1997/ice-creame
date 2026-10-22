import React from 'react';
import {
  BUILDER_BASES,
  BUILDER_SAUCES,
  BUILDER_SCOOPS,
  BUILDER_TOPPINGS,
  IllustrationVariant,
} from '../data/menuData';

interface DessertIllustrationProps {
  variant: IllustrationVariant;
  className?: string;
}

export const DessertIllustration: React.FC<DessertIllustrationProps> = ({
  variant,
  className = 'w-full h-full',
}) => {
  switch (variant) {
    case 'signature_splash_cone':
      return (
        <svg viewBox="0 0 320 260" className={className} role="img" aria-label="كورن رتولة الملكي سبلاش">
          <defs>
            <radialGradient id="auraSplash" cx="50%" cy="46%" r="52%">
              <stop offset="0%" stopColor="#DF3B88" stopOpacity="0.32" />
              <stop offset="55%" stopColor="#F7D94C" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#164A47" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="coneGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F0A35A" />
              <stop offset="50%" stopColor="#C9732C" />
              <stop offset="100%" stopColor="#7C3E0E" />
            </linearGradient>
            <radialGradient id="scoopChoco" cx="35%" cy="30%" r="68%">
              <stop offset="0%" stopColor="#7A4930" />
              <stop offset="55%" stopColor="#462414" />
              <stop offset="100%" stopColor="#241007" />
            </radialGradient>
            <radialGradient id="scoopLemon" cx="35%" cy="30%" r="68%">
              <stop offset="0%" stopColor="#FFF799" />
              <stop offset="60%" stopColor="#F5CA32" />
              <stop offset="100%" stopColor="#C9920E" />
            </radialGradient>
            <radialGradient id="scoopBlue" cx="35%" cy="30%" r="68%">
              <stop offset="0%" stopColor="#8CE2FA" />
              <stop offset="60%" stopColor="#39A5C9" />
              <stop offset="100%" stopColor="#1A6582" />
            </radialGradient>
            <radialGradient id="scoopBerry" cx="35%" cy="30%" r="68%">
              <stop offset="0%" stopColor="#FF8BC2" />
              <stop offset="55%" stopColor="#DF3B88" />
              <stop offset="100%" stopColor="#941652" />
            </radialGradient>
          </defs>

          <circle cx="160" cy="122" r="112" fill="url(#auraSplash)" />

          {/* Colorful Liquid Fruit & Pistachio Splashes behind Scoops */}
          <path d="M94,106 C64,86 48,66 72,68 C94,70 108,88 118,98 Z" fill="#80C24C" />
          <path d="M84,124 C50,122 44,102 68,104 C88,106 100,114 110,120 Z" fill="#5EA02C" />
          <path d="M220,98 C252,78 270,96 246,110 C228,120 214,116 204,112 Z" fill="#DF3B88" />
          <path d="M104,154 C74,174 88,194 112,172 C126,158 134,150 136,144 Z" fill="#F5A623" />

          {/* Floating Chocolate & Berry Droplets */}
          <circle cx="62" cy="138" r="6" fill="#2D1409" />
          <circle cx="76" cy="78" r="4.5" fill="#80C24C" />
          <circle cx="256" cy="84" r="5.5" fill="#DF3B88" />
          <circle cx="244" cy="142" r="6.5" fill="#2D1409" />
          <circle cx="198" cy="44" r="4.5" fill="#39A5C9" />
          <circle cx="122" cy="48" r="5" fill="#DF3B88" />

          {/* 4 Artisanal Gelato Scoops */}
          <circle cx="138" cy="78" r="31" fill="url(#scoopBlue)" />
          <circle cx="186" cy="84" r="32" fill="url(#scoopBerry)" />
          <circle cx="116" cy="112" r="34" fill="url(#scoopLemon)" />
          <circle cx="168" cy="108" r="37" fill="url(#scoopChoco)" />

          {/* Dynamic Melted Chocolate Crown & Splash Arms */}
          <path
            d="M126,98 C118,64 138,44 144,72 C154,48 172,42 170,70 C190,50 208,62 194,88 C218,86 226,106 202,116 C212,138 194,154 176,136 C168,162 150,164 152,136 C130,148 112,132 128,114 C102,118 98,100 126,98 Z"
            fill="#2B1308"
          />
          <path
            d="M148,82 Q166,72 182,88"
            fill="none"
            stroke="#9E6B4F"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.7"
          />
          <circle cx="154" cy="96" r="5" fill="#FFFFFF" opacity="0.28" />
          <circle cx="106" cy="100" r="5.5" fill="#FFFFFF" opacity="0.45" />
          <circle cx="130" cy="68" r="4" fill="#FFFFFF" opacity="0.35" />

          {/* Crispy Golden Waffle Cone */}
          <polygon points="128,132 204,126 166,244" fill="url(#coneGold)" />
          <path
            d="M125,132 Q166,144 207,126"
            fill="none"
            stroke="#DC8B41"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M136,146 L196,142 M142,164 L190,160 M148,182 L183,179 M154,200 L177,198 M159,218 L172,217 M140,132 L170,226 M158,130 L180,196 M176,128 L152,202 M192,127 L158,224"
            stroke="#5E2C06"
            strokeWidth="1.6"
            opacity="0.55"
          />
        </svg>
      );

    case 'datli_icecream_basra':
      return (
        <svg viewBox="0 0 320 240" className={className} role="img" aria-label="داطلي بصراوي حار مع موطا القشطة">
          <defs>
            <radialGradient id="datliGlow" cx="50%" cy="50%" r="52%">
              <stop offset="0%" stopColor="#F59E2D" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#164A47" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="datliGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F5A623" />
              <stop offset="55%" stopColor="#C86D18" />
              <stop offset="100%" stopColor="#8A3E05" />
            </linearGradient>
          </defs>
          <circle cx="160" cy="122" r="98" fill="url(#datliGlow)" />
          {/* Emerald Ceramic Platter */}
          <ellipse cx="160" cy="166" rx="114" ry="38" fill="#164A47" stroke="#F5B041" strokeWidth="3" />
          <ellipse cx="160" cy="164" rx="96" ry="28" fill="#0F3533" />

          {/* Golden Crispy Iraqi Datli Fingers (Fluted ridges) */}
          <g transform="rotate(-18 116 138)">
            <rect x="82" y="122" width="68" height="26" rx="12" fill="url(#datliGold)" stroke="#753404" strokeWidth="2" />
            <line x1="90" y1="129" x2="142" y2="129" stroke="#FDE047" strokeWidth="1.5" opacity="0.55" />
            <line x1="90" y1="138" x2="142" y2="138" stroke="#6E3002" strokeWidth="1.8" opacity="0.65" />
          </g>
          <g transform="rotate(16 204 138)">
            <rect x="170" y="122" width="68" height="26" rx="12" fill="url(#datliGold)" stroke="#753404" strokeWidth="2" />
            <line x1="178" y1="129" x2="230" y2="129" stroke="#FDE047" strokeWidth="1.5" opacity="0.55" />
            <line x1="178" y1="138" x2="230" y2="138" stroke="#6E3002" strokeWidth="1.8" opacity="0.65" />
          </g>
          <g transform="rotate(-6 132 158)">
            <rect x="96" y="146" width="72" height="26" rx="12" fill="url(#datliGold)" stroke="#753404" strokeWidth="2" />
            <line x1="106" y1="154" x2="158" y2="154" stroke="#FDE047" strokeWidth="1.5" opacity="0.55" />
            <line x1="106" y1="162" x2="158" y2="162" stroke="#6E3002" strokeWidth="1.8" opacity="0.65" />
          </g>

          {/* Creamy Cold Qishta Ice Cream Crown in Center */}
          <circle cx="160" cy="112" r="38" fill="#FFFDF8" stroke="#EAE0CE" strokeWidth="2.5" />
          <circle cx="148" cy="100" r="8" fill="#FFFFFF" />
          {/* Golden Honey / Syrup & Crushed Pistachio Topping */}
          <path
            d="M134,104 Q148,132 162,102 Q176,128 188,104"
            fill="none"
            stroke="#DF3B88"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <g fill="#80C24C">
            <circle cx="152" cy="94" r="4.5" />
            <circle cx="168" cy="96" r="5" />
            <circle cx="160" cy="110" r="4.5" />
            <circle cx="144" cy="116" r="4" />
            <circle cx="176" cy="116" r="4.5" />
          </g>
        </svg>
      );

    case 'zabib_basrawi_iced':
      return (
        <svg viewBox="0 0 320 240" className={className} role="img" aria-label="عصير زبيب بصراوي مثلج">
          <defs>
            <linearGradient id="zabibGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5E1EB" />
              <stop offset="16%" stopColor="#6E143B" />
              <stop offset="60%" stopColor="#3B071E" />
              <stop offset="100%" stopColor="#1F020E" />
            </linearGradient>
          </defs>
          <circle cx="160" cy="122" r="94" fill="#DF3B88" opacity="0.16" />
          {/* Tall Frosted Basrawi Glass */}
          <polygon
            points="114,60 206,60 190,196 130,196"
            fill="url(#zabibGrad)"
            stroke="#FFFFFF"
            strokeWidth="4.5"
          />
          {/* Rich Frothy Foam Cap */}
          <path d="M114,62 Q160,36 206,62 Z" fill="#FCE8F2" stroke="#F5C2DC" strokeWidth="2" />
          {/* Crushed Ice Cubes Shining Inside */}
          <polygon points="134,96 150,88 146,106" fill="#FFFFFF" opacity="0.32" />
          <polygon points="172,118 186,110 182,128" fill="#FFFFFF" opacity="0.3" />
          <polygon points="140,148 156,140 152,158" fill="#FFFFFF" opacity="0.25" />
          {/* Fresh Green Mint Sprig & Straw */}
          <line x1="176" y1="22" x2="162" y2="108" stroke="#F5A623" strokeWidth="6.5" strokeLinecap="round" />
          <path d="M142,54 C124,36 146,24 156,48 Z" fill="#68A832" />
          <path d="M156,48 C172,32 184,48 164,58 Z" fill="#80C24C" />
          {/* Raisin Garnish Drops */}
          <circle cx="146" cy="56" r="4.5" fill="#3B071E" />
          <circle cx="160" cy="54" r="4" fill="#3B071E" />
        </svg>
      );

    case 'luqaimat_nutella_icecream':
      return (
        <svg viewBox="0 0 320 240" className={className} role="img" aria-label="لقيمات مقرمشة بالنوتيلا والموطا">
          <ellipse cx="160" cy="160" rx="114" ry="44" fill="#FFFFFF" stroke="#E8DFD1" strokeWidth="3" />
          {/* Golden Crispy Luqaimat Spheres */}
          <circle cx="114" cy="142" r="22" fill="#E08A32" stroke="#9C5716" strokeWidth="2" />
          <circle cx="148" cy="148" r="23" fill="#EA963E" stroke="#9C5716" strokeWidth="2" />
          <circle cx="186" cy="146" r="22" fill="#E08A32" stroke="#9C5716" strokeWidth="2" />
          <circle cx="132" cy="122" r="21" fill="#F0A34D" stroke="#9C5716" strokeWidth="2" />
          <circle cx="168" cy="124" r="22" fill="#EA963E" stroke="#9C5716" strokeWidth="2" />
          {/* Cold Vanilla Gelato Scoop on Top */}
          <circle cx="204" cy="112" r="28" fill="#FFFDF7" stroke="#E5DEC9" strokeWidth="2" />
          {/* Glossy Nutella & Lotus Drizzle */}
          <path
            d="M96,138 Q122,106 146,148 T194,116 T224,142"
            fill="none"
            stroke="#2B1308"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          <path
            d="M104,152 Q138,120 168,154 T216,128"
            fill="none"
            stroke="#DF3B88"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Pistachio Sprinkle */}
          <circle cx="132" cy="116" r="4" fill="#80C24C" />
          <circle cx="166" cy="120" r="4.5" fill="#80C24C" />
          <circle cx="204" cy="102" r="4.5" fill="#80C24C" />
        </svg>
      );

    case 'arabic_mastic_icecream':
      return (
        <svg viewBox="0 0 320 240" className={className} role="img" aria-label="بوظة عربية بالفستق الحلبي">
          <defs>
            <radialGradient id="masticGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#80C24C" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#164A47" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="brassDish" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1F5E5A" />
              <stop offset="100%" stopColor="#0E302E" />
            </linearGradient>
          </defs>
          <circle cx="160" cy="120" r="98" fill="url(#masticGlow)" />
          <path d="M90,146 Q160,196 230,146 L208,186 L112,186 Z" fill="url(#brassDish)" />
          <path d="M88,146 L232,146" stroke="#F5B041" strokeWidth="4" strokeLinecap="round" />
          <rect x="136" y="186" width="48" height="10" rx="4" fill="#0E302E" />
          <path d="M114,196 L206,196 L214,208 L106,208 Z" fill="#D99B38" />

          <circle cx="124" cy="120" r="34" fill="#FFFDF8" stroke="#EDE3D2" strokeWidth="2" />
          <circle cx="196" cy="120" r="34" fill="#FFFDF8" stroke="#EDE3D2" strokeWidth="2" />
          <circle cx="160" cy="100" r="39" fill="#FFFFFF" stroke="#EDE3D2" strokeWidth="2" />

          <g fill="#68A832">
            <circle cx="144" cy="86" r="5" />
            <circle cx="162" cy="80" r="5.5" />
            <circle cx="178" cy="90" r="5" />
            <circle cx="150" cy="104" r="5.5" />
            <circle cx="168" cy="108" r="5" />
            <circle cx="118" cy="112" r="5" />
            <circle cx="132" cy="126" r="4.5" />
            <circle cx="190" cy="112" r="5.5" />
            <circle cx="204" cy="124" r="4.5" />
          </g>
          <g fill="#9BE05E">
            <circle cx="154" cy="92" r="4" />
            <circle cx="172" cy="98" r="4" />
            <circle cx="128" cy="104" r="3.5" />
            <circle cx="198" cy="104" r="4" />
            <circle cx="160" cy="118" r="4" />
          </g>
          <path d="M158,64 C166,54 176,62 166,72 Z" fill="#DF3B88" />
          <path d="M146,70 C138,60 148,54 154,66 Z" fill="#F472B6" />
        </svg>
      );

    case 'berry_chocolate_waffle':
      return (
        <svg viewBox="0 0 320 240" className={className} role="img" aria-label="وافل بلجيكي بالشوكولاتة والتوت">
          <ellipse cx="160" cy="154" rx="112" ry="46" fill="#FFFFFF" stroke="#E8DFD1" strokeWidth="3" />
          <rect
            x="94"
            y="92"
            width="132"
            height="80"
            rx="16"
            fill="#DC8B3E"
            stroke="#9C5716"
            strokeWidth="2.5"
          />
          <g fill="#B3661E" opacity="0.8">
            <rect x="108" y="104" width="22" height="15" rx="3.5" />
            <rect x="136" y="104" width="22" height="15" rx="3.5" />
            <rect x="164" y="104" width="22" height="15" rx="3.5" />
            <rect x="192" y="104" width="20" height="15" rx="3.5" />
            <rect x="108" y="126" width="22" height="15" rx="3.5" />
            <rect x="136" y="126" width="22" height="15" rx="3.5" />
            <rect x="164" y="126" width="22" height="15" rx="3.5" />
            <rect x="192" y="126" width="20" height="15" rx="3.5" />
            <rect x="108" y="148" width="22" height="15" rx="3.5" />
            <rect x="136" y="148" width="22" height="15" rx="3.5" />
            <rect x="164" y="148" width="22" height="15" rx="3.5" />
            <rect x="192" y="148" width="20" height="15" rx="3.5" />
          </g>
          <path
            d="M100,112 Q124,162 148,108 T194,158 T220,116"
            fill="none"
            stroke="#32170B"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M104,146 Q134,100 162,152 T216,124"
            fill="none"
            stroke="#DF3B88"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle cx="140" cy="92" r="28" fill="#FFFBF0" stroke="#EAE0C8" strokeWidth="2" />
          <circle cx="184" cy="96" r="26" fill="#DF3B88" />
          <circle cx="160" cy="70" r="9" fill="#9E1654" />
          <circle cx="118" cy="114" r="7.5" fill="#DF3B88" />
          <circle cx="204" cy="116" r="7" fill="#32170B" />
        </svg>
      );

    case 'tropical_mango_cocktail':
      return (
        <svg viewBox="0 0 320 240" className={className} role="img" aria-label="كوكتيل شقف ملكي">
          <defs>
            <linearGradient id="cocktailGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFDF8" />
              <stop offset="25%" stopColor="#FFB03A" />
              <stop offset="65%" stopColor="#F58D1F" />
              <stop offset="70%" stopColor="#DF3B88" />
              <stop offset="100%" stopColor="#8F124C" />
            </linearGradient>
          </defs>
          <circle cx="160" cy="122" r="92" fill="#FFB03A" opacity="0.14" />
          <polygon
            points="114,56 206,56 188,186 132,186"
            fill="url(#cocktailGrad)"
            stroke="#FFFFFF"
            strokeWidth="4.5"
          />
          <rect x="154" y="186" width="12" height="20" fill="#D5E3E2" />
          <ellipse cx="160" cy="208" rx="36" ry="7.5" fill="#D5E3E2" />
          <path d="M114,58 Q160,18 206,58 Z" fill="#FFFDF9" stroke="#EFE8DA" strokeWidth="2" />
          <line x1="186" y1="20" x2="168" y2="95" stroke="#164A47" strokeWidth="6.5" strokeLinecap="round" />
          <circle cx="136" cy="50" r="11" fill="#DF3B88" />
          <circle cx="158" cy="46" r="4.5" fill="#68A832" />
          <circle cx="170" cy="50" r="4.5" fill="#68A832" />
          <circle cx="148" cy="54" r="4" fill="#C67D3B" />
        </svg>
      );

    case 'lotus_caramel_sundae':
      return (
        <svg viewBox="0 0 320 240" className={className} role="img" aria-label="صنداي اللوتس والكراميل">
          <circle cx="160" cy="122" r="90" fill="#C87638" opacity="0.14" />
          <path d="M106,116 L214,116 L194,198 L126,198 Z" fill="#164A47" />
          <path d="M112,138 L208,138 L202,164 L118,164 Z" fill="#DF3B88" />
          <circle cx="138" cy="102" r="29" fill="#FFF8E8" />
          <circle cx="182" cy="102" r="29" fill="#E29B58" />
          <circle cx="160" cy="80" r="32" fill="#FFFDF8" />
          <path
            d="M126,92 Q142,126 154,96 Q166,130 178,94 Q190,124 200,96"
            fill="none"
            stroke="#B45E1E"
            strokeWidth="7.5"
            strokeLinecap="round"
          />
          <rect
            x="174"
            y="38"
            width="44"
            height="25"
            rx="4"
            transform="rotate(28 174 38)"
            fill="#B86528"
            stroke="#8A4615"
            strokeWidth="2"
          />
        </svg>
      );

    case 'nutella_banana_crepe':
      return (
        <svg viewBox="0 0 320 240" className={className} role="img" aria-label="كريب فوتشيني نوتيلا">
          <ellipse cx="160" cy="144" rx="114" ry="54" fill="#FFFFFF" stroke="#E4DDD0" strokeWidth="3" />
          <path
            d="M84,142 Q125,92 162,142 T236,136"
            fill="none"
            stroke="#E7B374"
            strokeWidth="23"
            strokeLinecap="round"
          />
          <path
            d="M90,156 Q135,110 172,156 T230,148"
            fill="none"
            stroke="#DC9E58"
            strokeWidth="21"
            strokeLinecap="round"
          />
          <path
            d="M92,134 Q118,170 138,122 T182,166 T226,126"
            fill="none"
            stroke="#32170B"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="160" cy="106" r="26" fill="#FFFDF7" stroke="#EDE4D1" strokeWidth="2" />
          <circle cx="116" cy="142" r="10.5" fill="#FFF3B8" stroke="#E2CA6B" strokeWidth="2" />
          <circle cx="204" cy="142" r="10.5" fill="#FFF3B8" stroke="#E2CA6B" strokeWidth="2" />
          <circle cx="142" cy="152" r="8.5" fill="#DF3B88" />
          <circle cx="182" cy="150" r="8.5" fill="#DF3B88" />
        </svg>
      );

    case 'pomegranate_berry_slush':
    case 'pistachio_saffron_cup':
    case 'family_happiness_box':
    default:
      return (
        <svg viewBox="0 0 320 240" className={className} role="img" aria-label="مرطبات رتولة">
          <circle cx="160" cy="122" r="90" fill="#DF3B88" opacity="0.14" />
          <circle cx="132" cy="116" r="31" fill="#F9C835" />
          <circle cx="188" cy="116" r="31" fill="#DF3B88" />
          <circle cx="160" cy="92" r="35" fill="#4E2C1B" />
          <path d="M96,128 L224,128 L202,196 L118,196 Z" fill="#164A47" />
        </svg>
      );
  }
};

interface CustomBuilderPreviewProps {
  baseId: string;
  scoopIds: string[];
  sauceId: string;
  toppingIds: string[];
}

export const CustomBuilderPreview: React.FC<CustomBuilderPreviewProps> = ({
  baseId,
  scoopIds,
  sauceId,
  toppingIds,
}) => {
  const baseObj = BUILDER_BASES.find((b) => b.id === baseId) || BUILDER_BASES[0];
  const sauceObj = BUILDER_SAUCES.find((s) => s.id === sauceId);
  const resolvedScoops = scoopIds
    .map((id) => BUILDER_SCOOPS.find((s) => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const scoopPositions = [
    { cx: 160, cy: 118, r: 35 },
    { cx: 132, cy: 90, r: 31 },
    { cx: 188, cy: 90, r: 31 },
    { cx: 160, cy: 62, r: 29 },
  ];

  return (
    <svg viewBox="0 0 320 260" className="w-full h-full max-h-64" role="img" aria-label="معاينة آيس كريم رتولة">
      <defs>
        <radialGradient id="builderGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#DF3B88" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#1F5653" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="160" cy="125" r="108" fill="url(#builderGlow)" />

      {resolvedScoops.map((scoop, idx) => {
        const pos = scoopPositions[idx % scoopPositions.length];
        return (
          <g key={`${scoop.id}-${idx}`}>
            <circle
              cx={pos.cx}
              cy={pos.cy}
              r={pos.r}
              fill={scoop.colorPrimary}
              stroke={scoop.colorSecondary}
              strokeWidth="2"
            />
            <circle cx={pos.cx - 9} cy={pos.cy - 9} r={pos.r * 0.24} fill="#FFFFFF" opacity="0.32" />
          </g>
        );
      })}

      {sauceObj && sauceObj.id !== 'none' && (
        <path
          d="M116,96 Q134,134 148,96 Q162,138 176,94 Q190,130 204,96"
          fill="none"
          stroke={sauceObj.color}
          strokeWidth="7.5"
          strokeLinecap="round"
        />
      )}

      {toppingIds.includes('crushed-pistachio') && (
        <g fill="#80C24C">
          <circle cx="148" cy="74" r="4.5" />
          <circle cx="168" cy="80" r="5" />
          <circle cx="136" cy="102" r="4.5" />
          <circle cx="184" cy="100" r="4.5" />
          <circle cx="160" cy="108" r="5" />
        </g>
      )}
      {toppingIds.includes('choco-pearls') && (
        <g fill="#2B150A">
          <circle cx="154" cy="62" r="5" />
          <circle cx="174" cy="72" r="5" />
          <circle cx="128" cy="88" r="5" />
          <circle cx="192" cy="88" r="5" />
        </g>
      )}
      {toppingIds.includes('lotus-crumbs') && (
        <g fill="#C87638">
          <rect x="142" y="84" width="9" height="5.5" rx="2" />
          <rect x="172" y="88" width="9" height="5.5" rx="2" />
          <rect x="156" y="96" width="10" height="5.5" rx="2" />
        </g>
      )}
      {toppingIds.includes('fresh-berries') && (
        <g fill="#DF3B88">
          <circle cx="160" cy="48" r="8.5" />
          <circle cx="124" cy="74" r="7.5" />
          <circle cx="196" cy="74" r="7.5" />
        </g>
      )}

      {baseId === 'ratoola-cup' ? (
        <g>
          <path d="M104,132 L216,132 L196,218 L124,218 Z" fill="#164A47" />
          <path d="M110,158 L210,158 L205,184 L115,184 Z" fill="#DF3B88" />
          <text
            x="160"
            y="176"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="14"
            fontWeight="800"
          >
            رتولة
          </text>
        </g>
      ) : (
        <g>
          <polygon points="120,130 200,130 160,240" fill={baseObj.color} />
          <path
            d="M128,146 L192,146 M135,166 L185,166 M142,186 L178,186 M136,130 L166,220 M160,130 L176,192 M184,130 L144,200"
            stroke="#3B1E10"
            strokeWidth="1.6"
            opacity="0.48"
          />
          {baseId === 'choco-cone' && (
            <path
              d="M118,130 Q140,148 160,132 Q180,148 202,130"
              fill="none"
              stroke="#80C24C"
              strokeWidth="6.5"
              strokeLinecap="round"
            />
          )}
        </g>
      )}
    </svg>
  );
};
