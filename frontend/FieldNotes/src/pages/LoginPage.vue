<template>
  <section class="auth-page">
    <div class="auth-card">
      <h1>Se connecter</h1>
      <p>Accédez à votre espace de notes.</p>
      <form class="auth-form" @submit.prevent="handleLogin">
        <BaseInput id="email" v-model="email" label="Email" type="email" placeholder="vous@exemple.com" />
        <BaseInput id="password" v-model="password" label="Mot de passe" type="password" placeholder="••••••••" />
        <FormMessage :message="errorMessage" type="error" />
        <BaseButton label="Connexion" type="submit" block />
      </form>
      <p class="switch">Pas encore de compte ? <RouterLink to="/register">Créer un compte</RouterLink></p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseInput from '../components/BaseInput.vue'
import BaseButton from '../components/BaseButton.vue'
import FormMessage from '../components/FormMessage.vue'
import { loginSession } from '../stores/sessionStore'

const router = useRouter()
const email = ref('')
const password = ref('')
const errorMessage = ref('')

const handleLogin = () => {
  if (!email.value || !password.value) {
    errorMessage.value = 'Tous les champs sont obligatoires.'
    return
  }

  loginSession()
  router.push('/dashboard')
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
