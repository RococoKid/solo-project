const express = require('express');
const app = express();
const db = require('../models/model');


const controller = {};
controller.createSession = (req, res, next) => {
    //take new session name from req, add to Sessions table
    const addNewSession = `INSERT INTO Sessions (SessionName) VALUES (${req.body.session})`;
    db.query(addNewSession)
        .then(data => {
            console.log(data);
            return next();
        })
        .catch(err => next({
            log: 'session was not successfully created',
            status: 404, 
            message: {err: 'session was not successfully created'}
        }))
    };

//this is where we identify the session ID from the session name
controller.getSessionID = (req, res, next) => {
//identify session name from req.body
//identify corresponding session id from sessions table
    console.log('this is the request body', req.body);
    const getSessionID = `SELECT SessionID FROM Sessions WHERE SessionName = '${req.body.session}'`;
    db.query(getSessionID) //we don't know what this is!!!!!! we need to test!!!!
        .then(data => {
            //console.log('this is what we get back from our query', data);
            res.locals.sessionID = data.rows[0].sessionid;
            console.log('this should be the session id:', res.locals.sessionID);
            return next();
        })
        .catch(err => next({
            log: 'could not get session ID from session name',
            status: 404,
            message: {err: 'could not get session ID from session name'}
        }))
};

controller.createQuestion = (req, res, next) => {
    //insert new record into questions table, 
        //where question is from the req.body
        //and session id is what we described above
    const addNewQuestion = `INSERT INTO Questions (Question, SessionID) VALUES ('${req.body.question}', '${res.locals.sessionID}')`;
    db.query(addNewQuestion)
        .then(data => {
            console.log(data);
            return next();
        })
        .catch(err => next({
            log: 'question was not successfully created',
            status: 404, 
            message: {err: 'question was not successfully created'}
        }))
    };

controller.selectQuestion = (req, res, next) => {
    //identify session id from session name

    //get random record with that id
    //const findQuestion = `SELECT Question FROM Questions WHERE SessionID = ${req.body.sessionID}`;
    //serve up that question
    db.query(findQuestion)
        .then(data => {
            console.log(data);
            return next();
        })
        .catch(err => next({
            log: 'question was not successfully selected',
            status: 404, 
            message: {err: 'question was not successfully selected'}
        }))
    }; 

module.exports = controller;