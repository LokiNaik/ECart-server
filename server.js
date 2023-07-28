const bodyParser = require('body-parser')
const express = require('express')
const mongo = require('mongodb')
const app = express()
const cors = require('cors')

const getStudents = require('./routes/getAPI')
const deleteUserRoute = require('./routes/delete')
const userAdd = require('./routes/addroute')
const userUpdate = require('./routes/updateUser')


app.use(bodyParser.json())
app.use(cors())




app.use('/api' ,getStudents)
app.use('/api' ,getStudents)
app.use('/api', userAdd)
app.use('/api', deleteUserRoute)
app.use('/api' ,userUpdate)


app.delete(`/delete/:id`, async (req, res) => {
   
})

app.listen(8000, () => {
    console.log('server started on port 8000!')
})

