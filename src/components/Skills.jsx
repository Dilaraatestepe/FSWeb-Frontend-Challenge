import { useContext } from "react";
import { skills } from "../data";

import { LanguageContext } from "../contexts/LanguageContext";
function Skills() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="ml-52 mt-28">
      <h1 className="text-[64px] font-semibold text-[#1F2937]">
        {language === "en" ? "Skills" : "Beceriler"}
      </h1>
      <div className="flex justify-between mr-48 ">
        {skills.map((skill) => (
          <nav className="w-[26rem] " key={skill.id}>
            <h2 className="text-[32px] text-[#4338CA] font-medium mb-6">
              {skill.title}
            </h2>
            <p className="text-[18px] text-[#6B7280]">
              {language == "tr" ? skill.description.tr : skill.description.en}
            </p>
          </nav>
        ))}
      </div>
    </div>
  );
}

export default Skills;
