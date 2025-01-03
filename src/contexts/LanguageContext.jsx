import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") ? localStorage.getItem("language") : "en"
  );

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "tr" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
