"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  debug: false,
  resources: {
    th: { translation: require("./locales/th.json") },
    en: { translation: require("./locales/en.json") },
  },
  interpolation: { escapeValue: false },
});

export default i18n;
