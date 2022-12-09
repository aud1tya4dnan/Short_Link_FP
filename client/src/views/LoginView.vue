<template>
  <div class="title">
    <h1>AWIK.WOK</h1>
  </div>
  <div class="loginview">
    <h1 style="text-align: center">Login</h1>
    <div class="username">
      <label>Email</label><br />
      <input type="text" placeholder="Email" v-model="email" class="type"/>
    </div>
    <div class="pass">
      <label class="password">Password</label><br />
      <input type="password" placeholder="Password" v-model="password" class="type"/>
    </div>
    <div class="sub"> 
      <button type="submit" class="submit" @click="postUser()">Submit</button>
    </div>
    <p>Dont have an account? <RouterLink to="/register">Register</RouterLink> </p> 
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      status: false,
    };
  },
  methods: {
    async postUser() {
      let res = await axios.post(`http://localhost:8000/api/login`, {
                email: this.email,
                password: this.password,
            })
            .then((response) => {
              const uid = response.data
              //res.send(uid)
                console.log(uid)
                // localStorage.setItem('uid', uid)
                // this.$router.push({path: `/dashboard/${uid}`})
                console.log(response)
                if(response == "auth/wrong-password" && response == "auth/missing-email") {
                  this.$router.push("/")
                }
                else {
                  localStorage.setItem('uid', uid)
                  this.$router.push({path: `/dashboard/${uid}`})
                }
            })
            .catch((error) => {
                console.log(error)
                this.$router.push("/")
            })
    },
    // checkForm() {
    //   let email = this.email;
    //   let password = this.password;
    //   if (email == "" || password == "") {
    //     alert("Ada yang kosong ngab")
    //     return false;
    //   }
    //   else{
    //     this.postUser();
    //   }
    // }
  },
  beforeMount() {
  },
};

</script>

<style scoped>
.loginview{
    border: 3px solid;
    border-radius: 10%;
    padding: 30px 30px;
}
.username{
    margin-bottom: 10px;
  }
  .pass{
    margin-bottom: 15px;
  }

  p{
    margin-bottom: 15px;
  }
  .sub{
    margin-bottom: 10px;
  }
.submit {
	box-shadow: 3px 4px 0px 0px #8a2a21;
	background:linear-gradient(to bottom, #c62d1f 5%, #f24437 100%);
	background-color: "#c62d1f";
	border-radius: 25px;
	border: 3px solid #d02718;
	display: inline-block;
	cursor: pointer;
	color:#ffffff;
	font-family:Impact;
	font-size: 12px;
	padding: 4px 100px;
	text-decoration: none;
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
.title {
  display: flex;
}
</style>
