const express = require('express');
const app = express();
const db = require('../models/model');


const controller = {};
controller.createSession = (req, res, next) => {
    //take new session name from req, add to Sessions table
    const addNewSession = `INSERT INTO Sessions (SessionName) VALUES ('testsesh')`;
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

controller.createQuestion = (req, res, next) => {
    const addNewQuestion = `INSERT INTO Questions (Question) VALUES ('testQuestion')`;
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
    //identify session id
    //find number of questions w/ that session id
    //use that to generate random number
    //use random number to identify question
    //serve up that question
    }; 

module.exports = controller;