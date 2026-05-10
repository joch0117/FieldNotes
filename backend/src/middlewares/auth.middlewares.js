const jwt = require('jsonwebtoken')

const authMiddleware = (req,res,next)=> {
    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).json({
            message: 'Token manquant.'
        })
    }

    const [scheme, token] = authHeader.split(' ')

    if (scheme !== 'Bearer' || !token) {
      return res.status(401).json({
        message: 'Format de token invalide.'
      })
    }

    try{
        const decodeToken = jwt.verify(token,process.env.JWT_SECRET)

        req.user = decodeToken

        next()
    }catch {
        return res.status(401).json({
            message:'Token invalide.'
        })
    }

}

module.exports = authMiddleware
