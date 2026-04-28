const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credential: true
}))

app.use(express.json())

app.get('/api/health', (req,res)=>{
    res.json({ message:'API FieldNotes OK' })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, '0.0.0.0', ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})