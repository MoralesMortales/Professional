<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <!-- Header -->
      <div class="section-header">
        <h2 class="section-title">{{ t.projectsTitle }}</h2>
        <p class="section-description">
          {{ t.projectsDescription }}
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
          <div v-for="project in displayedProjects" :key="project.id" class="project-card">
          <!-- Project Image Preview -->
          <div 
            class="project-image-wrapper" 
            :class="project.imageClass"
            @click="openProjectModal(project)"
          >
            <div class="project-image" :class="project.colorClass">
              <img 
                :src="project.images[0]" 
                :alt="project.alt" 
                class="project-img" 
                :class="project.imageFitClass"
                loading="lazy" 
              />
            </div>
            <div class="image-gradient" :class="project.colorClass"></div>
            
            <!-- Device Badge -->
            <span v-if="project.deviceType" class="device-badge" :class="project.deviceType">
              {{ project.deviceType === 'mobile' ? '📱' : '🖥️' }}
            </span>
          </div>

          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>

            <!-- Tech Stack -->
            <div class="tech-stack">
              <span
                v-for="(tech, techIndex) in project.technologies.slice(0, 4)"
                :key="techIndex"
                class="tech-tag"
              >
                {{ tech }}
              </span>
              <span v-if="project.technologies.length > 4" class="tech-tag more">
                +{{ project.technologies.length - 4 }}
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="project-actions">
              <button @click="openProjectModal(project)" class="btn btn-demo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <circle cx="12" cy="8" r="0.5" fill="currentColor"></circle>
                </svg>
                {{ t.seeMore }}
              </button>
              <a v-if="project.codeLink" :href="project.codeLink" class="btn btn-code" target="_blank" rel="noopener">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                {{ t.code }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- See More Button -->
      <div class="see-more-container">
        <button class="btn-see-more" @click="toggleShowAll">
          {{ showAll ? t.showLess : t.seeMoreProjects }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M5 12h13"></path>
            <path d="m15 16 4-4-4-4"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Project Modal -->
    <Transition name="modal">
      <div v-if="activeProject" class="modal-overlay" @click.self="closeModal">
        <div class="modal-container" :class="{ 'dark-theme': uiStore.isDarkMode }">
          
          <!-- Modal Header -->
          <div class="modal-header">
            <h2 class="modal-title">{{ activeProject.title }}</h2>
            <button class="modal-close" @click="closeModal">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="modal-body">
            
            <!-- Image Gallery -->
            <div class="gallery-section">
              <div class="gallery-main">
                <div class="main-image-container" @click="openZoomModal">
                  <img :src="currentImage" :alt="activeProject.alt" class="main-image" />
                  <div class="zoom-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div class="gallery-thumbnails">
                <div 
                  v-for="(image, index) in activeProject.images" 
                  :key="index"
                  class="thumbnail"
                  :class="{ active: currentImageIndex === index }"
                  @click="setCurrentImage(Number(index))"
                >
                  <img :src="image" :alt="`${activeProject.alt} - ${Number(index) + 1}`" />
                </div>
              </div>
            </div>

            <!-- Project Info -->
            <div class="info-section">
              <div class="info-header">
                <span class="device-info" :class="activeProject.deviceType">
                  {{ activeProject.deviceType === 'mobile' ? '📱 Aplicación Móvil' : '🖥️ Aplicación Desktop' }}
                </span>
              </div>

              <div class="description-box">
                <p>{{ activeProject.longDescription }}</p>
              </div>

              <div class="features-box">
                <h3>{{ t.features }}</h3>
                <ul class="features-list">
                  <li v-for="(feature, index) in activeProject.features" :key="index">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" stroke-width="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <div class="tech-box">
                <h3>{{ t.technologies }}</h3>
                <div class="tech-list">
                  <span 
                    v-for="(tech, index) in activeProject.technologies" 
                    :key="index"
                    class="tech-tag-large"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div class="modal-actions">
                <!-- Botón de Live Demo - SOLO si tiene enlace -->
                <a 
                  v-if="activeProject?.hasLiveDemo" 
                  :href="activeProject.demoLink" 
                  class="btn-modal btn-demo" 
                  target="_blank" 
                  rel="noopener"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  {{ t.liveDemo }}
                </a>
                
                <!-- Botón de código - siempre visible -->
                <a v-if="activeProject?.codeLink" :href="activeProject.codeLink" class="btn-modal btn-code" target="_blank" rel="noopener">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  {{ t.code }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Zoom Modal -->
    <Transition name="zoom">
      <div v-if="showZoom" class="zoom-overlay" @click.self="closeZoomModal">
        <div class="zoom-container">
          <button class="zoom-close" @click="closeZoomModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <img :src="currentImage" :alt="activeProject?.alt" class="zoom-image" />
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUIStore } from '@/stores/uiStore'
import { useProjectsStore } from '@/stores/projectsStore'
import { translations, type Language } from '@/translations'

const uiStore = useUIStore()
const projectsStore = useProjectsStore()
const t = computed(() => translations[uiStore.language as Language] || translations.en)
const showAll = ref(false)

const displayedProjects = computed(() => {
  if (showAll.value) {
    return projectsStore.projectsList
  }
  return projectsStore.projectsList.slice(0, 4)
})
const toggleShowAll = () => {
  showAll.value = !showAll.value
  
  // Opcional: scroll suave hacia la sección de proyectos
  if (!showAll.value) {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }
}
// Modal state
const activeProject = ref<any>(null)
const currentImageIndex = ref(0)
const showZoom = ref(false)

const currentImage = computed(() => {
  if (!activeProject.value) return ''
  return activeProject.value.images[currentImageIndex.value]
})

// Open project modal
const openProjectModal = (project: any) => {
  activeProject.value = project
  currentImageIndex.value = 0
  document.body.style.overflow = 'hidden'
}

// Close project modal
const closeModal = () => {
  activeProject.value = null
  currentImageIndex.value = 0
  showZoom.value = false
  document.body.style.overflow = 'auto'
}

// Set current image
const setCurrentImage = (index: number) => {
  currentImageIndex.value = index
}

// Open zoom modal
const openZoomModal = () => {
  showZoom.value = true
}

// Close zoom modal
const closeZoomModal = () => {
  showZoom.value = false
}

// Handler para ver más proyectos
const handleSeeMore = () => {
  toggleShowAll()
}

</script>

<style scoped>
.projects-section {
  padding: 100px 20px;
  background: radial-gradient(circle at center, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-bottom: 20px;
}

.section-description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--text-primary);
  max-width: 700px;
  margin: 0 auto;
}

/* Projects Grid - 2 columnas */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 60px;
}

.project-card {
  background: var(--bg-primary);
  border-radius: 32px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  box-shadow: 0 8px 30px var(--shadow-color);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-10px);
  border-color: var(--accent-color);
  box-shadow: 0 20px 40px var(--shadow-color);
}

/* Project Image Wrapper - Más grande */
.project-image-wrapper {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: var(--bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

/* Clases específicas para diferentes tipos de imágenes */
.project-image-wrapper.desktop {
  height: 300px;
}

.project-image-wrapper.mobile {
  height: 320px;
  background: linear-gradient(45deg, #1a1a1a, #2d2d2d);
}

.project-image-wrapper.mobile .project-img {
  width: 60%;
  max-width: 280px;
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.project-image-wrapper.tablet {
  height: 320px;
}

.project-image-wrapper.tablet .project-img {
  width: 70%;
  max-width: 400px;
  object-fit: contain;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.project-image {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-img {
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease, box-shadow 0.3s ease;
}

/* Clases de ajuste para diferentes tipos de imágenes */
.project-img.contain {
  object-fit: contain;
  padding: 20px;
}

.project-img.cover {
  object-fit: cover;
}

.project-img.fill {
  object-fit: fill;
}

.project-card:hover .project-img {
  transform: scale(1.05);
}

.project-card:hover .project-image-wrapper.mobile .project-img {
  transform: scale(1.02) translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.image-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  transition: height 0.3s ease;
}

.project-card:hover .image-gradient {
  height: 8px;
}

.image-gradient.project-purple {
  background: linear-gradient(90deg, #8b5cf6, #6d28d9);
}

.image-gradient.project-blue {
  background: linear-gradient(90deg, #3b82f6, #1e40af);
}

.image-gradient.project-green {
  background: linear-gradient(90deg, #10b981, #047857);
}

/* Device Badge */
.device-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  color: white;
  padding: 8px 12px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  z-index: 10;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.device-badge.mobile {
  background: rgba(139, 92, 246, 0.8);
}

.device-badge.desktop {
  background: rgba(59, 130, 246, 0.8);
}

/* Project Content */
.project-content {
  padding: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 18px;
  color: var(--text-primary);
  line-height: 1.3;
}

.project-description {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 25px;
  flex: 1;
}

/* Tech Stack */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 30px;
}

.tech-tag {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  padding: 8px 18px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;
}

.tech-tag:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
  transform: translateY(-2px);
}

/* Project Actions */
.project-actions {
  display: flex;
  gap: 15px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 40px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-demo {
  background: linear-gradient(90deg, var(--accent-color), #a855f7);
  color: white;
  flex: 1;
  justify-content: center;
  border: none;
  cursor: pointer;
}

.btn-demo:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
}

.btn-code {
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  flex: 1;
  justify-content: center;
}

.btn-code:hover {
  background: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
  transform: translateY(-3px);
}

/* See More Button */
.see-more-container {
  text-align: center;
  margin-top: 60px;
}

.btn-see-more {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 40px;
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 2px solid var(--border-color);
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-see-more:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
  transform: translateY(-3px);
  box-shadow: 0 12px 30px var(--shadow-color);
}

.btn-see-more svg {
  transition: transform 0.3s ease;
}

.btn-see-more:hover svg {
  transform: translateX(8px);
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  overflow-y: auto;
}

.modal-container {
  background: var(--bg-primary);
  border-radius: 32px;
  max-width: 1200px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid var(--border-color);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  position: sticky;
  top: 0;
  background: var(--bg-primary);
  padding: 25px 30px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  border-radius: 32px 32px 0 0;
}

.modal-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.modal-close {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-primary);
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: var(--accent-color);
  color: white;
  transform: rotate(90deg);
}

.modal-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 30px;
}

/* Gallery Styles */
.gallery-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.gallery-main {
  width: 100%;
  background: var(--bg-secondary);
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 16/9;
}

.main-image-container {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.main-image-container:hover .main-image {
  transform: scale(1.05);
}

.main-image-container:hover .zoom-icon {
  opacity: 1;
}

.zoom-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(4px);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.gallery-thumbnails {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.thumbnail {
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s ease;
  background: var(--bg-secondary);
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.thumbnail:hover img {
  transform: scale(1.1);
}

.thumbnail.active {
  border-color: var(--accent-color);
  transform: scale(0.98);
}

/* Info Section */
.info-section {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.device-info {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border-radius: 40px;
  font-size: 0.95rem;
  font-weight: 600;
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.device-info.mobile {
  background: rgba(139, 92, 246, 0.15);
  color: #8b5cf6;
  border-color: #8b5cf640;
}

.device-info.desktop {
  background: rgba(59, 130, 246, 0.15);
  color: #3b82f6;
  border-color: #3b82f640;
}

.description-box,
.features-box,
.tech-box {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
}

.description-box h3,
.features-box h3,
.tech-box h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 15px;
}

.description-box p {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 0.95rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tech-tag-large {
  background: var(--bg-primary);
  color: var(--text-secondary);
  padding: 8px 18px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;
}

.tech-tag-large:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
}

.modal-actions {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.btn-modal {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 40px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  flex: 1;
  justify-content: center;
}

/* Zoom Modal */
.zoom-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.zoom-container {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.zoom-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  animation: zoomIn 0.3s ease;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.zoom-close {
  position: absolute;
  top: -20px;
  right: -20px;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: all 0.2s ease;
  backdrop-filter: blur(4px);
}

.zoom-close:hover {
  background: var(--accent-color);
  transform: rotate(90deg);
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: translateY(30px);
}

.zoom-enter-active,
.zoom-leave-active {
  transition: opacity 0.3s ease;
}

.zoom-enter-from,
.zoom-leave-to {
  opacity: 0;
}

.zoom-enter-active .zoom-image,
.zoom-leave-active .zoom-image {
  transition: transform 0.3s ease;
}

.zoom-enter-from .zoom-image,
.zoom-leave-to .zoom-image {
  transform: scale(0.9);
}

/* Responsive */
@media (max-width: 1024px) {
  .projects-grid {
    gap: 30px;
  }
  
  .project-image-wrapper,
  .project-image-wrapper.desktop,
  .project-image-wrapper.mobile,
  .project-image-wrapper.tablet {
    height: 260px;
  }
  
  .modal-body {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  
  .gallery-section {
    max-width: 600px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
   .modal-container {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }
  
  .modal-container::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  
  /* También ocultar scrollbar del body cuando el modal está abierto */
  body.modal-open {
    overflow: hidden;
  }
  
  .projects-section {
    padding: 60px 20px;
  }

  .section-description {
    font-size: 1.1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .project-image-wrapper,
  .project-image-wrapper.desktop,
  .project-image-wrapper.mobile,
  .project-image-wrapper.tablet {
    height: 240px;
  }

  .project-title {
    font-size: 1.4rem;
  }
  
  .project-content {
    padding: 25px;
  }
  
  .modal-overlay {
    padding: 20px;
  }
  
  .modal-container {
    max-height: 95vh;
  }
  
  .modal-header {
    padding: 20px;
  }
  
  .modal-title {
    font-size: 1.5rem;
  }
  
  .modal-body {
    padding: 20px;
  }
  
  .features-list {
    grid-template-columns: 1fr;
  }
  
  .gallery-thumbnails {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .modal-actions {
    flex-direction: column;
  }
  
  .zoom-container {
    max-width: 95vw;
  }
  
  .zoom-close {
    top: 10px;
    right: 10px;
  }
}

@media (max-width: 480px) {
  .projects-section {
    padding: 40px 15px;
  }

  .section-title {
    font-size: 0.8rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .project-image-wrapper,
  .project-image-wrapper.desktop,
  .project-image-wrapper.mobile,
  .project-image-wrapper.tablet {
    height: 220px;
  }

  .project-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
  
  .project-image-wrapper.mobile .project-img {
    width: 70%;
  }
  
  .modal-header {
    padding: 15px;
  }
  
  .modal-title {
    font-size: 1.3rem;
  }
  
  .gallery-thumbnails {
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }
  
  .device-info {
    font-size: 0.85rem;
  }
}

.btn-demo svg,
.btn-code svg {
  margin-right: 4px;
}
</style>