const express = require('express');
const app = express();
const port=3000

app.listen(port,()=>console.log(`le serveur  est en ecoute sur le port 3000`))
const listeEtudiants=[
    {'nom':'ayoub','prenom':'gmati'},
    {'nom':'sara','prenom':'benbrahim'},
    {'nom':'yassine','prenom':'naweli'},]
app.get('/etudiant',(req, res)=>{
    res.json({listeEtudiants})
})
app.post('/etudiant',(req, res)=>{
    res.json({message:'etudiant ajoute'})
})
app.put('/etudiant/:id',(req, res)=>{
    res.json({message:'etudiant modifie'})
})
app.delete('/etudiant/:id',(req, res)=>{
    res.json({message:'etudiant supprime'})
})