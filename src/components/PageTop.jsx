import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ThemeContext } from "../contexts/ThemeContext";

function PageTop() {
  const { toggleLanguage, language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div className="flex flex-col mt-10 mr-52 max:w-[64rem] max:mr-auto">
      <div className="flex flex-row justify-end text-xl max:ml-auto">
        <button
          id="theme-toggle"
          onClick={toggleTheme}
          className="w-12 h-6 flex items-center  bg-[#4731D3] dark:bg-[#3A3A3A] rounded-full p-1 cursor-pointer transition"
        >
          <div
            id="theme-icon"
            className="w-4 h-4  bg-yellow-400 rounded-full shadow-md transition transform dark:translate-x-6"
          ></div>
        </button>
        <Link className="text-[#777777] font-bold pl-4 pr-4 dark:text-[#D9D9D9]">
          {theme === "light" ? "Dark" : "Light"}
        </Link>

        <p className="text-[#777777]  font-bold">|</p>
        <Link
          className="text-[#4731D3]  font-bold pl-3 dark:text-[#BAB2E7] "
          onClick={() => toggleLanguage()}
        >
          {language === "en" ? "TÜRKÇE" : "ENGLISH"}
        </Link>
      </div>
      <div className="flex flex-row justify-between pt-6 text-3xl">
        <div className="text-[#4731D3] font-bold ml-52 flex items-center justify-center w-14 h-14 p-3 rounded-full rotate-45  border bg-[#EEEBFF] ">
          <p>D</p>
        </div>
        <div className="flex ">
          <Link className="text-[#777777] pt-3 px-10 ">
            {language == "tr" ? "Yetenekler" : "Skills"}
          </Link>
          <Link className="text-[#777777] pt-3 px-16">
            {language == "tr" ? "Projeler" : "Projects"}
          </Link>
          <Link className="text-[#777777] pt-3 px-16">
            {language == "tr" ? "Profil" : "Profile"}
          </Link>
          <button className="text-[#4731D3] border border-[#4731D3] py-2 px-8  rounded-md">
            {language == "tr" ? "Bana Ulaşın" : "Contact Me"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default PageTop;
