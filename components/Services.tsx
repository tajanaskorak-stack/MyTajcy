'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Interactive Icons Component with colors
const ServiceIcon = ({ 
  icon, 
  label, 
  isActive, 
  onClick,
  gradient
}: { 
  icon: string; 
  label: string; 
  isActive: boolean; 
  onClick: () => void;
  gradient: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl transition-all duration-500 transform hover:scale-125 hover:rotate-3 ${
        isActive
          ? 'scale-125 rotate-3'
          : ''
      }`}
      style={{
        background: isActive
          ? gradient
          : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
        boxShadow: isActive
          ? '0 20px 40px rgba(0,0,0,0.2), 0 0 30px rgba(236, 72, 153, 0.4)'
          : '0 4px 15px rgba(0,0,0,0.1)',
      }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <span className={`text-5xl md:text-6xl mb-3 relative z-10 transform transition-all duration-500 ${isActive ? 'animate-bounce' : 'group-hover:animate-float'}`}>
        {icon}
      </span>
      <span className={`text-xs md:text-sm font-bold relative z-10 ${
        isActive ? 'text-white' : 'text-gray-700 dark:text-gray-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600'
      }`}>
        {label}
      </span>
      {isActive && (
        <div className="absolute inset-0 rounded-2xl animate-ping opacity-20" style={{ background: gradient }}></div>
      )}
    </button>
  );
};

export default function Services() {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState<string | null>(null);

  const serviceIcons = [
    { 
      id: 'webdev', 
      icon: '🌐', 
      label: t.services.webdev.title.replace('🌐 ', '').substring(0, 12),
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)'
    },
    { 
      id: 'maintenance', 
      icon: '🔧', 
      label: t.services.maintenance.title.replace('🔧 ', '').substring(0, 12),
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)'
    },
    { 
      id: 'offers', 
      icon: '📄', 
      label: t.services.offers.title.replace('📄 ', '').substring(0, 12),
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #fb7185 100%)'
    },
    { 
      id: 'automation', 
      icon: '🔹', 
      label: t.services.automation.title.replace('🔹 ', '').substring(0, 12),
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 50%, #c084fc 100%)'
    },
    { 
      id: 'social', 
      icon: '📱', 
      label: t.services.social.title.replace('📱 ', '').substring(0, 12),
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #fb7185 100%)'
    },
    { 
      id: 'logo', 
      icon: '🎨', 
      label: t.services.logo.title.replace('🎨 ', '').substring(0, 12),
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 50%, #ec4899 100%)'
    },
    { 
      id: 'newsletter', 
      icon: '💌', 
      label: t.services.newsletter.title.replace('💌 ', '').substring(0, 12),
      gradient: 'linear-gradient(135deg, #f472b6 0%, #ec4899 50%, #db2777 100%)'
    },
    { 
      id: 'custom', 
      icon: '✨', 
      label: t.services.custom.title.replace('✨ ', '').substring(0, 12),
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)'
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-purple-50 via-pink-50 to-indigo-50 dark:from-black dark:via-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              {t.services.title}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Interactive Icons Grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6 mb-16">
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
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border-2 border-transparent bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-gray-800 hover:border-purple-200 dark:hover:border-gray-600 scroll-mt-8"
          >
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <span className="text-4xl">🌐</span>
              <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-gray-100">
                {t.services.webdev.title.replace('🌐 ', '')}
              </h3>
            </div>
            <p className="font-semibold text-secondary mb-8 text-base md:text-lg">
              {t.services.webdev.note}
            </p>

            <div className="space-y-6">
              {/* Basic Web */}
              <div className="pb-8 border-b border-gray-100 last:border-0">
                <h4 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-100 mb-3">
                  {t.services.webdev.basic.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-base md:text-lg font-light">{t.services.webdev.basic.desc}</p>
                <ul className="list-none space-y-2.5 mb-5">
                  {t.services.webdev.basic.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 text-lg">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-bold text-primary dark:text-gray-100 text-lg">{t.services.webdev.basic.price}</p>
              </div>

              {/* Standard Web */}
              <div className="pb-8 border-b border-gray-100 last:border-0">
                <h4 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-100 mb-3">
                  {t.services.webdev.standard.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-base md:text-lg font-light">{t.services.webdev.standard.desc}</p>
                <ul className="list-none space-y-2.5 mb-5">
                  {t.services.webdev.standard.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 text-lg">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-bold text-primary dark:text-gray-100 text-lg">{t.services.webdev.standard.price}</p>
              </div>

              {/* Premium Web */}
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-100 mb-3">
                  {t.services.webdev.premium.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-base md:text-lg font-light">{t.services.webdev.premium.desc}</p>
                <ul className="list-none space-y-2.5 mb-5">
                  {t.services.webdev.premium.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 text-lg">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-bold text-primary dark:text-gray-100 text-lg">{t.services.webdev.premium.price}</p>
              </div>
            </div>
          </div>

          {/* Website Maintenance */}
          <div 
            id="maintenance"
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border-2 border-transparent bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-gray-800 hover:border-purple-200 dark:hover:border-gray-600 scroll-mt-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">🔧</span>
              <h4 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-100">
                {t.services.maintenance.title.replace('🔧 ', '')}
              </h4>
            </div>
            <ul className="list-none space-y-2.5 mb-5">
              {t.services.maintenance.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-secondary mr-3 text-lg">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="font-bold text-primary dark:text-gray-100 text-lg">{t.services.maintenance.price}</p>
          </div>

          {/* Online Offers & Booking */}
          <div 
            id="offers"
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border-2 border-transparent bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-gray-800 hover:border-purple-200 dark:hover:border-gray-600 scroll-mt-8"
          >
            <div className="space-y-6">
              <div className="pb-8 border-b border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">📄</span>
                  <h4 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-100">
                    {t.services.offers.title.replace('📄 ', '')}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-5 text-base md:text-lg font-light">{t.services.offers.desc}</p>
                <p className="font-bold text-primary dark:text-gray-100 text-lg">{t.services.offers.price}</p>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">➕</span>
                  <h4 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-100">
                    {t.services.booking.title.replace('➕ ', '')}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-5 text-base md:text-lg font-light">{t.services.booking.desc}</p>
                <p className="font-bold text-primary dark:text-gray-100 text-lg">{t.services.booking.price}</p>
              </div>
            </div>
          </div>

          {/* Business Automation */}
          <div 
            id="automation"
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border-2 border-transparent bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-gray-800 hover:border-purple-200 dark:hover:border-gray-600 scroll-mt-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">🔹</span>
              <h4 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-100">
                {t.services.automation.title.replace('🔹 ', '')}
              </h4>
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
            <div
              className="font-bold text-primary dark:text-gray-100 text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.services.automation.price }}
            />
          </div>

          {/* Social Media Management */}
          <div 
            id="social"
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border-2 border-transparent bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-gray-800 hover:border-purple-200 dark:hover:border-gray-600 scroll-mt-8"
          >
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <span className="text-4xl">📱</span>
              <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-gray-100">
                {t.services.social.title.replace('📱 ', '')}
              </h3>
            </div>
            <div className="space-y-8">
              <div className="pb-8 border-b border-gray-100">
                <h4 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-100 mb-4">
                  {t.services.social.mini.title}
                </h4>
                <ul className="list-none space-y-2.5 mb-5">
                  {t.services.social.mini.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 text-lg">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-bold text-primary dark:text-gray-100 text-lg">{t.services.social.mini.price}</p>
              </div>
              <div className="pb-8 border-b border-gray-100">
                <h4 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-100 mb-4">
                  {t.services.social.standard.title}
                </h4>
                <ul className="list-none space-y-2.5 mb-5">
                  {t.services.social.standard.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 text-lg">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-bold text-primary dark:text-gray-100 text-lg">{t.services.social.standard.price}</p>
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-100 mb-4">
                  {t.services.social.premium.title}
                </h4>
                <ul className="list-none space-y-2.5 mb-5">
                  {t.services.social.premium.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 text-lg">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-bold text-primary dark:text-gray-100 text-lg">{t.services.social.premium.price}</p>
              </div>
            </div>
          </div>

          {/* Logo & Visual Identity */}
          <div 
            id="logo"
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border-2 border-transparent bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-gray-800 hover:border-purple-200 dark:hover:border-gray-600 scroll-mt-8"
          >
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <span className="text-4xl">🎨</span>
              <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-gray-100">
                {t.services.logo.title.replace('🎨 ', '')}
              </h3>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border-2 border-dashed border-secondary mb-8">
                <h4 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-100 mb-4">
                  {t.services.logo.bundle.title}
                </h4>
                <div
                  className="text-gray-600 dark:text-gray-400 leading-relaxed font-light"
                  dangerouslySetInnerHTML={{ __html: t.services.logo.bundle.desc }}
                />
              </div>
              <div className="pb-8 border-b border-gray-100">
                <h4 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-100 mb-4">
                  {t.services.logo.basic.title}
                </h4>
                <ul className="list-none space-y-2.5 mb-5">
                  {t.services.logo.basic.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 text-lg">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-bold text-primary dark:text-gray-100 text-lg">{t.services.logo.basic.price}</p>
              </div>
              <div className="pb-8 border-b border-gray-100">
                <h4 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-100 mb-4">
                  {t.services.logo.standard.title}
                </h4>
                <ul className="list-none space-y-2.5 mb-5">
                  {t.services.logo.standard.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 text-lg">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-bold text-primary dark:text-gray-100 text-lg">{t.services.logo.standard.price}</p>
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-100 mb-4">
                  {t.services.logo.premium.title}
                </h4>
                <ul className="list-none space-y-2.5 mb-5">
                  {t.services.logo.premium.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 text-lg">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-bold text-primary dark:text-gray-100 text-lg">{t.services.logo.premium.price}</p>
              </div>
            </div>
          </div>

          {/* Newsletters */}
          <div 
            id="newsletter"
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border-2 border-transparent bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-gray-800 hover:border-purple-200 dark:hover:border-gray-600 scroll-mt-8"
          >
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <span className="text-4xl">💌</span>
              <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-gray-100">
                {t.services.newsletter.title.replace('💌 ', '')}
              </h3>
            </div>
            <div className="space-y-8">
              <div className="pb-8 border-b border-gray-100">
                <h4 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-100 mb-4">
                  {t.services.newsletter.mini.title}
                </h4>
                <ul className="list-none space-y-2.5 mb-5">
                  {t.services.newsletter.mini.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 text-lg">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-bold text-primary dark:text-gray-100 text-lg">{t.services.newsletter.mini.price}</p>
              </div>
              <div className="pb-8 border-b border-gray-100">
                <h4 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-100 mb-4">
                  {t.services.newsletter.standard.title}
                </h4>
                <ul className="list-none space-y-2.5 mb-5">
                  {t.services.newsletter.standard.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 text-lg">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-bold text-primary dark:text-gray-100 text-lg">{t.services.newsletter.standard.price}</p>
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-100 mb-4">
                  {t.services.newsletter.premium.title}
                </h4>
                <ul className="list-none space-y-2.5 mb-5">
                  {t.services.newsletter.premium.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3 text-lg">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-bold text-primary dark:text-gray-100 text-lg">{t.services.newsletter.premium.price}</p>
              </div>
            </div>
          </div>

          {/* Custom Requests */}
          <div 
            id="custom"
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border-2 border-transparent bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-gray-800 hover:border-purple-200 dark:hover:border-gray-600 scroll-mt-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">✨</span>
              <h4 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-100">
                {t.services.custom.title.replace('✨ ', '')}
              </h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-5 text-base md:text-lg font-light">{t.services.custom.desc}</p>
            <p className="font-bold text-primary dark:text-gray-100 text-lg mb-5">{t.services.custom.price}</p>
            <p className="text-gray-600 dark:text-gray-400 font-light">{t.services.custom.footer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
