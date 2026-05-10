<script setup>
defineProps({
  label: String,
  type: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String,
    default: 'primary'
  },
  block: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button :type="type" :class="['base-button', `is-${variant}`, { 'is-block': block }]">
    {{ label }}
  </button>
</template>

<style scoped>
.base-button {
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 0.7rem 1rem;
  font-weight: 600;
  cursor: pointer;
}

.is-primary {
  background: var(--primary);
  color: #fff;
}

.is-secondary {
  background: var(--surface);
  border-color: var(--border);
  color: var(--text-strong);
}

.is-block {
  width: 100%;
}

.base-button:hover {
  transform: translateY(-1px);
}
</style>

