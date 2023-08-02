const express = require('express')
const { deleteUser } = require('../../controller/student/Delete')
const deleteUserRoute = express.Router()

deleteUserRoute.delete('/delete/:id', deleteUser)

module.exports = deleteUserRoute