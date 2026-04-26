<script setup>
defineProps({
  label: String,
  active: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>

<template>
  <span
    class="badge"
    :class="{ active }"
    @click="$emit('click')"
  >
    {{ label }}
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: #ece8e1;
  color: #333;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.badge:hover {
  background: #ddd7ce;
}

.badge.active {
  background: #4f6f5f;
  color: white;
}
</style>