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

    };
controller.selectQuestion = (req, res, next) => {

    }; 

module.exports = controller;