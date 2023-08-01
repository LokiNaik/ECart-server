const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { findUserByUsername } = require('../model/user')
const { findAdminByUsername } = require('../model/admin')
const { SECURE_KEY } = require('../config')


async function loginUser(req, res) {
    const { username, password } = req.body
    try {
        const user = await findUserByUsername(username)
        if(!user){
            return res.status(401).json({ message: 'Invalid credentials' })
        }
        const isPasswordVaild = await bcrypt.compare(password, user.password)
        if(!isPasswordVaild){
            return res.status(401).json({message:'invalid credentails'})
        }

        const token = jwt.sign({id:user._id, role:user.role}, SECURE_KEY, {expiresIn: '1h'} )
        return res.json({token})

    }catch(err){
        console.log("error")
        res.status(500).json({message:'server error'})
    }
}

async function loginAdmin(req, res){

    const{ username, password}= req.body;
    try {
        const admin = await findAdminByUsername(username)
        if(!admin){
            return res.status(401).json({ message: 'Invalid credentials' })
        }
        const isPasswordVaild = await bcrypt.compare(password, admin.password)
        if(!isPasswordVaild){
            return res.status(401).json({message:'invalid credentails'})
        }

        const token = jwt.sign({id:admin._id, role:admin.role}, SECURE_KEY, {expiresIn: '1h'} )
        return res.json({token})

    }catch(err){
        console.log("error")
        res.status(500).json({message:'server error'})
    }
}

module.exports = {
    loginUser,
    loginAdmin
}