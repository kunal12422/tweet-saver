import Agenda from "agenda";
import fetch from './job/fetchTweets';

export default function(cb){
    const mongoConnectionString = "mongodb://127.0.0.1:27017/agenda";
    const agenda = new Agenda({db: {address: mongoConnectionString}});
    fetch(agenda);

    agenda.on('ready',()=>{
        console.log('Agenda ready');
        cb(null,agenda);
    });

    function graceful() {
        agenda.stop(function() {
            process.exit(0);
        });
    }
    process.on('SIGTERM', graceful);
    process.on('SIGINT' , graceful);

    agenda.on('start',(job)=>{
        console.log(new Date(),  " Job "+ job.attrs.name+ " started");
    })
    agenda.on('fail',(job)=>{
        console.log(new Date(), " Job:"+ job.attrs.name+" failed with error: " + err.message);
    })
};