import { Router } from "express"
import passport from "../middlewares/passport.js"
import create from "../controllers/mangas/create.js"

const manga_router = Router()

manga_router.post('/',passport.authenticate('jwt',{ session:false }),/* middlewares necesarios */create)
//manga_router.get()
//manga_router.put()
//manga_router.delete()

export default manga_router