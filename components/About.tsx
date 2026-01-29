'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              {t.about.title}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        {/* Profile Photo */}
        <div className="flex justify-center mb-12">
          <div className="relative w-48 h-48 md:w-64 md:h-64 animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/40 via-pink-400/40 to-indigo-400/40 blur-2xl animate-pulse-slow"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900 p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 text-gray-600 dark:text-gray-400 leading-relaxed">
          <p className="text-lg md:text-xl font-light">{t.about.text1}</p>
          <p className="text-lg md:text-xl font-light">{t.about.text2}</p>
          {t.about.text3 && <p className="text-lg md:text-xl font-light">{t.about.text3}</p>}
        </div>
      </div>
    </section>
  );
}
