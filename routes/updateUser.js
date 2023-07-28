const express = require('express')
const { update } = require('../conrollers/Update')
const userUpdate = express.Router()

userUpdate.put('/update/:id', update)

module.exports = userUpdate