<template>
  
  <div class="con">
<div class="wrapper">
    <div class="left">
        <img :src="user.img" alt="user" width="100">
        <h4> {{ user.name }}</h4>
         
    </div>
    <div class="right">
        <div class="info">
            <h3>Information</h3>
            <div class="info_data">
                 <div class="data">
                    <h4>Email</h4>
                    <p>{{ user.email }}</p>
                 </div>
                 <div class="data">
                   <h4>Phone</h4>
                    <p>{{ user.contact }}</p>
              </div>
            </div>
        </div>
       </div>
       </div>
       <div class="mt-6 text-center">
              <button
                data-bs-toggle="modal"
                data-bs-target="#editUser"
                class="btn btn-primary profilebtn"
                type="button"
              >
                Edit
              </button>
            </div>
           <div class="mt-6 text-center">
              <button
                class="btn btn-danger profile-button"
                type="button"
                @click="deleteUser"
              >
                Delete user
              </button>
            </div>

  </div>
          
        


       <!-- Modal -->
    <div
      class="modal fade"
      id="editUser"
      tabindex="-1"
      aria-labelledby="editUserLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">

            <profiledit />

          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
        
 

</template>


<script>
import profiledit from "../views/profiledit.vue";

export default {
components: {
  profiledit
},

data() {
    return{
      
      user: "",
      email: "",


      id: localStorage.getItem("id"),

      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
      contact: localStorage.getItem("contact"),

      
    };
},

  methods: {
    async deleteUser() {
      if (confirm("Are you sure you to delete your user?")) {
        if (!localStorage.getItem("jwt")) {
          alert("User not logged in");
          return this.$router.push({ name: "Home" });
        }

        try {
          fetch("https://final-project-o.herokuapp.com/contact/DeleteUser", {
            method: "POST",
            body: JSON.stringify({
              email: this.email,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((json) => {
              this.loading = false;
              fetch("https://final-project-o.herokuapp.com/users", {
                method: "DELETE",
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                  Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
              })
                .then((response) => response.json())
                .then((json) => {
                  alert("DELETED USER");
                  localStorage.clear();
                  return this.$router.push({ name: "Home" });
                })
                .catch((err) => {
                  alert(err);
                });
            });
        } catch (error) {
          alert(err);
          this.loading = false;
        }
      }
    },
  },
  mounted() {
    if (!localStorage.getItem("jwt")) {
      return this.$router.push({ name: "Home" });
    }
    fetch("https://final-project-o.herokuapp.com/users/:id/", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.users = json;
        this.email = json.email;
      })
      .catch((err) => {
        alert(err);
      });
  },



}
</script>

<style scoped>

/* @import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap'); */

.btn{
  float: left;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: 'Josefin Sans', sans-serif;
}

body{
   background-color: #f3f3f3;
}

.wrapper{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 450px;
  display: flex;
  box-shadow: 0 1px 20px 0 rgba(69,90,100,.08);
}

.wrapper .left{
  width: 35%;
  background: linear-gradient(to right,#01a9ac,#01dbdf);
  padding: 30px 25px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  text-align: center;
  color: #fff;
  
}

.wrapper .left img{
  border-radius: 5px;
  margin-bottom: 10px;
}

.wrapper .left h4{
  margin-bottom: 10px;
}

.wrapper .left p{
  font-size: 12px;
}

.wrapper .right{
  width: 65%;
  background: #fff;
  padding: 30px 25px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.wrapper .right .info,
.wrapper .right .projects{
  margin-bottom: 25px;
}

.wrapper .right .info h3,
.wrapper .right .projects h3{
    margin-bottom: 15px;
    padding-bottom: 5px;
    border-bottom: 1px solid #e0e0e0;
    color: #353c4e;
  text-transform: uppercase;
  letter-spacing: 5px;
}

.wrapper .right .info_data,
.wrapper .right .projects_data{
  display: flex;
  justify-content: space-between;
}

.wrapper .right .info_data .data,
.wrapper .right .projects_data .data{
  width: 45%;
}

.wrapper .right .info_data .data h4,
.wrapper .right .projects_data .data h4{
    color: #353c4e;
    margin-bottom: 5px;
}

.wrapper .right .info_data .data p,
.wrapper .right .projects_data .data p{
  font-size: 13px;
  margin-bottom: 10px;
  color: #919aa3;
}





</style>