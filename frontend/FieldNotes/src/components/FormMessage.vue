<template>
  <p v-if="message" :class="['form-message', `is-${type}`]">{{ message }}</p>
</template>

<script setup>
defineProps({
  message: String,
  type: {
    type: String,
    default: 'error'
  }
})
</script>

<style scoped>
.form-message {
  font-size: 0.9rem;
}

.is-error {
  color: #b43f36;
}

.is-success {
  color: #2f7d4d;
}
</style>

