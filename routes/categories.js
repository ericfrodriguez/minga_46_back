import { Router } from "express"
import read from '../controllers/categories/read.js'
import passport from '../middlewares/passport.js'

let router = Router()

router.get('/',passport.authenticate('jwt',{session:false}),read)

export default router