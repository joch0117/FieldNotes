# Tests fonctionnels — API FieldNotes

Les tests ont été réalisés avec Thunder Client afin de vérifier le bon fonctionnement des principales routes de l’API.

## Fonctionnalités testées

* Inscription utilisateur
* Connexion utilisateur
* Génération d’un token JWT
* Vérification du middleware d’authentification
* Création d’une observation
* Récupération des observations de l’utilisateur connecté
* Modification d’une observation
* Suppression d’une observation
* Vérification de l’isolation des données utilisateur

---

# Authentification

## POST `/api/auth/register`

### Objectif

Créer un nouvel utilisateur.

### Body testé

```json
{
  "username": "testuser",
  "email": "testuser@test.fr",
  "password": "test123"
}
```

### Résultat attendu

```json
{
  "message": "Utilisateur créé avec succès."
}
```

### Statut attendu

`201 Created`

### Résultat

Test validé.

---

## POST `/api/auth/register` avec email déjà utilisé

### Objectif

Empêcher la création d’un compte avec un email déjà existant.

### Résultat attendu

```json
{
  "message": "Cet email est déjà utilisé"
}
```

### Statut attendu

`409 Conflict`

### Résultat

Test validé.

---

## POST `/api/auth/login`

### Objectif

Connecter un utilisateur existant.

### Body testé

```json
{
  "email": "testuser@test.fr",
  "password": "test123"
}
```

### Résultat attendu

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

### Statut attendu

`200 OK`

### Résultat

Test validé.

---

## POST `/api/auth/login` avec mauvais mot de passe

### Objectif

Refuser une connexion invalide.

### Résultat attendu

```json
{
  "message": "Email ou mot de passe incorrect."
}
```

### Statut attendu

`401 Unauthorized`

### Résultat

Test validé.

---

# Route protégée

## GET `/api/auth/me`

### Objectif

Vérifier le fonctionnement du middleware JWT sur une route protégée.

### Header utilisé

```txt
Authorization: Bearer JWT_TOKEN
```

### Résultat attendu

```json
{
  "message": "Utilisateur auth",
  "user": {
    "id": 1,
    "email": "testuser@test.fr"
  }
}
```

### Statut attendu

`200 OK`

### Résultat

Test validé.

Sans token, la route renvoie une erreur `401 Unauthorized`.

---

# Observations

Toutes les routes liées aux observations sont protégées par le middleware JWT.

L’identifiant utilisateur est récupéré depuis `req.user.id` après vérification du token.

---

## GET `/api/observations`

### Objectif

Récupérer uniquement les observations de l’utilisateur connecté.

### Header utilisé

```txt
Authorization: Bearer JWT_TOKEN
```

### Résultat attendu

```json
{
  "observations": []
}
```

ou :

```json
{
  "observations": [
    {
      "id": 1,
      "title": "Observation test",
      "category": "science",
      "content": "Ceci est une observation de test suffisamment longue.",
      "created_at": "...",
      "updated_at": "..."
    }
  ]
}
```

### Statut attendu

`200 OK`

### Résultat

Test validé.

---

## POST `/api/observations/create`

### Objectif

Créer une observation liée à l’utilisateur connecté.

### Header utilisé

```txt
Authorization: Bearer JWT_TOKEN
```

### Body testé

```json
{
  "title": "Observation test",
  "category": "science",
  "content": "Ceci est une observation de test suffisamment longue."
}
```

### Résultat attendu

```json
{
  "message": "observation créé avec succés."
}
```

### Statut attendu

`201 Created`

### Résultat

Test validé.

---

## PATCH `/api/observations/:id`

### Objectif

Modifier une observation appartenant à l’utilisateur connecté.

### Exemple

```txt
PATCH /api/observations/1
```

### Header utilisé

```txt
Authorization: Bearer JWT_TOKEN
```

### Body testé

```json
{
  "title": "Observation modifiée",
  "category": "terrain",
  "content": "Contenu modifié pour tester la route patch correctement."
}
```

### Résultat attendu

```json
{
  "message": "observation modifié avec succés."
}
```

### Statut attendu

`200 OK`

### Résultat

Test validé.

---

## DELETE `/api/observations/:id`

### Objectif

Supprimer une observation appartenant à l’utilisateur connecté.

### Exemple

```txt
DELETE /api/observations/1
```

### Header utilisé

```txt
Authorization: Bearer JWT_TOKEN
```

### Résultat attendu

```json
{
  "message": "observation suprimé avec succés"
}
```

### Statut attendu

`200 OK`

### Résultat

Test validé.

---

# Points vérifiés

* Les routes protégées refusent les requêtes sans token.
* Le token JWT est généré lors de la connexion.
* Le middleware vérifie le token et injecte `req.user`.
* Les observations sont liées à l’utilisateur connecté.
* Le frontend n’envoie pas l’identifiant utilisateur.
* Les requêtes SQL utilisent des paramètres préparés.
* Les mots de passe sont hashés avec bcrypt.
* Les erreurs utilisateur renvoient des statuts HTTP cohérents.
* Les opérations CRUD fonctionnent avec l’architecture :

```txt
route → controller → service → repository
```
