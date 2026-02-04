'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-[75vh] sm:min-h-[80vh] md:min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-black dark:via-gray-900 dark:to-black overflow-hidden py-12 sm:py-16 md:py-20">
      {/* Animated background decorative elements – scale down on small screens */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 dark:from-purple-600/20 dark:to-pink-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 dark:from-indigo-600/20 dark:to-purple-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-pink-400/20 to-purple-400/20 dark:from-pink-600/10 dark:to-purple-600/10 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <div className="max-w-4xl mx-auto">
          {/* Premium Badge – smaller on mobile */}
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-8 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-800 dark:to-gray-800 border border-indigo-300 dark:border-gray-600 rounded-full">
            <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Premium Web Solutions
            </span>
          </div>

          <h1 className="text-display font-bold mb-4 sm:mb-8 leading-[1.1] tracking-tight px-1">
            <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-pink-600 bg-clip-text text-transparent animate-pulse-slow">
              Helping your ideas shine
            </span>
            <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent mt-1 sm:mt-2">
              with a smile.
            </span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-12 px-1">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto min-h-[48px] flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-500/50"
            >
              {language === 'hr' ? 'Saznaj više' : 'Learn More'}
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto min-h-[48px] flex items-center justify-center relative px-6 sm:px-8 py-3.5 sm:py-4 font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl overflow-hidden group border-2 border-transparent"
              style={{
                background: 'linear-gradient(var(--hero-btn-fill), var(--hero-btn-fill)) padding-box, linear-gradient(to right, #9333ea, #ec4899) border-box',
              }}
            >
              <span className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
                {language === 'hr' ? 'Kontaktiraj me' : 'Contact Me'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
