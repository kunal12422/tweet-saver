
import express from "express";
import tweetController from "../controllers/tweet.controllers"
const router = express.Router()
router.get('/',(req,res)=>{
    res.send("working");
});

router.get('/user/:user', (req, res) => {
    tweetController.getByUser(req, res);
});

router.get('/sort_rt', (req, res) => {
    tweetController.sortByReTweet(req, res);
});

export default router;