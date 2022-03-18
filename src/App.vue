<template>
<div class="app">
  <Navbar/>
  <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: "app",
  components:{
    Navbar
    },

  data(){
   return
  }
}
</script>




<style>

body{
  background-size: cover;
}

</style>
