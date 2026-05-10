<template>
  <section v-if="note" class="editor-page">
    <form class="editor-card" @submit.prevent="saveChanges">
      <header class="editor-head">
        <p class="eyebrow">Édition</p>
        <h1>Modifier la note</h1>
        <p>Met à jour les informations de ta note.</p>
      </header>

      <div class="form-grid">
        <BaseInput id="title" v-model="title" label="Titre" />

        <BaseInput id="category" v-model="category" label="Catégorie" placeholder="Ex : Voyage, Travail, Journal..." />

        <div class="form-group">
          <label for="content">Contenu</label>
          <textarea id="content" v-model="content" rows="8" placeholder="Mets à jour le contenu de la note..."></textarea>
        </div>
      </div>

      <FormMessage :message="errorMessage" type="error" />
      <FormMessage :message="successMessage" type="success" />

      <div class="actions">
        <RouterLink :to="`/notes/${note.id}`" class="back-link">Annuler</RouterLink>
        <BaseButton label="Enregistrer les modifications" type="submit" />
      </div>
    </form>
  </section>

  <section v-else class="detail-empty">
    <h1>Note introuvable</h1>
    <RouterLink to="/dashboard">Revenir à la liste</RouterLink>
  </section>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BaseButton from '../components/BaseButton.vue'
import BaseInput from '../components/BaseInput.vue'
import FormMessage from '../components/FormMessage.vue'
import { findNoteById, setNotes } from '../stores/notesStore'
import { getObservations, updateObservation } from '../services/observationService'

const route = useRoute()
const router = useRouter()
const note = computed(() => findNoteById(route.params.id))

const title = ref(note?.title ?? '')
const category = ref(note?.category ?? '')
const content = ref(note?.content ?? '')
const errorMessage = ref('')
const successMessage = ref('')

watch(note, (currentNote) => {
  title.value = currentNote?.title ?? ''
  category.value = currentNote?.category ?? ''
  content.value = currentNote?.content ?? ''
}, { immediate: true })

onMounted(async () => {
  if (note.value) return

  try {
    const observations = await getObservations()
    setNotes(observations)
  } catch (error) {
    errorMessage.value = error.message
  }
})

const saveChanges = async () => {
  if (!note.value || !title.value || !category.value || !content.value) {
    errorMessage.value = 'Le titre, la catégorie et le contenu sont obligatoires.'
    successMessage.value = ''
    return
  }

  try {
    await updateObservation(note.value.id, {
      title: title.value,
      category: category.value,
      content: content.value
    })

    const observations = await getObservations()
    setNotes(observations)
    errorMessage.value = ''
    successMessage.value = 'Note modifiée avec succès.'
    router.push(`/notes/${note.value.id}`)
  } catch (error) {
    errorMessage.value = error.message
    successMessage.value = ''
  }
}
</script>

<style scoped>
.editor-page {
  min-height: 72vh;
  display: grid;
  place-items: center;
  padding: 0.5rem 0;
}

.editor-card {
  width: min(100%, 840px);
  border: 1px solid var(--border);
  border-radius: 22px;
  background: linear-gradient(180deg, #fbfaf7 0%, var(--surface) 45%);
  box-shadow: var(--shadow);
  padding: 1.6rem;
  display: grid;
  gap: 1.3rem;
}

.editor-head {
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

.editor-head p {
  color: var(--text-soft);
}

.form-grid {
  display: grid;
  gap: 1rem;
}

.form-group {
  display: grid;
  gap: 0.4rem;
}

label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-strong);
}

textarea {
  border: 1px solid var(--border);
  border-radius: 12px;
  background: #fff;
  padding: 0.75rem 0.85rem;
  font: inherit;
}

textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(63, 95, 69, 0.15);
}

textarea {
  resize: vertical;
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

@media (max-width: 640px) {
  .editor-card {
    padding: 1.1rem;
    border-radius: 16px;
  }

  .actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
