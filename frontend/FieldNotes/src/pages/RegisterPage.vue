<template>
<section class="register-page">
    <div class="register-card">
    <div class="form-icon">
        <UserRoundPlus :size="26"/>
    </div>
    <h3>S'inscrire</h3>
    <p>Commencez votre journée avec FieldNotes</p>
    <form class="register-form" @submit.prevent>
        <BaseInput
        label="Nom"
        id="name"
        name="name"
        type="name"
        v-model="name" 
        />
        <BaseInput
        label="Email"
        id="email"
        name="email"
        type="email"
        v-model="email" 
        />
        <BaseInput
        label="Mot de passe"
        id="password"
        name="password"
        type="password"
        v-model="password" 
        />
        <BaseButton label="s'enregistrer" type="submit" />
        <p class="auth-switch">
        Déjà inscrit ?
        <RouterLink to="/login">Connectez-vous</RouterLink>
        </p>
    </form>
    </div>
</section>
</template>
<script setup>
    import { UserRoundPlus } from 'lucide-vue-next'
    import BaseButton from '../components/BaseButton.vue'
    import BaseInput from '../components/BaseInput.vue'

    import {ref} from 'vue'

    const email = ref('')
    const password = ref('')
    const name = ref('')
</script>
<style scoped>
    .register-page {
    min-height: calc(100vh - 140px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

.register-card {
    width: 100%;
    max-width: 420px;
    background-color: #ffffff;
    border: 1px solid #e5e2dc;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    padding: 2rem;
    text-align: center;
}

.register-icon {
    width: 64px;
    height: 64px;
    margin: 0 auto 1.25rem;
    border-radius: 50%;
    background-color: #e8e5de;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4f6f5f;
}

h1 {
    margin-bottom: 0.5rem;
    font-size: 1.8rem;
}

p {
    margin-bottom: 1.5rem;
    color: #5f5f5f;
}

.register-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.auth-switch {
    margin-top: 1rem;
    font-size: 0.95rem;
    text-align: center;
}

.auth-switch a {
    font-weight: 600;
    text-decoration: none;
}

.auth-switch a:hover {
    text-decoration: underline;
}
</style>