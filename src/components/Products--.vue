<template>
  
  <div class="wrap" v-if="products">
    <div v-for="(product, index) of products" :key="index.id">
    <div class="card">
      <div class="card__inner">
        <div class="card___imagen"><img :src='product.img' alt="" width="295" height="254"></div>
        <div class="card__info">
          <p>{{ product.title }}</p>
          <h2>{{ description }}</h2>
          <p>{{ product.price }}</p>
          <button
          type="button"
          @click="addToCart(products._id)">Add Cart</button>
         
        </div>
      </div>
    </div>
  </div>
  </div>

</template>

<script>


export default {
  data() {
    return {
      products:[],
     
    };
  },

 

  methods: {
    


  },
 mounted() {
   fetch("https://final-project-o.herokuapp.com/products/")
   .then(res => res.json())
   .then(data => {
     this.products = data;
   })
 }
};


</script>

<style scoped>










/*  */
 .wrap {
    width: 100%;
    display: flex;
    justify-content: center;
}

.card {
  margin: 22px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.418);
  border-bottom-right-radius: 44px;
  border-bottom-left-radius: 44px;
  border-top-right-radius: 44px;
  border-top-left-radius: 44px;
  position: relative;
  transition: 0.5s ease-in-out;
}

.card:hover{
    transform: translateY(15px);
}

.card:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 254px;
    background: var(--color-navy);
    border-top-right-radius: 44px;
    border-top-left-radius: 44px;
    transition: 0.5s all;
    opacity: 0;

}

.card:hover::before {
    opacity: 1;
}


.card__imagen{
    width: 100%;
    height: 100px;
}

.card__imagen > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card__info {
    font-size: 0.8rem;
    font-family: var(--font-sans);
    padding: 1rem 3rem 0rem 3rem;
    width: 100%;
    height: 10rem;
    line-height: 1.5;
    background-color: var(--color-navy-opaque);
    color: var(--color-light);
    border-bottom-right-radius: 44px;
    border-bottom-left-radius: 44px;
}

.card__info p{
    font-weight: bold;
    margin-bottom: 1rem;
}

.button {
    font-style: var(--font-sans);
    text-decoration: none;
    color: var(--color-light);
    background-color: black;
    padding: 0.6em 4em;
    border-radius: 15px;
    font-weight: bold;
    margin-bottom: 1em;
} 


</style>