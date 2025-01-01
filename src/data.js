import { data } from "react-router-dom";

export const projects = [
  {
    image: "/images/witflix.jpg",
    title: "Witflix",
    description:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. ",
    link1: "https://github.com/Dilaraatestepe/wit1024-witflix",
    link2: "https://wit1024-witflix-sepia.vercel.app/",
    tech: ["react", "axios"],
  },
  {
    image: "/images/pizza.jpg",
    title: "Pizza Ordering Site",
    description:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline",
    link1: "https://github.com/Dilaraatestepe/fsweb-s8-challenge-pizza",
    link2: "https://fsweb-s8-challenge-pizza-inky.vercel.app/",
    tech: ["react", "axios"],
  },
  {
    image: "/images/portfolio.jpg",
    title: "Portfolio",
    description:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline.",
    link1: "Github",
    link2: "View Site",
    tech: ["react", "axios", "redux"],
  },
];

export const skills = [
  {
    id: 1,
    title: "JavaScript",
    description: {
      en: "JavaScript is a versatile programming language commonly used for web development.",
      tr: "JavaScript, genellikle web geliştirme için kullanılan çok yönlü bir programlama dilidir.",
    },
  },
  {
    id: 2,
    title: "React.JS",
    description: {
      en: "React is a JavaScript library for building user interfaces efficiently.",
      tr: "React, kullanıcı arayüzlerini verimli bir şekilde oluşturmak için kullanılan bir JavaScript kütüphanesidir.",
    },
  },
  {
    id: 3,
    title: "Java",
    description: {
      en: "Java is a popular object-oriented programming language used for developing platform-independent applications.",
      tr: "Java, platformdan bağımsız uygulamalar geliştirmek için kullanılan popüler bir nesne yönelimli programlama dilidir.",
    },
  },
];

export const texts = {
  en: {
    projectsTitle: "Projects",
    darkMode: "Dark Mode",
    language: "Türkçe",
    profileTitle: "Profile",
    dateOfBirth: "Date of birth",
    location: "Location",
    education: "Education",
    preferredRole: "Preferred Role",
    dateOfBirthValue: "01.05.1996",
    locationValue: "Istanbul",
    educationValue: "Istanbul Univ. Licence, 2019",
    preferredRoleValue: "Frontend, UI",
  },
  tr: {
    projectsTitle: "Projeler",
    darkMode: "Karanlık Mod",
    language: "English",
    profileTitle: "Profil",
    dateOfBirth: "Doğum Tarihi",
    location: "Konum",
    education: "Eğitim",
    preferredRole: "Tercih Edilen Rol",
    dateOfBirthValue: "01.05.1996",
    locationValue: "İstanbul",
    educationValue: "İstanbul Üniv. Lisans, 2019",
    preferredRoleValue: "Frontend, UI",
  },
};

export default data;
