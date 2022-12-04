import express from "express";
import bodyParser from "body-parser";
import { async } from "@firebase/util";

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

export default router;