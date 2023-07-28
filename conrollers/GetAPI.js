const express = require('express')
const app = express()
const connectToMongoDB = require('../db')
const mongodb= require('mongodb')
const { json } = require('body-parser')

exports.getApi = async (req, res) => {
    const client = await connectToMongoDB()
    const db = client.db()
    const data = await db.collection('Student').find().toArray()
    res.send(JSON.stringify(data))
} 


exports.getUserById = async (req , res) => {
    const id = new mongodb.ObjectId(req.params.id)
    const client = await connectToMongoDB()
    const db = client.db()
    const data = await db.collection('Student').findOne({_id : id})
    console.log('data', data)
    res.send(JSON.stringify(data))
}