import express from 'express'

const routeur =express.Router()

const listeAdmin=[
    {'nom':'admin1','prenom':'admin1'},
    {'nom':'admin2','prenom':'admin2'}]

routeur.get('/',(req, res)=>{
    res.json(listeAdmin)
    console.log(listeAdmin)
})
routeur.get('/:id',(req, res)=>{
    res.json(listeAdmin[req.params.id])
    console.log(listeAdmin[req.params.id])
})
routeur.post('/',(req, res)=>{
    res.json({message:'admin ajoute'})
    console.log(req.body)
})
routeur.put('/:id',(req, res)=>{
    res.json({message:'admin modifie'})
})
routeur.delete('/:id',(req, res)=>{
    res.json({message:'admin supprime'})
})
export default routeur