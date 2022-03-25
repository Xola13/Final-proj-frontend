<template>
  
<section class="product">
	<div class="product__photo">
		<div class="photo-container">
			<div class="photo-main">
				<img :src="product.img" alt="">
			</div>
		</div>
	</div>
	<div class="product__info">
		<div class="title">
			<h1>{{product.title}}</h1>
			<span>PRODUCT ID:{{product._id}}</span>
		</div>
		<div class="price">
			R <span>{{product.price}}</span>
		</div>
		<div class="variant">
			<h3>SELECT A SIZE</h3>
			<ul>
	
		
			</ul>
		</div>
		<div class="description">
			{{product.description}}
		</div>
		   <button @click="AddToCart()" class="btn btn-outline-danger w-100">Add To Cart</button>
	</div>
   <div v-if="page === 'product'">
    <ProductDetails v-on:addToCart="addToCart" />
    </div>
</section>

</template>

<script>
import Cart from '../views/Cart.vue';
import ProductDetails from '../views/ProductDetails.vue';
export default {
data(){
    return{
        id: this.$route.params.id,
        product: {},
       cart: JSON.parse(localStorage.getItem('cart'))
    }
},
computed: {Cart},
mounted() {
    fetch("https://everything-lgbt-plus.herokuapp.com/products/" + this.id)
      .then((res) => res.json())
      .then((data) => {
        this.product = data;
        console.log(this.product);
      });
},
   components: {ProductDetails, Cart},
methods:{
   removeItem(product){
    this.cart.splice(this.cart.indexOf(product),1);
  },
 AddToCart(){
  this.cart.push(this.product);
  localStorage.setItem('cart', JSON.stringify(this.cart));
  localStorage.getItem('cart');
  console.log(console.log(JSON.parse(localStorage.getItem('cart'))));
  }
 }
}
</script>

<style>

</style>