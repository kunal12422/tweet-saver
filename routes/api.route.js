
import express from "express";
import tweetController from "../controllers/tweet.controllers"
const router = express.Router()
router.get('/',(req,res)=>{
    res.send("working");
});
// router.get('/start',(req,res)=>{
//     createAgenda();
// });
// router.get('/:user', (req, res) => {
//     tweetController.getByUser(req, res);
// });

// router.get('/retweetCount', (req, res) => {
//     tweetController.getByRetweet(req, res);
// });

export default router;