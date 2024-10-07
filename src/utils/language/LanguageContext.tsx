import { createContext, useContext } from "react";
import { Keys, Languages } from "./dictionary";

type LanguageContextProps = {
    language: Languages;
    setLanguage: (language: Languages) => void;
    translate: (key: Keys) => string;
};

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const useLanguage = (): LanguageContextProps => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error();
    }
    return context;
};
