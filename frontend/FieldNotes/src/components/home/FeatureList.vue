<template>
    <section class="present">
    <FeatureCard
        title="Simple et épuré"
        text="Concentrez-vous sur l'essentiel"
    />
    <FeatureCard
        title="Organisez"
        text="Filtrez et classez vos notes facilement"
    />
    <FeatureCard
        title="Personnel"
        text="Un espace privé dédié à vos idées"
    />
    </section>
</template>

<script setup>
import FeatureCard from '../FeatureCard.vue'
</script>

<style scoped>
.present {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: 3rem;
}
</style>