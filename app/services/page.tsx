'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CATEGORIES = [
  { id: 'all', labelHr: 'Sve', labelEn: 'All', keys: [] },
  { id: 'web', labelHr: 'Web', labelEn: 'Web', keys: ['webdev', 'maintenance'] },
  { id: 'marketing', labelHr: 'Marketing', labelEn: 'Marketing', keys: ['social', 'newsletter'] },
  { id: 'other', labelHr: 'Ostalo', labelEn: 'Other', keys: ['offers', 'booking', 'automation', 'custom'] },
];

function ServiceCard({
  title,
  desc,
  features,
  price,
  priceShort,
  isExpanded,
  onToggle,
  gradient,
}: {
  title: string;
  desc?: string;
  features?: string[];
  price: string;
  priceShort?: string;
  isExpanded: boolean;
  onToggle: () => void;
  gradient: string;
}) {
  // Fixed-width price column so all cards align vertically (one below the other)
  const priceColumnMinWidth = '10rem';

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-all duration-300 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10"
      style={{ borderColor: isExpanded ? 'rgb(147 51 234)' : undefined }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-5 flex items-center gap-4"
      >
        <span className="font-semibold text-xl text-gray-900 dark:text-gray-100 line-clamp-2 uppercase min-w-0 flex-1">
          {title}
        </span>
        <div
          className="flex items-center justify-end gap-2 shrink-0"
          style={{ minWidth: priceColumnMinWidth }}
        >
          {(() => {
            const num = (priceShort ?? price).match(/\d+/)?.[0];
            return num ? (
              <span className="text-base font-bold text-gray-700 dark:text-gray-200 whitespace-nowrap">
                {num}
              </span>
            ) : null;
          })()}
          <span
            className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${gradient} transition-transform duration-200 group-hover:scale-110`}
          >
            €
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200 shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-0 border-t border-gray-100 dark:border-gray-800">
            {desc && (
              <p className="text-gray-600 dark:text-gray-400 text-base mb-4 leading-relaxed">{desc}</p>
            )}
            {features && features.length > 0 && (
              <ul className="space-y-2 mb-4">
                {features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-base text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-purple-500 mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            )}
            <div
              className="text-base font-semibold text-purple-600 dark:text-purple-400"
              dangerouslySetInnerHTML={{ __html: price }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function flattenServices(t: (typeof import('@/lib/translations').translations)['hr']['services']) {
  const items: {
    id: string;
    category: string;
    title: string;
    desc?: string;
    features?: string[];
    price: string;
    priceShort?: string;
  }[] = [];

  const add = (
    cat: string,
    key: string,
    data: { title: string; desc?: string; features?: string[]; price: string; priceShort?: string },
    titleOverride?: string
  ) => {
    items.push({
      id: `${cat}-${key}`,
      category: cat,
      title: titleOverride ?? data.title,
      desc: data.desc,
      features: data.features,
      price: data.price,
      priceShort: data.priceShort,
    });
  };

  if (t.webdev?.basic) add('webdev', 'basic', t.webdev.basic);
  if (t.webdev?.standard) add('webdev', 'standard', t.webdev.standard);
  if (t.webdev?.premium) add('webdev', 'premium', t.webdev.premium);
  if (t.maintenance) add('maintenance', 'main', t.maintenance as any);
  if (t.offers) add('offers', 'main', t.offers as any);
  if (t.booking) add('booking', 'main', t.booking as any);
  if (t.automation) add('automation', 'main', t.automation as any);
  if (t.social?.mini)
    add('social', 'mini', t.social.mini, `${t.social.sectionTitle || 'SOCIAL MEDIA'} ${t.social.mini.title}`);
  if (t.social?.standard)
    add('social', 'standard', t.social.standard, `${t.social.sectionTitle || 'SOCIAL MEDIA'} ${t.social.standard.title}`);
  if (t.social?.premium)
    add('social', 'premium', t.social.premium, `${t.social.sectionTitle || 'SOCIAL MEDIA'} ${t.social.premium.title}`);
  if (t.newsletter?.mini) add('newsletter', 'mini', t.newsletter.mini);
  if (t.newsletter?.standard) add('newsletter', 'standard', t.newsletter.standard);
  if (t.newsletter?.premium) add('newsletter', 'premium', t.newsletter.premium);
  if (t.custom) add('custom', 'main', t.custom as any);

  return items;
}

const GRADIENTS: Record<string, string> = {
  webdev: 'bg-gradient-to-r from-indigo-500 to-purple-500',
  maintenance: 'bg-gradient-to-r from-blue-500 to-cyan-500',
  offers: 'bg-gradient-to-r from-amber-500 to-orange-500',
  booking: 'bg-gradient-to-r from-teal-500 to-emerald-500',
  automation: 'bg-gradient-to-r from-violet-500 to-purple-500',
  social: 'bg-gradient-to-r from-pink-500 to-rose-500',
  newsletter: 'bg-gradient-to-r from-purple-500 to-indigo-500',
  custom: 'bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-500 dark:to-gray-700',
};

export default function ServicesPage() {
  const { t, language, setLanguage } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const services = useMemo(() => flattenServices(t.services), [t.services]);

  const filteredServices = useMemo(() => {
    const cat = CATEGORIES.find((c) => c.id === activeCategory);
    let list = services;
    if (cat && cat.keys.length > 0) {
      list = services.filter((s) => cat.keys.includes(s.category));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          (s.desc && s.desc.toLowerCase().includes(q))
      );
    }
    return list;
  }, [services, activeCategory, search]);

  const pageTitle = language === 'hr' ? 'Cijene i usluge' : 'Prices & Services';
  const searchPlaceholder = language === 'hr' ? 'Pretraži usluge...' : 'Search services...';

  return (
    <main className="min-h-screen dark:bg-black">
      <Header />

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 dark:from-purple-600/10 dark:to-pink-600/10" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
                {pageTitle}
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              {language === 'hr'
                ? 'Pregledajte sve usluge i cijene. Kliknite na karticu za više detalja.'
                : 'Browse all services and prices. Click a card for more details.'}
            </p>

            {/* Language & Search */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <div className="flex border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => setLanguage('hr')}
                  className={`px-4 py-2 text-base font-medium transition-colors uppercase ${
                    language === 'hr'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  HR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-4 py-2 text-base font-medium transition-colors uppercase ${
                    language === 'en'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  EN
                </button>
              </div>
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-72 px-4 py-2 text-base border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-base font-medium transition-all duration-200 uppercase ${
                    activeCategory === cat.id
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {language === 'hr' ? cat.labelHr : cat.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Service cards */}
          <div className="space-y-4">
            {filteredServices.length === 0 ? (
              <div className="text-center py-16 text-lg text-gray-500 dark:text-gray-400 uppercase">
                {language === 'hr' ? 'Nema rezultata.' : 'No results found.'}
              </div>
            ) : (
              filteredServices.map((s) => (
                <ServiceCard
                  key={s.id}
                  title={s.title}
                  desc={s.desc}
                  features={s.features}
                  price={s.price}
                  priceShort={s.priceShort}
                  isExpanded={expandedId === s.id}
                  onToggle={() => setExpandedId(expandedId === s.id ? null : s.id)}
                  gradient={GRADIENTS[s.category] || GRADIENTS.custom}
                />
              ))
            )}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/30 uppercase"
            >
              {language === 'hr' ? 'Kontaktiraj me' : 'Contact Me'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
