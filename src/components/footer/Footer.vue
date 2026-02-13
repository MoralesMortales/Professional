

<template>
  <footer class="footer-section">
    <div class="container">
      <!-- Footer Grid -->
      <div class="footer-grid">
        <!-- Brand Column -->
        <div class="footer-col brand-col">
          <h3 class="footer-brand">Carlos Morales</h3>
          <p class="footer-tagline">{{ t.footerTagline }}</p>
          
          <!-- Social Links -->
          <div class="social-links">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              class="social-link"
              target="_blank"
              rel="noopener"
              :aria-label="social.name"
            >
              <svg v-html="social.icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"></svg>
            </a>
          </div>
        </div>

        <!-- Navigation Column -->
        <div class="footer-col">
          <h4 class="footer-title">{{ t.navigation }}</h4>
          <ul class="footer-links">
            <li v-for="link in navLinks" :key="link.key">
              <a :href="link.href" class="footer-link">{{ (t as any)[link.key] }}</a>
            </li>
          </ul>
        </div>

        <!-- Projects Column -->
        <div class="footer-col">
          <h4 class="footer-title">{{ t.projects }}</h4>
          <ul class="footer-links">
            <li v-for="project in projectsStore.projectsList.slice(0, 3)" :key="project.id">
              <a :href="`#project-${project.id}`" class="footer-link">{{ project.title }}</a>
            </li>
            <li>
              <a href="#projects" class="footer-link">{{ t.seeAllProjects }}</a>
            </li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div class="footer-col">
          <h4 class="footer-title">{{ t.contact }}</h4>
          <ul class="footer-links">
            <li class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-10 7L2 7"></path>
              </svg>
              <span>carlos52.7624@gmail.com</span>
            </li>
            <li class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
              <span>+58 (412) 881-6267</span>
            </li>
            <li class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Anzoátegui, Venezuela 🇻🇪</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="copyright">
          <p>&copy; {{ currentYear }} Carlos Morales. {{ t.copyright }}</p>
        </div>
        
        <!-- Language Selector (Compacto) -->
        <div class="language-selector">
          <button 
            v-for="lang in languages" 
            :key="lang.code"
            @click="selectLang(lang.code)"
            class="lang-btn"
            :class="{ active: uiStore.language === lang.code }"
          >
            <span class="flag">{{ lang.flag }}</span>
            <span class="lang-code">{{ lang.code.toUpperCase() }}</span>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>



<script setup lang="ts">
import { computed } from 'vue'
import { useUIStore } from '@/stores/uiStore'
import { useProjectsStore } from '@/stores/projectsStore'
import { translations, type Language } from '@/translations'

const uiStore = useUIStore()
const projectsStore = useProjectsStore()
const t = computed(() => translations[uiStore.language as Language] || translations.en)

// Año actual para copyright
const currentYear = computed(() => new Date().getFullYear())

// Idiomas disponibles
const languages = [
  { code: 'en' as Language, label: 'English', flag: '🇬🇧' },
  { code: 'es' as Language, label: 'Español', flag: '🇪🇸' },
  { code: 'de' as Language, label: 'Deutsch', flag: '🇩🇪' }
]

// Cambiar idioma
const selectLang = (code: Language) => {
  uiStore.setLanguage(code)
}

// Navegación
const navLinks = [
  { key: 'about', href: '#about' },
  { key: 'personal', href: '#personal' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' }
]

// Redes sociales
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/MoralesMortales',
    icon: `<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>`
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/carlos-morales-987974262',
    icon: `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>`
  },
  {
    name: 'Email',
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=carlos52.7624@gmail.com',
    icon: `<rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-10 7L2 7"></path>`
  }
]
</script>

<style scoped>
.footer-section {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border-top: 1px solid var(--border-color);
  padding: 80px 20px 40px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

/* Footer Grid */
.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 60px;
  margin-bottom: 60px;
}

/* Brand Column */
.footer-brand {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 15px;
  background: linear-gradient(90deg, var(--accent-color), #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-tagline {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 25px;
  font-size: 0.95rem;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--bg-secondary);
  border-radius: 50%;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.social-link:hover {
  background: var(--accent-color);
  color: white;
  transform: translateY(-5px);
  border-color: var(--accent-color);
}

/* Footer Titles */
.footer-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 25px;
  position: relative;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-color), #a855f7);
  border-radius: 2px;
}

/* Footer Links */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
}

.footer-link:hover {
  color: var(--accent-color);
  transform: translateX(5px);
}

.footer-link::before {
  content: '›';
  position: absolute;
  left: -15px;
  opacity: 0;
  transition: opacity 0.3s ease, left 0.3s ease;
  color: var(--accent-color);
}

.footer-link:hover::before {
  opacity: 1;
  left: -10px;
}

/* Contact Items */
.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 15px;
}

.contact-item svg {
  color: var(--accent-color);
  flex-shrink: 0;
  width: 18px;
  height: 18px;
}

.contact-item span {
  transition: color 0.3s ease;
}

.contact-item:hover span {
  color: var(--accent-color);
}

/* Footer Bottom */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  border-top: 1px solid var(--border-color);
}

.copyright {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Language Selector Compacto */
.language-selector {
  display: flex;
  gap: 8px;
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 30px;
  color: var(--text-secondary);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lang-btn:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
  transform: translateY(-2px);
}

.lang-btn.active {
  background: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
}

.flag {
  font-size: 1rem;
}

.lang-code {
  font-weight: 600;
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  
  .brand-col {
    grid-column: span 2;
  }
  
  .footer-brand {
    font-size: 1.6rem;
  }
}

@media (max-width: 768px) {
  .footer-section {
    padding: 60px 20px 30px;
  }
  
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .brand-col {
    grid-column: span 1;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  .footer-title::after {
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
  }
  
  .footer-title {
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .contact-item {
    justify-content: center;
  }
    .footer-col:not(.brand-col):not(:last-child) {
    text-align: center;
  }
  
  .footer-col:not(.brand-col):not(:last-child) .footer-links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .footer-col:not(.brand-col):not(:last-child) .footer-link:hover {
    transform: translateX(0) translateY(-2px);
  }
  
  .footer-col:not(.brand-col):not(:last-child) .footer-link::before {
    display: none; /* Ocultar la flecha cuando está centrado */
  }
  
  /* Ajustar el pseudo-elemento after del título */
  .footer-col:not(.brand-col):not(:last-child) .footer-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
}

@media (max-width: 480px) {
  .footer-section {
    padding: 40px 15px 20px;
  }
  
  .footer-brand {
    font-size: 1.4rem;
    
  }
  
  .language-selector {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .lang-btn {
    padding: 5px 10px;
    font-size: 0.8rem;
  }
}

/* Dark mode adjustments */
.dark-theme .footer-section {
  background-color: var(--bg-primary);
  border-top-color: var(--border-color);
}

.dark-theme .social-link {
  background: var(--bg-secondary);
  border-color: var(--border-color);
}

.dark-theme .lang-btn {
  background: var(--bg-secondary);
  border-color: var(--border-color);
}
</style>