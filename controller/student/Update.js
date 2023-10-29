const connectToMongoDB = require('../../db')
const mongo = require('mongodb')

exports.update = async (req, res) => {
    let id = req.params.id
    console.log('id', id)
    const {name , department} = req.body
    const client = connectToMongoDB()
    const db = (await client).db()
    const updateResult  =  db.collection('Student').updateOne({_id : new mongo.ObjectId(id)},{$set : {name: name, department: department}})
    .then(res.status(200).send('updateResult'))
    .catch((err) => {
        res.status(500).send('Error!')
    })  
}