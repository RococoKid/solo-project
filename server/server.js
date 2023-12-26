const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;
//json parser
//catchall route for 404
//global error handler


//This is where we add a question
app.post('/', /*some middleware here*/, (req, res) => res.status(200).json({}))

//This is where we retrieve a randomly selected question
app.get('/', /*some middleware here*/, (req, res) => res.status(200).json({}))