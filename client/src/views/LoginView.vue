<template>
  <div class="loginview">
    <h1 style="text-align: center">Login</h1>
    <div class="username">
      <label>Username</label><br />
      <input type="text" placeholder="username" />
    </div>
    <div class="password">
      <label class="password">Password</label><br />
      <input type="password" placeholder="password" />
    </div>
    <div class="submit"> 
      <button type="submit">Submit</button>
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
  },
  mounted() {
    this.getMethod();
  },
};
</script>

<style>
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
  .submit{
    margin-top: 25px;
  }
</style>
