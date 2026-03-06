import express from 'express';
const listeAdmin=[
    {'nom':'admin1','prenom':'admin1'},
    {'nom':'admin2','prenom':'admin2'}]
export const getAllAdmins=(req, res)=>{
    res.json(listeAdmin)
    console.log(listeAdmin)
}
export const getAdminById=(req, res)=>{
    res.json(listeAdmin[req.params.id])
    console.log(listeAdmin[req.params.id])
}
export const adddadmin=(req, res)=>{
    res.json({message:'admin ajoute'})
    console.log(req.body)
}

export const updateAdmin=(req, res)=>{
    res.json({message:'admin modifie'})
}
export const delAdmin=(req, res)=>{
    res.json({message:'admin supprime'})
}
export default {getAllAdmins,getAdminById,adddadmin,updateAdmin,delAdmin}