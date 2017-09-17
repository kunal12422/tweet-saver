import Tweet from '../models/tweet.model'


const controller = {};

controller.getByUser =  (req, res) => {
    let user = req.params["user"];
    Tweet
        .find({"user_name":user})
        .then((docs)=>{
            res.status(200).json({
                "message":docs.length
            });
        })
        .catch((err)=>{
            throw new Error(err);
        })
}
controller.sortByReTweet = (req,res)=>{
    Tweet
        .find({})
        .sort("-retweet_count")
        .then((twts)=>{
            res.status(200).json({
                "message":twts
            });
            
        })
}


export default controller;

