<template>
  <section class="legal-page">
    <article class="legal-card">
      <header class="legal-head">
        <p class="eyebrow">Informations légales</p>
        <h1>Conditions générales d'utilisation</h1>
        <p>Dernière mise à jour : 10 mai 2026</p>
      </header>

      <div class="legal-content">
        <h2>1. Objet</h2>
        <p>Les présentes conditions définissent les modalités d'utilisation de l'application FieldNotes.</p>

        <h2>2. Utilisation du service</h2>
        <p>L'utilisateur s'engage à utiliser l'application de manière responsable et conforme à la réglementation en vigueur.</p>

        <h2>3. Données</h2>
        <p>Les notes affichées dans cette version sont locales au front-end tant que la connexion backend n'est pas activée.</p>

        <h2>4. Responsabilité</h2>
        <p>FieldNotes est fourni en l'état. L'éditeur ne pourra être tenu responsable d'une perte de données liée à un usage non conforme.</p>

        <h2>5. Évolution</h2>
        <p>Ces conditions peuvent être modifiées. La date de mise à jour en haut de page fait foi.</p>
      </div>
    </article>
  </section>
</template>

<style scoped>
.legal-page {
  min-height: 72vh;
  display: grid;
  place-items: center;
  padding: 0.5rem 0;
}

.legal-card {
  width: min(100%, 900px);
  border: 1px solid var(--border);
  border-radius: 22px;
  background: linear-gradient(180deg, #fbfaf7 0%, var(--surface) 45%);
  box-shadow: var(--shadow);
  padding: 1.6rem;
  display: grid;
  gap: 1.2rem;
}

.legal-head {
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.9rem;
  display: grid;
  gap: 0.4rem;
}

.eyebrow {
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-soft);
}

.legal-head p {
  color: var(--text-soft);
}

.legal-content {
  display: grid;
  gap: 0.8rem;
}

.legal-content h2 {
  font-size: 1.12rem;
}

.legal-content p {
  color: var(--text);
}

@media (max-width: 640px) {
  .legal-card {
    padding: 1.1rem;
    border-radius: 16px;
  }
}
</style>
