'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary dark:bg-gray-900 text-white py-12 border-t border-gray-800 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo – modern signature style, slightly larger */}
        <Link
          href="/"
          className="inline-block mb-6 font-signature text-2xl md:text-3xl font-normal tracking-[0.02em] text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg transition-opacity"
        >
          MyTajcy
        </Link>
        <p className="text-sm opacity-80 font-light">{t.footer.text}</p>
      </div>
    </footer>
  );
}
