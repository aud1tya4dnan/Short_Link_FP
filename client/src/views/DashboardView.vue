<template>
  <div>
    <h1 class="title">AWIK.WOK /</h1>
    <input type="text" placeholder="alias" class="alias"/>
  </div>
  <div class="inputlink">
    <input type="text" placeholder="url" class="type"/>
    <button type="submit" class="submit">Submit</button>
  </div>
  <div class="list" >
    <div class="box" v-for="link in links" :key="link">
      <h3 class="content">{{ link.slink }}</h3>
      <h3 class="content">{{ link.flink }}</h3>
      <h3 class="content">{{ link.uses }}</h3>
    </div>
  </div>
  <RouterLink to="/">Sign Out</RouterLink>
  
</template>

<script>
import axios from 'axios'

export default {
    data(){
      return {
        links: [],
      }
    },
    methods: {
      async getLink() {
        const res = await axios.get('http://localhost:8000/link')
          .then((response)=>{
            this.links.push(...response.data)
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
     padding: 20px 5px;
     font-size: 30px;
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
