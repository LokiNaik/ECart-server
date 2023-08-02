const express = require('express')
const connectToMongoDB = require('../../db')
const bcrypt = require('bcryptjs')



exports.getUserByEmailPassword = async (req, res) => {

    const email = req.body.email
    const password = req.body.password
    const client = connectToMongoDB()
    const db = (await client).db()

    try {
        const user = await db.collection('users').findOne({ email })
        const pass = user.password
        const isPasswordMatch = await bcrypt.compare(password, pass)
        if (isPasswordMatch) {
            res.status(200).json({ message: 'user valid' })
        } else {
            res.status(200).json({ message: 'wrong password' })
        }
    } catch (error) {
        res.status(200).json({ message: 'Invalid User from getUser' })
    }
}