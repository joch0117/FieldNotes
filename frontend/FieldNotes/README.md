# Frontend FieldNotes

Frontend Vue 3 de FieldNotes.

## Objectif actuel

Cette version est une refonte UI/UX complète en mode local, prête à être connectée au backend.
La logique métier backend (auth/API) n'est pas encore branchée dans cette couche.

## Stack

- Vue 3
- Vue Router
- Vite
- CSS

## Lancer le projet

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
```

## Pages disponibles

- `/` : Accueil
- `/login` : Connexion
- `/register` : Inscription
- `/dashboard` : Dashboard notes
- `/notes/new` : Nouvelle note
- `/notes/:id` : Détail note
- `/notes/:id/edit` : Modifier note
- `/account` : Modifier mon compte
- `/cgu` : Conditions générales d'utilisation

## Architecture front

- `src/pages` : pages applicatives
- `src/components` : composants UI réutilisables
- `src/stores/notesStore.js` : notes mock (CRUD local)
- `src/stores/sessionStore.js` : état session front (en mémoire)
- `src/data/mockNotes.js` : dataset local initial

## Notes importantes

- Données notes : locales au frontend (pas d'appel API).
- Session utilisateur : locale en mémoire (pas de token backend).
- Ce mode simplifié est volontaire pour préparer le branchement backend.
