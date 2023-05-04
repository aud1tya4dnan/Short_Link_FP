<template>
  <div class="vh-100 d-flex justify-content-center align-items-center">
    <div class="col-md-4 p-5 shadow-sm border rounded-3">
                <h2 class="text-center mb-4 text-primary">Register Form</h2>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email" @keyup.enter="postUser()">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control border border-primary" id="exampleInputPassword1" v-model="password" @keyup.enter="postUser()">
                    </div>
                    <div class="d-grid">
                        <input type="button" class="btn btn-primary" @click="postUser()" value="Register">
                    </div>
                </form>
                <div class="mt-3">
                    <p class="mb-0  text-center">Allready have an account? <RouterLink to="/" class="text-primary fw-bold">Login</RouterLink></p>
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
    methods: {
    async postUser() {
            let res = await axios.post(`http://139.180.209.43:8000/api/register`, {
                email: this.email,
                password: this.password
            })
            .then((response) => {
                // console.log(response)

                this.$router.push('/')
            })
            .catch((error) => {
                console.log(response)
            })
    }
    
    },
    mounted() {
    },
};
</script>

