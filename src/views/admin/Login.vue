<template>
  
<div class="main">
<form @submit.prevent="login">
    <div class="box">
        <div class="icon">
            <i class="fas fa-user"></i>
        </div>
        <h1>ADMIN</h1>   
        <div>
            <p>Enter Email:</p>
            <input type="email" v-model="email" placeholder="Enter your Email id" required/>
        </div>
        <div>
            <p>Enter Password:</p>
            <input type="password" v-model="password" placeholder="Enter your Password" required minlength="8" maxlength="12"/>
        </div>
        <br>
        <button class="btn" type="submit">Login</button>
      <br>
    
        
        

    </div>
     </form>
</div>
           

</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
   methods: {
    login() {
      fetch("https://final-project-o.herokuapp.com/users", {
        method: "PATCH",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.jwt) {
            localStorage.setItem("jwt", json.jwt);
          }
          if (localStorage.getItem("jwt")) {
            location.reload();
            
          } else {
            alert("Incorrect Credentials");
          }
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
  mounted(){
      
      if(localStorage.getItem("jwt")){
          fetch("https://final-project-o.herokuapp.com/users/:id/", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
          let isadmin = json.isadmin;
        if(isadmin == true){
            this.$router.push({ name: "Admin" });
        }
        if(isadmin ==false){
            alert("You are Not ADMIN")
            this.$router.push({ name: "Home" });
        }
      })
      .catch((err) => {
        alert(err);
      });
      }

  }

}
</script>

<style>

*{
    margin: 0;
    padding: 0;
}
body{
    background: linear-gradient(45deg, #1affff, #4f58ff);
    font-family: 'Josefin Sans', sans-serif;
}

.main
{
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
}
.box
{
    width: 300px;
    height: 400px;
    background: rgb(255, 255, 255);
    color: black;
    margin: 0 20px;
    overflow:hidden;
    flex-direction: column;
    position: relative;
    box-shadow: 0px 0px 20px rgb(32, 30, 30);
    display: flex;
    justify-content: center;
    align-items: center;    
}
.box div
{
    margin: 5px 0;
}
.box div input
{
    width: 220px;
    height: 25px;
    margin: 5px 0;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
}
.box button
{
    width: 220px;
    height: 30px;
    margin-top: 5px;
    background: none;
    border:none;
    outline: none;
    background: #4f58ff;
    color: white;
    border-radius: 10px;
    cursor: pointer;
}
.box h1
{
    margin: 60px 0 20px 0;
}
.box .icon
{
    position:absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 100px;
    border-radius: 0 0 50% 50%;
    background: #4f58ff;
    box-shadow: 0px 0px 20px rgb(32, 30, 30);
    align-items: flex-end;

    display: flex;
    justify-content: center;
    align-items: center;
}
.box .icon i
{
    color: white;
    margin-bottom: 10px;
}

</style>