<script setup>
defineProps({
  title: String,
  excerpt: String,
  category: String,
  date: String
})
</script>

<template>
  <article class="note-card">
    <div class="note-card-content">
      <h3>{{ title }}</h3>
      <p>{{ excerpt }}</p>
    </div>

    <div class="note-card-footer">
      <span class="meta-item">🏷 {{ category }}</span>
      <span class="meta-item">📅 {{ date }}</span>
    </div>
  </article>
</template>

<style scoped>
.note-card {
  min-height: 165px;
  padding: 1.4rem;
  border: 1px solid #ded8cf;
  border-radius: 10px;
  background: #fffdfa;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.note-card-content h3 {
  margin: 0 0 0.9rem;
  font-size: 1.15rem;
  font-weight: 700;
  color: #25201b;
}

.note-card-content p {
  margin: 0;
  color: #67615b;
  line-height: 1.45;
  font-size: 0.95rem;
}

.note-card-footer {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.4rem;
  font-size: 0.85rem;
  color: #716b64;
}

.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}
</style>