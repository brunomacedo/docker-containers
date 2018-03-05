const express = require('express');
const restful = require('node-restful');
const server = express();
const mongoose = restful.mongoose;
const bodyParser = require('body-parser');
const cors = require('cors');

// Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://database/mydb');

// server.get('/', (req, res) => res.send('Backend'));

// Middlewares
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(cors());

// ODM - Maping objects
const Client = restful.model('Client', {
  name: { type: String, required: true }
});

// Rest API -> From restful.mongoose
Client.methods(['get', 'post', 'put', 'delete']);

// Validate methods
Client.updateOptions({new: true, runValidators: true});

// Routes
Client.register(server, '/clients');

// Start server
server.listen(3000);
