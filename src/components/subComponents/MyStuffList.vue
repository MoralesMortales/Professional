<template>
  <div class="">
    <div class="flex flex-col justify-center items-center">
      <div class="mb-40">
        <h3 style="color: #000;" class="namee">{{ props.title }}</h3>
      </div>
      <div
        class="flex justify-around"
        style="background-color: rgba(91, 54, 54, 0.2); width: 99.4vw"
      >
        <div v-for="(item, index) in ProfileLanguages">
          <q-btn
            color="white"
            text-color="black"
            round
            @click="((card = true), (current_item = item))"
            class="btns"
          >
            <img :src="item.logo" alt="sdf" class="anImg w-max h-max p-2" />
            <q-tooltip
              transition-show="fade"
              style="font-size: 2em"
              :offset="[0, 10]"
              transition-hide="fade"
            >
              {{ item.name }}
            </q-tooltip>
          </q-btn>
        </div>
      </div>
    </div>

    <div class="q-pa-md q-gutter-sm">
      <q-dialog v-model="card" :style="{ maxWidth: '99vw', color: '#000' }">
        <q-card class="my-card" bordered style="width: 100%; max-width: 1000px">
          <q-item>
            <img
              :src="current_item.logo"
              alt="sdf"
              class="w-1/12 h-max p-2 mr-4 imga"
            />
            <q-item-section>
              <q-item-label class="text-lg">{{
                current_item.name
              }}</q-item-label>
              <q-item-label style="font-size: 1.1em" caption>{{
                current_item.category
              }}</q-item-label>
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
            <span class="font-bold">Experience Time:</span>
            {{ current_item.time }}
          </q-card-section>
          <q-separator />
          <q-card-section class="col-4 text-black">
            <h3 class="text-xl mb-6">Projects Where I Used It</h3>
            <div class="">
              <ul v-for="(item, index) in current_item.used" :key="index">
                <li
                  class="title_po"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
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

<style scoped>
.anImg {
}

li{
list-style-type: square;
}

.namee {
  font-size: clamp(1px,5.6vw,50px);
}

.btns {
  max-width: 150px;
  width: 10vw;
}
  .title_po{
    font-size: clamp(1px,4.2vw,20px);
    line-height: 44px;
  margin-left: 1.2em;
  }

@media (max-width: 1024px) {
  .btns {
    max-width: 180px;
    width: 10vw;
  }
.namee {
  font-size: clamp(1px,5.6vw,50px);
}
  .title_po{
    font-size: clamp(1px,4.2vw,20px);
    line-height: 44px;
  }
}

@media (max-width: 720px) {
  .btns {
    max-width: 80px;
    width: 13vw;
  }
.namee {
  font-size: clamp(1px,8vw,40px);
}
  .title_po{
    font-size: clamp(1px,4.2vw,20px);
    line-height: 44px;
  }
    .imga{
    height: 50px;
    width: 50px;
    object-fit: cover;
  }

}

@media (max-width: 400px) {
  .btns {
    max-width: 45px;
    width: 19vw;
  }
.namee {
  font-size: 7vw;
}

  .title_po{
    font-size: clamp(1px,4.2vw,20px);
    line-height: 44px;
  }
}
</style>
