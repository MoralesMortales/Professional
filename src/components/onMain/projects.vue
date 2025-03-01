<template>
  <div style="" class="flex main" id="projectsId">
    <div class="flex w-1/12"></div>

    <div style="width: 85vw" class="bg-slate-200 text-black flex flex-col justify-around items-center">
      <div class="theT">PROJECTS</div>

      <div class="flex justify-around w-full maine">
        <div class="flex-col flex items-center lefte justify-around p-7">
          <h3 style="text-align: center; width: 100%" class="text-nowrap h-2/12 t1 font-bold">
            {{ currentProject.name }}
          </h3>
          <div class="flex lefte_i w-full gap-4 flex-wrap h-5/12 hover:overflow-y-scroll overflow-x-hidden">
            <p style="white-space: pre-line; text-align: justify; font-size: 1em" class="des">
              {{ currentProject.des }}
            </p>
          </div>
          <div class="w-max flex justify-center h-5/12 items-center rounded-lg">
            <button class="py-6 px-20 bg-teal-400 hover:bg-teal-300 rounded-lg" @click="goToProject(currentProject.link)">
              <h6 style="
                  font-weight: bold;
                  font-family: Arial, Helvetica, sans-serif;
                  color: #444;
                ">
                Test It!
              </h6>
            </button>
          </div>
        </div>

        <div class="flex justify-center items-center gap-7 righte" style="height: 40em; padding: 3em">
          <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay" arrows
            transition-prev="slide-right" control-color="dark" control-type="outline" transition-next="slide-left"
            @mouseenter="autoplay = false" @mouseleave="autoplay = true" style="width: 100%; height: 90%"
            class="fern outline rounded-sm">
            <q-carousel-slide v-for="(image, index_2) in currentProject.preview" :key="index_2" :name="index_2"
              @click="openDialog(image)" class="full-width full-height flex items-center justify-center bg-transparent">
              <img :src="image" style="
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                  margin: 0;
                " />
            </q-carousel-slide>
          </q-carousel>
          <div class="miniBox rounded-sm pl-5 flex flex-col justify-center"
            style="height: 10%; width: 100%; outline: 1px #000 solid">
            <h5 class="w-4/12 text-nowrap textBoxMade">Made With</h5>

            <div class="content_imgs px-2 w-8/12 h-full flex flex-col gap-5 overflow-y-scroll justify-center">
              <div class="h-8 w-8 p-1 rounded-full tLogo" style="outline: 1px #333 solid"
                v-for="(item, index) in currentProject.languages" :key="index">
                <img :src="item.logo" alt="" class="h-full" />
                <q-tooltip transition-show="fade" style="font-size: 1.6em" :offset="[0, 15]" transition-hide="fade">
                  {{ item.name }}
                </q-tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Botones para cambiar de proyecto -->
      <div class="flex gap-4 mb-12">
        <button v-for="(project, index) in ProfileProjectsName" :key="index" @click="setCurrentProject(index)"
          class="px-4 py-2 rounded-lg" :class="{
            'bg-teal-400 text-black': currentProjectIndex === index,
            'bg-gray-300': currentProjectIndex !== index,
          }">
          {{ project.name }}
        </button>
      </div>
    </div>

 <q-dialog v-model="dialogIMG">
    <q-img
      :src="selectedImage"
          fit="contain"
      style="max-width: 80vw; max-height: 80vh;"
    />
  </q-dialog>
    
    <div class="w-1/12"></div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useProfileDataStore } from "@/stores/ProfileData";

const ProfileInfo = useProfileDataStore();
const ProfileProjectsName = ref(ProfileInfo.getProjects);
const slide = ref(0);
const autoplay = ref(true);
let selectedImage = ref('');
let dialogIMG = ref(false);

// Estado para saber qué proyecto está seleccionado
const currentProjectIndex = ref(0);
const currentProject = computed(
  () => ProfileProjectsName.value[currentProjectIndex.value],
);

// Función para cambiar de proyecto
const setCurrentProject = (index) => {
  currentProjectIndex.value = index;
  slide.value = 0; // Reseteamos el carrusel al primer slide cuando cambiamos de proyecto
};

const openDialog = (image) => {
      selectedImage.value = image; // Set the clicked image
      dialogIMG.value = true; // Show the dialog
}
const goToProject = (link) => {
  window.open(link, "_blank");
};

// Depuración
console.log("Preview:", currentProject.value.preview);
</script>

<style scoped>
.q-carousel-slide {
  background: #000;
}

  .maine {
    padding-bottom: 3em;
  }

.tLogo:hover {
  transition: all 0.2s ease;
  background-color: #fff;
  cursor: pointer;
  overflow: display;
}

.tLogo {
  transition: all 0.2s ease;
  background-color: transparent;
}

.miniBox {
  background-color: rgba(255, 255, 255, 0.7);
}

.content_imgs {
  position: relative;
  overflow-x: hidden;
  overflow-x: hidden;
  max-height: 100%;
  /* Asegura que no crezca más de su contenedor */
}

.content_imgs:hover {
  overflow-x: scroll;
}

.content_imgs::-webkit-scrollbar {
  position: absolute;
  height: 8px;
  /* Ajusta el tamaño de la barra */
  color: black;
}

.textBoxMade {
  font-size: clamp(0.71em, 2vw, 2em);
}

.t1 {
  font-size: clamp(0.71em, 4vw, 3em);
}

.fern {
  background-color: rgba(200, 200, 200, 0.7);
}

.des {
  padding: 0 15px;
}

.lefte {
  width: 50%;
}

.righte {
  width: 50%;
}

.main {
  margin-bottom: 9em;
}

.theT {
  font-size: clamp(20px, 4vw, 45px);
  padding-top: 20px;
}

@media (max-width: 930px) {
  .maine {
    flex-direction: column;
    padding-bottom: 3em;
  }

  .des {
    padding: 0;
  }

  .lefte {
    width: 100%;
    gap: 30px;
  }

  .lefte_i {
    gap: 3em;
  }

  .righte {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .main {
    margin-bottom: 9em;
  }
}

@media (max-width: 400px) {}
</style>
