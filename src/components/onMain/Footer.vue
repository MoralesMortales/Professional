<template>
  <footer id="TheFooter" class="flex gap-5 py-12 items-center bg-white text-black">
    <div class="flex flex-row items-center ml-20 gap-5 w-1/2">
      <h5>Copyright ©</h5>
      <h5>-</h5>
      <h5>All Rights Reserved</h5>
    </div>

    <div class="flex flex-row items-center justify-end flex-grow  ml-8 gap-5">
            <h5 style="margin-right: 10px; font-weight: 800;">Follow me</h5>
      <ul class="flex flex-row w-2/3 justify-around text-3xl px-9 gap-6">
        <li>
          <a href="https://github.com/your-github-profile"
            class="hover:text-amber-700 hover:transition-all transition-all">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/your-linkedin-profile"
            class="hover:text-amber-700 hover:transition-all transition-all">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/your-instagram-profile"
            class="hover:text-amber-700 hover:transition-all transition-all">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </li>
        <li>
          <a href="https://facebook.com/your-facebook-profile"
            class="hover:text-amber-700 hover:transition-all transition-all">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup></script>
