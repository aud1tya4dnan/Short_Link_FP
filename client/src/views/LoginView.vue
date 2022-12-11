<template>
  <!-- <div class="title">
    <h1>AWIK.WOK</h1>
  </div>
  <div class="loginview">
    <h1>Login</h1>
    <div class="username">
      <label>Email</label><br />
      <input type="text" placeholder="Email" v-model="email" class="type"/>
    </div>
    <div class="pass">
      <label class="password">Password</label><br />
      <input type="password" placeholder="Password" v-model="password" class="type"/>
    </div>
    <div class="sub"> 
      <button type="submit" class="submit" @click="postUser()" v-on:keyup.enter="postUser()">Submit</button>
    </div>
    <p>Dont have an account? <RouterLink to="/register">Register</RouterLink> </p> 
  </div> -->
  <div class="vh-100 d-flex justify-content-center align-items-center">
            <div class="col-md-4 p-5 shadow-sm border rounded-3">
                <h2 class="text-center mb-4 text-primary">Login Form</h2>
                
                    <div class="mb-3" v-on:keyup.enter="postUser()">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control border border-primary" id="exampleInputPassword1" v-model="password"/>
                    </div>
                    <div class="d-grid">
                        <button class="btn btn-primary" type="submit" @click="postUser()" >Login</button>
                    </div>
                
                <div class="mt-3">
                    <p class="mb-0  text-center">Don't have an account? <RouterLink to="/register" class="text-primary fw-bold">Sign Up</RouterLink></p>
                </div>
            </div>
        </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      //status: false,
    };
  },
  mounted(){
  },
  methods: {
    async postUser() {
      let res = await axios.post(`http://localhost:8000/api/login`, {
                email: this.email,
                password: this.password,
            })
            .then((response) => {
                const uid = response.data
                console.log(uid)
                localStorage.setItem('uid', uid)
                this.$router.push({path: `/dashboard/${uid}`})
                console.log(response)
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

};



</script>
