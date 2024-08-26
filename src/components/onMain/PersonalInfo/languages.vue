<template>
  <section
    id="which_languages_I_know"
    class="flex flex-col w-5/5 items-center section"
  >
    <div
      id="Presenting_lgs"
      class="w-3/4 mx-auto mt-10 p-5 rounded-lg flex flex-col gap-7"
    >
      
      <h2 class="text-white font-semibold text-4xl text-wrap text-center mb-12">
        Languages
      </h2>

      <p id="My_current_languages" style="background-color: #29384B;" class="w-5/5 shadow-md p-2 rounded-lg self-center" >
        I have always been fascinated by languages and countries around the
        world. My dream of someday traveling to these cultures and meeting new
        people is one of my main motivations for studying languages.
      </p>

      <div class="relative right-1/4 min-w-full">
        <h5
          class="self-center my-20 bg-slate-500 py-10 px-5 rounded-md pr-14 hidden" >
          Currently I know these languages
        </h5>
      </div>
    </div>

    <div id="art">
      <article  v-for="item in ProfileLanguages" :key="item" class="language">
        <div class="language-mini-containers flex flex-col justify-around" :style="{ backgroundImage: `url(${item.img})` }">
          <div class="">
            <div class="p-5">
              <div id="headerlanguages" class="flex flex-row justify-between px-1 w-full" >
                <h3 class="title">{{ item.name }}</h3>
                <img :src="item.logo" alt="Language Image" class="flag w-1/4"/>
              </div>
            </div>
          </div>

          <p class="w-full text-center bg-yellow-700 py-3 h-">
            Currently {{ item.level }}
          </p>

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

</script>

<style scoped>

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
  font-size: 2.5rem;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

#Laguages-title-box{
  font-family: "Anton", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 2rem;
  color: #b58863;
}

#art{
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
justify-content: center;
gap: 20px;
margin: 0 50px;
margin-bottom: 4rem;

}

.language-mini-containers{
  width: 100px;
  height: 26vw;
  min-height: 280px;
  grid-template-columns: 1fr; 
  grid-template-rows: repeat(2,1fr);
  border: 1px silver solid;
  border-radius: 9px;
  grid-template-areas: "title flag" "Info Info";
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  -ms-border-radius: 9px;
  -o-border-radius: 9px;
  min-width: 300px;
  background-size: cover;
} 

</style>
