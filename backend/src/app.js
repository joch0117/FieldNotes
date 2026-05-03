const express = require('express')
const cors = require('cors')

const authRoutes = require('./routes/auth.routes')
const observationRoutes = require('./routes/observation.routes')

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}))

app.use(express.json())


app.use('/api/auth',authRoutes)
app.use('/api/observations', observationRoutes)

module.exports = app