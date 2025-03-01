<template>
  <footer id="TheFooter" class="flex py-12 items-center bg-white text-black">
    <div class="flex flex-row items-center lefte">
      <h5>Copyright ©</h5>
      <h5>-</h5>
      <h5>All Rights Reserved</h5>
    </div>

    <div class="flex flex-row righte">
      <ul class="flex flex-row w-3/3 justify-around uuuu">
        <li>
          <a href="#headId"
            class="hover:text-amber-700 hover:transition-all transition-all">
            <h6>START</h6>
          </a>
        </li>
        <li>
          <a href="#who_am_I"
            class="hover:text-amber-700 hover:transition-all transition-all">
            <h6>ABOUT ME</h6>
          </a>
        </li>
        <li>
          <a href="#myStuffId"
            class="hover:text-amber-700 hover:transition-all transition-all">
            <h6>SKILLS</h6>

          </a>
        </li>
        <li>
          <a href="#projectsId"
            class="hover:text-amber-700 hover:transition-all transition-all">
            <h6>PROJECTS</h6>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
#TheFooter{
gap: 1.25rem;
}

.lefte{
  gap: 1.25rem;
  margin-left: 5rem;
}

.righte{
  gap: 1.25rem;
  flex-grow: 1;
  justify-content: end;
  align-items: center;
}

.uuuu{
  gap: 4vw;
  padding-right: 30px;
}
@media (max-width: 1036px) {

  .lefte > h5{
  font-size: clamp(14px, 1.64vw,20px);
  }


  .righte > ul > li > a > h6{
  font-size: clamp(14px, 1.6vw,20px);
  }
}
@media (max-width: 714px) {
  *{
    line-height: 49px;
  }
  #TheFooter{
    flex-direction: column-reverse;
    height: 128px;
    gap: 0;
    padding: 0;
    justify-content: center;
    align-items: center;

  }
  .lefte {
    margin-left: 0;
    justify-content: center;
    width: 100%;
  }


  .lefte > h5{
  font-size: clamp(16px, 2.64vw,20px);
  }

  .righte {
    width: 100%;
    flex-grow: 0;
    padding-right: 0;
    justify-content: space-around;

  }

  .uuuu{
    padding-right: 0;
    margin-left: 0;
    padding-left: 0;
  }


  .righte > ul > li > a > h6{
  font-size: clamp(13px, 2.6vw,20px);
  }
}

</style>
