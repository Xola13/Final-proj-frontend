<template>
<div class="app">
  <Navbar/>
  <router-view/>

  <footer/>


  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import footer from './components/footer--.vue'

export default {
  name: "app",
  components:{
    Navbar,
    footer
    },

}
</script>




<style>

body{
  background-size: cover;
}

</style>
