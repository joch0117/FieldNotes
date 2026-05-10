import { logoutSession, sessionState } from '../stores/sessionStore'

const API_URL = import.meta.env.VITE_API_URL

const parseJsonSafe = async (response) => {
  try {
    return await response.json()
  } catch {
    return {}
  }
}

const buildAuthHeaders = () => {
  const token = sessionState.token || localStorage.getItem('token')
  const headers = {
    'Content-Type': 'application/json'
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  return headers
}

const handleApiError = async (response, fallbackMessage) => {
  const data = await parseJsonSafe(response)

  if (response.status === 401) {
    logoutSession()
    throw new Error('Session expirée. Merci de vous reconnecter.')
  }

  throw new Error(data.message || fallbackMessage)
}

export const registerUser = async (username, email, password) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, email, password })
  })

  if (!response.ok) {
    await handleApiError(response, 'Impossible de créer le compte.')
  }

  return parseJsonSafe(response)
}

export const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })

  const data = await parseJsonSafe(response)

  if (!response.ok) {
    throw new Error(data.message || 'Connexion impossible.')
  }

  if (!data.token) {
    throw new Error('Token absent')
  }

  return data
}

export const updateAccount = async ({ username, email, password }) => {
  const response = await fetch(`${API_URL}/auth/me`, {
    method: 'PATCH',
    headers: buildAuthHeaders(),
    body: JSON.stringify({ username, email, password })
  })

  if (!response.ok) {
    await handleApiError(response, 'Impossible de mettre à jour le compte.')
  }

  return parseJsonSafe(response)
}

export const deleteAccount = async () => {
  const response = await fetch(`${API_URL}/auth/me`, {
    method: 'DELETE',
    headers: buildAuthHeaders()
  })

  if (!response.ok) {
    await handleApiError(response, 'Impossible de supprimer le compte.')
  }

  return parseJsonSafe(response)
}
