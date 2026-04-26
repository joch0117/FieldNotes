<template>
    <div class="search-bar">
        <Search :size="22" />
        <input type="text"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>
<script setup>
import { Search } from "lucide-vue-next";

defineProps({
    modelValue: String,
    placeholder: String
})

defineEmits(['update:modelValue'])
</script>
<style scoped>
    .search-bar {
    width: 100%;
    display: flex;
    align-items: center;
    background: #f5f5f5;
    border-radius: 12px;
    padding: 0.6rem 0.9rem;
    gap: 0.6rem;
}

.icon {
    font-size: 1.1rem;
    opacity: 0.6;
}

input {
    border: none;
    background: transparent;
    outline: none;
    width: 100%;
    font-size: 1rem;
}
</style>