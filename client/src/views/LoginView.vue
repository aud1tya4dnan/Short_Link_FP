<template>
  <div class="loginview">
    <h1 style="text-align: center">Login</h1>
    <div class="username">
      <label>Email</label><br />
      <input type="text" placeholder="Email" v-model="email" class="type"/>
    </div>
    <div class="password">
      <label class="password">Password</label><br />
      <input type="password" placeholder="Password" v-model="password" class="type"/>
    </div>
    <div> 
      <button type="submit" class="submit" >Submit</button>
    </div>
    <p>Dont have an account? <RouterLink to="/regis">Register</RouterLink> </p> 
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {
    async getMethod() {
      const res = await axios.get("http://localhost:8122/api").catch((err) => console.log(err));
      console.log(res);
    },
    async postUser() {
      try{
        response.send("email", "password")
      }
      catch(err){
        console.log(err)
      }
    }
  },
  mounted() {
    // this.getMethod();
  },
};
</script>

<style scoped>
  .loginview{
    border: 3px solid;
    border-radius: 10%;
    padding: 30px;
  }
  .username{
    margin-bottom: 10px;
  }
  .password{
    margin-bottom: 15px;
  }

.submit {
	box-shadow: 3px 4px 0px 0px #8a2a21;
	background:linear-gradient(to bottom, #c62d1f 5%, #f24437 100%);
	background-color: "#c62d1f";
	border-radius: 25px;
	border: 3px solid #d02718;
	display: inline-block;
	cursor: pointer;
	color: "#ffffff";
	font-family:Impact;
	font-size: 10px;
	padding: 9px 29px;
	text-decoration:none;
	text-shadow: 4px 5px 5px #810e05;
}
.submit:hover {
	background:linear-gradient(to bottom, #f24437 5%, #c62d1f 100%);
	background-color:#f24437;
}
.submit:active {
	position:relative;
	top:1px;
}
.type{
     padding: 10px;
     font-size: 17px;
     border-width: 1px;
     border-color: #ff00e4;
     background-color: #ffffff;
     color: #000000;
     border-style: groove;
     border-radius: 12px;
     box-shadow: 0px 0px 3px rgba(66,66,66,.75);;
}
 .type:focus {
     outline:none;
}
</style>
