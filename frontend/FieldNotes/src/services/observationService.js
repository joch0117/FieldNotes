import { logoutSession, sessionState } from '../stores/sessionStore'

const API_URL = import.meta.env.VITE_API_URL

const parseJsonSafe = async (response) => {
  try {
    return await response.json()
  } catch {
    return {}
  }
}

const getAuthHeaders = () => {
  const token = sessionState.token || localStorage.getItem('token')

  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
}

const normalizeNote = (note) => ({
  id: note.id,
  title: note.title,
  category: note.category,
  content: note.content,
  createdAt: note.created_at ?? note.createdAt,
  location: note.location ?? 'Non précisé',
  tags: Array.isArray(note.tags) ? note.tags : []
})

const assertOk = async (response, fallbackMessage) => {
  if (response.ok) return

  const data = await parseJsonSafe(response)

  if (response.status === 401) {
    logoutSession()
    throw new Error('Session expirée. Merci de vous reconnecter.')
  }

  throw new Error(data.message || fallbackMessage)
}

export const getObservations = async () => {
  const response = await fetch(`${API_URL}/observations/`, {
    method: 'GET',
    headers: getAuthHeaders()
  })

  await assertOk(response, 'Impossible de récupérer les notes.')
  const data = await parseJsonSafe(response)

  const observations = Array.isArray(data.observations) ? data.observations : []
  return observations.map(normalizeNote)
}

export const createObservation = async ({ title, category, content }) => {
  const response = await fetch(`${API_URL}/observations/create`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify({ title, category, content })
  })

  await assertOk(response, 'Impossible de créer la note.')
  return parseJsonSafe(response)
}

export const updateObservation = async (id, { title, category, content }) => {
  const response = await fetch(`${API_URL}/observations/${id}`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
    body: JSON.stringify({ title, category, content })
  })

  await assertOk(response, 'Impossible de modifier la note.')
  return parseJsonSafe(response)
}

export const deleteObservation = async (id) => {
  const response = await fetch(`${API_URL}/observations/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders()
  })

  await assertOk(response, 'Impossible de supprimer la note.')
  return parseJsonSafe(response)
}
