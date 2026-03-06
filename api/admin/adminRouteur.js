import express from 'express'
import { getAdminById } from '../admin/admin.controler.js'
import { getAllAdmins } from '../admin/admin.controler.js'
import { adddadmin } from '../admin/admin.controler.js'
import { updateAdmin } from '../admin/admin.controler.js'
import { delAdmin } from '../admin/admin.controler.js'
const adminRouteur =express.Router()

adminRouteur.get('/',getAllAdmins)
adminRouteur.get('/:id',getAdminById)
adminRouteur.post('/',adddadmin)
adminRouteur.put('/:id',updateAdmin)
adminRouteur.delete('/:id',delAdmin)


export default adminRouteur 