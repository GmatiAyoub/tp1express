import routeur from './api/admin/adminRouteur.js';
import profsRouteur from './api/profs/profsRouteur.js';
import etudiantsRouteur from './api/etudiants/etudiantsRouteur.js';
import express from 'express'
const app = express();
const port=3000
app.use(express.json())
app.use('/etudiant',etudiantsRouteur)
app.use('/prof',profsRouteur)
app.use('/admin',routeur)
app.listen(port,()=>console.log(`le serveur  est en ecoute sur le port 3000`))

