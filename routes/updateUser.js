    const express = require('express')
    const { update } = require('../controller/Update')
    const userUpdate = express.Router()

    userUpdate.put('/update/:id', update)

    module.exports = userUpdate