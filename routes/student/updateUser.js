    const express = require('express')
    const { update } = require('../../controller/student/Update')
    const updateStudent = express.Router()

    updateStudent.put('/update/:id', update)

    module.exports = updateStudent