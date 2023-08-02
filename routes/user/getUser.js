const express = require('express')
const { getUserByEmailPassword } = require('../../controller/user/getUser')


var getUser = express.Router()

getUser.post('/getUser', getUserByEmailPassword)

module.exports = getUser