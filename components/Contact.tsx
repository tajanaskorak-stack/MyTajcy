'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { countryCallingCodes } from '@/lib/countryCallingCodes';

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneCountryCode: '+385',
    phoneNumber: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          phoneCountryCode: formData.phoneCountryCode,
          phoneNumber: formData.phoneNumber.trim(),
          message: formData.message.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const msg =
          data?.error ||
          (language === 'hr'
            ? 'Poruka nije poslana. Pokušajte ponovno ili nas kontaktirajte izravno na mytajcy@gmail.com.'
            : 'Message could not be sent. Please try again or email us at mytajcy@gmail.com.');
        alert(msg);
        return;
      }

      alert(
        language === 'hr'
          ? 'Hvala vam na poruci! Javit ću vam se uskoro.'
          : 'Thank you for your message! I will get back to you soon.'
      );
      setFormData({
        fullName: '',
        email: '',
        phoneCountryCode: '+385',
        phoneNumber: '',
        message: '',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 dark:from-black dark:via-gray-900 dark:to-black">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              {t.contact.title}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-8 md:p-10 space-y-6 border border-gray-100 dark:border-gray-800"
        >
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {t.contact.form.fullName}
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-200 outline-none bg-gray-50/50 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {t.contact.form.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-200 outline-none bg-gray-50/50 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          {/* Phone with worldwide country calling codes */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {t.contact.form.phone}
            </label>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <select
                id="phoneCountryCode"
                name="phoneCountryCode"
                value={formData.phoneCountryCode}
                onChange={handleChange}
                className="w-full sm:w-[140px] shrink-0 px-3 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-200 outline-none bg-gray-50/50 dark:bg-gray-800 dark:text-gray-100 min-h-[48px]"
                aria-label="Country calling code"
              >
                {countryCallingCodes.map(({ name, code }) => (
                  <option key={code + name} value={code}>
                    {code} {name}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder={
                  language === 'hr' ? 'npr. 912 345 678' : 'e.g. 912 345 678'
                }
                className="flex-1 min-w-0 px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-200 outline-none bg-gray-50/50 dark:bg-gray-800 dark:text-gray-100 min-h-[48px]"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {t.contact.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-200 outline-none resize-y min-h-[120px] bg-gray-50/50 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto min-h-[48px] flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting
              ? language === 'hr'
                ? 'Šalje se...'
                : 'Sending...'
              : t.contact.form.submit}
          </button>
        </form>
        {/* Phone + email buttons right below the contact form, stacked */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center gap-3">
          <a
            href="tel:+385989679485"
            className="w-full sm:max-w-md inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm sm:text-base shadow-md hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            {t.contact.numberLabel} +385 98/967-9485
          </a>
          <a
            href="mailto:mytajcy@gmail.com"
            className="w-full sm:max-w-md inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm sm:text-base shadow-md hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            {t.contact.emailLabel} mytajcy@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
