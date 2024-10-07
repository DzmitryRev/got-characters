import React from "react";
import "./styles.css";
import { Languages, useLanguage } from "../../utils/language";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    const handleLanguageChange = (lang: Languages) => {
        setLanguage(lang);
    };

    return (
        <div className="language-switcher">
            <button
                className={language === Languages.EN ? "active" : ""}
                onClick={() => handleLanguageChange(Languages.EN)}
            >
                EN
            </button>
            <button
                className={language === Languages.RU ? "active" : ""}
                onClick={() => handleLanguageChange(Languages.RU)}
            >
                RU
            </button>
        </div>
    );
}
