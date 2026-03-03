import express from 'express'

const routeur =express.Router()
const listeEtudiants=[
    {'nom':'ayoub','prenom':'gmati'},
    {'nom':'sara','prenom':'benbrahim'},
    {'nom':'yassine','prenom':'naweli'},]

routeur.get('/',(req, res)=>{
    res.json(listeEtudiants)
    console.log(listeEtudiants)
})
routeur.get('/:id',(req, res)=>{
    res.json(listeEtudiants[req.params.id])
    console.log(listeEtudiants[req.params.id])
})
routeur.post('/',(req, res)=>{
    res.json({message:'etudiant ajoute'})
    console.log(req.body)
})
routeur.put('/:id',(req, res)=>{
    res.json({message:'etudiant modifie'})
})
routeur.delete('/:id',(req, res)=>{
    res.json({message:'etudiant supprime'})
})


export default routeur