import create from '../controllers/authors/create.js'
import read from '../controllers/authors/read.js'
import one from '../controllers/authors/one.js'

import { Router } from 'express'
let router = Router()

router.post('/',create)
router.get('/',read)
router.get('/:author_id',one)
//router.put('/:id',(req,res,next)=> res.status(200).send('autor modificado'))
//router.delete('/:id',(req,res,next)=> res.status(200).send('autor eliminado'))

export default router