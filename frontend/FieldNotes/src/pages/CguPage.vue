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
        <p>Les présentes conditions définissent les règles d'utilisation de l'application FieldNotes, accessible en version web.</p>

        <h2>2. Compte utilisateur</h2>
        <p>L'accès aux fonctionnalités de gestion de notes nécessite la création d'un compte et une authentification. L'utilisateur est responsable de la confidentialité de ses identifiants.</p>

        <h2>3. Données et contenu</h2>
        <p>L'utilisateur reste propriétaire des contenus qu'il crée (notes, catégories, textes). Il s'engage à ne pas publier de contenu illicite, diffamatoire ou portant atteinte aux droits de tiers.</p>

        <h2>4. Sécurité</h2>
        <p>Les routes sensibles sont protégées par authentification JWT. Malgré les mesures de sécurité mises en place, l'utilisateur reconnaît qu'aucun système n'est totalement exempt de risques.</p>

        <h2>5. Modification et suppression du compte</h2>
        <p>L'utilisateur peut modifier ses informations et demander la suppression de son compte depuis l'interface dédiée. La suppression entraîne également la suppression des notes associées.</p>

        <h2>6. Disponibilité du service</h2>
        <p>FieldNotes est fourni « en l'état ». L'éditeur ne garantit pas une disponibilité continue du service et peut suspendre temporairement l'accès pour maintenance ou évolution.</p>

        <h2>7. Limitation de responsabilité</h2>
        <p>L'éditeur ne saurait être tenu responsable des pertes de données, interruptions de service ou dommages indirects liés à l'usage de l'application.</p>

        <h2>8. Évolution des CGU</h2>
        <p>Les présentes CGU peuvent être modifiées à tout moment. La date indiquée en haut de page correspond à la version en vigueur.</p>
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
