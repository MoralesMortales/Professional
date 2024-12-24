<template>
  <footer id="TheFooter" class="flex flex-col gap-5 py-5 mt-10 bg-white text-black">
    <div class="right-side flex flex-row text-center justify-center gap-5">
      <h5>Copyright ©</h5>
      <h5>All Rights Reserved</h5>
    </div>

    <div id="last_upload" class="flex flex-row justify-around bg-slate-400 py-3">
      <div class="flex flex-col text-center">
        <h5>First upload</h5>
        <h5>2023 - November - 17</h5>
      </div>
      <div class="flex flex-col text-center">
        <h5>Last upload</h5>
        2024 - August - 26
      </div>
    </div>

    <div class="left-side flex justify-center">
       <ul class="flex flex-row w-2/3 justify-around text-2xl gap-6">
    <li>
      <a href="https://github.com/your-github-profile" class="hover:text-amber-700 hover:transition-all transition-all">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </li>
    <li>
      <a href="https://linkedin.com/in/your-linkedin-profile" class="hover:text-amber-700 hover:transition-all transition-all">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
    </li>
    <li>
      <a href="https://instagram.com/your-instagram-profile" class="hover:text-amber-700 hover:transition-all transition-all">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
    </li>
    <li>
      <a href="https://facebook.com/your-facebook-profile" class="hover:text-amber-700 hover:transition-all transition-all">
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </a>
    </li>
  </ul>
    </div>
  </footer>
</template>

<script setup>

</script>
