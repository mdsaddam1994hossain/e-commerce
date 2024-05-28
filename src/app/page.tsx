"use client"
import { ThemeChanger } from "@/components/ThemeChanger";
import { I18nContext } from "@/containers/i18n";
import { useContext } from "react";

export default function Home() {

  const i18n = useContext(I18nContext);
  return (
    <main className="p-24">
      <p >{i18n.t('title')}</p>
     
       <ThemeChanger />

       <button
          onClick={() => i18n.changeLanguage()}
          className="w-10 h-10 p-2 rounded-full bg-whiteCustom"
        >
          <span className="text-darkCustom">{i18n.t('otherLangDesc')}</span>
        </button>
    </main>
  );
}
