const express = require('express');
const restful = require('node-restful');
const server = express();
const mongoose = restful.mongoose;

// Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://database/mydb');

server.get('/', (req, res) => res.send('Backend'));
server.listen(3000);
