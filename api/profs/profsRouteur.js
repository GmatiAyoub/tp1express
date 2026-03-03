import express, { Router } from 'express'

const routeur =express.Router()
const listeprof=[
    {'nom':'akram','prenom':'khattabi'},
    {'nom':'chedli','prenom':'chedliii'},
    {'nom':'med ali','prenom':'ben selem'},]

routeur.get('/',(req, res)=>{
    res.json(listeprof)
    console.log(listeprof)
})
routeur.get('/:id',(req, res)=>{
    res.json(listeprof[req.params.id])
    console.log(listeprof[req.params.id])
})
routeur.post('/',(req, res)=>{
    res.json({message:'prof ajoute'})
    console.log(req.body)
})
routeur.put('/:id',(req, res)=>{
    res.json({message:'prof modifie'})
})
routeur.delete('/:id',(req, res)=>{
    res.json({message:'prof supprime'})
})
export default routeur