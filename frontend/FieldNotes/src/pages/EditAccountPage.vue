<template>
  <section class="account-page">
    <form class="account-card" @submit.prevent="saveAccount">
      <header class="account-head">
        <p class="eyebrow">Compte</p>
        <h1>Modifier mon compte</h1>
        <p>Met à jour tes informations personnelles.</p>
      </header>

      <div class="form-grid">
        <BaseInput id="username" v-model="username" label="Nom d'utilisateur" />
        <BaseInput id="email" v-model="email" label="Email" type="email" />
        <BaseInput id="password" v-model="password" label="Nouveau mot de passe" type="password" />
      </div>

      <FormMessage :message="errorMessage" type="error" />
      <FormMessage :message="successMessage" type="success" />

      <div class="actions">
        <RouterLink to="/dashboard" class="back-link">Annuler</RouterLink>
        <BaseButton label="Enregistrer" type="submit" />
      </div>

      <section class="danger-zone">
        <h2>Supprimer mon compte</h2>
        <p>Cette action est irréversible et te déconnectera immédiatement.</p>

        <div v-if="showDeleteConfirm" class="confirm-delete">
          <p>Confirmer la suppression du compte ?</p>
          <div class="confirm-actions">
            <BaseButton label="Oui, supprimer mon compte" @click="handleDeleteAccount" />
            <BaseButton label="Annuler" variant="secondary" @click="showDeleteConfirm = false" />
          </div>
        </div>

        <BaseButton v-else label="Supprimer mon compte" variant="secondary" @click="showDeleteConfirm = true" />
      </section>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '../components/BaseButton.vue'
import BaseInput from '../components/BaseInput.vue'
import FormMessage from '../components/FormMessage.vue'
import { deleteAccount, updateAccount } from '../services/userService'
import { logoutSession, resetProfile, sessionState, updateProfile } from '../stores/sessionStore'

const router = useRouter()
const username = ref(sessionState.user?.username ?? '')
const email = ref(sessionState.user?.email ?? '')
const password = ref('')
const errorMessage = ref('')
const successMessage = ref('')
const showDeleteConfirm = ref(false)

const saveAccount = async () => {
  try {
    const result = await updateAccount({
      username: username.value,
      email: email.value,
      password: password.value
    })

    updateProfile({
      username: result.user?.username ?? username.value,
      email: result.user?.email ?? email.value
    })

    password.value = ''
    errorMessage.value = ''
    successMessage.value = result.message || 'Compte mis à jour.'
  } catch (error) {
    successMessage.value = ''
    errorMessage.value = error.message
  }
}

const handleDeleteAccount = async () => {
  try {
    await deleteAccount()
    logoutSession()
    resetProfile()
    router.push('/')
  } catch (error) {
    showDeleteConfirm.value = false
    successMessage.value = ''
    errorMessage.value = error.message
  }
}
</script>

<style scoped>
.account-page {
  min-height: 72vh;
  display: grid;
  place-items: center;
  padding: 0.5rem 0;
}

.account-card {
  width: min(100%, 840px);
  border: 1px solid var(--border);
  border-radius: 22px;
  background: linear-gradient(180deg, #fbfaf7 0%, var(--surface) 45%);
  box-shadow: var(--shadow);
  padding: 1.6rem;
  display: grid;
  gap: 1.3rem;
}

.account-head {
  display: grid;
  gap: 0.4rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid var(--border);
}

.eyebrow {
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-soft);
}

.account-head p {
  color: var(--text-soft);
}

.form-grid {
  display: grid;
  gap: 1rem;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
}

.back-link {
  color: var(--text-soft);
  text-decoration: none;
  font-weight: 600;
}

.danger-zone {
  border-top: 1px solid var(--border);
  padding-top: 1rem;
  display: grid;
  gap: 0.7rem;
}

.danger-zone h2 {
  font-size: 1.15rem;
}

.danger-zone p {
  color: var(--text-soft);
}

.confirm-delete {
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface-muted);
  padding: 1rem;
  display: grid;
  gap: 0.7rem;
}

.confirm-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

@media (max-width: 640px) {
  .account-card {
    padding: 1.1rem;
    border-radius: 16px;
  }

  .actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
