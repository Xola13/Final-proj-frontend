<template>
   
 <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">
          Shopping cart
        </h3>
      </div>
    </div>

    <!-- loop over the cart items and display -->

    <div v-for="cartItem in cartItems" :key="cartItem.id" class="row mt-2 pt-3">
      <div class="col-2"></div>
      <div class="col-md-3">
        <img
          :src="product.img"
          alt=""
          class="w-100 card-image-top embed-responsive embed-responsive-16by9"
          style="object-fit: cover"
        />
      </div>

      <!-- display product name, quantity -->
      <div class="col-md-5 px-3">
        <div class="card-block px-3">
          <h6 class="card-title">
            {{ products.title }}
          </h6>

          <p class="mb-0 font-weight-bold" id="item-price">
            $ {{ products.price }} per unit
          </p>
          <p class="mb-0">Quantity:{{ product.quantity }}</p>
        </div>
        <p class="mb-0">
          Total:
          <span class="font-weight-bold">
            R {{ products.price * products.quantity }}
          </span>
        </p>
      </div>
      <div class="col-2"></div>
      <div class="col-12"><hr /></div>
    </div>


  <button @click="deleteItem(carts._id)">Remove</button>


    <!-- display the price -->
    <div class="total-cost pt-2 text-right">
      <h5>Total : R{{ total }}</h5>
      <div v-if="total > 0">
        <button @click="checkout" class="btn btn-secondary">
          Checkout
        </button>
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
checkout(){
  fetch("https://final-project-o.herokuapp.com", {
    method: "POST",
    body: JSON.stringify({
     cart: this.cart,
     email: this.email,
     price: this.price,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((json) => {
    console.log(json.msg);
    fetch("https://final-project-o.herokuapp.com/cart/", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
    .then((res) => res.json())
    .then((json) => {
      alert("Items bought, Check email to confirm");
    })
    .catch((err) => {
      alert(err);
    });
  })
  .catch((err) => console.log(err));
},
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
  if(!localStorage.getItem("jwt")) {
    alert("Please log in First");
    return this.$router.push({ name: "Products" });
  }
  else{
      fetch("https://final-project-o.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        this.products = data;
        console.log(data, this.products);
      })
  
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