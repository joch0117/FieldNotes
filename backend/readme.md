# Backend FieldNotes

API Express de FieldNotes.

## Démarrage

```bash
cd backend
npm install
npm run dev
```

Le serveur écoute sur `http://localhost:3000` (ou la valeur de `PORT`).

## Structure

- `server.js` : point d'entrée serveur
- `src/app.js` : configuration Express (CORS + JSON + routes)
- `src/routes` : routes HTTP
- `src/controllers` : gestion req/res
- `src/services` : logique métier
- `src/repositories` : accès base de données
- `src/middlewares` : middleware JWT

## Base path API

- Auth : `/api/auth`
- Observations : `/api/observations`

## Routes disponibles

### Auth

1. `POST /api/auth/register`
- Body: `username`, `email`, `password`
- Réponses principales: `201`, `400`, `409`, `500`

2. `POST /api/auth/login`
- Body: `email`, `password`
- Réponses principales: `200`, `400`, `401`, `500`

### Observations (protégées par JWT)

Headers requis:
- `Authorization: Bearer <token>`

1. `GET /api/observations/`
- Retourne les observations de l'utilisateur connecté
- Réponses principales: `200`, `400`, `401`, `500`

2. `POST /api/observations/create`
- Body: `title`, `category`, `content`
- Réponses principales: `201`, `400`, `401`, `500`

3. `PATCH /api/observations/:id`
- Body: `title`, `category`, `content`
- Réponses principales: `200`, `400`, `401`, `500`

4. `DELETE /api/observations/:id`
- Réponses principales: `200`, `401`, `500`

## Remarque

La route `GET /api/auth/me` n'est pas implémentée dans l'état actuel du backend.
