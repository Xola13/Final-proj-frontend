<template>
<div class="home">
<Home/>
</div>


</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Login from '../components/Login--.vue'
import Home from '../components/Home--.vue'

export default {
  
  components: {
    Navbar,
    Login,
    Home
  }
}
</script>
<style scoped>

</style>
