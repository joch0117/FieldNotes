import { reactive } from 'vue'

export const sessionState = reactive({
  isAuthenticated: false,
  profile: {
    username: 'Utilisateur',
    email: 'utilisateur@exemple.com'
  }
})

export const loginSession = () => {
  sessionState.isAuthenticated = true
}

export const logoutSession = () => {
  sessionState.isAuthenticated = false
}

export const updateProfile = ({ username, email }) => {
  sessionState.profile.username = username
  sessionState.profile.email = email
}

export const resetProfile = () => {
  sessionState.profile.username = 'Utilisateur'
  sessionState.profile.email = 'utilisateur@exemple.com'
}
