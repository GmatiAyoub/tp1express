// adminRouteur.js - Version corrigée
import express from 'express';
import { 
    getAllAdmins, 
    getAdminById, 
    addAdmin,      
    updateAdmin, 
    delAdmin 
} from './admin.controler.js';

const adminRouteur = express.Router();

adminRouteur.get('/', getAllAdmins);
adminRouteur.get('/:id', getAdminById);
adminRouteur.post('/', addAdmin); 
adminRouteur.put('/:id', updateAdmin);
adminRouteur.delete('/:id', delAdmin);

export default adminRouteur;