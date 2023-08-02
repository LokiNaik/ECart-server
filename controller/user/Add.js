const connectToMongoDB = require('../../db')
const bcrypt = require('bcryptjs')  
const saltRounds = 10


exports.newUserRegistration = async (req, res) => {
    const {email , password } = req.body
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    console.log('hashedPassword', hashedPassword)
    const client = connectToMongoDB()
    try{
        const db = (await client).db()
        const result = db.collection('users').insertOne({email:email, password :hashedPassword})
        res.status(200).send('User Created')
    } catch(err){
        res.status(500).json({message: 'Server Error!'})
    } 
}