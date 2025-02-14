<template>
  <div class="">
    <div class="flex flex-col w-screen justify-center items-center">
      <div class="mb-40" style="color: #000; font-size: 3em">
        <h3>{{ props.title }}</h3>
      </div>
      <div class="w-screen flex justify-around" style="background-color: rgba(91, 54, 54, 0.2)">
        <div v-for="(item, index) in ProfileLanguages">
          <q-btn color="white" text-color="black" round @click="((card = true), (current_item = item))"
            :style="{ width: '6.7em', height: '6.7em' }">
            <img :src="item.logo" alt="sdf" class="w-max h-max p-2" />
          </q-btn>
        </div>
      </div>
    </div>

    <div class="q-pa-md q-gutter-sm">
      <q-dialog v-model="card" :style="{ maxWidth: '100vw', color: '#000' }">
        <q-card class="my-card" bordered style="width: 100%; max-width: 1000px">
          <q-item>
            <img :src="current_item.logo" alt="sdf" class="w-1/12 h-max p-2 mr-4" />
            <q-item-section>
              <q-item-label class="text-lg">{{ current_item.name }}</q-item-label>
              <q-item-label style="font-size: 1.1em;" caption>{{ current_item.category }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-card-section horizontal>
            <q-card-section class="text-justify text-lg">
              {{ current_item.des }}
            </q-card-section>
          </q-card-section>
          <q-separator />

          <q-card-section class="col-4 text-lg text-black">
            <span class="font-bold">Experience Time:</span> {{ current_item.time }}
          </q-card-section>
          <q-separator />
          <q-card-section class="col-4 text-black">
            <h3 class="text-xl mb-6">Projects Where I Used It</h3>
            <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay" arrows
              transition-prev="slide-right" transition-next="slide-left" @mouseenter="autoplay = false"
              @mouseleave="autoplay = true">
              <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg">
                <h6 class="font-extrabold text-white">A Title</h6>
              </q-carousel-slide>

              <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
                                <h6 class="font-extrabold text-white">A Title</h6>

              </q-carousel-slide>
              <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
                                <h6 class="font-extrabold text-white">A Title</h6>

              </q-carousel-slide>
              <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg">
                                <h6 class="font-extrabold text-white">A Title</h6>

              </q-carousel-slide>
            </q-carousel>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script setup>
import { useProfileDataStore } from "@/stores/ProfileData";
import { ref, onMounted } from "vue";
let current_item = ref("");

let card = ref(false);

let slide = ref(1);
let autoplay = ref(true);
// Usamos el store
const ProfileInfo = useProfileDataStore();

// Definimos las props
const props = defineProps({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

// Creamos una referencia para almacenar el resultado de la función
const ProfileLanguages = ref(null);
const quantity = ref(1);

onMounted(() => {
  if (ProfileInfo[props.content]) {
    ProfileLanguages.value = ProfileInfo[props.content];
    console.log(...ProfileLanguages.value, ProfileLanguages.value.length);
    quantity.value = ProfileLanguages.value.length;
    console.log(quantity.value);
  } else {
    console.warn(`No se encontró la función: ${props.content}`);
  }
});
</script>

<style scoped></style>
