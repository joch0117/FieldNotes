const db = require('../database/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
    
    const [existingUsers] =  await db.query(
        'SELECT id FROM users WHERE email = ?',
        [email]
    )

    if (existingUsers.length > 0){
        return res.status(409).json({
            message: 'Cet email est déjà utilisé'
        })
    }

    const hashedPassword = await bcrypt.hash(password,10)

    await db.query(
        'INSERT INTO users (username, email, password_hash) VALUES (?,?,?)',
        [username, email, hashedPassword]
    )
    res.status(201).json({
        message: 'Utilisateur créé avec succès.'
    })

    }catch (error){
        res.status(500).json({
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
    
    const [users] =  await db.query(
        'SELECT id, username, email, password_hash FROM users WHERE email = ?',
        [email]
    )

    if (users.length === 0){
        return res.status(401).json({
            message: 'Email ou mot de passe incorrect.'
        })
    }

    const user = users[0]

    const isPasswordValid = await bcrypt.compare(password, user.password_hash)

    if(!isPasswordValid){
        return res.status(401).json({
            message:'Email ou mot de passe incorrect.'
        })
    }
    const token = jwt.sign(
        {
            id:user.id,
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn:process.env.JWT_EXPIRES_IN
        }
    )

    return res.status(200).json({
        message: 'Connexion réussie',
        token,
        user:{
            id:user.id,
            username:user.username,
            email: user.email
        }
    })


    }catch(error){
        res.status(500).json({
            message: 'erreur serveur'
        })
    }
}


module.exports = {
    register,
    login
}