<template>
  <div class="vh-100 d-flex justify-content-center align-items-center text-white">
            <div class="col-md-4 p-5 shadow-sm border rounded-3">
                <h1 class="text-center mb-4 text-primary">Login Form</h1>
                
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email" @keyup.enter="postUser()">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control border border-primary" id="exampleInputPassword1" v-model="password" @keyup.enter="postUser()">
                    </div>
                    <div class="d-grid">
                        <button class="btn btn-primary" type="submit" @click="postUser()">Login</button>
                        <p style="color: red">{{ validation }}</p>
                    </div>
                
                <div class="mt-3">
                    <p class="mb-0  text-center">Don't have an account? <RouterLink to="/register" class="text-primary fw-bold">Sign Up</RouterLink></p>
                </div>
            </div>
        </div>
</template>

<script>
import { createSimpleExpression } from "@vue/compiler-core";
import axios from "axios";

export default {
  data() {
    return {
      validation: "",
      uid: null,
    };
  },
  beforeMount(){
    // this.checkuid();
  },
  methods: {
    // checkuid(){
    //   const uid = localStorage.getItem(uid);
    //   if(uid != null){
    //     this.$router.push('/dashboard');
    //   }
    // },
    async postUser() {
      let res = await axios.post(`http://139.180.209.43:8000/api/login`, {
                email: this.email,
                password: this.password,
            })
            .then((response) => {
                // console.log(response.data)
                if(response.data == "auth/invalid-email"){
                  this.validation = "*invalid email"
                }
                else if(response.data == "auth/missing-email"){
                  this.validation = "*please enter your email"
                }
                else if(response.data == "auth/wrong-password"){
                  this.validation = "*invalid password"
                }
                else if(response.data == "auth/user-not-found"){
                  this.validation = "*user not found"
                }
                else{
                  const uid = response.data
                  // console.log(uid)
                  localStorage.setItem('uid', uid)
                  this.userID = uid;
                  this.$router.push({path: `/dashboard`})
                }
            })
            .catch((error) => {
                console.log(error)
            })
    },
  },
};



</script>
