<template>
  
<router-link to="/admin/category">
<button class="btn btn-primary btn-lg"> Admin Category</button>
</router-link>

<br/>
<router-link to="/admin/product">
<button class="btn btn-primary btn-lg"> Admin Products</button>
</router-link>

</template>

<script>
export default {


    mounted() {
      if(localStorage.getItem("jwt")){
        if (JSON.parse(localStorage.getItem("user")).isAdmin) {
          fetch("https://final-project-o.herokuapp.com/users", {
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            }
          })
            .then((response) => response.json())
            .then((json) => {
              this.users = json;
              this.role = json.isAdmin
              console.log(json)
              fetch("https://final-project-o.herokuapp.com/products", {
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          })
            .then((response) => response.json())
            .then(async (json) => {
              this.products = json;
              localStorage.setItem('products', JSON.stringify(json))
              console.log(this.products)
              console.log(json)
            
            })
            .catch((err) => {
              alert("User not logged in");
            });
            })
            }else {
          alert("You not allowed");
          this.$router.push({ name: "Products" });
        }
      }else {
          alert("You not logged in");
          this.$router.push({ name: "Home" });
        }
  }
}

</script>

<style>

.btn{
    margin-top: 50px;
    margin-left: 800px;
}

</style>