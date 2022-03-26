<template>
  
<div class="home">
<button class="btn btn-secondary"><router-link to="/products">Shop</router-link></button>

</div>

</template>

<script>
export default {

}
</script>

<style scoped>
 
 .home{
    background-image: url("../assets/rolex.jpg");
    background-size: cover;
    height: 100vh;
    background-size: cover;
    background-attachment: fixed;
    
} 
.btn{
  justify-items: center;
  position: fixed;
  float: bottom;
  top: 40%;
  color: rgb(213, 214, 214);
  background-color: rgb(241, 240, 231);
}


</style>