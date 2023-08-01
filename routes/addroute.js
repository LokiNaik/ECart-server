const express = require('express');
const { addStudent , newUserRegistration } = require('../controller/Add');
var userAdd = express.Router()

userAdd.post('/insert', addStudent)
userAdd.post('/register' , newUserRegistration)

module.exports = userAdd;
