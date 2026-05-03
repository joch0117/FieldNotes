# backend 

**Pour structurer mon back-end je me suis appuyé sur ce que je connaissais de symfony , j'ai créer une structure du repertoir qui s'en rapproche.**

server.js        démarre le serveur
app.js           configure Express
routes           déclarent les URLs
controllers      reçoivent req/res
services         logique métier + SQL
database/db.js   connexion MariaDB
middlewares      protections

backend/
├── server.js
├── .env
├── package.json
└── src/
    ├── app.js
    ├── database/
    │   └── db.js
    ├── routes/
    │   ├── auth.routes.js
    │   └── observation.routes.js
    ├── controllers/
    │   ├── auth.controller.js
    │   └── observation.controller.js
    ├── services/
    │   ├── auth.service.js
    │   └── observation.service.js
    └── middlewares/
        └── requireAuth.js


# Documentation des routes — API FieldNotes

# Authentification

## POST `/api/auth/register`

Créer un nouvel utilisateur.

### Body attendu

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

### Réponses possibles

| Statut | Description        |
| ------ | ------------------ |
| 201    | Utilisateur créé   |
| 400    | Champs invalides   |
| 409    | Email déjà utilisé |
| 500    | Erreur serveur     |

---

## POST `/api/auth/login`

Authentifier un utilisateur et générer un token JWT.

### Body attendu

```json
{
  "email": "string",
  "password": "string"
}
```

### Réponse

```json
{
  "message": "Connexion réussie",
  "token": "JWT_TOKEN",
  "user": {
    "id": 1,
    "username": "testuser",
    "email": "testuser@test.fr"
  }
}
```

### Réponses possibles

| Statut | Description             |
| ------ | ----------------------- |
| 200    | Connexion réussie       |
| 400    | Champs invalides        |
| 401    | Identifiants incorrects |
| 500    | Erreur serveur          |

---

## GET `/api/auth/me`

Retourner les informations de l’utilisateur authentifié.

### Header requis

```txt
Authorization: Bearer JWT_TOKEN
```

### Réponses possibles

| Statut | Description              |
| ------ | ------------------------ |
| 200    | Utilisateur authentifié  |
| 401    | Token invalide ou absent |

---

# Observations

Toutes les routes observations nécessitent un token JWT valide.

---

## GET `/api/observations`

Récupérer les observations de l’utilisateur connecté.

### Header requis

```txt
Authorization: Bearer JWT_TOKEN
```

### Réponses possibles

| Statut | Description            |
| ------ | ---------------------- |
| 200    | Liste des observations |
| 401    | Non authentifié        |
| 500    | Erreur serveur         |

---

## POST `/api/observations/create`

Créer une nouvelle observation.

### Header requis

```txt
Authorization: Bearer JWT_TOKEN
```

### Body attendu

```json
{
  "title": "string",
  "category": "string",
  "content": "string"
}
```

### Réponses possibles

| Statut | Description         |
| ------ | ------------------- |
| 201    | Observation créée   |
| 400    | Validation invalide |
| 401    | Non authentifié     |
| 500    | Erreur serveur      |

---

## PATCH `/api/observations/:id`

Modifier une observation appartenant à l’utilisateur connecté.

### Header requis

```txt
Authorization: Bearer JWT_TOKEN
```

### Paramètre URL

```txt
:id
```

### Body attendu

```json
{
  "title": "string",
  "category": "string",
  "content": "string"
}
```

### Réponses possibles

| Statut | Description          |
| ------ | -------------------- |
| 200    | Observation modifiée |
| 400    | Validation invalide  |
| 401    | Non authentifié      |
| 500    | Erreur serveur       |

---

## DELETE `/api/observations/:id`

Supprimer une observation appartenant à l’utilisateur connecté.

### Header requis

```txt
Authorization: Bearer JWT_TOKEN
```

### Paramètre URL

```txt
:id
```

### Réponses possibles

| Statut | Description           |
| ------ | --------------------- |
| 200    | Observation supprimée |
| 401    | Non aut               |

