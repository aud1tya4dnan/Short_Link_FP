
<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    
    <div class="loginmethod">
      
    </div>
  </header>
   
  -->
<div class="lines">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
</div>
  <Router-view/>
  
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import bootstrap from './bootstrap.css'
// import axios from 'axios'
// export default {
//   data(){
//     return{

//     }
//   },
//   methods: {
//     async getMethod(){
//       const res = await axios.get("http://localhost:8122/api").catch((err)=>console.log(err))
//       console.log(res);

//     }
//   },
//   mounted() {
//     this.getMethod();
//   }
// }

</script>

<style>
/* @media (min-width: 100px) {
  body {
    background: linear-gradient(52deg, #963030, #3930b4);
    background-size: 400% 400%;
    animation: AnimationName 15s ease infinite;
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
} */
/* body {
    background: linear-gradient(52deg, #0800ff, #ce24fd);
    background-size: 100% 200%;
} */

</style>
<!-- @media (min-width: 100px) { }-->