<template>
    <div class="card">
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    text: String
})
</script>

<style scoped>
.card {
    background-color: #ffffff;
    border: 1px solid #e5e2dc;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    width: 240px;
    padding: 1.5rem 1rem;
    text-align: center;
}

.card h3 {
    margin: 0 0 1rem 0;
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    color: #2c2c2c;
}

.card p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.5;
    color: #6b6b6b;
}
</style>