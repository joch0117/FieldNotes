<template>
  <section class="dashboard-page">
    <header class="dashboard-head">
      <div>
        <h1>Mes notes</h1>
        <p>{{ filteredNotes.length }} notes trouvées</p>
      </div>
      <RouterLink to="/notes/new"><BaseButton label="+ Ajouter une note" /></RouterLink>
    </header>

    <SearchBar v-model="searchTerm" placeholder="Rechercher une note..." />
    <p v-if="errorMessage" class="status-message">{{ errorMessage }}</p>

    <div class="filter-list">
      <button
        v-for="item in categories"
        :key="item"
        type="button"
        :class="['chip', { 'is-active': selectedCategory === item }]"
        @click="selectedCategory = item"
      >
        {{ item }}
      </button>
    </div>

    <section class="notes-grid">
      <NoteCard
        v-for="note in filteredNotes"
        :key="note.id"
        :id="note.id"
        :title="note.title"
        :excerpt="note.content"
        :category="note.category"
        :date="note.createdAt"
      />
    </section>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { setNotes, notesState } from '../stores/notesStore'
import { getObservations } from '../services/observationService'
import BaseButton from '../components/BaseButton.vue'
import NoteCard from '../components/NoteCard.vue'
import SearchBar from '../components/SearchBar.vue'

const searchTerm = ref('')
const selectedCategory = ref('Toutes')
const errorMessage = ref('')

const categories = computed(() => ['Toutes', ...new Set(notesState.notes.map((note) => note.category))])

const filteredNotes = computed(() => {
  const term = searchTerm.value.toLowerCase().trim()

  return notesState.notes.filter((note) => {
    const byCategory = selectedCategory.value === 'Toutes' || note.category === selectedCategory.value
    const byText = !term || note.title.toLowerCase().includes(term) || note.content.toLowerCase().includes(term)
    return byCategory && byText
  })
})

onMounted(async () => {
  try {
    const observations = await getObservations()
    setNotes(observations)
    errorMessage.value = ''
  } catch (error) {
    errorMessage.value = error.message
  }
})
</script>

<style scoped>
.dashboard-page {
  display: grid;
  gap: 1.2rem;
}

.dashboard-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.dashboard-head p {
  color: var(--text-soft);
}

.status-message {
  color: #8a2f2f;
}

.filter-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.chip {
  border: 1px solid var(--border);
  background: var(--surface);
  border-radius: 10px;
  padding: 0.45rem 0.8rem;
  cursor: pointer;
}

.is-active {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
}

.notes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
}

@media (max-width: 640px) {
  .dashboard-head {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>

