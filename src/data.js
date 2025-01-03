import { data } from "react-router-dom";

export const projects = [
  {
    id: 1,
    image: "./public/images/witflix.jpg",
    title: {
      tr: "Witflix",
      en: "Witflix",
    },
    description: {
      tr: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      en: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..",
    },
    tech: ["html", "css", "js"],
    github: "https://github.com/Dilaraatestepe/wit1024-witflix",
    view: "https://wit1024-witflix-sepia.vercel.app/",
  },
  {
    id: 2,
    image: "./public/images/pizza.jpg",
    title: {
      tr: "Pizza Sipariş Sistemi",
      en: "Pizza Order System",
    },
    description: {
      tr: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..",
      en: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    tech: ["react", "axios"],
    github: "https://github.com/Dilaraatestepe/fsweb-s8-challenge-pizza",
    view: "https://fsweb-s8-challenge-pizza-inky.vercel.app/",
  },

  {
    id: 3,
    image: "./public/images/portfolio.jpg",
    title: {
      tr: "Kişisel Web Sitem",
      en: "Personal Website",
    },
    description: {
      tr: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      en: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    tech: ["react", "js", "tailwindcss", "vite"],
    github: "Github",
    view: "View Site",
  },
];

export const skills = [
  {
    id: 1,
    title: "JavaScript",
    description: {
      en: "JavaScript is a programming language that developers use to create interactive web pages.",
      tr: "JavaScript, geliştiricilerin etkileşimli web sayfaları oluşturmak için kullandığı bir programlama dilidir.",
    },
  },
  {
    id: 2,
    title: "React.JS",
    description: {
      en: "React.JS is an open source javascript library for creating the user agent.",
      tr: "ReactJS kullanıcı arayüzü oluşturmaya yarayan açık kaynak kodlu bir javascript kütüphanesidir.",
    },
  },
  {
    id: 3,
    title: "Java",
    description: {
      en: "The Java programming language is used across platforms and devices thanks to its easily transferable code.",
      tr: "Java programlama dili, kolayca aktarılabilir kodu sayesinde platformlar ve cihazlar arasında kullanılır",
    },
  },
];

export const profile = {
  dateOfBirth: "01.05.1996",
  location: "İstanbul",
  education: {
    tr: "İstanbul Üni.",
    en: "Istanbul Uni.",
  },
  licence: {
    tr: "Lisans,2019",
    en: "Licence,2019",
  },
  preferredRole: "Frontend, UI",
  about: {
    tr: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
    en: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
  },
};

export default data;
