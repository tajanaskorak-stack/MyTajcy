/**
 * MyTajcy - Static site i18n and interactions
 * Saved and corrected: translations, typo fixes, data sync with lib/translations
 */
const translations = {
  hr: {
    nav: {
      about: 'O meni',
      services: 'Usluge',
      portfolio: 'Reference',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Helping your ideas shine – with a smile.',
      subtitle: 'Moderna web rješenja, poslovna automatizacija i kreativni dizajn',
    },
    about: {
      title: 'O meni',
      text1:
        'Bok, ja sam Tajči! Dizajniram i izrađujem moderne web stranice, poslovne ponude te rezervacijske alate prilagođene vašem poslovanju. Također se bavim automatizacijom poslovnih sustava i izradom vizuala prema vašim specifičnim potrebama. Cilj mi je stvoriti učinkovita i visokokvalitetna rješenja— pomažući brendovima da rade pametnije, izgledaju profesionalno i rastu s povjerenjem.',
      text2:
        'Nakon šest godina iskustva u prodaji, rad s klijentima za mene je mnogo više od samog posla — to je zajedničko putovanje. Volim slušati, razumjeti ideje i zajedno graditi rješenja koja imaju smisla i trajnu vrijednost.',
      text3:
        'Izvan profesionalnog života, slobodno vrijeme provodim putovajući, a neki do najdražih hobija su mi planinarenje, kampiranje i skijanje.',
    },
    services: {
      title: 'Usluge',
      webdev: {
        title: 'IZRADA WEB STRANICA',
        note: 'BESPLATNA IZRADA PRVOG NACRTA WEB STRANICE. KONTAKTIRAJTE ME.',
        basic: {
          title: 'BASIC WEB – Jednostrana web stranica',
          desc: 'Idealno za osobni brend, CV, landing page ili jednu uslugu.',
          features: [
            '1 jednostranu (scroll) web stranicu',
            'Moderan, responzivan dizajn (desktop + mobile)',
            'Osnovna SEO optimizacija',
            'Kontakt forma',
            'Povezivanje s društvenim mrežama',
          ],
          price: 'Cijena: od 200 €',
        },
        standard: {
          title: 'STANDARD WEB – Višestranična web stranica',
          desc: 'Za male i srednje poduzetnike koji žele profesionalnu online prisutnost.',
          features: [
            'Do 5 podstranica (Home, O meni, Usluge, Reference, Kontakt)',
            'Custom dizajn prilagođen brendu',
            'SEO optimizacija (osnove)',
            'Kontakt forma + Google mapa',
            'Povezivanje s društvenim mrežama',
          ],
          price: 'Cijena: od 400 €',
        },
        premium: {
          title: '💎 PREMIUM WEB – Kompleksna web rješenja',
          desc: 'Za brendove koji žele rasti i istaknuti se.',
          features: [
            'Neograničen broj stranica (prema potrebi)',
            'Napredna SEO struktura',
            'Blog, rezervacijski sustav ili dodatne funkcionalnosti',
            'Integracije (newsletter, analitika, CRM)',
            'Povezivanje s društvenim mrežama',
            'Više krugova dorada',
            'Prioritetna podrška',
          ],
          price: 'Cijena: 800 €',
        },
      },
      maintenance: {
        title: 'ODRŽAVANJE WEB STRANICA',
        features: [
          'Tehnička podrška',
          'Redovita ažuriranja',
          'Sigurnosni nadzor i backup',
          'Manje izmjene sadržaja',
        ],
        price: 'Cijena: od 80 € / mjesečna podrška, 20 € / jednokratna izmjena',
      },
      offers: {
        title: 'IZRADA ONLINE PONUDA ZA VAŠE KLIJENTE',
        desc:
          'Izrada modernih, preglednih i personaliziranih online ponuda koje možete jednostavno slati svojim klijentima (link ili PDF). Ponude su prilagođene vašem brendu, jasne, vizualno uredne i spremne za ostavljanje odličnog prvog dojma.',
        price: 'Cijena: od 80 € po ponudi',
      },
      booking: {
        title: 'Izrada rezervacijskih obrazaca',
        desc:
          'Izrada jednostavnih i funkcionalnih rezervacijskih obrazaca (rezervacije termina, usluga, smještaja, upita ili događanja). Obrasci su prilagođeni vašem poslovanju, pregledni za korisnike i jednostavni za upravljanje (obavijesti na email, jasno strukturirani podaci).',
        price: 'Cijena: 100 €',
      },
      automation: {
        title: 'AUTOMATIZACIJA POSLOVNIH PROCESA',
        desc:
          'Povezivanje obrazaca, e-mailova, CRM-a i drugih alata u automatizirane tokove koji štede vrijeme i smanjuju ručni rad. Idealno za prodaju, upite, rezervacije i interne procese.',
        features: [
          'Štede vrijeme – automatizirani procesi bez ručnog unosa',
          'Brža reakcija na upite – klijenti dobivaju odgovor odmah',
          'Svi podaci sigurno spremljeni u Google Sheets',
        ],
        price: 'CIJENA:<br>149 € jednokratno – izrada i postavljanje<br>49 € mjesečno – održavanje, nadzor',
      },
      social: {
        title: 'ODRŽAVANJE DRUŠTVENIH MREŽA',
        mini: {
          title: 'MINI paket',
          features: ['8 objava mjesečno', 'Osnovni vizuali i tekst', 'Odgovaranje na osnovne upite'],
          price: 'Cijena: 120 € / mjesečno',
        },
        standard: {
          title: 'STANDARD paket',
          features: [
            '12–16 objava mjesečno',
            'Kreativni vizuali + copywriting',
            'Story objave',
            'Odgovaranje na poruke i upite',
            'Plan objava',
          ],
          price: 'Cijena: 220 € / mjesečno',
        },
        premium: {
          title: 'PREMIUM paket',
          features: [
            '20+ objava mjesečno',
            'Napredno kreiranje sadržaja',
            'Story + reels (po dogovoru)',
            'Aktivna komunikacija s publikom',
            'Analiza i optimizacija sadržaja',
          ],
          price: 'Cijena: 350 € / mjesečno',
        },
      },
      newsletter: {
        title: 'PERSONALIZIRANI NEWSLETTERI',
        mini: {
          title: 'MINI',
          features: ['2 newslettera mjesečno', 'Osnovni dizajn i sadržaj'],
          price: 'Cijena: 60 € / mjesečno',
        },
        standard: {
          title: '📬 STANDARD',
          features: ['3–4 newslettera mjesečno', 'Custom dizajn'],
          price: 'Cijena: 120 € / mjesečno',
        },
        premium: {
          title: 'PREMIUM',
          features: ['4+ newslettera mjesečno', 'Napredna personalizacija'],
          price: 'Cijena: 240 € / mjesečno',
        },
      },
      custom: {
        title: 'PERSONALIZIRANI UPITI',
        desc:
          'Svaki projekt je jedinstven. Ako imate posebne zahtjeve, kombinaciju usluga ili dugoročnu suradnju — slobodno se javite.',
        price: 'Cijena: po dogovoru',
        footer: 'Cilj je stvoriti rješenja koja su funkcionalna, estetski snažna i prilagođena vašem poslovanju.',
      },
    },
    portfolio: {
      title: 'Reference',
      text: 'Uskoro će biti dostupne reference projekata.',
    },
    contact: {
      title: 'Kontakt',
      form: {
        name: 'Ime',
        email: 'Email',
        message: 'Poruka',
        submit: 'Pošalji',
      },
    },
    footer: {
      text: '© 2024 MyTajcy. Sva prava pridržana.',
    },
  },
  en: {
    nav: {
      about: 'About Me',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
    hero: {
      title: 'Helping your ideas shine – with a smile.',
      subtitle: 'Modern web solutions, business automation, and creative design',
    },
    about: {
      title: 'About Me',
      text1:
        'Hey, I am Tajchy! I design and build modern websites and landing pages, business offers or reservation tools for your business. Also I am making automation of business systems and creating visuals for your specific needs. I work with AI-assisted coding to create efficient, high-quality solutions, design clear and compelling offers and automate business processes —helping brands work smarter, look professional, and grow with confidence.',
      text2:
        'Outside my professional life, I am an active traveler, sport lover and photography enthusiast.',
      text3: '',
    },
    services: {
      title: 'Services',
      webdev: {
        title: 'WEBSITE DEVELOPMENT',
        note: 'Free first draft of your website available. Contact me!',
        basic: {
          title: 'BASIC WEB – Single-page website',
          desc: 'Perfect for a personal brand, CV, landing page, or single service.',
          features: [
            '1 single-page (scroll) website',
            'Modern, responsive design (desktop + mobile)',
            'Basic SEO optimization',
            'Contact form',
            'Social media integration',
          ],
          price: 'Price: from €200',
        },
        standard: {
          title: 'STANDARD WEB – Multi-page website',
          desc: 'For small and medium businesses seeking a professional online presence.',
          features: [
            'Up to 5 pages (Home, About, Services, Portfolio, Contact)',
            'Custom design tailored to your brand',
            'Basic SEO optimization',
            'Contact form + Google Map',
            'Social media integration',
          ],
          price: 'Price: from €400',
        },
        premium: {
          title: '💎 PREMIUM WEB – Complex web solutions',
          desc: 'For brands that want to grow and stand out.',
          features: [
            'Unlimited pages (as needed)',
            'Advanced SEO structure',
            'Blog, booking system, or additional features',
            'Integrations (newsletter, analytics, CRM)',
            'Social media integration',
            'Multiple revision rounds',
            'Priority support',
          ],
          price: 'Price: €800',
        },
      },
      maintenance: {
        title: 'WEBSITE MAINTENANCE',
        features: [
          'Technical support',
          'Regular updates',
          'Security monitoring & backups',
          'Minor content changes',
        ],
        price: 'Price: from €80 / monthly support, €20 / one-time change',
      },
      offers: {
        title: 'CREATION OF ONLINE OFFERS FOR YOUR CLIENTS',
        desc:
          'Create modern, clear, and personalized online offers that you can easily share with clients (via link or PDF). Offers are branded, visually clean, and designed to leave a great first impression.',
        price: 'Price: from €80 per offer',
      },
      booking: {
        title: 'Creation of booking forms',
        desc:
          'Simple and functional booking forms (appointments, services, accommodations, inquiries, or events). Forms are customized to your business, user-friendly, and easy to manage (email notifications, structured data).',
        price: 'Price: €100',
      },
      automation: {
        title: 'BUSINESS PROCESS AUTOMATION',
        desc:
          'Connect forms, emails, CRM, and other tools into automated workflows that save time and reduce manual work. Perfect for sales, inquiries, bookings, and internal processes.',
        features: [
          ' Save time – automated processes without manual input',
          '⚡ Faster client responses – clients receive immediate replies',
          '📊 All data safely stored in Google Sheets',
        ],
        price: 'PRICE:<br>€149 one-time – setup and implementation<br>€49 monthly – maintenance, monitoring',
      },
      social: {
        title: 'SOCIAL MEDIA MANAGEMENT',
        mini: {
          title: 'MINI package',
          features: ['8 posts per month', 'Basic visuals and text', 'Responding to basic inquiries'],
          price: 'Price: €120 / month',
        },
        standard: {
          title: 'STANDARD package',
          features: [
            '12–16 posts per month',
            'Creative visuals + copywriting',
            'Story posts',
            'Responding to messages and inquiries',
            'Posting schedule',
          ],
          price: 'Price: €220 / month',
        },
        premium: {
          title: 'PREMIUM package',
          features: [
            '20+ posts per month',
            'Advanced content creation',
            'Story + reels (as agreed)',
            'Active audience engagement',
            'Content analysis & optimization',
          ],
          price: 'Price: €350 / month',
        },
      },
      newsletter: {
        title: 'PERSONALIZED NEWSLETTERS',
        mini: {
          title: 'MINI',
          features: ['2 newsletters per month', 'Basic design and content'],
          price: 'Price: €60 / month',
        },
        standard: {
          title: '📬 STANDARD',
          features: ['3–4 newsletters per month', 'Custom design'],
          price: 'Price: €120 / month',
        },
        premium: {
          title: 'PREMIUM',
          features: ['4+ newsletters per month', 'Advanced personalization'],
          price: 'Price: €240 / month',
        },
      },
      custom: {
        title: 'CUSTOM REQUESTS',
        desc:
          'Every project is unique. If you have special requirements, a combination of services, or long-term collaboration, feel free to contact me.',
        price: 'Price: upon agreement',
        footer: 'The goal is to create solutions that are functional, aesthetically strong, and tailored to your business.',
      },
    },
    portfolio: {
      title: 'Portfolio',
      text: 'Portfolio examples will be available soon.',
    },
    contact: {
      title: 'Contact',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send',
      },
    },
    footer: {
      text: '© 2024 MyTajcy. All rights reserved.',
    },
  },
};

let currentLang = 'hr';

function updateTextContent(element, text) {
  if (element) {
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.placeholder = text;
    } else {
      element.textContent = text;
    }
  }
}

function updateHTMLContent(element, html) {
  if (element) {
    element.innerHTML = html;
  }
}

function translatePage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n^="nav."]').forEach((el) => {
    const key = el.getAttribute('data-i18n').split('.')[1];
    updateTextContent(el, t.nav[key]);
  });

  document.querySelectorAll('[data-i18n^="hero."]').forEach((el) => {
    const key = el.getAttribute('data-i18n').split('.')[1];
    updateTextContent(el, t.hero[key]);
  });

  document.querySelectorAll('[data-i18n^="about."]').forEach((el) => {
    const key = el.getAttribute('data-i18n').split('.')[1];
    if (t.about[key]) updateTextContent(el, t.about[key]);
  });

  document.querySelectorAll('[data-i18n^="services."]').forEach((el) => {
    const path = el.getAttribute('data-i18n').split('.').slice(1);
    let value = t.services;
    for (const key of path) value = value?.[key];
    if (value !== undefined) {
      if (Array.isArray(value)) {
        el.innerHTML = '';
        value.forEach((item) => {
          const li = document.createElement('li');
          li.textContent = item;
          el.appendChild(li);
        });
      } else if (typeof value === 'string' && value.includes('<br>')) {
        updateHTMLContent(el, value);
      } else {
        updateTextContent(el, value);
      }
    }
  });

  document.querySelectorAll('[data-i18n^="portfolio."]').forEach((el) => {
    const key = el.getAttribute('data-i18n').split('.')[1];
    updateTextContent(el, t.portfolio[key]);
  });

  document.querySelectorAll('[data-i18n^="contact."]').forEach((el) => {
    const path = el.getAttribute('data-i18n').split('.').slice(1);
    let value = t.contact;
    for (const key of path) value = value?.[key];
    if (value !== undefined) updateTextContent(el, value);
  });

  document.querySelectorAll('[data-i18n^="footer."]').forEach((el) => {
    const key = el.getAttribute('data-i18n').split('.')[1];
    updateTextContent(el, t.footer[key]);
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => translatePage(btn.getAttribute('data-lang')));
  });
  translatePage('hr');

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert(
        currentLang === 'hr'
          ? 'Hvala vam na poruci! Javit ću vam se uskoro.'
          : 'Thank you for your message! I will get back to you soon.'
      );
      contactForm.reset();
    });
  }
});
