# Backend FieldNotes

API Express de FieldNotes.

## Démarrage

```bash
cd backend
npm install
npm run dev
```

Le serveur écoute sur `http://localhost:3000` (ou la valeur de `PORT`).

## Architecture

- `server.js` : lancement serveur
- `src/app.js` : middleware + routes
- `src/routes` : définitions endpoints
- `src/controllers` : gestion HTTP
- `src/services` : logique métier et validations
- `src/repositories` : accès MariaDB
- `src/middlewares/auth.middlewares.js` : vérification JWT

## Sécurité et validations

- Vérification stricte du header `Authorization: Bearer <token>`
- JWT obligatoire sur routes protégées
- Validation des champs auth/compte/observations
- Gestion des erreurs métier avec statuts HTTP adaptés
- Suppression utilisateur en cascade via FK (`observations.user_id`)
- CORS limité à `http://localhost:5173` par défaut (à adapter en production)

## Base path

- Auth: `/api/auth`
- Observations: `/api/observations`

## Routes

### Auth

1. `POST /api/auth/register`
- Body: `username`, `email`, `password`
- Statuts: `201`, `400`, `409`, `500`

2. `POST /api/auth/login`
- Body: `email`, `password`
- Statuts: `200`, `400`, `401`, `500`

3. `PATCH /api/auth/me` (JWT)
- Body: `username`, `email`, `password` (optionnel)
- Statuts: `200`, `400`, `401`, `404`, `409`, `500`

4. `DELETE /api/auth/me` (JWT)
- Statuts: `200`, `401`, `404`, `500`

### Observations (JWT)

Headers requis:
- `Authorization: Bearer <token>`

1. `GET /api/observations/`
- Statuts: `200`, `400`, `401`, `500`

2. `POST /api/observations/create`
- Body: `title`, `category`, `content`
- Statuts: `201`, `400`, `401`, `500`

3. `PATCH /api/observations/:id`
- Body: `title`, `category`, `content`
- Statuts: `200`, `400`, `401`, `500`

4. `DELETE /api/observations/:id`
- Statuts: `200`, `401`, `500`

## Configuration

Configurer les variables d'environnement (`DB_*`, `JWT_SECRET`, `JWT_EXPIRES_IN`, `PORT`) dans `.env`.
Ne jamais commiter de secrets en clair.
