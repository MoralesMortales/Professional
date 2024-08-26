<template>
<whoAmIVue/>
<languages/>
<ProLanguages/>
</template>

<script setup>

import whoAmIVue from "./PersonalInfo/whoAmI.vue";
import languages from "./PersonalInfo/languages.vue"
import ProLanguages from "./PersonalInfo/ProLanguages.vue";

components: {
  whoAmIVue,
  languages,
  ProLanguages

}

</script>