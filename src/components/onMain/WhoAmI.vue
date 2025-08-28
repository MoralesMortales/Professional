<template>
  <section id="who_am_I" class="section pt-20 flex justify-center items-center">
    <div class="">
      <article class="flex lg:gap-28 lg:p-5 text-black" style="margin-top: -60px" id="container">
        <div class="w-full lg:ml-24 flex flex-col lg:gap-16 lg:pr-24" style="margin-bottom: -50px">
          <h2 id="boutMe">ABOUT ME</h2>
          <div id="">
            <p id="theText" class="text-justify">
              Hi There! Hoping you're having a nice day. 'I'm a passionate
              programmer who enjoys my learning sessions and strives to improve
              every day. My name is
              <span style="color: #459793">Carlos Morales</span>, and I'm
              currently studying
              <span style="color: #459793">Informatics Engineering</span> in
              Barcelona, Venezuela. Which it's the equivalent to Computer's
              Science on USA.<br /><br />My goal is to become a great developer
              on Website, Machine Learning and Mobile development, while also
              contributing to the growth and performance of those around me,
              hoping that together get a little better every day.
            </p>
          </div>
        </div>
        <div class="is_big w-full flex-col lg:flex-row" id="v1_interest">
          <div class="w-1/2">
            <h4 class="mb-12 text-nowrap">My Interests</h4>
          </div>
          <div class="w-1/2" style="padding-left: 0px">
            <h4 class="mb-12 text-nowrap">Personal Information</h4>
          </div>
        </div>

        <div id="myContent" class="w-full lg:ml-24 lg:pr-24 flex justify-center items-center">
          <div class="lg:hidden">
            <h4 id="myIn" class="mb-12 text-nowrap w-screen pl-4 lg:pl-0 lg:w-min">
              My Interests
            </h4>
          </div>

          <div id="container_grid" class="lg:w-1/2 lg:relative mini_boxes">
            <div class="" id="Grid">
              <div class="box w-full flex h-full justify-center items-center">
                <h4 class="w-full">SPORTS</h4>
                <img src="../../assets/Profile_Img/Interest/exercise.png" alt="" />
              </div>
              <div class="box w-full flex h-full justify-center items-center">
                <h4 class="w-full">READING</h4>
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
                <h4 class="w-full">TRAVELING</h4>
                <img src="../../assets/Profile_Img/Interest/travel.png" alt="" />
              </div>
            </div>
          </div>
          <div class="sndBox lg:w-1/2 second_boxM">
            <div class="lg:hidden">
              <h4 id="myPe" class="mb-12 text-nowrap w-screen pl-4 lg:pl-0 lg:w-min">
                Personal Information
              </h4>
            </div>
            <div class="nro_g flex flex-col">
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
                  7<sup>th</sup> Semester
                  <span class="text-slate-700">(out of 8)</span>
                </h4>
              </div>
              <div class="bout">
                <div class="b2">
                  <font-awesome-icon :icon="['fas', 'square-check']" />
                  <h4 class="b3">Job Status</h4>
                </div>
                <h4 class="b3 b4 free" style="">
                  <span style="
                      background-color: #67b9b5;
                      padding-left: 10px;
                      padding-right: 10px;
                    ">Freelance</span>
                </h4>
              </div>

              <div class="bout download absolute lg:bottom-0 flex justify-center items-center lg:w-1/2">
                <a href="cv.pdf" target="_blank" style="border: 1px rgba(0, 0, 0, 0.8) solid"
                  class="a_corned bg-slate-200 w-full flex justify-center items-center">
                  <h5 class="text-nowrap" id="download_text">Download CV</h5>
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

.is_big {
  display: flex;
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

#download_text {
  font-size: 1vw;
  z-index: 10;
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

.a_corned {
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
  content: "";
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
  color: #000;
  /* Cambia el color del texto si es necesario */
}

#theText {
  font-size: 1.3vw;
}

.mini_boxes {
  margin-left: -32px;
  margin-right: 32px;
}

#v1_interest {
  margin-bottom: -220px;
  padding-left: 40px;
}

#Grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.second_boxM {
  padding-left: 50px;
}

@media (max-width: 1200px) {
  .a_corned {
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

  .is_big {
    display: none;
  }

  .a_corned::before {
    content: "";
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

#myContent {
  margin-top: -30px;
}

.a_corned:hover::before {
  left: 0;
}

.a_corned:hover {
  color: #000;
  /* Cambia el color del texto si es necesario */
}

@media (max-width: 1024px) {
  #boutMe {
    font-size: clamp(1px, 8vw, 40px);
    margin-top: 10px;
    margin-bottom: 20px;
    padding-left: 3vw;
  }

  #container {
    width: 100vw;
    padding: 0 1em;
    gap: 60px;
    margin-bottom: 35px;
  }

  #theText {
    font-size: clamp(1px, 4.5vw, 25px);
    padding: 0 1em;
  }

  #myContent {
    margin-top: 40px;
  }

  .mini_boxes {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10vw;
  }

  #container_grid {
    min-width: 100vw;
    margin-left: 0;
    margin-right: 0;
  }

  #Grid {
    display: grid;
    width: 90%;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px 70px;
    margin-bottom: 3em;
  }

  .box {
    height: 90%;
  }

  .box>h4 {
    font-size: 3vw;
    margin-top: -10px;
  }

  .box>img {
    height: 50%;
  }

  .sndBox {
    margin-bottom: 8em;
    margin-top: 20px;
  }

  .second_boxM {
    padding-left: 0px;
  }

  .nro_g {
    height: auto;
    gap: 50px;
    padding: 2em;
    padding-top: 0;
    padding-bottom: 20px;
    padding-left: 5em;
  }

  .download {
    position: relative;
    bottom: -10em;
    width: 50%;
    place-self: center;
  }

  .download>a {
    padding: 0.91em 0;
    border-radius: 2px;
  }

  #download_text {
    font-size: clamp(1px, 5.3vw, 40px);
  }

  #myIn,
  #myPe {
    font-size: clamp(20px, 8vw, 40px);
    padding-left: 6vw;
  }

  .b2 {
    font-size: clamp(10px, 4vw, 40px);
    gap: 1em;
  }

  .b4 {
    font-size: clamp(1px, 3.1vw, 24px);
    display: flex;
    width: 40%;
    margin-right: 2em;
  }

  .bout {
    align-items: center;
    justify-content: space-between;
  }

  .b3 {
    font-size: clamp(1px, 3vw, 24px);
  }
    .free > span{
    padding-top: 10px;
    padding-bottom: 10px;
  }

}

@media (max-width: 720px) {
  #boutMe {
    font-size: clamp(1px, 8vw, 40px);
    margin-top: 10px;
    margin-bottom: 20px;
  }

  #container {
    width: 100vw;
    padding: 0 1em;
    gap: 60px;
    margin-bottom: 35px;
  }

  #theText {
    font-size: clamp(1px, 4.5vw, 25px);
  }

  #myContent {
    margin-top: 40px;
  }

  .mini_boxes {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10vw;
  }

  #container_grid {
    min-width: 100vw;
    margin-left: 0;
    margin-right: 0;
  }

  #Grid {
    display: grid;
    width: 90%;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 3em;
  }

  .box {
    height: 100%;
  }

  .box>h4 {
    font-size: 3vw;
    margin-top: -10px;
  }

  .box>img {
    height: 50%;
  }

  .sndBox {
    margin-bottom: 5em;
    margin-top: 20px;
  }

  .second_boxM {
    padding-left: 0px;
  }

  .nro_g {
    height: auto;
    gap: 30px;
    padding: 2em;
    padding-top: 0;
    padding-bottom: 20px;
    padding-left: 3em;
  }

  .download {
    position: relative;
    bottom: -6em;
    width: 50%;
    place-self: center;
  }

  .download>a {
    padding: 0.41em 0;
    border-radius: 2px;
  }

  #download_text {
    font-size: 5.3vw;
  }

  #myIn,
  #myPe {
    font-size: clamp(20px, 8vw, 40px);
  }

  .b2 {
    font-size: clamp(10px, 4vw, 300px);
  }

  .b4 {
    font-size: 3.1vw;
    width: 40%;
    margin-right: 2em;
  }

  .bout {
    align-items: center;
  }
  .free > span{
    padding-top: 10px;
    padding-bottom: 10px;
  }
}

@media (max-width: 400px) {
  #boutMe {
    font-size: 8vw;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  #container {
    width: 100vw;
    padding: 0 1em;
    gap: 60px;
  }

  #theText {
    font-size: 4.5vw;
  }

  #myContent {
    margin-top: 40px;
  }

  .mini_boxes {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10vw;
  }

  #container_grid {
    min-width: 100vw;
  }

  #Grid {
    display: grid;
    width: 90%;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 3em;
  }

  .box {
    height: 100%;
  }

  .box>h4 {
    font-size: 3vw;
    margin-top: -10px;
  }

  .box>img {
    height: 50%;
  }

  .sndBox {
    margin-bottom: 5em;
    margin-top: 20px;
  }

  .second_boxM {
    padding-left: 0px;
  }

  .nro_g {
    height: auto;
    gap: 30px;
    padding: 2em;
    padding-left: 3em;
    padding-top: 0;
    padding-bottom: 20px;
  }

  .download {
    position: relative;
    bottom: -6em;
    width: 50%;
    place-self: center;
  }

  .download>a {
    padding: 0.41em 0;
    border-radius: 2px;
  }

  #download_text {
    font-size: 6.3vw;
  }

  #myIn,
  #myPe {
    font-size: clamp(20px, 8vw, 300px);
  }

  .b2 {
    font-size: clamp(10px, 4vw, 300px);
  }

  .bout {
    align-items: center;
  }

}
</style>
