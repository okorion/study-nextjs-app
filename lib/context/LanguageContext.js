'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const SUPPORTED_LANGUAGES = ['ko', 'en'];
const DEFAULT_LANGUAGE = 'ko';

const LanguageContext = createContext({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang && SUPPORTED_LANGUAGES.includes(storedLang)) {
      setLanguage(storedLang);
    }
  }, []);

  const changeLanguage = (lang) => {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      ``;
      setLanguage(lang);
      localStorage.setItem('language', lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
