# Frontend FieldNotes

Frontend Vue 3 de FieldNotes.

## État actuel

Le frontend est connecté au backend pour :
- auth (`register`, `login`)
- notes (`GET`, `POST`, `PATCH`, `DELETE`)
- compte (`PATCH /auth/me`, `DELETE /auth/me`)

## Stack

- Vue 3
- Vue Router
- Vite
- CSS

## Scripts

```bash
npm install
npm run dev
npm run build
```

## Routes UI

- `/` : Accueil
- `/login` : Connexion
- `/register` : Inscription
- `/dashboard` : Dashboard notes (privé)
- `/notes/new` : Nouvelle note (privé)
- `/notes/:id` : Détail note (privé)
- `/notes/:id/edit` : Modifier note (privé)
- `/account` : Modifier mon compte (privé)
- `/cgu` : Conditions générales d'utilisation

## Architecture

- `src/pages` : pages applicatives
- `src/components` : composants UI
- `src/services/userService.js` : appels API auth + compte
- `src/services/observationService.js` : appels API observations
- `src/stores/sessionStore.js` : session front + token/user
- `src/stores/notesStore.js` : cache notes côté front

## Sécurité et erreurs

- Guards de route front: `requiresAuth` et `guestOnly`
- Token JWT stocké et relu au démarrage
- Sur `401`, déconnexion automatique + message "Session expirée"
- Parsing JSON sécurisé des réponses API
- Affichage distinct erreurs/succès dans les formulaires

## Configuration

Définir `VITE_API_URL` (exemple):

```env
VITE_API_URL=http://localhost:3000/api
```

## Publication GitHub

- Ne pas commiter `.env`.
- Vérifier que `VITE_API_URL` n'est pas une URL de production sensible.
