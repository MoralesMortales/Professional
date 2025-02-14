<template>
  <div style="height: 100vh" class="flex">
    <div class="flex w-1/12">left</div>

    <div style="width: 85vw" class="bg-slate-200 text-black flex flex-col justify-around items-center">
      <div style="font-size: 3em">PROJECTS</div>

      <!-- Aquí se muestra el proyecto actual -->
      <div class="flex justify-around w-full">
        <div class="flex-col flex items-center"
          style="width: 50%; padding: 3em; padding-bottom: 0; padding-left: 4em">
          <div class="flex w-full gap-4 flex-wrap h-2/3 overflow-scroll">
            <h3 style="text-align: center; width: 100%;">{{ currentProject.name }}</h3>
            <p style="
                white-space: pre-line;
                text-align: justify;
                font-size: 1.1em;
                overflow: scroll;
              " class="px-14">
              {{ currentProject.des }}
            </p>
          </div>
          <div class="w-max flex justify-center h-1/3 items-center rounded-lg">
            <button class="py-6 px-20 bg-teal-400 hover:bg-teal-300 rounded-lg">
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

        <!-- Carrusel de imágenes del proyecto actual -->
        <div class="flex justify-center items-center" style="height: 40em; padding: 3em; width: 50%">
          <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay" arrows
            transition-prev="slide-right" control-color="dark" control-type="outline" transition-next="slide-left"
            @mouseenter="autoplay = false" @mouseleave="autoplay = true" style="width: 100%; height: 90%"
            class="bg-transparent">
            <q-carousel-slide v-for="(image, index_2) in currentProject.preview" :key="index_2" :name="index_2"
              class="full-width full-height flex items-center justify-center bg-transparent">
              <img :src="image" style="
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                  margin: 0;
                " />
            </q-carousel-slide>
          </q-carousel>
          <div class="bg-white rounded-sm flex items-center pl-5"
            style="height: 10%; width: 100%; outline: 1px #000 solid">
            <h5 class=" w-1/6 min-w-40 text-nowrap">
              MADE WITH
            </h5>
            <div class="flex flex-grow justify-around">
              <div class="h-8 w-8 p-1 rounded-full tLogo flex" style="outline: 1px #333 solid"
                v-for="(item, index) in currentProject.languages" :key="index">
                <img :src="item.logo" alt="" />
                <q-tooltip transition-show="fade" style="font-size: 2em" :offset="[0, 80]" transition-hide="fade">
                  {{ item.name }}
                </q-tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Botones para cambiar de proyecto -->
      <div class="flex gap-4">
        <button v-for="(project, index) in ProfileProjectsName" :key="index" @click="setCurrentProject(index)"
          class="px-4 py-2 rounded-lg" :class="{
            'bg-teal-400 text-black': currentProjectIndex === index,
            'bg-gray-300': currentProjectIndex !== index,
          }">
          {{ project.name }}
        </button>
      </div>
    </div>

    <div class="w-1/12">right</div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useProfileDataStore } from "@/stores/ProfileData";

const ProfileInfo = useProfileDataStore();
const ProfileProjectsName = ref(ProfileInfo.getProjects);
const slide = ref(0);
const autoplay = ref(true);

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

// Depuración
console.log("Preview:", currentProject.value.preview);
</script>
<style scoped>
.q-carousel-slide {
  background: #000;
}

.tLogo:hover {
  transition: all 0.2s ease;
  transform: scale(5);
  background-color: #fff;
  cursor: pointer;
}

.tLogo {
  transition: all 0.2s ease;
  background-color: transparent;
}
</style>
