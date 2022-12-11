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

router.post("/link", async(req,res) => {
    try {
        var flink = req.body.flink;
        var slink = req.body.slink;
        var uid = req.body.uid;
        var uses = req.body.uses;
    
        db.collection("link").add({
          flink: flink,
          slink: slink,
          uid: uid,
          uses: uses,
        });
    
        res.send({
          message: "Data berhasil disimpan",
        });
      } catch (error) {
        res.send({
          message: "Data gagal disimpan",
        });
      }
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

router.post("/api/login", async(req, res) => {
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

router.delete("/link/:id", async(req, res) => {
    try {
        db.collection("link")
        .doc(req.params.id)
        .delete()
        .then(() => {
            res.send("delete berhasil")
        })
    }
    catch(error){
        res.send(error)
    }
})

router.patch("/link/:id", async(req,res) => {
    try{
        db.collection("link")
        .doc()
        .update({
            flink: req.body.newflink,
            slink: req.body.newslink
        })
        .then(() => {
            res.send("Berhasil Di update")
        })
    }
    catch(error) {
        res.send(error.message)
    }
})

export default router;