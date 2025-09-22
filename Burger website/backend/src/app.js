const express = require('express')
const connectToDb = require('./db/db')
const cors = require('cors')
const foodRoutes = require('./routes/food.routes')

connectToDb()

const app = express()
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use('/api/food',foodRoutes)


module.exports = app