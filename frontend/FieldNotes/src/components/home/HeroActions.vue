<template>
    <div class="hero-actions">
        <router-link :to="{ name:'register'}" class="btn btn-primary">C'est parti !</router-link>
        <router-link :to="{ name:'login'}" class="btn btn-secondary">Se connecter</router-link>
    </div>
</template>

<script setup>
</script>

<style scoped>
.hero-actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
}

.btn {
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 0.95rem;
    cursor: pointer;
    border: none;
    transition: all 0.2s ease;
}

.btn-primary {
    background-color: var(--color-primary);
    color: white;
}

.btn-primary:hover {
    background-color: #2f4a2f;
}

.btn-secondary {
    background-color: white;
    border: 1px solid var(--color-border);
    color: var(--color-text);
}

.btn-secondary:hover {
    background-color: #f5f5f5;
}
</style>