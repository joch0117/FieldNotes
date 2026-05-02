const router = require('express').Router()
const authController = require('../controllers/authController')
const authMiddleware = require('../middlewares/auth.middlewares')


//route register
router.post('/register',authController.register)
//route login
router.post('/login',authController.login)

router.get('/me',authMiddleware,(req,res)=>{
    res.json({
        message:'Utilisateur auth',
        user:req.user
    })
})



module.exports= router