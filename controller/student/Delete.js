const  connectToMongoDB = require('../../db')
const mongo = require('mongodb')

exports.deleteUser = async ( req, res ) => {
    const client = await connectToMongoDB()
    const db = client.db()
    try {
        let iD = req.params.id;
        console.log('id', iD)
          const result = await db.collection('Student').deleteOne({ "_id": new mongo.ObjectId(iD) })
          .then(res.send('Deleted user'))
                return result
    } catch (error) {
        console.log('error', error)
    }
}

// exports.deleteController = (req, res) => {
//     res.send("In delete controller")
// }

// exports.deleletItem = async (req, res) => {
//     const path = 'mongodb://localhost:64000/StudentDB'
// const client = new mongo.MongoClient(path)
// client.connect((err) => {
//     if (!err) {
//         console.log('connected')
//     }
//     else {
//         console.log('error')
//     }
// }
// )
//     let id = req.params.id;
//     const db = client.db()
//     await db.collection('Student').deleteOne({ "_id": new mongo.ObjectId(id) })
//         .then(res.send('User deleted!'))
// }




