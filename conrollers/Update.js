const connectToMongoDB = require('../db')
const mongo = require('mongodb')

exports.update = async (req, res) => {
    try {
        
        const objectId = new mongo.ObjectId(req.params.id)
        const name = req.body.name
        const department = req.body.department
        // console.log('id', id, 'name', name, 'department', department)
        const client = await connectToMongoDB()
        const db = client.db()
        const result = await db.collection('Student').updateOne({ _id : objectId }, { $set: { name: name, department: department } })
        // console.log('result', result)
        return res.send(result)
    } catch (err) {
        console.log('User Document not found!')
    }
}