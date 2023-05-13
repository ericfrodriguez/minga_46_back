import create from '../controllers/categories/create.js'
import read from '../controllers/categories/read.js'
import one from '../controllers/categories/one.js'
import update from '../controllers/categories/update.js'
import passport from '../middlewares/passport.js'
import destroy from '../controllers/categories/destroy.js'
import destroy_one from '../controllers/categories/destroy_one.js'

import { Router } from "express"
let router = Router()

router.post('/',passport.authenticate('jwt',{session:false}),create)
router.get('/',read)
router.get('/:category_id',passport.authenticate('jwt',{session:false}),one)
router.put('/:id',passport.authenticate('jwt',{session:false}),update)
router.delete('/:name/:color',passport.authenticate('jwt',{session:false}),destroy)
router.delete('/:id',passport.authenticate('jwt',{session:false}),destroy_one)

export default router