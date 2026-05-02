const userService = require('../services/userService')


const register = async (req, res)=>{
    try{
    const body = req.body || {}
    const username = body.username?.trim() || ''
    const rawEmail = body.email?.trim() || ''
    const email = rawEmail.toLowerCase() || ''
    const password = body.password || ''

    if(!username || !email || !password){
        return res.status(400).json({
            message:'Tous les champs sont obligatoires.'
        })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            message: 'Email invalide.'
    })
    }
    
    await userService.registerUser(username, email, password)


    return res.status(201).json({
        message: 'Utilisateur créé avec succès.'
    })

    }catch (error){
        if(error.message === 'EMAIL_ALREADY_EXISTS'){
            return res.status(409).json({
                message: 'Cet email est déjà utilisé'
            })
        }
        return res.status(500).json({
            message: 'Erreur serveur'
        })
    }
}

const login = async (req, res)=>{
    try{
    const body = req.body || {}
    const rawEmail = body.email?.trim() || ''
    const email = rawEmail.toLowerCase() || ''
    const password = body.password || ''

    if( !email || !password){
        return res.status(400).json({
            message:'Tous les champs sont obligatoires.'
        })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            message: 'Email invalide.'
    })
    }
    
    const result = await userService.loginUser(email, password)

    return res.status(200).json({
        message: 'Connexion réussie',
        token: result.token,
        user: result.user
    })


    }catch(error){
        if(error.message === 'INVALID_CREDENTIALS'){
            return res.status(401).json({
                message: 'email ou mot de passe incorrect.'
            })
        }
        return res.status(500).json({
            message: 'Erreur serveur'
        })
    }
}


module.exports = {
    register,
    login
}