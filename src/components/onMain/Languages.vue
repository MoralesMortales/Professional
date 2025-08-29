<template>
  <section
    id="which_languages_I_know"
    class="flex flex-col items-center section justify-center py-10"
  >
    <div
      id="Presenting_lgs"
      class="w-3/4 mx-auto mt-10 p-5 rounded-lg flex flex-col gap-7"
    >
      <h2 style="font-size: 3.4em; margin-bottom: 80px;" class="font-semibold text-wrap text-center mb-12 text-black">
        Languages
      </h2>
      
      <p id="My_current_languages" style="background-color:#fff; color: black; margin-bottom: 4em; font-size: 19px;" class="shadow-md p-2 rounded-lg self-center" >
        I have always been fascinated by languages and countries around the
        world. My dream of someday traveling to these cultures and meeting new
        people is one of my main motivations for studying languages.
      </p>
    </div>

    <div id="art">
      <article 
        v-for="(item, index) in ProfileLanguages" 
        :key="item.name" 
        class="language"
        :class="{ 'is-flipped': flippedCard === index }"
        @click="flipCard(index)"
      >
        <div class="card-inner">
          <!-- Parte frontal de la tarjeta -->
          <div class="card-front language-mini-containers flex flex-col justify-around" :style="{ backgroundImage: `url(${item.img})` }">
            <div>
              <div class="p-5">
                <div id="headerlanguages" class="flex flex-row relative justify-between px-1 w-full" >
                  <h3 class="title" style="font-size: 20px;">{{ item.name }}</h3>
                  <img :src="item.logo" alt="Language Image" class="flag"/>
                </div>
              </div>
            </div>

            <p class="w-full text-center bg-yellow-700 py-3" style="font-size: 1.2em; font-weight: 600;">
              Currently {{ item.level }}
            </p>
          </div>
          
          <div class="card-back language-mini-containers flex flex-col justify-around items-center p-5 ">
            <h3 class="text-2xl font-bold mb-4">{{ item.name }}</h3>
            <div class="flex flex-col justify-center items-center ">
            <p class="text-center" style="font-size: clamp(10px,1vw,17px);white-space: pre-line; text-align: justify;">{{ item.description || 'No description available' }}</p>
            <button class="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors" @click.stop="flipCard(-1)">
             Back 
            </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useProfileDataStore } from "@/stores/ProfileData";

const ProfileInfo = useProfileDataStore();
const ProfileLanguages = ref(ProfileInfo.getLanguages);
const flippedCard = ref(-1); // -1 significa que ninguna tarjeta está girada

const flipCard = (index) => {
  // Si la tarjeta ya está girada, la volvemos a su estado normal
  if (flippedCard.value === index) {
    flippedCard.value = -1;
  } else {
    // Giramos la nueva tarjeta
    flippedCard.value = index;
  }
};
</script>

<style scoped>
.language {
  perspective: 1000px;
  width: 25vw;
  max-width: 420px;
  height: 26vw;
  min-height: 280px;
  min-width: 300px;
  margin: 10px;
  cursor: pointer;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.language.is-flipped .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 1px silver solid;
  border-radius: 9px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  -ms-border-radius: 9px;
  -o-border-radius: 9px;
  background-size: cover;
  background-blend-mode: multiply;
}

.card-back {
  background-color: #f8f8f8;
  color: #333;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

@media (max-width: 1440px) {
  .language-mini-containers {
    /* ajustes específicos */
  }
}

#city-london-bg{
  background-image: url('../../../assets/Img/English_Image.png');
  background-size: cover;
}

#city-vzla-bg{
  background-image: url('../../../assets/Img/spanish_image.jpeg');
  background-size: cover;
}

#city-deutschland-bg{
  background-image: url('../../../assets/Img/german_image.jpeg');
  background-size: cover; 
}

#headerlanguages{
  height: 8vh;
  max-height: 8vh;
  padding: 7px 1rem;
  align-items: center;
  background-color: #363434;
  border-radius: 3px 5px 5px 5px;
  -webkit-border-radius: 3px 5px 5px 5px;
  -moz-border-radius: 3px 5px 5px 5px;
  -ms-border-radius: 3px 5px 5px 5px;
  -o-border-radius: 3px 5px 5px 5px;
  margin-bottom: 2rem;
  color: #e6e6e6;
} 

.title_PL{
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-style: normal;
  position: relative;
  color: #d1d1d1;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

#Laguages-title-box{
  font-family: "Anton", sans-serif;
  font-weight: 600;
  font-style: normal;
  color: #b58863;
}

#art{
  display: flex;
  flex-direction: row;
  width: 75vw;
  justify-content: space-around;
  gap: 35px;
  flex-wrap: wrap;
}

#art .flag{
  position: relative;
  max-height: 100%;
}

#art .title {
  font-size: 28px;
  font-weight:600;
  font-style: normal;
}

#which_languages_I_know{
  min-height: 100vh;
}

@media (max-width: 1024px) {
  .language {
    width: 40vw;
    max-width: 24em;
    height: 40vw;
    max-height: 390px;
  }
  
  #art{
    width: 100%;
    gap: 5em 2em;
  }

  #art .flag{
    max-height: 80%;
  }
}

@media (max-width: 720px) {
  .language {
    width: 80vw;
    height: 80vw;
    max-height: 390px;
  }
  
  #art{
    width: 100%;
  }
}

@media (max-width:420px) {
  #art .flag{
    max-height: 70%;
  }
}

@media (max-width: 400px) {
  .language {
    width: 85vw;
  }
}
</style>
