# Backend FieldNotes

API Express de FieldNotes.

## Démarrage

```bash
cd backend
npm install
npm run dev
```

Serveur : `http://localhost:3000` (ou `PORT`).

## Architecture

- `server.js` : bootstrap serveur
- `src/app.js` : middleware globaux + routes
- `src/routes` : routes API
- `src/controllers` : logique HTTP (req/res)
- `src/services` : logique métier + validations
- `src/repositories` : accès MariaDB
- `src/middlewares` : auth JWT + sécurité

## Sécurité

- Middleware JWT pour routes privées
- Validation du format `Authorization: Bearer <token>`
- Headers de sécurité HTTP
- Rate limiting sur routes auth
- CORS configurable via `FRONTEND_URL`

## Base path

- Auth : `/api/auth`
- Observations : `/api/observations`

## Routes

### Auth

- `POST /api/auth/register`
  - Body : `username`, `email`, `password`
  - Statuts : `201`, `400`, `409`, `500`

- `POST /api/auth/login`
  - Body : `email`, `password`
  - Statuts : `200`, `400`, `401`, `500`

- `PATCH /api/auth/me` (JWT)
  - Body : `username`, `email`, `password` (optionnel)
  - Statuts : `200`, `400`, `401`, `404`, `409`, `500`

- `DELETE /api/auth/me` (JWT)
  - Statuts : `200`, `401`, `404`, `500`

### Observations (JWT)

- `GET /api/observations/`
  - Statuts : `200`, `401`, `500`

- `POST /api/observations/create`
  - Body : `title`, `category`, `content`
  - Statuts : `201`, `400`, `401`, `500`

- `PATCH /api/observations/:id`
  - Body : `title`, `category`, `content`
  - Statuts : `200`, `400`, `401`, `500`

- `DELETE /api/observations/:id`
  - Statuts : `200`, `401`, `500`

## Variables d'environnement

À définir dans `.env` (voir `.env.exemple` à la racine) :
- `DB_HOST`
- `DB_PORT`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`
- `JWT_SECRET`
- `JWT_EXPIRES_IN`
- `PORT`
- `FRONTEND_URL`


