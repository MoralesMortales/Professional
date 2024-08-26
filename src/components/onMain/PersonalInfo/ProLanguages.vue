<template>
  <section id="Programming-languages" class="bo">
    <div id="header-programming" class="mb-12">
      <h2 class="text-white font-semibold text-4xl text-wrap text-center">
        Programming Languages
      </h2>
    </div>

    <div
      id="Programming-languages-boxes"
      class="flex justify-center flex-col gap-10"
    >
      <div
        class="bg-transparent"
        v-for="item in ProLanguages"
        :key="index"
        style="height: 3.6em"
      >
        <div
          class="ProLanguageImg h-4 shadow-white shadow-inner p-4 rounded-full flex justify-center"
          style="height: 100%; min-width: 3vw"
        >
          <img :src="item.logo" alt="logo" style="height: 100%" />
        </div>
      </div>
    </div>

    <div class="text-white flex">
      <div class="">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          fugit maxime aspernatur reiciendis dolore suscipit nihil illo,
          voluptates illum aliquid animi architecto molestiae quam assumenda ab
          eum recusandae incidunt commodi.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur,
          placeat nihil esse incidunt quaerat mollitia culpa inventore qui
          delectus quis dolor hic necessitatibus! Molestias iusto minima ducimus
          at ex quas.
        </p>
      </div>
      <p style="color: red;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reprehenderit neque cupiditate, tenetur id repellendus saepe blanditiis expedita. Officia numquam itaque ex soluta similique ab voluptatem nobis veritatis cum labore.</p>
    </div>
  </section>
</template>

<script setup>
import { useProfileDataStore } from "@/stores/ProfileData";
const profileData = useProfileDataStore();
const ProLanguages = profileData.getProgrammingLanguages;
</script>

<style scoped>
#Programming-languages {
  margin: 0 auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: black;
}

#header-programming {
  display: flex;
  justify-content: center;
  align-items: center;
  text-wrap: nowrap;
  height: 2rem;
  margin-top: 1.7rem;
}

#Programming-languages-boxes {
  display: flex;
  flex-direction: row;
  margin-top: 1.8rem;
  width: 100%;
  flex-wrap: nowrap;
  padding: 2rem;
  margin: 0 auto;
  transition: transform 0.5s ease-in-out;
}

#Programming-languages-boxes .box {
  border: 2px solid #313131;
  background: linear-gradient(#fff, #ffefef, #dde9ec);
  border-radius: 19px;
  -webkit-border-radius: 19px;
  -moz-border-radius: 19px;
  -ms-border-radius: 19px;
  -o-border-radius: 19px;
  display: flex;
  padding: 0 30px;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  margin: 0 2em;
}

#Programming-languages-boxes .box:first-child {
  margin-left: 0;
}

.header-box-programming img {
  min-width: 100%;
}

.ProLanguageImg {
  transition: background 0.3s ease-in-out;
}

.ProLanguageImg:hover,
.ProLanguageImg::after,
.ProLanguageImg::before {
  background-color: #ffffff1d;
  transition: background 0.3s ease-in-out;
}

.header-box-programming {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.85rem;
  gap: 1rem;
  width: 90%;
  height: 100%;
}

.box p {
  padding: 0.8rem;
  text-align: justify;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 400px) {
  .box {
    flex-direction: column;
    background-color: yellow;
  }
  img {
    width: 140%;
    height: auto;
  }
}
</style>
