<template>
    <section class="hero-dashboard">
    <div>
        <h1>Mes notes</h1>
        <p>{{ filteredNotes.length }} notes trouvées</p>
    </div>

    <RouterLink to="/newNote">
        <BaseButton label="nouvelle note" type="submit" />
    </RouterLink>
    </section>

    <section class="hero-search">
        <div class="search-wrapper">
            <SearchBar
            v-model="searchTerm"
            placeholder="Rechercher une note..."
            />
        </div>

    <div class="badges-list">
        <Badge
        v-for="category in categories"
        :key="category"
        :label="category"
        :active="selectedCategory === category"
        @click="selectedCategory = category"
        />
    </div>
    </section>

    <section class="notes-list">
    <div v-if="filteredNotes.length === 0" class="empty-state">
        <p>Aucune note trouvée.</p>
    </div>
    <section class="notes-section">
  <div class="notes-grid">
    <NoteCard
      v-for="note in filteredNotes"
      :key="note.id"
      :title="note.title"
      :excerpt="note.excerpt"
      :category="note.category"
      :date="note.date"
    />
  </div>
</section>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import BaseButton from '../components/BaseButton.vue'
import SearchBar from '../components/SearchBar.vue'
import Badge from '../components/Badge.vue'
import NoteCard from '../components/NoteCard.vue'

const notes = ref([
  {
    id: 1,
    title: 'Spring Wildflowers Observation',
    excerpt: 'Observed several species of wildflowers blooming near the creek. The Indian Paintbrush was particularly vibrant this year...',
    category: 'Nature',
    date: '10/04/2026'
  },
  {
    id: 2,
    title: 'Project Planning Notes',
    excerpt: 'Initial thoughts on the Q2 roadmap. Need to prioritize user feedback and address technical debt...',
    category: 'Work',
    date: '12/04/2026'
  }
])

const selectedCategory = ref('Toutes')
const searchTerm = ref('')

const categories = computed(() => {
  const uniqueCategories = [...new Set(notes.value.map(note => note.category))]
  return ['Toutes', ...uniqueCategories]
})

const filteredNotes = computed(() => {
  return notes.value.filter(note => {
    const matchesSearch = note.title
      .toLowerCase()
      .includes(searchTerm.value.toLowerCase())

    const matchesCategory =
      selectedCategory.value === 'Toutes' ||
      note.category === selectedCategory.value

    return matchesSearch && matchesCategory
  })
})
</script>

<style scoped>
.hero-dashboard {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 0 50px 0;
}

.hero-search {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 2rem;
}

.search-wrapper {
  width: 100%;
}

.badges-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.notes-section {
  margin-top: 2rem;
}

.notes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}

.empty-state {
  padding: 2rem 0;
  text-align: center;
  color: #666;
}
@media (max-width: 900px) {
  .notes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 650px) {
  .notes-grid {
    grid-template-columns: 1fr;
  }
}
</style>