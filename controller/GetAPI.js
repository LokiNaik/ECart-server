const express = require('express')
const app = express()
const connectToMongoDB = require('../db')
const objId = require('mongodb').ObjectId
const { json } = require('body-parser')
const e = require('cors')
const bcrypt = require('bcryptjs')  
const saltRounds = 10

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


exports.getUserByEmailPassword = async (req, res) => {
   
    const email = req.body.email
    const password = req.body.password
    const client = connectToMongoDB()
    const db = (await client).db()

    try { 
        const user = await db.collection('users').findOne({ email })
        const pass = user.password
        const isPasswordMatch = await bcrypt.compare(password, pass)
        if (isPasswordMatch){
            res.status(200).json({ message: 'user valid' })
        } else {
            res.status(200).json({ message: 'wrong password' })
        }
    }catch (error ){
        res.status(200).json({ message: 'Invalid User' })
    }
}


        // .then((response) => {
        //     if (response) {
        //         res.status(200).json({ message: 'user valid' })
        //     } else {
        //         res.status(200).json({ message: 'Invalid user' })
        //     }
        // }).catch((err)=>{
        //     res.status(200).json({ message: 'Invalid User from GetApi' })
        // })
    
// }

 // await db.collection('users').findOne({ email })
    // .then( async (response)=>{
    //     const userId = response.email
    //     console.log('user id', userId)
    //     if (userId === email) {
    //         await db.collection('users').findOne({ userId, password })
    //         .then((resp) => {
    //            const pass = resp.password
    //            console.log('pass', pass) 
    //             if(userId === email && pass ===password ){
    //                 resp.status(200).json({ message: 'user valid' })
    //             }else{
    //                 resp.status(200).json({ message: 'invalid password' })
    //             }
    //         })            
    //     } else{
    //         res.status(200).json({ message: 'wrong username' })
    //     }
    // }).catch((err)=>{
    //     res.status(200).json({ message: 'Invalid User from GetApi' })
    // })


// , (req, response) => {
    //     console.log(response.body.email)
    //     
    // })
    // console.log('result', result)
    // console.log('result', result)       
    // }
    // catch(err){
    //     res.status(500).json({message : 'server error'})
    // }
    // .then((res) => {
    //     if(!res==null || undefined){
    //      res.send('User Found')
    //     }
    //     else{
    //      res.send('User not Found!')
    //     }
    // }).catch((err)=>{
    //     console.log(err)
    //     res.status(500).send('Server Error!')
    // })
