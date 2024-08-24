import { defineStore } from 'pinia';

export const useProfileDataStore = defineStore('ProfileData', {
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
          { name: 'Spanish', level: 'C2 (Native)', img:'@/assets/Imgs/spanish_image.jpeg' },
          { name: 'English', level: 'C1', img:'@/assets/Imgs/English_image.png' },
          { name: 'German', level: 'A2', img:'@/assets/Imgs/german_image.jpeg' },
        ],

        programming_languages: [
          { name: 'C++', level: 'Intermediate' },
          { name: 'Python', level: 'Intermediate' },
          { name: 'JavaScript - TypeScript', level: 'Intermediate' },
          { name: 'HTML5 / CSS3', level: 'Advanced' },
          { name: 'PHP', level: 'Junior' },
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

  },
  actions: {

  },
});
