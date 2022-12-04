<template>
  <div class="registerview">
    <h1 style="text-align: center">Register</h1>   
    <div class="username">
        <label>Email</label><br />
        <input type="text" placeholder="email" v-model="email" class="type"/>
    </div>
    <div class="password"></div>
        <label class="password">Password</label><br />
        <input type="password" placeholder="password" v-model="password" class="type"/>
        <div class="submit">
            <button type="submit" @click="postUser(email, password)">Submit</button>
      </div>
      <p>Have an account? <RouterLink to="/">Login</RouterLink></p>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
    return {
        email: '',
        password: '',
    };
    },
    methods: {
    async postUser(email, password) {
            const res = await axios.post(`http://localhost:3000/api/register`, {
                email: this.email,
                password: this.password
            })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(response)
                alert("Registration Success")
                this.$router.push('/')
            })
    }
    
    },
    mounted() {
        // this.getMethod();
},
};
</script>

<style scoped>
    .registerview {
        border: 3px solid;
        border-radius: 10%;
        padding: 30px 30px;
    }
    .username{
        margin-bottom: 10px;
    }
    .password{
        margin-bottom: 15px;
    }
    .submit{
        margin-top: 25px;
    }
</style>
