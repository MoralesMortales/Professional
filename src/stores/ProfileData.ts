import { defineStore } from "pinia";
import spanishLogo from "../assets/Img/spanish_flag.png";
import englishLogo from "../assets/Img/flag_english.png";
import germanLogo from "../assets/Img/germany_flag.png";

import spanishImg from "../assets/Img/spanish_image.jpeg";
import englishImg from "../assets/Img/English_Image.png";
import germanImg from "../assets/Img/german_image.jpeg";

//pg languages
import cpp_logo from "../assets/Img/cpp_logo.png";
import python_logo from "../assets/Img/python_logo.png";
import js_logo from "../assets/Img/js.png";
import ts_logo from "../assets/Img/ts.png";
import html_logo from "../assets/Img/html_logo.png";
import css_logo from "../assets/Img/css_logo.png";

//frameworks
import django_logo from "../assets/Img/django_logo.png";
import vue_logo from "../assets/Img/vueJs_logo.png";
import pyqt from "../assets/Img/pyqt.png"

//databases
import mysql_logo from "../assets/Img/mysql_logo.png";
import postgre_logo from "../assets/Img/Postgresql_elephant_logo.png";
import sqlite_logo from "../assets/Img/sqlite_logo.png";
import mariadb_logo from "../assets/Img/mariadb_logo.png";

//tools web
import postman_logo from "../assets/Img/postman.png";
import tailwind_logo from "../assets/Img/tailwind_logo.png";
import boostrap_logo from "../assets/Img/bootstrap.png";
import quassar_logo from "../assets/Img/quassar_logo.png";
import electron_logo from "../assets/Img/electron_logo.png";

//tools general
import bash_logo from "../assets/Img/bash_logo.png";
import git_logo from "../assets/Img/git_logo.png";
import github_logo from "../assets/Img/github_logo.png";
import debian_logo from "../assets/Img/debian_logo.png";
import figma_logo from "../assets/Img/figma_logo.png";
import gpt_logo from "../assets/Img/gpt_logo.png";
import trello_logo from "../assets/Img/trello_logo.png";
import linux_logo from "../assets/Img/linulogo.png";

//nomina project

import nomina_1 from "../assets/projects/nomina/msin.png";
import nomina_2 from "../assets/projects/nomina/2.png";
import nomina_3 from "../assets/projects/nomina/3.png";
import nomina_4 from "../assets/projects/nomina/4.png";

//letter soup project

import soup_1 from "../assets/projects/letter_soup/1.png"
import soup_2 from "../assets/projects/letter_soup/2.png"
import soup_3 from "../assets/projects/letter_soup/3.png"
import soup_4 from "../assets/projects/letter_soup/4.png";
import soup_5 from "../assets/projects/letter_soup/5.png";

export const useProfileDataStore = defineStore("useProfileDataStore", {
  state: () => ({
    person: [
      {
        firstName: "Carlos",
        lastName: "Morales",
        fullName: "Carlos Alberto Morales Aguilera",
        phone: "+58 0412-8816-267",
        id: 31034826,

        hobbies: [
          "Learning languages",
          "Programming",
          "Reading",
          "Exercise",
          "Playing Music",
        ],

        languages: [
          {
            name: "Spanish",
            level: "C2 (Native)",
            logo: spanishLogo,
            img: spanishImg,
          },
          { name: "English", level: "C1", logo: englishLogo, img: englishImg },
          { name: "German", level: "A2", logo: germanLogo, img: germanImg },
        ],

        programming_languages: [
          {
            name: "C++",
            logo: cpp_logo,
            des: "C++ is a powerful, high-performance programming language used for system/software development, game development, and real-time applications.",
            category: "Programming Language",
            time: "2 Years",
          },
          {
            name: "Python",
            logo: python_logo,
            des: "Python is a versatile, high-level programming language known for its simplicity and readability, widely used in web development, AI, and data science.",
            category: "Programming Language",
            time: "3 Years",
          },
          {
            name: "JavaScript",
            logo: js_logo,
            des: "JavaScript is a popular scripting language essential for web development, enabling interactive and dynamic content in browsers.",
            category: "Programming Language",
            time: "3 Years",
          },
          {
            name: "TypeScript",
            logo: ts_logo,
            des: "TypeScript is a superset of JavaScript that adds static typing, enhancing code maintainability and scalability.",
            category: "Programming Language",
            time: "2 Years",
          },
          {
            name: "HTML5",
            logo: html_logo,
            des: "HTML5 is the standard markup language for structuring web content, supporting modern multimedia and responsive designs.",
            category: "Markup Language",
            time: "4 Years",
          },
          {
            name: "CSS3",
            logo: css_logo,
            des: "CSS3 is used to style and layout web pages, enabling responsive designs, animations, and modern UI aesthetics.",
            category: "Style Sheet Language",
            time: "4 Years",
          },
        ],

        frameworks: [
          {
            name: "Django",
            level: "Intermediate",
            logo: django_logo,
            des: "Django is a high-level Python web framework that promotes rapid development and clean, pragmatic design.",
            category: "Web Framework",
            time: "2 Years",
          },
          {
            name: "Vue.js",
            level: "Intermediate",
            logo: vue_logo,
            des: "Vue.js is a progressive JavaScript framework for building user interfaces and single-page applications with ease.",
            category: "Frontend Framework",
            time: "2 Years",
          },
        ],

        socialMedia: [
          { name: "Instagram", link: "www.algo.com" },
          { name: "Facebook", link: "www.algo.com" },
          { name: "GitHub", link: "www.algo.com" },
          { name: "Linkedin", link: "www.algo.com" },
          { name: "Youtube", link: "www.algo.com" },
        ],

        databases: [
          {
            name: "MySQL",
            link: "www.algo.com",
            logo: mysql_logo,
            des: "MySQL is an open-source relational database management system (RDBMS) widely used for web applications, data storage, and enterprise solutions.",
            category: "Relational Database",
            time: "3 Years",
          },
          {
            name: "MariaDB",
            link: "www.algo.com",
            logo: mariadb_logo,
            des: "MariaDB is a fork of MySQL that offers improved performance, security, and additional features while maintaining full compatibility with MySQL.",
            category: "Relational Database",
            time: "3 Years",
          },
          {
            name: "SQLite",
            link: "www.algo.com",
            logo: sqlite_logo,
            des: "SQLite is a lightweight, file-based SQL database engine commonly used for embedded applications, mobile apps, and small-scale storage needs.",
            category: "Embedded Database",
            time: "2 Years",
          },
          {
            name: "PostgreSQL",
            link: "www.algo.com",
            logo: postgre_logo,
            des: "PostgreSQL is a powerful, open-source relational database system known for its advanced features, extensibility, and ACID compliance.",
            category: "Relational Database",
            time: "3 Years",
          },
        ],
        toolsWeb: [
          {
            name: "Bootstrap",
            link: "www.algo.com",
            logo: boostrap_logo,
            des: "Bootstrap is a popular front-end framework that simplifies responsive web design with pre-built components, CSS utilities, and JavaScript plugins.",
            category: "CSS Framework",
            time: "2 Years",
          },
          {
            name: "TailwindCSS",
            link: "www.algo.com",
            logo: tailwind_logo,
            des: "Tailwind CSS is a utility-first CSS framework that allows developers to create modern and responsive designs quickly using utility classes.",
            category: "CSS Framework",
            time: "2 Years",
          },
          {
            name: "Postman",
            link: "www.algo.com",
            logo: postman_logo,
            des: "Postman is an API development and testing tool that simplifies creating, testing, and managing APIs through a user-friendly interface.",
            category: "API Testing & Development",
            time: "2 Years",
          },
          {
            name: "Quasar",
            link: "www.algo.com",
            logo: quassar_logo,
            des: "Quasar is a Vue.js-based framework for building responsive and high-performance web, mobile, and desktop applications using a single codebase.",
            category: "Vue Framework",
            time: "2 Years",
          },
          {
            name: "Electron",
            link: "www.algo.com",
            logo: electron_logo,
            des: "Electron is a framework that enables the development of cross-platform desktop applications using web technologies like HTML, CSS, and JavaScript.",
            category: "Desktop App Development",
            time: "2 Years",
          },
        ],
        toolsGeneral: [
          {
            name: "Git",
            link: "www.algo.com",
            logo: git_logo,
            des: "Git is a distributed version control system that allows developers to track changes in their code, collaborate with teams, and manage project history efficiently.",
            category: "Version Control",
            time: "2 Years",
          },
          {
            name: "Github",
            link: "www.algo.com",
            logo: github_logo,
            des: "GitHub is a cloud-based platform for hosting and managing Git repositories, enabling collaboration, issue tracking, and continuous integration/deployment.",
            category: "Version Control & Collaboration",
            time: "2 Years",
          },
          {
            name: "Bash",
            link: "www.algo.com",
            logo: bash_logo,
            des: "Bash (Bourne Again Shell) is a Unix shell and command-line interface used for scripting and automating tasks in Linux and macOS environments.",
            category: "Scripting & Automation",
            time: "3 Years",
          },
          {
            name: "Linux",
            link: "www.algo.com",
            logo: linux_logo,
            des: "Linux is an open-source operating system known for its security, stability, and flexibility. It powers servers, desktops, and embedded systems worldwide.",
            category: "Operating System",
            time: "4 Years",
          },
          {
            name: "Figma",
            link: "www.algo.com",
            logo: figma_logo,
            des: "Figma is a web-based design and prototyping tool that enables teams to collaborate in real time on UI/UX designs, wireframes, and prototypes.",
            category: "UI/UX Design",
            time: "2 Years",
          },
          {
            name: "Trello",
            link: "www.algo.com",
            logo: trello_logo,
            des: "Trello is a visual project management tool that uses boards, lists, and cards to help teams organize tasks, track progress, and improve workflow.",
            category: "Project Management",
            time: "2 Years",
          },
          {
            name: "Chat GPT",
            link: "www.algo.com",
            logo: gpt_logo,
            des: "ChatGPT is an AI-powered chatbot developed by OpenAI that uses natural language processing to generate human-like responses for various applications, including customer support and content generation.",
            category: "Artificial Intelligence & NLP",
            time: "2 Years",
          },
        ],

        softAbilities: [],
        projects: [
          {
            name: "Nomina's Program",
            des: `The Nominas Program is a desktop application developed using PyQt, designed to simplify payroll management for businesses. It is compatible with Windows and Linux, providing a user-friendly interface to efficiently handle employee payments and documentation.\n\nThis program was built to help companies streamline the payroll process, ensuring accurate and organized salary calculations for employees. It is tailored for businesses that need to generate payrolls with different payment frequencies while maintaining full control over employee records and payment receipts.`,
            preview: [
              nomina_1,
              nomina_2,
              nomina_3,
              nomina_4 ],

            languages: [
              { name: "Python", logo: python_logo},
              { name: "PyQt", logo: pyqt },
              { name: "MariaDB", logo: mariadb_logo }
            ],
          },
          {
            name: "Letters's Soup Program",
            des:`The Letter Soup Generator is a web-based application built with Vue that allows users to create word search puzzles and export them in PDF format. Additionally, all generated puzzles can be stored in a Django-powered database, enabling users to access and review their previously created word searches.\n\nThe users are immediately presented with the Letter Soup Creator, where they can generate custom word search puzzles effortlessly. While an account is not required to create puzzles, registered users benefit from a history feature that lets them track and revisit their past creations.`,
            preview: [soup_1, soup_2, soup_3, soup_4, soup_5],
            languages: [
              { name: "Python", logo: python_logo },
              { name: "JavaScript", logo: js_logo },
              { name: "TypeScript", logo: ts_logo },
              { name: "MariaDB", logo: mariadb_logo }
            ],

          },
        ],
      },
    ],
  }),
  getters: {
    getLanguages(state) {
      const languages = state.person.flatMap((lang) => lang.languages);
      console.log(languages);
      return languages;
    },
    getProgrammingLanguages(state) {
      const ProLanguages = state.person.flatMap(
        (lang) => lang.programming_languages,
      );
      console.log(ProLanguages);
      return ProLanguages;
    },
    getFrameworks(state) {
      const ProLanguages = state.person.flatMap((lang) => lang.frameworks);
      console.log(ProLanguages);
      return ProLanguages;
    },
    getDatabases(state) {
      const ProLanguages = state.person.flatMap((lang) => lang.databases);
      console.log(ProLanguages);
      return ProLanguages;
    },
    getToolsWeb(state) {
      const ProLanguages = state.person.flatMap((lang) => lang.toolsWeb);
      console.log(ProLanguages);
      return ProLanguages;
    },
    getToolsGeneral(state) {
      const ProLanguages = state.person.flatMap((lang) => lang.toolsGeneral);
      console.log(ProLanguages);
      return ProLanguages;
    },
    getProjects(state) {
      const ProLanguages = state.person.flatMap((lang) => lang.projects);
      console.log(ProLanguages);
      return ProLanguages;
    },
  },
  actions: {},
});
