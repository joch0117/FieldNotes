<template>
  <header class="site-header">
    <div class="header-inner">
      <RouterLink :to="{ name: 'home' }" class="logo">
        <BookOpen :size="20" />
        <span>FieldNotes</span>
      </RouterLink>

      <div class="menu-wrap">
        <button type="button" class="menu-button" @click="isOpen = !isOpen">
          Menu
          <ChevronDown :size="16" :class="{ rotated: isOpen }" />
        </button>

        <nav v-if="isOpen" class="dropdown">
          <RouterLink to="/" class="dropdown-link" @click="closeMenu">Accueil</RouterLink>

          <template v-if="isAuthenticated">
            <RouterLink to="/dashboard" class="dropdown-link" @click="closeMenu">Tableau de bord</RouterLink>
            <RouterLink to="/notes/new" class="dropdown-link" @click="closeMenu">Nouvelle note</RouterLink>
            <RouterLink to="/account" class="dropdown-link" @click="closeMenu">Modifier mon compte</RouterLink>
            <button type="button" class="dropdown-link logout-btn" @click="handleLogout">Déconnexion</button>
          </template>

          <template v-else>
            <RouterLink to="/login" class="dropdown-link" @click="closeMenu">Connexion</RouterLink>
            <RouterLink to="/register" class="dropdown-link" @click="closeMenu">S'enregistrer</RouterLink>
          </template>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { BookOpen, ChevronDown } from 'lucide-vue-next'

defineProps({
  isAuthenticated: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['logout'])
const route = useRoute()
const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}

const handleLogout = () => {
  closeMenu()
  emit('logout')
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  }
)
</script>

<style scoped>
.site-header {
  border-bottom: 1px solid var(--border);
  background: rgba(248, 246, 242, 0.95);
  backdrop-filter: blur(3px);
}

.header-inner {
  width: min(100%, var(--max-content));
  margin: 0 auto;
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--primary);
  font-size: 1.8rem;
  font-family: Georgia, 'Times New Roman', serif;
}

.menu-wrap {
  position: relative;
}

.menu-button {
  border: 1px solid var(--border);
  background: var(--surface);
  border-radius: 10px;
  padding: 0.55rem 0.85rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  color: var(--text-strong);
  font-weight: 600;
}

.rotated {
  transform: rotate(180deg);
}

.dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 220px;
  border: 1px solid var(--border);
  background: var(--surface);
  border-radius: 12px;
  box-shadow: var(--shadow);
  padding: 0.45rem;
  display: grid;
  gap: 0.2rem;
  z-index: 20;
}

.dropdown-link {
  text-decoration: none;
  color: var(--text);
  padding: 0.55rem 0.65rem;
  border-radius: 8px;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;
  font: inherit;
}

.dropdown-link:hover {
  background: var(--surface-muted);
  color: var(--text-strong);
}

.logout-btn {
  color: #8a2f2f;
}
</style>
