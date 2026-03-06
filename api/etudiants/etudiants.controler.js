import express from 'express';
const listeetudiant=[{
    avatarUrl:
        "https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4855.jpg",
    name: "Ali BEN MOHAMED",
    email: "ali@exemple.com",
    class: "DSI-22",
    },
    {
        avatarUrl: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4855.jpg",
        name: "Sara BEN SALAH",
        email: "sara@exemple.com",
        class: "DSI-21",
    }]
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