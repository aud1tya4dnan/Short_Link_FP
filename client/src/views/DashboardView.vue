<template>
  <h1 class="title">AWIKWOK Shortener Service</h1>
  <div class="inputlink">
    <input type="text" placeholder="url"/>
    <button type="submit">Submit</button>
  </div>
  <div class="list" v-for="item in items" :key="item">
    <div class="box">
      <h3 class="content">{{ item.slink }}</h3>
      <h3 class="content">{{ item.link }}</h3>
      <h3 class="content">{{ item.uses }}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        items: [
          {
            slink: 'awik.wok',
            link: 'www.youtube.com/watch?v=YOEHN2g5vFU',
            uses: 1
          },
          {
            slink: 'awik.wok',
            link: 'www.youtube.com/watch?v=YOEHN2g5vFU',
            uses: 1
          },
        ]
      }
    },
    methods: {

    },
    mounted() {
      
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
