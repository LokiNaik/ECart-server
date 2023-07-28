const { MongoClient } = require('mongodb')


const path = 'mongodb://localhost:64000/StudentDB'

const option = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}

async function connectToMongoDB() {
    try {
        const client = await MongoClient.connect(path, option)
        console.log('Connected to MongoDB')
        return client
    } catch (error) {
        console.log('Error in connecting to MongoDB')
        throw error
    }
}

module.exports = connectToMongoDB

// const client = new mongodb.MongoClient(path)
// client.connect()
// const db = client.db()

// module.exports = {
//     db
// }