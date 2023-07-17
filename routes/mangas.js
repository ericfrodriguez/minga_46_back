import { Router } from "express"
import passport from "../middlewares/passport.js"
import create from "../controllers/mangas/create.js"
import read from '../controllers/mangas/read.js'
import readOne from '../controllers/mangas/readOne.js'
import update from '../controllers/mangas/update.js'
import deleteOne from '../controllers/mangas/deleteOne.js'
const manga_router = Router()

manga_router.post('/',passport.authenticate('jwt',{ session:false }),create)
manga_router.get('/', read)
manga_router.get('/:id', readOne)
manga_router.put('/:id', update)
manga_router.delete('/:id', deleteOne)
//manga_router.put()
//manga_router.delete()

export default manga_router