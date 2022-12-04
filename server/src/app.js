const express = require("express")
const app = express()
const cors = require("cors")
const { application } = require("express")
const db = require('../config/database')
const getAuth = require("firebase/auth")
const createUserWithEmailAndPassword = require("firebase/auth")


const port = 8122

const link = db.collection("link")


app.use(express.json())
app.use(cors())



app.listen(port, () => {
    console.log("App listening to Port 8122")
})

app.post("/api/register", async(req, res, next) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
})

app.get("/link", async(req, res) => {
    try{
        let links=[]
        link.get().then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                let id = doc.id
                links.push({id, ...doc.data()})
            })
            res.send(links)
        })
    }
    catch(err){
        console.log(err)
    }
})




// app.post("/register", async(req,res) => {
//     try {
//         const auth = new auth()
//         .auth()
//         .createUserWithEmailAndPassword(this.email, this.password)
//         then(() => {
//             alert('Successfully registered! Please login.');
//             this.$router.push('/');
//         })
//         .catch(error => {
//             alert(error.message);
//         });
//     }
//     catch(err) {
//         console.log(err)
//     }
// })


// app.get("/api", async(req, res) => {
//     res.send("Hello World")
// })


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