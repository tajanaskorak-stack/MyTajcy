'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Colorful solution icons (SVG) – each with distinct colors
const IconWeb = () => (
  <svg className="w-12 h-12 md:w-14 md:h-14" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="webGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366f1" />
        <stop offset="1" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" stroke="url(#webGrad)" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="url(#webGrad)" />
  </svg>
);
const IconMaintenance = () => (
  <svg className="w-12 h-12 md:w-14 md:h-14" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path
      d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      stroke="#3b82f6"
      fill="#93c5fd"
      fillOpacity="0.4"
    />
  </svg>
);
const IconOffers = () => (
  <svg className="w-12 h-12 md:w-14 md:h-14" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" fill="#10b981" stroke="#059669" />
    <circle cx="20" cy="21" r="1" fill="#10b981" stroke="#059669" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="#059669" fill="#a7f3d0" fillOpacity="0.5" />
  </svg>
);
const IconAutomation = () => (
  <svg className="w-12 h-12 md:w-14 md:h-14" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20V10" stroke="#f59e0b" strokeWidth="2" />
    <path d="M18 20V4" stroke="#ea580c" strokeWidth="2" />
    <path d="M6 20v-4" stroke="#d97706" strokeWidth="2" />
  </svg>
);
const IconSocial = () => (
  <svg className="w-12 h-12 md:w-14 md:h-14" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="#ec4899" fill="#f9a8d4" fillOpacity="0.5" />
  </svg>
);
const IconCustom = () => (
  <svg className="w-12 h-12 md:w-14 md:h-14" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="customGrad" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#eab308" />
        <stop offset="0.5" stopColor="#f59e0b" />
        <stop offset="1" stopColor="#f97316" />
      </linearGradient>
    </defs>
    <path
      d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"
      stroke="url(#customGrad)"
      fill="#fde047"
      fillOpacity="0.35"
    />
  </svg>
);

// Price badge: circle with € + number only (like reference image).
// Wrapper aligns all prices in the same column on desktop; stacks on mobile.
const PRICE_COLUMN_MIN_WIDTH = '10rem'; // ~160px: fits "149 / 49" + € circle

const PriceBadge = ({
  amount,
  showEuroCircle = true,
}: {
  amount: string;
  showEuroCircle?: boolean;
}) => (
  <div className="flex items-center gap-2 flex-shrink-0">
    <span className="font-bold text-primary dark:text-gray-100 text-base sm:text-lg whitespace-nowrap">
      {amount}
    </span>
    {showEuroCircle && (
      <div
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white font-bold text-base sm:text-lg shrink-0"
        aria-hidden
      >
        €
      </div>
    )}
  </div>
);

// Wrapper: same row on sm+, fixed-width price column for alignment.
const PriceCell = ({ children }: { children: React.ReactNode }) => (
  <div
    className="flex flex-shrink-0 justify-end w-full sm:w-auto sm:min-w-[10rem]"
  >
    {children}
  </div>
);

// Inactive card background: subtle purple–pink–indigo tint to match section and Hero
const CARD_BG_LIGHT =
  'linear-gradient(145deg, #ffffff 0%, #faf5ff 35%, #fdf2f8 70%, #eef2ff 100%)';
const CARD_BG_DARK =
  'linear-gradient(145deg, rgba(30,27,75,0.5) 0%, rgba(30,27,75,0.35) 50%, rgba(55,48,163,0.2) 100%)';

// Interactive service card: elegant tinted background, clear text, hover glow
const ServiceIcon = ({
  icon,
  label,
  isActive,
  onClick,
  gradient,
}: {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
  gradient: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 rounded-2xl transition-all duration-500 transform hover:scale-[1.03] min-h-[100px] sm:min-h-[120px] md:min-h-[140px] border ${
        isActive
          ? 'scale-[1.03] border-transparent'
          : 'border-purple-100/80 dark:border-gray-600/80 hover:border-purple-300/80 dark:hover:border-gray-500 shadow-lg shadow-purple-900/5 dark:shadow-black/30 hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20'
      }`}
      style={{
        background: isActive ? gradient : undefined,
        // Inactive: use CSS variables so dark mode can override via class
        ...(isActive
          ? {
              boxShadow:
                '0 20px 40px rgba(0,0,0,0.2), 0 0 40px rgba(139, 92, 246, 0.35), 0 0 60px rgba(236, 72, 153, 0.2)',
            }
          : {}),
      }}
    >
      {/* Inactive state: tinted gradient — light theme */}
      {!isActive && (
        <span
          className="absolute inset-0 rounded-2xl dark:opacity-0"
          style={{ background: CARD_BG_LIGHT }}
          aria-hidden
        />
      )}
      {/* Inactive state: dark theme */}
      {!isActive && (
        <span
          className="absolute inset-0 rounded-2xl opacity-0 dark:opacity-100"
          style={{ background: CARD_BG_DARK }}
          aria-hidden
        />
      )}
      {/* Hover: soft gradient glow */}
      {!isActive && (
        <span
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(236,72,153,0.06) 100%)`,
            boxShadow: 'inset 0 0 0 1px rgba(139,92,246,0.15)',
          }}
          aria-hidden
        />
      )}
      <span
        className={`mb-3 relative z-10 transform transition-all duration-500 flex items-center justify-center ${
          isActive ? 'text-white animate-bounce' : 'group-hover:animate-float'
        }`}
      >
        {icon}
      </span>
      <span
        className={`text-[10px] sm:text-xs font-bold relative z-10 text-center leading-tight px-1 transition-colors duration-300 ${
          isActive
            ? 'text-white drop-shadow-sm'
            : 'text-slate-800 dark:text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600'
        }`}
      >
        {label}
      </span>
      {isActive && (
        <div
          className="absolute inset-0 rounded-2xl animate-ping opacity-20 pointer-events-none"
          style={{ background: gradient }}
          aria-hidden
        />
      )}
    </button>
  );
};

export default function Services() {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState<string | null>(null);

  // Full service titles + modern solution icons (no truncation)
  const serviceIcons = [
    {
      id: 'webdev',
      icon: <IconWeb />,
      label: t.services.webdev.title,
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
    },
    {
      id: 'maintenance',
      icon: <IconMaintenance />,
      label: t.services.maintenance.title,
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)',
    },
    {
      id: 'offers',
      icon: <IconOffers />,
      label: t.services.offers.title,
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #fb7185 100%)',
    },
    {
      id: 'automation',
      icon: <IconAutomation />,
      label: t.services.automation.title,
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 50%, #c084fc 100%)',
    },
    {
      id: 'social',
      icon: <IconSocial />,
      label: t.services.social.title,
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #fb7185 100%)',
    },
    {
      id: 'custom',
      icon: <IconCustom />,
      label: t.services.custom.title,
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 via-pink-50 to-indigo-50 dark:from-black dark:via-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              {t.services.title}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Service cards: full titles + solution icons; responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 mb-16">
          {serviceIcons.map((service, index) => (
            <ServiceIcon
              key={service.id}
              icon={service.icon}
              label={service.label}
              gradient={service.gradient}
              isActive={activeService === service.id}
              onClick={() => {
                const element = document.getElementById(service.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  setActiveService(service.id);
                  setTimeout(() => setActiveService(null), 2000);
                }
              }}
            />
          ))}
        </div>

        <div className="space-y-10">
          {/* Website Development */}
          <div
            id="webdev"
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 border-2 border-transparent bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-gray-800 hover:border-purple-200 dark:hover:border-gray-600 scroll-mt-6 sm:scroll-mt-8"
          >
            <div className="flex items-center gap-4 mb-4 sm:mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary dark:text-gray-100">
                {t.services.webdev.title}
              </h3>
            </div>
            <p className="font-semibold text-secondary mb-8 text-base md:text-lg">
              {t.services.webdev.note}
            </p>

            <div className="space-y-6">
              {/* Basic Web */}
              <div className="pb-8 border-b border-gray-100 last:border-0">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-3">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-primary dark:text-gray-100 min-w-0 flex-1">
                    {t.services.webdev.basic.title}
                  </h4>
                  <PriceCell>
                    <PriceBadge amount={t.services.webdev.basic.priceShort} />
                  </PriceCell>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-base md:text-lg font-light">{t.services.webdev.basic.desc}</p>
                <ul className="list-none space-y-2.5 mb-5">
                  {t.services.webdev.basic.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 text-lg">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Standard Web */}
              <div className="pb-8 border-b border-gray-100 last:border-0">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-3">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-primary dark:text-gray-100 min-w-0 flex-1">
                    {t.services.webdev.standard.title}
                  </h4>
                  <PriceCell>
                    <PriceBadge amount={t.services.webdev.standard.priceShort} />
                  </PriceCell>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-base md:text-lg font-light">{t.services.webdev.standard.desc}</p>
                <ul className="list-none space-y-2.5 mb-5">
                  {t.services.webdev.standard.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 text-lg">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Premium Web */}
              <div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-3">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-primary dark:text-gray-100 min-w-0 flex-1">
                    {t.services.webdev.premium.title}
                  </h4>
                  <PriceCell>
                    <PriceBadge amount={t.services.webdev.premium.priceShort} />
                  </PriceCell>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-base md:text-lg font-light">{t.services.webdev.premium.desc}</p>
                <ul className="list-none space-y-2.5 mb-5">
                  {t.services.webdev.premium.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 text-lg">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Website Maintenance */}
          <div
            id="maintenance"
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 border-2 border-transparent bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-gray-800 hover:border-purple-200 dark:hover:border-gray-600 scroll-mt-6 sm:scroll-mt-8"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-4">
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-primary dark:text-gray-100 min-w-0 flex-1">
                {t.services.maintenance.title}
              </h4>
              <PriceCell>
                <PriceBadge amount={t.services.maintenance.priceShort} />
              </PriceCell>
            </div>
            <ul className="list-none space-y-2.5 mb-5">
              {t.services.maintenance.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-secondary mr-3 text-lg">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Online Offers & Booking */}
          <div
            id="offers"
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 border-2 border-transparent bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-gray-800 hover:border-purple-200 dark:hover:border-gray-600 scroll-mt-6 sm:scroll-mt-8"
          >
            <div className="space-y-6">
              <div className="pb-8 border-b border-gray-100">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-4">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-primary dark:text-gray-100 min-w-0 flex-1">
                  {t.services.offers.title}
                </h4>
                <PriceCell>
                  <PriceBadge amount={t.services.offers.priceShort} />
                </PriceCell>
              </div>
                <p className="text-gray-600 dark:text-gray-400 mb-5 text-base md:text-lg font-light">{t.services.offers.desc}</p>
              </div>
              <div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-4">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-primary dark:text-gray-100 min-w-0 flex-1">
                  {t.services.booking.title}
                </h4>
                <PriceCell>
                  <PriceBadge amount={t.services.booking.priceShort} />
                </PriceCell>
              </div>
                <p className="text-gray-600 dark:text-gray-400 mb-5 text-base md:text-lg font-light">{t.services.booking.desc}</p>
              </div>
            </div>
          </div>

          {/* Business Automation */}
          <div 
            id="automation"
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border-2 border-transparent bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-gray-800 hover:border-purple-200 dark:hover:border-gray-600 scroll-mt-8"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <h4 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-100 min-w-0 flex-1">
                {t.services.automation.title}
              </h4>
              <PriceCell>
                <PriceBadge amount={t.services.automation.priceShort} />
              </PriceCell>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-5 text-base md:text-lg font-light">{t.services.automation.desc}</p>
            <ul className="list-none space-y-2.5 mb-5">
              {t.services.automation.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-secondary mr-3 text-lg">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Management */}
          <div
            id="social"
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 border-2 border-transparent bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-gray-800 hover:border-purple-200 dark:hover:border-gray-600 scroll-mt-6 sm:scroll-mt-8"
          >
            <div className="flex items-center gap-4 mb-4 sm:mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary dark:text-gray-100">
                {t.services.social.sectionTitle || 'SOCIAL MEDIA'}
              </h3>
            </div>
            <div className="space-y-8">
              <div className="pb-8 border-b border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h4 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-100 min-w-0 flex-1">
                    {`${t.services.social.sectionTitle || 'SOCIAL MEDIA'} ${t.services.social.mini.title}`}
                  </h4>
                  <PriceCell>
                    <PriceBadge amount={t.services.social.mini.priceShort} />
                  </PriceCell>
                </div>
                <ul className="list-none space-y-2.5 mb-5">
                  {t.services.social.mini.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 text-lg">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pb-8 border-b border-gray-100">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-4">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-primary dark:text-gray-100 min-w-0 flex-1">
                    {`${t.services.social.sectionTitle || 'SOCIAL MEDIA'} ${t.services.social.standard.title}`}
                  </h4>
                  <PriceCell>
                    <PriceBadge amount={t.services.social.standard.priceShort} />
                  </PriceCell>
                </div>
                <ul className="list-none space-y-2.5 mb-5">
                  {t.services.social.standard.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 text-lg">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-4">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-primary dark:text-gray-100 min-w-0 flex-1">
                    {`${t.services.social.sectionTitle || 'SOCIAL MEDIA'} ${t.services.social.premium.title}`}
                  </h4>
                  <PriceCell>
                    <PriceBadge amount={t.services.social.premium.priceShort} />
                  </PriceCell>
                </div>
                <ul className="list-none space-y-2.5 mb-5">
                  {t.services.social.premium.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 text-lg">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletters */}
          <div 
            id="newsletter"
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border-2 border-transparent bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-gray-800 hover:border-purple-200 dark:hover:border-gray-600 scroll-mt-8"
          >
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-gray-100">
                {t.services.newsletter.title}
              </h3>
            </div>
            <div className="space-y-8">
              <div className="pb-8 border-b border-gray-100">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-4">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-primary dark:text-gray-100 min-w-0 flex-1">
                  {t.services.newsletter.mini.title}
                </h4>
                <PriceCell>
                  <PriceBadge amount={t.services.newsletter.mini.priceShort} />
                </PriceCell>
              </div>
                <ul className="list-none space-y-2.5 mb-5">
                  {t.services.newsletter.mini.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 text-lg">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pb-8 border-b border-gray-100">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-4">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-primary dark:text-gray-100 min-w-0 flex-1">
                  {t.services.newsletter.standard.title}
                </h4>
                <PriceCell>
                  <PriceBadge amount={t.services.newsletter.standard.priceShort} />
                </PriceCell>
              </div>
                <ul className="list-none space-y-2.5 mb-5">
                  {t.services.newsletter.standard.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 text-lg">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
<div className="flex items-start justify-between gap-4 mb-4">
                <h4 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-100 min-w-0 flex-1">
                  {t.services.newsletter.premium.title}
                </h4>
                <PriceCell>
                  <PriceBadge amount={t.services.newsletter.premium.priceShort} />
                </PriceCell>
              </div>
                <ul className="list-none space-y-2.5 mb-5">
                  {t.services.newsletter.premium.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 text-lg">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Custom Requests */}
          <div
            id="custom"
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 border-2 border-transparent bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-gray-800 hover:border-purple-200 dark:hover:border-gray-600 scroll-mt-6 sm:scroll-mt-8"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-4">
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-primary dark:text-gray-100 min-w-0 flex-1">
                {t.services.custom.title}
              </h4>
              <PriceCell>
                <PriceBadge amount={t.services.custom.priceShort} showEuroCircle={false} />
              </PriceCell>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-5 text-base md:text-lg font-light">{t.services.custom.desc}</p>
            <p className="text-gray-600 dark:text-gray-400 font-light">{t.services.custom.footer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
