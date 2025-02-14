<template>
  <div class="" id="header-contaner">
    <header class="flex flex-row justify-around items-center h-full">
      <div id="left_side_header" class="h-full flex justify-between flex-col">

        <div id="left_pos_1" class="flex flex-col gap-2 mt-4">
          <div class="h-4 bg-black" style="width:90%">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </div>
          <div class="h-4 bg-black" style="width:85%"></div>
        </div>

        <div id="left_pos_2" class="">

          <div style="margin-left:20px; margin-bottom:20px;" id="text1_header" class="text-black">
            <h1 style="font-size:clamp(20px,4vw,700px)">HI THERE!<br>I'm Carlos Morales</h1>
          </div>

          <div id="text2_header" class="text-white h-24 bg-black flex items-center" style="width:97.8%;">
            <h2 style="margin-left:20px; font-size:clamp(20px,4.5vw,700px)">PROGRAMMER</h2>
          </div>

        </div>

        <div id="left_pos_3" class="flex flex-col gap-2 mb-4">
          <div class="h-4 bg-black" style="width:98%"></div>
          <div class="h-4 bg-black" style="width:90%"></div>
        </div>

      </div>

      <div id="right_side_header" class="h-full">right</div>

      <!--      <h1 class="font-serif self-center lg:text-4xl md:text-4xl" id="profile-title">
        Carlos Morales
        </h1>
        <div class="h-3/5 w-1/5 flex justify-center items-center" alt="profile-image" id="profile-image" style="overflow: hidden;"> 
        <img class="rounded-2xl flex justify-center " src="../../assets/Profile_Img/Profile_Picture.png" style="object-fit: contain; object-position: center; height: 95%; transform: scale(0.88); box-shadow: 0 0 1em -5px white;" alt="">
        </div> 
        </header>
        <nav>
        <ul v-for="" key="">

        </ul> 
        </nav>-->
        </header>
  </div>
</template>

<script setup>

</script>

<style scope>

#left_side_header{
  background: #fff;
  width: 55%;
}

#right_side_header{
  background: #D9D9D9;
  flex-grow: 1;}

header{
  background: linear-gradient(transparent, #b5b5b51d, transparent);
}

#header-contaner{
  background-color:#E4DCD9;
  height: 100vh;
}

</style>
