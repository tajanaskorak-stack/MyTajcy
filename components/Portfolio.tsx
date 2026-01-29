'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              {t.portfolio.title}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>
        <div className="text-center">
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light">{t.portfolio.text}</p>
        </div>
      </div>
    </section>
  );
}
