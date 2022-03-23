<template>
  
<div class="home">
<button class="btn"><router-link to="/products">Shop</router-link></button>

</div>

</template>

<script>
export default {

}
</script>

<style>
 
 .home{
    background-image: url("../assets/rolex.jpg");
    background-size: cover;
    height: 100vh;
    background-size: cover;
    
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