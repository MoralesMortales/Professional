<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-label">{{ t.aboutTitle }}</h2>
        <p class="section-description">
          {{ t.aboutDescription }}
        </p>
      </div>

      <div class="features-grid" id="personal">
        <div v-for="(feature, index) in features" :key="index" class="feature-card">
          <div class="feature-icon" v-html="feature.icon"></div>
          <h3 class="feature-name">{{ feature.title }}</h3>
          <p class="feature-text">{{ feature.text }}</p>
        </div>
      </div>

      <div class="tech-container">
        <h3 class="tech-section-title">{{ t.techTitle }}</h3>
        
        <div class="categories-wrapper">
          <div v-for="(cat, key) in techStore.stack" :key="key" class="category-group">
            <h4 class="category-label">{{ cat.label }}</h4>
            <div class="tech-grid">
              <div 
                v-for="tech in cat.items" 
                :key="tech.name" 
                class="tech-card"
                :class="{ 'is-active': techStore.activeTech === tech.name }"
                @click="techStore.handleTechClick(tech.name)"
              >
                <img :src="tech.logo" :class="{ 'dark-invert': tech.invert }"
 :alt="tech.name" class="tech-img" />
                <span class="tech-name">{{ tech.name }}</span>
                
                <div v-if="techStore.activeTech === tech.name" class="click-ring"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Nueva sección: Tecnologías que domino -->
      <div class="expertise-container">
        <h3 class="expertise-title">{{ t.expertiseTitle }}</h3>
        <div class="expertise-grid">
          <div v-for="skill in expertiseSkills" :key="skill.name" class="expertise-card">
            <div class="expertise-icon" v-html="skill.icon"></div>
            <span class="expertise-name">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTechStore } from '@/stores/aboutStore';
import { useUIStore } from '@/stores/uiStore';
import { translations, type Language } from '@/translations';

const techStore = useTechStore();
const uiStore = useUIStore();

const t = computed(() => translations[uiStore.language as Language] || translations.en);

const features = computed(() => [
  {
    title: t.value.cleanCode,
    text: t.value.cleanCodeDesc,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
  },
  {
    title: t.value.designMindset,
    text: t.value.designMindsetDesc,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
</svg>`
  },
  {
    title: t.value.fastLearner,
    text: t.value.fastLearnerDesc,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>`
  },
  {
    title: t.value.teamPlayer,
    text: t.value.teamPlayerDesc,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path></svg>`
  }
]);

// Skills de expertise en su término profesional
const expertiseSkills = computed(() => [
  {
    name: t.value.apiDesign,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M8 8h8"/><path d="M8 12h6"/><path d="M8 16h4"/><circle cx="18" cy="8" r="1"/><circle cx="18" cy="12" r="1"/><circle cx="18" cy="16" r="1"/></svg>`
  },
  {
    name: t.value.databaseManagement,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/><path d="M3 16c0 1.66 4 3 9 3s9-1.34 9-3"/><path d="M12 5v15"/><path d="M8 8v2"/><path d="M16 8v2"/></svg>`
  },
  {
    name: t.value.computerNetworks,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
  <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
  <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
  <circle cx="12" cy="20" r="0.5" fill="currentColor"/>
</svg>`
  },
  {
    name: t.value.aiMl,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="7" width="18" height="14" rx="2" ry="2"/>
  <rect x="7" y="3" width="10" height="4" rx="1" ry="1"/>
  <circle cx="9" cy="13" r="1.5"/>
  <circle cx="15" cy="13" r="1.5"/>
</svg>`
  },
  {
    name: t.value.softwarePatterns,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M8 7h8"/><path d="M8 12h8"/><path d="M8 17h8"/><circle cx="6" cy="7" r="1"/><circle cx="6" cy="12" r="1"/><circle cx="6" cy="17" r="1"/><circle cx="18" cy="7" r="1"/><circle cx="18" cy="12" r="1"/><circle cx="18" cy="17" r="1"/></svg>`
  },
  {
    name: t.value.ciCd,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="m12 8 4 4-4 4"/><path d="m4 4 3 3"/><path d="m20 20-3-3"/></svg>`
  },
  {
    name: t.value.dataStructures,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M9 9h6v6H9z"/><path d="M4 2v2"/><path d="M20 2v2"/><path d="M4 20v2"/><path d="M20 20v2"/><path d="M2 4h2"/><path d="M2 20h2"/><path d="M20 4h2"/><path d="M20 20h2"/></svg>`
  },
  {
    name: t.value.versionControl,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M6 16c-2.5 0-4-1.5-4-4 0-2.5 1.5-4 4-4 0-2 1-4 4-4 2 0 4 2 4 4 2.5 0 4 1.5 4 4 0 2.5-1.5 4-4 4H6z"/>
</svg>`
  },
  {
    name: t.value.containers,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
  <polyline points="3.29 7 12 12 20.71 7"/>
  <line x1="12" y1="22" x2="12" y2="12"/>
</svg>`
  },
  {
    name: t.value.operatingSystems,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="3" width="20" height="12" rx="2"/>
  <path d="M2 17h20"/>
  <path d="M6 17v2h12v-2"/>
</svg>`
  },
  {
    name: t.value.cybersecurity,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
</svg>`
  },
  {
    name: t.value.discreteMath,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="2"/>
  <line x1="9" y1="3" x2="9" y2="21"/>
  <line x1="15" y1="3" x2="15" y2="21"/>
  <line x1="3" y1="9" x2="21" y2="9"/>
  <line x1="3" y1="15" x2="21" y2="15"/>
</svg>`
  }
]);
</script>

<style scoped>

/* Nueva sección de Expertise */
.expertise-container {
  margin-top: 100px;
  text-align: center;
}

.expertise-title {
  color: var(--text-secondary);
  margin-bottom: 80px;
  font-size: 1.1rem;
  position: relative;
  display: inline-block;
}

.expertise-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  height: 2px;
  width: 60px;
  margin: 0 auto;
  opacity: 0.5;
  border-radius: 2px;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.expertise-card {
  background: var(--bg-primary);
  padding: 25px 20px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;
  cursor: default;
}

.expertise-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-color);
  box-shadow: 0 8px 25px var(--shadow-color);
}

.expertise-icon {
  color: var(--accent-color);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.expertise-card:hover .expertise-icon {
  background: var(--accent-color);
  color: white;
}

.expertise-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  line-height: 1.4;
}

/* Responsive para expertise */
@media (max-width: 768px) {
  .expertise-container {
    margin-top: 60px;
  }
  
  .expertise-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
  }
  
  .expertise-card {
    padding: 20px 15px;
  }
  
  .expertise-name {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .expertise-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.about-section {
  padding: 100px 20px;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-bottom: 20px;
}

.section-description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
}

/* Features */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 25px;
  margin-bottom: 100px;
}

.feature-card {
  background: var(--bg-primary);
  padding: 40px 30px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px var(--shadow-color);
}

.feature-card:hover {
  transform: translateY(-8px);
  border-color: var(--accent-color);
  box-shadow: 0 12px 30px var(--shadow-color);
}

.feature-icon {
  color: var(--accent-color);
  margin-bottom: 25px;
}

.feature-name {
  font-size: 1.3rem;
  margin-bottom: 15px;
  font-weight: 600;
  color: var(--text-primary);
}

.feature-text {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Tech Section */
.tech-section-title {
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 50px;
  font-size: 1.1rem;
}

.categories-wrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.category-label {
  color: var(--accent-color);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.category-label::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border-color);
  opacity: 0.3;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.tech-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--bg-primary);
  padding: 14px 22px;
  border-radius: 12px;
  cursor: pointer;
  border: 1px solid var(--border-color);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px var(--shadow-color);
}

.tech-card:hover {
  background: var(--bg-secondary);
  border-color: var(--accent-color);
  transform: translateY(-2px);
}

.tech-card.is-active {
  border-color: var(--accent-color);
  background: rgba(59, 130, 246, 0.1);
  transform: scale(0.96);
}

.tech-img {
  width: 24px;
  height: 24px;
  transition: filter 0.3s ease;
}

/* Ajustar el filtro para modo oscuro si es necesario */
.dark-theme .tech-img {
  filter: brightness(0.9);
}

.dark-inv {
  filter: brightness(0) invert(1);
}

.tech-name {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-primary);
}

/* Animación del anillo al click */
.click-ring {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  border: 2px solid var(--accent-color);
  border-radius: 12px;
  animation: ring-pulse 0.8s ease-out forwards;
}

@keyframes ring-pulse {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1.4); opacity: 0; }
}

/* Responsive */
@media (max-width: 768px) {
  .about-section {
    padding: 60px 20px;
  }
  
  .section-header {
    margin-bottom: 60px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    margin-bottom: 60px;
  }
  
  .tech-grid { 
    justify-content: center; 
  }
  
  .section-description { 
    font-size: 1.1rem; 
  }
  
  .feature-card {
    padding: 30px 20px;
  }
}

@media (max-width: 480px) {
  .about-section {
    padding: 40px 15px;
  }
  
  .tech-card {
    padding: 12px 18px;
    font-size: 0.9rem;
  }
  
  .tech-img {
    width: 20px;
    height: 20px;
  }
  
  .section-label {
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
  }
}
/* Estilo base para todas las imágenes */
.tech-img {
  width: 24px;
  height: 24px;
  transition: filter 0.3s ease;
}

/* Inversión solo en modo oscuro y solo para elementos con dark-invert */
.dark-theme .tech-img.dark-invert {
  filter: brightness(0) invert(1);
}

/* Opcional: ajuste suave para otros logos en modo oscuro */
.dark-theme .tech-img:not(.dark-invert) {
  filter: brightness(0.9);
}
</style>