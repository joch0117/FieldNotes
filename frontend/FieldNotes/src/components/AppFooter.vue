<template>
  <footer class="footer-site">
    <p>
      © 2026 FieldNotes. Une application personnelle de suivi de notes.
      <RouterLink to="/cgu" class="cgu-link">CGU</RouterLink>
    </p>
  </footer>
</template>

<style scoped>
.footer-site {
  border-top: 1px solid var(--border);
  padding: 1rem;
  text-align: center;
  color: var(--text-soft);
  font-size: 0.92rem;
}

.cgu-link {
  margin-left: 0.45rem;
  font-size: 0.78rem;
  text-decoration: none;
  color: var(--text-soft);
  letter-spacing: 0.04em;
}

.cgu-link:hover {
  color: var(--text-strong);
  text-decoration: underline;
}
</style>
