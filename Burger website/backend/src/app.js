const express = require('express')
const connectToDb = require('./db/db')

const foodRoutes = require('./routes/food.routes')

connectToDb()

const app = express()
app.use('/api/food',foodRoutes)


module.exports = app