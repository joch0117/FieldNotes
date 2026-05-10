const router = require('express').Router()
const authController = require('../controllers/authController')
const authMiddleware = require('../middlewares/auth.middlewares')

// route register
router.post('/register', authController.register)
// route login
router.post('/login', authController.login)

// route update account (JWT)
router.patch('/me', authMiddleware, authController.updateAccount)
// route delete account (JWT)
router.delete('/me', authMiddleware, authController.deleteAccount)

module.exports = router
