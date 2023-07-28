const express = require('express');
const { addStudent } = require('../conrollers/Add');
var userAdd = express.Router()

userAdd.post('/insert', addStudent)

module.exports = userAdd;
