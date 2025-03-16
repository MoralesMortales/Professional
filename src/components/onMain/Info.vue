<template>
  <div class=" text-black">
    <section v-if="option == 0">
    <div class="h-32 flex justify-center items-center">
      <h5>Education</h5>
    </div>
    <div class="">
      <div class="flex flex-col gap-20 px-4 justify-center items-center">
        <div class="box">
          <h5 class="title">
            <span class="font-bold">University:</span> Universidad Gran Mariscal
            de Ayacucho
          </h5>
          <h6 class="des"><span class="font-bold">Diploma:</span> Software Engineer</h6>
          <h6 class="per">Period: <span> 2022 - 2026 (On progress)</span></h6>
          <h6 class="per">Currently: 6<sup>th</sup> Semester (out of 8)</h6>
        </div>
        <div class="box">
          <h5 class="title">
            <span class="font-bold">High school:</span> Los Proceres
          </h5>
          <h6 class="des"><span class="font-bold">Diploma:</span> High School diploma in Science</h6>
          <h6 class="per">Period: <span> 2017 - 2022</span></h6>
        </div>

        <div class="box">
          <h5 class="title">
            <span class="font-bold">Academy:</span> Adakademy
          </h5>
          <h6 class="des"><span class="font-bold">Certificate:</span> Web development with Django</h6>
          <h6 class="per">Period: <span> 2022 - 2024</span></h6>
        </div>

        <div class="box">
          <h5 class="title">
            <span class="font-bold">Academy: </span>Adakademy
          </h5>
          <h6 class="des"><span class="font-bold">Certificate:</span> Web development with Vue.Js</h6>
          <h6 class="per">Period: <span> 2022 - 2024</span></h6>
        </div>

        <div class="box">
          <h5 class="title"><span class="font-bold">Academy:</span> Lingüis Academy</h5>
          <h6 class="des">
            <span class="font-bold">Certificate:</span> Completion of English Course and get the level C1
            following the CEFR
          </h6>
          <h6 class="per">Period: <span> 2022 - 2024</span></h6>
        </div>

        <div class="w-full flex justify-center flex-nowrap text-nowrap mb-10">
          <a href="www.linkedin.com/in/carlos-morales-987974262" class="w-min text-lg font-bold">Find more on my LinkedIn</a>
        </div>
      </div>

      <div class="flex my-10 gap-10 justify-center items-center btns">
          <button class="btn" @click='option = 0' :style="option == 1 ? { backgroundColor: 'rgba(255,255,255,.7)' } : { backgroundColor: '#67B9B5' } ">Education</button>
        <button class="btn" @click='option = 1' :style="option == 0 ? { backgroundColor: 'rgba(255,255,255,.7)' } : { backgroundColor: 'rgba(255,255,255,.7)' } ">Experience</button>
      </div>
    </div>
    </section>
    <section v-if="option == 1">
          <div class="h-32 flex justify-center items-center">
      <h5>Experience</h5>
    </div>
    <div class="">
      <div class="flex flex-col gap-20 px-4 justify-center items-center">
        <div class="box">
          <h5 class="title">
            <span class="font-bold">Karanta</span> ( Front-end Developer )
          </h5>
          <h6 class="des">Responsible for designing and implementing the UX and UI for the mobile websites of Komandas and Logisti-K. The goal was to create an e-commerce portal that facilitated transactions between businesses and companies with large numbers of employees. This platform enabled users to order and purchase resources while maintaining a detailed history of all transactions and movements.</h6>
          <h6 class="per">Period: <span> July 2024 - August 2024</span></h6>
        </div>

        <div class="box">
          <h5 class="title">
              <span class="font-bold">Communitary Service - Public Fundation </span>( Desktop Application Developer )
          </h5>
          <h6 class="des"> Full development of a desktop payroll program for a public foundation in Barcelona, Venezuela. The program was designed to streamline the process of registering employee payrolls on a weekly, biweekly, and monthly basis. Additionally, it included functionality to generate work certificates for each employee and allowed for the updating of all relevant data as needed. </h6>
          <h6 class="per">Period: <span> September 2024 - March 2025</span></h6>
        </div>
        <div class="w-full flex justify-center flex-nowrap text-nowrap">
          <a href="" class="w-min text-lg font-bold">Find more on my LinkedIn</a>
        </div>
      </div>

      <div class="flex my-10 gap-10 justify-center items-center btns">
          <button class="btn" @click='option = 0' :style="option == 1 ? { backgroundColor: 'rgba(255,255,255,.7)' } : { backgroundColor: '#67B9B5' } ">Education</button>
        <button class="btn" @click='option = 1' :style="option == 0 ? { backgroundColor: '#67B9B5' } : { backgroundColor: '#67B9B5' } ">Experience</button>
      </div>
    </div>

    </section>
  </div>

</template>

<script setup>
import { ref } from 'vue';
const option = ref(0);

</script>

<style scoped>
.title {
  margin-bottom: 20px;
}

.isActive{
background-color: red;
}

.noActive{
background-color: blue;
}
.des{
  margin-bottom: 10px;
text-align: justify;
}

.per{
  margin-bottom: 10px;
}

.box{
outline: 1px black solid;
padding: 6px;
border-radius: 2px;
background-color: rgba(244,244, 244, .61);
}

.btn{
background-color: #67B9B5;
height: 46px;
font-size: 1.4em;
width: 67%;
border-radius: 4px;
}


@media (max-width:450px) {
.title {
  margin-bottom: 20px;
  font-size: clamp(16px, 4.24vw, 40px);
}

.des{
font-size: 15px;
  margin-bottom: 10px;
text-align: justify;
}

.per{
font-size: clamp(1px,4vw,220px);
  margin-bottom: 10px;
}
  
}

.title {
  font-size: clamp(16px, 4.24vw, 20px);
line-height: 50px;
}
 .des{
  margin-bottom: 10px;
text-align: justify;
font-size:clamp(17px, 3vw, 20px);
}

.per{
font-size:clamp(17px, 3vw, 20px);
  margin-bottom: 10px;
}


@media (min-width:1024px) {
.box{
height: 100%;
width: 50vw;
padding: 0 10px;
} 

.btns{
display: flex;
flex-direction: row;
}

.btn{
width: 20%;
}

}

</style>
