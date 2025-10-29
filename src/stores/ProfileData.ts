import { defineStore } from "pinia";

import spanishLogo from "../assets/Img/spanish_flag.png";
import englishLogo from "../assets/Img/flag_english.png";
import germanLogo from "../assets/Img/germany_flag.png";

import spanishImg from "../assets/Img/spanish_image.jpeg";
import englishImg from "../assets/Img/English_Image.png";
import germanImg from "../assets/Img/german_image.jpeg";

//pg languages
//import cpp_logo from "../assets/Img/cpp_logo.png";
import python_logo from "../assets/Img/python_logo.png";
import js_logo from "../assets/Img/js.png";
import ts_logo from "../assets/Img/ts.png";
import html_logo from "../assets/Img/html_logo.png";
import css_logo from "../assets/Img/css_logo.png";
import php_logo from "../assets/Img/php_logo.png";
import laravel_logo from "../assets/Img/laravel_logo.png";
import nodejs_logo from "../assets/Img/nodejs_logo.png";
import react_logo from "../assets/Img/react_logo.png";
import docker_logo from "../assets/Img/docker_logo.png";
import pinia_logo from "../assets/Img/pinia_logo.png";

//frameworks
import django_logo from "../assets/Img/django_logo.png";
import vue_logo from "../assets/Img/vueJs_logo.png";
import pyqt from "../assets/Img/pyqt.png";

//databases
import mysql_logo from "../assets/Img/mysql_logo.png";
//import postgre_logo from "../assets/Img/Postgresql_elephant_logo.png";
import sqlite_logo from "../assets/Img/sqlite_logo.png";
import mariadb_logo from "../assets/Img/mariadb_logo.png";

//tools web
import postman_logo from "../assets/Img/postman.png";
import tailwind_logo from "../assets/Img/tailwind_logo.png";
import boostrap_logo from "../assets/Img/bootstrap.png";
import quassar_logo from "../assets/Img/quassar_logo.png";
//import electron_logo from "../assets/Img/electron_logo.png";

//tools general
import bash_logo from "../assets/Img/bash_logo.png";
import git_logo from "../assets/Img/git_logo.png";
import github_logo from "../assets/Img/github_logo.png";
import figma_logo from "../assets/Img/figma_logo.png";
import gpt_logo from "../assets/Img/gpt_logo.png";
//import trello_logo from "../assets/Img/trello_logo.png";
import linux_logo from "../assets/Img/linulogo.png";
import windows_logo from "../assets/Img/windows_logo.png";

//nomina project

import nomina_1 from "../assets/projects/nomina/msin.png";
import nomina_2 from "../assets/projects/nomina/2.png";
import nomina_3 from "../assets/projects/nomina/3.png";
import nomina_4 from "../assets/projects/nomina/4.png";

//portfolio

import port1 from "../assets/projects/professional/1.jpeg";
import port2 from "../assets/projects/professional/2.jpeg";
import port3 from "../assets/projects/professional/3.jpeg";
import port4 from "../assets/projects/professional/4.jpeg";
import port5 from "../assets/projects/professional/5.jpeg";

//recipeMaster

import rcp1 from "../assets/projects/recipeMaster/1.png";
import rcp2 from "../assets/projects/recipeMaster/2.png";
import rcp3 from "../assets/projects/recipeMaster/3.png";

//nomina web project

import nominaWeb_1 from "../assets/projects/paycheck_2_web/1.png";
import nominaWeb_2 from "../assets/projects/paycheck_2_web/2.png";
import nominaWeb_3 from "../assets/projects/paycheck_2_web/3.png";
import nominaWeb_4 from "../assets/projects/paycheck_2_web/4.png";

//letter soup project

import soup_1 from "../assets/projects/letter_soup/1.png";
import soup_2 from "../assets/projects/letter_soup/2.png";
import soup_3 from "../assets/projects/letter_soup/3.png";
import soup_4 from "../assets/projects/letter_soup/4.png";
import soup_5 from "../assets/projects/letter_soup/5.png";

//TrainSystem project

import trainSystem_1 from "../assets/projects/trainSystem_laravel/1.png";
import trainSystem_2 from "../assets/projects/trainSystem_laravel/2.png";
import trainSystem_3 from "../assets/projects/trainSystem_laravel/3.png";
import trainSystem_4 from "../assets/projects/trainSystem_laravel/4.png";
import trainSystem_5 from "../assets/projects/trainSystem_laravel/5.png";
import trainSystem_6 from "../assets/projects/trainSystem_laravel/6.png";

//pokegame project

import pokegame_1 from "../assets/projects/pokegame/pokemon_1.png";
import pokegame_2 from "../assets/projects/pokegame/pokemon_2.png";

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
            description:`Es mi lengua natal! Si existiese un nivel C3 en Español, sin duda seria mi nivel en este increible idioma.

A pesar de ser criado con el Español Venezolano - Latinoamericano, soy capaz de entender otros acentos de Español sin problemas!`,


          },
          { name: "English", level: "C1", logo: englishLogo, img: englishImg, description:`I've had learnt English 5 years ago until nowadays and everyday I learn new things about this wonderful language.

It has been my first new language to learn after my native one language'` },
          { name: "German", level: "B1", logo: germanLogo, img: germanImg ,             description:`Ich lerne seit einem Jahr Deutsch. Ich lerne manchmal neue Vokabeln und kann mich auf einfachem Niveau ausdrücken und sprechen. 

Bald werde ich das C1-Niveau in dieser wunderbaren Sprache erreichen.`,
},
        ],

        programming_languages: [
          // {
          //   name: "C++",
          //   logo: cpp_logo,
          //   des: "C++ is a powerful, high-performance programming language used for system/software development, game development, and real-time applications.",
          //   category: "Programming Language",
          //   time: "4 Years",
          //   used: ["Terminal To_Do_List"],
          // },
          {
            name: "PHP",
            logo: php_logo,
            des: "PHP is a widely-used, open-source, server-side scripting language designed specifically for web development. It is embedded within HTML code and executed on a web server, where it generates dynamic content",
            category: "Programming Language",
            time: "1 Years",
            used: ["TrainSystem"],
          },
          {
            name: "Python",
            logo: python_logo,
            des: "Python is a versatile, high-level programming language known for its simplicity and readability, widely used in web development, AI, and data science.",
            category: "Programming Language",
            time: "5 Years",
            used: ["Paycheck Program", "Letter's Soup"],
          },
          {
            name: "JavaScript",
            logo: js_logo,
            des: "JavaScript is a popular scripting language essential for web development, enabling interactive and dynamic content in browsers.",
            category: "Programming Language",
            time: "4 Years",
            used: ["Paycheck Web Program", "RecipeMaster", "Pokegame", "Portfolio"],
          },
          {
            name: "TypeScript",
            logo: ts_logo,
            des: "TypeScript is a superset of JavaScript that adds static typing, enhancing code maintainability and scalability.",
            category: "Programming Language",
            time: "2 Years",
            used: ["Letter's Soup", "Portfolio"],
          },
          {
            name: "HTML5",
            logo: html_logo,
            des: "HTML5 is the standard markup language for structuring web content, supporting modern multimedia and responsive designs.",
            category: "Markup Language",
            time: "5 Years",
            used: ["Letter's Soup", "Paycheck Web Program", "Train System", "RecipeMaster", "Pokegame", "Portfolio"],
          },
          {
            name: "CSS3",
            logo: css_logo,
            des: "CSS3 is used to style and layout web pages, enabling responsive designs, animations, and modern UI aesthetics.",
            category: "Style Sheet Language",
            time: "5 Years",
            used: ["Letter's Soup", "Paycheck Web Program", "Train System", "RecipeMaster", "Pokegame", "Portfolio"],
          },
        ],

        frameworks: [
          {
            name: "Django",
            level: "Intermediate",
            logo: django_logo,
            des: "Django is a high-level Python web framework that promotes rapid development and clean, pragmatic design.",
            category: "Backend Web Framework",
            time: "2 Years",
            used: ["Letter's Soup"],
          },
          {
            name: "Vue.js",
            level: "Advanced",
            logo: vue_logo,
            des: "Vue.js is a progressive JavaScript framework for building user interfaces and single-page applications with ease.",
            category: "Frontend Web Framework",
            time: "2 Years",
            used: ["Letter's Soup","RecipeMaster","Pokegame","Portfolio"],
          },

          {
            name: "React",
            level: "Advanced",
            logo: react_logo,
            des: `React is a free and open-source JavaScript library for building user interfaces, especially for web applications where content needs to change without reloading the page (think: Facebook, Instagram, Netflix, Airbnb).
`,
            category: "Frontend Web Framework",
            time: "2 Years",
            used: ["Paycheck Web Program"],
          },
          {
            name: "NodeJS",
            level: "Intermediate",
            logo: nodejs_logo,
            des: `Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser, primarily on the server side. 
`,
            category: "Backend Web Framework",
            time: "1 Years",
            used: ["Paycheck Web Program"],
          },
          {
            name: "Laravel",
            level: "Intermediate",
            logo: laravel_logo,
            des: "Laravel is a free, open-source toolkit (called a framework) for building modern web applications using the PHP programming language. Think of it as a pre-built foundation and a set of powerful, organized tools that help developers build websites and web apps faster, more securely, and with less repetitive code.",
            category: "Frontend Framework",
            time: "2 Years",
            used: ["TrainSystem"],
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
            used: ["TrainSystem", "Paycheck Program", "Paycheck Web Program"],
          },
          {
            name: "MariaDB",
            link: "www.algo.com",
            logo: mariadb_logo,
            des: "MariaDB is a fork of MySQL that offers improved performance, security, and additional features while maintaining full compatibility with MySQL.",
            category: "Relational Database",
            time: "3 Years",
            used: ["TrainSystem", "Paycheck Program", "Paycheck Web Program"],
          },
          {
            name: "SQLite",
            link: "www.algo.com",
            logo: sqlite_logo,
            des: "SQLite is a lightweight, file-based SQL database engine commonly used for embedded applications, mobile apps, and small-scale storage needs.",
            category: "Embedded Database",
            time: "2 Years",
            used: ["Letter's Soup"],
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
            used: ["RecipeMaster"],
          },
          {
            name: "Pinia",
            link: "www.algo.com",
            logo: pinia_logo,
            des: "Pinia is the official state management library for Vue.js applications, designed to serve as a centralized store for all the dynamic data that needs to be shared across multiple components in your app. It solves the cumbersome problem of 'prop drilling' (passing data through many layers of components) by providing a global, reactive data source that any component can directly access or update, ensuring your application's state is predictable, organized, and easy to maintain as it scales.",
            category: "Vue.Js Library",
            time: "2 Years",
            used: ["Portfolio"],
          },

          {
            name: "TailwindCSS",
            link: "www.algo.com",
            logo: tailwind_logo,
            des: "Tailwind CSS is a utility-first CSS framework that allows developers to create modern and responsive designs quickly using utility classes.",
            category: "CSS Framework",
            time: "2 Years",
            used: ["Letter's Soup", "Train System", "RecipeMaster", "Pokegame", "Portfolio"],
          },
          {
            name: "Postman",
            link: "www.algo.com",
            logo: postman_logo,
            des: "Postman is an API development and testing tool that simplifies creating, testing, and managing APIs through a user-friendly interface.",
            category: "API Testing & Development",
            time: "2 Years",
            used: ["RecipeMaster", "Letter's Soup"],
          },
          {
            name: "Quasar",
            link: "www.algo.com",
            logo: quassar_logo,
            des: "Quasar is a Vue.js-based framework for building responsive and high-performance web, mobile, and desktop applications using a single codebase.",
            category: "Vue Framework",
            time: "2 Years",
            used: ["Letter's Soup", "Portfolio"],
          },
        ],

        toolsGeneral: [
 {
            name: "Docker",
            link: "www.algo.com",
            logo: docker_logo,
            des: "Docker is a platform that uses OS-level virtualization to deliver software in standardized units called containers, which bundle an application's code together with its libraries and dependencies, allowing it to run quickly and reliably in any computing environment, from a developer's laptop to a production data center.",
            category: "DevOps Tool",
            time: "1 Year",
            used: ["Paycheck Web Program"],
          },

          {
            name: "Git",
            link: "www.algo.com",
            logo: git_logo,
            des: "Git is a distributed version control system that allows developers to track changes in their code, collaborate with teams, and manage project history efficiently.",
            category: "Version Control",
            time: "2 Years",
            used: ["All of them"],
          },
          {
            name: "Github",
            link: "www.algo.com",
            logo: github_logo,
            des: "GitHub is a cloud-based platform for hosting and managing Git repositories, enabling collaboration, issue tracking, and continuous integration/deployment.",
            category: "Version Control & Collaboration",
            time: "2 Years",
            used: ["All of them"],
          },
          {
            name: "Bash",
            link: "www.algo.com",
            logo: bash_logo,
            des: "Bash (Bourne Again Shell) is a Unix shell and command-line interface used for scripting and automating tasks in Linux and macOS environments.",
            category: "Scripting & Automation",
            time: "3 Years",
            used: ["All of them as Terminal"],
          },
          {
            name: "Linux",
            link: "www.algo.com",
            logo: linux_logo,
            des: "Linux is an open-source operating system known for its security, stability, and flexibility. It powers servers, desktops, and embedded systems worldwide.",
            category: "Operating System",
            time: "4 Years",
            used: ["All of them using it as my primary OS"],
          },
          {
            name: "Windows",
            link: "www.algo.com",
            logo: windows_logo,
            des: "Windows is a family of proprietary graphical operating systems developed and marketed by Microsoft, which provides a foundational software platform that manages a computer's hardware and software resources. ",
            category: "Operating System",
            time: "All my Life",
            used: ["Paycheck Program"],
          },
          {
            name: "Figma",
            link: "www.algo.com",
            logo: figma_logo,
            des: "Figma is a web-based design and prototyping tool that enables teams to collaborate in real time on UI/UX designs, wireframes, and prototypes.",
            category: "UI/UX Design",
            time: "2 Years",
            used: ["All of them"],
          },
          {
            name: "Chat GPT",
            link: "www.algo.com",
            logo: gpt_logo,
            des: "ChatGPT is an AI-powered chatbot developed by OpenAI that uses natural language processing to generate human-like responses for various applications, including customer support and content generation.",
            category: "Artificial Intelligence & NLP",
            time: "2 Years",
            used: ["All of them, using it as a tool to find out better possible estructures, methodologies, practices, etc"],
          },
        ],

        softAbilities: [],

        projects: [
          {
            name: "Paycheck Program",
            access: true,
            link: "https://github.com/MoralesMortales/Programa_de_Nominas",
            des: `The Paycheck Program is a desktop application developed using PyQt, designed to simplify payroll management for businesses. It is compatible with Windows and Linux, providing a user-friendly interface to efficiently handle employee payments and documentation.\n\nThis program was built to help companies streamline the payroll process, ensuring accurate and organized salary calculations for employees. It is tailored for businesses that need to generate payrolls with different payment frequencies while maintaining full control over employee records and payment receipts.`,
            preview: [nomina_1, nomina_2, nomina_3, nomina_4],

            languages: [
              { name: "Python", logo: python_logo },
              { name: "PyQt", logo: pyqt },
              { name: "Figma", logo: figma_logo },
              { name: "MariaDB", logo: mariadb_logo },
            ],
          },
          {
            name: "Paycheck Web Program",
            access: false,
            link: "https://github.com/MoralesMortales/Programa_de_Nominas",
            des: `The Paycheck Web Program is a web tool developed to be used in an infranet on a private network, designed to simplify payroll management for businesses. It can be used mostly all web browsers (firefox, opera, brave, chrome), providing a user-friendly interface to efficiently handle employee payments and documentation.\n\nAlways ensuring accurate and organized salary calculations for employees. It is tailored for businesses that need to generate payrolls with different payment frequencies while maintaining full control over employee records and payment receipts.`,
            preview: [nominaWeb_1, nominaWeb_2, nominaWeb_3, nominaWeb_4],

            languages: [
              { name: "NodeJS", logo: nodejs_logo },
              { name: "React", logo: react_logo },
              { name: "HTML", logo: html_logo },
              { name: "CSS", logo: css_logo },
              { name: "JavaScript", logo: js_logo },
              { name: "Figma", logo: figma_logo },
              { name: "MariaDB", logo: mariadb_logo },
              { name: "Docker", logo: docker_logo },
            ],
          },
          {
            name: "Train System",
            access: true,
            link: "https://github.com/MoralesMortales/trainSystem",
            des: `
This system is all about getting a train company's schedule online and organized. It lets them easily plot out their routes, times, and available seats for every trip. No more messy paper charts or confusing spreadsheets to worry about. Everything is kept tidy in one digital spot.

For customers, it means booking a trip is as simple as a few clicks from their phone or computer. They can see all their options, pick their perfect seat, and get a ticket instantly. Meanwhile, the train folks can easily see all the bookings and manage everything smoothly behind the scenes. It’s a win-win for everyone.
`,
            preview: [
              trainSystem_1,
              trainSystem_2,
              trainSystem_3,
              trainSystem_4,
              trainSystem_5,
              trainSystem_6,
            ],

            languages: [
              { name: "PHP", logo: php_logo },
              { name: "Laravel", logo: laravel_logo },
              { name: "HTML", logo: html_logo },
              { name: "CSS", logo: css_logo },
              { name: "Figma", logo: figma_logo },
              { name: "MariaDB", logo: mariadb_logo },
            ],
          },
          {
            name: "Letters's Soup",
            access: true,
            link: "https://github.com/MoralesMortales/letters_soup",
            des: `The Letter Soup Generator is a web-based application built with Vue that allows users to create word search puzzles and export them in PDF format. Additionally, all generated puzzles can be stored in a Django-powered database, enabling users to access and review their previously created word searches.\n\nThe users are immediately presented with the Letter Soup Creator, where they can generate custom word search puzzles effortlessly. While an account is not required to create puzzles, registered users benefit from a history feature that lets them track and revisit their past creations.`,
            preview: [soup_1, soup_2, soup_3, soup_4, soup_5],
            languages: [
              { name: "HTML", logo: html_logo },
              { name: "CSS", logo: css_logo },
              { name: "Python", logo: python_logo },
              { name: "Djando", logo: django_logo },
              { name: "Vue.js", logo: vue_logo },
              { name: "TypeScript", logo: ts_logo },
              { name: "TailwindCSS", logo: tailwind_logo },
              { name: "Quasar", logo: quassar_logo },
              { name: "Postman", logo: postman_logo },
              { name: "Figma", logo: figma_logo },
            ],
          },
          {
            name: "RecipeMaster",
            access: true,
            link: "https://github.com/MoralesMortales/recipeMaster",
            des: `It's a tool to find recipes and specifications of each one according to certains ingredients, making easy to do a recipe with only ingredients specified. 

We built this to be super fast and easy to use, all with VueJs. It shows you clear instructions and details for each dish right away. Perfect for home cooks who just want a simple solution.`,
            preview: [rcp1, rcp2, rcp3],
            languages: [
              { name: "HTML", logo: html_logo },
              { name: "CSS", logo: css_logo },
              { name: "JavaScript", logo: js_logo },
              { name: "Vue.Js", logo: vue_logo },
              { name: "TailwindCSS", logo: tailwind_logo },
              { name: "Postman", logo: postman_logo },
              { name: "Figma", logo: figma_logo },
            ],
          },
          {
            name: "Pokegame",
            access: true,
            link: "https://moralesmortales.github.io/pokegame/",
            des: `This is a fun and engaging game where your goal is to guess the correct Pokémon from a set of multiple-choice options. The mechanics are designed to test your knowledge of Pokémon, challenging you to identify the right one based on silhouettes. Your objective is to score as many points as possible by making accurate guesses.\n\nThe game is built using Vue.js and leverages Axios to interact with a Pokémon API. This allows the game to fetch and display Pokémon data dynamically, ensuring a fresh and exciting experience with each playthrough.`,
            preview: [pokegame_1, pokegame_2],
            languages: [
              { name: "HTML", logo: html_logo },
              { name: "CSS", logo: css_logo },
              { name: "JavaScript", logo: js_logo },
              { name: "TailwindCSS", logo: tailwind_logo },
              { name: "Postman", logo: postman_logo },
              { name: "Figma", logo: figma_logo },
            ],
          },
          {
            name: "Portfolio",
            access: true,
            link: "https://moralesmortales.github.io/professional/",
            des: ` This is the website where you are right now, was made with VueJs and shows info about me, such as, contact info, some projects that I had made or helped with, my hobbies, etc.

It was upload using the services of Github Pages, the url sohws this in the navegation bar on top, following with my Github username. Have fun looking this web!`,
            preview: [port1, port2, port3, port4, port5],

            languages: [
              { name: "Vuejs", logo: vue_logo },
              { name: "TypeScript", logo: ts_logo },
              { name: "HTML", logo: html_logo },
              { name: "CSS", logo: css_logo },
              { name: "Pinia", logo: pinia_logo },
              { name: "Quasar", logo: quassar_logo },
              { name: "Figma", logo: figma_logo },
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
