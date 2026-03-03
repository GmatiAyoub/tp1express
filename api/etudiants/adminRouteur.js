import express from 'express'

const routeur =express.Router()
routeur.get('/',(req, res)=>{
    res.json({listeAdmin})
    console.log(req.body)
})
routeur.get('/:id',(req, res)=>{
    res.json({listeAdmin:[req.params.id]})
    console.log(req.body)
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