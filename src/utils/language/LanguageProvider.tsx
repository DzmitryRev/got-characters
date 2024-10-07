import { PropsWithChildren, useState } from "react";
import { dictionary, Keys, Languages } from "./dictionary";
import { LanguageContext } from "./LanguageContext";

export function LanguageProvider({ children }: PropsWithChildren) {
    const [language, setLanguage] = useState<Languages>(Languages.RU);

    const translate = (key: Keys): string => {
        return dictionary[language][key] || key;
    };

    return <LanguageContext.Provider value={{ language, setLanguage, translate }}>{children}</LanguageContext.Provider>;
}
