const express = require('express')
const cors = require('cors')

const authRoutes = require('./routes/auth.routes')
const observationRoutes = require('./routes/observation.routes')
const { authRateLimit, securityHeaders } = require('./middlewares/security.middlewares')

const app = express()

const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:5173'

app.use(cors({
    origin: allowedOrigin,
    credentials:true
}))

app.use(express.json())
app.use(securityHeaders)


app.use('/api/auth',authRateLimit,authRoutes)
app.use('/api/observations', observationRoutes)

module.exports = app
