
<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    
    <div class="loginmethod">
      
    </div>
  </header>
   
  -->
  <Navbar v-if="!$route.meta.hideNavbar"/>
  <Router-view/>
  
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import bootstrap from './bootstrap.css'
import Navbar from './components/nav.vue'
</script>

<style>
  body {
    background: url('./assets/bg.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
  }
</style>
