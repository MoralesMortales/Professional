<template>
  <Header />
  <Footer />
  main page
</template>

<script setup lang="ts">

import Header from './onMain/Header.vue'
import Footer from './onMain/Footer.vue'
import PersonalInfo from './onMain/PersonalInfo.vue'

components:{
  Header
  PersonalInfo
  Footer
}

</script>

<style scoped>

</style>
