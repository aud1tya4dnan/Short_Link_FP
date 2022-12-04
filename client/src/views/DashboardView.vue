<template>
  <h1 class="title">AWIKWOK Shortener Service</h1>
  <div class="inputlink">
    <input type="text" placeholder="url"/>
    <button type="submit">Submit</button>
  </div>
  <div class="list" >
    <div class="box" v-for="link in links" :key="link">
      <h3 class="content">{{ link.slink }}</h3>
      <h3 class="content">{{ link.flink }}</h3>
      <h3 class="content">{{ link.uses }}</h3>
    </div>
  </div>
  
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
        const res = await axios.get('http://localhost:8122/link')
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
    text-align: center;
  }
  td {
    text-align: center;
  }
  .inputlink input {
    margin: 25px 1rem;
  }
  .box {
    display: flex;
  }
  .content{
    margin-right: 50px;
  }
  .box{
    margin-bottom: 15px;
  }
</style>
