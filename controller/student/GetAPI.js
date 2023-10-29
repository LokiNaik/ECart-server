const express = require('express')
const app = express()
const connectToMongoDB = require('../../db')
const objId = require('mongodb').ObjectId
const { json } = require('body-parser')
const e = require('cors')
const bcrypt = require('bcryptjs')


exports.getApi = async (req, res) => {
    const client = await connectToMongoDB()
    const db = (await connectToMongoDB()).db()
    const data = await db.collection('Student').find().toArray()
    res.send(JSON.stringify(data))
}


exports.getUserById = async (req, res) => {
    // console.log('request',req.params)
    const id = req.params.userId
    //console.log('iddd',id)
    const client = await connectToMongoDB()
    const db = client.db()
    const data = await db.collection('Student').findOne({ _id: new objId(id) })
    res.send(JSON.stringify(data))
    console.log('data:', data)

}




