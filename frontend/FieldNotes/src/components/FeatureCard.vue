<script setup>
defineProps({
  title: String,
  text: String
})
</script>

<template>
  <article class="card">
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </article>
</template>

<style scoped>
.card {
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface);
  padding: 1.2rem;
  text-align: center;
  box-shadow: 0 6px 20px rgba(40, 30, 18, 0.05);
}

h3 {
  margin-bottom: 0.55rem;
}

p {
  color: var(--text-soft);
}
</style>

