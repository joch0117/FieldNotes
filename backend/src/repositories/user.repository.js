const db = require('../database/db')

const findUserById = async (id) => {
  const [users] = await db.query(
    'SELECT id, username, email, password_hash FROM users WHERE id = ?',
    [id]
  )
  return users[0] || null
}

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

const updateUserById = async (id, username, email, passwordHash) => {
  const [result] = await db.query(
    'UPDATE users SET username = ?, email = ?, password_hash = ? WHERE id = ?',
    [username, email, passwordHash, id]
  )
  return result
}

const deleteUserById = async (id) => {
  const [result] = await db.query(
    'DELETE FROM users WHERE id = ?',
    [id]
  )
  return result
}

module.exports = {
    findUserById,
    findUserByEmail,
    createUser,
    updateUserById,
    deleteUserById
}
