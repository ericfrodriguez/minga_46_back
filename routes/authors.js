//acá voy a definir los endpoints de los autores
//y los voy a exportar para poder utilizarlos en el enrrutador PRINCIPAL
import { Router } from 'express'
import read from '../controllers/authors/read.js'
let router = Router()

//router.post('/',(req,res,next)=> res.status(200).send('autor creado'))
router.get('/',read)
//router.put('/:id',(req,res,next)=> res.status(200).send('autor modificado'))
//router.delete('/:id',(req,res,next)=> res.status(200).send('autor eliminado'))

export default router