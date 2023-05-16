import create from '../controllers/categories/create.js'
import read from '../controllers/categories/read.js'
import one from '../controllers/categories/one.js'
import destroy from '../controllers/categories/delete.js'
import update from '../controllers/categories/update.js'

import passport from '../middlewares/passport.js'

import { Router } from "express"

let router = Router()

router.post('/',passport.authenticate('jwt',{session:false}),create)
router.get('/',read)
router.get('/:category_id',passport.authenticate('jwt',{session:false}),one)
router.put('/:id',passport.authenticate('jwt',{session:false}),update)
router.delete('/:id',passport.authenticate('jwt',{session:false}),destroy)

export default router