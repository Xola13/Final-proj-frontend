<template>
  
 

                  <div id="wrapper" v-if="products">
                    <div v-for="(product, index) of products" :key="index.id">
                      <div id="product-img">
                        <img :src="product.img" height="420" width="340" />
                      </div>
                      
                      <div id="product-info">
                        <div id="product-text">
                          <h4>{{ product.title }}</h4>
                          <p>{{ product.description }}</p>
                        </div>
                          <p>{{ product.price }}ZAR</p>
                        
                          <div id="product-price-btn">
                            <input type="number" min="1" value="1" id="addToCart0" style="width:45px" class="qty" >
                          <button type="submit">AddCart</button>
                        </div>
                      </div>
                    </div>
                  </div>

             
  

    
  

</template>

<script>

import Cart from '../components/Cart--.vue'

export default {
 components: {Cart},

 

  data() {
    return {
      products: null,
      quantity: 1,
      user: JSON.parse(localStorage.getItem('user'))
    };
  },





  methods: {

    addToCart(id){
      if (localStorage.getItem("jwt")) {
      console.log(this.user)
      const product = this.products.find(product => product._id === id)
      fetch(`https://final-project-o.herokuapp.com/cart`, {
        method: "POST",
        body: JSON.stringify({
          userId: this.user._id,
          products: [
            {
              productId: product._id,
              quantity: this.quantity
            }
          ]
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          console.log(user)
          console.log("He is here")
        })
    }
  }
  },
 
 mounted() {
      fetch("https://final-project-o.herokuapp.com/products", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
   
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.products = json;
          console.log(json)
          
        })  
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

.qty{
  margin-top: 40px;
}
body{
  background-color:isque;
}


#wrapper {
  height: 420px;
  /* width: 654px; */
  /* margin: 50px auto; */
  border-radius: 50px;
   width: 100%;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  display: flex;
 padding-top: 90px;
 justify-content: space-evenly;
 row-gap: 50px;
 
}

#product-img {
  float: left;
  height: 420px;
  width: 327px;
}

#product-img img {
  border-radius: 7px 0 0 7px;
}

#product-info {
  background-color: #e1ffc2;
  float: left;
  height: 420px;
  width: 327px;
  border-radius: 0 7px 10px 7px;
}

#product-text {
  height: 300px;
  width: 327px;
}

#product-text h1 {
  margin: 0 0 0 38px;
  padding-top: 52px;
  font-size: 34px;
  color: #474747;
}

#product-text h1,
#product-price-btn p {
  font-family: "Bentham", serif;
}

#product-text h2 {
  margin: 0 0 47px 38px;
  font-size: 13px;
  font-family: serif, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  color: #d2d2d2;
  letter-spacing: 0.2em;
}

#product-text p {
  height: 140px;
  margin: -10px 10px 0 30px;
  font-family: Georgia;
  color: #3f4441;
  line-height: 1.7em;
  font-size: 15px;
}

#product-price-btn {
  height: 103px;
  width: 327px;
  margin-top: 17px;
  position: relative;
}

#product-price-btn p {
  display: inline-block;
  position: absolute;
  top: -13px;
  height: 50px;
  font-family: "Trocchi", serif;
  margin: 0 0 0 38px;
  font-size: 28px;
  color: #474747;
}

span {
  display: inline-block;
  height: 60px;
  font-family: Georgia, serif;
  font-size: 30px;
}

#product-price-btn button {
  float: right;
  display: inline-block;
  height: 50px;
  width: 120px;
  margin: 30px 20px 0 26px;
  box-sizing: border-box;
  border: transparent;
  border-radius: 60px;
  font-family: serif, sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #ffffff;
  background-color: #4aa96c;
  cursor: pointer;
  outline: none;
}

#product-price-btn button:hover {
  background-color: #91d18b;
  color: #335d2d;
}



</style>