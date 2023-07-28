const express = require('express')
const { getApi, getUserById } = require('../conrollers/GetAPI')

var getStudents = express.Router()

getStudents.get('/getStudents', getApi)

getStudents.get('/getStudentById/:id', getUserById)

module.exports = getStudents