import express from 'express';
export const getAllprofs=(req, res)=>{
    res.json(listeprof)
    console.log(listeprof)
}
export const getprofById=(req, res)=>{
    res.json(listeprof[req.params.id])
    console.log(listeprof[req.params.id])
}
export const adddprof=(req, res)=>{
    res.json({message:'prof ajoute'})
    console.log(req.body)
}

export const updateprof=(req, res)=>{
    res.json({message:'prof modifie'})
}
export const delprof=(req, res)=>{
    res.json({message:'prof supprime'})
}
export default {getAllprofs,getprofById,adddprof,updateprof,delprof}