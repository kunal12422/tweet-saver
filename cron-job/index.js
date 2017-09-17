import Scheduler from "./scheduler";

    Scheduler((err,agenda)=>{
        agenda.every('30 minutes','fetch tweets');
        agenda.start();
    });
