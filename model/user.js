const bcrypt = require('bcryptjs')
const connectToMongoDB = require('../db')

async function createUser(user, password, role) {
    const client = connectToMongoDB()
    const db = (await client).db()
    const user = {
        username,
        password,
        role
    }
    const result = await db.collection('users').insertOne(user)
    return result.insertedId
}
async function findUserByUsename(username) {
    const client = connectToMongoDB()
    const db = (await client).db()
    const user = await db.collection('users').findOne({ username })
    return user
}


module.exports = {
    createUser,
    findUserByUsename,
}
