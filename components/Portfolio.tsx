'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const travelBlogImages = [
  { src: '/Screenshot 2026-01-28 133558.png', key: 'hero' },
  { src: '/Screenshot 2026-01-28 135521.png', key: 'featured' },
  { src: '/Screenshot 2026-02-03 215435.png', key: 'contact' },
] as const;

export default function Portfolio() {
  const { t } = useLanguage();
  const tb = t.portfolio.travelBlog;

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              {t.portfolio.title}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>
        <p className="text-center text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light mb-8 sm:mb-12 px-2">
          {t.portfolio.text}
        </p>

        {/* Last project: Travel Tales – travel blog */}
        <div className="mt-10 sm:mt-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8 text-center px-2">
            {tb.projectTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {travelBlogImages.map(({ src, key }) => (
              <article
                key={key}
                className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg bg-white dark:bg-gray-900"
              >
                <div className="aspect-[4/3] relative bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={src}
                    alt={
                      key === 'hero'
                        ? tb.heroCaption
                        : key === 'featured'
                          ? tb.featuredCaption
                          : tb.contactCaption
                    }
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="p-4 text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
                  {key === 'hero'
                    ? tb.heroCaption
                    : key === 'featured'
                      ? tb.featuredCaption
                      : tb.contactCaption}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
