require('dotenv').config()
const express = require('express')
const connectToDb = require('./db/db')
const cookieParcer = require('cookie-parser')
const authRoute = require('./routes/auth.routes')
const cors = require('cors')


connectToDb()
const app = express()
app.use(express.json())
app.use(cookieParcer())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use('/auth',authRoute)



module.exports = app