<script setup>
    defineProps({
        label:String,
        type: {
            type:String,
            default: 'button'
        },
        variant:{
            type:String,
            default: 'primary'
        }
    })
</script>

<template>
    <button :type="type" :class="['base-button', variant]">
        {{ label }}
    </button>
</template>
<style scoped>
    .base-button {
        padding: 0.75rem 1rem;
        border:none;
        border-radius:8px;
        cursor:pointer;
    }
    .primary{
        background: #3f6d5a;
        color: white;
    }
    .secondary{
        background: #e8e5de;
        color:#222;
    }
</style>