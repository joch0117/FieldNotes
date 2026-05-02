const router = require('express').Router()

router.get('/test', (req, res) => {
    res.json({ message: 'Observation routes OK' })
})

module.exports = router