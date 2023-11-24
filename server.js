const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')


const getStudents = require('./routes/student/getAPI')
const deleteUserRoute = require('./routes/student/delete')
const userAdd = require('./routes/student/addroute')
const updateStudent = require('./routes/student/updateUser')


const addNewUser = require('./routes/user/addUserRoute')
const getUser = require('./routes/user/getUser')
const productListFromAdmin = require('./routes/user/getProducts')
const addToCart = require('./routes/user/addToCart')
const cart = require('./routes/user/addToCart')




app.use(bodyParser.json())
app.use(cors())

//adminRoutes
// app.use('/api', admin)


//userRoutes
app.use('/api', getUser)
app.use('/api', addNewUser)
app.use('/api', productListFromAdmin)

app.use('/api', cart)


//StudentRoutes
app.use('/api', getStudents)
app.use('/api', userAdd)
app.use('/api', deleteUserRoute)
app.use('/api', updateStudent)






app.listen(8000, () => {
    console.log('server started on port 8000!')
})

