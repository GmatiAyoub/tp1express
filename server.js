import adminRouteur from './api/admin/adminRouteur.js';
import profsRouteur from './api/profs/profsRouteur.js';
import etudiantsRouteur from './api/etudiants/etudiantsRouteur.js';
import express from 'express'
import cors from 'cors'
const app = express();
const port=3000
app.use(cors({origin: 'http://localhost:5173'}));
app.use(express.json())
app.use('/etudiant',etudiantsRouteur)
app.use('/prof',profsRouteur)
app.use('/admin',adminRouteur)
app.listen(port,()=>console.log(`le serveur  est en ecoute sur le port 3000`))

