# FieldNotes

FieldNotes est une application full-stack de notes personnelles (Vue 3 + Express + MariaDB).

## État actuel

L'application est branchée au backend pour :
- authentification (`register`, `login`)
- observations (`liste`, `création`, `édition`, `suppression`)
- compte utilisateur (`modification`, `suppression`)

## Stack

### Frontend
- Vue 3
- Vue Router
- Vite
- CSS

### Backend
- Node.js
- Express
- MariaDB
- JWT (auth)

## Fonctionnalités principales

- Inscription et connexion utilisateur
- Dashboard avec recherche + filtres
- CRUD notes
- Détail note avec suppression confirmée inline
- Compte utilisateur : modifier / supprimer
- Page CGU

## Sécurité et gestion d'erreurs

- Routes backend sensibles protégées par JWT
- Guard frontend (`requiresAuth`, `guestOnly`)
- Déconnexion automatique frontend sur réponse `401`
- Messages d'erreur API affichés côté interface
- Validation serveur des champs (auth + observations + compte)

## Arborescence

- `frontend/FieldNotes` : application Vue
- `backend` : API Express
- `database` : scripts SQL
- `documentation` : documents projet
- `figma` : inspirations UI

## Lancement rapide

### Frontend
```bash
cd frontend/FieldNotes
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run dev
```

## Configuration

- Créer votre fichier `.env` à partir de `.env.exemple`.
- Ne jamais versionner de secrets (`.env` est déjà ignoré par Git).

## API backend (résumé)

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`
- `PATCH /api/auth/me` (JWT)
- `DELETE /api/auth/me` (JWT)

### Observations (JWT)
- `GET /api/observations/`
- `POST /api/observations/create`
- `PATCH /api/observations/:id`
- `DELETE /api/observations/:id`
