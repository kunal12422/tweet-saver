import express from "express";
import bodyParser from "body-parser";

import morgan from 'morgan'
import config from './core/config/config.dev'
import api from './routes/api.route'
import connectToDb from './db/connect'
const port = config.serverPort;
const app = express();


connectToDb();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.use('/api', api);




app.listen(port, () => {
    console.log('server started - ', port);
});

