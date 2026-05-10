# FieldNotes

Application full-stack de notes personnelles (Vue 3 + Express + MariaDB).

## Aperçu

FieldNotes permet à un utilisateur de :
- créer un compte et se connecter
- créer, lire, modifier et supprimer ses notes
- modifier ou supprimer son compte

## Stack

- Frontend : Vue 3, Vue Router, Vite, CSS
- Backend : Node.js, Express, MariaDB, JWT

## Fonctionnalités livrées

- Authentification : `register`, `login`
- Notes : `GET`, `POST`, `PATCH`, `DELETE`
- Compte : `PATCH /auth/me`, `DELETE /auth/me`
- Dashboard avec recherche et filtres
- Routes privées côté front (guards)
- Page CGU

## Sécurité

- API protégée par JWT sur routes privées
- Contrôle strict du header `Authorization: Bearer <token>`
- Déconnexion automatique front sur `401`
- Validation serveur des entrées (auth, compte, observations)
- Rate limiting sur routes d'auth

## Arborescence

- `frontend/FieldNotes` : application Vue
- `backend` : API Express
- `database` : scripts SQL
- `documentation` : documents projet
- `figma` : inspirations visuelles

## Installation et lancement

### 1) Configuration

Créer `.env` à partir de `.env.exemple`.

### 2) Backend

```bash
cd backend
npm install
npm run dev
```

### 3) Frontend

```bash
cd frontend/FieldNotes
npm install
npm run dev
```

## Variables d'environnement

Voir `.env.exemple` à la racine pour la base de données, JWT, port API et URL frontend.

## API (résumé)

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

## Statut

Projet finalisé
