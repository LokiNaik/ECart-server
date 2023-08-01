const connectToMongoDB = require('../db')
const mongo = require('mongodb')

// exports.update = async (req, res) => {
//     try {
//         const objectId = req.params.id
//         console.log('objectId in Update', objectId)
//         const name = req.body.name
//         const department = req.body.department
//         // const filter = { '_id' : new mongo.ObjectId(req.params.id)}
//         const filter = {_id:objectId}
//         const update = { $set :{name:name, department: department}}

//         const client = await connectToMongoDB()
//         const db = client.db()
//         const result = await db.collection('Student').updateOne(filter,update, (err, res)=>{
//             console.log('response : ', res)
//             res.send('Updated document')
//         }).catch((err)=>{
//             console.log('Error in updation')
//             err.status(500).json({error:'Failed to updated'})
//         })
//         // console.log('result', result)
//         return res.send(result)
//     } catch (err) {
//         console.log('err in Update : ', err)
//         console.log('User Document not found!')
//     }
// }


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
    // res.send('Updated User' , updateResult)
    
}