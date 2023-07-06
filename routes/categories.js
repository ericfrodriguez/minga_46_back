import { Router } from "express"
import read from '../controllers/categories.js'
const category_router = Router()

//category_router.post()
category_router.get('/', read)
//category_router.put()
//category_router.delete()

export default category_router