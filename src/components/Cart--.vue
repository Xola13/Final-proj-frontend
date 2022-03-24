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
            $ {{ products.price * products.quantity }}
          </span>
        </p>
      </div>
      <div class="col-2"></div>
      <div class="col-12"><hr /></div>
    </div>

    <!-- display the price -->
    <div class="total-cost pt-2 text-right">
      <h5>Total : R{{ products.price }}</h5>
    </div>
  </div>

   <button @click="deleteItem(carts._id)">Remove</button>

   


</template>

<script>


export default {
data() {
  return {
    cart: null,
  };
},

methods: {
checkout(){
},
deleteItem() {
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
    fetch("https://final-project-o.herokuapp.com/cart/", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
    .then((res) => res.json())
    .then((json) => {
      this.cart = json;
    })
    .catch((err) => {
      alert(err);
    })
  }
}
}
</script>

<style scoped>



</style>