import express from 'express';
import cors from 'cors';
import sequelize from './config/dataBase.js';
import adminRouteur from './api/admin/adminRouteur.js';
import profsRouteur from './api/profs/profsRouteur.js';
import etudiantsRouteur from './api/etudiants/etudiantsRouteur.js';

const app = express();
const port = 3000;

// Middlewares
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Routes
app.use('/api/admin', adminRouteur);
app.use('/api/prof', profsRouteur);
app.use('/api/etudiant', etudiantsRouteur);

// Démarrage du serveur
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données établie');
        
        await sequelize.sync({ alter: true });
        console.log(' Modèles synchronisés avec la base de données');
        
        app.listen(port, () => console.log(`le serveur est en ecoute sur le port ${port}`));
    } catch (error) {
        console.error(' erreur:', error.message);
    }
};

startServer();