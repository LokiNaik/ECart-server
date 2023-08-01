const connectToMongoDB = require('../db')
const bcrypt = require('bcryptjs')  
const saltRounds = 10


exports.addStudent = async (req, res) =>{
    const name = req.body.name
    const department = req.body.department
    console.log('name', name)
    console.log('department', department)

    const client = await connectToMongoDB()
    try{
        let db = client.db()
        const result = await db.collection('Student').insertOne({ name: name, department: department })
        // .then( res.send('User inserted'))
        // .catch((e) => {
        //     console.log(e)
        // })
        return res.send(result)
    } catch(error){
        console.log(error)
        } 
}

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
