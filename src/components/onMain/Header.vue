<template>
  <div class="h-screen" id="headId">
    <header class="lg:flex lg:flex-row lg:justify-around lg:items-center h-full">
      <div class="w-full flex justify-center items-center lg:mb-60 h-full">
        <div class="w-full flex flex-col justify-center items-center lg:gap-12">
          <div class="lg:justify-center lg:items-center img_container">
            <img class="rounded-full" style="border: 7px #67b9b5 solid; box-shadow: 0 0 20px #67b9b5"
              src="../../assets/Profile_Img/Profile_Picture.png" alt="" />
          </div>
          <div id="theTexts" class="flex flex-col items-center justify-center gap-6">
            <h4 id="theH4">CARLOS MORALES</h4>
            <h5 id="theH5">Full-Stack Programmer</h5>

            <div class="flex mt-3 justify-around w-full">
              <a href="https://github.com/MoralesMortales">
                <font-awesome-icon :icon="['fab', 'github']" color="#eee" size="3x" class="ic" />
              </a>
              <a href="https://www.linkedin.com/in/carlos-morales-987974262/?locale=es_ES">
                <font-awesome-icon :icon="['fab', 'linkedin']" color="#eee" size="3x" class="ic" />
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

.ic {
  transition: 0.1s all ease;
}

.ic:hover {
  color: #74c9c5;
  cursor: pointer;
  transition: 0.1s all ease;
}

.img_container {
  width: 21%;
}

#theH4 {
  font-size: 3.4vw;
}

#theH5 {
  font-size: 3vw;
}

@media (max-width: 1024px) {
  .img_container {
    width: 30%;
    margin-bottom: 7vh;
    margin-top: -20vh;
    min-width: 278px;
  }

  #header-contaner {
    background-position: left;
  }

  #theH4 {
    font-size: clamp(1px,8vw,50px);
  }

  #theH5 {
    font-size: clamp(1px,7vw,45px);
    margin-bottom: 2vh;
    margin-top: 10px;
  }

}

@media (max-width: 720px) {
  .img_container {
    width: 40%;
    min-width: 220px;
  }
  #theH4 {
    font-size: clamp(1px,8vw,50px);
  }

  #theH5 {
    font-size: clamp(1px,7vw,45px);
    margin-bottom: 2vh;
    margin-top: 10px;
  }
}

@media (max-width: 400px) {
  .img_container {
    width: 56%;
    min-width: 120px;
  }

  #theH4 {
    font-size: 9vw;
  }

  #theH5 {
    font-size: 8vw;
    margin-bottom: 0;
    margin-top: 0px;
  }
}
</style>
