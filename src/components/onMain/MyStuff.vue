<template>
  <div style="margin-top: 9em; height: 80vh;" class="flex justify-center items-center" id="myStuffId">
    <div class="flex w-screen justify-center items-center">
      <div class="flex gap-5 justify-center items-center mb-24 scale-90 rounded-sm container_choose">
      <button @click='goLeft()' class="hover:text-gray-500 py-5 pl-5 transition-all">
        <font-awesome-icon :icon="['fas', 'chevron-left']" size="3x" />
      </button>
      <h3 style="color: #eee; font-size:40px;">Choose the topic</h3>
      <button @click='goRight()' class="hover:text-gray-500 py-5 pr-5 transition-all">
        <font-awesome-icon :icon="['fas', 'chevron-right']" size="3x" />
      </button>
      </div>
      </div>

    <myStuffList v-if="currentIndex == 1" title="Programming Languages" content="getProgrammingLanguages" style="margin-bottom: 16em" />
    <myStuffList v-if="currentIndex == 2" title="Frameworks" content="getFrameworks" style="margin-bottom: 16em" />
    <myStuffList v-if="currentIndex == 3" title="Databases Management" content="getDatabases" style="margin-bottom: 16em" />
    <myStuffList v-if="currentIndex == 4" title="Tools I Use (Web)" content="getToolsWeb" style="margin-bottom: 16em" />
    <myStuffList v-if="currentIndex == 5" title="Tools I Use (General)" content="getToolsGeneral" style="margin-bottom: 16em" />
  </div>
</template>
<script setup>
import myStuffList from "../subComponents/MyStuffList.vue";
import { ref } from "vue";

const currentIndex = ref(1);

const goRight = () => {
currentIndex.value += 1;

  if (currentIndex.value > 5) {
    currentIndex.value = 1
  
}

}
const goLeft = () => {

currentIndex.value -= 1;
  if (currentIndex.value < 1) {
    currentIndex.value = 5
  
}
console.log('dss')
}

</script>

<style scope>
.container_choose{
background-color:#333;
transition:.08s all ease;
}
.container_choose:hover{
background-color:#000;
transition:.04s all ease;
}
</style>
