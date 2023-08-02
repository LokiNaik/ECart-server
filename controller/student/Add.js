const connectToMongoDB = require('../../db')

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


