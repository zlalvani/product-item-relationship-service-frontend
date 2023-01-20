export { useTranslation } from "react-i18next";

import i18n, { changeLanguage } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import mainDE from "../assets/locales/de/main.json";
import mainEN from "../assets/locales/en/main.json";

const resources = {
  de: {
    translation: mainDE,
  },
  en: {
    translation: mainEN,
  },
};

const supportedLanguages = Object.keys(resources).sort();

const init = (): void => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: "en",
      supportedLngs: ["de", "en"],
      interpolation: {
        escapeValue: false,
      },
    })
    .catch((e) => console.error("Translation library init got error:", e));
};

export const I18nService = {
  init,
  changeLanguage,
  supportedLanguages,
  resources,
  resolvedLanguage: i18n.resolvedLanguage,
};
