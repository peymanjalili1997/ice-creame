import React, { useState } from 'react';
import { Check, Copy, Download, Eye, Instagram, Phone, Sparkles } from 'lucide-react';
import { BRAND_INFO, IllustrationVariant } from '../data/menuData';
import { DessertIllustration } from './DessertIllustration';
import { TikTokIcon } from './TikTokIcon';

interface BusinessCardShowcaseProps {
  activeIllustration?: IllustrationVariant;
  activeTitle?: string;
  activeSubtitle?: string;
}

export const BusinessCardShowcase: React.FC<BusinessCardShowcaseProps> = ({
  activeIllustration = 'signature_splash_cone',
  activeTitle = 'كورن رتولة الملكي (سبلاش ٤ نكهات)',
  activeSubtitle = 'مزيج الشوكولاتة البلجيكية والليمون والفراولة والتوت الأزرق',
}) => {
  const [viewMode, setViewMode] = useState<'fantasy' | 'original'>('fantasy');
  const [copiedField, setCopiedField] = useState<'phone' | 'insta' | 'tiktok' | null>(null);
  const [imgError, setImgError] = useState(false);
  const [tilt, setTilt] = useState<{ rx: number; ry: number }>({ rx: 0, ry: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -y * 8, ry: x * 8 });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 });
  };

  const handleCopy = (value: string, field: 'phone' | 'insta') => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleDownloadVCard = () => {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:مرطبات رتولة',
      'ORG:مرطبات رتولة - ذوق والطعم سعادة',
      `TEL;TYPE=CELL,VOICE:${BRAND_INFO.phoneInternational}`,
      `URL:${BRAND_INFO.instagramUrl}`,
      'NOTE:مرطبات رتولة - ذوق والطعم سعادة | Instagram: @rat_oo10',
      'END:VCARD',
    ].join('\n');

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ratoola-card.vcf';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col justify-between h-full bg-[#0E3330]/90 backdrop-blur-md text-white rounded-3xl p-6 lg:p-7 border border-white/15 shadow-2xl relative overflow-hidden">
      {/* Decorative Melted Pink Corner Drip matching the physical business card */}
      <svg
        viewBox="0 0 220 90"
        className="w-44 h-20 absolute top-0 left-0 pointer-events-none opacity-95"
        aria-hidden="true"
      >
        <path
          d="M0,0 L180,0 L180,18 C162,18 156,58 142,58 C128,58 124,22 110,22 C96,22 92,76 76,76 C60,76 56,28 40,28 C24,28 18,52 0,52 Z"
          fill="#DF3B88"
        />
        <line x1="76" y1="22" x2="76" y2="62" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="142" y1="16" x2="142" y2="46" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      {/* Top Mode Switcher Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2 text-xs text-[#F9B4D2] font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#F7D94C]" />
          <span>منصة عرض هوية مرطبات رتولة</span>
        </div>

        <div className="flex items-center gap-1 p-1 bg-[#082220] rounded-xl border border-white/10">
          <button
            type="button"
            onClick={() => setViewMode('fantasy')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              viewMode === 'fantasy'
                ? 'bg-[#DF3B88] text-white shadow-xs'
                : 'text-[#B5D6D4] hover:text-white'
            }`}
          >
            البطاقة التفاعلية ثلاثية الأبعاد
          </button>
          <button
            type="button"
            onClick={() => setViewMode('original')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              viewMode === 'original'
                ? 'bg-[#DF3B88] text-white shadow-xs'
                : 'text-[#B5D6D4] hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>صورة الكارت الأصلي</span>
          </button>
        </div>
      </div>

      {/* Centerpiece Stage */}
      {viewMode === 'fantasy' ? (
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
            transition: 'transform 160ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="relative z-10 rounded-2xl bg-gradient-to-br from-[#1D5955] via-[#164A47] to-[#0F3533] border-2 border-white/20 shadow-2xl overflow-hidden min-h-[330px] flex flex-col justify-between p-6"
        >
          {/* Exact Pink Melted Drips along the Bottom-Left of the Card */}
          <svg
            viewBox="0 0 320 120"
            className="w-64 h-28 absolute bottom-0 left-0 pointer-events-none opacity-95"
            aria-hidden="true"
          >
            <path
              d="M0,120 L290,120 C290,94 268,94 268,72 C268,50 244,50 244,82 C244,104 222,104 222,56 C222,28 194,28 194,74 C194,98 172,98 172,42 C172,18 140,18 140,68 C140,92 116,92 116,34 C116,12 82,12 82,62 C82,88 56,88 56,28 L0,28 Z"
              fill="#DF3B88"
            />
            <path
              d="M68,42 L68,76 M128,28 L128,68 M184,42 L184,78 M232,64 L232,92"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center relative z-10 my-auto">
            {/* Right Side of Card: Exact Typography & Gold Contact Badges */}
            <div className="sm:col-span-7 space-y-4">
              <div>
                <div className="inline-block text-xs font-semibold text-[#FDE047] mb-1">
                  ذوق والطعم سعادة · تحضير يومي طازج
                </div>
                <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-none text-white">
                  مرطبات{' '}
                  <span className="ratoola-wordmark-pink inline-block px-1">
                    رتولة
                  </span>
                </h2>
                <p className="mt-2.5 text-xl font-display font-bold text-white/95">
                  ذوق والطعم سعادة
                </p>
              </div>

              {/* Contact Rows with Golden Icons exactly like the Business Card */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center justify-between gap-2 bg-[#0D2E2C]/85 backdrop-blur-xs border border-white/15 rounded-xl px-3.5 py-2.5">
                  <a
                    href={BRAND_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm font-mono tabular-nums text-white hover:text-[#F9B4D2] transition-colors"
                    dir="ltr"
                  >
                    <span className="w-7 h-7 rounded-lg bg-[#F5A623] text-[#122624] flex items-center justify-center shrink-0 font-bold shadow-xs">
                      <Instagram className="w-4 h-4" />
                    </span>
                    <span className="font-bold tracking-wide text-base">rat_oo10</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('rat_oo10', 'insta')}
                    className="text-xs text-[#B5D6D4] hover:text-white px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-1 whitespace-nowrap shrink-0"
                  >
                    {copiedField === 'insta' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#80C24C]" />
                        <span>تم النسخ</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>نسخ</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-2 bg-[#0D2E2C]/85 backdrop-blur-xs border border-white/15 rounded-xl px-3.5 py-2.5">
                  <a
                    href={BRAND_INFO.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm font-mono tabular-nums text-white hover:text-[#69C9D0] transition-colors"
                    dir="ltr"
                  >
                    <span className="w-7 h-7 rounded-lg bg-[#F5A623] text-[#122624] flex items-center justify-center shrink-0 font-bold shadow-xs">
                      <TikTokIcon className="w-4 h-4" />
                    </span>
                    <span className="font-bold tracking-wide text-base">rat_oo10</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('rat_oo10', 'tiktok')}
                    className="text-xs text-[#B5D6D4] hover:text-white px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-1 whitespace-nowrap shrink-0"
                  >
                    {copiedField === 'tiktok' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#80C24C]" />
                        <span>تم النسخ</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>نسخ</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-2 bg-[#0D2E2C]/85 backdrop-blur-xs border border-white/15 rounded-xl px-3.5 py-2.5">
                  <a
                    href={`tel:${BRAND_INFO.phoneInternational}`}
                    className="flex items-center gap-2.5 text-sm font-mono tabular-nums text-white hover:text-[#F9B4D2] transition-colors"
                    dir="ltr"
                  >
                    <span className="w-7 h-7 rounded-lg bg-[#F5A623] text-[#122624] flex items-center justify-center shrink-0 font-bold shadow-xs">
                      <Phone className="w-4 h-4" />
                    </span>
                    <span className="font-bold tracking-wide text-base">07706444465</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('07706444465', 'phone')}
                    className="text-xs text-[#B5D6D4] hover:text-white px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-1 whitespace-nowrap shrink-0"
                  >
                    {copiedField === 'phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#80C24C]" />
                        <span>تم النسخ</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>نسخ</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Left Side of Card: Dynamic Spotlight Illustration */}
            <div className="sm:col-span-5 flex flex-col items-center justify-center">
              <div className="w-52 h-52 sm:w-56 sm:h-56 drop-shadow-[0_14px_24px_rgba(0,0,0,0.45)] transition-transform duration-200 hover:scale-105">
                <DessertIllustration variant={activeIllustration} />
              </div>
              <div className="mt-1 text-center bg-[#0D2E2C]/90 border border-white/15 rounded-xl px-3 py-1.5">
                <div className="text-xs font-bold text-white">{activeTitle}</div>
                <div className="text-[11px] text-[#F9B4D2] line-clamp-1">{activeSubtitle}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-10 overflow-hidden rounded-2xl bg-[#092422] border-2 border-white/15 min-h-[330px] flex flex-col items-center justify-center p-4">
          {!imgError ? (
            <img
              src={BRAND_INFO.cardImage}
              alt="بطاقة عمل مرطبات رتولة الأصلية - ذوق والطعم سعادة - 07706444465"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="max-h-[290px] w-auto object-contain rounded-xl shadow-xl"
            />
          ) : (
            <div className="text-center p-6">
              <p className="text-base font-bold">مرطبات رتولة — ذوق والطعم سعادة</p>
              <p className="text-xs font-mono mt-1">07706444465 · @rat_oo10</p>
            </div>
          )}
        </div>
      )}

      {/* Bottom Action Bar inside Showcase */}
      <div className="relative z-10 mt-5 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs text-[#C4E2E0]">
          احفظ رقم مرطبات رتولة وحساب الانستغرام في هاتفك بضغطة واحدة:
        </div>
        <button
          type="button"
          onClick={handleDownloadVCard}
          className="px-4 py-2 text-xs font-bold bg-white text-[#123E3B] hover:bg-[#FCE8F2] rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 shadow-xs"
        >
          <Download className="w-3.5 h-3.5 text-[#DF3B88]" />
          <span>حفظ جهة الاتصال (vCard)</span>
        </button>
      </div>
    </div>
  );
};
