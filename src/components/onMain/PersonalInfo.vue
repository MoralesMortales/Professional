<template>
<whoAmIVue/>
<languages/>
<ProLanguages/>
</template>

<script setup>

import whoAmIVue from "@/components/onMain/PersonalInfo/WhoAmI.vue";
import languages from "./PersonalInfo/languages.vue"
import ProLanguages from "./PersonalInfo/ProLanguages.vue";

components: {
  whoAmIVue,
  languages,
  ProLanguages

}

</script>
