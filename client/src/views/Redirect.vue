<template>
    <div class="container mx-auto px-72">
        <div class="warning">
            wait
        </div>
    </div>
</template>

<script>
    import { db } from '../firebase.js'
    import { query, where, collection, doc, onSnapshot } from "firebase/firestore";
    import axios from 'axios'

    export default {
        mounted() {
            this.check()
        },
        data() {
            return {
                url: window.location.href,
            }
        },
        methods: {
            async check() {
                const redLink = await axios.get("http://139.180.209.43:8000/api/redirectLink", {
                    params: { url: this.url }
                })
                .then((response)=>{
                    window.location.replace(response.data)
                })
            }
        }
    }
</script>
