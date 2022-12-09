import express from "express";
import bodyParser from "body-parser";
import { async } from "@firebase/util";
import { db, auth } from "./firebase.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

const router = express.Router();

router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/api/register", async(req, res) => {
    let email = req.body.email
    let password = req.body.password
    try{
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential => {
            res.send(userCredential)
        }))
    }
    catch(err){
        console.log(err)
    }
})

router.post("/api/link", async(req,res) => {

})

router.get("/link", async(req,res) => {
    try{
        db.collection("link")
        .get()
        .then((querySnapshot)=>{
            let links = [];
            let id;
            querySnapshot.forEach((doc)=>{
                id = doc.id;
                links.push({id, ...doc.data()})
            })
            res.send(links)
        })
    }
    catch(err) {
        console.log(err)
    }
})

router.post("/api/login", async(req, res, next) => {
    let email = req.body.email
    let password = req.body.password
    try{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const uid = user.uid;

            res.send(uid)
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            res.send(errorMessage)
    });
    }
    catch(err){
        console.log(err)
    }
})



export default router;