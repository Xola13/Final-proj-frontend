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
      products: "",
      search: "",
     
     selected: "",
    };
  },

 

  methods: {
    addToCart() {
      if(!localStorage.getItem("jwt")) {
        alert("Log in first");
        return this.$router.push({ name: "Products"});
      } else {
        let cart = 1;
        fetch(`https://final-project-o.herokuapp.com/users/cart/`, {
          method: "POST",
          body: JSON.stringify({
            userId: "",
            products: "",
            
          }),
          headers: {
            "Content-type": "application/json; charset-UTF-8",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
        .then((res) => res.json())
        .then((json) => {
          alert("Added to Cart");
        })
        .catch((err) => {
          alert(err);
        });
      }
    },


  },
 mounted() {
   fetch("https://final-project-o.herokuapp.com/products/", {
     method: "GET",
     headers: {
       "Content-type": "application/json; charset=UTF-8",
     },
   })
   .then((res) => res.json())
   .then((json) => {
     this.products = json;
   })
   
   .catch((err) => {
     alert(err);
     console.log(err);
   });
 },

computed: {
  filterProducts: function() {
    let filtered = this.product
    if(this.selected == '') {
      filtered = filtered.filter((product) => {
        return product.category.match(this.selected);

      });
      if(this.search){
        filtered = filtered.filter((product) => {
          return product.title.match(this.search)
        })
      }
      return filtered
    }
    if (this.selected){
      filtered = filtered.filter((product) => {
        return product.title.match(this.search)
      });
      if(this.search){
        filtered = filtered.filter((product) => {
          return product.title.match(this.search)
        })
      }
      return filtered
    }
  },
},

};


</script>

<style scoped>










/*  */
 .wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    display: flex;
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