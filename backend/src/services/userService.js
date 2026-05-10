const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userRepository = require('../repositories/user.repository')

const registerUser = async (username, email, password) => {
  const existingUser = await userRepository.findUserByEmail(email)

  if (existingUser) {
    throw new Error('EMAIL_ALREADY_EXISTS')
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  await userRepository.createUser(username, email, hashedPassword)
}

const loginUser = async (email, password) => {
  const user = await userRepository.findUserByEmail(email)

  if (!user) {
    throw new Error('INVALID_CREDENTIALS')
  }

  const isPasswordValid = await bcrypt.compare(password, user.password_hash)

  if (!isPasswordValid) {
    throw new Error('INVALID_CREDENTIALS')
  }

  const token = jwt.sign(
    {
      id: user.id,
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

const updateUser = async (userId, username, email, password) => {
  const currentUser = await userRepository.findUserById(userId)

  if (!currentUser) {
    throw new Error('USER_NOT_FOUND')
  }

  const normalizedUsername = typeof username === 'string' ? username.trim() : ''
  const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : ''
  const normalizedPassword = typeof password === 'string' ? password : ''

  if (!normalizedUsername || !normalizedEmail) {
    throw new Error('REQUIRED_FIELDS')
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(normalizedEmail)) {
    throw new Error('INVALID_EMAIL')
  }

  if (normalizedUsername.length < 3 || normalizedUsername.length > 100) {
    throw new Error('INVALID_USERNAME_LENGTH')
  }

  const existingUser = await userRepository.findUserByEmail(normalizedEmail)
  if (existingUser && existingUser.id !== Number(userId)) {
    throw new Error('EMAIL_ALREADY_EXISTS')
  }

  let passwordHash = currentUser.password_hash
  if (normalizedPassword) {
    if (normalizedPassword.length < 6 || normalizedPassword.length > 100) {
      throw new Error('INVALID_PASSWORD_LENGTH')
    }
    passwordHash = await bcrypt.hash(normalizedPassword, 10)
  }

  await userRepository.updateUserById(userId, normalizedUsername, normalizedEmail, passwordHash)

  return {
    id: currentUser.id,
    username: normalizedUsername,
    email: normalizedEmail
  }
}

const deleteUser = async (userId) => {
  const result = await userRepository.deleteUserById(userId)

  if (!result.affectedRows) {
    throw new Error('USER_NOT_FOUND')
  }
}

module.exports = {
  registerUser,
  loginUser,
  updateUser,
  deleteUser
}
