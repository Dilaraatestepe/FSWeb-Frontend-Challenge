import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

function PageTop() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  const { toggleLang, lang } = useContext(LanguageContext);
  return (
    <div className="flex flex-col mt-10 mr-52 ">
      <div className="flex flex-row justify-end text-xl ">
        <label className="relative inline-flex items-center cursor-pointer mx-3">
          <input
            type="checkbox"
            className="sr-only"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <div className="w-10 h-6 bg-gray-300 rounded-full p-1 transition-all dark:bg-[#4731D3]">
            <div
              className={`bg-[#FFE86E] w-4 h-4 rounded-full shadow transform transition ${
                darkMode ? "translate-x-4 bg-[#4731D3]" : ""
              }`}
            ></div>
          </div>
        </label>
        <Link className="text-[#777777] font-bold pr-3">DARK MODE</Link>

        <p className="text-[#777777]  font-bold">|</p>
        <Link
          className="text-[#4731D3]  font-bold pl-3 "
          onClick={() => toggleLang()}
        >
          {lang === "tr" ? "ENGLISH" : "TÜRKÇE"}
        </Link>
      </div>
      <div className="flex flex-row justify-between pt-6 text-3xl">
        <div className="text-[#4731D3] font-bold ml-52 flex items-center justify-center w-14 h-14 p-3 rounded-full rotate-45  border bg-[#EEEBFF] ">
          <p>D</p>
        </div>
        <div className="flex ">
          <Link className="text-[#777777] pt-3 px-10 ">Skills</Link>
          <Link className="text-[#777777] pt-3 px-16">Projects</Link>
          <button className="text-[#4731D3] border border-[#4731D3] py-2 px-8  rounded-md">
            Hire me
          </button>
        </div>
      </div>
    </div>
  );
}
export default PageTop;
