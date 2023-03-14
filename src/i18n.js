import i18n from "i18next";

import Backend from "i18next-xhr-backend";

import { initReactI18next } from "react-i18next";

import LanguageDetector from 'i18next-browser-languagedetector';

i18n

  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({

    lng: "ro",   //default language

    fallbackLng: "ro", //when specified language translations not present 

//then fallbacklang translations loaded.

    debug: true,


    //    backend: {

    //   /* translation file path */

    //   loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",

    // },
 

/* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */


    // ns: ["translations"],

    // defaultNS: "translations",

    // keySeparator: false,

    interpolation: {

      escapeValue: false,

    //   formatSeparator: ",",

    },

    // react: {

    //   wait: true,

    // },

  });


export default i18n;