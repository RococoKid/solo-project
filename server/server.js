const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;
//json parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//This is where we add a question
app.post('/', /*some middleware here*/, (req, res) => res.status(200).json({}))

//This is where we retrieve a randomly selected question
app.get('/', /*some middleware here*/, (req, res) => res.status(200).json({}))

//catchall route for 404
app.use('/', (req, res, next) => {
    res.status(404).send('Sorry can\'t find that!');
  });

//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });