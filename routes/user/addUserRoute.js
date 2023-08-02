const express = require('express');
const { newUserRegistration } = require('../../controller/user/Add');

const addNewUser = express.Router()

addNewUser.post('/register', newUserRegistration)

module.exports = addNewUser