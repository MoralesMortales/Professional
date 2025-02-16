<template>
  <div class="h-screen" id="headId">
    <header class="flex flex-row justify-around items-center h-full">
      <div class="w-full flex justify-center items-center mb-60">
        <div class="w-full flex flex-col justify-center items-center gap-12">
          <div class="justify-center items-center" style="width: 21%;">
            <img class="rounded-full" style="border:7px #67B9B5 solid; box-shadow: 0 0 20px #67B9B5;" src="../../assets/Profile_Img/Profile_Picture.png" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center gap-6">
<h4 style="font-size: 3.4vw;">CARLOS MORALES</h4>
            <h5 style="font-size: 3vw;">Full-Stack Programmer</h5>

            <div class="flex mt-3 justify-around w-full">
           <a href="https://www.instagram.com/alberto15123/">
              <font-awesome-icon
              :icon="['fab', 'instagram']"
              color="#eee"
              size="3x"
                class="ic"
            />
              </a> 
              <a href="">
            <font-awesome-icon
              :icon="['fab', 'youtube']"
              color="#eee"
              size="3x"
                class="ic"
            />
              </a>
<a href="https://github.com/MoralesMortales">
            <font-awesome-icon
              :icon="['fab', 'github']"
              color="#eee"
              size="3x"
                class="ic"
            />
              </a>
<a href="https://www.linkedin.com/in/carlos-morales-987974262/?locale=es_ES">
            <font-awesome-icon
              :icon="['fab', 'linkedin']"
              color="#eee"
              size="3x"
                class="ic"
            />
              </a>

            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="" id="header-contaner"></div>
  </div>
</template>

<script setup></script>

<style scope>
#header-contaner {
  background-image: url("/src/assets/Profile_Img/bg.png");
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  opacity: 0.68;
  position: absolute;
  top: 0;
  z-index: -100;
}

.ic{
  transition: .1s all ease;
}

.ic:hover{
  color: #74C9C5;
  cursor: pointer;
  transition: .1s all ease;

}
</style>
