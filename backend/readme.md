# backend 




** Pour structurer mon back-end je me suis appuyé sur ce que je connaissais de symfony , j'ai créer une structure du repertoir qui s'en rapproche. **

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

