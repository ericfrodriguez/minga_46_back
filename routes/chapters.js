import { Router } from "express"
import read from '../controllers/chapters/read.js'
import passport from "../middlewares/passport.js"

const chapter_router = Router()

//chapter_router.post()
chapter_router.get('/',passport.authenticate('jwt',{ session:false }),read)
//chapter_router.put()
//chapter_router.delete()

export default chapter_router