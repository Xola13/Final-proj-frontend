<template>
   
 <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">
          Shopping cart
        </h3>
      </div>
    </div>
    </div>


</template>

<script>

import Products from '../views/Products.vue'

export default {
data() {
  return {
    cart: JSON.parse(localStorage.getItem('cart')),
    products: [],
    email: '',
    page: 'cart',
    
  };
},

methods: {

deleteItem(id) {
  fetch("https://final-project-o.herokuapp.com/users/:id/cart", {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
  .then((res) => res.json())
  .then((json) => {
    location.reload();
  })
  .catch((err) => {
    alert(err);
  });
},


},

  mounted() {
    if (localStorage.getItem("jwt")) {
      fetch("https://final-project-o.herokuapp.com/products", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.products = json;
          console.log(json)
          
        }).catch((err) => {
          alert("User not logged in");
        });
    } else {
      alert("User not logged in");
      this.$router.push({ name: "Home" });
    }
  },

computed: {
 total: function() {
   var list = this.cart;
   var sum = 0;
   for (var listProps in list) {
     list[listProps].cart.forEach(function (cart){
       sum += cart.quantity.quantity * cart.price;
     });
   }
   return sum;
  },
 },

 components: {Products}
};
</script>

<style scoped>

.container{
  padding-top: 100px;
}

</style>