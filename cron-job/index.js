import Scheduler from "./scheduler";

    Scheduler((err,agenda)=>{
        agenda.every('5 seconds','fetch tweets');
        agenda.start();
    });
