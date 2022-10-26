import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nService } from "../lib";

i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",

  // have a common namespace used around the full app
  ns: ["translationsNS"],
  defaultNS: "translationsNS",

  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  resources: I18nService.resources,
});

export default i18next;
