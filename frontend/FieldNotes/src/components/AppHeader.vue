<template>
    <header class="site-header">
    <router-link to="/" class="logo">
        <BookOpen :size="22" />
        <span>FieldNotes</span>
    </router-link>
    </header>
</template>

<script>
import { BookOpen } from 'lucide-vue-next'

export default {
    components: {
    BookOpen
    }
}
</script>

<style scoped>
.site-header {
    background-color: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
    padding: 1rem 2rem;
}

.logo {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-primary);
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 500;
}

.logo span {
    color: var(--color-text);
}
</style>