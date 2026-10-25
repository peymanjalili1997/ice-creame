import React, { useEffect, useState } from 'react';
import {
  Clock,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from 'lucide-react';
import { BRAND_INFO, IllustrationVariant } from '../data/menuData';
import { DessertIllustration } from './DessertIllustration';
import { TikTokIcon } from './TikTokIcon';

interface HeroTheme {
  id: string;
  shortLabel: string;
  label: string;
  variant: IllustrationVariant;
  glowPrimary: string;
  glowSecondary: string;
  badgeText: string;
  // Angle on the circular orbit
  orbitPositionClass: string;
}

const HERO_THEMES: HeroTheme[] = [
  {
    id: 'splash',
    shortLabel: 'كورن سبلاش',
    label: 'كورن سبلاش الملكي',
    variant: 'signature_splash_cone',
    glowPrimary: '#DF3B88',
    glowSecondary: '#F5A623',
    badgeText: '٤ نكهات · شوكولاتة بلجيكية',
    orbitPositionClass: '-top-4 left-1/2 -translate-x-1/2',
  },
  {
    id: 'datli',
    shortLabel: 'داطلي بالموطا',
    label: 'داطلي حار بالموطا',
    variant: 'datli_icecream_basra',
    glowPrimary: '#F59E2D',
    glowSecondary: '#DF3B88',
    badgeText: 'مشهورات البصرة · داطلي وموطا قشطة',
    orbitPositionClass: 'top-1/2 -right-3 sm:-right-6 -translate-y-1/2',
  },
  {
    id: 'pistachio',
    shortLabel: 'بوظة بالفستق',
    label: 'بوظة عربية بالفستق',
    variant: 'arabic_mastic_icecream',
    glowPrimary: '#80C24C',
    glowSecondary: '#FDE047',
    badgeText: 'قشطة بلدية · فستق حلبي',
    orbitPositionClass: '-bottom-4 left-1/2 -translate-x-1/2',
  },
  {
    id: 'zabib',
    shortLabel: 'زبيب بصراوي',
    label: 'زبيب بصراوي مثلج',
    variant: 'zabib_basrawi_iced',
    glowPrimary: '#DF3B88',
    glowSecondary: '#80C24C',
    badgeText: 'انتعاش البصرة · زبيب طبيعي ونعناع',
    orbitPositionClass: 'top-1/2 -left-3 sm:-left-6 -translate-y-1/2',
  },
];

// Calculates live open/closed status based on Basra time (Asia/Baghdad)
// Working hours: Daily 4:00 PM (16:00) to 1:00 AM (01:00)
function getBasraLiveStatus(): { timeStr: string; isOpen: boolean } {
  try {
    const now = new Date();
    const timeStr = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Baghdad',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }).format(now);

    const hour24Str = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Baghdad',
      hour: 'numeric',
      hour12: false,
    }).format(now);

    const minuteStr = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Baghdad',
      minute: 'numeric',
    }).format(now);

    const hour = parseInt(hour24Str, 10);
    const minute = parseInt(minuteStr, 10);
    const totalMinutes = hour * 60 + minute;

    // Daily from 4:00 PM (16:00 = 960m) to 1:00 AM (01:00 = 60m)
    const isOpen = totalMinutes >= 16 * 60 || totalMinutes < 1 * 60;
    return { timeStr, isOpen };
  } catch {
    const now = new Date();
    const totalMinutes = now.getHours() * 60 + now.getMinutes();
    const isOpen = totalMinutes >= 16 * 60 || totalMinutes < 1 * 60;
    return { timeStr: 'البصرة', isOpen };
  }
}

export const HeroFantasyBanner: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [basraStatus, setBasraStatus] = useState<{
    timeStr: string;
    isOpen: boolean;
  }>(getBasraLiveStatus);

  // Auto-rotate hero ice cream every 3.8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_THEMES.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [activeIndex]);

  useEffect(() => {
    const updateBasraClock = () => {
      setBasraStatus(getBasraLiveStatus());
    };

    updateBasraClock();
    const timer = setInterval(updateBasraClock, 30000);
    return () => clearInterval(timer);
  }, []);

  const activeTheme = HERO_THEMES[activeIndex] || HERO_THEMES[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setOffset({ x: nx * 20, y: ny * 20 });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <section className="max-w-7xl mx-auto px-3.5 sm:px-6 pt-3 sm:pt-6 pb-6">
      {/* UNIFIED FULL-CONTAINER-WIDTH FANTASY HERO CANVAS */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full rounded-[1.85rem] sm:rounded-[2.25rem] overflow-hidden bg-gradient-to-br from-[#195652] via-[#123E3B] to-[#0A2422] border-2 border-[#256661] shadow-2xl flex flex-col justify-between p-5 sm:p-10 lg:p-14"
      >
        {/* Top Melted Raspberry Drips (Directly from the Business Card) */}
        <svg
          viewBox="0 0 1200 130"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-14 sm:h-24 pointer-events-none opacity-95"
          aria-hidden="true"
        >
          <path
            d="M0,0 L1200,0 L1200,24 C1140,24 1125,88 1085,88 C1045,88 1030,28 980,28 C930,28 915,112 870,112 C825,112 810,22 750,22 C690,22 675,68 630,68 C585,68 570,18 500,18 C430,18 415,96 370,96 C325,96 310,26 240,26 C170,26 155,118 110,118 C65,118 50,32 0,32 Z"
            fill="#DF3B88"
          />
          <line x1="110" y1="30" x2="110" y2="96" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" opacity="0.85" />
          <line x1="370" y1="26" x2="370" y2="76" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" opacity="0.85" />
          <line x1="870" y1="28" x2="870" y2="90" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" opacity="0.85" />
          <line x1="1085" y1="24" x2="1085" y2="68" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" opacity="0.85" />
        </svg>

        {/* Bottom Corner Melted Pink Wave */}
        <svg
          viewBox="0 0 500 160"
          className="absolute bottom-0 left-0 w-56 sm:w-96 h-20 sm:h-32 pointer-events-none opacity-85"
          aria-hidden="true"
        >
          <path
            d="M0,160 L460,160 C460,126 425,126 425,92 C425,58 385,58 385,108 C385,138 345,138 345,68 C345,28 295,28 295,94 C295,128 255,128 255,48 C255,14 200,14 200,88 C200,122 155,122 155,36 C155,8 100,8 100,78 C100,112 55,112 55,24 L0,24 Z"
            fill="#DF3B88"
          />
          <path
            d="M100,32 L100,82 M200,38 L200,90 M295,52 L295,98 M385,78 L385,114"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.85"
          />
        </svg>

        {/* Ambient Glow Orbs */}
        <div
          style={{
            background: `radial-gradient(circle, ${activeTheme.glowPrimary} 0%, transparent 70%)`,
            transform: `translate3d(${-offset.x}px, ${-offset.y}px, 0)`,
            transition: 'transform 180ms ease-out',
          }}
          className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-72 sm:w-[420px] h-72 sm:h-[420px] rounded-full opacity-40 blur-3xl"
          aria-hidden="true"
        />

        {/* Top Live Basra Status Bar inside Hero */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2.5 pt-5 sm:pt-6 pb-3 border-b border-white/15 text-xs">
          <div className="flex items-center flex-wrap gap-2 text-[#E2F3F2] font-bold">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FDE047] shrink-0" />
              <span>البصرة</span>
            </span>
            <span aria-hidden="true" className="text-white/40">·</span>
            {basraStatus.isOpen ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 text-[#4ADE80] font-black text-xs shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                مفتوح الآن
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EF4444]/20 border border-[#EF4444]/50 text-[#FCA5A5] font-black text-xs shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                مغلق حالياً (يفتح 04:00 عصراً)
              </span>
            )}
            <span className="hidden sm:inline text-xs text-[#B5D6D4] font-medium">
              · أوقات العمل: 04:00 م — 01:00 ص
            </span>
          </div>

          <div
            className="flex items-center gap-1.5 text-[#C4E2E0] font-mono tabular-nums text-xs"
            dir="ltr"
          >
            <Clock className="w-3.5 h-3.5 text-[#F9B4D2]" />
            <span>{basraStatus.timeStr}</span>
          </div>
        </div>

        {/* MAIN HERO CONTENT ROW (Right: Brand & Actions | Left: Circular Orbiting Ice Cream Selector) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center my-auto py-6 sm:py-8">
          {/* Right Side (RTL col 1): Brand Title, Slogan & Actions */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-right">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FDE047]">
              <Sparkles className="w-3.5 h-3.5 text-[#DF3B88]" />
              <span>{activeTheme.badgeText}</span>
            </div>

            <div>
              <h1
                className="font-display font-extrabold text-white tracking-tight leading-[1.08]"
                style={{ fontSize: 'clamp(2.75rem, 6vw, 5.2rem)' }}
              >
                مرطبات{' '}
                <span className="ratoola-wordmark-pink inline-block px-1.5">
                  رتولة
                </span>
              </h1>
              <p className="mt-2.5 font-display text-xl sm:text-3xl font-bold text-[#FCE8F2]">
                ذوق والطعم سعادة
              </p>
            </div>

            {/* Mobile-First Ergonomic Action Buttons (WhatsApp in Official Green #25D366) */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-2">
              <a
                href={`tel:${BRAND_INFO.phoneInternational}`}
                className="min-h-[48px] px-4 sm:px-6 py-3 rounded-2xl bg-[#F5A623] hover:bg-[#E09112] text-[#112A28] font-bold text-xs sm:text-sm transition-transform active:scale-95 flex items-center justify-center gap-2 shadow-lg whitespace-nowrap"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span className="font-mono tabular-nums font-extrabold" dir="ltr">
                  07706444465
                </span>
              </a>

              <a
                href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'مرحبا مرطبات رتولة 🍦'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-4 sm:px-5 py-3 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm transition-transform active:scale-95 flex items-center justify-center gap-2 shadow-lg whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>واتساب مباشر</span>
              </a>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] px-3.5 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <Instagram className="w-4 h-4 text-[#FDE047]" />
                <span className="font-mono tabular-nums font-bold" dir="ltr">
                  @rat_oo10
                </span>
              </a>

              <a
                href={BRAND_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] px-3.5 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <TikTokIcon className="w-4 h-4 text-[#69C9D0]" />
                <span className="font-mono tabular-nums font-bold" dir="ltr">
                  @rat_oo10
                </span>
              </a>
            </div>
          </div>

          {/* Left Side (RTL col 2): Ice Cream Centerpiece Surrounded by Circular Orbiting Buttons */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-6">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
              {/* Circular Orbit Ring Track */}
              <div
                className="absolute inset-3 sm:inset-4 rounded-full border-2 border-dashed border-white/20 pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute inset-9 sm:inset-12 rounded-full bg-[#092422]/55 backdrop-blur-xs border border-white/10 pointer-events-none shadow-inner"
                aria-hidden="true"
              />

              {/* Centerpiece Ice Cream Illustration */}
              <div
                style={{
                  transform: `translate3d(${-offset.x * 0.7}px, ${-offset.y * 0.7}px, 0)`,
                  transition: 'transform 160ms ease-out',
                }}
                className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center animate-float-slow pointer-events-none"
              >
                <div className="w-full h-full drop-shadow-[0_24px_34px_rgba(0,0,0,0.6)]">
                  <DessertIllustration variant={activeTheme.variant} />
                </div>
              </div>

              {/* 4 Circular Orbiting Buttons Around the Ice Cream */}
              {HERO_THEMES.map((theme, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={theme.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`absolute z-20 ${theme.orbitPositionClass} min-h-[40px] px-3.5 py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#DF3B88] text-white opacity-100 scale-110 ring-2 ring-[#FDE047] shadow-xl'
                        : 'bg-[#082220]/85 text-white/60 border border-white/15 opacity-45 scale-90 hover:opacity-80 hover:scale-95'
                    }`}
                  >
                    <span>{theme.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
