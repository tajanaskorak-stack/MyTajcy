'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/translations';

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsServicesOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const handler = () => {
      if (mq.matches) setIsMobileMenuOpen(false);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const services = [
    { id: 'webdev', icon: '•', title: t.services.webdev.title },
    { id: 'maintenance', icon: '•', title: t.services.maintenance.title },
    { id: 'offers', icon: '•', title: t.services.offers.title },
    { id: 'booking', icon: '•', title: t.services.booking.title },
    { id: 'automation', icon: '•', title: t.services.automation.title },
    { id: 'social', icon: '•', title: t.services.social.title },
    { id: 'newsletter', icon: '•', title: t.services.newsletter.title },
    { id: 'custom', icon: '•', title: t.services.custom.title },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          {/* Logo – modern signature style, slightly larger */}
          <Link
            href="/"
            className="flex-shrink-0 font-signature text-xl sm:text-2xl md:text-3xl font-normal tracking-[0.02em] focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              MyTajcy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 flex-1 justify-center">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="text-gray-600 dark:text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-medium text-[15px] relative group"
            >
              {t.nav.about}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-medium text-[15px] relative group flex items-center gap-1"
              >
                {t.nav.services}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border-2 border-purple-100 dark:border-gray-700 overflow-hidden z-50 animate-fade-in">
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 border-b border-purple-100 dark:border-gray-700">
                    <h3 className="font-bold text-lg bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                      {t.services.title}
                    </h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => scrollToSection(service.id)}
                        className="w-full px-4 py-3 text-left hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-gray-800 dark:hover:to-gray-800 transition-all duration-200 flex items-center gap-3 group border-b border-gray-100 dark:border-gray-700 last:border-0"
                      >
                        <span className="text-2xl group-hover:scale-125 transition-transform duration-200">
                          {service.icon}
                        </span>
                        <span className="flex-1 text-gray-700 dark:text-gray-300 font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-200">
                          {service.title}
                        </span>
                        <svg
                          className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/services"
              className="text-gray-600 dark:text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-medium text-[15px] relative group"
            >
              {t.nav.pricing}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('portfolio');
              }}
              className="text-gray-600 dark:text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-medium text-[15px] relative group"
            >
              {t.nav.portfolio}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="text-gray-600 dark:text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-medium text-[15px] relative group"
            >
              {t.nav.contact}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Language + Hamburger (mobile) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg p-1 bg-white/50 dark:bg-gray-900/50">
              <button
                onClick={() => setLanguage('hr')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                  language === 'hr'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                HR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                EN
              </button>
            </div>
            {/* Hamburger – mobile only */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation – collapsible */}
        <nav
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="pb-4 pt-2 border-t border-gray-200 dark:border-gray-700 mt-2">
          <div className="flex flex-col space-y-2">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="text-gray-700 dark:text-gray-300 hover:text-secondary transition-colors duration-200 font-medium text-sm py-2.5 block"
            >
              {t.nav.about}
            </a>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left text-gray-700 dark:text-gray-300 hover:text-secondary transition-colors duration-200 font-medium text-sm py-2.5 flex items-center justify-between"
              >
                {t.nav.services}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="ml-4 mt-2 space-y-1 border-l-2 border-purple-200 pl-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => scrollToSection(service.id)}
                      className="w-full text-left text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 text-sm py-2.5 flex items-center gap-2 min-h-[44px]"
                    >
                      <span className="text-lg">{service.icon}</span>
                      <span>{service.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/services"
              className="text-gray-700 dark:text-gray-300 hover:text-secondary transition-colors duration-200 font-medium text-sm py-2.5 block"
            >
              {t.nav.pricing}
            </Link>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('portfolio');
              }}
              className="text-gray-700 dark:text-gray-300 hover:text-secondary transition-colors duration-200 font-medium text-sm py-2.5 block"
            >
              {t.nav.portfolio}
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="text-gray-700 dark:text-gray-300 hover:text-secondary transition-colors duration-200 font-medium text-sm py-2.5 block"
            >
              {t.nav.contact}
            </a>
          </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
