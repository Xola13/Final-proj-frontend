<template>
  
<div class="container">
    <div class="row">
        <div class="col-12 text-center">

            <h3 class="pt-3">Our Products</h3>

            <router-link to="/admin/product/new">
                <button class="btn2 btn-primary btn-lg" style="float:right">Add Products</button>
            </router-link>

        </div>
    </div>

<div class="row"></div>
</div>
  
<Prod/>

</template>

<script>

const axios = require("axios");
import Prod from "../../components/AdminProducts--.vue"

export default {
components:{
    Prod
},

data() {
    return {
        baseURL: "https://final-project-o.herokuapp.com",
        categories: []
    };
},

methods: {
 async getCategories() {
     await axios.get(`${this.baseURL}/category/`)
     .then((res) => (this.categories = res.data))
     .catch((err) => console.log(err));
 },
},

mounted() {
    this.getCategories();
},
};
</script>

<style scoped>

.btn2{

margin-bottom: 20px;
}

</style>