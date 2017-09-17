import path from "path";

let config = {};


config.dbHost = process.env.dbHost || 'localhost';
config.dbPort = process.env.dbPort || '27017';
config.dbName = process.env.dbName || 'twitter-saver';
config.serverPort = process.env.serverPort || 3000;

export default config;

