<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <!-- Header -->
      <div class="section-header">
        <h2 class="section-title">{{ t.contactTitle }}</h2>
        <p class="section-description">
          {{ t.contactDescription }}
          <span class="highlight">{{ t.contactHighlight }}</span>
        </p>
      </div>

      <div class="contact-grid">
        <!-- Contact Info -->
        <div class="contact-info">
          <div class="info-card">
            <h3 class="info-title">{{ t.contactInfo }}</h3>
            
            <div class="info-items">
              <!-- Email -->
              <div class="info-item">
                <div class="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-10 7L2 7"></path>
                  </svg>
                </div>
                <div class="info-content">
                  <span class="info-label">{{ t.email }}</span>
                  <span class="info-value">carlos52.7624@gmail.com</span>
                </div>
              </div>

              <!-- Phone -->
              <div class="info-item">
                <div class="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </div>
                <div class="info-content">
                  <span class="info-label">{{ t.phone }}</span>
                  <span class="info-value">+58 (412) 881-6267</span>
                </div>
              </div>

              <!-- Location -->
              <div class="info-item">
                <div class="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div class="info-content">
                  <span class="info-label">{{ t.location }}</span>
                  <span class="info-value">Anzoátegui, Venezuela 🇻🇪</span>
                </div>
              </div>
            </div>

            <!-- Quick Response -->
            <div class="quick-response">
              <div class="response-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <div class="response-content">
                <h4 class="response-title">{{ t.quickResponse }}</h4>
                <p class="response-text">{{ t.quickResponseDesc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form">
          <form @submit.prevent="handleSubmit" class="form-card">
            <!-- Name Field -->
            <div class="form-group">
              <label for="name" class="form-label">{{ t.yourName }}</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                :placeholder="t.namePlaceholder"
                class="form-input"
                required
              />
            </div>

            <!-- Email Field -->
            <div class="form-group">
              <label for="email" class="form-label">{{ t.email }}</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                :placeholder="t.emailPlaceholder"
                class="form-input"
                required
              />
            </div>

            <!-- Phone Field (Opcional) -->
            <div class="form-group">
              <label for="phone" class="form-label">{{ t.phone }}</label>
              <input
                type="tel"
                id="phone"
                v-model="formData.phone"
                :placeholder="t.phonePlaceholder"
                class="form-input"
              />
            </div>

            <!-- Message Field -->
            <div class="form-group">
              <label for="message" class="form-label">{{ t.message }}</label>
              <textarea
                id="message"
                v-model="formData.message"
                :placeholder="t.messagePlaceholder"
                class="form-textarea"
                rows="4"
                required
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="btn-submit" :disabled="isSubmitting">
              <span v-if="!isSubmitting">{{ t.sendMessage }}</span>
              <span v-else class="loading-spinner">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
                {{ t.sending }}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useUIStore } from '@/stores/uiStore'
import { translations, type Language } from '@/translations'
import emailjs from '@emailjs/browser';
emailjs.init('WdL3XrwPbUYKMI36g');

const uiStore = useUIStore()
const t = computed(() => translations[uiStore.language as Language] || translations.en)

// Form state
const formData = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)

// Handle form submission
const handleSubmit = async () => {
  isSubmitting.value = true;

  try {
    // Reemplaza con tus IDs de EmailJS
    console.log(formData);
    
    await emailjs.send(
      'service_7jfnwdg', 
      'template_dl1uv7i', 
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      'WdL3XrwPbUYKMI36g'
    );

    console.log('¡Correo enviado con éxito!');
    
    // Resetear form
Object.assign(formData, {
    name: '',
    email: '',
    phone: '',
    message: ''
  });
      alert(t.value.messageSent);

  } catch (error) {
    console.error('Error:', error);
    alert(t.value.messageError);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.contact-section {
  padding: 100px 20px;
  background: radial-gradient(circle at center, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.container {
  max-width: 1400px; /* Aumentado de 1200px a 1400px */
  margin: 0 auto;
  width: 100%;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 60px;
  max-width: 900px; /* Aumentado de 700px a 900px */
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-bottom: 20px;
}

.section-description {
  font-size: 1.4rem; /* Aumentado de 1.3rem a 1.4rem */
  line-height: 1.6;
  color: var(--text-primary);
  max-width: 900px; /* Aumentado de 700px a 900px */
  margin: 0 auto;
}

.highlight {
  color: var(--accent-color);
  font-weight: 600;
  position: relative;
  display: inline-block;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-color), transparent);
  border-radius: 2px;
}

/* Contact Grid - Más ancho y mejor proporcionado */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr; /* Formulario más ancho que la info */
  gap: 50px; /* Aumentado de 40px a 50px */
  align-items: start;
 
  
}

/* Contact Info Styles */
.contact-info {
  position: sticky;
  top: 100px;
}

.info-card {
  background: var(--bg-primary);
  border-radius: 32px;
  padding: 45px; /* Aumentado de 40px a 45px */
  border: 1px solid var(--border-color);
  box-shadow: 0 8px 30px var(--shadow-color);
  transition: all 0.3s ease;
}

.info-card:hover {
  border-color: var(--accent-color);
  box-shadow: 0 20px 40px var(--shadow-color);
  transform: translateY(-5px);
}

.info-title {
  font-size: 1.7rem; /* Aumentado de 1.5rem a 1.7rem */
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 35px; /* Aumentado de 30px a 35px */
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 30px; /* Aumentado de 25px a 30px */
  margin-bottom: 40px; /* Aumentado de 35px a 40px */
}

.info-item {
  display: flex;
  align-items: center;
  gap: 20px; /* Aumentado de 15px a 20px */
  padding: 12px; /* Aumentado de 10px a 12px */
  border-radius: 16px;
  transition: all 0.3s ease;
}

.info-item:hover {
  background: var(--bg-secondary);
  transform: translateX(5px);
}

.info-icon {
  width: 54px; /* Aumentado de 48px a 54px */
  height: 54px; /* Aumentado de 48px a 54px */
  background: var(--bg-secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  transition: all 0.3s ease;
}

.info-icon svg {
  width: 28px; /* Aumentado */
  height: 28px; /* Aumentado */
}

.info-item:hover .info-icon {
  background: var(--accent-color);
  color: white;
  transform: scale(1.1);
}

.info-content {
  display: flex;
  flex-direction: column;
  gap: 6px; /* Aumentado de 4px a 6px */
}

.info-label {
  font-size: 0.9rem; /* Aumentado de 0.85rem a 0.9rem */
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.info-value {
  font-size: 1.2rem; /* Aumentado de 1.1rem a 1.2rem */
  font-weight: 600;
  color: var(--text-primary);
}

/* Quick Response */
.quick-response {
  display: flex;
  align-items: center;
  gap: 25px; /* Aumentado de 20px a 25px */
  padding: 30px; /* Aumentado de 25px a 30px */
  background: var(--bg-secondary);
  border-radius: 24px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.quick-response:hover {
  border-color: var(--accent-color);
  transform: scale(1.02);
}

.response-icon {
  width: 120px; /* Aumentado de 60px a 70px */
  height: 70px; /* Aumentado de 60px a 70px */
  background: var(--bg-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 2s infinite;
}

.response-icon svg {
  width: 36px; /* Aumentado */
  height: 36px; /* Aumentado */
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.2);
  }
  50% {
    box-shadow: 0 0 0 15px rgba(59, 130, 246, 0); /* Aumentado de 10px a 15px */
  }
}

.response-title {
  font-size: 1.2rem; /* Aumentado de 1.1rem a 1.2rem */
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 6px; /* Aumentado de 5px a 6px */
}

.response-text {
  font-size: 1rem; /* Aumentado de 0.95rem a 1rem */
  color: var(--text-secondary);
  line-height: 1.6; /* Aumentado de 1.5 a 1.6 */
}

/* Contact Form Styles */
.form-card {
  background: var(--bg-primary);
  border-radius: 32px;
  padding: 45px; /* Aumentado de 40px a 45px */
  border: 1px solid var(--border-color);
  box-shadow: 0 8px 30px var(--shadow-color);
  transition: all 0.3s ease;
}

.form-card:hover {
  border-color: var(--accent-color);
  box-shadow: 0 20px 40px var(--shadow-color);
}

.form-group {
  margin-bottom: 30px; /* Aumentado de 25px a 30px */
}

.form-label {
  display: block;
  font-size: 0.95rem; /* Aumentado de 0.9rem a 0.95rem */
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 10px; /* Aumentado de 8px a 10px */
  transition: color 0.3s ease;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 16px 20px; /* Aumentado de 14px 18px a 16px 20px */
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: 18px; /* Aumentado de 16px a 18px */
  font-size: 1.05rem; /* Aumentado de 1rem a 1.05rem */
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.form-input:hover,
.form-textarea:hover {
  border-color: var(--accent-color);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 5px rgba(59, 130, 246, 0.1); /* Aumentado de 4px a 5px */
  background: var(--bg-primary);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--text-secondary);
  opacity: 0.6;
  font-size: 1rem; /* Añadido */
}

.form-textarea {
  resize: vertical;
  min-height: 140px; /* Aumentado de 120px a 140px */
}

/* Submit Button */
.btn-submit {
  width: 100%;
  padding: 18px 32px; /* Aumentado de 16px 28px a 18px 32px */
  background: linear-gradient(90deg, var(--accent-color), #a855f7);
  color: white;
  border: none;
  border-radius: 50px; /* Aumentado de 40px a 50px */
  font-size: 1.2rem; /* Aumentado de 1.1rem a 1.2rem */
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px; /* Aumentado de 10px a 12px */
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-4px); /* Aumentado de -3px a -4px */
  box-shadow: 0 15px 30px rgba(59, 130, 246, 0.4); /* Mejorada la sombra */
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading-spinner {
  display: flex;
  align-items: center;
  gap: 12px; /* Aumentado de 10px a 12px */
}

.loading-spinner svg {
  animation: spin 1s linear infinite;
  width: 26px; /* Aumentado */
  height: 26px; /* Aumentado */
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Responsive - Ajustes para mantener proporciones */
@media (max-width: 1400px) {
  .container {
    max-width: 1200px; /* Se reduce en pantallas más pequeñas */
  }
}

@media (max-width: 1200px) {
  .container {
    max-width: 1000px;
    padding: 0 30px;
  }
  
  .contact-grid {
    gap: 40px;
  }
  
  .info-card,
  .form-card {
    padding: 35px;
  }
  .response-icon{
    width: 80px;
    min-width: 80px; 
    height: 80px; /* Aumentado de 60px a 70px */
  }
}

@media (max-width: 1024px) {
  .container {
    max-width: 900px;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .contact-info {
    position: static;
  }
  
  .info-card,
  .form-card {
    padding: 35px;
  }
  
  .info-title {
    font-size: 1.6rem;
  }
  
  .info-value {
    font-size: 1.1rem;
  }

    .response-icon{
    width: 80px; 
    min-width: 80px; /* Asegura que no se reduzca demasiado en pantallas pequeñas */
    height: 80px; /* Aumentado de 60px a 70px */
  }

}

@media (max-width: 768px) {

  .response-icon{
    width: 80px; 
    height: 80px; /* Aumentado de 60px a 70px */
  }

  .contact-section {
    padding: 60px 20px;
  }
  
  .container {
    padding: 0 20px;
  }
  
  .section-description {
    font-size: 1.2rem;
  }
  
  .info-card,
  .form-card {
    padding: 30px;
  }
  
  .info-title {
    font-size: 1.5rem;
  }
  
  .info-value {
    font-size: 1rem;
  }
  
  .quick-response {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 40px 15px;
  }
  
  .section-title {
    font-size: 0.8rem;
  }
  
  .section-description {
    font-size: 1.1rem;
  }
  
  .info-card,
  .form-card {
    padding: 25px;
  }
  
  .info-title {
    font-size: 1.4rem;
  }
  
  .info-item {
    flex-direction: column;
    text-align: center;
  }
  
  .info-content {
    align-items: center;
  }
  
  .btn-submit {
    padding: 16px 24px;
    font-size: 1.1rem;
  }
}
</style>