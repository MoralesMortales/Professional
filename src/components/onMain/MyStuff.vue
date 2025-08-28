<template>
  <div
    style="margin-top: 9em; height: 80vh"
    class="flex justify-center items-center"
    id="myStuffId"
  >
    <div class="flex w-screen justify-center items-center">
      <div
        class="flex gap-5 justify-center items-center mb-24 scale-90 rounded-sm container_choose"
      >
        <button
          @click="goLeft()"
          class="hover:text-gray-500 py-5 pl-5 transition-all"
        >
          <font-awesome-icon :icon="['fas', 'chevron-left']" class="lefta" />
        </button>
        <h3 class="chooose">Choose the topic</h3>
        <button
          @click="goRight()"
          class="hover:text-gray-500 py-5 pr-5 transition-all"
        >
          <font-awesome-icon :icon="['fas', 'chevron-right']" class="righta" />
        </button>
      </div>
    </div>

    <myStuffList
      v-show="currentIndex == 1"
      title="Programming Languages"
      content="getProgrammingLanguages"
    />
    <myStuffList
      v-show="currentIndex == 2"
      title="Frameworks"
      content="getFrameworks"
    />
    <myStuffList
      v-show="currentIndex == 3"
      title="Databases Management"
      content="getDatabases"
    />
    <myStuffList
      v-show="currentIndex == 4"
      title="Tools I Use (Web)"
      content="getToolsWeb"
    />
    <myStuffList
      v-show="currentIndex == 5"
      title="Tools I Use (General)"
      content="getToolsGeneral"
    />
  </div>
</template>
<script setup>
import myStuffList from "../subComponents/MyStuffList.vue";
import { ref } from "vue";

const currentIndex = ref(1);

const goRight = () => {
  currentIndex.value += 1;

  if (currentIndex.value > 5) {
    currentIndex.value = 1;
  }
};
const goLeft = () => {
  currentIndex.value -= 1;
  if (currentIndex.value < 1) {
    currentIndex.value = 5;
  }
  console.log("dss");
};
</script>

<style scope>
.container_choose {
  background-color: #333;
  transition: 0.08s all ease;
}

.container_choose:hover {
  background-color: #000;
  transition: 0.04s all ease;
}

.righta, .lefta{
  font-size: clamp(30px, 2vw, 490px);
}

@media (max-width: 1024px) {
}

@media (max-width: 720px) {
  .container_choose {
    width: 90vw;
  }

  .chooose {
    font-size: clamp(20px,7.45vw,40px);
    color: #eee;
  }
}

@media (max-width: 400px) {
}
</style>
