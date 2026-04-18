<template>
    <section class="hero">
        <div class="hero-icon">
            <BookOpen :size="26" />
        </div>
        <h1>FieldNotes</h1>
        <p class="hero-text">Capturez vos observations, organisez vos pensées et conservez les détails qui comptent. Un espace simple et élégant pour vos notes et découvertes personnelles.</p>
    </section>
</template>
<script setup>
    import { BookOpen } from 'lucide-vue-next'

</script>
<style scoped>
    .hero {
    text-align: center;
    padding: 80px 20px 40px;
    }


    .hero-icon {
        width: 60px;
        height: 60px;
        margin: 0 auto 20px;
        border-radius: 50%;
        background-color: #e8e5de;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-primary);
    }


    .hero h1 {
        font-family: 'Playfair Display', serif;
        font-size: 3rem;
        margin: 0 0 20px;
    }


    .hero-text {
    max-width: 600px;
    margin: 0 auto;
    color: var(--color-text-light);
    line-height: 1.6;
    }
</style>