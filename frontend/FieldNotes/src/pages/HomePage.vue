<template>
  <section class="home-page">
    <div class="hero">
      <div class="hero-mark">FN</div>
      <h1>FieldNotes</h1>
      <p>Capture tes observations, organise tes idées et conserve les détails qui comptent.</p>
      <div class="hero-actions">
        <RouterLink to="/register"><BaseButton label="Commencer" /></RouterLink>
        <RouterLink to="/login"><BaseButton label="Connexion" variant="secondary" /></RouterLink>
      </div>
    </div>

    <div class="feature-grid">
      <FeatureCard title="Simple et clair" text="Concentre-toi sur l'essentiel sans distraction." />
      <FeatureCard title="Organisé" text="Filtre et classe tes notes facilement." />
      <FeatureCard title="Personnel" text="Ton espace privé pour tes observations et tes idées." />
    </div>
  </section>
</template>

<script setup>
import BaseButton from '../components/BaseButton.vue'
import FeatureCard from '../components/FeatureCard.vue'
</script>

<style scoped>
.home-page {
  display: grid;
  gap: 3rem;
}

.hero {
  background: linear-gradient(165deg, #f9f8f4 0%, #f1eee7 100%);
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: var(--shadow);
  text-align: center;
  padding: 4rem 1.25rem;
  display: grid;
  gap: 1rem;
}

.hero-mark {
  width: 72px;
  height: 72px;
  margin: 0 auto;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: #d9ddd4;
  color: var(--primary);
  font-weight: 700;
}

.hero p {
  max-width: 680px;
  margin: 0 auto;
  color: var(--text);
  font-size: 1.2rem;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
}

.feature-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
}

@media (max-width: 640px) {
  .hero {
    padding: 2.8rem 1rem;
  }

  .hero-actions {
    flex-direction: column;
  }
}
</style>

