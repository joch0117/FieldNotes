# Projet FieldNotes

Ce projet a pour bute de pratiquer le framework vue  ainsi que express avec node.js

# description

FieldNotes est une application web full-stack permettant à un utilisateur de créer un compte, se connecter et gérer ses propres observations sous forme de fiches.

Chaque utilisateur peut créer, consulter, modifier et supprimer des observations personnelles, classées par catégorie. L’application propose une interface simple pour organiser ses idées, notes de lecture, observations de terrain ou expériences.

Le projet repose sur une architecture séparée :

un frontend en Vue.js avec navigation via Vue Router
un backend en Node.js avec Express exposant une API REST
une base de données relationnelle pour stocker les utilisateurs et leurs observations

L’authentification est sécurisée (mot de passe hashé) et chaque utilisateur n’a accès qu’à ses propres données.

Ce projet a pour objectif de mettre en pratique les fondamentaux du développement web full-stack : gestion des utilisateurs, CRUD, communication frontend/backend, structuration d’une application et sécurisation des données.

## stack
### côté front
- Vue.js
- CSS 3

## côté back
- express
- prisa

## BDD
- MariaDB

## conteneur docker
- NGINX
- MariaDB
- back
- front

