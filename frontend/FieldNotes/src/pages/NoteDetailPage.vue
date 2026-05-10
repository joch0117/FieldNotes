<template>
  <section v-if="note" class="detail-page">
    <RouterLink to="/dashboard" class="back-link">← Retour au tableau de bord</RouterLink>

    <article class="detail-card">
      <header>
        <p class="meta">{{ note.category }} · {{ formatDate(note.createdAt) }}</p>
        <h1>{{ note.title }}</h1>
      </header>

      <p>{{ note.content }}</p>

      <div class="actions">
        <RouterLink :to="`/notes/${note.id}/edit`">
          <BaseButton label="Modifier" />
        </RouterLink>
        <BaseButton label="Supprimer" variant="secondary" @click="showDeleteConfirm = true" />
      </div>

      <div v-if="showDeleteConfirm" class="confirm-delete">
        <p>Confirmer la suppression de cette note ? Cette action est irréversible.</p>
        <div class="confirm-actions">
          <BaseButton label="Oui, supprimer" @click="handleDelete" />
          <BaseButton label="Annuler" variant="secondary" @click="showDeleteConfirm = false" />
        </div>
      </div>

      <footer>
        <span>Lieu: {{ note.location }}</span>
        <span>Étiquettes: {{ note.tags.join(', ') }}</span>
      </footer>
    </article>
  </section>

  <section v-else class="detail-empty">
    <h1>Note introuvable</h1>
    <RouterLink to="/dashboard">Revenir à la liste</RouterLink>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BaseButton from '../components/BaseButton.vue'
import { deleteNote, findNoteById } from '../stores/notesStore'

const route = useRoute()
const router = useRouter()
const showDeleteConfirm = ref(false)

const note = computed(() => {
  return findNoteById(route.params.id)
})

const formatDate = (date) => new Date(date).toLocaleDateString('fr-FR')

const handleDelete = () => {
  if (!note.value) return
  deleteNote(note.value.id)
  router.push('/dashboard')
}
</script>

<style scoped>
.detail-page {
  max-width: 900px;
}

.back-link {
  color: var(--text-soft);
  text-decoration: none;
}

.detail-card {
  margin-top: 1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
  padding: 1.6rem;
  display: grid;
  gap: 1.2rem;
  box-shadow: var(--shadow);
}

.meta {
  color: var(--text-soft);
}

footer {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  color: var(--text-soft);
  font-size: 0.92rem;
}

.actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.confirm-delete {
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface-muted);
  padding: 1rem;
  display: grid;
  gap: 0.8rem;
}

.confirm-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}
</style>

