import Twitter from "twitter";

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY || 'xyxMM7z1Moao1IP18RjHSuKk1',
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET || 'ptvGY9ize6Mad0HpWLE50YqTAdyGx0XwAzsyGaSv7BNJpcEPrU',
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY|| '1596319728-TbVookxgw9Z93oRHWK9P8kb2d8Fyuh9kPVLVBlq',
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || 'CUidonlhV5pH4XfQYiE57eE7iAChePIiQqItJyz8ivG9r'
  });

export default function(agenda){
    agenda.define('fetch tweets',(job,done)=>{
        client.get('search/tweets',{q:'bitcoin'},(err,tweets,response)=>{
                console.log(tweets);
        });
    })
};