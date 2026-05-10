<script setup>
defineProps({
  label: String,
  modelValue: String,
  type: {
    type: String,
    default: 'text'
  },
  id: String,
  name: String,
  placeholder: String
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<style scoped>
.form-group {
  display: grid;
  gap: 0.35rem;
}

label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-strong);
}

input,
textarea,
select {
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.72rem 0.85rem;
  background: var(--surface);
  font: inherit;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(63, 95, 69, 0.15);
}
</style>

