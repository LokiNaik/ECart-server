const bodyParser = require('body-parser')
const express = require('express')
const mongo = require('mongodb')
const passport = require('passport')
// const session = require('express-session')

const app = express()
const cors = require('cors')



const getStudents = require('./routes/getAPI')
const deleteUserRoute = require('./routes/delete')
const userAdd = require('./routes/addroute')
const userUpdate = require('./routes/updateUser')
const auth = require('./routes/auth')


app.use(bodyParser.json())
app.use(cors())
// app.use(express.urlencoded({extended: true}))
// app.use(session({secret:'loki1234', resave:false, saveUninitialized: false}))
// app.use(passport.initialize())
// app.use(passport.session())


// app.use('/api', auth)
app.use('/api' ,getStudents)
// app.use('/api' ,getStudents)
app.use('/api', userAdd)
app.use('/api', deleteUserRoute)
app.use('/api' ,userUpdate)



app.listen(8000, () => {
    console.log('server started on port 8000!')
})

