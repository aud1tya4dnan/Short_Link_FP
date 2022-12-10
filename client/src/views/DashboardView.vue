<template>
  <button @click="Logout()">Sign Out</button>

  <div class="inputlink">
    <input type="text" placeholder="www.google.com" class="type" v-model="flink"/>
  </div>

  <div>
    <h5 class="title">AWIK.WOK/<input type="text" placeholder="alias" class="alias"/></h5>
    <button type="submit" class="submit"  @click="postLink()">Submit</button>
  </div>
  
  <div class="edit" v-show="editbar">
    <input type="text" placeholder="new slink" v-model="newLinks.newslink" />
    <input type="text" placeholder="new url" v-model="newLinks.newflink"/>
    <button type="submit" @click="editLink()">Submit Edit</button>
  </div>

  <div class="list" v-for="link in links" :key="link">
    <div class="box" v-if="link.uid == userID">
      <h3 class="content">{{ link.slink }}</h3>
      <h3 class="content">{{ link.flink }}</h3>
      <h3 class="content">{{ link.uses }}</h3>
      <button class="content"> Edit </button>
      <button class="content" @click="deleteLink(link.id)"> Delete </button>
    </div>
  </div>  

  

</template>

<script>
import { initializeApp } from "firebase/app";
import { signOut, getAuth } from "firebase/auth"
import { auth } from '../firebase.js'

import axios from 'axios'

export default {
  data(){
    return {
      links: [],
      flink: "",
      userID: "",
      newLinks: [{
        newflink: '',
        newslink: '',
      }],
      editbar: false,
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
      this.userID = localStorage.getItem('uid')
      console.log(this.userID)
      const res = await axios.get('http://localhost:8000/link')
        .then((response)=>{
          this.links.push(...response.data)
          console.log(response.data)
        }
      )
    },
    async postLink() {
      const res = await axios.post('http://localhost:8000/link', {
        flink: this.flink,
        slink: "random",
        uid: this.userID,
        uses: 1,
      })
      .then((response) =>{
        console.log(response.data)
        location.reload()
      })
    },
    async deleteLink(id) {
      const res = await axios.delete('http://localhost:8000/link/' + id)
      .then((response)=>{
        console.log(response.data)
        location.reload()
      })
    },
    async editLink() {
      const res = await axios.patch('http://localhost:8000/link/' + id)
      .then((response) => {
        // this.links.push(...response.data)
        console.log(response.data)
      })
    }
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
  button {
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
  button:hover {
	background:linear-gradient(to bottom, #f24437 5%, #c62d1f 100%);
	background-color:#f24437;
}
button:active {
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
