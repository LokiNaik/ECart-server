const express = require('express');
const { addStudent, newUserRegistration } = require('../../controller/student/Add');
var userAdd = express.Router()

userAdd.post('/insert', addStudent)

module.exports = userAdd;

