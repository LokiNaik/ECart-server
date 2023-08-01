exports.postApiController = (req, res) => {
    res.send('In post Api controller')
}



// const express = require('express')
// const bodyParser = require('body-parser')
// const app = express()
// const mongo = require('mongodb')
// app.use(bodyParser.json())

// const path = 'mongodb://localhost:64000/StudentDB'
// const client = new mongo.MongoClient(path)
// client.connect((err) => {
//     if (!err) {
//         console.log('connected')
//     }
//     else {
//         console.log('error')
//     }
// })

// exports.postAPI = async (req , res) => {
//     console.log(req)
//     const name = req
//         const department = req.body.department
//         const db = client.db()
//         await db.collection('Student').insertOne({ name: name, department: department })
//         .then((res) => {
//             console.log('Inserted')
//         }).catch((e) => {
//             console.log(e)
//         })
// }

