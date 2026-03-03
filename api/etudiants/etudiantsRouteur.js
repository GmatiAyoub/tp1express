import express from 'express'

const routeur =express.Router()

routeur.get('/',(req, res)=>{
    res.json({listeEtudiants})
    console.log(req.body)
})
routeur.get('/:id',(req, res)=>{
    res.json({listeEtudiants:[req.params.id]})
    console.log(req.body)
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