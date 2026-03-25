import express from 'express';
export const getAlletudiants=(req, res)=>{
    res.json({donnees: listeetudiant})
    console.log(listeetudiant)
}
export const getetudiantById=(req, res)=>{
    res.json({donnees: listeetudiant[req.params.id] })
    console.log(listeetudiant[req.params.id])
}
export const adddetudiant=(req, res)=>{
    res.json({message:'etudiant ajoute'})
    console.log(req.body)
}

export const updateetudiant=(req, res)=>{
    res.json({message:'etudiant modifie'})
}
export const deletudiant=(req, res)=>{
    res.json({message:'etudiant supprime'})
}
export default {getAlletudiants,getetudiantById,adddetudiant,updateetudiant,deletudiant}