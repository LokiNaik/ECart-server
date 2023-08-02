const express = require('express')
const { getApi, getUserById, getUserByEmailPassword } = require('../../controller/student/GetAPI')

var getStudents = express.Router()
// const getUserEmailPassword = express.Router()

getStudents.get('/getStudents', getApi)

getStudents.get('/getStudentById/:userId([0-9a-fA-F]{24})', getUserById)



module.exports = getStudents