<template>
  <div class="app-shell">
    <AppHeader :is-authenticated="sessionState.isAuthenticated" @logout="logout" />
    <main class="app-main">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { logoutSession, sessionState } from './stores/sessionStore'

const router = useRouter()

const logout = () => {
  logoutSession()
  router.push('/')
}
</script>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-main {
  width: min(100%, var(--max-content));
  margin: 0 auto;
  padding: 2.5rem 1.25rem 3rem;
  flex: 1;
}
</style>
