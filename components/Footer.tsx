'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary dark:bg-gray-900 text-white py-12 border-t border-gray-800 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm opacity-80 font-light">{t.footer.text}</p>
      </div>
    </footer>
  );
}
