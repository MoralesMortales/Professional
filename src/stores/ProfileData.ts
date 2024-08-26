import { defineStore } from 'pinia';
import spanishLogo from '../assets/Img/spanish_flag.png';
import englishLogo from '../assets/Img/flag_english.png';
import germanLogo from '../assets/Img/germany_flag.png';

import spanishImg from '../assets/Img/spanish_image.jpeg'
import englishImg from '../assets/Img/English_Image.png'
import germanImg from '../assets/Img/german_image.jpeg'

import cpp_logo from '../assets/Img/cpp_logo.png'
import python_logo from '../assets/Img/python_logo.png'
import js_logo from '../assets/Img/js.png'
import ts_logo from '../assets/Img/ts.png'
import html_logo from '../assets/Img/html_logo.png'
import css_logo from '../assets/Img/css_logo.png'
import php_logo from '../assets/Img/php.png'

export const useProfileDataStore = defineStore('useProfileDataStore', {
  state: () => ({
    person: [
      {
        firstName: 'Carlos',
        lastName: 'Morales',
        fullName: 'Carlos Alberto Morales Aguilera',
        phone: '+58 0412-8816-267',
        id: 31034826,

        hobbies: [
          'Learning languages', 'Programming', 'Read', 'Exercise'
        ],

        languages: [
          { name: 'Spanish', level: 'C2 (Native)', logo: spanishLogo ,img: spanishImg },
          { name: 'English', level: 'C1',  logo: englishLogo ,img: englishImg},
          { name: 'German', level: 'A2', logo: germanLogo ,img: germanImg },
        ],

        programming_languages: [
          { name: 'C++', level: 'Intermediate', logo: cpp_logo},
          { name: 'Python', level: 'Intermediate', logo: python_logo},
          { name: 'JavaScript', level: 'Intermediate', logo: js_logo },
          { name: 'TypeScript', level: 'Intermediate', logo: ts_logo },
          { name: 'HTML5', level: 'Advanced', logo: html_logo },
          { name: 'CSS3', level: 'Intermediate', logo: css_logo },
          { name: 'PHP', level: 'Junior', logo: php_logo },
        ],

        frameworks: [
          { name: 'Django', level: 'Advanced' },
          { name: 'Vue.js', level: 'Intermediate' },
          { name: 'Laravel', level: 'Junior' },
        ],

        socialMedia: [
          {name: 'Instagram', link:'www.algo.com'},
          {name: 'Facebook', link:'www.algo.com'},
          {name: 'GitHub', link:'www.algo.com'},
          {name: 'Linkedin', link:'www.algo.com'},
          {name: 'Youtube', link:'www.algo.com'},
        ],
        
        softAbilities: [

        ]

      }
    ]
  }),
  getters: {

    getLanguages(state){
      const languages = state.person.flatMap(lang => lang.languages)
      console.log(languages)
      return languages
    },
    getProgrammingLanguages(state){
      const ProLanguages = state.person.flatMap(lang => lang.programming_languages)
      console.log(ProLanguages)
      return ProLanguages
    }
  },
  actions: {

  },
});
