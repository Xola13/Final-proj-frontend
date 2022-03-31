<template>
<div class="container navbar__container">
  <nav class="navbar__flex">
    <div class="navbar__left">
      <span class="navbar__hamburger"></span>
      <form class="navbar__search">
        <div class="navbar__inputwithicon">
          <input type="text" name="" class="navbar__input" placeholder="Search ...">
          <input type="submit" name="" class="navbar__button" value="">
        </div>
      </form>
    </div>
    <div class="navbar__right">
      <label for="navbarToggler" class="navbar__toggler__label">
      <span class="navbar__hamberger"></span>
      <span>Menu</span></label>
      <input type="checkbox" name="" class="navbar__toggler__input" id="navbarToggler">

      <ul class="navbar__links">
        <li><router-link to="/">Home</router-link></li>
		<li><router-link to="/about">About</router-link></li>
        <li><router-link to="#">Connections</router-link>
          <ul class="navbar__sublinks">
            <li><router-link to="/admin">Admin</router-link></li>
            <li><router-link to="/products">Products</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            
          </ul>
        </li>
        <li><router-link :to="{ name: 'Cart'}">
			<i class="fa fa-shopping-cart" style="font-size:20px"></i>
			</router-link></li>
			
             <li class="nav-item dropdown rounded">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-user"></i>Profile</a>
          <div class="dropdown-menu dropdown-menu-end" id="naav" aria-labelledby="navbarDropdown">
            <router-link to="/profile"><a class="dropdown-item">Account</a></router-link>
			<hr class="dropdown-divider">
            <router-link to="/login"><li><a class="dropdown-item">Login</a></li></router-link>
            
              <hr class="dropdown-divider">
            
            <li><a class="dropdown-item" @click="logout">Logout</a></li>
          </div>
        </li>

      </ul>
    </div>
  </nav>
</div>





</template>

<script>

export default {

computed: {
	 computed:{  logout(){
    localStorage.clear();
    alert("User logged out")
    this.$router.push({ name: "Home"})

  }}
},


}


</script>


<style scoped>

.dropdown-divider{
	color: aliceblue;
}

a{
	padding-left: 3px !important;
}
#naav{
	background-color: #110f0f;
}

* {
	 box-sizing: border-box;
	 -webkit-tap-highlight-color: transparent;
}
 body {
	 font-family: Roboto, sans-serif;
	 font-size: 16px;
	 background-color: #110f0f;
   margin: 0px !important;
}
 .container {
	 width: 100%;
   margin: 0px;
}
 .navbar__container {
	 display: block;
	 background-color: #312929;
	 padding: 0 15px;
	 box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
   margin: 0px !important;
   margin-right: 0px !important;
   padding-right: 0px !important;
   max-width: 100% !important;
   position: absolute;
   
}
 .navbar__flex {
	 position: relative;
	 width: 100%;
	 max-width: 1140px;
	 min-height: 75px;
	 margin-left: auto;
	 margin-right: auto;
	 display: flex;
	 justify-content: space-between;
	 align-items: center;
}
 .navbar__left, .navbar__right {
	 flex: 1 1 50%;
}
 .navbar__hamburger {
	 display: inline-block;
	 width: 100px;
	 height: 50px;
	 background: url('../assets/logo.png') no-repeat;
	 background-size: contain;
	 margin-right: 15px;
	 vertical-align: middle;
}
 .navbar__search {
	 display: inline-block;
}
 .navbar__inputwithicon {
	 position: relative;
	 width: 300px;
}
 .navbar__input {
	 background-color: #34343f;
	 border: 1px solid #34343f;
	 width: 100%;
	 height: 36px;
	 border-radius: 18px;
	 outline: none;
	 padding: 0 30px 0 15px;
	 font-family: Roboto, sans-serif;
	 font-size: 14px;
	 font-weight: 500;
	 color: #c0c7da;
	 letter-spacing: 0.5px;
	 word-spacing: 1px;
}
 .navbar__input:focus {
	 border-color: white;
}
 .navbar__button {
	 position: absolute;
	 top: 3px;
	 right: 3px;
	 height: 30px;
	 width: 30px;
	 border-radius: 50%;
	 outline: none;
	 border: none;
	 background: #43cb83 url('https://res.cloudinary.com/ajayrawat/image/upload/v1508734484/search_icon_pr2sma.svg') no-repeat;
	 background-size: 17px;
	 background-position: center;
	 cursor: pointer;
	 transform: translate(0, 0);
	 transition: background-color 0.2s linear;
	 will-change: background-color;
}
 .navbar__button:hover, .navbar__button:focus {
	 background-color: #32b46f;
}
 .navbar__button:active {
	 background-color: #2fac6a;
	 transform: translateY(1px);
}
 .navbar__toggler {
	 display: none;
}
 .navbar__links {
	 list-style: none;
	 padding: 0;
	 margin: 0;
	 float: right;
}
 .navbar__links li {
	 position: relative;
	 display: inline-block;
}
 .navbar__links li:not(:last-child) a {
	 padding: 0 15px;
}
 .navbar__links li:last-child a {
	 padding: 0 0 0 15px;
}
 .navbar__links li a {
	 display: block;
	 color: #c0c7da;
	 text-decoration: none;
	 font-family: inherit;
	 font-size: 14px;
	 transition: color 200ms linear;
	 will-change: color;
}
 .navbar__links li a:hover, .navbar__links li a:hover {
	 color: white;
}
 .navbar__hamberger {
	/*display: none;
	*/
	 display: inline-block;
	 width: 13px;
	 height: 13px;
	 background: #3f3f4d url('https://res.cloudinary.com/ajayrawat/image/upload/v1508734484/hamburger_icon_o7uviz.svg') no-repeat;
	 background-size: contain;
	 vertical-align: middle;
}
 .navbar__toggler__label {
	 display: none;
	 font-family: inherit;
	 font-size: 16px;
	 color: white;
	 text-align: right;
	 user-select: none;
	 cursor: pointer;
}
 .navbar__toggler__input {
	 appearance: none;
}
 .navbar__sublinks {
	 display: none;
	 position: absolute;
	 width: 175px;
	 height: auto;
	 top: 100%;
	 left: 0;
	 margin: 0;
	 padding: 0;
	 z-index: 222;
	 background-color: #3f3f4d;
	 box-shadow: 3px 5px rgba(0, 0, 0, 0.2);
}
 .navbar__sublinks li {
	 width: 100%;
	 display: block;
	 white-space: nowrap;
}
 .navbar__sublinks li:first-child {
	 margin-top: 20px;
}
 .navbar__sublinks li a {
	 display: block;
	 padding: 5px 15px 15px !important;
}
 .navbar__links li:hover .navbar__sublinks {
	 display: block;
}
 @media screen and (max-width: 870px) {
	 .navbar__flex {
		 display: block;
		 padding: 15px 0;
	}
	 .navbar__left {
		 margin-bottom: 15px;
	}
	 .navbar__search {
		 display: inline-block;
		 width: calc(100% - 120px);
	}
	 .navbar__inputwithicon {
		 position: relative;
		 width: 100%;
	}
	 .navbar__links {
		 float: none;
		 display: flex;
		 flex-direction: row;
		 justify-content: space-between;
		 max-width: 400px;
		 margin: 0 auto;
	}
	 .navbar__links li:first-child a {
		 padding-left: 0;
	}
}
 @media screen and (max-width: 440px) {
	 .navbar__hamburger {
		 display: block;
		 margin: 0 auto 15px;
	}
	 .navbar__search {
		 width: 100%;
	}
	 .navbar__toggler__label {
		 position: relative;
		 display: block;
	}
	 .navbar__toggler__input {
		 display: block;
	}
	 .navbar__toggler__input:checked + .navbar__links {
		 display: flex;
	}
	 .navbar__links {
		 display: none;
		 flex-direction: column;
	}
	 .navbar__links li a {
		 padding: 10px 10px 10px 0 !important;
	}
	 .navbar__sublinks {
		 display: block;
		 position: static;
		 box-shadow: none;
		 width: 100%;
		 padding-left: 15px;
		 background-color: #34343f;
	}
	 .navbar__sublinks li:first-child {
		 margin-top: 0;
	}
 }

 


</style>
