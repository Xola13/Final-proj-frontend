<template>
  <div class="container">
      <div class="row">
          <div class="col-12" text-center>

              <h4>Add New Products</h4>

          </div>
      </div>

<div class="row">
    <div class="col-3"></div>
    <div class="clo-6">

   <form>

       <div class="form-group">
           <label>Category</label>
           <select class="form-control" v-model="categoryId" required>
               <option v-for="category in categories" :key="category.id" :value="category.id">
                   {{ category.id.categoryName}}</option>
           </select>
       </div>
  
    <div class="form-group">
        <label>Name</label>
        <input type="text" v-model="name" class="form-control">
    </div>
   
   <div class="form-group">
       <label>Description</label>
       <input type="text" v-model="description" class="form-control">
   </div>
   
  <div class="form-group">
      <label>ImageURL</label>
      <input type="text" v-model="imageURL" class="form-control">
  </div>

  <div class="form-group">
      <label>Price</label>
      <input type="number" v-model="price" class="form-control">
  </div>

   <button type="button" class="btn btn-primary" @click="addProduct">Add Product</button>

   </form>

    </div>
</div>

<div class="col-3"></div>

  </div>
</template>

<script>

const axios = require("axios");
const sweetalert = require("sweetalert");

export default {
    props: ["categories", "baseURL"],
    data() {
        return {
            id: null,
            categoryId: null,
            name: null,
            description: null,
            imageURL: null,
            price: null
        }
    },

  methods: {
      addProduct() {
          const newProduct = {
              categoryId: this.categoryId,
              categoryId: this.description,
              name: this.name,
              imageURL: this.imageURL,
              price: this.price
          };

          axios.post(this.baseURL+"product/add", newProduct)
          .then(() => {
              this.$router.push({name: 'AdminProduct'});
              sweetalert({
                  text: "Product added",
                  icon: "Success"
              })
          }).catch((err) => {
              console.log("err", err);
          })
      }
  }

}


</script>

<style>

</style>