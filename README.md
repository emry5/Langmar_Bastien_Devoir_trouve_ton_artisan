Trouve Ton Artisan

Présentation

Trouve Ton Artisan est une application web permettant aux utilisateurs de rechercher et contacter facilement des artisans de la région Auvergne-Rhône-Alpes.

L’utilisateur peut :

- consulter les différentes catégories d’artisans ;
- rechercher un artisan par son nom ;
- consulter la fiche détaillée d’un artisan ;
- consulter sa spécialité, sa localisation et sa note ;
- contacter un artisan grâce à un formulaire de contact.

Le projet a été réalisé dans le respect des contraintes techniques et graphiques demandées par la Région Auvergne-Rhône-Alpes.

⸻

Technologies utilisées

Frontend

- React JS
- React Router
- Bootstrap
- Sass
- HTML5
- CSS3
- JavaScript

Backend

- Node.js
- Express
- Sequelize
- MySQL / MariaDB
- Nodemailer

Outils

- Visual Studio Code
- Git
- GitHub
- Figma
- MySQL Workbench

⸻

Architecture du projet

Langmar_Bastien_Devoir_trouve_ton_artisan/
│
├── backend/
│ ├── config/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ ├── seed.js
│ ├── package.json
│ └── .env
│
├── trouve-ton-artisan/
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── styles/
│ │ ├── App.js
│ │ └── index.js
│ ├── package.json
│ └── package-lock.json
│
├── .gitignore
└── README.md

⸻

Prérequis

Avant d’installer le projet, il est nécessaire d’avoir installé :

- Node.js
- npm
- MySQL ou MariaDB
- Git

Vérifier les installations :

node -v
npm -v
git --version

⸻

Installation

1. Cloner le projet

Depuis un terminal :

git clone https://github.com/emry5/Langmar_Bastien_Devoir_trouve_ton_artisan.git

Puis :

cd Langmar_Bastien_Devoir_trouve_ton_artisan

⸻

Installation du frontend

Se placer dans le dossier frontend :

cd trouve-ton-artisan

Installer les dépendances :

npm install

Puis revenir à la racine :

cd ..

⸻

Installation du backend

Se placer dans le dossier backend :

cd backend

Installer les dépendances :

npm install

Puis revenir à la racine :

cd ..

⸻

Configuration de la base de données

Le projet utilise une base de données MySQL / MariaDB.

Créer une base de données nommée :

trouve_ton_artisan

Les scripts SQL de création et de population de la base de données sont fournis avec le projet.

⸻

Configuration du backend

Le backend utilise des variables d’environnement pour les informations sensibles.

Créer un fichier :

backend/.env

Exemple de configuration :

DB_HOST=localhost
DB_PORT=3306
DB_NAME=trouve_ton_artisan
DB_USER=root
DB_PASSWORD=votre_mot_de_passe
SMTP_HOST=votre_serveur_smtp
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=votre_adresse_email
SMTP_PASSWORD=votre_mot_de_passe_email

Ne jamais publier les identifiants réels dans GitHub.

Le fichier .env est exclu du dépôt grâce au .gitignore.

⸻

Lancer le backend

Depuis le dossier backend :

cd backend

Puis :

node server.js

Le serveur démarre sur :

http://localhost:5001

L’API des artisans est accessible avec :

http://localhost:5001/api/artisans

Pour récupérer un artisan précis :

http://localhost:5001/api/artisans/1

⸻

Lancer le frontend

Dans un deuxième terminal, depuis la racine du projet :

cd trouve-ton-artisan

Puis :

npm start

L’application est accessible à :

http://localhost:3000

⸻

Fonctionnement de l’application

Le parcours utilisateur est le suivant :

Accueil
↓
Choix d'une catégorie
↓
Recherche / liste des artisans
↓
Fiche artisan
↓
Formulaire de contact
↓
API Node.js / Express
↓
Base de données MySQL
↓
Envoi du message par e-mail

⸻

API

L’API permet notamment de :

Récupérer tous les artisans

GET /api/artisans

Récupérer un artisan

GET /api/artisans/:id

Envoyer un formulaire de contact

POST /api/contact

Les données du formulaire sont vérifiées côté serveur avant leur enregistrement dans la base de données.

⸻

Sécurité

Plusieurs mesures de sécurité sont mises en place :

- utilisation de variables d’environnement pour les informations sensibles ;
- exclusion du fichier .env du dépôt Git ;
- validation des données reçues par l’API ;
- vérification de l’identifiant de l’artisan ;
- vérification de l’existence de l’artisan ;
- limitation de la taille des requêtes JSON ;
- utilisation de codes HTTP adaptés ;
- absence de route publique permettant de récupérer les messages de contact ;
- clé étrangère entre les contacts et les artisans ;
- messages d’erreur génériques afin de ne pas exposer d’informations techniques sensibles.

⸻

Accessibilité

Le site a été développé avec une approche mobile-first et en prenant en compte les recommandations d’accessibilité.

Les principaux éléments pris en compte sont notamment :

- utilisation de labels pour les champs de formulaire ;
- textes alternatifs pour les images ;
- navigation au clavier ;
- structure HTML sémantique ;
- indications accessibles pour les messages d’erreur ;
- contraste des couleurs ;
- adaptation responsive aux différentes tailles d’écran.

⸻

Responsive design

L’application est adaptée aux différents supports :

- smartphone ;
- tablette ;
- ordinateur.

Les interfaces ont été conçues dans Figma avant leur intégration avec React.

⸻

Validation

Le code HTML a été vérifié avec le validateur W3C.

La validation réalisée n’a pas relevé d’erreurs ou d’avertissements sur les pages contrôlées.

⸻

Design

L’identité visuelle du projet reprend les principes graphiques demandés par la Région Auvergne-Rhône-Alpes :

- couleurs fournies dans le brief de mission ;
- police Graphik ;
- logo fourni ;
- favicon fourni ;
- organisation générale inspirée du site de la Région.

⸻

Déploiement

Le site est hébergé en ligne sur o2switch.

Site

http://laba8455.odns.fr

API

http://laba8455.odns.fr/api/artisans

⸻

GitHub

Le code source du projet est disponible sur GitHub :

https://github.com/emry5/Langmar_Bastien_Devoir_trouve_ton_artisan

⸻

Commandes principales

Installer le projet

git clone https://github.com/emry5/Langmar_Bastien_Devoir_trouve_ton_artisan.git
cd Langmar_Bastien_Devoir_trouve_ton_artisan

Installer le frontend

cd trouve-ton-artisan
npm install

Installer le backend

cd ../backend
npm install

Lancer le backend

node server.js

Lancer le frontend

Dans un autre terminal :

cd trouve-ton-artisan
npm start

Créer une version de production du frontend

cd trouve-ton-artisan
npm run build

⸻

Auteur

Bastien Langmar

Projet réalisé dans le cadre d’un projet de développement web.

⸻

Liens

- Site en ligne : http://laba8455.odns.fr
- GitHub : https://github.com/emry5/Langmar_Bastien_Devoir_trouve_ton_artisan
