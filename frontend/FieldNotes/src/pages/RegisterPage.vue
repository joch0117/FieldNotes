<template>
  <section class="auth-page">
    <div class="auth-card">
      <h1>Créer un compte</h1>
      <p>Lancez votre carnet personnel en quelques secondes.</p>
      <form class="auth-form" @submit.prevent="handleRegister">
        <BaseInput id="name" v-model="name" label="Nom" placeholder="Votre nom" />
        <BaseInput id="email" v-model="email" label="Email" type="email" placeholder="vous@exemple.com" />
        <BaseInput id="password" v-model="password" label="Mot de passe" type="password" placeholder="••••••••" />
        <FormMessage :message="errorMessage" type="error" />
        <FormMessage :message="successMessage" type="success" />
        <BaseButton label="Créer mon compte" type="submit" block />
      </form>
      <p class="switch">Déjà inscrit ? <RouterLink to="/login">Se connecter</RouterLink></p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseInput from '../components/BaseInput.vue'
import BaseButton from '../components/BaseButton.vue'
import FormMessage from '../components/FormMessage.vue'

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')
const errorMessage = ref('')
const successMessage = ref('')

const handleRegister = () => {
  if (!name.value || !email.value || !password.value) {
    errorMessage.value = 'Tous les champs sont obligatoires.'
    successMessage.value = ''
    return
  }

  successMessage.value = 'Compte créé avec succès.'
  errorMessage.value = ''
  setTimeout(() => router.push('/login'), 600)
}
</script>

<style scoped>
.auth-page {
  min-height: 65vh;
  display: grid;
  place-items: center;
}

.auth-card {
  width: min(100%, 430px);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  padding: 1.8rem;
  display: grid;
  gap: 1rem;
}

.auth-form {
  display: grid;
  gap: 1rem;
}

.switch {
  color: var(--text-soft);
  font-size: 0.92rem;
}
</style>

