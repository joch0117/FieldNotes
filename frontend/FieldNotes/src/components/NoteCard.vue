<script setup>
import { CalendarDays, Tag } from 'lucide-vue-next'

defineProps({
  id: Number,
  title: String,
  excerpt: String,
  category: String,
  date: String
})

const formatDate = (date) => new Date(date).toLocaleDateString('fr-FR')
</script>

<template>
  <RouterLink :to="{ name: 'noteDetail', params: { id } }" class="note-card-link">
    <article class="note-card">
      <h3>{{ title }}</h3>
      <p>{{ excerpt }}</p>
      <footer>
        <span><Tag :size="14" /> {{ category }}</span>
        <span><CalendarDays :size="14" /> {{ formatDate(date) }}</span>
      </footer>
    </article>
  </RouterLink>
</template>

<style scoped>
.note-card-link {
  text-decoration: none;
}

.note-card {
  height: 100%;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1.25rem;
  background: var(--surface);
  display: grid;
  gap: 0.9rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.note-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.note-card p {
  color: var(--text);
}

.note-card footer {
  display: flex;
  gap: 1rem;
  color: var(--text-soft);
  font-size: 0.85rem;
}

.note-card footer span {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}
</style>

