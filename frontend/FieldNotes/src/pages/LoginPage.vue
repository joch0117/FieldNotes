<template>
<section class="login-page">
    <div class="login-card">
    <div class="form-icon">
        <LogInIcon :size="26"/>
    </div>
    <h3>Se connecter</h3>
    <p>Connectez-vous pour accéder à vos notes.</p>
    <form class="login-form" @submit.prevent>
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
        <BaseButton label="se connecter" type="submit" />
    </form>
    </div>
</section>
</template>
<style scoped>
.login-page {
    min-height: calc(100vh - 140px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

.login-card {
    width: 100%;
    max-width: 420px;
    background-color: #ffffff;
    border: 1px solid #e5e2dc;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    padding: 2rem;
    text-align: center;
}

.form-icon {
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

.login-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
<script setup>
    import { LogInIcon } from 'lucide-vue-next'
    import BaseButton from '../components/BaseButton.vue'
    import BaseInput from '../components/BaseInput.vue'

    import {ref} from 'vue'

    const email = ref('')
    const password = ref('')
</script>