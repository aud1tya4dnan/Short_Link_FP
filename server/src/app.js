const express = require("express")
const app = express()
const cors = require("cors")
const { application } = require("express")
const port = 8122

app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log("App listening to Port 8122")
})

app.post("/api/user", async(req, res) => {
    try{
        console.log(req.body)
        res.send("berhasil ditambah")
        await user.add({
            username: req.body.username,
            password: req.body.password
        })
        res.send({
            message: "data telah terkirim"
        })
    }
    catch(err) {
        console.log(err)
    }
})



// app.get("/api", async(req, res) => {
//     res.send("Hello World")
// })
