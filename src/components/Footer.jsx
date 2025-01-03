import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

function Footer() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="bg-[#F9F9F9] flex justify-between h-96">
      <div className="flex flex-col justify-between mx-52 my-20 ">
        <p className="font-bold text-[42px] w-[32rem] ">
          {language == "tr"
            ? "Projenizde birlikte çalışmaya ne dersiniz?"
            : "Let's work together on your next product!"}
        </p>
        <a
          className=" text-[#AF0C48] text-[24px] border-bottom "
          href="mailto:dilaraatestepe@gmail.com"
        >
          dilaraatestepe@gmail.com
        </a>
      </div>
      <div className="mx-52 font-normal flex gap-10 text-[24px] mt-[16.8rem]  ">
        <a className=" text-[#0A0A14] " href="">
          Personal Blog
        </a>
        <a
          className="text-[#00AB6B]"
          href="https://github.com/Dilaraatestepe"
          target="_blank"
        >
          Github
        </a>
        <a
          className="text-[#0077B5]"
          href="https://www.linkedin.com/in/dilaraatestepe/"
          target="_blank"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
  s;
}

export default Footer;
