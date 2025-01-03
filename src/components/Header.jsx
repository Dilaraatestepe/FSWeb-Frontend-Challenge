import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

function Header() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="flex justify-start ml-52 my-10 mb-24 mt-20 ">
      <div>
        <div className="flex flex-row justify-start items-center">
          <div className="border-t-1 w-24 dark: border border-[#BAB2E7]"></div>
          <p className="text-[20px] pl-2 text-[#4338CA] dark:text-[#BAB2E7] ">
            Dilara Ateştepe
          </p>
        </div>
        <div className="flex flex-col text-[#1F2937]">
          <div className="text-[#1F2937] font-bold dark:text-[#AEBCCF]">
            <p className="text-[102px]">
              {language == "tr" ? "Yaratıcı Düşünür" : "Creative thinker"}
            </p>
            <p className="text-[102px] mt-[-28px]">
              {language == "tr" ? "Minimalist" : "Minimalism lover"}
            </p>
          </div>
          <div>
            <p className=" text-[#6B7280] text-[28px] w-[48rem]">
              {language == "en"
                ? "Hi, I’m Dilara. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me."
                : "Merhaba, ben Dilara. full-stack yazılımcıyım.Harika kullanıcı deneyimleriyle sağlam ve ölçeklenebilir ön uç ürünleri tasarlayacak bir yazılımcı arıyorsanız. Benimle el sıkışalım. "}
            </p>
          </div>
        </div>
        <nav className="flex items-center mt-10">
          <a
            href="/"
            className="text-center mr-8 border border-[#3730A3] px-10 py-4 text-white bg-[#3730A3] text-2xl rounded-2xl dark:bg-[#E1E1FF] dark:border-none dark:text-black "
          >
            <button>{language == "tr" ? "Bana Ulaşın" : "Contact Me"}</button>
          </a>
          <a
            className="text-[#3730A3] mr-6  border-[#3730A3] px-7 py-4 border text-2xl rounded-2xl dark:bg-[#383838] dark:border-[#E1E1FF] dark:text-[#E1E1FF]"
            target="_blank"
            href="https://github.com/Dilaraatestepe"
          >
            <button className="flex items-center ">
              <i className="fa-brands fa-github fa-xl pr-3" />
              <p>Github</p>
            </button>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/dilaraatestepe/"
            className="text-[#3730A3] mr-14  border-[#3730A3] px-7 py-4 border text-2xl rounded-2xl dark:bg-[#383838] dark:border-[#E1E1FF] dark:text-[#E1E1FF] "
          >
            <button className="flex items-center">
              <i className="fa-brands fa-linkedin-in fa-xl pr-3" />
              <p>Linkedin</p>
            </button>
          </a>
        </nav>
      </div>
      <div>
        <img
          className="rounded-2xl  w-[38rem] h-[30rem] ml-20 my-4 mt-10"
          src="https://picsum.photos/300"
        />
      </div>
    </div>
  );
}

export default Header;
