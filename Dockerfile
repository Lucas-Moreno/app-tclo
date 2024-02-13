# Utilisez une image Node.js comme base
FROM node:17

# Définir le répertoire de travail à /app
WORKDIR /app

# Copier package.json et package-lock.json vers le répertoire de travail
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers du projet vers le répertoire de travail
COPY . .

# Construire l'application
RUN npm run build

# Exposer le port 3000 pour le serveur web
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]