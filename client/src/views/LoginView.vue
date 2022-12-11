<template>
  <div class="vh-100 d-flex justify-content-center align-items-center">
    <div class="col-md-4 p-5 shadow-sm border rounded-3">
      <h2 class="text-center mb-4 text-primary">Login Form</h2>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control border border-primary" id="exampleInputPassword1" v-model="password">
        </div>
        <div class="d-grid">
          <input type="button" class="btn btn-primary btnSeccion" @click="postUser()" value="Login">
        </div>
      </form>
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
