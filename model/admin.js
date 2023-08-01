const bcrypt = require('bcryptjs')
const connectToMongoDB = require('../db')

async function createAdmin(user, password, role) {
    const client = connectToMongoDB()
    const db = (await client).db()

    const admin = {
        username,
        password,
        role
    }
    const result = await db.collection('admins').insertOne(admin)
    return result.insertedId
}
async function findAdminByUsername(username) {
    const client = connectToMongoDB()
    const db = (await client).db()
    const admin = await db.collection('admins').findOne({ username })
    return admin
}


module.exports = {
    createAdmin,
    findAdminByUsername,
}
