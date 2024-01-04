const path = require('path');
const express = require('express');
const controller = require('./controllers/controller');
const app = express();
const PORT = 3000;
//json parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//this is where we create a session
app.post('/createSession', controller.createSession, (req, res) => res.status(200).json({}));
//This is where we add a question
app.post('/createQuestion', controller.getSessionID, controller.createQuestion, (req, res) => res.status(200).json({}))

//This is where we retrieve a randomly selected question
app.get('/selectQuestion', controller.selectQuestion, (req, res) => res.status(200).json({}))

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
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));