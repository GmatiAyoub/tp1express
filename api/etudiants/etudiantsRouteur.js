import express from 'express'

import { getetudiantById } from '../etudiants/etudiants.controler.js'
import { getAlletudiants } from '../etudiants/etudiants.controler.js'
import { adddetudiant } from '../etudiants/etudiants.controler.js'
import { updateetudiant } from '../etudiants/etudiants.controler.js'
import { deletudiant } from '../etudiants/etudiants.controler.js'
const etudiantRouteur =express.Router()


etudiantRouteur.get('/',getAlletudiants)
etudiantRouteur.get('/:id',getetudiantById)
etudiantRouteur.post('/',adddetudiant)
etudiantRouteur.put('/:id',updateetudiant)
etudiantRouteur.delete('/:id',deletudiant)

export default etudiantRouteur 