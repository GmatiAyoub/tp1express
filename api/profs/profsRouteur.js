import express from 'express'
import { getprofById } from '../profs/profs.controler.js'
import { getAllprofs } from '../profs/profs.controler.js'
import { adddprof } from '../profs/profs.controler.js'
import { updateprof } from '../profs/profs.controler.js'
import { delprof } from '../profs/profs.controler.js'
const profRouteur =express.Router()

profRouteur.get('/',getAllprofs)
profRouteur.get('/:id',getprofById)
profRouteur.post('/',adddprof)
profRouteur.put('/:id',updateprof)
profRouteur.delete('/:id',delprof)


export default profRouteur 