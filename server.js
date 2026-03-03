import routeur from './api/etudiants/adminRouteur.js';
import profsRouteur from './api/etudiants/profsRouteur.js';
import etudiantsRouteur from './api/etudiants/etudiantsRouteur.js';
import express from 'express'
const app = express();
const port=3000
    
app.use('/etudiant',etudiantsRouteur)
app.use('/prof',profsRouteur)
app.use('/admin',routeur)
app.listen(port,()=>console.log(`le serveur  est en ecoute sur le port 3000`))
const listeEtudiants=[
    {'nom':'ayoub','prenom':'gmati'},
    {'nom':'sara','prenom':'benbrahim'},
    {'nom':'yassine','prenom':'naweli'},]

const listeprof=[
    {'nom':'akram','prenom':'khattabi'},
    {'nom':'chedli','prenom':'chedliii'},
    {'nom':'med ali','prenom':'ben selem'},]

const listeAdmin=[
    {'nom':'admin1','prenom':'admin1'},
    {'nom':'admin2','prenom':'admin2'}]
