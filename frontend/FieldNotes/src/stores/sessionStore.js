import { reactive } from 'vue'

const TOKEN_KEY = 'token'
const USER_KEY = 'user'

export const sessionState = reactive({
  isAuthenticated: false,
  token: null,
  user: null
})

export const initSessionFromStorage = () => {
  const token = localStorage.getItem(TOKEN_KEY)
  const rawUser = localStorage.getItem(USER_KEY)

  sessionState.token = token
  sessionState.isAuthenticated = Boolean(token)

  if (rawUser) {
    try {
      sessionState.user = JSON.parse(rawUser)
    } catch {
      sessionState.user = null
    }
  } else {
    sessionState.user = null
  }
}

export const loginSession = ({ token, user }) => {
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(USER_KEY, JSON.stringify(user ?? null))

  sessionState.token = token
  sessionState.user = user ?? null
  sessionState.isAuthenticated = true
}

export const logoutSession = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_KEY)

  sessionState.token = null
  sessionState.user = null
  sessionState.isAuthenticated = false
}

export const updateProfile = ({ username, email }) => {
  const currentUser = sessionState.user ?? {}
  const updatedUser = {
    ...currentUser,
    username,
    email
  }

  sessionState.user = updatedUser
  localStorage.setItem(USER_KEY, JSON.stringify(updatedUser))
}

export const resetProfile = () => {
  sessionState.user = null
  localStorage.removeItem(USER_KEY)
}
