const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userRepository = require('../repositories/user.repository')

const registerUser = async (username, email, password) => {
        
    const existingUser = await userRepository.findUserByEmail(email)
        
            if (existingUser){
                throw new Error('EMAIL_ALREADY_EXISTS')
            }
            const hashedPassword = await bcrypt.hash(password, 10)

            await userRepository.createUser(username, email, hashedPassword)
}

const loginUser = async (email, password) => {
    const user = await userRepository.findUserByEmail(email)

    if(!user){
        throw new Error('INVALID_CREDENTIALS')
    }

    const isPasswordValid = await bcrypt.compare(password,user.password_hash)

    if (!isPasswordValid){
        throw new Error('INVALID_CREDENTIALS')
    }

    const token = jwt.sign(
        {
            id:user.id,
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    )
    return {
        token,
        user: {
            id: user.id,
            username: user.username,
            email: user.email
        }
    }
}

module.exports = {
    registerUser,
    loginUser
}