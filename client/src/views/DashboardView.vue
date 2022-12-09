<template>

  <div class="inputlink">
    <input type="text" placeholder="www.google.com" class="type"/>
    <button type="submit" class="submit">Submit</button>
  </div>
  <div>
    <h5 class="title">AWIK.WOK/<input type="text" placeholder="alias" class="alias"/></h5>
  </div>
  <div class="list" >
    <div class="box" v-for="link in links" :key="link">
      <h3 class="content">{{ link.slink }}</h3>
      <h3 class="content">{{ link.flink }}</h3>
      <h3 class="content">{{ link.uses }}</h3>
    </div>
  </div>  

  <button @click="Logout()">Sign Out</button>
</template>

<script>
import { initializeApp } from "firebase/app";
import { signOut, getAuth } from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyAlrXLHO4N6iwQnftLRDq52zSzmUwU43Lc",
  authDomain: "expressjs-fp.firebaseapp.com",
  projectId: "expressjs-fp",
  storageBucket: "expressjs-fp.appspot.com",
  messagingSenderId: "35720847152",
  appId: "1:35720847152:web:f030a0e97b6aef23f332f5"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth()

import axios from 'axios'



export default {
    data(){
      return {
        links: [],
      }
    },
    methods: {
      async Logout() {
        try {
          signOut(auth)
          .then(() => {
            localStorage.removeItem('uid')
            this.$router.push("/")
          })
        }
        catch(error){
          console.log(error)
        }
      },
      async getLink() {
        const res = await axios.get('http://localhost:8000/link')
          .then((response)=>{
            this.links.push(...response.data)
          })
      },
    },
    mounted() {
      this.getLink();
    }
  }
</script>

<style>
  .title {
    font-size: 50px;
  }
  .inputlink input{
    margin: 15px 1rem;
  }
  .box {
    display: flex;
    margin-bottom: 15px;
  }
  .content{
    margin-right: 50px;
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
	font-size:12px;
	padding:4px 27px;
	text-decoration:none;
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
     padding: 4px 10px;
     font-size: 17px;
     border-width: 1px;
     border-color: #ff00e4;
     background-color: #ffffff;
     color: #000000;
     border-style: groove;
     border-radius: 12px;
     box-shadow: 0px 0px 3px rgba(66,66,66,.75);
}
 .type:focus {
     outline:none;
}
.alias{
     padding: 10px;
     font-size: 25px;
     border-width: 1px;
     border-color: #ff00e4;
     background-color: #ffffff;
     color: #000000;
     border-style: groove;
     border-radius: 12px;
     box-shadow: 0px 0px 3px rgba(66,66,66,.75);
}
 .alias:focus {
     outline:none;
}
</style>
