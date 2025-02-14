<template>
  <section
    id="who_am_I"
    class="section h-screen flex justify-center items-center"
  >
    <div class="">
      <article class="flex gap-28 p-5" id="who_am_I_container">
        <div class="w-3/5 ml-32">
          <h2 id="who_am_I_title" class="">Who am I?</h2>
          <div
            class="flex flex-col p-5 rounded-lg bg-gray-100 text-justify"
            id="code-space_who_am_I"
          >
            <p>
              I'm a passionate programmer who enjoys my learning sessions and
              strives to improve every day. My name is Carlos Morales, and I'm
              currently studying Systems Engineering in Barcelona, Venezuela.
              <br /><br />My goal is to become a Full Stack developer and App
              developer, while also contributing to the growth and performance
              of those around me, helping them become a little better every day.
            </p>
          </div>
        </div>
        <div class="w-2/5 flex justify-center items-center">
          <div class="w-full bg-black h-full"></div>
        </div>
      </article>

      <div
        id="a_bar"
        class="pl-4 flex flex-row gap-10 text-nowrap items-center absolute right-0 bg-white h-16 mt-12 text-black">
        <div class="flex w-full">
        <h1 class="text-3xl" style="width: 20%;">Find me:</h1>
        <div class="flex relative justify-around" style="flex-grow: 1">
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            color="#000"
            size="3x"
          />
          <font-awesome-icon
            :icon="['fab', 'youtube']"
            color="#000"
            size="3x"
          />
          <font-awesome-icon :icon="['fab', 'github']" color="#000" size="3x" />
          <font-awesome-icon
            :icon="['fab', 'linkedin']"
            color="#000"
            size="3x"
          />
        </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scope>
#a_bar {
  width: 45vw;
}

#who_am_I {
  margin-top: 0vh;
}

#who_am_I_title {
  padding-bottom: 7vh;
  margin-bottom: 5vh;
  font-size: 4em;
  color: #000;
}

#code-space_who_am_I {
  background-color: #a09c9c;
  padding: 2em 1.5em;
  font-size: 1.971em;
  font-weight: bold;
}
</style>
