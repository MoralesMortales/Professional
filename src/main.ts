import { createApp } from 'vue'
import pinia from './stores'
import './index.css'
import './style.css'
import App from './App.vue'
import '@quasar/extras/material-icons/material-icons.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faYoutube, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css'; // Estilos de Quasar
import '@quasar/extras/material-icons/material-icons.css'; // Estilos de los íconos

library.add(faInstagram);
library.add(faYoutube);
library.add(faGithub);
library.add(faLinkedin);
library.add(faChevronRight)
library.add(faChevronLeft)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(pinia)


app.use(Quasar);

app.mount('#app')
