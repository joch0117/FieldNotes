# Frontend FieldNotes

Frontend Vue 3 de FieldNotes.

## Objectif

Fournir une interface complète pour :
- authentification utilisateur
- gestion des notes
- gestion du compte

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

## Configuration

Créer un fichier `.env` dans `frontend/FieldNotes` :

```env
VITE_API_URL=http://localhost:3000/api
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
- `src/stores/sessionStore.js` : état session (token + user)
- `src/stores/notesStore.js` : état notes côté UI

## Sécurité et erreurs

- Guards `requiresAuth` et `guestOnly`
- Réhydratation session au démarrage
- Déconnexion automatique sur `401`
- Parsing JSON défensif côté services
- Affichage clair des erreurs/succès dans les formulaires


