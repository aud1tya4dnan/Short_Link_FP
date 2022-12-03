const express = require("express")
const app = express()
const cors = require("cors")
// const { application } = require("express")
const db = require('../config/database')
const port = 8122

app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log("App listening to Port 8122")
})

// app.post("/api/register", async(req, res) => {
//     try{
//         console.log(req.body)
//         res.send("berhasil ditambah")
//         await user.add({
//             username: req.body.username,
//             password: req.body.password
//         })
//         res.send({
//             message: "data telah terkirim"
//         })
//     }
//     catch(err) {
//         console.log(err)
//     }
// })

app.post("/api/register", async(req,res) => {
    try {
        Firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        then(() => {
            alert('Successfully registered! Please login.');
            this.$router.push('/');
        })
        .catch(error => {
            alert(error.message);
        });
    }
    catch(err) {
        console.log(err)
    }
})




// app.get("/api", async(req, res) => {
//     res.send("Hello World")
// })
