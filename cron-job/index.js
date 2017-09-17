import Scheduler from "./scheduler";

    Scheduler((err,agenda)=>{
        agenda.start();
        agenda.every('one minute','fetch tweets');
    });
