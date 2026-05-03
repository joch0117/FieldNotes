<template>
    <p v-if="message" :class="['form-message',type]">
        {{ message }}
    </p>
</template>
<script setup>
    defineProps({
        message:String,
        type:{
            type: String,
            default: 'error'
        }
    })
</script>

<style scoped>
    .form-message{
        font-size: 0.9rem;
        margin: 0
    }

    .error{
        color:red;
    }
    .success{
        color:green;
    }
</style>