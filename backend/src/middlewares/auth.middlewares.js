const jwt = require('jsonwebtoken')

const authMiddleware = (req,res,next)=> {
    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).json({
            message: 'Token manquant.'
        })
    }

    const token = authHeader.split(' ')[1]

    try{
        const decodeToken = jwt.verify(token,process.env.JWT_SECRET)

        req.user = decodeToken

        next()
    }catch (error){
        console.log('JWT ERROR:', error.message)
        return res.status(401).json({
            message:'Token invalide.'
        })
    }

}

module.exports = authMiddleware