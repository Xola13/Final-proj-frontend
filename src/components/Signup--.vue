<template>
<div id="si">
  
<div class="signup-form">
    <form @submit.prevent="signup">
		<h2>Create Free Account</h2>
		<p class="hint-text">It's FREE and takes a minute.</p>
        <div class="form-group">
            <input type="text" class="form-control" name="name" placeholder="Username" required="required">
        </div> 
        <div class="form-group">
        	<input type="email" class="form-control" name="email" placeholder="Email" required="required">
        </div>
		<div class="form-group">
            <input type="text" class="form-control" name="contact" placeholder="Contact" required="required">
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" required="required">
        </div>        
		<div class="form-group">
            <button type="submit" class="btn3 btn-success btn-lg btn-block">Register Now</button>
        </div>
    </form>
	<div class="text-center">Already have an account? <router-link to="/login">Sign in</router-link>
</div>
</div>
</div>

</template>

<script>
export default {
data() {
	return {
		name: "",
		email: "",
		password: "",
		contact: ""
	}
},
methods: {
	signup() {
		fetch("https://final-project-o.herokuapp.com/users", {
			method: "POST",
			body: JSON.stringify({
				name: this.name,
				email: this.email,
				contact: this.contact,
				password: this.password,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		})
		.then((response) => response.json())
		.then((json) => console.log(json));
		this.msg = `${ this.name } Registered Successfuly`;
		alert("Registering..");
		this.$router.push({ name: "Products"});
	},
},


}
</script>

<style>
 
  
     #si{
		 background-color: #221f1d;
	 }
     

	body{
		color: rgb(63, 19, 19) !important;
		background: #6fa2e9;
		font-family: 'Roboto', sans-serif;
	}
    .form-control{
		height: 40px;
		box-shadow: none;
		color: #969fa4;
	}
	.form-control:focus{
		border-color: #5cb85c;
	}
    .form-control, .btn{        
        border-radius: 3px;
    }
	.signup-form{
		width: 400px;
		margin: 0 auto;
		padding: 30px 0;
		
	}
	.signup-form h2{
		color: #636363;
        margin: 0 0 15px;
		position: relative;
		text-align: center;
    }
	.signup-form h2:before, .signup-form h2:after{
		content: "";
		height: 2px;
		width: 30%;
		background: #d4d4d4;
		position: absolute;
		top: 50%;
		z-index: 2;
	}	
	.signup-form h2:before{
		left: 0;
	}
	.signup-form h2:after{
		right: 0;
	}
    .signup-form .hint-text{
		color: #999;
		margin-bottom: 30px;
		text-align: center;
	}
    .signup-form form{
		color: #999;
		border-radius: 3px;
    	margin-bottom: 15px;
        background: #f2f3f7;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
		margin-top: 100px;
    }
	.signup-form .form-group{
		margin-bottom: 20px;
	}
	.signup-form input[type="checkbox"]{
		margin-top: 3px;
	}
	.signup-form .btn{        
        font-size: 16px;
        font-weight: bold;		
		min-width: 140px;
        outline: none !important;
    }
	.signup-form .row div:first-child{
		padding-right: 10px;
	}
	.signup-form .row div:last-child{
		padding-left: 10px;
	}    	
    .signup-form a{
		color: #fff;
		text-decoration: underline;
	}
    .signup-form a:hover{
		text-decoration: none;
	}
	.signup-form form a{
		color: #5cb85c;
		text-decoration: none;
	}	
	.signup-form form a:hover{
		text-decoration: underline;
	}  
	.text-center{
		color: #fff;
	}
</style>


