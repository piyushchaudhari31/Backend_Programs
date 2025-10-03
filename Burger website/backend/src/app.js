const express = require('express')
const connectToDb = require('./db/db')
const cors = require('cors')
const foodRoutes = require('./routes/food.routes')
const userRoutes = require('./routes/user.routes')
const cookiparcer = require('cookie-parser')

connectToDb()

const app = express()
app.use(express.json())

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(cookiparcer())
app.use('/api/food',foodRoutes)
app.use('/auth',userRoutes)


module.exports = app