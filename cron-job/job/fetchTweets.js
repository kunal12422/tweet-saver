import Twitter from "twitter";
import _ from "lodash";
import Tweet from "../../models/tweet.model";
import connectToDb from '../../db/connect';

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY || 'xyxMM7z1Moao1IP18RjHSuKk1',
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET || 'ptvGY9ize6Mad0HpWLE50YqTAdyGx0XwAzsyGaSv7BNJpcEPrU',
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY|| '1596319728-TbVookxgw9Z93oRHWK9P8kb2d8Fyuh9kPVLVBlq',
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || 'CUidonlhV5pH4XfQYiE57eE7iAChePIiQqItJyz8ivG9r'
  });

export default function(agenda){
    agenda.define('fetch tweets',(job,done)=>{
        console.log("----------------------------------------------");
        connectToDb();
        client.get('search/tweets',{q:'bitcoin+blockchain'},(err,tweets,response)=>{
            
                let allTweets = tweets["statuses"];

                _.forEach(allTweets, (item)=>{
                   

                        Tweet.findOne({id:item["id"]}).then((err,tweet)=>{
                            if(!err){
                                if(!tweet){
                                     tweet = new Tweet({
                                        created_at:item["created_at"],
                                        id: item["id"],
                                        text:item["text"],
                                        user_id:item["user"]["id"],
                                        user_name:item["user"]["screen_name"],
                                        user_description:item["user"]["description"],
                                        retweet_count:item["retweet_count"]
                                    });
                                }
                                tweet.save() 
                                 .then(saveobj =>{
                                    console.log("saved.. ");
                                 })
                                .catch((err)=>{
                                    throw new Error(err);
                                });
                            }
             
                });
                
        });
        done();
    });
        console.log("----------------------------------------------");
        console.log("----------------------------------------------");
        console.log("----------------------------------------------");
    });
};