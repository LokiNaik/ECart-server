const bcrypt = require('bcryptjs')
const {createAdmin} = require('../model/admin')

async function createAdmin(req, res) {
    const {username, password} = req.body

    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const userId = await createUser(username, hashedPassword, 'user')
        return res.json({userId})
    } catch (error) {
        console.log('error', error)
        res.status(500).json({message: 'Server error'})
    }
}

async function getAdmin(req, res) {
  
}

module.exports = {
    createUser,
    getUser
}
