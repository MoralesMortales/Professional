<template>
  <section id="who_am_I" class="section pt-20 flex justify-center items-center">
    <div class="">
      <article class="flex gap-28 p-5 text-black" style="margin-top: -60px" id="">
        <div class="w-full ml-24 flex flex-col gap-16 pr-24" style="margin-bottom: -50px">
          <h2 id="" class="mt-20">ABOUT ME</h2>
          <div id="">
            <p style="font-size: 1.3vw" class="text-justify">
              Hi There! Hoping you're having a nice day. 'I'm a passionate
              programmer who enjoys my learning sessions and strives to improve
              every day. My name is
              <span style="color: #da1010">Carlos Morales</span>, and I'm
              currently studying
              <span style="color: #da1010">Informatics Engineering</span> in
              Barcelona, Venezuela. <br /><br />My goal is to become a great
              developer on Website, Machine Learning and Mobile development,
              while also contributing to the growth and performance of those
              around me, hoping that together get a little better every day.
            </p>
          </div>
        </div>
        <div class="flex w-full" style="margin-bottom: -220px; padding-left: 40px">
          <div class="w-1/2">
            <h4 class="mb-12">My Interests</h4>
          </div>
          <div class="w-1/2" style="padding-left: 0px">
            <h4 class="mb-12">Personal Information</h4>
          </div>
        </div>

        <div class="w-full ml-24 pr-24 flex justify-center items-center" style="margin-top: -30px">
          <div class="w-1/2" style="margin-left: -32px; margin-right: 32px">
            <div class="" style="
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 30px;
              ">
              <div class="box w-full flex h-full justify-center items-center">
                <h4 class="w-full">SPORT</h4>
                <img src="../../assets/Profile_Img/Interest/exercise.png" alt="" />
              </div>
              <div class="box w-full flex h-full justify-center items-center">
                <h4 class="w-full">READ</h4>
                <img src="../../assets/Profile_Img/Interest/read.png" alt="" />
              </div>
              <div class="box w-full flex h-full justify-center items-center">
                <h4 class="w-full">PROGRAMMING</h4>
                <img src="../../assets/Profile_Img/Interest/programming.png" alt="" />
              </div>
              <div class="box w-full flex h-full justify-center items-center">
                <h4 class="w-full">LANGUAGES</h4>
                <img src="../../assets/Profile_Img/Interest/languages.png" alt="" />
              </div>
              <div class="box w-full flex h-full justify-center items-center">
                <h4 class="w-full">MUSIC</h4>
                <img src="../../assets/Profile_Img/Interest/music.png" alt="" />
              </div>
              <div class="box w-full flex h-full justify-center items-center">
                <h4 class="w-full">TRAVEL</h4>
                <img src="../../assets/Profile_Img/Interest/travel.png" alt="" />
              </div>
            </div>
          </div>
          <div class="w-1/2" style="padding-left: 50px">
            <div class="nro_g flex flex-col">
              <div class="bout">
                <div class="b2">
                  <font-awesome-icon :icon="['fas', 'mobile-screen']" />
                  <h4 class="b3">Phone Number</h4>
                </div>
                <h4 class="b3 b4">+58 412-8816-267</h4>
              </div>
              <div class="bout">
                <div class="b2">
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                  <h4 class="b3">Email</h4>
                </div>
                <h4 class="b3 b4">carlos52.7624@gmail.com</h4>
              </div>
              <div class="bout">
                <div class="b2">
                  <font-awesome-icon :icon="['fas', 'calendar-days']" />
                  <h4 class="b3">Birth Date</h4>
                </div>
                <h4 class="b3 b4">05/07/2005</h4>
              </div>
              <div class="bout">
                <div class="b2">
                  <font-awesome-icon :icon="['fas', 'earth-americas']" />
                  <h4 class="b3">Country</h4>
                </div>
                <h4 class="b3 b4">Venezuela</h4>
              </div>
              <div class="bout">
                <div class="b2">
                  <font-awesome-icon :icon="['fas', 'graduation-cap']" />
                  <h4 class="b3">Semester</h4>
                </div>
                <h4 class="b3 b4">
                  6<sup>th</sup> Semester
                  <span class="text-slate-700">(out of 8)</span>
                </h4>
              </div>

              <div class="bout">
                <div class="b2">
                  <font-awesome-icon :icon="['fas', 'square-check']" />
                  <h4 class="b3">Job Status</h4>
                </div>
                <h4 class="b3 b4" style="">
                  <span style="
                      background-color: rgba(78, 211, 54, 0.6);
                      padding-left: 10px;
                      padding-right: 10px;
                    ">Freelance</span>
                </h4>
              </div>
              <div class="bout absolute bottom-0 flex justify-center items-center w-1/2">
                <a href="../../assets/Profile_Img/CARLOS MORAL (1).pdf"  target="_blank" style="border: 1px rgba(0,0,0,.8) solid;" class="a_corned bg-slate-200 w-full flex justify-center items-center">
                  <h5 class="text-nowrap" style="font-size: 1vw; z-index: 10;">
                    Download CV
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup></script>

<style scope>
#a_bar {
  width: 45vw;
}

#who_am_I {
  margin-top: 0vh;
}

#who_am_I_title {
  padding-bottom: 7vh;
  margin-bottom: 5vh;
  font-size: 4em;
  color: #000;
}

#code-space_who_am_I {
  font-size: 1.971em;
  font-weight: bold;
}

.box {
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 6px;
  width: 100%;
  height: 9vw;
}

.box>h4 {
  font-size: 1.4vw;
  padding-top: 5px;
  height: 2vw;
  text-align: center;
}

.box>img {
  height: 6vw;
  padding: 10px 0;
}

.bout {
  display: flex;
  justify-content: space-between;
}

.b2 {
  display: flex;
  font-size: 1vw;
  align-items: center;
  gap: 8px;
  width: 50%;
}

.b3 {
  font-size: clamp(15px, 1.2vw, 20px);
  line-height: 2.2vw;
  text-wrap: nowrap;
}

.nro_g {
  display: flex;
  flex-direction: column;
  height: 21.6vw;
  gap: 8px;
  position: relative;
}

.b4 {
  width: 100%;
  padding-left: 10px;
}


.a_corned{
  padding: 1vw;
          position: relative;
      background-color: #eee;
      border: 2px solid #000;
      color: #000;
      font-size: 16px;
      cursor: pointer;
      overflow: hidden;
      transition: color 0.3s ease;
}  
.a_corned::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background-color: #bbb;
      transition: left 0.3s ease;
      z-index: 1;
    }

    .a_corned:hover::before {
      left: 0;
    }

    .a_corned:hover {
      color: #000; /* Cambia el color del texto si es necesario */
    }

@media (max-width:1200px) {
.a_corned{
  padding: 0;
          position: relative;
      background-color: transparent;
      border: 2px solid #000;
      color: #000;
      font-size: 16px;
      cursor: pointer;
      overflow: hidden;
      transition: color 0.3s ease;
}  
.a_corned::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background-color: white;
      transition: left 0.3s ease;
      z-index: -1;
    }
}
    .a_corned:hover::before {
      left: 0;
    }

    .a_corned:hover {
      color: #000; /* Cambia el color del texto si es necesario */
    }


</style>
