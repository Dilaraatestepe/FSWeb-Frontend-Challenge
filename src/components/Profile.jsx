import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { profile } from "../data";

function Profile() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="flex flex-col ml-52 mt-28 mb-10 border-[#BAB2E7] border-y-[2px] mr-52 pb-12 ">
      <h1 className="text-[64px] font-semibold text-[#1F2937] mt-6 mb-5 dark:text-[#AEBCCF]">
        {language == "tr" ? "Profil" : "Profile"}
      </h1>
      <div className="flex justify-between">
        <div className="flex flex-col justify-start w-[24rem] ">
          <h2 className="text-[32px] text-[#4338CA] font-medium mb-6 dark:text-[#AEBCCF]">
            {language == "tr" ? "Profil" : "Profile"}
          </h2>
          <nav className="text-[18px] text-[#1F2937] font-bold ">
            <div className="flex justify-between ">
              <p className="text-[#000000] text-xl dark:text-[#FFFFFF] ">
                {language == "tr" ? "Doğum Tarihi" : "Date of Birth"}
              </p>
              <span className="text-[#000000] font-medium text-xl dark:text-[#FFFFFF] ">
                {profile.dateOfBirth}
              </span>
            </div>
            <div className="flex justify-between ">
              <p className="text-[#000000] text-xl dark:text-[#FFFFFF] ">
                {language == "tr" ? "Şehir" : "Location"}
              </p>
              <span className="text-[#000000] font-medium text-xl dark:text-[#FFFFFF] ">
                {profile.location}
              </span>
            </div>
            <div className="flex justify-between">
              <p className="text-[#000000] text-xl dark:text-[#FFFFFF] ">
                {language == "tr" ? "Eğitim Durumu" : "Education"}
              </p>
              <span className="text-[#000000] font-medium text-xl dark:text-[#FFFFFF] ">
                {language == "tr" ? profile.education.tr : profile.education.en}
                <br />
                {language == "tr" ? profile.licence.tr : profile.licence.en}
              </span>
            </div>
            <div className="flex justify-between">
              <p className="text-[#000000] text-xl dark:text-[#FFFFFF] ">
                {language == "tr" ? "Tercih Ettiği Rol" : "Preferred Role"}
              </p>
              <span className="text-[#000000] font-medium text-xl dark:text-[#FFFFFF]">
                {profile.preferredRole}
              </span>
            </div>
          </nav>
        </div>
        <div className="flex flex-col w-[52rem] pl-48">
          <h2 className="text-[32px] text-[#4338CA] font-medium mb-4 dark:text-[#B7AAFF]">
            {language == "tr" ? "Hakkımda" : "About Me"}
          </h2>
          <p className="text-[18px] text-[#6B7280] ">
            {language == "tr" ? profile.about.tr : profile.about.en}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
