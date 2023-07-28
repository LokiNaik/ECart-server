const express = require('express')
const { deleteUser } = require('../conrollers/Delete')
const deleteUserRoute = express.Router()

deleteUserRoute.delete('/delete/:id', deleteUser)

module.exports = deleteUserRoute