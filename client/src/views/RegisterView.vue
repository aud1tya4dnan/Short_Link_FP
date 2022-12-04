<template>
  <div class="registerview">
    <h1 style="text-align: center">Register</h1>   
    <div class="username">
        <label>Email</label><br />
        <input type="text" placeholder="email" v-model="email"/>
    </div>
    <div class="password"></div>
        <label class="password">Password</label><br />
        <input type="password" placeholder="password" v-model="password"/>
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
    // async getMethod() {
    //     const res = await axios
    //     .get("http://localhost:8122/api")
    //     .catch((err) => console.log(err));
    //     console.log(res);
    // },
    async postUser(email, password) {
        
            const res = await axios.post(`http://localhost:8122/api/register`, {
                email: email,
                password: password
            })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    
    },
    mounted() {
        // this.getMethod();
},
};
</script>

<style>
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
