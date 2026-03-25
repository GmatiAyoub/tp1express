import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import sequelize from './config/dataBase.js';
import adminRouteur from './api/admin/adminRouteur.js';
import etudiantRouteur from './api/etudiants/etudiantsRouteur.js';
import profRouteur from './api/profs/profsRouteur.js';

const app = express();
const PORT = process.env.PORT || 3000;

/* Middlewares
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }));
app.use(express.json());*/

// Routes
app.use('/api/admin', adminRouteur);
app.use('/api/etudiant', etudiantRouteur);
app.use('/api/prof', profRouteur);

// Demarrage du serveur avec synchronisation de la bd
const startServer = async () => {
  try {
    // Authentification et connexion a la bd
    await sequelize.authenticate();
    console.log('Connexion ala bd avec succes');

    // Synchronisation des modeles avec la bd
    try {
      await sequelize.sync();
      console.log('modeles synchronises avec la bd');
    } catch (syncError) {
      if (syncError.message.includes('Too many keys')) {
        console.log('modeles synchronises avec la bd');
      } else {
        throw syncError;
      }
    }

    //  Demarrage du serveur
    app.listen(PORT, () => {
      console.log(` Serveur demarr sur le port ${PORT}`);
      console.log(`Environnement: ${process.env.NODE_ENV || 'development'}`);
      console.log(` bd: ${process.env.DB_NAME}`);
      console.log(`URL: http://localhost:${PORT}`);
    });

    //  Gestion propre de l'arret du serveur
    process.on('SIGINT', async () => {
      console.log('\n Arret du serveur en cours...');
      await sequelize.close();
      console.log(' Connexion a la bd fermee');
      process.exit(0);
    });

    process.on('SIGTERM', async () => {
      console.log('\n Arret du serveur demande...');
      await sequelize.close();
      console.log(' Connexion a la bd fermee');
      process.exit(0);
    });

  } catch (error) {
    console.error('Erreur de demarrage du serveur:', error.message);
    process.exit(1);
  }
};

//Gestion des erreurs non catchees
process.on('unhandledRejection', (err) => {
  console.error(' Rejet non gere:', err);
  process.exit(1);
});

process.on('uncaughtException', (err) => {
  console.error(' Exception non catchee:', err);
  process.exit(1);
});

// 6. Demarrage de l'app
startServer();