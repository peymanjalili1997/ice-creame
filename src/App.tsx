/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState } from 'react';
import {
  Compass,
  Download,
  IceCreamCone,
  Instagram,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Search,
  Sparkles,
  X,
} from 'lucide-react';
import {
  BRAND_INFO,
  BUILDER_BASES,
  BUILDER_SAUCES,
  BUILDER_SCOOPS,
  BUILDER_TOPPINGS,
  CATEGORIES,
  CategoryId,
  MENU_ITEMS,
  ProductItem,
  QUICK_WHATSAPP_QUESTIONS,
} from './data/menuData';
import {
  CustomBuilderPreview,
  DessertIllustration,
} from './components/DessertIllustration';
import { HeroFantasyBanner } from './components/HeroFantasyBanner';
import { TikTokIcon } from './components/TikTokIcon';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProduct, setActiveProduct] = useState<ProductItem | null>(null);
  const [isCardModalOpen, setIsCardModalOpen] = useState<boolean>(false);

  // Interactive Flavor Mixer State
  const [builderBase, setBuilderBase] = useState<string>('waffle-cone');
  const [builderScoops, setBuilderScoops] = useState<string[]>([
    'belgian-choco',
    'lemon-vanilla',
    'raspberry-rose',
  ]);
  const [builderSauce, setBuilderSauce] = useState<string>('hot-fudge');
  const [builderToppings, setBuilderToppings] = useState<string[]>(['crushed-pistachio']);

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q) ||
        item.flavors.some((f) => f.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchQuery]);

  const handleToggleScoop = (scoopId: string) => {
    setBuilderScoops((prev) => {
      if (prev.includes(scoopId)) {
        if (prev.length === 1) return prev;
        return prev.filter((id) => id !== scoopId);
      }
      if (prev.length >= 4) {
        return [...prev.slice(1), scoopId];
      }
      return [...prev, scoopId];
    });
  };

  const handleToggleTopping = (toppingId: string) => {
    setBuilderToppings((prev) =>
      prev.includes(toppingId) ? prev.filter((id) => id !== toppingId) : [...prev, toppingId]
    );
  };

  // Build Iraqi Arabic WhatsApp Link for Custom Combination
  const customComboWhatsAppUrl = useMemo(() => {
    const baseName =
      BUILDER_BASES.find((b) => b.id === builderBase)?.name || 'كورن وافل';
    const scoopNames = builderScoops
      .map((id) => BUILDER_SCOOPS.find((s) => s.id === id)?.name)
      .filter(Boolean)
      .join(' + ');
    const sauceName =
      BUILDER_SAUCES.find((s) => s.id === builderSauce)?.name || 'بدون صوص';
    const toppingNames = builderToppings
      .map((id) => BUILDER_TOPPINGS.find((t) => t.id === id)?.name)
      .filter(Boolean)
      .join(' + ');

    const text = [
      'مرحبا مرطبات رتولة 🍦',
      'عجبتني هاي التشكيلة من الموقع:',
      `• التقديم: ${baseName}`,
      `• النكهات: ${scoopNames}`,
      `• الصوص: ${sauceName}`,
      toppingNames ? `• الإضافات: ${toppingNames}` : '',
      'متوفرة اليوم عدكم بالمحل؟',
    ]
      .filter(Boolean)
      .join('\n');

    return `${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
  }, [builderBase, builderScoops, builderSauce, builderToppings]);

  const handleDownloadVCard = () => {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:مرطبات رتولة - البصرة',
      'ORG:مرطبات رتولة - ذوق والطعم سعادة',
      `TEL;TYPE=CELL,VOICE:${BRAND_INFO.phoneInternational}`,
      `URL:${BRAND_INFO.instagramUrl}`,
      `ADR;TYPE=WORK:;;${BRAND_INFO.addressAr};البصرة;البصرة;;العراق`,
      'END:VCARD',
    ].join('\n');

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ratoola-basra.vcf';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-[#FFF9F5] text-[#112A28] pb-24 md:pb-0"
      dir="rtl"
    >
      {/* Header with enlarged standalone Brand Logo */}
      <header className="sticky top-0 z-30 bg-[#FFF9F5]/95 backdrop-blur-md border-b border-[#EADFD4]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 sm:px-6 h-16 sm:h-20">
          {/* Zone 1: Standalone Official Brand Logo */}
          <a
            href="#"
            aria-label="مرطبات رتولة - الرئيسية"
            className="flex items-center group transition-transform active:scale-95 shrink-0"
          >
            <img
              src={BRAND_INFO.logo}
              alt="مرطبات رتولة"
              className="h-12 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Zone 2: 4 concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-[#425B58]">
            <a
              href="#specialties"
              className="hover:text-[#DF3B88] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              الأصناف ونكهات البصرة
            </a>
            <a
              href="#flavor-mixer"
              className="hover:text-[#DF3B88] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              مختبر النكهات
            </a>
            <a
              href="#basra-location"
              className="hover:text-[#DF3B88] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              الموقع بالبصرة
            </a>
            <a
              href="#contact"
              className="hover:text-[#DF3B88] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              بطاقة العمل
            </a>
          </nav>

          {/* Zone 3: 1 primary action button */}
          <div className="flex items-center shrink-0">
            <a
              href={`tel:${BRAND_INFO.phoneInternational}`}
              className="min-h-[40px] px-3.5 py-2 text-xs sm:text-sm font-bold text-white bg-[#DF3B88] hover:bg-[#C42B73] rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-mono tabular-nums" dir="ltr">
                07706444465
              </span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* UNIFIED FULL-CONTAINER FANTASY HERO BANNER */}
        <HeroFantasyBanner />

        {/* SECTION 1: OFFICIAL MENU SHOWCASE WITH PRICES (2-Col Mobile Grid) */}
        <section id="specialties" className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6">
            <div className="flex flex-col gap-4 mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DF3B88] animate-pulse" />
                    <span className="text-xs font-bold text-[#DF3B88]">
                      المنيو الرسمي الكامل بالأسعار
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#112A28]">
                    قائمة أصناف مرطبات رتولة ({filteredItems.length} صنف)
                  </h2>
                </div>

                {/* Instant Touch Search Bar */}
                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-[#5A726F] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="ابحث عن صنف أو مشروب..."
                    className="w-full min-h-[44px] pr-10 pl-8 py-2 rounded-2xl bg-white border border-[#EADFD4] text-xs font-bold text-[#112A28] placeholder-[#799491] focus:outline-none focus:border-[#DF3B88] focus:ring-2 focus:ring-[#DF3B88]/20 transition-all shadow-xs"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#5A726F] hover:text-[#112A28] p-1"
                      aria-label="مسح البحث"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Horizontally Scrollable Touch Filter Bar & Navigation Controls */}
              <div className="flex items-center gap-1.5 p-1.5 bg-[#F2E8DE] rounded-2xl overflow-x-auto">
                {CATEGORIES.map((cat) => {
                  const active = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`min-h-[40px] px-3.5 sm:px-4 py-2 text-xs font-bold rounded-xl transition-colors whitespace-nowrap shrink-0 ${
                        active
                          ? 'bg-[#123E3B] text-white shadow-xs'
                          : 'text-[#425B58] hover:text-[#112A28]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Empty Search Result State */}
            {filteredItems.length === 0 && (
              <div className="text-center py-12 bg-white rounded-3xl border border-[#EADFD4] p-8">
                <p className="text-sm font-bold text-[#425B58] mb-3">
                  لم نجد أي صنف مطابق لبحثك &quot;{searchQuery}&quot;
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-4 py-2 text-xs font-bold text-white bg-[#123E3B] hover:bg-[#0D2E2C] rounded-xl transition-colors"
                >
                  عرض جميع الأصناف (85 صنف)
                </button>
              </div>
            )}

            {/* VERTICAL GRID: 1 Item Per Row on Mobile | 3 Items Per Row on Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {filteredItems.map((item) => (
                <article
                  key={item.id}
                  onClick={() => setActiveProduct(item)}
                  className="group cursor-pointer bg-white border border-[#EADFD4] hover:border-[#DF3B88]/60 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-150 active:scale-[0.98] sm:hover:-translate-y-0.5 sm:hover:shadow-lg flex items-stretch h-[116px] sm:h-[126px]"
                >
                  {/* Right Stage: Visual Thumbnail (RTL) */}
                  <div className="w-24 sm:w-28 bg-gradient-to-b from-[#FDF3F7] via-[#FAF1E8] to-[#F3E7DB] p-2 flex items-center justify-center shrink-0 relative overflow-hidden">
                    {item.highlightTag && (
                      <div className="absolute top-1.5 right-1.5 bg-[#DF3B88] text-white px-1.5 py-0.5 rounded-md font-bold text-[9px] shadow-xs z-10 leading-none">
                        {item.highlightTag}
                      </div>
                    )}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 transition-transform duration-200 group-hover:scale-105">
                      <DessertIllustration variant={item.illustration} />
                    </div>
                  </div>

                  {/* Left Stage: Product Info & Price (RTL) */}
                  <div className="p-2.5 sm:p-3 flex flex-col justify-between flex-1 min-w-0">
                    <div className="min-w-0">
                      <div className="text-[10px] text-[#DF3B88] font-bold truncate">
                        {item.categoryLabel}
                      </div>
                      <h3 className="font-display text-xs sm:text-sm font-black text-[#112A28] leading-snug truncate mt-0.5">
                        {item.name}
                      </h3>
                      <div className="text-[10px] text-[#5A726F] truncate mt-0.5">
                        {item.subtitle}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1.5 border-t border-[#F4ECE4]">
                      <span className="font-mono font-black text-xs sm:text-sm text-[#123E3B]" dir="ltr">
                        {item.priceDisplay}
                      </span>
                      <span className="text-[10px] font-bold text-[#DF3B88] bg-[#FCE8F2] group-hover:bg-[#DF3B88] group-hover:text-white px-2 py-0.5 rounded-md transition-colors whitespace-nowrap shrink-0">
                        طلب
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: VISUAL FLAVOR MIXER (Right: Stacked Options | Left: Boxless Sticky Ice Cream | Bottom: WhatsApp Button) */}
        <section id="flavor-mixer" className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6">
            <div className="bg-[#123E3B] text-white rounded-[1.85rem] sm:rounded-[2.25rem] p-4 sm:p-10 border-2 border-[#256661] shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#FDE047]" />
                  <h2 className="font-display text-lg sm:text-3xl font-extrabold">
                    نسّق نكهاتك وأرسلها عالواتساب
                  </h2>
                </div>
                <span className="text-xs text-[#F9B4D2] font-bold">
                  اختر الكورن والنكهات والصوص
                </span>
              </div>

              {/* Split Layout on Both Mobile & Desktop:
                  Right Column (col-7): All selectable options stacked one below another
                  Left Column (col-5): Boxless Sticky Ice Cream that stays visible while scrolling */}
              <div className="grid grid-cols-12 gap-3 sm:gap-8 items-start">
                {/* RIGHT SIDE (RTL first column): Stacked Selectable Options */}
                <div className="col-span-7 sm:col-span-7 space-y-5">
                  {/* 1. Base */}
                  <div>
                    <div className="text-xs font-bold text-[#FDE047] mb-2">
                      ١. القاعدة
                    </div>
                    <div className="flex flex-col sm:grid sm:grid-cols-3 gap-2">
                      {BUILDER_BASES.map((base) => (
                        <button
                          key={base.id}
                          type="button"
                          onClick={() => setBuilderBase(base.id)}
                          className={`min-h-[42px] px-3 py-2.5 rounded-2xl border text-xs font-bold text-right transition-colors ${
                            builderBase === base.id
                              ? 'bg-[#DF3B88] border-[#F472B6] text-white shadow-sm'
                              : 'bg-[#0D2E2C] border-white/10 text-[#C2DFDD]'
                          }`}
                        >
                          {base.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. Scoops */}
                  <div>
                    <div className="text-xs font-bold text-[#FDE047] mb-2">
                      ٢. النكهات ({builderScoops.length}/4)
                    </div>
                    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2">
                      {BUILDER_SCOOPS.map((scoop) => {
                        const selected = builderScoops.includes(scoop.id);
                        return (
                          <button
                            key={scoop.id}
                            type="button"
                            onClick={() => handleToggleScoop(scoop.id)}
                            className={`min-h-[42px] px-3 py-2.5 rounded-2xl border text-xs font-bold transition-colors flex items-center gap-2 text-right ${
                              selected
                                ? 'bg-white text-[#112A28] border-white shadow-sm'
                                : 'bg-[#0D2E2C] border-white/10 text-[#C2DFDD]'
                            }`}
                          >
                            <span
                              className="w-4 h-4 rounded-full shrink-0 border border-black/20"
                              style={{ backgroundColor: scoop.colorPrimary }}
                            />
                            <span className="truncate">{scoop.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Sauce */}
                  <div>
                    <div className="text-xs font-bold text-[#FDE047] mb-2">
                      ٣. الصوص
                    </div>
                    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2">
                      {BUILDER_SAUCES.map((sauce) => (
                        <button
                          key={sauce.id}
                          type="button"
                          onClick={() => setBuilderSauce(sauce.id)}
                          className={`min-h-[42px] px-3 py-2.5 rounded-xl border text-xs font-bold text-right transition-colors ${
                            builderSauce === sauce.id
                              ? 'bg-[#DF3B88] border-[#F472B6] text-white shadow-sm'
                              : 'bg-[#0D2E2C] border-white/10 text-[#C2DFDD]'
                          }`}
                        >
                          {sauce.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 4. Toppings */}
                  <div>
                    <div className="text-xs font-bold text-[#FDE047] mb-2">
                      ٤. الإضافات
                    </div>
                    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2">
                      {BUILDER_TOPPINGS.map((top) => {
                        const active = builderToppings.includes(top.id);
                        return (
                          <button
                            key={top.id}
                            type="button"
                            onClick={() => handleToggleTopping(top.id)}
                            className={`min-h-[42px] px-3 py-2.5 rounded-xl border text-xs font-bold text-right transition-colors ${
                              active
                                ? 'bg-white text-[#112A28] border-white shadow-sm'
                                : 'bg-[#0D2E2C] border-white/10 text-[#C2DFDD]'
                            }`}
                          >
                            {top.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* LEFT SIDE (RTL second column): Boxless Sticky Ice Cream Preview */}
                <div className="col-span-5 sm:col-span-5 sticky top-18 self-start flex flex-col items-center justify-center py-2">
                  <div className="w-36 h-44 sm:w-64 sm:h-64 drop-shadow-[0_20px_28px_rgba(0,0,0,0.55)]">
                    <CustomBuilderPreview
                      baseId={builderBase}
                      scoopIds={builderScoops}
                      sauceId={builderSauce}
                      toppingIds={builderToppings}
                    />
                  </div>
                  <div className="mt-2 text-[11px] sm:text-xs text-[#FDE047] font-bold text-center leading-relaxed">
                    {builderScoops
                      .map((id) => BUILDER_SCOOPS.find((s) => s.id === id)?.name)
                      .filter(Boolean)
                      .join(' · ')}
                  </div>
                </div>
              </div>

              {/* Bottom of All Items: Official WhatsApp Green Send Button */}
              <div className="mt-7 pt-5 border-t border-white/15 space-y-4">
                <a
                  href={customComboWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[50px] w-full py-3.5 px-5 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base transition-transform active:scale-95 flex items-center justify-center gap-2.5 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>أرسل هاي التشكيلة عالواتساب</span>
                </a>

                {/* Quick 1-Tap Iraqi WhatsApp Questions Bar (Green Hover) */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <span className="text-xs font-bold text-[#C4E2E0]">
                    استفسار سريع عالواتساب:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {QUICK_WHATSAPP_QUESTIONS.map((q) => (
                      <a
                        key={q.id}
                        href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(q.message)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[40px] px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#25D366] text-white text-xs font-bold transition-colors flex items-center gap-1.5"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover:text-white" />
                        <span>{q.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: BASRA LOCATION ("أقرب نقطة دالة") & BUSINESS CARD */}
        <section id="basra-location" className="py-8 sm:py-12">
          <div id="contact" className="max-w-7xl mx-auto px-3.5 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Basra Location & 1-Tap Maps Card */}
              <div className="lg:col-span-7 bg-white border border-[#EADFD4] rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-[#DF3B88]">
                      موقعنا في البصرة · أقرب نقطة دالة
                    </span>
                    <span className="text-xs font-bold text-[#123E3B]">
                      يومياً 11:00 ص — 01:30 ص
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#112A28] mb-2">
                    مرطبات رتولة — العراق · البصرة
                  </h2>

                  {/* Detailed Address Badge */}
                  <div className="bg-[#FFF9F5] border border-[#EADFD4] rounded-2xl p-3.5 sm:p-4 mb-4 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#DF3B88]/15 text-[#DF3B88] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-[#DF3B88] mb-0.5">
                        العنوان بالتفصيل
                      </div>
                      <p className="text-xs sm:text-sm font-extrabold text-[#112A28] leading-relaxed">
                        {BRAND_INFO.addressAr}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#425B58] mb-6">
                    تفضلوا بزيارتنا في البصرة أو تواصلوا معنا مباشرة لمعرفة أقرب نقطة دالة وتفاصيل التوصيل:
                  </p>

                  {/* Google Maps & WhatsApp Location Request Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <a
                      href={BRAND_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[48px] px-4 py-3 rounded-2xl bg-[#123E3B] hover:bg-[#0D2E2C] text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                    >
                      <Navigation className="w-4 h-4 text-[#FDE047]" />
                      <span>افتح الموقع في خرائط كوكل</span>
                    </a>

                    <a
                      href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(
                        'مرحبا مرطبات رتولة، ممكن إرسال اللوكيشن (الموقع) بالبصرة؟'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group min-h-[48px] px-4 py-3 rounded-2xl bg-[#F2E8DE] hover:bg-[#25D366] text-[#112A28] hover:text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                    >
                      <Compass className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" />
                      <span>اطلب اللوكيشن عبر واتساب</span>
                    </a>
                  </div>
                </div>

                {/* 4 Direct Contact Tiles */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-4 border-t border-[#F4ECE4]">
                  <a
                    href={`tel:${BRAND_INFO.phoneInternational}`}
                    className="p-3 sm:p-3.5 rounded-2xl bg-[#FFF9F5] border border-[#EADFD4] hover:border-[#123E3B] transition-colors text-center"
                  >
                    <Phone className="w-4 h-4 text-[#123E3B] mx-auto mb-1.5" />
                    <div className="text-[11px] text-[#5A726F]">اتصال</div>
                    <div
                      className="text-xs sm:text-sm font-extrabold font-mono tabular-nums text-[#112A28] mt-0.5"
                      dir="ltr"
                    >
                      07706444465
                    </div>
                  </a>

                  <a
                    href={BRAND_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 sm:p-3.5 rounded-2xl bg-[#FFF9F5] border border-[#EADFD4] hover:border-[#25D366] hover:bg-[#25D366] transition-colors text-center"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white mx-auto mb-1.5 transition-colors" />
                    <div className="text-[11px] text-[#5A726F] group-hover:text-white/90 transition-colors">
                      واتساب
                    </div>
                    <div
                      className="text-xs sm:text-sm font-extrabold font-mono tabular-nums text-[#112A28] group-hover:text-white mt-0.5 transition-colors"
                      dir="ltr"
                    >
                      07706444465
                    </div>
                  </a>

                  <a
                    href={BRAND_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-3.5 rounded-2xl bg-[#FFF9F5] border border-[#EADFD4] hover:border-[#DF3B88] transition-colors text-center"
                  >
                    <Instagram className="w-4 h-4 text-[#DF3B88] mx-auto mb-1.5" />
                    <div className="text-[11px] text-[#5A726F]">انستغرام</div>
                    <div
                      className="text-xs sm:text-sm font-extrabold font-mono tabular-nums text-[#112A28] mt-0.5"
                      dir="ltr"
                    >
                      @rat_oo10
                    </div>
                  </a>

                  <a
                    href={BRAND_INFO.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-3.5 rounded-2xl bg-[#FFF9F5] border border-[#EADFD4] hover:border-[#123E3B] hover:bg-[#123E3B]/5 transition-colors text-center"
                  >
                    <TikTokIcon className="w-4 h-4 text-[#112A28] mx-auto mb-1.5" />
                    <div className="text-[11px] text-[#5A726F]">تيك توك</div>
                    <div
                      className="text-xs sm:text-sm font-extrabold font-mono tabular-nums text-[#112A28] mt-0.5"
                      dir="ltr"
                    >
                      @rat_oo10
                    </div>
                  </a>
                </div>
              </div>

              {/* Save Contact & Map Navigation Action */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#123E3B] to-[#0D2E2C] text-white border border-[#256661] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-md">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#DF3B88]/20 border border-[#DF3B88]/40 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-[#FDE047]" />
                  </div>
                  <div className="text-xs font-bold text-[#FDE047] mb-1">
                    الموقع على الخريطة
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-black mb-2">
                    زورونا في مرطبات رتولة
                  </h3>
                  <p className="text-xs text-[#B5D6D4] leading-relaxed mb-6">
                    {BRAND_INFO.addressAr}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <a
                    href={BRAND_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[46px] px-4 py-2.5 rounded-2xl bg-[#DF3B88] hover:bg-[#C42B73] text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Navigation className="w-4 h-4 text-[#FDE047]" />
                    <span>الانتقال للموقع في خرائط كوكل</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleDownloadVCard}
                    className="w-full min-h-[46px] px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4 text-[#FDE047]" />
                    <span>حفظ رقم المحل في الموبايل (vCard)</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* MINIMAL QUIET FOOTER */}
      <footer className="bg-[#0D2E2C] text-[#B5D6D4] py-8 mt-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="font-display font-bold text-white text-sm">
            مرطبات رتولة — البصرة · ذوق والطعم سعادة
          </div>
          <div className="flex flex-wrap items-center gap-5 font-mono tabular-nums" dir="ltr">
            <a href={`tel:${BRAND_INFO.phoneInternational}`} className="hover:text-white">
              07706444465
            </a>
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Instagram: @rat_oo10
            </a>
            <a
              href={BRAND_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              TikTok: @rat_oo10
            </a>
          </div>
        </div>
      </footer>

      {/* CUTE PLAYFUL FLOATING MOBILE BOTTOM NAVBAR (md:hidden) */}
      <div className="md:hidden fixed bottom-2.5 left-3 right-3 z-40 pointer-events-none">
        <nav
          aria-label="التنقل السريع للموبايل"
          className="pointer-events-auto bg-[#123E3B]/95 backdrop-blur-md border-2 border-[#DF3B88]/60 rounded-full shadow-[0_10px_28px_rgba(18,62,59,0.5)] text-white grid grid-cols-4 items-center h-15 px-2 relative overflow-hidden"
        >
          {/* Cute top pink frosting line */}
          <div
            className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-[#DF3B88] to-transparent opacity-80"
            aria-hidden="true"
          />

          <a
            href="#specialties"
            className="flex flex-col items-center justify-center h-full text-[#E2F3F2] active:scale-95 transition-transform"
          >
            <span className="w-7 h-7 rounded-full bg-[#DF3B88]/20 flex items-center justify-center">
              <IceCreamCone className="w-4 h-4 text-[#F9B4D2]" />
            </span>
            <span className="text-[10px] font-bold mt-0.5">الأصناف</span>
          </a>

          <a
            href="#flavor-mixer"
            className="flex flex-col items-center justify-center h-full text-[#E2F3F2] active:scale-95 transition-transform"
          >
            <span className="w-7 h-7 rounded-full bg-[#FDE047]/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#FDE047]" />
            </span>
            <span className="text-[10px] font-bold mt-0.5">نسّق نكهتك</span>
          </a>

          <a
            href="#basra-location"
            className="flex flex-col items-center justify-center h-full text-[#E2F3F2] active:scale-95 transition-transform"
          >
            <span className="w-7 h-7 rounded-full bg-[#80C24C]/20 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-[#9BE05E]" />
            </span>
            <span className="text-[10px] font-bold mt-0.5">البصرة</span>
          </a>

          <a
            href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(
              'مرحبا مرطبات رتولة 🍦'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center h-11 text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-full mx-1 shadow-md active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-[10px] font-extrabold mt-0.5">واتساب</span>
          </a>
        </nav>
      </div>

      {/* MOBILE BOTTOM-SHEET / DESKTOP MODAL FOR PRODUCT DETAILS */}
      {activeProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-end sm:items-center justify-center sm:p-4"
          onClick={() => setActiveProduct(null)}
        >
          <div
            className="bg-white border border-[#EADFD4] rounded-t-3xl sm:rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl p-5 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Sheet Grab Handle */}
            <div className="sm:hidden w-12 h-1.5 bg-[#DFD3C7] rounded-full mx-auto mb-4" />

            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#DF3B88]">
                {activeProduct.categoryLabel}
              </span>
              <button
                type="button"
                onClick={() => setActiveProduct(null)}
                className="min-h-[40px] min-w-[40px] flex items-center justify-center text-[#5A726F] hover:text-[#112A28] rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-[#FAF1E8] rounded-2xl h-48 sm:h-56 flex items-center justify-center p-4 mb-4">
              <div className="w-44 h-44 sm:w-48 sm:h-48">
                <DessertIllustration variant={activeProduct.illustration} />
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 mb-2">
              <h3 className="font-display text-xl sm:text-2xl font-black text-[#112A28]">
                {activeProduct.name}
              </h3>
              <div
                className="bg-[#123E3B] text-[#FDE047] font-mono font-black text-sm sm:text-base px-3 py-1.5 rounded-xl shrink-0"
                dir="ltr"
              >
                {activeProduct.priceDisplay}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#425B58] mb-2 font-bold">
              {activeProduct.subtitle}
            </p>

            <p className="text-xs text-[#5A726F] mb-4 leading-relaxed">
              {activeProduct.description}
            </p>

            <div className="flex flex-wrap items-center gap-1.5 mb-5 text-[11px] text-[#5A726F]">
              <span className="font-bold text-[#112A28]">المكونات والنكهات:</span>
              <span>{activeProduct.flavors.concat(activeProduct.ingredients).join(' · ')}</span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#F4ECE4]">
              <a
                href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(
                  `مرحبا مرطبات رتولة 🍦\nحاب اطلب (${activeProduct.name}) بسعر (${activeProduct.priceDisplay}).\nمتوفر اليوم عندكم؟`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] px-4 py-2.5 text-xs font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-xl flex items-center justify-center gap-2 shadow-sm text-center"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>طلب مباشر عالواتساب</span>
              </a>
              <button
                type="button"
                onClick={() => setActiveProduct(null)}
                className="min-h-[46px] px-4 py-2.5 text-xs font-bold text-[#425B58] bg-[#F2E8DE] hover:bg-[#E2D5C8] rounded-xl transition-colors"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ORIGINAL BUSINESS CARD LIGHTBOX MODAL */}
      {isCardModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-end sm:items-center justify-center sm:p-4"
          onClick={() => setIsCardModalOpen(false)}
        >
          <div
            className="bg-[#123E3B] border border-white/20 rounded-t-3xl sm:rounded-3xl max-w-md w-full p-5 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sm:hidden w-12 h-1.5 bg-white/30 rounded-full mx-auto mb-3" />
            <div className="flex items-center justify-between mb-4">
              <span className="font-display font-bold text-base">
                بطاقة عمل مرطبات رتولة
              </span>
              <button
                type="button"
                onClick={() => setIsCardModalOpen(false)}
                className="min-h-[40px] min-w-[40px] flex items-center justify-center text-white/70 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src={BRAND_INFO.cardImage}
              alt="بطاقة عمل مرطبات رتولة الأصلية"
              referrerPolicy="no-referrer"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
