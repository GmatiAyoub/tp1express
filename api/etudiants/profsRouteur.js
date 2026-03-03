import express, { Router } from 'express'

const routeur =express.Router()

routeur.get('/',(req, res)=>{
    res.json({listeprof})
    console.log(req.body)
})
routeur.get('/:id',(req, res)=>{
    res.json({listeprof:[req.params.id]})
    console.log(req.body)
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