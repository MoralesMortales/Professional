import { defineStore } from 'pinia'

export const useTechStore = defineStore('tech', {
  state: () => ({
    activeTech: null as string | null,
    stack: {
      frontend: {
        label: 'Frontend',
        items: [
          { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', invert: false },
          { name: 'Vue', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', invert: false },
          { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', invert: false },
          { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', invert: false },
          { name: 'Quasar', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/quasar/quasar-original.svg', invert: false },
          { name: 'Tailwind', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', invert: false },
          { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', invert: false },
          { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', invert: false },
          { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', invert: false }
        ]
      },
      mobile: {
        label: 'Mobile',
        items: [
          { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', invert: false }
        ]
      },
      backend: {
        label: 'Backend',
        items: [
          { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', invert: false },
          { name: 'Expressjs', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
          { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', invert: false },
          { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', invert: true },
          { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', invert: false },
          { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', invert: false },
          { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', invert: false }
        ]
      },
      databases: {
        label: 'Databases',
        items: [
          { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', invert: false },
          { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', invert: false },
          { name: 'MariaDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg', invert: true },
          { name: 'SQLite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', invert: false },
        ]
      },
      tools: {
        label: 'Tools & OS',
        items: [
          { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', invert: false },
          { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
          { name: 'Postman', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', invert: false },
          { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', invert: false },
          { name: 'Windows', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg', invert: false },
          { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', invert: false },
          { name: 'AWS', logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg', invert: false }
        ]
      }
    }
  }),
  actions: {
    handleTechClick(name: string) {
      this.activeTech = name;
      setTimeout(() => {
        if (this.activeTech === name) this.activeTech = null;
      }, 1000);
    }
  }
})