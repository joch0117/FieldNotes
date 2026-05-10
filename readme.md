# FieldNotes

FieldNotes est un projet de pratique full-stack (Vue + Express + MariaDB).

## État actuel (mai 2026)

Le frontend est refondu et fonctionne en mode local (données mock et état en mémoire), sans dépendance active à l'API backend.
Le backend existe dans le dépôt et sera branché ensuite côté frontend.

## Stack

### Frontend
- Vue 3
- Vue Router
- CSS
- Vite

### Backend
- Node.js
- Express
- MariaDB

## Fonctionnalités front disponibles

- Page d'accueil
- Connexion (simulation front)
- Inscription (simulation front)
- Dashboard avec recherche et filtres
- Détail d'une note
- Création d'une note (locale)
- Modification d'une note (locale)
- Suppression d'une note (confirmation inline)
- Menu déroulant selon statut visiteur/connecté
- Page "Modifier mon compte"
- Suppression de compte (simulation front)
- Page CGU

## Arborescence

- `frontend/FieldNotes` : application Vue
- `backend` : API Express
- `database` : scripts SQL
- `documentation` : documents projet
- `figma` : inspirations visuelles

## Lancement rapide

### Frontend
```bash
cd frontend/FieldNotes
npm install
npm run dev
```

### Backend
Voir la documentation backend dans `backend/readme.md`.

## API backend (routes actuelles)

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Observations (protégées JWT)
- `GET /api/observations/`
- `POST /api/observations/create`
- `PATCH /api/observations/:id`
- `DELETE /api/observations/:id`
