<template>
  <a :href="href" class="btn" :class="{ active: isActive }">
    <h6>{{ btn_value }}</h6>
  </a>

</template>
<script setup>
import { defineProps } from "vue"

defineProps ({
href: {
type: String,
required:true,
}
})
</script>

<style scoped>

</style>
