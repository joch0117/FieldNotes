const db = require('../database/db')


const findUserByEmail = async (email) =>{
    const [users] = await db.query(
        'SELECT id, username, email, password_hash FROM users WHERE email = ?',
        [email]
    )
    return users[0]  || null
}

const createUser = async (username, email, hashedPassword) =>{
    const [result] = await db.query(
        'INSERT INTO users (username, email, password_hash) VALUES (?,?,?)',
        [username, email, hashedPassword]
    )
    return result
}

module.exports = {
    findUserByEmail,
    createUser
}