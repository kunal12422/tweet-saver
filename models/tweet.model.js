import mongoose from 'mongoose';

const tweetSchema = mongoose.Schema({
        
        created_at:{type:Date},
        id: {type: Number, unique: true, index: true}, //[id]
        text:{type:String},
        user_id:{type: Number}, //[user][id]
        user_name:{type: String}, // [user][screen_name]
        user_description:{type:String}, //[user][description]
        retweet_count:{type:Number},//
        inserted_at:{type:Date, default:Date.now()}
    },
 {collection : 'tweets'});

 let TweetModel = mongoose.model('Tweet', tweetSchema);

export default TweetModel;