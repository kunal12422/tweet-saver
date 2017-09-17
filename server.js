import express from "express";
import bodyParser from "body-parser";


import morgan from 'morgan'
import config from './core/config/config.dev'
import api from './routes/api.route'
import connectToDb from './db/connect'

const port = config.serverPort;


// connectToDb();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

// app.use('/api', api);

//Index route
app.get('/', (req, res) => {
    res.send('Invalid endpoint!');
});

app.listen(port, () => {
    console.log('server started - ', port);
});

