"use client"
import React, { createContext, useState, useEffect, Suspense, } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import localForage from 'localforage';
import moment from 'moment';

//@ts-ignore
import bn from './locales/bn'
//@ts-ignore
import en from './locales/en'

type languages = "en" | "bn";

export interface I18nContextInterface {
    changeLanguage: (callback?: () => void) => void;
    t: (key: string, options?: any, defaultSentance?: string) => string;
    specificTranslation: (lang: languages, key: string, options?: any, defaultSentance?: string) => string;
    language: languages
}

export const I18nContext = React.createContext<I18nContextInterface>({ language: "bn", changeLanguage: ()=>{}, t: (v)=>{return ""}, specificTranslation: (v, v2)=>{return ""} });
const translations: any = {
    'bn': bn,
    'en': en,
};
export function I18nProvider(props: any) {
    const searchParams = useSearchParams();
    const [language, setLanguage] = useState<languages>("bn");

    useEffect(() => {
        let queryLang: any = searchParams.get('lang');
        (async () => {
            if(!!queryLang && (queryLang == "bn" || queryLang == "en")) {
                setLanguage(queryLang || "bn");
                localForage.setItem('ebraa-language', queryLang || "bn", ()=>{});
            } else {
                let lang: any = await localForage.getItem('ebraa-language');
                setLanguage(lang || "bn");
            }
        })();
    }, [])

    const changeLanguage = (callback = function () { /**window.location.reload() */ }) => {
        let newLang:languages = language == "bn" ? "en" : "bn";
        moment.locale(newLang == "bn" ? "bn" : "en");
        setLanguage(newLang)
        localForage.setItem('ebraa-language', newLang, callback);
    };

    const t = (key: string, options?: any, defaultSentance?: string) => {
        if (!options)
            options = {};
        let output = key;
        if (!!translations && !!translations[language] && translations[language][key])
            output = translations[language][key];
        else if (defaultSentance)
            output = defaultSentance;
        while (output.indexOf("{{") != -1) {
            let field = output.split("{{")[1].split("}}")[0];
            if (field in options)
                output = output.replace('{{' + field + "}}", options[field]);
            else
                output = output.replace('{{' + field + "}}", field);
        }
        return output;
    };

    const specificTranslation = (language: languages, key: string, options?: any, defaultSentance?: string) => {
        if (!options)
            options = {};
        let output = key;
        if (!!translations && !!translations[language] && translations[language][key])
            output = translations[language][key];
        else if (defaultSentance)
            output = defaultSentance;
        while (output.indexOf("{{") != -1) {
            let field = output.split("{{")[1].split("}}")[0];
            if (field in options)
                output = output.replace('{{' + field + "}}", options[field]);
            else
                output = output.replace('{{' + field + "}}", field);
        }
        return output;
    };

    return (
  
            <I18nContext.Provider
                value={{ language, changeLanguage, t, specificTranslation }}
            >
                {props.children}
            </I18nContext.Provider>
   )
}