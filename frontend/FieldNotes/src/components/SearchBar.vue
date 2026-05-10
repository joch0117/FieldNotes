<template>
  <div class="search-bar">
    <Search :size="18" />
    <input
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script setup>
import { Search } from 'lucide-vue-next'

defineProps({
  modelValue: String,
  placeholder: String
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  padding: 0.7rem 0.85rem;
}

input {
  border: none;
  outline: none;
  width: 100%;
  background: transparent;
  font: inherit;
}
</style>

